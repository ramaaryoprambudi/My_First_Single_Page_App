import postsData from "../APi/post.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepage (){
   const [posts,setPost]=useState(postsData);
   const [totalPosts,settotalPosts]=useState(0);
   const onSearchChange = (value)=>{
    const filtered=postsData.filter((item) =>item.title.includes(value));
    setPost(filtered);
    settotalPosts(filtered.length);
   };

  return (
    <>
    <h1>Simple Blog</h1>
    <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
    {posts.map((props,index)=>{
    return <Article {...props} key={index} /> 
})}
  <hr />
  <footer>&copy; 2023 By Rama</footer>  
 
    </>
  )
}

export default Homepage;