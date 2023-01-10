import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './compo/Login';
import './App.css';
import Action from './compo/Action';
import Protected from './compo/Protectedroutes';
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './compo/Student';
import Teacher from './compo/Teacher';
import Home from './compo/Home';
import Allpeople from './compo/Allpeople';
import Navbar from './compo/Navbar';
import Provider from './compo/Provider';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const islogged=localStorage.getItem('islogged')||'false'
  return (
    <>
    <Provider>
    <BrowserRouter>
    <ToastContainer/>
    <Navbar/>
    
      
    
    <div className='routes'>
    <Routes>
      {/* <Route path='/' element={<Login/>}/> */}
      
      
        <Route path='/Home' element={<Home/>}/>
      <Route path='/people' element={<Allpeople/>}/>
      <Route path='/action' element={<Action/>}/>
        <Route path='/action/:id' element={<Action/>}/>
        <Route path='/student'element={<Student/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        </Provider>
    </>
  );
}

export default App;
