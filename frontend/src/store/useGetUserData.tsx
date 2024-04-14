import { currentId } from "../api/user/currentId";
import {useQuery} from 'react-query';

export function useGetUserData() {

    const { data } = useQuery(
        'dataUser',
        () => fetch(`http://localhost:3000/api/get_one_user?id=${currentId()}`).then((response) => response.json()), {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    }
    );

    return { data };
}