import { currentId } from '../../api/user/currentId';
import { useGetUserShops } from '../../store/useGetUserShops';
import { useUserData } from '../../store/useUserData';
import { CardProduct } from '../../ui/CardProduct/CardProduct';
import { CardShop } from '../../ui/CardShop/CardShop';
import './Profile.css';

export default function Profile() {
    const { userData } = useUserData(currentId());
    const [shops] = useGetUserShops();
    const idUser = currentId();
    console.log(idUser);

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
                        <p className="profile-description upperCase">description</p>
                    </div>
                </div>

                {shops && (
                    <div className="mt-5">
                        <h1 className="upperCase">your stores</h1>
                        <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
                            {shops.map((item) => {
                                return (
                                    <CardShop title={item.title} avatarShop={item.avatarShop} />
                                )
                            })}
                        </div>
                    </div>
                )}

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