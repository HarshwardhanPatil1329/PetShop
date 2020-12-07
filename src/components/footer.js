import React from 'react'

const Footer = () => {
    return (
        <footer className="container-fluid text-center" style={{flexShrink:"0",height: "calc(100% - 60px)", backgroundColor: '#2a2a72', padding: '2% 2% 5% 2%', color: 'yellow',left:"0px",right:"0px",bottom:"0px"}}>
            <div className="row">
                <div className="col-md-4 mt-md-0 mt-3">
                    <h4 style={{color:"white"}}>Contacts</h4>
                    <h6>+042-3867-890</h6>
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                    <h4 style={{color:"white"}}>Address</h4>
                    <h5> Inc.5454 I 55 NorthJackson, Mississippi</h5>
                </div>
                <div className="col-md-4 mb-md-0 mb-3">
                    <h4 style={{color:"white"}}>Connect</h4>
                    <a href="https://www.facebook.com/petpages/">
                        <i className="fab fa-facebook" style={{backgroundColor:"black",padding: '6px', fontSize: '25px', color: 'white'}}></i>
                    </a>
                    <a href="https://twitter.com/hashtag/pets?lang=en">
                        <i className="fab fa-twitter-square" style={{backgroundColor:"black",padding: '6px', fontSize: '25px', color: 'white'}}></i>
                    </a>            
                </div>
            </div>
        </footer>
    )
}
        
export default Footer

