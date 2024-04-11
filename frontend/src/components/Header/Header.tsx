import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { ModalHeader } from './ModalHeader/ModalHeader';
import { getItem } from '../../utils/localStorage';

export function Header() {

    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState("");

    const handleClose = () => {
        setShow(false);
        setCurrent("");
    };

    const handleShow = () => setShow(true);

    const token = getItem("token");

    const handleShowToken = () => {
        setCurrent("TOKEN");
        handleShow();
    }
    return (
        <header>
            <a href="#" onClick={handleShow} className="header-link">Settings</a>

            <Link to="/">
                <h2 className="main-title">7int</h2>
            </Link>

            {!token || token === "" || token === undefined || token === null ? (
                <a href="#" onClick={handleShowToken} className="header-link">Profile</a>
            ) : (
                <Link to="/profile" className="header-link">Profile</Link>
            )}

            <ModalHeader
                current={current}
                setCurrent={setCurrent}
                handleClose={handleClose}
                show={show}
            />
        </header>
    );
}
