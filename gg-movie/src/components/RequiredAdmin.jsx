import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequiredAdmin() {
    const [hasToken,setHasToken] = useState(JSON.parse(localStorage.getItem("user")))
    // const location = useLocation();
    return(
        (hasToken && Number(hasToken.role) === 1 ) ? <Outlet/> : <Navigate to="/"  />
    )
}

export default RequiredAdmin;