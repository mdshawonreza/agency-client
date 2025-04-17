import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/home/Home';
import FeaturedBlog from '../pages/home/FeaturedBlog';
import FeaturedBlog2 from '../pages/home/FeaturedBlog2';
import FeaturedBlog3 from '../pages/home/FeaturedBlog3';
import FeaturedBlog4 from '../pages/home/FeaturedBlog4';
import OurProjects from '../pages/projects/OurProjects';

const Router = createBrowserRouter(
  [
  
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/featuredBlog',
          element: <FeaturedBlog></FeaturedBlog>
        },
        {
          path: '/featuredBlog2',
          element: <FeaturedBlog2></FeaturedBlog2>
        },
        {
          path: '/featuredBlog3',
          element: <FeaturedBlog3></FeaturedBlog3>
        },
        {
          path: '/featuredBlog4',
          element: <FeaturedBlog4></FeaturedBlog4>
        },
        {
          path:'/ourProjects',
          element: <OurProjects></OurProjects>
        },
      ]
    },
  ]);

export default Router;