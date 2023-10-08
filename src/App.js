
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AddPhone from './Pages/AddPhone';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Layout/>}>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/add" element={<AddPhone/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
