import { NOTHING_HERE_IMAGE } from '../constants';
import Post from './Post'

const PostContainer = (props) => {

    const posts = props.postArray.map((post, index) => (
        <Post
            key={index}
            username={post.username}
            content={post.content}
            date={post.date.toLocaleDateString()}
            likes={post.likes}
            loves={post.loves}
        />
    ));

    return (
        <div className="postContainer">
            <div className="posts">
            {props.postArray.length === 0 ? ( 
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="w-100" src={NOTHING_HERE_IMAGE} alt="Nothing here yet!"></img>
                    <p>Nothing here... yet!</p>
                </div>
                ) : ( 
                    posts 
                )}
            </div>

        </div>
    )
}

export default PostContainer;