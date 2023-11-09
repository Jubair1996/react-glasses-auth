import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    if(user){
        return children;
    }
    if(loading){
        return <p>Loading</p>
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;