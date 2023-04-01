import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import { Route, Routes } from 'react-router-dom';
import View from './Components/View';
import Add1 from './Components/Add1';

function App() {
  return (
    <div className="App">
     <Navigation/>
  <Routes>
    <Route path='/' element={<View/>} />
    <Route path='/add' element={<Add1
    data={{id: '', Name: '', Brand: '', Quantity: '',  Price: '' }}
    method="post"/>}/>
  </Routes>
    </div>
  );
}

export default App;
