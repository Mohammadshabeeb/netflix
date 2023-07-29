import React from 'react';
import "./App.css"
import NavBar from './Components/Navbar/NavBar';
import {  originals } from './Url'
import { action } from './Url'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost url={originals} title="Netflix originals"/>
     <Rowpost url={action} title="Action" isSmall/>
     {/* <Rowpost url={documents} title="Documents" isSmall/> */}
    </div>
  );
}

export default App;
