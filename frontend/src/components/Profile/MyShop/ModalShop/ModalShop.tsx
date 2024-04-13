import { ModalWindow } from "../../../Modal/Modal";
import './Modal.css';
import { ModalCreateBody } from "./Create/ModalCreateBody";
import { ModalCreateHeader } from "./Create/ModalCreateHeader";
import { ModalChangeHeader } from "./Change/ModalChangeHeader";
import { ModalChangeBody } from "./Change/ModalChangeBody";

interface Props {
    show: boolean;
    handleClose: () => void;
    current: string;
    setCurrent: (value: React.SetStateAction<string>) => void;
}

export function ModalShop({ show, handleClose, current, setCurrent }: Props) {

    let contentHeader = (
        <div>123</div>
    );

    let contentBody = (
        <div>body</div>
    )

    if (current == "add") {
        contentHeader = (
            <ModalCreateHeader handleClose={handleClose}/>
        );

        contentBody = (
            <ModalCreateBody />
        );
    }

    if (current == "change") {
        contentHeader = (
            <ModalChangeHeader handleClose={handleClose}/>
        );

        contentBody = (
            <ModalChangeBody />
        )
    }

    return (
        <ModalWindow
            handleClose={handleClose}
            show={show}
            contentHeader={contentHeader}
            contentBody={contentBody}
        />
    )
}