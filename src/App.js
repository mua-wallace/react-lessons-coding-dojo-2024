
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Form from './components/Form';
import Planets from './components/Planets';
import People from './components/People';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';


function App() {


  return (
    <div className='App1'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:word' element={<ParamsComponent />} />
        <Route path='/:number' element={<ParamsComponent />} />
        <Route path='/:word/:color/:bgColor' element={<ParamsComponent />} />
    
        <Route path='/people/:id' element={<Planets />} />
        <Route path='/people/:id' element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
