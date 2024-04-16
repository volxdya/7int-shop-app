import axios from "axios";
import { api } from "../../../env";

interface Props {
    titleShopValue: string;
    user_id: number | undefined;
    avatarShopValue: string;
    request: () => void;
}

export function useCreateShop({ titleShopValue, avatarShopValue, user_id, request }: Props) {
    axios.post(`${api}/api/create_shop`, {
        title: titleShopValue,
        user_id: user_id,
        avatarShop: avatarShopValue
    }).then((resp) => {
        console.log(resp.data);
        request();
    }).catch((err) => {
        console.log(err);
    });
}