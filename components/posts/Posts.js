import React from "react";
import {
  FaThumbsUp,
  FaHeart,
  FaSmileBeam,
  FaComment,
  FaShare,
} from "react-icons/fa";

function Posts({ posts }) {

  return (
    <div className="feed">
      <div className="post-head">
        <h3>{posts.userId}</h3>
        <p>{posts.createAt}</p>
        <p>{posts.desc}</p>
      </div>
      <div className="post-picture">
        <img src={posts.img} alt="post's image" />
      </div>

      <div className="post-foot">
        <FaThumbsUp className="icon-blue" />
        <FaHeart className="icon-pink" />
        <FaSmileBeam className="icon-yellow" />
        {posts.likes}
        1000likes, 100 shares
        <div className="post-foot-comment">
          <ul>
            <li>
              <FaThumbsUp className="icon-blue" /> Like
            </li>
            <li>
              <FaComment className="icon-blue" /> Comment
            </li>
            <li>
              <FaShare className="icon-blue" /> Share this
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Posts;
