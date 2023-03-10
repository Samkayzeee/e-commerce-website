import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const HomePage = React.lazy(() => import('./pages/home/Home'));
const ContactPage = React.lazy(() => import('./pages/contact/Contact'));
const AboutPage = React.lazy(() => import('./pages/about/About'));
const SignupPage = React.lazy(() => import('./pages/account/signup/Signup'));
const LoginPage = React.lazy(() => import('./pages/account/login/Login'));
const ProductsPage = React.lazy(() => import('./pages/products/Products'));
const ViewProducts = React.lazy(() => import('./pages/viewproduct/ViewProducts'));

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/contact', element: <ContactPage />},
  {path: '/about', element: <AboutPage />},
  {path: '/signup', element: <SignupPage />},
  {path: '/login', element: <LoginPage />},
  {path: '/products', element: <ProductsPage />},
  {path: '/products/:id', element: <ViewProducts />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
        <RouterProvider router={router}/>
    </Suspense>
  </React.StrictMode>
)
