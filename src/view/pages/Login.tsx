import React from 'react';
import {useDispatch} from "react-redux";
import {signIn} from '../../store/reducers/UserSlice';
import {useLocation, useNavigate} from 'react-router-dom';
import useLocalStorage from "../../hooks/useLocalStorage";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';
    const login = 'Admin'
    const password = '12345'
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const form = e.target
        if (form.userpassword.value === password && form.username.value === login) {
            navigate(fromPage, {replace: true});
            dispatch(signIn(true))
        } else {
            console.log('error auth')
        }
    }


    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                Login <input type="text" name={'username'}/>
                Password <input type="text" name={'userpassword'}/>
                <button type={"submit"}>Send</button>
            </form>
        </div>
    );
};

export default Login;
