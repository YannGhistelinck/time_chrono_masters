import { Link } from "react-router-dom"

function HomeMenuResults({date, name, link, type}){
    
    return(
        
        <Link to={link} className={"link homeMenuResult"+type} target="blank">
            <p className={"homeMenuResult"+type+"__date"}>{date}</p>
            <p className={"homeMenuResult"+type+"__name"}>{name}</p>
        </Link>
    )
}

export default HomeMenuResults