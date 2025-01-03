
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/home';
import AboutPage from './pages/about';

function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
