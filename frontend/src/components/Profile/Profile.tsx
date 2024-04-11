import { useUserData } from '../../store/useUserData';
import { CardProduct } from '../../ui/CardProduct/CardProduct';
import './Profile.css';

export function Profile() {
    const { userData } = useUserData();
    console.log(userData.id);

    return (
        <>
            <h1 className="mt-3 upperCase">Profile</h1>
            <div className="row mt-5">
                <div className="col-2">
                    <img
                        src={userData.avatar}
                        alt={"User's avatar " + userData.login}
                        height={225}
                        width={225}
                        className="image"
                    />
                </div>
                <div className="col-7 mx-5">
                    <h1 className="profile-username">{userData.login}</h1>
                    <p className="profile-description upperCase">description</p>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="upperCase">Buy products</h1>
                <CardProduct />
            </div>
        </>
    );
}