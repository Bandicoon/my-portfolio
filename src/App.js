import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './Homepage.js'
import NotImplemented from './components/NotImplemented.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={ <Homepage/> } />
        <Route path="/posts" element={ <NotImplemented/> } />
        <Route path="/projects" element={ <NotImplemented/> } />
        <Route path="/contact" element={ <NotImplemented/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;