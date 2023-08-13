import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function Blog (){

    const posts=useLoaderData();

    return(
        <>
        <h2>My Blog</h2>
        {posts.map((item,index)=>(
    <div key={index}>
        <Link to={`/blog/${item.id}`} > - {item.title} </Link>
    </div>
  ))}
  <hr />
  <footer>&copy; 2023 By Rama</footer>  
        </>
    )
}

export default Blog;