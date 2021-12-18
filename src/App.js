
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPlants from './Pages/AllPlants/AllPlants/AllPlants';

import MainBooking from './Pages/Booking/MainBooking/MainBooking';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import MainDashBoard from './Pages/Dashboard/MainDashBoard/MainDashBoard';
import AuthProvider from './Pages/Firebase/Context/AuthProvider/AuthProvider';
import ProtectedRoute from './Pages/Authentication/PrivateRoute/ProtectedRoute';
import AddTree from './Pages/Dashboard/AddTree/AddTree';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import NavMenu from './Pages/Home/Navbar/NavMenu';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <NavMenu/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="home" element={<Home />} />
            <Route path="explore" element={<ProtectedRoute>
              <AllPlants />
          </ProtectedRoute>} />
            <Route path="dashboard" element={<MainDashBoard />} >
           
            </Route>
            <Route path="addTree" element={<AddTree />} />
              <Route path="makeAdmin" element={<MakeAdmin/> } />
            
            <Route path="booking/:id" element={<ProtectedRoute>
              <MainBooking />
          </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={ <Register/> }/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
