import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useUserData } from '../../../../store/useUserData';
import './myAccount.css';
import { editUser } from '../../../../api/user/editUser';
import { currentId } from '../../../../api/user/currentId';
import { Form } from './Form/Form';

export function MyAccountBody() {
    const { userData } = useUserData(currentId());
    const [loginUser, setLogin] = useState(userData.loginuser);

    const [avatarUser, setAvatar] = useState("");
    const [passwordUser, setPassword] = useState("");
    const [descriptionUser, setDescription] = useState("");
    const [isLoad, setIsLoad] = useState(true);

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