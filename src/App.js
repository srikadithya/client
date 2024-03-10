
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Donate from './pages/Donate.js';
import Membership from "./pages/Membership.js";
import Contact from './pages/Contact.js';
import Auth from './pages/Auth.js';
import Requests from './pages/Requests.js';
import AdoptForm from './pages/AdoptForm.js';
import AfterLogin from './pages/AfterLogin.js';
import Help from './pages/Help.js';
import ShowRequests from './pages/ShowRequests.js';
import Accessories from './pages/Accessories.js';
import About from './pages/About.js';

function App() {
  return (
    
    <body>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/request" element={<Requests/>}/>
        <Route path="/adopt" element={<AdoptForm/>}/>
        <Route path="/ahome" element={<AfterLogin/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/requests" element={<ShowRequests/>}/>
        <Route path="/accesories" element={<Accessories/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </body>
  );
}



export default App;
