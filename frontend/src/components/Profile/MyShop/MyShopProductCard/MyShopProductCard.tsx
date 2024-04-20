import {Edit} from "../../../../icons/Edit.tsx";
import {Delete} from "../../../../icons/Delete.tsx";
import axios from "axios";
import {api} from "../../../../../env.tsx";

interface Props {
    avatarproduct: string;
    title: string;
    price: number;
    handleShowEdit: () => void;
    id: number;
}


export function MyShopProductCard({avatarproduct, title, price, handleShowEdit, id}: Props) {
    async function deleteProduct(id: number) {
        await axios.get(`${api}/api/delete_product?id=${id}`).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="card-product-shop">
            <img
                src={avatarproduct}
                alt={"товар " + title}/>
            <p className="card-shop-shop">{title}</p>
            <p className="card-title-shop">{title}</p>
            <p className="card-price-shop">{price} ₽</p>
            <div
                className="d-flex justify-content-center gap-3 align-items-center controls-shop-item">
                <button className="edit-button-shop" onClick={handleShowEdit}><Edit/></button>
                <button className="edit-button-shop"
                        onClick={() => {
                            deleteProduct(id)
                        }}
                ><Delete/></button>
            </div>
        </div>
    )
}
