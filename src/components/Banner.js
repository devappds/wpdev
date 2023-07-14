import React, { Component } from "react";

export class Banner extends Component {

    render(){
        return(
            
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  
  <div className="carousel-inner">
  <div className="carousel-item active">
    <div className="heroitem-bg" style={{
      backgroundImage: 'url("../images/banner/slider1.jpg")'
    }}><div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>Welcome to lorem ipsjm industry</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div class="header-btn"><button type="button" className="btn btn-primary btn-lg">Read More</button></div>
    </div> 
    
    </div>
    </div>
    <div className="carousel-item">
    <div className="heroitem-bg" style={{
      backgroundImage: 'url("../images/banner/slider2.jpg")'
    }}><div className="hero-overlay"></div>
      <div className="hero-content container">
      <h1>Welcome to lorem ipsjm industry</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div class="header-btn"><button type="button" className="btn btn-primary btn-lg">Read More</button></div>
    </div> 
    
    
    </div>
    </div>
    <div className="carousel-item">
    <div className="heroitem-bg" style={{
      backgroundImage: 'url("../images/banner/slider3.jpg")'
    }}><div className="hero-overlay"></div>
      <div className="hero-content container">
      <h1>Welcome to lorem ipsjm industry</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div class="header-btn"><button type="button" className="btn btn-primary btn-lg">Read More</button></div>
    </div> 
    
    </div>
    </div>
  </div>
  
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
         
        )
    }
}
