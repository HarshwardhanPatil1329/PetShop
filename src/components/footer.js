// import React from 'react'

// const Footer = () => {
//     return (
//         <footer className="container-fluid text-center" style={{flexShrink:"0",height: "calc(100% - 60px)", backgroundColor: '#2a2a72', padding: '2% 2% 5% 2%', color: 'yellow',left:"0px",right:"0px",bottom:"0px"}}>
//             <div className="row">
//                 <div className="col-md-4 mt-md-0 mt-3">
//                     <h4 style={{color:"white"}}>Contacts</h4>
//                     <h6>+042-3867-890</h6>
//                 </div>
//                 <div className="col-md-4 mb-md-0 mb-3">
//                     <h4 style={{color:"white"}}>Address</h4>
//                     <h5> Inc.5454 I 55 NorthJackson, Mississippi</h5>
//                 </div>
//                 <div className="col-md-4 mb-md-0 mb-3">
//                     <h4 style={{color:"white"}}>Connect</h4>
//                     <a href="https://www.facebook.com/petpages/">
//                         <i className="fab fa-facebook" style={{backgroundColor:"black",padding: '6px', fontSize: '25px', color: 'white'}}></i>
//                     </a>
//                     <a href="https://twitter.com/hashtag/pets?lang=en">
//                         <i className="fab fa-twitter-square" style={{backgroundColor:"black",padding: '6px', fontSize: '25px', color: 'white'}}></i>
//                     </a>            
//                 </div>
//             </div>
//         </footer>
//     )
// }
        
// export default Footer
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

            <a href="/contact">Contact</a>
          </p>
           
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
