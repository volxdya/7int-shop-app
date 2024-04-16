import './CardProduct.css';

interface Props {
    title: string;
    shop: string;
    avatarproduct: string;
    price: number;
}

export function CardProduct({title, shop, price, avatarproduct}: Props) {
    return (
        <div className="card-product">
            <img src={avatarproduct} />
            <p className="card-shop-title">{shop}</p>
            <p className="card-title">{title}</p>
            <p className="card-price">{price} ₽</p>
        </div>
    )
}