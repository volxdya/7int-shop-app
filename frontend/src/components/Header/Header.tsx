import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header>
            <a href="#" onClick={handleShow} className="header-link">Settings</a>

            <Link to="/">
                <h2 className="main-title">7int</h2>
            </Link>
            <Link to="/profile" className="header-link">Profile</Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <div className="header-modal">
                        <Modal.Title>Settings</Modal.Title>
                        <button>Close</button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <img
                                src="https://sun9-41.userapi.com/impg/AOmhNBr8F6JzrV9JP9jvDy3C7beWlHJu0GkA7w/2iNXYNnJl3U.jpg?size=510x680&quality=95&sign=d186a1f497e240561a9f411ea228ba12&c_uniq_tag=j0xABRyg5Pzl0IbdiN84TLksOeHGpGWtPjn9DuFGD5I&type=album"
                                alt="123"
                                height={120}
                                width={120}
                                className="image"
                            />
                        </div>
                        <div className="col-8 px-5">
                            <h4>lagosta</h4>
                        </div>
                    </div>


                </Modal.Header>
                <Modal.Body>
                    <div className="link-modal">
                        <a href="#">MY ACCOUNT</a>
                    </div>
                    <div className="link-modal">
                        <a href="#">CHANGE THEME</a>
                    </div>
                    <div className="link-modal">
                        <a href="#">SORTING</a>
                    </div>
                    <div className="link-modal">
                        <a href="#">CREATE SHOP</a>
                    </div>
                    <div className="link-modal">
                        <a href="#">PROMOCODES</a>
                    </div>
                    <div className="link-modal">
                        <a href="#">SUPPORT</a>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </header>
    );
}
