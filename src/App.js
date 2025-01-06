
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import UsersPage from './pages/users';
import UserDetailsPage from './pages/userDetails';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import ProductsPage from './pages/products';
import ProductDetails from './pages/productDetails';

function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/userDetails/:id' element={<UserDetailsPage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/productDetails/:id' element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
