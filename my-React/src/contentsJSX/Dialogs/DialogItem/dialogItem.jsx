import React from "react";
import { Link } from "react-router-dom";
import s from './../dialog.module.css';
import DialogItemLogo from "./DialogItetLogo/dialogItemLogo";



const DialogItem = (props) => {
    return (

        <div className={s.dialog}>
            <div className={s.user}>
                <div className={s.userLogo}>
                    <DialogItemLogo />
                </div >
                <div className={s.userName}>
                    <Link to={"/dialogs/" + props.id}>{props.name}</Link>
                </div>
            </div>
        </div>
    )
}

export default DialogItem;