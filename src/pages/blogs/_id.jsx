import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost(){
    const post=useLoaderData();
    return(
        <>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
       <div> <Link to="/blog">Back to page</Link></div>
        </>
    )
}

export default SinglePost;