import React from "react";
import { Trans } from "@lingui/macro";
import SEO from "../../components/Common/SEO";

import Footer from "../../components/Footer/Footer";
import { getPageTitle, BSC_TESTNET, VELAS_TESTNET, useChainId } from "../../lib/legacy";

import "./Ecosystem.css";
import BinanceIcon from "../../img/ic_bsc_52.svg";
import BTCIcon from "../../img/btc__icon.png";
import CommunityIcon from "../../img/community_projects_icon.png";
import DashboardIcon from "../../img/ecosystem_dashboard_icon.png";
import PartnershipIcon from "../../img/ecosystem_partnership_icon.png";
import EcosystemTelegramImg from "../../img/ecosystem_telegram.png";
import ExternalLink from "../../components/ExternalLink/ExternalLink";
import { FiChevronRight } from "react-icons/fi";
import EcosystemImg from "../../img/ecosystem.png";
import VelasImg from "../../img/velas_blue.png";
// const NETWORK_ICONS = {
//   [BSC_TESTNET]: BinanceIcon,
//   [VELAS_TESTNET]:VelasImg,
// };

// const NETWORK_ICON_ALTS = {
//   [BSC_TESTNET]: "bsc16Icon",
//   [VELAS_TESTNET]:"velasIcon"
// };

