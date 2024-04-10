import { Modal } from "react-bootstrap";
import { ModalWindow } from "../../Modal/Modal";
import { MyAccountHeader } from "./MyAccount/MyAccountHeader";
import { MyAccountBody } from "./MyAccount/MyAccountBody";
import { Close } from "../../../icons/Close";

interface Props {
    show: boolean;
    handleClose: () => void;
    current: string;
    setCurrent: (value: React.SetStateAction<string>) => void;
}

export function ModalHeader({ show, handleClose, current, setCurrent }: Props) {

    const itemsHeaderModal: Array<string> = ["MY ACCOUNT", "CHANGE THEME", "SORTING", "CREATE SHOP", "PROMOCODES", "SUPPORT"];
    console.log(current);
    let contentHeader = (
        <>
            <div className="header-modal mt-4">
                <Modal.Title>
                    <span className="upperCase">Settings</span>
                </Modal.Title>
                <div onClick={handleClose}>
                    <Close />
                </div>
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
        </>
    );

    let contentBody = (
        <>
            {itemsHeaderModal.map((item) => {
                return (
                    <div className="link-modal">
                        <a href="#" onClick={() => setCurrent(item)}>{item}</a>
                    </div>
                )
            })}
        </>
    );

    if (current == "MY ACCOUNT") {
        contentHeader = (
            <MyAccountHeader handleClose={handleClose}/>
        )

        contentBody = (
            <>
                <MyAccountBody />
            </>
        )
    }

    return (
        <ModalWindow
            handleClose={handleClose}
            show={show}
            contentHeader={contentHeader}
            contentBody={contentBody}
        />
    );
}