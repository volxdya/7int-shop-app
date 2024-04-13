import { useEffect, useState } from "react";
import { shops } from "../interfaces/shop";
import axios from "axios";
import { useUserData } from "./useUserData";
import { api } from "../../env";
import { currentId } from "../api/user/currentId";

export function useGetUserShops() {
    const [shops, setShops] = useState<shops>([]);
    const [isFetch, setIsFetch] = useState(false);
    const { userData } = useUserData(currentId());
    useEffect(() => {
        axios.get(`${api}/api/get_user_shops`, {
            params: {
                user_id: userData.id
            }
        }).then((resp) => {
            console.log(resp.data);
            setIsFetch(true);
            setShops(resp.data);
        }).catch((err) => {
            setIsFetch(false);
            console.log(err);
        });
    }, [isFetch]);

    return [shops];
}