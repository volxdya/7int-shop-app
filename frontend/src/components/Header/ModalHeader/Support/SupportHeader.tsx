import { Modal } from "react-bootstrap";
import { Close } from "../../../../icons/Close";
import { Back } from "../../../../icons/Back";
interface Props {
    handleClose: () => void;
    setCurrent: (value: React.SetStateAction<string>) => void;
}

export function SupportHeader({ handleClose, setCurrent }: Props) {
    return (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">Support</span>
                </Modal.Title>
                <div>
                    <div onClick={() => setCurrent("")}>
                        <Back />
                    </div>
                    <div onClick={handleClose} className="mt-2">
                        <Close />
                    </div>
                </div>
            </div>
        </>
    );
}