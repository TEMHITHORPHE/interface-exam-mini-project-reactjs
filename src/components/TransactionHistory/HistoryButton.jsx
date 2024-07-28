


import "./historybutton.css";
import HistoryIcon from "../../img/history-2.svg";


function HistoryButton() {
  return (
    <div id="history-floating-button">
        <div id="content">
            <img src={HistoryIcon} alt="" width={60} height={60} />
        </div>
    </div>
  )
}

export default HistoryButton;