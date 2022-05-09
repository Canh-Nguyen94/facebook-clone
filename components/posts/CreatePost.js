import React from "react";
import Image from "next/image";
import { FaVideo, FaImages, FaEllo } from "react-icons/fa";
function CreatePost() {
  return (
    <div className="post-create feed">
      <div className="post-text ">
        <img src="/avatar.jpg" alt="avatar" className="avatar"  />
        <textarea />
        <button className="button-blue">Create</button>
      </div>
      <div className="post-image">
        <ul>
          <li>
            <FaVideo className="logo-blue"/>Live stream
          </li>
          <li>
            <FaImages className="logo-blue" /> Videos/Images
          </li>
          <li>
            <FaEllo className="logo-blue"/>Emotion/Activities
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreatePost;
