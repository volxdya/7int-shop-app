import { Modal } from "react-bootstrap";
import './Modal.css';

interface Props {
    show: boolean;
    handleClose: () => void;
    contentHeader: any;
    contentBody: any;
}

export function ModalWindow({ show, handleClose, contentHeader, contentBody }: Props) {
    return (
        <Modal show={show} onHide={handleClose}>

            <div className="modal-header-content">
                {contentHeader}
            </div>
            <Modal.Body>
                {contentBody}
            </Modal.Body>
            <div className="modal-footer-content">
                <p className="footer-modal-7int">ⓒ 7int 2024 - ∞</p>
                <a href="#" className="footer-modal-link">Developers</a>
                <br />
                <a href="#" className="footer-modal-link">Terms of Use</a>
            </div>
        </Modal>
    )
}