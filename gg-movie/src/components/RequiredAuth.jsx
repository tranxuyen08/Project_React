import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequiredAuth() {
    const [hasToken,setHasToken] = useState(localStorage.getItem("accessTokenLogin"))
    const location = useLocation();

    return(
        (hasToken && hasToken !== "" && hasToken !== null) ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequiredAuth;