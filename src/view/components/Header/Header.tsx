import React from 'react';
import {NavLink} from 'react-router-dom'
import './Header.css'

const Header = () => {

    return (
        <div className={'header'}>
            <NavLink className={({isActive}) => isActive ? 'isActive' : ''} to={'/'}>home</NavLink>
            <NavLink to={'/login'}>login</NavLink>
            <NavLink to={'/news'}>news</NavLink>
            <NavLink to={'/profile'}>profile</NavLink>
        </div>
    );
};

export default Header;
