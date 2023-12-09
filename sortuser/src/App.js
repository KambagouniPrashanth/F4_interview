import './App.css';
import SortNames from './Components/SortNames'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import  Blog from './Components/Blog'
import Contact from './Components/Contact'




function App() {
  return (
    <div>
     {/* <SortNames/> */}
     {/* <TextEditor/> */}
     <Routes>
      <Route path="" element={<Navbar/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>


      </Route>
     </Routes>
    </div>
  );
}

export default App;
