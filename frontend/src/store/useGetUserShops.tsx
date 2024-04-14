import axios from "axios";
import { useUserData } from "./useUserData";
import { api } from "../../env";
import { currentId } from "../api/user/currentId";

export async function useGetUserShops() {

    const { userData } = useUserData(currentId());
    return axios.get(`${api}/api/get_user_shops`, {
        params: {
            user_id: userData.id
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        });
}