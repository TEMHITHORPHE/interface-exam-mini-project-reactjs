// import React from "react";
import { FiX } from "react-icons/fi";
import { HeaderLink } from "./HeaderLink";
import logoImg from "../../img/Logo XVI.svg";
import "./Header.css";
import { isHomeSite } from "../../lib/legacy";
// import ExternalLink from "../ExternalLink/ExternalLink";
import { Trans } from "@lingui/macro";
// import HeaderDropDown from "./HeaderDropDown";
import { useState } from "react";
import WithdrawPopup from "../withdraw/withdraw";

type Props = {
  small?: boolean;
  clickCloseIcon?: () => void;
  openSettings?: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

export function AppHeaderLinks({
  small,
  openSettings,
  clickCloseIcon,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  const [isWithdrawPopupOpen, setIsWithdrawPopupOpen] = useState(false);

  const handleWithdrawClick = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      if (isWithdrawPopupOpen) {
        setIsWithdrawPopupOpen(false);
      } else {
        setIsWithdrawPopupOpen(true);
      }
    } else {
      alert("please login before you can perform withdraw");
    }
  };

  const handleWithdraw = (amount) => {
    // Implement your withdrawal logic here
    console.log(`Withdrawal amount: ${amount}`);
    // Add your withdrawal logic (e.g., update user balance, call API, etc.)
    setIsWithdrawPopupOpen(false);
  };
  return (
    <div className="App-header-links">
      {small && (
        <div className="App-header-links-header">
          <HeaderLink
            isHomeLink={true}
            className="App-header-link-main"
            to="/"
            redirectPopupTimestamp={redirectPopupTimestamp}
            showRedirectModal={showRedirectModal}
          >
            <img src={logoImg} alt="W.A.X Logo" />
          </HeaderLink>
          <div
            className="App-header-menu-icon-block mobile-cross-menu"
            onClick={() => clickCloseIcon && clickCloseIcon()}
          >
            <FiX className="App-header-menu-icon" />
          </div>
        </div>
      )}
      {/* <div className="App-header-link-container App-header-link-home">
        <HeaderLink
          to="/"
          exact={true}
          isHomeLink={true}
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          <Trans>Home</Trans>
        </HeaderLink>
      </div> */}
      <div className="App-header-link-container">
        <HeaderLink
          to="/dashboard"
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          <Trans>Dashboard</Trans>
        </HeaderLink>
      </div>
      <div className="App-header-link-container">
        <HeaderLink to="/earn" redirectPopupTimestamp={redirectPopupTimestamp} showRedirectModal={showRedirectModal}>
          <Trans>Earn</Trans>
        </HeaderLink>
      </div>
      <div className="App-header-link-container" onClick={handleWithdrawClick}>
        <Trans>Withdraw</Trans>
      </div>
      {isWithdrawPopupOpen && (
        <WithdrawPopup
          isOpen={isWithdrawPopupOpen}
          onClose={() => setIsWithdrawPopupOpen(false)}
          onWithdraw={handleWithdraw}
        />
      )}

      <div className="App-header-link-container">
        <HeaderLink
          to="/ecosystem"
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          <Trans>Ecosystem</Trans>
        </HeaderLink>
      </div>

      <div className="App-header-link-container">
        <HeaderLink
          to="/"
          isHomeLink={true}
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          <Trans>About Us</Trans>
        </HeaderLink>
      </div>

      {/* {!small && (
        <HeaderDropDown redirectPopupTimestamp={redirectPopupTimestamp} showRedirectModal={showRedirectModal} />
      )}
      {small && (
        <>
          <div className="App-header-link-container">
            <HeaderLink
              to="/referrals"
              redirectPopupTimestamp={redirectPopupTimestamp}
              showRedirectModal={showRedirectModal}
            >
              <Trans>Referrals</Trans>
            </HeaderLink>
          </div>
          <div className="App-header-link-container">
            <ExternalLink href="about:blank">
              <Trans>Documents</Trans>
            </ExternalLink>
          </div>
          <div className="App-header-link-container">
            <ExternalLink href="about:blank">
              <Trans>About Us</Trans>
            </ExternalLink>
          </div>
        </>
      )} */}
      {/* <div className="App-header-link-container">
        <HeaderLink
          to="/referrals"
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          <Trans>Referrals</Trans>
        </HeaderLink>
      </div>
      
      <div className="App-header-link-container">
        <a href="about:blank" target="_blank" rel="noopener noreferrer">
          <Trans>About</Trans>
        </a>
      </div> */}
      {small && !isHomeSite() && (
        <div className="App-header-link-container">
          {/* eslint-disable-next-line */}
          <a href="#" onClick={openSettings}>
            <Trans>Settings</Trans>
          </a>
        </div>
      )}
    </div>
  );
}
