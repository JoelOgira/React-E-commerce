import { Routes, Route } from 'react-router-dom';
import Home from './Components/E-commerce/Home';

const App = () => {

  return (
    <div className="App min-h-[100dvh] bg-slate-600 text-white">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App;
