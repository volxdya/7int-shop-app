import { Modal } from "react-bootstrap";
import { Close } from "../../../../icons/Close";
import { Back } from "../../../../icons/Back";
import { useUserData } from "../../../../store/useUserData";
import { currentId } from "../../../../api/user/currentId";
interface Props {
    handleClose: () => void;
    setCurrent: (value: React.SetStateAction<string>) => void;
}

export function MyAccountHeader({ handleClose, setCurrent }: Props) {
    const { userData } = useUserData(currentId());

    return (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">my account</span>
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
            <div className="mt-4">
                <div className="d-flex justify-content-center">
                    <div>
                        <img
                            src={userData.avataruser}
                            alt="123"
                            height={120}
                            width={120}
                            className="image"
                        />
                        <div className="d-flex justify-content-center mt-4">
                            <h4 className="upperCase">{userData.loginuser}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}