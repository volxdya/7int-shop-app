import {CardProduct} from "../../ui/CardProduct/CardProduct.tsx";
import {useQuery} from "react-query";
import {api} from "../../../env.tsx";
import {shop, shops} from "../../interfaces/shop.ts";
import {product, products} from "../../interfaces/product.ts";
import {CardShop} from "../../ui/CardShop/CardShop.tsx";
import {Link} from "react-router-dom";

export default function MainPage() {

    const allProducts = useQuery(
        'dataProductMainPage`',
        () => fetch(`${api}/api/get_all_products`).then((response) => response.json()), {
            refetchInterval: 5000,
            keepPreviousData: true,
            refetchOnWindowFocus: true
        });

    const dataProducts: products = allProducts.data;

    const allShops = useQuery(
        'dataShopsMainPAge',
        () => fetch(`${api}/api/get_all_shops`).then((response) => response.json()), {
            refetchInterval: 5000,
            keepPreviousData: true,
            refetchOnWindowFocus: true
        });

    const dataShops: shops = allShops.data;


    return (
        <>
            <h1 className="mt-4 upperCase">Popular Products</h1>
            <div className='d-flex gap-5 flex-wrap mt-5'>
                <div className="d-flex flex-wrap gap-5">
                    {dataProducts?.map((item: product) => {
                        return (
                            <>
                                <Link to={"/product/" + item.id} key={item.id}>
                                    <CardProduct
                                        key={item.id}
                                        avatarproduct={item.avatarproduct}
                                        price={item.price}
                                        title={item.title}
                                        shop="test"
                                    />
                                </Link>
                            </>
                        )
                    })}
                </div>
            </div>
            <h1 className="upperCase mt-4">Popular stores</h1>

            <div className='d-flex gap-5 flex-wrap mt-5'>
                <div className="d-flex flex-wrap gap-5">
                    {dataShops?.map((item: shop) => {
                        return (
                            <>
                                <CardShop
                                    title={item.title}
                                    key={item.id}
                                    avatarshop={item.avatarshop}
                                />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}