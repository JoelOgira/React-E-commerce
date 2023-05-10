import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import ErrorPage from './pages/ErrorPage';
import Users from './pages/Users/Users';

const App = () => {

  return (
    <div className="App min-h-[100dvh]">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App;
