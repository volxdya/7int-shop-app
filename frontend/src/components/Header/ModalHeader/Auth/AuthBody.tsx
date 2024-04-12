import { ChangeEvent, FormEvent, useState } from "react"
import { useAuth } from "../../../../api/user/auth";

export function AuthBody() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeLogin(event: ChangeEvent<HTMLInputElement>) {
        setLogin(event.target.value);
    }

    function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function clear() {
        setLogin("");
        setPassword("");
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();
        useAuth({login, password, clear});
    }

    return (
        <>
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
                        <button className="upperCase button-change mt-5">AUTH</button>
                    </div>
                </form>
            </div>
        </>
    )
}