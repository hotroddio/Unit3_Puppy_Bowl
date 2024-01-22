import React from 'react'
import Players from './features/Players';
import SinglePlayer from './features/SinglePlayer';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
    <div className="container">
      <Routes>
      <Route path="/" element={<Players/>}/>
      <Route path="/:viewInfo" element={<SinglePlayer/>}/>
      </Routes>
    </div>
    </>
  );
}
export default App
