import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import NotFoundPage from './components/NotFoundPage';
import Profiles from './components/Profiles';

const router=createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path:"/Profile",
    element: <ProfilePage/>,
  },
  {
    path:"/profiles",
    element: <Profiles/>,
  },
  {
    path:"/profiles/:profileId",
    element: <ProfilePage/>,
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

