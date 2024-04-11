import { ChangeEvent, useState } from 'react';
import { useUserData } from '../../../../store/useUserData';
import './myAccount.css';

export function MyAccountBody() {
    const { userData } = useUserData();

    return (
        <div className="form-container">
            <form className="form">
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        value={userData.login}
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