import React from "react";
import friend from './../../../img/friends.webp';
import s from './friends.module.css';


const Friends = () => {
    return (
        <div className={s.friends}>

            <img src={friend} alt="" />

        </div>
    )
}

export default Friends;