export default function Ecosystem() {
  const { chainId } = useChainId();
  const XVIPages = [
    {
      title: "W.A.X Governance",
      link: "about:blank",
      linkLabel: "gov.WAX.io",
      about: "W.A.X Governance Page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Stats",
      link: "about:blank",
      linkLabel: "stats.WAX.io",
      about: "W.A.X Stats Page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Proposals",
      link: "about:blank",
      linkLabel: "snapshot.org",
      about: "W.A.X Proposals Voting page",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Announcements",
      link: "about:blank",
      linkLabel: "t.me",
      about: "W.A.X Announcements and Updates",
      chainIds: [BSC_TESTNET],
    },
  ];

  const communityProjects = [
    {
      title: "W.A.X Blueberry Club",
      link: "about:blank",
      linkLabel: "blueberry.club",
      about: "W.A.X Blueberry NFTs",
      creatorLabel: "@xm92boi",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Leaderboard",
      link: "about:blank",
      linkLabel: "WAX.house",
      about: "Leaderboard for W.A.X traders",
      creatorLabel: "@Itburnz",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Positions Bot",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram bot for W.A.X position updates",
      creatorLabel: "@zhongfu",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Blueberry Pulse",
      link: "about:blank",
      linkLabel: "substack.com",
      about: "W.A.X Weekly Updates",
      creatorLabel: "@puroscohiba",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "DegenClip",
      link: "about:blank",
      linkLabel: "degenclip.com",
      about: "Community curated tweet collection",
      creatorLabel: "@ox21l",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Yield Simulator",
      link: "about:blank",
      linkLabel: "defisims.com",
      about: "Yield simulator for Crypto Miner",
      creatorLabel: "@kyzoeth",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Returns Calculator",
      link: "about:blank",
      linkLabel: "docs.google.com",
      about: "Returns calculator for W.A.X and GLP",
      creatorLabel: "@AStoicTrader1",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Compound Calculator",
      link: "about:blank",
      linkLabel: "docs.google.com",
      about: "Optimal compound interval calculator",
      creatorLabel: "@ChasenKaminsky",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Trading Stats",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram bot for Open Interest on Crypto Miner",
      creatorLabel: "@SniperMonke2",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Staking Bot",
      link: "about:blank",
      linkLabel: "t.me",
      about: "W.A.X staking rewards updates and insights",
      creatorLabel: "@XVI_Staking_bot",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Staking Calculator",
      link: "about:blank",
      linkLabel: "XVIstaking.com",
      about: "W.A.X staking calculator",
      creatorLabel: "@n1njawtf",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
  ];

  const dashboardProjects = [
    {
      title: "W.A.X Referrals Dashboard",
      link: "about:blank",
      linkLabel: "XVIReferrals.com",
      about: "Dashboard for W.A.X referral stats",
      creatorLabel: "@kyzoeth",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Terminal",
      link: "about:blank",
      linkLabel: "XVITerminal.com",
      about: "W.A.X explorer for stats and traders",
      creatorLabel: "@vipineth",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Analytics",
      link: "about:blank",
      linkLabel: "XVIStats.com",
      about: "Financial reports and protocol analytics",
      creatorLabel: "@CryptoMessiah",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "TokenTerminal",
      link: "about:blank",
      linkLabel: "tokenterminal.com",
      about: "W.A.X fundamentals",
      creatorLabel: "@tokenterminal",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "CryptoFees",
      link: "about:blank",
      linkLabel: "cryptofees.info",
      about: "Fees generated by Crypto Miner",
      creatorLabel: "@CryptoFeesInfo",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Shogun Dashboard (Dune Arbitrum)",
      link: "about:blank",
      linkLabel: "dune.com",
      about: "Protocol analytics",
      creatorLabel: "@JamesCliffyz",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Shogun Dashboard (Dune Avalanche)",
      link: "about:blank",
      linkLabel: "dune.com",
      about: "Protocol analytics",
      creatorLabel: "@JamesCliffyz",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "W.A.X Perpetuals Data",
      link: "about:blank",
      linkLabel: "laevitas.ch",
      about: "W.A.X Perpetuals Data",
      creatorLabel: "@laevitas1",
      creatorLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
  ];

  const integrations = [
    {
      title: "DeBank",
      link: "debank.com",
      linkLabe: "debank.com",
      about: "DeFi Portfolio Tracker",
      announcementLabel: "twitter.com",
      announcementLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Defi Llama",
      link: "https://defillama.com",
      linkLabel: "defillama.com",
      about: "Decentralized Finance Dashboard",
      announcementLabel: "twitter.com",
      announcementLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Dopex",
      link: "https://dopex.io",
      linkLabel: "dopex.io",
      about: "Decentralized Options Protocol",
      announcementLabel: "twitter.com",
      announcementLink: "about:blank",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Rook",
      link: "https://www.rook.fi/",
      linkLabel: "rook.fi",
      about: "MEV Optimizer",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/Rook/status/1509613786600116251",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Jones DAO",
      link: "https://jonesdao.io",
      linkLabel: "jonesdao.io",
      about: "Decentralized Options Strategies",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/XVI_IO/status/1482788805635678212",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Yield Yak",
      link: "https://yieldyak.com/",
      linkLabel: "yieldyak.com",
      about: "Yield Optimizer on Avalanche",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/XVI_IO/status/1484601407378378754",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Vovo Finance",
      link: "https://vovo.finance/",
      linkLabel: "vovo.finance",
      about: "Structured Products",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/VovoFinance/status/1531517177790345217",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Stabilize Protocol",
      link: "https://www.stabilize.finance/",
      linkLabel: "stabilize.finance",
      about: "Yield Vaults",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/StabilizePro/status/1532348674986082306",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "DODO",
      link: "https://dodoex.io/",
      linkLabel: "dodoex.io",
      about: "Decentralized Trading Protocol",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/XVI_IO/status/1438899138549145605",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Open Ocean",
      link: "https://openocean.finance/",
      linkLabel: "openocean.finance",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/XVI_IO/status/1495780826016989191",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Paraswap",
      link: "https://www.paraswap.io/",
      linkLabel: "paraswap.io",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/paraswap/status/1546869879336222728",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "1inch",
      link: "https://1inch.io/",
      linkLabel: "1inch.io",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/XVI_IO/status/1522247451410845696",
      chainIds: [BSC_TESTNET],
    },
    {
      title: "Firebird Finance",
      link: "https://app.firebird.finance/swap",
      linkLabel: "firebird.finance",
      about: "DEX Aggregator",
      announcementLabel: "twitter.com",
      announcementLink: "https://twitter.com/financefirebird/status/1561767094064238595",
      chainIds: [BSC_TESTNET],
    },
  ];

  const telegramGroups = [
    {
      title: "Crypto Miner",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram Group",
    },
    {
      title: "W.A.X (Chinese)",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram Group (Chinese)",
    },
    {
      title: "W.A.X (Portuguese)",
      link: "about:blank",
      linkLabel: "t.me",
      about: "Telegram Group (Portuguese)",
    },
    {
      title: "W.A.X Trading Chat",
      link: "about:blank",
      linkLabel: "t.me",
      about: "W.A.X community discussion",
    },
  ];

  return (
    <SEO title={getPageTitle("Ecosystem Projects")}>
      <div className="default-container page-layout ecosystem-container">
        <div>
          <div className="xvi-ecosystem-pages">
            <div className="DashboardV2-projects">
              {XVIPages.map((item) => {
                const linkLabel = item.linkLabel ? item.linkLabel : item.link;
                return (
                  <div className="App-card" key={item.title}>
                    <div className="App-card-title">
                      <div className="App-card-title-group">
                        <span className="App-card-title-content">{item.title}</span>
                        <div className="App-card-title-desc">{item.about}</div>
                      </div>
                      <div className="App-card-title-icon">
                        {chainId === BSC_TESTNET ? (
                          <img width="16" src={BinanceIcon} alt="Binance Icon" />
                        ) : (
                          <img width="16" src={VelasImg} alt="Velas Icon" />
                        )}

                        <img width="16" src={BTCIcon} />
                      </div>
                    </div>
                    <div className="App-card-divider"></div>
                    <div className="App-card-content">
                      <div className="eco-btn">
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                        <FiChevronRight />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="DashboardV2-projects-header">
              <div className="DashboardV2-project-title">
                <div className="project-title">
                  <Trans>W.A.X Pages</Trans>
                </div>
                <div className="project-desc">
                  <Trans>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Trans>
                </div>
              </div>
              <img src={EcosystemImg} />
            </div>
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <img src={CommunityIcon} />
              <Trans>Community Projects</Trans>
            </div>
            <div className="Page-description">
              <Trans>
                Projects developed by the W.A.X community. <br />
                Please exercise caution when interacting with any app, apps are fully maintained by community
                developers.
              </Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {communityProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    <div className="App-card-title-group">
                      <span className="App-card-title-content">{item.title}</span>
                      <div className="App-card-title-desc">{item.about}</div>
                    </div>
                    <div className="App-card-title-icon">
                      {chainId === BSC_TESTNET ? (
                        <img width="16" src={BinanceIcon} alt="Binance Icon" />
                      ) : (
                        <img width="16" src={VelasImg} alt="Velas Icon" />
                      )}

                      <img width="16" src={BTCIcon} />
                    </div>
                  </div>
                  <div className="App-card-divider" />
                  <div className="App-card-content">
                    <div className="eco-btn">
                      <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      <FiChevronRight />
                    </div>

                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <img src={DashboardIcon} />
              <Trans>Dashboards</Trans>
            </div>
            <div className="Page-description">
              <Trans>W.A.X dashboards and analytics.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {dashboardProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    <div className="App-card-title-group">
                      <span className="App-card-title-content">{item.title}</span>
                      <div className="App-card-title-desc">{item.about}</div>
                    </div>
                    <div className="App-card-title-icon">
                      {chainId === BSC_TESTNET ? (
                        <img width="16" src={BinanceIcon} alt="Binance Icon" />
                      ) : (
                        <img width="16" src={VelasImg} alt="Velas Icon" />
                      )}

                      <img width="16" src={BTCIcon} />
                    </div>
                  </div>

                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="eco-btn">
                      <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      <FiChevronRight />
                    </div>

                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <img src={PartnershipIcon} />
              <Trans>Partnerships and Integrations</Trans>
            </div>
            <div className="Page-description">
              <Trans>Projects integrated with WAX.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {integrations.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div key={item.title} className="App-card">
                  <div className="App-card-title">
                    <div className="App-card-title-group">
                      <span className="App-card-title-content">{item.title}</span>
                      <div className="App-card-title-desc">{item.about}</div>
                    </div>
                    <div className="App-card-title-icon">
                      {chainId === BSC_TESTNET ? (
                        <img width="16" src={BinanceIcon} alt="Binance Icon" />
                      ) : (
                        <img width="16" src={VelasImg} alt="Velas Icon" />
                      )}

                      <img width="16" src={BTCIcon} />
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="eco-btn">
                      <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      <FiChevronRight />
                    </div>

                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Announcement</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.announcementLink}>{item.announcementLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="xvi-ecosystem-pages last-eco-page">
            <div className="DashboardV2-projects-header">
              <div className="DashboardV2-project-title">
                <div className="project-title">
                  <Trans>Telegram Groups</Trans>
                </div>
                <div className="project-desc">
                  <Trans>Community-led Telegram groups.</Trans>
                </div>
              </div>
              <img src={EcosystemTelegramImg} />
            </div>

            <div className="DashboardV2-projects">
              {telegramGroups.map((item) => {
                const linkLabel = item.linkLabel ? item.linkLabel : item.link;
                return (
                  <div className="App-card" key={item.title}>
                    <div className="App-card-title">
                      <div className="App-card-title-group">
                        <span className="App-card-title-content">{item.title}</span>
                        <div className="App-card-title-desc">{item.about}</div>
                      </div>
                      <div className="App-card-title-icon">
                        {chainId === BSC_TESTNET ? (
                          <img width="16" src={BinanceIcon} alt="Binance Icon" />
                        ) : (
                          <img width="16" src={VelasImg} alt="Velas Icon" />
                        )}

                        <img width="16" src={BTCIcon} />
                      </div>
                    </div>
                    <div className="App-card-divider"></div>
                    <div className="App-card-content">
                      <div className="eco-btn">
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                        <FiChevronRight />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </SEO>
  );
}
