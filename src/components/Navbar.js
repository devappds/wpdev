import React, { Component } from "react";


export class Navbar extends Component {

    render(){
        return(
            <header className="mainheader">
                <div className="container">
              
                    
              <nav className="navbar navbar-expand-sm">
  <div className="container">
    <div className="mainlogo wow bounceInUp"> <a className="navbar-brand" href="#">
        
    <img src='../images/logo-2.png' alt='Logo' />
       </a>
</div>
   

<div className="mainmenu wow bounceInUp">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        
          <ul class="dropdown-menu">
            <li className="nav-item"><a className="nav-link" href="#">Live Auction</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Discover Style One</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Discover Style Two</a></li>
          <li className="nav-item"><a classNameclass="nav-link" href="#">Item Details</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutus">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#our-services">Our Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#our-blog">Latest News</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
    </div>

    <div className="header-btn wow bounceInUp">

    <button type="button" className="btn btn-primary">Book Now</button>
    </div>
  </div>
</nav>
</div>
          
            </header>
         
        )
    }
}
