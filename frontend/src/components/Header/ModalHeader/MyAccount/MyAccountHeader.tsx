import { Modal } from "react-bootstrap";
import { Close } from "../../../../icons/Close";
interface Props {
    handleClose: () => void;
}

export function MyAccountHeader({ handleClose }: Props) {
    return (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">my account</span>
                </Modal.Title>
                <div onClick={handleClose}>
                    <Close />
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