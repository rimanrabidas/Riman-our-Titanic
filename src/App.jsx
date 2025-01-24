import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Contact, { ContactData } from './pages/Contact';
import Applayout from './components/Applayout';
import Errorpage from './pages/Errorpage';
import { getMovieData } from './api/Apidata';
import MovieDeteils from './components/layout/UI/MovieDeteils';
import { GetMovieDeteils } from './api/GetMovieData';
import Login from './pages/Login';

const App = () => {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<Applayout />,
      errorElement: <Errorpage/>,
      children: [
        {
          
            path:"/",
            element: <Home />,
              },
            
              {
                path:"/about",
                element: <About />,
                  },
            
                  {
                    path:"/movie",
                    element: <Movie />,
                    loader:getMovieData,
                      },
                       {
                    path:"/movie/:movieID",
                    element: <MovieDeteils />,
                    loader:GetMovieDeteils,
                      },
                      {
                        path:"/Login",
                        element: <Login />,
                          },
            
                      {
                        path:"/contact",
                        element:<Contact />,
                        action: ContactData,
                          },
       
      ]
    },
 
              
]);
  return  <RouterProvider router={router} />
  
};

export default App;