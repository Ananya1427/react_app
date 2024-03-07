import axios from 'axios';

export const createOrUpdateUser = async (userDetails, idToken) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/createOrUpdateUser`,
        {
            userDetails
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const checkUser = async (email, pathname) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/checkUserRole`,
        {
            email,
            pathname
        }
    )
}

export const currentUser = async (email, idToken) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/getCurrentUser`,
        {
            email
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const getUsers = async (idToken) => {
    return await axios.get(
        `${process.env.REACT_APP_API}/getUsers`,
        {
            headers: {
                idToken
            }
        }
    )
}

export const getRestaurants = async (idToken) => {
    return await axios.get(
        `${process.env.REACT_APP_API}/getRestaurants`,
        {
            headers: {
                idToken
            }
        }
    )
}

export const registerRestaurant = async (idToken, obj) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/registerRestaurant`,
        {
            obj
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const getCurrentRestaurant = async (idToken, email) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/getCurrentRestaurant`,
        {
            email
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const getRestaurant = async (idToken, restaurantName) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/getRestaurant`,
        {
            restaurantName
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const modifyRestaurantStatus = async (idToken, email, status) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/modifyRestaurantStatus`,
        {
            email,
            status
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const createOrUpdateCuisine = async (idToken, cuisineDetails) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/createOrUpdateCuisine`,
        {
            cuisineDetails
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const getCuisines = async (idToken, email) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/getCuisines`,
        {
            email
        },
        {
            headers: {
                idToken
            }
        }
    )
}

export const getCuisine = async (idToken, email, title) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/getCuisine`,
        {
            title,
            email
        },
        {
            headers: {
                idToken
            }
        }
    )
}
