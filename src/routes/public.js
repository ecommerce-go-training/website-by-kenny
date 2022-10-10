import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import Brand from 'pages/Brand';
import Season from 'pages/Season';
import SignUp from 'pages/SignUp';
import Store from 'pages/Store';
import Catalouge from 'pages/Catalouge';
import ItemDetails from 'pages/ItemDetails';
import Resetpsw from 'pages/Resetpassword';
import Size from 'pages/CustomerSupport/SizeGuide';
import CustomerSupport from 'pages/CustomerSupport';

const publicRoutes = [
  {
    path     : '/',
    component: Home,
  },
  {
    path     : '/sign-in',
    component: SignIn,
  },
  {
    path     : '/sign-up',
    component: SignUp,
  },
  {
    path     : '/reset-password',
    component: Resetpsw,
  },
  {
    path     : '/store',
    component: Store,
  },
  {
    path     : '/brand',
    component: Brand,
  },
  {
    path     : '/size',
    component: Size,
  },
  {
    path     : '/season',
    component: Season,
  },
  {
    path     : '/customer-support',
    component: CustomerSupport,
  },
  {
    path     : '/catalouge',
    component: Catalouge,
  },
  {
    path     : '/details:id',
    component: ItemDetails,
  },
];

export default publicRoutes;
