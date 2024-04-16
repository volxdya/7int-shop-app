
import { useState } from 'react';
import './MyShop.css';
import { ModalShop } from './ModalShop/ModalShop';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { api } from '../../../../env';
import {Delete} from "../../../icons/Delete.tsx";
import {Edit} from "../../../icons/Edit.tsx";
import {shop} from "../../../interfaces/shop.ts";
import {product, products} from "../../../interfaces/product.ts";
import axios from "axios";

export default function MyShop() {

    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState("");

    const handleClose = () => {
        setShow(false);
        setCurrent("");
    };

    const handleShowChange = () => {
        setShow(true);
        setCurrent("change");
    };

    const handleShowAdd = () => {
        setShow(true);
        setCurrent("add");
    }

    const handleShowEdit = () => {
        setShow(true);
        setCurrent("edit");
    }

    const { id } = useParams();

    const dataShop = useQuery(
        'dataShop',
        () => fetch(`${api}/api/get_one_shop?id=${id}`).then((response) => response.json()), {
            refetchInterval: 150,
            keepPreviousData: true,
            refetchOnWindowFocus: true
    });

    const shopData: shop = dataShop.data;

    const dataProduct = useQuery(
        'dataProduct',
        () => fetch(`${api}/api/get_products_shop?shop_id=${id}`).then((response) => response.json()), {
            refetchInterval: 1000,
            keepPreviousData: true,
            refetchOnWindowFocus: true
        });

    const productData: products = dataProduct.data;

    async function deleteProduct(id: number) {
        await axios.get(`${api}/api/delete_product?id=${id}`).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            {shopData && (
                <div className="d-flex justify-content-center mt-4">
                    <div>
                        <div className="d-flex justify-content-center">
                            <img
                                src={shopData.avatarshop}
                                alt="qwe"
                                height={200}
                                width={200}
                                className="image"
                            />
                        </div>
                        <h2 className="text-center mt-4">YOUR SHOP - {shopData.title}</h2>
                        <button className="upperCase button-change mt-2"
                                onClick={handleShowChange}
                        >Change data
                        </button>
                    </div>
                </div>
            )}

            <div className='d-flex gap-5 flex-wrap mt-5'>
                <div className="d-flex flex-wrap gap-5">

                    <div className="card-product-shop d-flex justify-content-center align-items-center">
                        <button className="add-button-shop" onClick={handleShowAdd}>+</button>
                    </div>

                    {productData?.map((item: product) => {
                        return (
                            <div className="card-product-shop">
                                <img
                                    src={item.avatarproduct}
                                    alt=""/>
                                <p className="card-shop-shop">{shopData.title}</p>
                                <p className="card-title-shop">{item.title}</p>
                                <p className="card-price-shop">{item.price} ₽</p>
                                <div
                                    className="d-flex justify-content-center gap-3 align-items-center controls-shop-item">
                                    <button className="edit-button-shop" onClick={handleShowEdit}><Edit/></button>
                                    <button className="edit-button-shop"
                                            onClick={() => {
                                                deleteProduct(item.id)
                                            }}
                                    ><Delete/></button>
                                </div>
                            </div>
                        );
                    })}


                    <ModalShop
                        current={current}
                        setCurrent={setCurrent}
                        handleClose={handleClose}
                        show={show}
                    />
                </div>
            </div>
        </>
    )
}