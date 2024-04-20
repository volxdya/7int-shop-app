import { ChangeEvent, FormEvent } from "react";

interface Props {
    handleSubmit: (event: FormEvent) => void;
    handleChangeLogin: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChandePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChangeDescription: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChangeAvatar: (event: ChangeEvent<HTMLInputElement>) => void;
    loginUser: string;
    passwordUser: string;
    descriptionUser: string;
    avatarUser: string;
}

export function Form({
    handleSubmit,
    loginUser,
    descriptionUser,
    passwordUser,
    avatarUser,
    handleChandePassword,
    handleChangeAvatar,
    handleChangeDescription,
    handleChangeLogin
}: Props) {
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        placeholder="enter username"
                        value={loginUser}
                        onChange={handleChangeLogin}
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter description"
                        value={descriptionUser}
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
                    <button className="upperCase button-change mt-5">
                        Change
                    </button>
                    <button type="button" className="upperCase button-change mt-3 warning-btn" onClick={() => console.log("Скоро...")}>
                        Delete Account (Soon)
                    </button>
                </div>
            </form>
        </div>
    );
}