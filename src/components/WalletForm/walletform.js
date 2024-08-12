// WalletConnectForm.js
import React, { useState } from "react";
import "./walletform.css";

const WalletConnectForm = ({ onClose, loginButtonUpdate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [license, setLicense] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [backendMessage, setBackendMessage] = useState("");

  const handleConnect = async () => {
    try {
      const response = await fetch("https://exam-nodejs-main.onrender.com/api/auth", {
      // const response = await fetch("http://localhost:3001/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          license,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Authentication failed");
      }

      // If authentication is successful, you can handle the response accordingly
      const data = await response.json();
      console.log("[AUTH]: ", data);
      if (data.user.token && data.user.id) {
        loginButtonUpdate(true);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("totalWithdrawn", data.user.withdrawn);
        localStorage.setItem("userAPIToken", data.user.token);
        localStorage.setItem("userInfo", JSON.stringify({ id: data.user.id, email: data.user.email, api_token: data.user.token }));
        localStorage.setItem(`mining_stats_${data.user.id}`, JSON.stringify({ ...data.user.miningInfo }));
        console.log("API response:", data);
      }

      // Set success state to true and close the pop-up form after connecting
      setSuccess(true);
      setBackendMessage(data.message); // Set the message from the backend
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setBackendMessage(""); // Reset the message after closing
      }, 1000);

    } catch (error) {
      console.error("Error connecting to API:", error);
      setError(error.message || "Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <div className="wallet-connect-form">
        {success ? (
          <p style={{ color: "green" }} className="success-message">
            {backendMessage || "Connection successful!"}
          </p>
        ) : (
          <>
            {error && <p className="error-message">{error}</p>} 
            {/* <button className="close-button" onClick={onClose}>
          X
        </button> */}


            <label style={{ color: "black" }}>License Key:</label>
            <input style={{ color: "black" }} type="text" placeholder="5AED7G29XY" onChange={(e) => setLicense(e.target.value)} />

            {/* <label style={{ color: "black" }}>Email:</label>
            <input style={{ color: "black" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}

            <button type="button" style={{ backgroundColor: "black", color: "orange" }} onClick={handleConnect}>
              Connect
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WalletConnectForm;
