import React from "react";
import s from "./killer.module.css";
import KillerPNG from "./KillerPNG/killerPNG";
import img_fon from "./img/fon_stalker.jpg";


const Killer = () => {
    return (
        <div className={s.profile}>
            <div>
                <KillerPNG />
                <img src={img_fon} alt="" />
            </div>
        </div>
    )
}







export default Killer;