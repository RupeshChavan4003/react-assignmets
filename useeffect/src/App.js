//import logo from './logo.svg';
import './App.css';
import React from "react";
import Todos from './components/Todos';

function App() {
//   fetch("http://localhost:3000/todos")
//  .then((res)=>res.json())
//  .then((data)=>{
//    console.log(data);
//  });

 
  return (
    <div className="App">
     <Todos/>
   
   
    </div>
  );
}

export default App;
