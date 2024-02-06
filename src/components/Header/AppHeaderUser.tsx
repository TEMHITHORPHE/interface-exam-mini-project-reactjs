import { useWeb3React } from "@web3-react/core";
import AddressDropdown from "../AddressDropdown/AddressDropdown";
import { ConnectWalletButton } from "../Common/Button";
import React, { useCallback, useEffect, useState } from "react";
import { HeaderLink } from "./HeaderLink";
import connectWalletImg from "../../img/ic_wallet_24.svg";
import UnionIcon from "../../img/header_union.svg";
import ExternalLink from "../ExternalLink/ExternalLink";
import WalletConnectForm from "../WalletForm/walletform";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import "./Header.css";
import {
  BSC,
  BSC_TESTNET,
  getAccountUrl,
  getChainName,
  isHomeSite,
  switchNetwork,
  useChainId,
  VELAS_TESTNET,
} from "../../lib/legacy";
import cx from "classnames";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";
import LanguagePopupHome from "../NetworkDropdown/LanguagePopupHome";
import { Trans } from "@lingui/macro";
import { useHistory } from "react-router-dom";

type Props = {
  openSettings: () => void;
  small?: boolean;
  setWalletModalVisible: (visible: boolean) => void;
  disconnectAccountAndCloseSettings: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

export function AppHeaderUser({
  openSettings,
  small,
  setWalletModalVisible,
  disconnectAccountAndCloseSettings,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  const { chainId } = useChainId();
  const { active, account } = useWeb3React();
  const showConnectionOptions = !isHomeSite();

  /*  const count = () => {
    setInterval(() => {
      setCounter((current => current + 1)
    },1000);
  }; */

  const networkOptions = [
    {
      label: getChainName(BSC_TESTNET),
      value: BSC_TESTNET,
      icon: "binance_icon_hover.png",
      color: "#ff0000",
    },
    {
      label: getChainName(VELAS_TESTNET),
      value: VELAS_TESTNET,
      icon: "velas_icon.png",
      color: "#264f79",
    },
  ];

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    if (storedUserId) {
      setIsLoggedIn(true);
    }
    if (active) {
      setWalletModalVisible(false);
    }
  }, [active, setWalletModalVisible]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isWithdrawPopupOpen, setIsWithdrawPopupOpen] = useState(false);

  const handleWithdrawClick = () => {
    setIsWithdrawPopupOpen(true);
  };

  const handleWithdraw = (amount) => {
    // Implement withdrawal logic here
    console.log(`Withdrawal amount: ${amount}`);
    // Add your withdrawal logic (e.g., update user balance, call API, etc.)
  };

  const navigate = useHistory();
  const handleConnectButtonClick = () => {
    // Show the pop-up form when the "Connect Wallet" button is clicked

    if (isFormVisible) {
      if (isLoggedIn) {
        setIsLoggedIn(false);
        setIsFormVisible(false);
      }
      setIsFormVisible(false);
    } else if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
    } else {
      setIsFormVisible(true);
    }
  };

  const handleCloseForm = () => {
    // Close the pop-up form

    setIsFormVisible(false);
  };

  const handleMineButtonClick = () => {
    // Set loading state to true when the button is clicked
    setIsLoading(true);

    setTimeout(() => {
      // Reset loading state to false after your logic is done
      setIsLoading(false);
      let userId = localStorage.getItem("userId");
      if (userId) {
        localStorage.setItem("Mine", "true");
        navigate.push("/dashboard");
      } else {
        alert("please login before you can mine");
      }
    }, 2000); // Replace 2000 with the actual time your logic takes
  };
  const onNetworkSelect = useCallback(
    (option) => {
      if (option.value === chainId) {
        return;
      }
      return switchNetwork(option.value, active);
    },
    [chainId, active]
  );

  const selectorLabel = getChainName(chainId);

  if (!active) {
    return (
      <div className="App-header-user">
        {showConnectionOptions ? (
          <>
            {/* Connect Wallet Button */}
            <ConnectWalletButton onClick={handleConnectButtonClick} imgSrc={connectWalletImg}>
              {small ? (
                <Trans>{isLoggedIn ? "Logout" : "Sign Up/Login"}</Trans>
              ) : (
                <Trans>{isLoggedIn ? "Logout" : "Sign Up/ Login"}</Trans>
              )}
            </ConnectWalletButton>

            {/* Pop-up Form */}
            {isFormVisible && <WalletConnectForm onClose={handleCloseForm} />}
            <div
              onClick={() => {
                console.log("Button clicked!");
                handleMineButtonClick();
              }}
              className={cx("App-header-trade-link", {
                "homepage-header": isHomeSite(),
              })}
            >
              <HeaderLink
                className="header-trade-btn"
                to="/trade"
                redirectPopupTimestamp={redirectPopupTimestamp}
                showRedirectModal={showRedirectModal}
              >
                <Trans>
                  <img src={UnionIcon} width={16}></img>
                  {isLoading ? "Loading..." : "Mine"}
                </Trans>
              </HeaderLink>
            </div>
            <NetworkDropdown
              small={small}
              networkOptions={networkOptions}
              selectorLabel={selectorLabel}
              onNetworkSelect={onNetworkSelect}
              openSettings={openSettings}
            />
          </>
        ) : (
          <>
            <ExternalLink className="App-social-link" href="about:blank">
              <FaTwitter />
            </ExternalLink>
            <ExternalLink className="App-social-link" href="about:blank">
              <FaDiscord />
            </ExternalLink>
            <ExternalLink className="App-social-link" href="about:blank">
              <FaTelegramPlane />
            </ExternalLink>
            <div
              onClick={() => {
                console.log("Button clicked!");
                handleMineButtonClick();
              }}
              className={cx("App-header-trade-link", {
                "homepage-header": isHomeSite(),
              })}
            >
              <HeaderLink
                className="header-trade-btn-home"
                to="/trade"
                redirectPopupTimestamp={redirectPopupTimestamp}
                showRedirectModal={showRedirectModal}
              >
                <Trans>
                  <img src={UnionIcon} width={20}></img>
                  {isLoading ? "Loading..." : "Mine"}
                </Trans>
              </HeaderLink>
            </div>
          </>
        )}
      </div>
    );
  }

  const accountUrl = getAccountUrl(chainId, account);

  return (
    <div className="App-header-user">
      <div
        onClick={() => {
          console.log("Button clicked!");
          handleMineButtonClick();
        }}
        className="App-header-trade-link"
      >
        <HeaderLink
          className="header-trade-btn"
          to="/trade"
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
          // onClick={handleMineButtonClick}
        >
          <img src={UnionIcon} width={16}></img>
          <Trans>{isLoading ? "Loading..." : "Mine"}</Trans>
        </HeaderLink>
      </div>

      {showConnectionOptions ? (
        <>
          <div className="App-header-user-address">
            <AddressDropdown
              account={account}
              accountUrl={accountUrl}
              disconnectAccountAndCloseSettings={disconnectAccountAndCloseSettings}
            />
          </div>
          <NetworkDropdown
            small={small}
            networkOptions={networkOptions}
            selectorLabel={selectorLabel}
            onNetworkSelect={onNetworkSelect}
            openSettings={openSettings}
          />
        </>
      ) : (
        <LanguagePopupHome />
      )}
    </div>
  );
}
