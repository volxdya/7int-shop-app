import axios from "axios";
import { api } from "../../../env";
import { setItem } from "../../utils/localStorage";

interface Props {
    password: string;
    login: string;
    clear: () => void;
}

export function useAuth({ password, login, clear }: Props) {

    axios.post(`${api}/api/auth`, {
        passwordUser: password,
        loginUser: login,
    }).then((resp) => {
        clear();
        setItem("token", resp.data.token);
        location.reload();
    }).catch((err) => {
        clear();
        console.log(err);
    }); 
}