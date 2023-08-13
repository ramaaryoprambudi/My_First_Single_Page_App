import { useContext } from "react";
import {GlobalContext} from "../context/index";
function Article (props){
    const ArticleStatus = ({isNew})=>{
      return isNew && <small>Baru</small>
    }
    const NewArticle = ()=>{
      return <span>Baru</span>
    }
    const user = useContext(GlobalContext);
    return(
      <>
   <h3>{props.title}</h3>
   <small>Date: {props.date} <br /> Tags: {props.tags.join(", ")} 
   {/* {props.isNew && 'Baru' } */}
   <ArticleStatus isNew={props.isNew}/>
   {props.isNew && <NewArticle />}
   </small>
   <div>
    <small>Dibuat Oleh : {user.username}</small>
   </div>
   </>
  );
}

export default Article;