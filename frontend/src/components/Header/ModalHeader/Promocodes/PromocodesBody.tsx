import './promocodes.css';
import {useQuery} from "react-query";
import {api} from "../../../../../env.tsx";
import {currentId} from "../../../../api/user/currentId.ts";
import {Promo, Promos} from "../../../../interfaces/promo.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {Alert} from "react-bootstrap";


export function PromocodesBody() {
    const [title, setTitle] = useState("");
    const [errorPromo, setErrorPromo] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (title == "") {
            setErrorPromo("You cannot enter an empty promocode");
        } else {
            axios.get(`${api}/api/get_promocode_by_input?title=${title}`).then((response) => {
                if (response.data !== "") {
                    if (!response.data.isactivated) {
                        axios.post(`${api}/api/use_promocode`, {
                            author_id: currentId(),
                            id: response.data.id,
                        }).then(() => {
                            setErrorPromo("");
                            setTitle("");
                            setSuccess("Success!");
                        }).catch((error) => {
                            console.log(error);
                        });
                    }
                    else {
                        setErrorPromo("The promocode has already been activated previously");
                        setSuccess("");
                    }
                } else {
                    setErrorPromo("There is no promo code");
                    setSuccess("");
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }


    const promo = useQuery(
        'dataPromocodes',
        () => fetch(`${api}/api/get_user_promocodes?author_id=${currentId()}`).then((response) => response.json()), {
            refetchOnWindowFocus: true,
            keepPreviousData: true,
            refetchInterval: 3000
        }
    );

    const promoArr: Promos = promo.data;

    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            className="input-modal"
                            placeholder="Enter promocode"
                            value={title}
                            onChange={handleChange}
                        />
                        {errorPromo !== "" && !success && (
                            <div className="mt-4">
                                <Alert key="error" variant="danger">
                                    {errorPromo}
                                </Alert>
                            </div>
                        )}

                        {success && errorPromo === "" && (
                            <div className="mt-4">
                                <Alert key="success" variant="success">
                                    {success}
                                </Alert>
                            </div>
                        )}
                        <button className="upperCase button-change mt-2">Activate</button>
                    </div>
                </form>
            </div>
            <p className="mt-3 activated-promocodes upperCase">Activated Promocodes:</p>
            {promoArr?.map((item: Promo) => {
                return (
                    <p>{item.title}</p>
                )
            })}
        </>
    )
}