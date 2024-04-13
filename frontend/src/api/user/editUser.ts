import axios from "axios";
import { api } from "../../../env";

interface Props {
    loginUser: string;
    passwordUser: string;
    avatarUser: string;
    clear: () => void;
    id: number | undefined;
    descriptionUser: string;
}

export function editUser({ loginUser, passwordUser, avatarUser, id, clear, descriptionUser }: Props) {
    axios.put(`${api}/api/update_user`, {
        loginUser: loginUser,
        passwordUser: passwordUser,
        avatarUser: avatarUser,
        descriptionUser: descriptionUser,
        id: id
    }).then(() => {
        location.reload();
        clear();
    }).catch(() => {
        clear();
    })
}