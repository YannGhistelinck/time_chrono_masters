import { Link } from "react-router-dom"

function Race({race, bg}){
    return(
        <Link to={race.link} className={"link race race--"+bg} target="blank">
                <p className="race__content">{race.name}</p>
                <p className="race__content">{race.date}</p>
        </Link>
    )
}

export default Race