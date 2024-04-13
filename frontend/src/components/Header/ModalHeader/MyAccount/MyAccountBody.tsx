import { FormEvent } from 'react';
import { useUserData } from '../../../../store/useUserData';
import './myAccount.css';
import { editUser } from '../../../../api/user/editUser';
import { currentId } from '../../../../api/user/currentId';

export function MyAccountBody() {
    const { userData } = useUserData(currentId());
    const id = userData.id
    const passwordUser = "qwe";
    const avatarUser = "govnotestEdit";
    const loginUser = "lagostaEDIT";

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        event.stopPropagation();

        editUser({ id, passwordUser, avatarUser, loginUser });
    }

    return (
        <div className="form-container">
            <form className="form" onClick={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        value={userData.loginuser}
                    />
                    <input type="text" className="input-modal mt-3" placeholder="Enter description" />
                    <input type="text" className="input-modal mt-3" placeholder="Enter avatar" />
                    <input type="password" className="input-modal mt-3" placeholder="Enter password" />
                    <button className="upperCase button-change mt-5">Change</button>
                </div>
            </form>

        </div>
    )
}