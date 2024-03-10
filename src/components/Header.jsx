import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png"
import closeMenu from '../assets/icons/closeMenu.svg'
import { useTranslation } from "react-i18next";

function Header(){
    const [t] = useTranslation("global")
    
    let windowWidth = window.innerWidth
    function closeMobileMenu(){
        if(windowWidth <= 600){
            document.getElementById('menu').style.display = "none"
            document.body.style.overflowY = "auto"
        }
       
    }



    // const showSubmenu = function(id){
    //     document.getElementById(id).style.display = "flex"
    // }
    // const hideSubmenu = function(id){
    //     document.getElementById(id).style.display = "none"
    // }


    return(
        <header className="header" id="menu">
            <img src={closeMenu} alt="Fermer le menu" className="mobileMenuButton" onClick={closeMobileMenu}/>
            <div className="header__title">
                <img src={logo} alt="Chrono Time Masters" className="header__title__img"/>
                <h1 className="header__title__text">Time Chrono<br/>Masters</h1>
            </div>
            
            <nav className="header__nav">
                <Link to="/" className="link header__nav__link">{t("header.nav_home")}<div className="header__nav__link--border"></div></Link>



                <Link to="/prestations" className="link header__nav__link" onClick={() => closeMobileMenu()}>{t("header.nav_prestations")}<div className="header__nav__link--border"></div></Link>



                {/* <div className="header__nav__link submenu" onMouseEnter={() => showSubmenu("prestationMenu")} onMouseLeave={() => hideSubmenu("prestationMenu")}>
                    <div className="submenu__title">{t("header.nav_prestations")}</div>
                    <div className="submenu__links" id="prestationMenu">
                        <Link to="/prestations#chronometry" className="link header__nav__link">{t("header.subMenu_chronometry")}<div className="header__nav__link--border"></div></Link>
                        <Link to="/prestations#technology" className="link header__nav__link">{t("header.subMenu_technology")}<div className="header__nav__link--border"></div></Link>
                        <Link to="/prestations#bib" className="link header__nav__link">{t("header.subMenu_bibs")}<div className="header__nav__link--border"></div></Link>
                        <Link to="/prestations#inscription" className="link header__nav__link">{t("header.subMenu_inscriptions")}<div className="header__nav__link--border"></div></Link>
                        <Link to="/prestations#marketing" className="link header__nav__link">{t("header.subMenu_marketing")}<div className="header__nav__link--border"></div></Link>
                    </div>
                </div> */}
                
                    
                <Link to="/resultats" className="link header__nav__link" onClick={()=>closeMobileMenu()}>{t("header.nav_results")}<div className="header__nav__link--border"></div></Link>
                <Link to="/nous_contacter" className="link header__nav__link" onClick={()=>closeMobileMenu()}>{t("header.nav_contact")}<div className="header__nav__link--border"></div></Link>
                {/* <Link to="/nous_contacter" className="link different">Contact</Link> */}
            </nav>
        </header>
    )
}

export default Header;