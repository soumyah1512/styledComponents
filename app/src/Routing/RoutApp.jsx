import { Route, Routes, } from 'react-router-dom'
import Google from './components/Google'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import About from './pages/About'
import Counter from './pages/Counter'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Product from './pages/Product'

const RoutApp = () => {
    
  return (
    <div style={{textAlign: 'center'}}>
        <Navbar/>
        <Routes>
            <Route path="home"  element={<Home/>} />
            <Route path="login/*" element={<Login/>}>
                <Route path="signin" element={<SignIn/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="google" element={<Google/>}/>
            </Route>
            <Route path="about" element={<About/>} />
            <Route path="counter/:initialCount" element={<Counter/>} />
            <Route path="products/*" element={<Products/>} >
            <Route path=":id" element={<Product/>}/>

            </Route>
        </Routes>
    </div>
  )
}

export default RoutApp