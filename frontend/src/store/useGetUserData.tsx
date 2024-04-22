import { currentId } from "../api/user/currentId";
import { useQuery } from 'react-query';
import { api } from "../../env.tsx";

export function useGetUserData() {
    const token = localStorage.getItem("token");
    
    const fn = () => {
        if (token) {
            return fetch(`${api}/api/get_one_user?id=${currentId()}`).then((response) => response.json())
        }

        return null;
    }
    
    const { data } = useQuery(
        'dataUser',
        () => fn(),
        {
            refetchInterval: 5000,
            keepPreviousData: true,
            refetchOnWindowFocus: true
    });

    return { data };
}