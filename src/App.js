import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home';
import Courses from './Courses';
import Faculty from './Faculty';
import Registeration from './Register';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/courses" element={<Courses/>}></Route>
          <Route exact path="/faculty" element={<Faculty/>}></Route>
          <Route exact path="/registration" element={<Registeration/>}></Route>
          <Route exact path="/aboutUs" element={<AboutUs/>}></Route>
          <Route exact path="/contactUs" element={<ContactUs/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
