import "./post.css"
import { MoreVert } from "@mui/icons-material";
import { users } from "../../dummydata";
import { useState } from "react";

function Post({ post }) {
    const [like ,setLike] = useState(post.like);
    const [isLiked ,setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like -1 :like + 1);
        setIsLiked( !isLiked)
    }
    return (
        <div className = "post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className = "postProfileImg" src="assests/persons/prabhas.jfif" alt="" />
                        <span className="postUsername">Prabhas</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className ="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className ="likeIcon" src="assests/like.png" alt="" onClick ={likeHandler} />
                        <img className ="loveIcon" src="assests/love.jpg" alt="" onClick ={likeHandler}/>
                        <span className="postLikeCounter">{like} liked it</span>

                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Post;
