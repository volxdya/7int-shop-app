import { Modal } from "react-bootstrap";
import { Close } from "../../../../icons/Close";
import { Back } from "../../../../icons/Back";
interface Props {
    handleClose: () => void;
    setCurrent: (value: React.SetStateAction<string>) => void;
}

export function MyAccountHeader({ handleClose, setCurrent }: Props) {
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
                            src="https://sun9-41.userapi.com/impg/AOmhNBr8F6JzrV9JP9jvDy3C7beWlHJu0GkA7w/2iNXYNnJl3U.jpg?size=510x680&quality=95&sign=d186a1f497e240561a9f411ea228ba12&c_uniq_tag=j0xABRyg5Pzl0IbdiN84TLksOeHGpGWtPjn9DuFGD5I&type=album"
                            alt="123"
                            height={120}
                            width={120}
                            className="image"
                        />
                        <div className="d-flex justify-content-center mt-4">
                            <h4 className="upperCase">lagosta</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}