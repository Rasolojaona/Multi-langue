import React, {createContext, useState} from "react";

export const Context = createContext();

const supportedLang = ['EN', 'FR', 'ES']
let browserLang = "RU"

if(supportedLang.indexOf(browserLang) === -1){
    console.log()
    browserLang = "EN";
}

const ContextProvider = props => {

    const [lang, setLang] = useState(browserLang)

    const toggleLang = (changeLang) => {
        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;