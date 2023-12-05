import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

import { auth } from '../../firebase';
import './index.css';

const BottomNav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { user } = useSelector(state => ({ ...state }));

    const [loading, setLoading] = useState(false);
    const [header, setHeader] = useState('Welcome!');
    const [options, setOptions] = useState('');

    useEffect(() => {
        setHeader(user ? `Welcome ${user.firstName}!` : 'Welcome!');
        setOptions(user && user.options);
    }, [user])

    const handleRoute = (option) => {
        let routes = option.split(' ');
        return `/${routes.length > 1 ? routes.map(route => route.toLowerCase()).join('-') : routes[0].toLowerCase()}`;
    }

    const handleNavRoute = (option) => {
        let route;
        if(option === 'Flavor Chronicles') {
            route = '/';
        } else {
            route = '/partner-with-us';
        }
        return route;
    }

    const handleSignout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                dispatch({
                    type: 'LOGOUT',
                    payload: null
                })
                toast.success('Sign Out Success!');
                navigate('/');
                setLoading(false);
            })
            .catch(() => {
                toast.error('Something went wrong...please try again!');
                setLoading(false);
            })
    }

    return (
        <nav className={`navbar navbar-light shadow-lg fixed-bottom navbar-bottom`}>
            <div className='container'>
                <button type='button' className='btn btn-pat-auth-filled ml-20'>Go Back</button>
                <button type='button' className='btn btn-pat-auth-hollow mr-20'>Next</button>
            </div>
        </nav>
    )
}

export default BottomNav;
