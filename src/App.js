import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { auth } from './firebase';
import { currentUser, getUsers } from './Functions/Auth';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import RegisterComplete from './Pages/User/RegisterComplete';
import ResetPassword from './Pages/User/ResetPassword';
import SignUp from './Pages/Partner/Signup';
import SignUpType from './Pages/Partner/SignupType';
import SignUpImages from './Pages/Partner/SignupImages';
import BottomNav from './Components/BottomNav';

const App = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [navObj, setNavObj] = useState({});

	useEffect(() => {
		if (location.pathname.includes('partner')) {
			setNavObj({
				title: 'Flavor Chronicles for business',
				buttonOne: 'Login to view your existing restaurants',
				buttonTwo: 'Register your restaurant',
				buttonOneRoute: 'partner-login',
				buttonTwoRoute: 'partner-signup',
				positon: 'fixed-bottom'
			})
		} else {
			setNavObj({
				title: 'Flavor Chronicles',
				buttonOne: 'Login',
				buttonTwo: 'Create Account'
			})
		}

		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const idTokenResult = await user.getIdTokenResult();
				let options = [];
				let uaoptions = [];

				currentUser(user.email, idTokenResult.token)
					.then((res) => {
						if (res.status === 200) {
							const { firstName, lastName, dob, gender, email, contact, address, state, city, pinCode, role, _id } = res.data.user;
							const { idToken } = res.config.headers;
							switch (role) {
								case 'admin': options = ['Dashboard', 'Add Restaurant', 'Manage Restaurants', 'Manage Users', 'Profile'];
									break;
								case 'restaurant': options = ['Dashboard', 'Create Category', 'Manage Categories', 'Manage Users', 'Profile'];
									break;
								case 'crew': options = ['Dashboard', 'Current Order', 'Orders History', 'Profile'];
									break;
								default: options = ['Dashboard', 'Current Order', 'Orders History', 'Profile'];
									break;
							};
							dispatch({
								type: 'LOGGED_IN_USER',
								payload: { firstName, lastName, dob, gender, email, contact, address, state, city, pinCode, role, _id, options, uaoptions, token: idToken }
							});

							if (role === 'crew') {
								navigate('/crew-dashboard');
							}
							else if (role === 'admin') {
								getUsers(idTokenResult.token)
									.then((res) => {
										if (res.status === 200) {
											dispatch({
												type: 'REGISTERED_USERS',
												payload: res.data.users
											})
											navigate('/');
										}
									})
									.catch((error) => toast.error(error))
							}
							else if (role === 'restaurant') {
								navigate('/restaurant-dashboard');
							}
							else {
								navigate('/');
							}
						} else {
							toast.error(res.data.message);
						}
					})
					.catch((error) => toast.error(error))
			}
			else {
				dispatch({
					type: 'LOGOUT',
					payload: null
				})
			}
		})
	}, [dispatch]);

	return (
		<div className='App'>
			{Object.keys(navObj).length && <Nav
				obj={navObj}
			/>}
			<ToastContainer />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/create-account' element={<Register />} />
				<Route exact path='/register-complete' element={<RegisterComplete />} />
				<Route exact path='/reset-password' element={<ResetPassword />} />
				<Route exact path='/partner-signup' element={<SignUp />} />
				<Route exact path='/partner-signup/restaurant-type' element={<SignUpType />} />
				<Route exact path='/partner-signup/upload-images' element={<SignUpImages />} />
			</Routes>
			{(location.pathname.includes('partner')) && <BottomNav />}
		</div>
	);
}

export default App;
