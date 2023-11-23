import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layouts/Navbar';
import AllUsers from './pages/AllUsers';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import SingleUser  from './pages/SingleUser';
import './App.css'
import UpdateModal from './component/UpdateModal';

const App = () =>  {
  return (
  
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/NewUser' element={<NewUser/>}/>
    <Route path='/AllUsers' element={<AllUsers/>}/>
    <Route path='SingleUser/:userId' element={<SingleUser/>}/>
    

  </Routes>
  
  </BrowserRouter>
  </>
)}

export default App;