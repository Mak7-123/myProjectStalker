import React from "react";
import s from "./killerPNG.module.css";
import img_stalker from './../KillerPNG/img/stalker_PNG.png';

const KillerPNG = () => {
    return (
        <div className={s.killer}>
            {/* <img src="https://pngimg.com/uploads/stalker/stalker_PNG53.png" alt="stalker" /> */}
            <img src={img_stalker} alt="" />
        </div>
    )
}


export default KillerPNG;