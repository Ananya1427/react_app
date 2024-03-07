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
import { currentUser, getUsers, getCurrentRestaurant } from './Functions/Auth';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import RegisterComplete from './Pages/User/RegisterComplete';
import ResetPassword from './Pages/User/ResetPassword';
import SignUp from './Pages/Partner/Signup';
import SignUpType from './Pages/Partner/SignupType';
import SignUpImages from './Pages/Partner/SignupImages';
import PartnerHome from './Pages/Partner/PartnerHome';
import Dashboard from './Pages/Partner/Dashboard';
import CreateCuisine from './Pages/Partner/CreateCuisine';
import ManageCuisines from './Pages/Partner/ManageCuisines';
import ManageOrders from './Pages/Partner/ManageOrders';
import OrdersHistory from './Pages/Partner/OrdersHistory';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ManageUsers from './Pages/Admin/ManageUsers';

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
				buttonTwoRoute: 'create-partner-account',
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
			if (user && dispatch) {
				const idTokenResult = await user.getIdTokenResult();
				let options = [];
				let uaoptions = [];

				if (location.pathname.includes('partner')) {
					getCurrentRestaurant(idTokenResult.token, user.email)
						.then((res) => {
							if (res.status === 200) {
								const { restaurantName, address, state, city, zipCode, restaurantContact, ownerContact, firstName, lastName, email, establishmentType, outletType, cuisineType, weekDays, opensAt, closesAt, menuImages, restaurantImages, foodImages, status, _id } = res.data.restaurant;
								const { idToken } = res.config.headers;
								options = ['Dashboard', 'Create Cuisine', 'Manage Cuisines', 'Manage Orders', 'Orders History', 'Manage Profile'];
								dispatch({
									type: 'LOGGED_IN_RESTAURANT',
									payload: { restaurantName, address, state, city, zipCode, restaurantContact, ownerContact, firstName, lastName, email, establishmentType, outletType, cuisineType, weekDays, opensAt, closesAt, menuImages, restaurantImages, foodImages, status, _id, options, token: idToken }
								});
								// navigate('/partner-home');
							} else {
								toast.error(res.data.message);
							}
						})
						.catch(() => toast.error('Something went wromg...please try again'))
				} else {
					currentUser(user.email, idTokenResult.token)
						.then((res) => {
							if (res.status === 200) {
								const { firstName, lastName, dob, gender, email, contact, address, state, city, zipCode, role, _id } = res.data.user;
								const { idToken } = res.config.headers;
								switch (role) {
									case 'admin': options = ['Dashboard', 'Add Restaurant', 'Manage Restaurants', 'Manage Users', 'Manage Profile'];
										break;
									case 'crew': options = ['Dashboard', 'Current Order', 'Orders History', 'Manage Profile'];
										break;
									default: options = ['Dashboard', 'Current Order', 'Orders History', 'Manage Profile'];
										break;
								};
								dispatch({
									type: 'LOGGED_IN_USER',
									payload: { firstName, lastName, dob, gender, email, contact, address, state, city, zipCode, role, _id, options, uaoptions, token: idToken }
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
											}
										})
										.catch((error) => toast.error(error))
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
				<Route exacr path='/partner-with-us' element={<PartnerHome />} />
				<Route exact path='/create-partner-account' element={<Register title={'Partner Signup'} />} />
				<Route exact path='/partner-signup' element={<SignUp route={'/partner-signup'} disable={true} />} />
				<Route exact path='/partner-signup/restaurant-type' element={<SignUpType route={'/partner-signup'} />} />
				<Route exact path='/partner-signup/upload-images' element={<SignUpImages register={'signup'} />} />
				<Route exact path='/partner-login' element={<Login title={'Partner Login'} />} />
				<Route exact path='/partner-dashboard' element={<Dashboard />} />
				<Route exact path='/partner-create-cuisine' element={<CreateCuisine />} />
				<Route exact path='/partner-update-cuisine/:slug' element={<CreateCuisine />} />
				<Route exact path='/partner-manage-cuisines' element={<ManageCuisines />} />
				<Route exact path='/partner-manage-orders' element={<ManageOrders />} />
				<Route exact path='/partner-orders-history' element={<OrdersHistory />} />
				<Route exact path='/partner-manage-profile' element={<SignUp route={'/partner-manage-profile'} disable={true} />} />
				<Route exact path='/partner-manage-profile/restaurant-type' element={<SignUpType route={'/partner-manage-profile'} />} />
				<Route exact path='/partner-manage-profile/upload-images' element={<SignUpImages register={'update'} />} />
				<Route exact path='/admin-dashboard' element={<AdminDashboard statusModify={true} />} />
				<Route exact path='/admin-add-restaurant' element={<SignUp route={'/admin-add-restaurant'} disable={false} />} />
				<Route exact path='/admin-add-restaurant/restaurant-type' element={<SignUpType route={'/admin-add-restaurant'} />} />
				<Route exact path='/admin-add-restaurant/upload-images' element={<SignUpImages register={'admin-signup'} />} />
				<Route exact path='/admin-dashboard/:slug' element={<Dashboard statusModify={true} />} />
				<Route exact path='/admin-manage-users' element={<ManageUsers />} />
				<Route exact path='/admin-manage-restaurants' element={<AdminDashboard statusModify={false} />} />
				<Route exact path='/admin-manage-restaurants/:slug' element={<Dashboard statusModify={false} />} />
				<Route exact path='/admin-manage-profile' element={<RegisterComplete profileUpdate={true} />} />
			</Routes>
		</div>
	);
}

export default App;
