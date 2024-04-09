import { ChangeEvent, FormEvent, useState } from "react"
import { useRegister } from "../../api/user/register";

export function Register() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeLogin(event: ChangeEvent<HTMLInputElement>) {
        setLogin(event.target.value);
    }

    function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function clear() {
        setPassword("");
        setLogin("");
    }


    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        useRegister({ login, password, clear });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Логин" value={login} onChange={handleChangeLogin} />
            <input type="text" placeholder="Пароль" value={password} onChange={handleChangePassword} />

            <button>SEND</button>
        </form>
    )
}