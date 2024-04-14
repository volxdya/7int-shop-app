import { useQuery } from "react-query";
import { currentId } from "../api/user/currentId";

export function useGetUserData() {

    const { data } = useQuery(
        'dataUser',
        () => fetch(`http://localhost:3000/api/get_one_user?id=${currentId()}`).then((response) => response.json()), {
        refetchOnWindowFocus: true,
        keepPreviousData: true,
        refetchInterval: 3000
    }
    );

    return { data };
}