import axios from "axios";
import { api } from "../../../env";

interface Props {
    loginUser: string;
    passwordUser: string;
    avatarUser: string;
    id: number | undefined;
}

export function editUser({ loginUser, passwordUser, avatarUser, id }: Props) {
    axios.put(`${api}/api/update_user`, {
        loginUser: loginUser,
        passwordUser: passwordUser,
        avatarUser,
        id: id
    }).then((resp) => {
        console.log(resp.data);
    }).catch((err) => {
        console.log(err);
    })
}