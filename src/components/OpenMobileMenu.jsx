import openMenu from '../assets/icons/openMenu.svg'

function OpenMobileMenu(){
    function openMobileMenu(){
        document.getElementById('menu').style.display = "flex"
        document.body.style.overflowY = "hidden"
    }
    
    return(
        <img src={openMenu} alt="Ouvrir le menu" className="mobileMenuButton" onClick={openMobileMenu}/>
    )
}

export default OpenMobileMenu