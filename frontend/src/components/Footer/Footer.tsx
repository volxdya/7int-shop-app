import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div>
                <p className="footer-7int">ⓒ 7int 2024 - ∞</p>
                <a href="#" className="footer-link">Developers</a>
                <br />
                <a href="#" className="footer-link">Terms of Use</a>
            </div>
            <div className="payment-container">
                <img src="public/mc.png" alt="" />
                <br />
                <img src="public/visa.png" alt="" />
            </div>
        </footer>
    )
}