import { Modal } from "react-bootstrap";
import { ModalWindow } from "../../Modal/Modal";
import { MyAccountHeader } from "./MyAccount/MyAccountHeader";
import { MyAccountBody } from "./MyAccount/MyAccountBody";
import { Close } from "../../../icons/Close";
import { PromocodesHeader } from "./Promocodes/PromocodesHeader";
import { PromocodesBody } from "./Promocodes/PromocodesBody";
import { SupportHeader } from "./Support/SupportHeader";
import { SuppoerBody } from "./Support/SupportBody";
import { CreateShopBody } from "./CreateShop/CreateShopBody";
import { CreateShopHeader } from "./CreateShop/CreateShopHeader";
import { AuthHeader } from "./Auth/AuthHeader";
import { AuthBody } from "./Auth/AuthBody";
import { ThreeDots } from "../../../icons/ThreeDots";
import { Dropdown } from "./Dropdown/Dropdown";
import { useGetUserData } from "../../../store/useGetUserData";

interface Props {
    show: boolean;
    handleClose: () => void;
    current: string;
    setCurrent: (value: React.SetStateAction<string>) => void;
}

export function ModalHeader({ show, handleClose, current, setCurrent }: Props) {

    const itemsHeaderModal: Array<string> = ["MY ACCOUNT", "CHANGE THEME", "SORTING", "CREATE SHOP", "PROMOCODES", "SUPPORT"];

    const userData = useGetUserData().data;


    let contentHeader = (
        <>
            {userData ? (
                <>
                    <div className="header-modal mt-4">
                        <Modal.Title>
                            <span className="upperCase">Settings</span>
                        </Modal.Title>
                        <div>
                            <span className="me-4 dropstart">
                                <button className="button-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <ThreeDots />
                                </button>
                                <Dropdown setCurrent={setCurrent} />
                            </span>
                            <span onClick={handleClose}>
                                <Close />
                            </span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <img
                                src={userData.avataruser}
                                alt="123"
                                height={120}
                                width={120}
                                className="image"
                            />
                        </div>
                        <div className="col-8 px-5">
                            <h4>{userData.loginuser}</h4>
                        </div>
                    </div>
                </>
            ) : (
                setCurrent("TOKEN")
            )}
        </>
    );

    let contentBody = (
        <>
            {userData ? (
                <>
                    {itemsHeaderModal.map((item, index) => {
                        return (
                            <div className="link-modal" key={index}>
                                <a href="#" onClick={() => setCurrent(item)}>{item}</a>
                            </div>
                        )
                    })}
                </>
            ) : (
                setCurrent("TOKEN")
            )}
        </>
    );

    if (current == "MY ACCOUNT") {

        contentHeader = (
            <MyAccountHeader
                handleClose={handleClose}
                setCurrent={setCurrent}
            />
        );
        contentBody = (
            <MyAccountBody />
        );

    } else if (current == "PROMOCODES") {

        contentHeader = (
            <PromocodesHeader
                handleClose={handleClose}
                setCurrent={setCurrent}
            />
        );
        contentBody = (
            <PromocodesBody />
        );
    }
    else if (current == "SUPPORT") {

        contentHeader = (
            <SupportHeader
                handleClose={handleClose}
                setCurrent={setCurrent}
            />
        );
        contentBody = (
            <SuppoerBody />
        );
    }
    else if (current == "CREATE SHOP") {

        contentHeader = (
            <CreateShopHeader
                handleClose={handleClose}
                setCurrent={setCurrent}
            />
        )
        contentBody = (
            <CreateShopBody />
        )
    } else if (current == "TOKEN") {
        contentHeader = (
            <AuthHeader
                handleClose={handleClose}
            />
        )

        contentBody = (
            <AuthBody />
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