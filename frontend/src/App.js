import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/index';
import Gallery from './gallery/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;