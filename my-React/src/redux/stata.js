import { renderEntireTree } from "../render";

let state = {

    profilePage: {
        postsData: [
            { id: 1, name: "Максим", messag: 'text', likeCount: 11 },
            // { id: 2, name: "Другий", likeCount: 11 },
            // { id: 3, name: "Третій", likeCount: 11 },
            // { id: 4, name: "Четвертий", likeCount: 11 },
            // { id: 5, name: "П'ятий", likeCount: 11 },
        ],
        newPostText: 'Це мій текст!',
    },


    messagePage: {
        dialogData: [
            { id: 1, name: "Max" },
            { id: 2, name: "Tania" },
            { id: 3, name: "Stepan" },
            { id: 4, name: "Vova" },
            { id: 5, name: "Diana" },
            { id: 6, name: "Raisa" },
            { id: 7, name: "Olexandr" },

        ],
        messagData: [
            { id: 1, message: `Привіт! Як справи?` },
            { id: 2, message: `моє повідомлення №1` },
            { id: 3, message: `моє повідомлення №2` },
            { id: 4, message: `моє повідомлення №3 ` },

        ],

    },

    sidebar: {
        friends: [
            { id: 1, friend: 'Таня' },
            { id: 2, friend: 'Вова' },
            { id: 3, friend: 'Микола' },
        ]
    },
}

export let addPost = (myUserPost) => {

    let postUser = {
        id: 500,
        name: "Максим",
        messag: myUserPost,
        likeCount: 75,
    };

    state.profilePage.postsData.push(postUser);
    renderEntireTree(state);
}

export default state;