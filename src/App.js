import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Staff from './Pages/Staff';
import ContactUs from './Pages/ContactUs';
import Facilities from './Pages/Facilities';
import Programs from './Pages/Programs';
import Camps from './Pages/Camps';
import Lessons from './Pages/Lessons';
import Tournaments from './Pages/Tournaments';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Fragment>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/activities" element={<Home/>}/>
   <Route path="/staff" element={<Staff/>}/>
   <Route path="/facilities" element={<Facilities/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contactus" element={<ContactUs/>}/>
   <Route path="/programs" element={<Programs/>}/>
   <Route path="/camps" element={<Camps/>}/>
   <Route path="/lessons" element={<Lessons/>}/>
   <Route path="/tournaments" element={<Tournaments/>}/>
   <Route path="*" element={<PageNotFound />} />
  </Routes>
  </Fragment>
  );
}
export default App;
