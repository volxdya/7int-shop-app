import './myAccount.css';

export function MyAccountBody() {
    return (
        <div className="change-account">
            <form className="change-form-account">
                <div>
                    <input type="text" className="input-change-account" placeholder="lagosta" />
                    <input type="text" className="input-change-account mt-3" placeholder="Enter description" />
                    <input type="text" className="input-change-account mt-3" placeholder="Enter avatar" />
                    <input type="text" className="input-change-account mt-3" placeholder="Enter password" />
                    <button className="upperCase button-change">Change</button>
                </div>
            </form>
        </div>
    )
}