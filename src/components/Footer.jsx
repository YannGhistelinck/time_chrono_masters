import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/img/logo.png"

function Footer(){
    const [t] = useTranslation("global")
    return(
        <footer>
            <div className="footer__sectionLogo">
                <img src={logo} alt="Chrono Time Masters" className="footer__sectionLogo__img"/>
                <h2 className="footer__sectionLogo__title">Time Chrono Masters</h2>
            </div> 
            
            
            <div className="footer__sectionDescription">
                <h2 className="footer__sectionDescription__title">{t("footer.description_title")}</h2>
                <p className="footer__sectionDescription__text">{t("footer.description_text")}</p>

            </div> 
            
            
            <div className="footer__sectionNav">
                <h2 className="footer__sectionNav__title">{t("footer.nav_title")}</h2>
                <nav className="footer__sectionNav__nav">
                    <Link to="/" className="footer__sectionNav__nav__link">{t("header.nav_home")}</Link>
                    <Link to="/prestations" className="footer__sectionNav__nav__link">{t("header.nav_prestations")}</Link>
                    <Link to="/resultats" className="footer__sectionNav__nav__link">{t("header.nav_results")}</Link>
                    <Link to="/nous_contacter" className="footer__sectionNav__nav__link">{t("header.nav_contact")}</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;