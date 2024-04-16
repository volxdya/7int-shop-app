import { ChangeEvent, FormEvent, useState } from "react"
import { useCreateShop } from "../../../../api/user/createShop";
import { Form } from "./Form/Form";
import { useGetUserData } from "../../../../store/useGetUserData";


export function CreateShopBody() {
    const userData = useGetUserData().data;
    const user_id = userData.id;

    const [titleShopValue, setTitleShopValue] = useState("");
    const [avatarShopValue, setAvatarShopValue] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitleShopValue(event.target.value);
    }

    function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
        setAvatarShopValue(event.target.value);
    }

    function request() {
        setAvatarShopValue("");
        setTitleShopValue("");
        setIsSuccess(true);
    }

    function handleSubmit(event: FormEvent) {
        event.stopPropagation();
        event.preventDefault();

        useCreateShop({ titleShopValue, avatarShopValue, request, user_id });
    }

    return (
        <Form
            handleSubmit={handleSubmit}
            titleShopValue={titleShopValue}
            handleChangeTitle={handleChangeTitle}
            avatarShopValue={avatarShopValue}
            handleChangeAvatar={handleChangeAvatar}
            isSuccess={isSuccess}
        />
    )
}