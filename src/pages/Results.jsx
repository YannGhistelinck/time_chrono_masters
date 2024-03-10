import { useContext, useState, useEffect } from "react"
import {parse} from 'date-fns'
import { useTranslation } from "react-i18next"

import { GlobalContext } from "../contexts/GlobalContext"

import Table from "../components/Table"
import { autoScroll } from "../utils/functions"

function Results(){
    const[t]=useTranslation("global")

    const {setUrl} = useContext(GlobalContext)
    setUrl('/results')

    const [previousRaces, setPreviousRaces] = useState([]);

    useEffect(() => {
        const fetchRaceData = async() => {
            try{
                const response = await fetch(`/previousRaces.json?${new Date().getTime()}`)
                // const response = await fetch('/previousRaces.json')
                const data = await response.json()

                const sortedData = data.sort((a, b) => b.id - a.id);

                setPreviousRaces(sortedData)
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
        <div className="mainContainer">
            <Table title={t("results.title_results")} races={previousRaces} message={t("results.noResult")}/>
            <Table title={t("results.title_next")} races={nextRaces} message={t("results.noResult")}/>
        </div>
    )
}

export default Results