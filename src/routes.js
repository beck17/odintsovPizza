import {ADD_ROUTE, CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "./utils/consts";
import {Cart, Home, Login, Add} from "./pages";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Login
    },
    {
        path: HOME_ROUTE,
        component: Home
    },
]

export const privateRoutes = [
    {
        path: CART_ROUTE,
        component: Cart
    },
    {
        path: ADD_ROUTE,
        component: Add
    },

    {
        path: HOME_ROUTE,
        component: Home
    },
]