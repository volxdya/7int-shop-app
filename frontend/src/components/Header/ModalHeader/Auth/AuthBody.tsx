import { ChangeEvent, FormEvent, useState } from "react"
import { useAuth } from "../../../../api/user/auth";
import { Form } from "./Form/Form";


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
        useAuth({ login, password, clear });
    }

    return (
        <Form
            handleChangeLogin={handleChangeLogin}
            handleChangePassword={handleChangePassword}
            handleSubmit={handleSubmit}
            login={login}
            password={password}
        />
    )
}