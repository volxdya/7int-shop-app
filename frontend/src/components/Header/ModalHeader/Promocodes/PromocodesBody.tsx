import './promocodes.css';

export function PromocodesBody() {
    return (
        <>
            <div className="form-container">
                <form className="form">
                    <div>
                        <input type="text" className="input-modal" placeholder="Enter promocode" />
                        <button className="upperCase button-change mt-4">Activate</button>
                    </div>
                </form>
            </div>
            <p className="mt-3 activated-promocodes upperCase">Activated Promocodes:</p>
            <p>6X93PQWQFZSCDQ</p>
            <p>TESTPRMOCODE</p>
            <p>7INTGIFT</p>
        </>
    )
}