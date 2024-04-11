import { useEffect, useState } from "react";
import { user } from "../interfaces/user";
import { getItem } from "../utils/localStorage";
import { jwtDecode } from "jwt-decode";

export function useUserData() {
    const [userData, setUserData] = useState<user>({});

    const token: string | any = getItem("token");

    let decoded: any;

    if (token) {
        decoded = jwtDecode(token);
    }

    useEffect(() => {
        setUserData(decoded);
    }, [token]);

    return { userData };
}