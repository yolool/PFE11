import React from "react";
import Slideshow from "./Slideshow";
import "./slideshow.css";
import ReactDOM from 'react-dom/client';
export default function Acceuil() {

  return (
    <>
    <div className="container-fluid">
<div id="navbar" className="navbar" style={{display: 'flex', justifyContent: 'space-between', padding: '10px 30px'}}>
        <div id="gesticom">
            <a className="active">
                <img src="/images/GestiCom.png" alt="" />
            </a>
        </div>

        <div >
        <img src="./images/GestiCom.png" id="noooooooooo"  alt="" />

        </div>
    </div>
    </div>

    <div >
        <Slideshow interval={5000}/>
    </div>



    <div className="circles_div">
  <a href="login?par=1" className="item">
    <div className="ellipse formateur"></div>
    <p>Formateur</p>
  </a>
  <a href="login?par=2" className="item">
    <div className="ellipse stagiaire"></div>
    <p>Stagiaire</p>
  </a>
  <a href="login?par=3" className="item">
    <div className="ellipse admin"></div>
    <p>Admin</p>
  </a>
</div>


    </>
  )
}
if (document.getElementById('acc')) {
    const Index = ReactDOM.createRoot(document.getElementById("acc"));

    Index.render(
        <React.StrictMode>
            <Acceuil/>
        </React.StrictMode>
    )
}
