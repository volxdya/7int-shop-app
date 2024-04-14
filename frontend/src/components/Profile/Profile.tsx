
import { useGetUserData } from '../../store/useGetUserData';
import { CardProduct } from '../../ui/CardProduct/CardProduct';
import './Profile.css';
import { Shops } from './Shops/Shops';

export default function Profile() {
    const userData = useGetUserData().data;

    if (userData) {
        return (
            <>
                <h1 className="mt-3 upperCase">Profile</h1>
                <div className="row mt-5">
                    <div className="col-2">
                        <img
                            src={userData.avataruser}
                            alt={"User's avatar " + userData.loginuser}
                            height={225}
                            width={225}
                            className="image"
                        />
                    </div>
                    <div className="col-7 mx-5">
                        <h1 className="profile-username">{userData.loginuser}</h1>
                        <p className="profile-description upperCase">{userData.descriptionuser}</p>
                    </div>
                </div>

                <Shops />

                <div className="mt-5">
                    <h1 className="upperCase">Buy products</h1>
                    <CardProduct />
                </div>

            </>
        );
    }

    return (
        <div>нет токена</div>
    )
}