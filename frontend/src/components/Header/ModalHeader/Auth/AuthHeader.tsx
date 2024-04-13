import { Modal } from "react-bootstrap";
import { Close } from "../../../../icons/Close";
interface Props {
    handleClose: () => void;
}

export function AuthHeader({ handleClose }: Props) {
    return (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">authentication</span>
                </Modal.Title>
                <div>
                    <div onClick={handleClose} className="mt-2">
                        <Close />
                    </div>
                </div>
            </div>
        </>

    )
}