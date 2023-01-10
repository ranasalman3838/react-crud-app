import './App.css';
import Home from './components/Home';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Home />
     <Router>
      <Routes>
        <Route path='/' element={<home />}/>
      </Routes>
      
     </Router>    </div>
  );
}

export default App;
