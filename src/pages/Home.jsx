import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { useContext } from 'react'
import { parse } from 'date-fns'

import logo from '../assets/img/logo.png'
import doubleRightArrow from "../assets/icons/doubleRightArrow.svg"


import HomeMenuLink from '../components/HomeMenuLink'
import HomeMenuResult from '../components/HomeMenuResult'

import { GlobalContext } from '../contexts/GlobalContext'
import { useTranslation } from 'react-i18next'
import { autoScroll } from '../utils/functions'

function Home(){
    const[t] = useTranslation("global")

    const {setUrl} = useContext(GlobalContext)
    setUrl('/')
    
    const [races, setRaces] = useState([]);

    useEffect(() => {
        const fetchRaceData = async() => {
            try{
                const response = await fetch(`/previousRaces.json?${new Date().getTime()}`)
                const data = await response.json()

                const sortedData = data.sort((a, b) => b.id - a.id);

                setRaces(sortedData)
            }catch(error){
                console.error('Error loading race data', error)
            }
        }

        fetchRaceData();

        autoScroll()
    }, [])


    const [nextRaces, setNextRaces] = useState([]);

    useEffect(() => {
        const fetchRaceData = async() => {
            try{
                const response = await fetch(`/nextRaces.json?${new Date().getTime()}`)
                const data = await response.json()

                const sortedData = data.sort((a, b) => b.date - a.date);

                const filtredData = sortedData.filter(item => {
                    const itemDate = parse(item.date, 'yyyy/MM/dd', new Date())
                    return itemDate
                })

                setNextRaces(filtredData)
            }catch(error){
                console.error('Error loading race data', error)
            }
        }

        fetchRaceData();
    }, [])



    return(
        <div className="homeContainer">

            <div className='home__title'>
                <img src={logo} alt="Time Chrono Masters" className='home__title__logo' itemprop="image"/>
                <h1 className='home__title__text' itemprop="name">Time Chrono <br/>Masters</h1>
            </div>
            

            <div className="homeCard">
                <div className="homeCard__left">
                    <h2 className='homeCard__title'>{t("home.title_results")}</h2>
                    <div className='homeCard__left__results'>
                        {races.slice(0, 5).map(race => (
                            <HomeMenuResult link={race.link} date={race.date} name={race.name} key={race.id} type="previous"/>
                        ))}                        
                    </div>
                    <Link to="resultats" className='link homeCard__linkToAll'><img src={doubleRightArrow} alt="Flèche qui pointe vers le lien" className="homeCard__linkToAll__arrow"/>{t("home.link_all_results")}</Link>
                </div>
                <div className="homeCard__right">
                    <div className="homeCard__right__menu">
                        <h2 className='homeCard__title'>{t("home.title_menu")}</h2>
                        <HomeMenuLink name={t("home.link_prestations")} link="prestations"/>
                        <HomeMenuLink name={t("home.link_contact")} link="nous_contacter"/>
                    </div>
                    <div className="homeCard__right__races">
                        <h2 className='homeCard__title'>{t("home.title_races")}</h2>  
                        <div className='homeCard__right__races__list'>
                            {nextRaces.slice(0, 3).map(race => (
                                <HomeMenuResult link={race.link} date={race.date} name={race.name} key={race.id} type="next"/>
                                ))}                        
                        </div>  
                        <Link to="resultats" className='link homeCard__linkToAll'><img src={doubleRightArrow} alt="Flèche qui pointe vers le lien" className="homeCard__linkToAll__arrow"/>{t("home.link_all_races")}</Link>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Home