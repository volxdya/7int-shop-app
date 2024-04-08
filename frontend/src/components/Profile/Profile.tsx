import { CardProduct } from '../../ui/CardProduct/CardProduct';
import './Profile.css';

export function Profile() {
    return (
        <>
            <h1 className="mt-3">PROFILE</h1>
            <div className="row mt-5">
                <div className="col-2">
                    <img
                        src="https://sun9-41.userapi.com/impg/AOmhNBr8F6JzrV9JP9jvDy3C7beWlHJu0GkA7w/2iNXYNnJl3U.jpg?size=510x680&quality=95&sign=d186a1f497e240561a9f411ea228ba12&c_uniq_tag=j0xABRyg5Pzl0IbdiN84TLksOeHGpGWtPjn9DuFGD5I&type=album"
                        height={225}
                        width={225}
                        className="image"
                    />
                </div>
                <div className="col-7 mx-5">
                    <h1 className="profile-username">Lagosta</h1>
                    <p className="profile-description">SOME DESCRIPTION SOME DESCRIPTION SOME DESCRIPTION SOME DESCRIPTION SOME DESCRIPTION SOME DESCRIPTION SOME DESCRIPTION SOME DESCRIPTION </p>
                </div>
            </div>
            <div className="mt-5">
                <h1>BUY PRODUCTS</h1>
                <CardProduct />
            </div>
        </>
    );
}