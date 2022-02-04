import React from "react";
import PostImg from "./Post/Post";
import s from './Post/Post.module.css'




const MyPosts = (props) => {
    const onPostChange = () => {

    }

    const Post = props.profilePage.map(x => <PostImg name={x.name}
        id={x.id} messag={x.messag}
        likeCount={x.likeCount} />)

    const newPostElement = React.createRef()
    const addPost = () => {
        const text = newPostElement.current.value;//ім'яЕлемента.поточне.значення
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (

        <div>
            My Posts
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>


            <div className={s}>
                {Post}
            </div>
        </div >

    )
}

export default MyPosts;



