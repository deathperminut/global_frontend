
import './App.css';
import Landing from './Landing/landing';
import {Navigate,Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path='' element={<Navigate to="/Landing"/>}></Route>
      <Route path='/Landing' element={<Landing/>}/>
    </Routes>
  );
}

export default App;
