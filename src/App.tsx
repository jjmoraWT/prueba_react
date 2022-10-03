import  React from 'react';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import HeaderComponent from './components/HeaderComponent'

import CarsView from './views/CarsView';
import FormView from './views/FormView';


export const Context:any = React.createContext([]);

function App() {

  


  return (
  
    <>
    <div className="App">
    <Router>
      <HeaderComponent>

      </HeaderComponent>
      
    
        <Routes>
            <Route path="/all-cars" element={<CarsView />}/>
            <Route path="/form-cars" element={<FormView />}/>
        </Routes>   
      </Router> 
    
    </div>
    </>
  );
}


export default App;
