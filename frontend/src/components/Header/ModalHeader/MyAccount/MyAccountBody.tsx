import './myAccount.css';

export function MyAccountBody() {
    return (
        <div className="change-account">
            <form className="change-form-account">
                <div>
                    <input type="text" className="input-modal" placeholder="lagosta" />
                    <input type="text" className="input-modal mt-3" placeholder="Enter description" />
                    <input type="text" className="input-modal mt-3" placeholder="Enter avatar" />
                    <input type="text" className="input-modal mt-3" placeholder="Enter password" />
                    <button className="upperCase button-change mt-5">Change</button>
                </div>
            </form>
        
        </div>
    )
}