import React from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars";

function App() {
  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]
  return (
    <div className="App">
        <TopCars CarModel ={topCars}/>
    </div>
  );
}

export default App;
