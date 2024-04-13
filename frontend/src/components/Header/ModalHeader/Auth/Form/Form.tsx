import { ChangeEvent, FormEvent } from "react";

interface Props {
    handleChangeLogin: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    login: string;
    password: string;
    handleSubmit: (event: FormEvent) => void;

}

export function Form({handleChangePassword, handleChangeLogin, login, password, handleSubmit}: Props) {
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h2 className="text-center pb-3">7int</h2>
                    <input
                        type="text"
                        className="input-modal"
                        placeholder="Enter your login"
                        value={login}
                        onChange={handleChangeLogin}
                    />
                    <input
                        type="password"
                        className="input-modal mt-3"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <p className="text-center pt-3 helper">You need LOG IN. Do not worry. Your data is completely safe. Our highly qualified developers took care of this.</p>
                    <div className="mt-5">
                        <button className="upperCase button-change mt-3">AUTH</button>
                    </div>
                </div>
            </form>
        </div>
    )
}