// WalletConnectForm.js
import React, { useState } from "react";
import "./walletform.css";

const WalletConnectForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [backendMessage, setBackendMessage] = useState("");

  const handleConnect = async () => {
    try {
      const response = await fetch("https://crtpro-miner.onrender.com/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Authentication failed");
      }

      // If authentication is successful, you can handle the response accordingly
      const data = await response.json();
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("userEmail", data.user.email);
      console.log("API response:", data);

      // Set success state to true and close the pop-up form after connecting
      setSuccess(true);
      setBackendMessage(data.message); // Set the message from the backend
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setBackendMessage(""); // Reset the message after closing
      }, 3000);
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

            <label style={{ color: "black" }}>Email:</label>
            <input style={{ color: "black" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label style={{ color: "black" }}>Password:</label>
            <input
              style={{ color: "black" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button style={{ backgroundColor: "black", color: "orange" }} onClick={handleConnect}>
              Connect
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WalletConnectForm;
