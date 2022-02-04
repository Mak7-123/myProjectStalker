import React from "react";
import { Link } from "react-router-dom";
import s from './../dialog.module.css';





const MessageItem = (props) => {
    return (
        <div>
            <div className={s.messages}>
                <div className={s.messageText}>

                    <Link className={s.message} > {props.message}</Link>
                </div>
            </div>
        </div>
    )
};

export default MessageItem;
