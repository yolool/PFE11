import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import Afficher from './afficher';


function Stg({ openSidebarToggle, OpenSidebar }) {
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>



       <Afficher/>
    </div>

  )
}

export default Stg;

if (document.getElementById('Stg')) {
  const Index = ReactDOM.createRoot(document.getElementById("Stg"));

  Index.render(
    <React.StrictMode>
      <Stg/>
    </React.StrictMode>
  )
}
