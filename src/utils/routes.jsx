import Cart from "../pages/Cart";
import Products from "../pages/Category";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export const routes = [
  {
    id: 'home',
    path: '/',
    component: <Home/>,
    exact: true,

  },
  {
    id: 'cart',
    path: '/cart',
    component: <Cart/>,
    exact: true,

  },
  {
    id: 'products',
    path: '/products',
    component: <Products/>,
    exact: true,
  },
  {
    id: "category",
    path: "/category/:id",
    component: "Category",
    exact: true,
  },
  {
    id: 'profile',
    path: '/profile',
    component: <Profile/>,
    exact: true,
  },
]