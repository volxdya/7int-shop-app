export function CreateShopBody() {
    return (
        <div className="form-container">
            <form className="form">
                <div>
                    <input type="text" className="input-modal" placeholder="Enter title shop" />
                    <input type="text" className="input-modal mt-3" placeholder="Enter avatar shop" />
                    <p className="helper text-center mt-5">By clicking Create, you agree to the User Agreement, Site Rules acknowledge that our Privacy Policy applies.</p>
                    <button className="upperCase button-change mt-3">Create</button>
                </div>
            </form>
        </div>
    )
}