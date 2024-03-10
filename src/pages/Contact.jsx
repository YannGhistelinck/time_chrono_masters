import { useContext, useEffect } from "react"
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import markerIcon from '../assets/icons/marker.svg'


import { GlobalContext } from "../contexts/GlobalContext"
import { useTranslation } from "react-i18next";
import { autoScroll } from "../utils/functions";

function Contact(){
    const [t] = useTranslation("global")

    const {setUrl} = useContext(GlobalContext)
    setUrl('/contact')
    const position = [47.99718542409254, 0.20084443500044455]

    const customMarker = new L.Icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })
      
      useEffect(() => {
        autoScroll()
      }, [])


    return(
        <div className="mainContainer">
            <article className="globalArticle">
                <div className="globalArticle__specialBorder"></div>
                <h2>{t("contact.title")}</h2>
                
                <div className="articleContact__content articleContact">
                    <div className="articleContact__column">
                        <h3>Time Chrono Masters</h3>
                        <p>134 rue Nationale<br/>
                        72000 Le Mans</p>
                        <p>
                            06.68.07.28.07<br/>
                            timechronomasters@gmail.com
                        </p>
                    </div>
                    <div className="articleContact__column">
                        <MapContainer center={position} zoom={17} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} className="openStreetMap">
                            <TileLayer
                            attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position} icon={customMarker}>
                                <Popup>Time Chrono Masters<br/>134 rue Nationale</Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </div>

                <iframe src="https://www.cognitoforms.com/f/ImoBXMsBeUiHT1PSRD9TJA/19" className="iframe"></iframe>
                <script src="https://www.cognitoforms.com/f/iframe.js"></script>
            </article>
            
        </div>
    )
}

export default Contact