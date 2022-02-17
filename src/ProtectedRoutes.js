import {Navigate, Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'

const useAuth=()=>{
    const isAdmin = useSelector(state =>state.auth.isAdmin)
    console.log(isAdmin);
    const user={isAdmin};
    return user &&  user.isAdmin;
}

const ProtectedRoutes=()=>{
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/login" />
};

export default ProtectedRoutes;