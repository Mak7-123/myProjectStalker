import React from "react";
import s from './dialog.module.css';
import DialogItem from "./DialogItem/dialogItem";
import MessageItem from "./MessagesItem/messagItem";
// import { Link } from "react-router-dom";







const Dialogs = (props) => {
    const Dialog = props.dialogData.map(x => <DialogItem name={x.name} id={x.id} />)
    const Message = props.messagData.map(x => <MessageItem message={x.message} id={x.id} />)


    const newPostUser = React.createRef();
    const addPost = () => {
        const text = newPostUser.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {Dialog}
            </div>

            <div className={s.messages}>
                <div>
                    {Message}{/* як є */}
                    {/* <Message message="повідомлення" />        як мало бути        */}

                    <div className={s.clickMessage}>
                        <div className={s.clickTextarea}>
                            <textarea ref={newPostUser} cols="30" rows="2"></textarea>
                            <div className={s.clickButton}>
                                <button onClick={addPost}>Click</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Dialogs;