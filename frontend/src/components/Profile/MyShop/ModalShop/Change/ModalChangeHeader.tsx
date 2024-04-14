import { Modal } from "react-bootstrap";
import { Close } from "../../../../../icons/Close";

interface Props {
    handleClose: () => void;
}

export function ModalChangeHeader({ handleClose }: Props) {
    return (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">Change shop data</span>
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
                            <img
                                src="https://static.wikia.nocookie.net/7d71f1b9-1031-4486-b4ec-ce118cd48b55/scale-to-width/755"
                                alt="123"
                                height={120}
                                width={120}
                                className="image"
                            />
                        </div>
                            <h4 className="upperCase text-center mt-4">aokigahara</h4>
                    </div>
                </div>
            </div>
        </>
    )
}