import './App.css';
import Loginpage from './components/Loginpage.jsx'; 
import Signup from './components/Signup';
import Forgetpassword from './components/Forgetpassword';
import Landingpage from './components/Landingpage';
import { Route, Routes } from 'react-router-dom';
import Otp from './components/Otp';
import Secuirtycode from './components/Secuirtycode';



function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path='/' element={<Loginpage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgetpassword' element={<Forgetpassword/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/code' element={<Secuirtycode/>}/>
      <Route path='/main' element={<Landingpage/>}/>
     </Routes>

    </div>
  );
}

export default App;
