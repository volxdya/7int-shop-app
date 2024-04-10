import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { ModalHeader } from './ModalHeader/ModalHeader';

export function Header() {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState("");

    const handleClose = () => {
        setShow(false);
        setCurrent("");
    };
    const handleShow = () => setShow(true);


    return (
        <header>
            <a href="#" onClick={handleShow} className="header-link">Settings</a>

            <Link to="/">
                <h2 className="main-title">7int</h2>
            </Link>
            <Link to="/profile" className="header-link">Profile</Link>
            <ModalHeader
                current={current}
                setCurrent={setCurrent}
                handleClose={handleClose}
                show={show}
            />
        </header>
    );
}
