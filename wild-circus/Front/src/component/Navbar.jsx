import React from "react";
import './Navbar.css'
import './CssForAll.css'

function Navbar(props){
    return(
        <div className='NavBarContainer Flex SpaceBetween'>
            <ul className='Flex SpaceAround MaxWidth ItemCenter'>
                <li className='NoStyleList BorderRight WidthLinkBar'>
                    home
                </li>
                <li className='NoStyleList BorderRight WidthLinkBar'>
                    About us
                </li>
                <li className='NoStyleList BorderRight WidthLinkBar'>
                    News
                </li>
                <li className='NoStyleList WidthLinkBar '>
                    Contact
                </li>
            </ul>
            <div className='logoNavContainer Flex SpaceAround ItemCenter'>
                <img className='logoNavbar' src="https://zupimages.net/up/20/05/8ol4.png" alt="logoFacebook"/>
                <img className='logoNavbar' src="https://zupimages.net/up/20/05/wcna.png" alt="logoTwitter"/>
                <img className='logoNavbar' src="https://zupimages.net/up/20/05/o5fl.png" alt="logoInstagram"/>
            </div>
        </div>
      
 
  
    )
};

export default Navbar;
