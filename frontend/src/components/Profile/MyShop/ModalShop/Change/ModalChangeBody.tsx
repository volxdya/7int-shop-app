import './ModalShop.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {api} from "../../../../../../env.tsx";

export function ModalChangeBody() {
    const {id} = useParams();
    const navigate = useNavigate();

    async function deleteShop() {
        await axios.get(`${api}/api/delete_shop?id=${id}`).then((response) => {
            console.log(response.data);
            navigate("/profile");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="form-container">
            <form className="form">
                <div>
                    <input
                        type="text"
                        className="input-modal"
                        placeholder="enter title"
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter description"
                    />
                    <input
                        type="text"
                        className="input-modal mt-3"
                        placeholder="Enter avatar"
                    />

                    <button className="upperCase button-change mt-5">
                        Change
                    </button>

                    <button type="button" className="upperCase button-change mt-3 warning-btn" onClick={deleteShop}>
                        Delete Shop
                    </button>
                </div>
            </form>
        </div>
    )
}