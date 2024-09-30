import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import {Navigate} from 'react-router-dom';
import React from 'react';
import { Header } from './components/header/Header';
import { Register } from './pages/register/Register';
import { Home } from './pages/home/Home';
import { CustomContext } from './Context';
import { Footer } from './components/footer/Footer';
import { AddRecipes } from './components/addRecipes/AddRecipes';
import { RecDetail } from './components/recDetail/RecDetail';
import { SingleArt } from './components/singleArt/SingleArt';
import { CategoryId } from './components/CategoryId/CategoryId';
import { Update } from './components/update/Update';

function App(){  
  const {user,setUser}=React.useContext(CustomContext);
  console.log(user);
  console.log(localStorage.getItem('user'))
const Layout=()=>{
  return(
    <>
   <Outlet/>
   <Footer></Footer>
  </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {path:'/',
      element:<Home/>
    },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/addrecipe",
    element:localStorage.getItem('user')!==null ?<AddRecipes/> : <Register/>
  },
  {
    path: "/receips/detail/:recid",
    element: <RecDetail/>,
  },
  
{
path: "/articles/artdetail/:sinId",
element: <SingleArt/>,
},
{
  path:'/categories/:name',
  element:<CategoryId/>
},
{
  path:'/update/:recid',
  element:<Update/>
}
]);

  return (
   <RouterProvider router = {router}>
     <div className="App">
    </div>
   </RouterProvider>
  );
}

export default App;
