import './ProductPage.css';
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {api} from "../../../env.tsx";
import {product} from "../../interfaces/product.ts";
import {shop} from "../../interfaces/shop.ts";


export default function ProductPage() {

    const {id} = useParams();
    const dataProduct = useQuery(
        'dataProductPage',
        () => fetch(`${api}/api/get_one_product?id=${id}`).then((response) => response.json()), {
            refetchInterval: 150,
            keepPreviousData: true,
            refetchOnWindowFocus: true
        });

    const productData: product = dataProduct.data;

    const dataShopOnProduct = useQuery(
        'dataShopOnProductPage',
        () => fetch(`${api}/api/get_one_shop?id=${productData.shop_id}`).then((response) => response.json()), {
            keepPreviousData: true,
            refetchOnWindowFocus: true
        });

    const shopData: shop = dataShopOnProduct.data;

    return (
        <>
            {productData && shopData && productData.shop_id && (
                <>
                    <div className="row mt-4">
                        <div className="col-4">
                            <img
                                src={productData.avatarproduct}
                                alt={"image " + productData.title}
                                className="product-page-img"
                            />
                        </div>
                        <div className="col-8 container-description-product">
                            <p className="title-product-page">{productData.title}</p>
                            <p className="shop-product-page">{shopData.title}</p>
                            <p className="category-product-page upperCase">Category: {productData.categoryproduct}</p>
                            <p className="description-product-page upperCase">{productData.descriptionproduct}</p>
                            <p className="price-product-page">{productData.price}₽</p>
                            <button className="button-change button-buy upperCase">Buy</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}