import { currentId } from "../../../api/user/currentId";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { CardShop } from "../../../ui/CardShop/CardShop";
import { shop } from "../../../interfaces/shop";
import {api} from "../../../../env.tsx";
import uniqid from 'uniqid';

export function Shops() {

    const { isLoading, error, data } = useQuery(
        'repoData',
        () => fetch(`${api}/api/get_user_shops?user_id=${currentId()}`).then((response) => response.json()), {
        refetchOnWindowFocus: true,
        keepPreviousData: true,
        refetchInterval: 3000
    }
    );
    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка:</p>;
    return (
        <>
            {data.length > 0 && (
                <div className="mt-5">
                    <h1 className="upperCase">your stores</h1>
                    <div className='d-flex gap-5 flex-wrap mt-5'>
                        <div className="d-flex flex-wrap gap-5">
                            {data.map((item: shop) => {
                                return (
                                    <>
                                        <Link to={"/my-shop/" + item.id} key={uniqid()} className="my-shop-link">
                                            <CardShop
                                                title={item.title}
                                                avatarshop={item.avatarshop}
                                                key={uniqid()}
                                            />
                                        </Link>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}