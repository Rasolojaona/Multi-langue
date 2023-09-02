import React, {useContext} from "react";
import FrenchFlag from '../../assets/france.svg'
import SpainFlag from '../../assets/spain.svg'
import UnitedFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import { Context } from "../../context/langContext";


export default function ToggleLangs(){

    const {toggleLang} = useContext(Context)

    

    return (
        <div className="container-langs">
            
            <img onClick={() => toggleLang('FR')} src={FrenchFlag} />
            <img onClick={() => toggleLang('EN')} src={UnitedFlag} />
            <img onClick={() => toggleLang('ES')} src={SpainFlag} />

        </div>
    )
}