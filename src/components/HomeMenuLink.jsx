import { Link } from "react-router-dom"

import doubleRightArrow from "../assets/icons/doubleRightArrow.svg"

function HomeMenuLink({name, link}){
    return(
        <Link to={link} className="link ">
            <p className="homeMenuLink"><img src={doubleRightArrow} alt="Flèche qui pointe vers le lien" className="homeMenuLink__arrow"/>{name}</p>
        </Link>
    )
}

export default HomeMenuLink