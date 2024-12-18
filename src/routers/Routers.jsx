import { Routes,Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import ProtectedRoute from "./ProtectedRoute"
import AllProducts from "../Admin/AllProducts"
import AddProducts from "../Admin/AddProducts"
import Dashboard from "../Admin/Dashboard"
import Users from "../Admin/Users"


const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="shop/:id" element={<ProductDetails/>}/>
        <Route path="cart" element={<Cart/>}/>

        
        <Route path="/*" element={<ProtectedRoute/>}>
         <Route path="checkout" element={<Checkout/>} />
         <Route path="dashboard" element={<Dashboard/>} />
         <Route path="dashboard/all-products" element={<AllProducts/>} />
         <Route path="dashboard/add-products" element={<AddProducts/>} />
         <Route path="dashboard/users" element={<Users/>} />
        </Route>
        

        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default Routers