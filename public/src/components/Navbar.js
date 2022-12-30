
import React from 'react'
import "./Navbar.css"



const Navbar = () => {
  return (
    <div>
        <div className="container">
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">Mayank<span>Rana</span></h3>
          <div className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="main">
          <header>
            <div className="overlay">
              <div className="inner">
                <h2 className="title">Click on NavBar icon</h2>
                <p>
                  In this project I try to make a 3D navbar animation you can check it out by clicking on the nav bar icon on ther top right corner.
                </p>
                <button className="btn">Read more</button>
              </div>
            </div>
          </header>
        </div>

        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>

      
    </div>
    </div>
  )
}

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

export default Navbar;