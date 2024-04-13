import { Modal } from "react-bootstrap";
import { Close } from "../../../../../icons/Close";
interface Props {
    handleClose: () => void;
}


export function ModalCreateHeader({ handleClose }: Props) {
    return (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">Create product</span>
                </Modal.Title>
                <div>
                    <div onClick={handleClose} className="mt-2">
                        <Close />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="d-flex justify-content-center">
                    <div>

                        <div className="d-flex justify-content-center mt-4">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <div className="create-product-modal">
                                        +
                                    </div>
                                </div>
                                <h4 className="upperCase pt-4">Create new product</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}