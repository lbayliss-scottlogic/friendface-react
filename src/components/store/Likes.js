import { createContext, useState } from 'react';

const LikesContext = createContext({
    likes: [],
    // Placeholders for auto-fill purposes - serve no function
    addLike: (like) => {},
    removeLike: (likeID) => {},
    isLiked: (likedID) => {}
});

export function LikesContextProvider(props) {
    const [userLikes, setUserLikes] = useState([]);

    function addLikeHandler(like) {
        setUserLikes((prevUserLikes) => {
            return prevUserLikes.concat(like);
        });
    }

    function removeLikeHandler(likeID) {
        setUserLikes((prevUserLikes) => {
            return prevUserLikes.filter(post => post.id !== likeID);
        });
    }

    function isLikedHandler(likeID) {
        return userLikes.some(post => post.id === likeID);
    }

    const context = {
        likes: userLikes,
        addLike: addLikeHandler,
        removeLike: removeLikeHandler,
        isLiked: isLikedHandler
    };

    return <LikesContext.Provider value={context}>
        {props.children}
    </LikesContext.Provider>
}

export default LikesContext;