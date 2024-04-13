import './CardShop.css';
interface Props {
    title: string;
    avatarShop: string;
}

export function CardShop({ title, avatarShop }: Props) {
    return (
        <div className="card-shop">
            <div>
                <img
                    src={avatarShop}
                    width={200}
                    height={200}
                    className="image"
                />
                <p className="text-center">{title}</p>
            </div>
        </div>
    )
}