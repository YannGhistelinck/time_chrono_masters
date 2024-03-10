import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

//PAGES
import Home from '../pages/Home'
import Results from '../pages/Results'
import Chronometry from '../pages/Chronometry'
import Contact from '../pages/Contact'
import Error from '../pages/Error'

//COMPONENTS
import Header from '../components/Header'
import Footer from '../components/Footer'
import OpenMobileMenu from '../components/OpenMobileMenu'
import ChangeLanguage from './ChangeLanguage'

//CONTEXT
import { GlobalContext } from '../contexts/GlobalContext'

//TRANSLATIONS
import global_fr from '../translations/fr/global.json'
import global_en from '../translations/en/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

//check if language is defined by the user or define the default language in "fr"
let language = "fr"

if(localStorage.getItem('language') != null){
    language = localStorage.getItem('language')
}


    

i18next.init({
    interpolation: {escapeValue: false},
    lng: language,
    resources:{
        fr: {
            global: global_fr,
        },
        en: {
            global: global_en,
        }
    }
})

function Routing(){

    
    const [url, setUrl] = useState("")

    return(
        <I18nextProvider i18n={i18next}>
            <GlobalContext.Provider value={{url, setUrl}}>
                <Router>
                    <ChangeLanguage/>
                    {url !== "/" ? <Header/> : null}
                    {url !== "/" ? <OpenMobileMenu/> : null}
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/resultats" element={<Results/>}/>
                        <Route path="/prestations" element={<Chronometry/>} />
                        <Route path="/nous_contacter" element={<Contact/>} />
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                    {url !== "/" ? <Footer/> : null}
            </Router>
            </GlobalContext.Provider>
        </I18nextProvider>
        
    )
}

export default Routing;