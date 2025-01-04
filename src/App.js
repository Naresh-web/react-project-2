
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import UsersPage from './pages/users';
import UserDetailsPage from './pages/userDetails';

function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/users' element={<UsersPage/>}></Route>
          <Route path='/userDetails/:id' element={<UserDetailsPage/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
