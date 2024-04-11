import './Support.css';

export function SuppoerBody() {
    return (
        <>
            <div className="change-account">
                <form className="change-form-account">
                    <div>
                        <input type="text" className="input-modal" placeholder="Enter request help" />

                        <p className="text-center pt-4 helper">On this page you can send a request for help from the administrator and receive feedback</p>
                        <button className="upperCase button-change mt-4">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}