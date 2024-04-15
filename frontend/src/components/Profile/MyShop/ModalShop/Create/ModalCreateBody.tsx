import {useParams} from "react-router-dom";
import {FormEvent} from "react";
import {api} from "../../../../../../env.tsx";
import axios from "axios";

export function ModalCreateBody() {

    const { id } = useParams();

    console.log(id)

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        axios.post(`${api}/api/create_product`, {
            shop_id: id,
            title: "test",
            descriptionProduct: "test",
            price: 5000,
            avatarProduct: "test"
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        placeholder="enter title"
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter description"
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter avatar"
                    />
                    <input
                        type="number"
                        className="input-modal mt-3"
                        placeholder="Enter price"
                    />
                    <button className="upperCase button-change mt-5">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}