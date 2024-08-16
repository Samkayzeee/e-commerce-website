import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider } from 'react-redux';
import Loading from './components/loading/Loading';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-loading-skeleton/dist/skeleton.css';
import Checkout from './pages/checkout/Checkout';
import AmountProviderContext from './contexts/AmountPay';
import ThemeProvider from './contexts/ThemeProvider';


const HomePage = React.lazy(() => import('./pages/home/Home'));
const ContactPage = React.lazy(() => import('./pages/contact/Contact'));
const AboutPage = React.lazy(() => import('./pages/about/About'));
const SignupPage = React.lazy(() => import('./pages/account/signup/Signup'));
const LoginPage = React.lazy(() => import('./pages/account/login/Login'));
const ProductsPage = React.lazy(() => import('./pages/products/Products'));
const ViewProducts = React.lazy(() => import('./pages/viewproduct/ViewProducts'));
const ErrorPage = React.lazy(() => import('./pages/error/404'));
const Cart = React.lazy(() => import('./pages/carts/Carts'));

const router = createBrowserRouter([
  {path: '/', element: <HomePage />, errorElement: <ErrorPage />},
  {path: '/contact', element: <ContactPage />},
  {path: '/about', element: <AboutPage />},
  {path: '/signup', element: <SignupPage />},
  {path: '/login', element: <LoginPage />},
  {path: '/products', element: <ProductsPage />},
  {path: '/products/:id', element: <ViewProducts />},
  {path: '/cart', element: <Cart />},
  {path: '/checkout', element: <Checkout />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AmountProviderContext>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Suspense>
    </AmountProviderContext>
    </ThemeProvider>
  </React.StrictMode>
)
