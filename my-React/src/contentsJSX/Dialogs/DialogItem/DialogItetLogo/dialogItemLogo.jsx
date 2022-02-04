import React from "react";
import user_stalker_2 from './../../../../img/user_stalker_2.jpg'
import s from './dialogItemLogo.module.css';


const DialogItemLogo = () => {
    return (
        <div className={s.box}>
            <div className={s.hid}>
                <img src={user_stalker_2} alt="" title="Максим" />
            </div>
        </div>
    )
}

export default DialogItemLogo;