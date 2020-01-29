import React from "react";
import './Navbar.css'

function Navbar(props){
    return(
        <div className='navBarContainer'>
            <ul>
                <li>
                    home
                </li>
                <li>
                    About us
                </li>
                <li>
                    News
                </li>
                <li>
                    Contact
                </li>
            </ul>
            <img src="https://zupimages.net/up/20/05/8ol4.png" alt="logoFacebook"/>
            <img src="https://zupimages.net/up/20/05/wcna.png" alt="logoTwitter"/>
            <img src="https://zupimages.net/up/20/05/o5fl.png" alt="logoInstagram"/>
        </div>
      
 
  
    )
};

export default Navbar;
