import Cart from 'pages/Cart';
import Home from 'pages/Home';
import Brand from 'pages/Brand';
import Store from 'pages/Store';
import Season from 'pages/Season';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import Checkout from 'pages/Checkout';
import Catalouge from 'pages/Catalouge';
import ItemDetails from 'pages/ItemDetails';
import Resetpsw from 'pages/Resetpassword';
import Size from 'pages/CustomerSupport/SizeGuide';
import CustomerSupport from 'pages/CustomerSupport';
import PaymentSuccess from 'pages/Checkout/Success';
import PageNotFound from 'components/PageNotFound';

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
    path     : '/catalouge/:type',
    component: Catalouge,
  },
  {
    path     : '/details:id',
    component: ItemDetails,
  },
  {
    path     : '/my-cart',
    component: Cart,
  },
  {
    path     : '/checkout',
    component: Checkout,
  },
  {
    path     : '/payment-success',
    component: PaymentSuccess,
  },
  {
    path     : '*',
    component: PageNotFound,
  },
];

export default publicRoutes;
