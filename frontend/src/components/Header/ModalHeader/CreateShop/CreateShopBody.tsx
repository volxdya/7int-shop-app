import { ChangeEvent, FormEvent, useState } from "react"
import { useUserData } from "../../../../store/useUserData";
import { useCreateShop } from "../../../../api/user/createShop";
import { Form } from "./Form/Form";


export function CreateShopBody() {
    const { userData } = useUserData();
    const user_id = userData.id;

    const [titleShopValue, setTitleShopValue] = useState("");
    const [avatarShopValue, setAvatarShopValue] = useState("");

    function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitleShopValue(event.target.value);
    }

    function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
        setAvatarShopValue(event.target.value);
    }

    function clear() {
        setAvatarShopValue("");
        setTitleShopValue("");
    }

    function handleSubmit(event: FormEvent) {
        event.stopPropagation();
        event.preventDefault();

        useCreateShop({ titleShopValue, avatarShopValue, clear, user_id });
    }

    return (
        <Form
            handleSubmit={handleSubmit}
            titleShopValue={titleShopValue}
            handleChangeTitle={handleChangeTitle}
            avatarShopValue={avatarShopValue}
            handleChangeAvatar={handleChangeAvatar}
        />
    )
}