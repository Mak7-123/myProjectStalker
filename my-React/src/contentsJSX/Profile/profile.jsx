import React from "react";
import Killer from "./Killer/killer";
import MyPosts from "./MyPostsTeka/MyPost";
import './profile.css';


//  <div className="posts">
//     <div className="item_1">my post №1</div>
//     <div className="item_2">my post №2</div>
//     <div className="item_3">my post №3</div>
// </div>



const Profile = (props) => {


    return (
        <div className='profile'>
            <Killer />
            <MyPosts profilePage={props.profilePage}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost} />
        </div>
    )

}


export default Profile;