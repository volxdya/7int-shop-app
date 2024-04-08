import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
    return (
        <header>
            <a href="#" className="header-link">Settings</a>
            <Link to="/">
                <h2 className="main-title">7int</h2>
            </Link>
            <Link to="/profile" className="header-link">Profile</Link>
        </header>
    )
}