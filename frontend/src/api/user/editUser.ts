import axios from "axios";
import { api } from "../../../env";

interface Props {
    loginUser: string;
    passwordUser: string;
    avatarUser: string;
    clear: () => void;
    id: number | undefined;
}

export function editUser({ loginUser, passwordUser, avatarUser, id, clear }: Props) {
    axios.put(`${api}/api/update_user`, {
        loginUser: loginUser,
        passwordUser: passwordUser,
        avatarUser,
        id: id
    }).then(() => {
        location.reload();
        clear();
    }).catch(() => {
        clear();
    })
}