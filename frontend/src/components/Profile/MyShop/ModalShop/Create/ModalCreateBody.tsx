import {ChangeEvent, FormEvent, useState} from "react";
import {api} from "../../../../../../env.tsx";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Alert} from "react-bootstrap";

export function ModalCreateBody() {
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [avatar, setAvatar] = useState("");
    const [count, setCount] = useState("");
    const [category, setCategory] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    function handleTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleAvatar(event: ChangeEvent<HTMLInputElement>) {
        setAvatar(event.target.value);
    }

    function handleDescription(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }

    function handlePrice(event: ChangeEvent<HTMLInputElement>) {
        setPrice(event.target.value);
    }

    function handleCategory(event: ChangeEvent<HTMLInputElement>) {
        setCategory(event.target.value);
    }

    function handleCount(event: ChangeEvent<HTMLInputElement>) {
        setCount(event.target.value);
    }

    function request(){
        setTitle("");
        setDescription("");
        setPrice("");
        setAvatar("");
        setIsSuccess(true);
        setCount("");
        setCategory("");
        setInterval(() => {
            setIsSuccess(false);
        }, 5000);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        axios.post(`${api}/api/create_product`, {
            shop_id: id,
            title: title,
            descriptionProduct: description,
            price: price,
            avatarProduct: avatar,
            categoryProduct: category,
            count: count
        }).then(response => {
            request();
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
                        value={title}
                        onChange={handleTitle}
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter description"
                        value={description}
                        onChange={handleDescription}
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter avatar"
                        value={avatar}
                        onChange={handleAvatar}
                    />
                    <input
                        type="number"
                        className="input-modal mt-3"
                        placeholder="Enter price"
                        value={price}
                        onChange={handlePrice}
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter category"
                        value={category}
                        onChange={handleCategory}
                    />
                    <input
                        type="number"
                        className="input-modal mt-3"
                        placeholder="Enter count"
                        value={count}
                        onChange={handleCount}
                    />
                    {isSuccess && (
                        <div className="mt-4">
                            <Alert key="success" variant="success">
                                Success!
                            </Alert>
                        </div>
                    )}
                    <button className="upperCase button-change mt-3">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}