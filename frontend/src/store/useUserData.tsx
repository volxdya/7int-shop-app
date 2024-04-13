import { useEffect, useState } from "react";
import { user } from "../interfaces/user";

import axios from "axios";
import { api } from "../../env";

export function useUserData(id: number | undefined) {
    const [userData, setUserData] = useState<user>({});

    useEffect(() => {
        axios.get(`${api}/api/get_one_user`, {
            params: {
                id: id
            }
        }).then((resp) => {
            setUserData(resp.data);
        })
    }, []);

    return { userData };
}