import ReactDOM from 'react-dom';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './view/home/home';
import About from './view/about/about';
import Contact from './view/contact/contact';
const router = createBrowserRouter([
  {path:'/',
    element:<Home/>
  },
 { path:'/about',
    element:<About/>
  },
 { path:'/contact',
    element:<Contact/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <RouterProvider router={router}/>
);
