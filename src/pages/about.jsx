import AboutMe from"../APi/about.json";
// import { useState } from "react";
import { Link } from "react-router-dom";
function about (){
    
    
    return(
        <>
        <h1>About Me</h1>
        {AboutMe.map((item) =>{
            return(
                <>
                <h2>My Name Is : { item.name}</h2>
                <p>Old : {item.old}</p>
                <p>Brith Day : {item.birthday}</p>
                <p>Jobs : {item.jobs}</p>
                <div><Link to="/">Home</Link></div>
                </>
            )
        })}
        <hr />
        <footer>&copy; 2023 By Rama</footer>  
        </>
    )
}
export default about;