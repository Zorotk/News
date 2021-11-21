import React from 'react';
import {useLocation, Navigate} from 'react-router-dom'
import {useAppSelector} from "../../hooks/redux";
import useLocalStorage from "../../hooks/useLocalStorage";

export interface LayoutProps {
    children: any;
}

const ProvideAuth = ({children}: LayoutProps) => {
    const [toggleAuth, settoggleAuth] = useLocalStorage('auth')
    console.log(toggleAuth)
    const location = useLocation()
    const auth = useAppSelector(state => state.userReducer.auth)
    React.useEffect(() => {
    if(auth) settoggleAuth(true)

    }, [auth])
    if (toggleAuth) {
        return children
    }
    if (!auth) {
        return <Navigate to="/login" state={{from: location}}/>
    }
    return children
};

export default ProvideAuth;
