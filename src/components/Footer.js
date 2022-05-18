import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import logo from "../assets/images/logo-animated.svg";

import LanguageSelect from "./LanguageSelect";
import SocialIcons from "./SocialIcons";

export default function Footer({ devNet }) {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-menu">
        <div className="footer-menu-column">
          <span className="footer-menu-header">{t("menu.services")}</span>
          <a href="/username">{t("menu.usernames")}</a>
          <a href="/alerts">{t("menu.price-alerts")}</a>
          <a href="https://docs.bithomp.com">{t("menu.api")}</a>
        </div>
        <div className="footer-menu-column">
          <span className="footer-menu-header">{t("menu.tools")}</span>
          <a href="/submit/">{t("menu.submit-offline-transaction")}</a>
          {devNet ?
            <>
              <a href="/create/">{t("menu.account-generation")}</a>
              {devNet === 'testnet' ?
                <a href="https://xrpl.org/xrp-testnet-faucet.html">{t("menu.faucet")}</a> :
                <a href="/faucet/">{t("menu.faucet")}</a>
              }
              <a href="/tools/">Bithomp tools</a>
            </> :
            <>
              <a href="https://test.bithomp.com">Bithomp (Testnet)</a>
              <a href="https://xls20.bithomp.com">Bithomp (XLS-20)</a>
              <a href="https://hooks.bithomp.com">Bithomp (Hooks)</a>
              <a href="https://beta.bithomp.com">Bithomp (Hooks v2)</a>
            </>
          }
        </div>
        <div className="footer-menu-column">
          <span className="footer-menu-header">{t("menu.legal")}</span>
          <Link to="/disclaimer">{t("menu.disclaimer")}</Link>
          <Link to="/privacy-policy">{t("menu.privacy-policy")}</Link>
          <Link to="/terms-and-conditions">{t("menu.terms-and-conditions")}</Link>
        </div>
        <div className="footer-menu-column">
          <span className="footer-menu-header">Bithomp</span>
          <Link to="/customer-support">{t("menu.customer-support")}</Link>
          <a href="/mediakit">{t("menu.media-kit")}</a>
        </div>
        <div className="footer-language-select">
          <LanguageSelect />
        </div>
      </div>
      <div className="footer-brand">
        <img src={logo} className="footer-logo" alt="logo" />
        <div className="footer-brand-text">
          Copyright © {year} Bithomp AB<br />
          Vasagatan 16, 111 20 Stockholm<br />
          Organization number: 559342-2867
        </div>
        <div className="footer-social">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};
