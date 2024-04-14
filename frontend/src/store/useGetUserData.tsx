import { currentId } from "../api/user/currentId";
import {useQuery} from 'react-query';
import {api} from "../../env.tsx";

export function useGetUserData() {

    const { data } = useQuery(
        'dataUser',
        () => fetch(`${api}/api/get_one_user?id=${currentId()}`).then((response) => response.json()), {
    }
    );

    return { data };
}