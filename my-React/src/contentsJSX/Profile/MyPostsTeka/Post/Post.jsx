import React from "react";
import s from './Post.module.css';
import user_stalker_1 from './../../../../img/user_stalker_1.jpg';
import stalker_like from './../../../../img/stalker_like.png';

const PostImg = (props) => {
    return (
        <div className={s.box}>



            <div className={s.hid}>
                <img src={user_stalker_1} alt="" title="Максим" />
            </div>
            {/* №{props.id} */}
            <div className={s.postLike}>
                {props.name}
                <pre className={s.postMessag}>
                    <b>{props.messag}</b>
                </pre>
                <pre>
                    <img src={stalker_like} alt="like" />   <b className={s.postLikeNum}> {props.likeCount}</b>
                </pre>
            </div>





            {/* <div className={M.hid}>
                <img src="https://avatarfiles.alphacoders.com/179/179353.jpg" alt="" title="Степан" />
            </div>
            <p>post 2</p>

            <div className={M.hid}>
                <img src="https://avatarfiles.alphacoders.com/247/thumb-247090.jpg" alt="" title="Ґеральд" />
            </div>
            <p>post 3</p> */}

        </div>
    )
}




export default PostImg;