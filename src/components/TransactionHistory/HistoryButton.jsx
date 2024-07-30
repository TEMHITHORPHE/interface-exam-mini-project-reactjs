

import "./historybutton.css";
import HistoryIcon from "../../img/history-2.svg";
import { toast } from "react-toastify";


function HistoryButton({ modalHandler }) {

    function OnClickHandler(params) {
        console.log("[HISTORY_BUTTON-CLICKED]: ", params);
        const user = localStorage.getItem('userId');
        if (user === null) {
            toast.error("Needs a login session");
            modalHandler(false);
            return;
        } else {
            modalHandler(oldVal => !oldVal);
        }
    }

    return (
        <div id="history-floating-button" onClick={OnClickHandler}>
            <div id="content">
                <img src={HistoryIcon} alt="" width={60} height={60} />
            </div>
        </div>
    )
}

export default HistoryButton;