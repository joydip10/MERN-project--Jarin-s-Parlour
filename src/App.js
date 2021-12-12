import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage/Homepage';
import LoginOrRegistration from './Components/Login/LoginOrRegistration';
import ResponsiveDrawer from './Components/Dashboard/ResponsiveDrawer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MyProducts from './Components/Dashboard/MyProducts/MyProducts';
import ManageProducts from './Components/Dashboard/ManageProducts/ManageProducts';
import ManageOrders from './Components/Dashboard/ManageOrders/ManageOrders';
import Products from './Components/Dashboard/ManageProducts/Products';
import AddProducts from './Components/Dashboard/ManageProducts/AddProducts';
import OurProducts from './Components/OurProducts/OurProducts';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Payment from './Components/Dashboard/Payment/Payment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<LoginOrRegistration />} />
            <Route path="/dashboard" element={<PrivateRoute><ResponsiveDrawer /></PrivateRoute>} >
              <Route path="/dashboard" element={<MyProducts />}> </Route>
              <Route path="/dashboard/myProducts" element={<PrivateRoute><MyProducts /></PrivateRoute>}> </Route>
              <Route path="/dashboard/manageOrders" element={<PrivateRoute><ManageOrders /></PrivateRoute>}> </Route>
              <Route path="/dashboard/makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>}> </Route>
              <Route path="/dashboard/manageProducts" element={<PrivateRoute><ManageProducts /></PrivateRoute>}>
                <Route path="/dashboard/manageProducts" element={<PrivateRoute><Products /></PrivateRoute>}> </Route>
                <Route path="/dashboard/manageProducts/addProducts" element={<PrivateRoute><AddProducts /></PrivateRoute>}> </Route>
                <Route path="/dashboard/manageProducts/products" element={<PrivateRoute><Products /></PrivateRoute>}> </Route>
              </Route>
              <Route path="/dashboard/payment/:id" element={<Payment />}></Route>
            </Route>
            <Route path="/ourProducts" element={<OurProducts />} />
            <Route path="placeOrder/:id" element={<PrivateRoute><PlaceOrder /></PrivateRoute>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
