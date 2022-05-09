import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreatePost from './posts/CreatePost'
import Posts from './posts/Posts'

function Feed() {
  const [posts,setPosts]=useState("")
  useEffect(() => {
    const fetchPost = async()=>{
      const res = await axios.get("http://localhost:8800/api/v1/posts/62748ea8804fa69f4ee6e9e0")
      setPosts(res.data)
    }
    fetchPost();
    
  },[])
  return (
    <div>
      <h2 style={{width:"100%",height:200,textAlign:"center",background:"grey",borderRadius: 10}}>
        This is stories
      </h2>
      <CreatePost/>
      
      <Posts posts={posts}/>
    </div>
  )
}

export default Feed