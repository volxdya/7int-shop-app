import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './myAccount.css';
import { editUser } from '../../../../api/user/editUser';
import { Form } from './Form/Form';
import { useGetUserData } from '../../../../store/useGetUserData';

export function MyAccountBody() {
    const userData = useGetUserData().data;
    const [loginUser, setLogin] = useState(userData.loginuser);

    const [avatarUser, setAvatar] = useState("");
    const [passwordUser, setPassword] = useState("");
    const [descriptionUser, setDescription] = useState("");

    function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
        setAvatar(event.target.value);
    }

    function handleChandePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleChangeDescription(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }

    function handleChangeLogin(event: ChangeEvent<HTMLInputElement>) {
        setLogin(event.target.value);
    }

    useEffect(() => {
        setLogin(userData.loginuser);
        setAvatar(userData.avataruser);
        setDescription(userData.descriptionuser);
    }, []);

    function clear() {
        setAvatar("");
        setDescription("");
        setPassword("");
        setAvatar("");
    }

    const id = userData.id;

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        editUser({ id, passwordUser, avatarUser, loginUser, clear, descriptionUser });
    }

    return (
        <Form
            handleChandePassword={handleChandePassword}
            handleChangeAvatar={handleChangeAvatar}
            handleSubmit={handleSubmit}
            handleChangeDescription={handleChangeDescription}
            handleChangeLogin={handleChangeLogin}
            loginUser={loginUser}
            avatarUser={avatarUser}
            passwordUser={passwordUser}
            descriptionUser={descriptionUser}
        />
    )
}