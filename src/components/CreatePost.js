import { useState } from "react";
import { USER_PROFILE_IMAGE } from "../constants";

const CreatePost = (props) => {
    const [post, setPost] = useState({
        username: "Domenic",
        content: "",
        date: new Date(),
        likes: 0,
        loves: 0
    });

    const handleInput = (event) => {
        const {name, value} = event.target;
        setPost((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const resetForm = () => {
        setPost({
            username: "Domenic",
            content: "",
            date: new Date(),
            likes: 0,
            loves: 0
        })
    }

    const submitPost = (event) => {
        event.preventDefault();
        console.warn(post)
        props.setPostArray(
            [...props.postArray, post]
        )
        resetForm();
    }
    
    return (
       <div className="createPost">
            <img className="userImage" src={USER_PROFILE_IMAGE} alt="user svg"/>
                <form className="d-flex flex-row w-100 align-items-center" onSubmit={submitPost}>
                    <input name={"content"} 
                        value={post.content}
                        className="postInput" 
                        placeholder="What's on your mind?"
                        onChange={handleInput}
                        />

                    <button type={'submit'} className="postButton btn btn-lg ">
                        Post
                    </button>
                </form>
       </div>
    )
}

export default CreatePost;