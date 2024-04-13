import { ChangeEvent, FormEvent, useState } from 'react';
import { useUserData } from '../../../../store/useUserData';
import './myAccount.css';
import { editUser } from '../../../../api/user/editUser';
import { currentId } from '../../../../api/user/currentId';

export function MyAccountBody() {
    const [loginUser, setLogin] = useState("");
    const [avatarUser, setAvatar] = useState("");
    const [passwordUser, setPassword] = useState("");
    const [description, setDescription] = useState("");

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

    function clear() {
        setAvatar("");
        setDescription("");
        setPassword("");
        setAvatar("");
    }

    const { userData } = useUserData(currentId());
    const id = userData.id

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        editUser({ id, passwordUser, avatarUser, loginUser, clear });
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        placeholder="Enter login"
                        value={loginUser}
                        onChange={handleChangeLogin}
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter description"
                        value={description}
                        onChange={handleChangeDescription}
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter avatar"
                        value={avatarUser}
                        onChange={handleChangeAvatar}
                    />
                    <input
                        type="password"
                        className="input-modal mt-3"
                        placeholder="Enter password"
                        value={passwordUser}
                        onChange={handleChandePassword}
                    />
                    <button className="upperCase button-change mt-5">Change</button>
                </div>
            </form>

        </div>
    )
}