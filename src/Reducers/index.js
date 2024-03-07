import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { usersReducer } from './UsersReducer';
import { signupReducer } from './SignupReducer';
import { restaurantReducer } from './RestaurantReducer';
import { restaurantsReducer } from './RestaurantsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  signup: signupReducer,
  restaurant: restaurantReducer,
  restaurants: restaurantsReducer
});

export default rootReducer;
