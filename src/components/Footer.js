import React, { Component } from "react";

export class Footer extends Component {

    render(){
        return(
            <footer>
               <div className="container">
               <div className="footer-social-icons">
          <ul className="mysocial">
            <li> <a href="#">
              <div className="social_icon"> <i className="fa fa-twitter"></i> </div>
              </a> </li>
            <li> <a href="#">
              <div className="social_icon"> <i className="fa fa-instagram"></i> </div>
              </a> </li>
            <li> <a href="#">
              <div className="social_icon"> <i className="fa fa-youtube"></i> </div>
              </a> </li>
            <li> <a href="#">
              <div className="social_icon"> <i className="fa fa-facebook-f"></i> </div>
              </a> </li>
          </ul>
        </div>
                <div className="copyright_text">
<p>Copyright 2023. All rights reserved.</p>

                </div>
               </div>
            </footer>
        )
    }
}
