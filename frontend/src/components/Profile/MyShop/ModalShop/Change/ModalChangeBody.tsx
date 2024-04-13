export function ModalChangeBody() {
    return (
        <div className="form-container">
            <form className="form">
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        placeholder="enter title"
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter description"
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter avatar"
                    />
                    <button className="upperCase button-change mt-5">
                        Change
                    </button>
                </div>
            </form>
        </div>
    )
}