import { useEffect, useState } from "react";
import { user } from "../interfaces/user";

import axios from "axios";
import { api } from "../../env";

export function useUserData(id: number | undefined) {
    const [userData, setUserData] = useState<user>({});
    const [isFetch, setIsFetch] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await axios.get(`${api}/api/get_one_user`, {
                params: {
                    id: id
                }
            }).then((resp) => {
                setIsFetch(true);
                setUserData(resp.data);
            });
        }
        fetchData();

    }, [isFetch]);

    return { userData };
}