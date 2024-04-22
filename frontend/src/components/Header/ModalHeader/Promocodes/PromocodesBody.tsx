import './promocodes.css';
import {useQuery} from "react-query";
import {api} from "../../../../../env.tsx";
import {currentId} from "../../../../api/user/currentId.ts";
import {Promo, Promos} from "../../../../interfaces/promo.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";


export function PromocodesBody() {
    const [title, setTitle] = useState("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        axios.get(`${api}/api/get_promocode_by_input?title=${title}`).then((response) => {
            if (response.data !== "") {
                if (!response.data.isactivated) {
                    axios.post(`${api}/api/use_promocode`, {
                        author_id: currentId(),
                        id: response.data.id,
                    }).then((response) => {
                        console.log(response.data);
                    }).catch((error) => {
                        console.log(error);
                    });
                }
                else {
                    console.log("Промик есть, но он активирован");
                }
            } else {
                console.log("Промика нет")
            }
        }).catch((error) => {
            console.log(error);
        })
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
                        <button className="upperCase button-change mt-4">Activate</button>
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