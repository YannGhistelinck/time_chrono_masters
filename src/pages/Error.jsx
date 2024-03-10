import { useContext, useEffect } from "react";

import { GlobalContext } from "../contexts/GlobalContext";
import { useTranslation } from "react-i18next";
import { autoScroll } from "../utils/functions";

function Error(){
    const[t]=useTranslation("global")

    const {setUrl} = useContext(GlobalContext)
    setUrl('/error')

    useEffect(() => {
        autoScroll()
    }, [])

    return(
        <div className="mainContainer">
            <h2>{t("error.message")}</h2>
        </div>
    )
}

export default Error;