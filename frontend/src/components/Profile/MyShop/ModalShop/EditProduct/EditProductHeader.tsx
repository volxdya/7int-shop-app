import { Modal } from "react-bootstrap";
import { Close } from "../../../../../icons/Close";
import { Edit } from "../../../../../icons/Edit";
import './EditProduct.css';

interface Props {
    handleClose: () => void;
}

export function EditProductHeader({ handleClose }: Props) {
    return (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">Edit Product</span>
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
                        <div className="d-flex justify-content-center">
                            <div className="d-flex justify-content-center align-items-center edit-product-block">
                                <Edit />
                            </div>
                        </div>
                        <h4 className="upperCase text-center mt-4">Edit Product</h4>
                    </div>
                </div>
            </div>
        </>
    )
}