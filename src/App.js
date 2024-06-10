import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import Searchfriend from './components/Searchfriend';
import ViewFriend from './components/ViewFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddFriend/>}/>
      <Route path='/Searchfriend' element={<Searchfriend/>}/>
      <Route path='/ViewFriend' element={<ViewFriend/>}/>


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
