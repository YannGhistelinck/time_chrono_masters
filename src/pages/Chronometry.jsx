import { useContext, useEffect } from "react"

import { GlobalContext } from "../contexts/GlobalContext"

import CategoryCard from "../components/CategoryCard"

import imgCross from '../assets/img/categoryCross.png'
import imgTrail from '../assets/img/categoryTrail.png'
import imgCanin from '../assets/img/categoryCanin.png'
import imgWalk from '../assets/img/categoryWalk.png'
import imgBike from '../assets/img/categoryBike.png'
import techno1 from '../assets/img/technology1.png'
import techno2 from '../assets/img/technology2.png'
import techno3 from '../assets/img/technology3.png'
import technoActive1 from '../assets/img/technoActive1.png'
import technoActive2 from '../assets/img/technoActive2.png'
import technoPassive1 from '../assets/img/technoPassive1.png'
import bib1 from '../assets/img/bib1.png'
import bib2 from '../assets/img/bib2.png'
import bib3 from '../assets/img/bib3.png'
import inscription1 from '../assets/img/inscription1.png'
import inscription2 from '../assets/img/inscription2.png'
import marketing from '../assets/img/marketing.png'


import { useTranslation } from "react-i18next"
import { autoScroll } from "../utils/functions"


function Chronometry(){
    const[t]=useTranslation("global")

    const {setUrl} = useContext(GlobalContext)
    setUrl('/chronometry')
    useEffect(() => {
        autoScroll()
    }, [])

    return(
        <div className="mainContainer">
            

            <article className="globalArticle" id="chronometry">
                <div className="globalArticle__specialBorder"></div>
                <h2>{t("prestations.chronometry.title1")}<br/><span className='tabulation'>{t("prestations.chronometry.title2")}</span></h2>
                <p className="article__subtitle">{t("prestations.chronometry.subtitle")}</p>
                <p className="article__description">{t("prestations.chronometry.description")}</p>

                <div className="article__cardContainer articleChronometry">
                    <CategoryCard img={imgCross} title={t("prestations.chronometry.card_cross")}/>
                    <CategoryCard img={imgTrail} title={t("prestations.chronometry.card_trail")}/>
                    <CategoryCard img={imgCanin} title={t("prestations.chronometry.card_caninCross")}/>
                    <CategoryCard img={imgWalk} title={t("prestations.chronometry.card_walk")}/>
                    <CategoryCard img={imgBike} title={t("prestations.chronometry.card_bike")}/>
                </div>
                
            </article>
            


            <article className="globalArticle" id="technology">
                <div className="globalArticle__specialBorder"></div>
                <h2>{t("prestations.technology.title")}</h2>
                <p className="article__description">{t("prestations.technology.description1")}</p>
                
                <div className="article__cardContainer articleTechnology">
                    <div className="articleTechnology__column">
                        <img src={techno1} alt="UR Time"/>
                        <img src={techno2} alt="UR Time"/>
                    </div>
                    <div className="articleTechnology__column">
                        <img src={techno3} alt="UR Time"/>
                    </div>

                </div>

                <p className="article__description">{t("prestations.technology.description2")}<span className="greenText">{t("prestations.technology.description2_span")}</span></p>

                <h3>{t("prestations.technology.subtitle1")}</h3>

                <div className="article__cardContainer articleTechnology">
                    <img src={technoActive1} alt="Puce active" />
                    <img src={technoActive2} alt="Puce active" />
                </div>
                <p className="article__description">{t("prestations.technology.description3")}</p>

                <h3>{t("prestations.technology.subtitle2")}</h3>
                <div className="article__cardContainer articleTechnology">
                    <img src={technoPassive1} alt="Puce passive"/>
                </div>
                <p className="article__description">{t("prestations.technology.description4")}</p>
                
            </article>





            <article className="globalArticle" id="bib">
                <div className="globalArticle__specialBorder"></div>
                <h2>{t("prestations.bibs.title1")} <br/><span className="tabulation">{t("prestations.bibs.title2")}</span></h2>
                
                <div className="article__cardContainer articleBib">
                    <div className="articleBib__column">
                        <div className="articleBib__content">
                            <p>{t("prestations.bibs.description1")}</p>
                            <p>{t("prestations.bibs.description2")}</p>
                        </div>
                        
                        <img src={bib1} alt="Présentation d'un dossard" className="articleBib__content articleBib__bib1"/>
                    </div>
                    <div className="articleBib__column">
                        <img src={bib2} alt="Présentation d'un dossard" className="articleBib__content articleBib__bib2"/>
                        <img src={bib3} alt="Présentation d'un dossard" className="articleBib__content articleBib__bib3"/>
                    </div>

                </div>
                
            </article>
            
            
            
            
            
            
            
            
            <article className="globalArticle" id="inscription">
                <div className="globalArticle__specialBorder"></div>
                <h2>{t("prestations.inscriptions.title1")} <br/><span className="tabulation">{t("prestations.inscriptions.title2")}</span></h2>
                
                <div className="article__cardContainer articleInscription">
                    <div className="articleInscription__column">
                        
                        <img src={inscription1} alt="Prestation d'inscription" className="articleInscription__content articleInscription__inscription1"/>
                    </div>
                    <div className="articleInscription__column">
                        <p className="articleInscription__content">{t("prestations.inscriptions.description")}</p>
                        <img src={inscription2} alt="Prestation d'inscription" className="articleInscription__content articleInscription__inscription2"/>
                    </div>

                </div>
                
            </article>




            <article className="globalArticle" id="marketing">
                <div className="globalArticle__specialBorder"></div>
                <h2>{t("prestations.marketing.title1")} <br/><span className="tabulation">{t("prestations.marketing.title2")}</span></h2>
                
                <div className="article__cardContainer articleMarketing">
                    <div className="articleMarketing__column">
                        <img src={marketing} alt="Illustration de marketing digital" className="articleMarketing__marketing"/>
                    </div>
                    <div className="articleMarketing__column">
                        <p>{t("prestations.marketing.description1")}<br/>
                        {t("prestations.marketing.description2")}</p>
                    </div>

                </div>
                
            </article>



        </div>
    )
}

export default Chronometry