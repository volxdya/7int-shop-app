import axios from "axios";
import { api } from "../../../env";

interface Props {
    password: string;
    login: string;
    clear: () => void;
}


export function useRegister({ password, login, clear }: Props) {
    axios.post(`${api}/api/registration`, {
        passwordUser: password,
        loginUser: login,
    }).then(() => {
        clear();
    }).catch(() => {
        clear();
    });
}