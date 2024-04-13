import { jwtDecode } from "jwt-decode";
import { getItem } from "../../utils/localStorage";
import { user } from "../../interfaces/user";

export function currentId() {
    const token: string | null = getItem("token");

    let decoded: user;
    if (token) {
        decoded = jwtDecode(token);
        return decoded.id;
    }
}