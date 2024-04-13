import './CardShop.css';
interface Props {
    title: string;
    avatarshop: string;
}

export function CardShop({ title, avatarshop }: Props) {
    return (
        <div className="card-shop">
            <div>
                <img
                    src={"" + avatarshop} 
                    width={200}
                    height={200}
                    className="image"
                />
                <p className="text-center">{title}</p>
            </div>
        </div>
    )
}