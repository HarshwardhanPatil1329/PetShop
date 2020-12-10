
import React from "react";
import "./Footer.css";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Pet<span>Shop</span>
          </h3>

          <p className="footer-links">
            <a href="/" className="link-1">
              Home  
            </a>
            <a href="#" className="link-1">
             | Contact
            </a>

            
          </p>
          <div style={{}}>
        <div>
        
          <p style={{color:"white"}}> © 2020 copyright all right reserved
          <a href="/" style={{color:"yellow",textDecoration:"none"}}>PetShop</a>
        </p>
        </div>
      </div>
           
        </div>

        <div className="footer-center">
            <h4 style={{color:"white"}}>Address</h4>
            <h5 style={{color:"yellow"}}> Inc.5454 I 55 NorthJackson, Mississippi</h5>

          <div style={{color:"yellow"}}>
            <EmailIcon />
            <p>
              <a href="mailto:support@company.com" >support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com/pets.officially/">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/petsathome?lang=en">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/company/petsmart/">
              <LinkedInIcon />
            </a>
            <a href="#">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
