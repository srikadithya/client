
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Donate from './pages/Donate.js';
import Membership from "./pages/Membership.js";
import Contact from './pages/Contact.js';
import Auth from './pages/Auth.js';
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
      </Routes>
      </BrowserRouter>
    </body>
  );
}



export default App;
