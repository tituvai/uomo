
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Lookbook from './components/pages/Lookbook'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import ShopDetiles from './components/pages/ShopDetiles'
import Card from './components/pages/Card'
import Checkout from './components/pages/Checkout'
import OderConpleted from './components/pages/OderConpleted'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/lookbook' element={<Lookbook/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/shopDetiles' element={<ShopDetiles/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/oderConpleat' element={<OderConpleted/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
