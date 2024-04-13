import axios from "axios";
import { api } from "../../../env";

interface Props {
    titleShopValue: string;
    user_id: number | undefined;
    avatarShopValue: string;
    clear: () => void;
}


export function useCreateShop({ titleShopValue, avatarShopValue, user_id, clear }: Props) {
    axios.post(`${api}/api/create_shop`, {
        title: titleShopValue,
        user_id: user_id,
        avatarShop: avatarShopValue
    }).then((resp) => {
        console.log(resp.data);
        clear();
    }).catch((err) => {
        console.log(err);
        clear();
    });
}