import {useNavigate} from "react-router-dom";
import {Info} from "../../../../icons/Info";
import {LogOut} from "../../../../icons/LogOut";

interface Props {
    setCurrent: (value: React.SetStateAction<string>) => void;
}

export function Dropdown({setCurrent}: Props) {
    const navigate = useNavigate();

    function logOut() {
        navigate("/");
        localStorage.clear();
        location.reload();
    }

    return (
        <ul className="dropdown-menu dropdown-menu-dark mt-4">
            <li><a className="dropdown-item" onClick={() => setCurrent("MY ACCOUNT")}>
                <span><Info/></span>
                <span className="mx-2">Edit Profile</span>
            </a></li>
            <li><a className="dropdown-item" onClick={logOut}>
                <span><LogOut/></span>
                <span className="mx-2">Log Out</span>
            </a></li>
        </ul>
    )
}