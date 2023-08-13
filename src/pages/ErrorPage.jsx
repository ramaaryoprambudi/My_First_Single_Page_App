import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error =useRouteError();
    return(
        <>
        <h2>404 | Not Found</h2>
        </>
    )
}

export default ErrorPage;