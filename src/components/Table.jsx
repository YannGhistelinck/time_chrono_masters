import { useState } from "react"
import Race from "./Race"

import rightArrow from '../assets/icons/rightArrow.svg'


function Table({title, races, message}){

    const itemsPerPage = 10
    const maxPages = Math.ceil(races.length / itemsPerPage)

    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = races.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => {
        if(pageNumber> maxPages){
            setCurrentPage(1)
        }else if(pageNumber<1){
            setCurrentPage(maxPages)
        }else{
            setCurrentPage(pageNumber)
        }
        
        
    }

    return(
        <article className="globalArticle resultsArticle">
            <div className="globalArticle__specialBorder"></div>
            <h2>{title}</h2>
            
            <div className="resultsArticle__table">
                {races.length !== 0 ? 
                    currentItems.map((race, index)=> (
                        <Race race={race} key={race.id} bg={index % 2 === 0 ? "1" : "2"}/>
                    ))
                :
                <p>{message}</p>
            }
            {
                races.length > itemsPerPage ? 
                    <div className="paginate">
                        <img src={rightArrow} alt="Page précédente" className="paginate__previous" onClick={() => paginate(currentPage-1)} />
                        <p className="paginate__page">{currentPage}/{maxPages}</p>
                        <img src={rightArrow} alt="Page suivante" className="paginate__next" onClick={() => paginate(currentPage+1)}/>
                    </div>
                :
                    null
            }
            

            </div>
            
        </article>
    )
}

export default Table