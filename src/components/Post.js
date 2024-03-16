import { useEffect, useState } from "react";
import { USER_PROFILE_IMAGE } from "../constants";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp.esm"
import { FaHeart } from "@react-icons/all-files/fa/FaHeart"

const Post = (props) => {

    const [likes, setLikes] = useState(props.likes)
    const [loves, setLoves] = useState(props.loves)

    const incrementLikes = () => {
        setLikes(likes + 1)
    }

    const incrementLoves = () => {
        setLoves(loves + 1)
    }

    useEffect(() => {
        console.warn(likes, loves);
    })

    return (
        <div className="post">
            <div className="d-flex flex-row justify-content-between align-items-center mb-1 border-black w-100">
                <div className="d-flex flex-row justify-items-center align-items-md-center solid border-black">
                    <img className="postUserImage" src={USER_PROFILE_IMAGE} alt=""/>
                    {props.username}
                </div>
                <p className="d-flex flex-row align-items-end text-secondary m-0"> {props.date} </p>
            </div>
            <div className="ms-5 mt-0">
                {props.content}
            </div>
            <div className="w-100 d-flex flex-row justify-content-end text-secondary m-0">
                {likes} Likes {loves} Loves
            </div>
            <hr/>
            <div className="d-flex flex-row justify-content-around w-100 m-0">
                <div className="">
                    <button className="like" onClick={incrementLikes} >
                        <FaThumbsUp/>
                    </button>
                </div>
                <div className="">
                    <button className="love" onClick={incrementLoves} >
                        <FaHeart/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post;