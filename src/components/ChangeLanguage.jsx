import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import frFlag from '../assets/icons/frFlag.svg'
import gbFlag from '../assets/icons/gbFlag.svg'

function ChangeLanguage() {
    const [t, i18n] = useTranslation("global")

    let currentLanguage = localStorage.getItem('language')
   

    const handleChangeLanguage = (lang)=>{
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang);
        currentLanguage = lang
        document.getElementById("frFlag").classList.toggle('flagContainer__flag--big')
        document.getElementById("enFlag").classList.toggle('flagContainer__flag--big')
    }

    useEffect(() => {
        if(currentLanguage  === 'fr'){
            document.getElementById("frFlag").classList.add('flagContainer__flag--big')
            document.getElementById("enFlag").classList.remove('flagContainer__flag--big')
        }else if(currentLanguage === 'en'){
            document.getElementById("frFlag").classList.remove('flagContainer__flag--big')
            document.getElementById("enFlag").classList.add('flagContainer__flag--big')
        }
    }, [currentLanguage])

    return (
    <div className='flagContainer'>

        <img src={frFlag} id="frFlag"alt="Traduire le site en français" className='flagContainer__flag flagContainer__flag--big' onClick={() => {handleChangeLanguage("fr")}}/>
        <img src={gbFlag} id='enFlag'alt="Translate this website in english" className='flagContainer__flag' onClick={() => {handleChangeLanguage("en")}}/>

    </div>
  )
}

export default ChangeLanguage