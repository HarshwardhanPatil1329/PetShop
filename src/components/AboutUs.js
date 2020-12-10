import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import styled from "styled-components";

const  AboutUS= () => {
  
  return (


<div>

<section id="what-we-do" className="pt-3 pb-0" style={{}}>
    <div className="container-fluid">
        <h4 className="section-title  h3">What we do</h4>
        
        <div className="row mt-3">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card">
                    <div className="card-block block-1">
                        <h4 className="card-title">Our Love for Pets  </h4>
                        <p className="card-text">Sure we’re a bunch of Developers, Designers, Writers, Managers and Thinkers. </p>
                        <a href="" className="read-more">Read more<i className="fa fa-angle-double-right " /></a>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card">
                    <div className="card-block block-2">
                        <h4 className="card-title"> Pets</h4>
                        <p className="card-text">Little Creatures Pet Store in Mississippi. A pet store with everything you need.</p>
                        <a href="" className="read-more">Read more<i className="fa fa-angle-double-right " /></a>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card">
                    <div className="card-block block-3">
                        <h4 className="card-title">You Pet deserves more Care</h4>
                        <p className="card-text">Pet Insurance can make the difference in the kind of care you can get for your pet. </p>
                        <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card">
                    <div className="card-block block-4">
                        <h4 className="card-title">making your Pet Happier</h4>
                        <p className="card-text">Dogs love to play, and engaging in some indoor games such as hide & seek is an easy way to make your dog happy.</p>
                        <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card">
                    <div className="card-block block-5">
                        <h4 className="card-title">How you do it</h4>
                        <p className="card-text">We care for you and brings perfect pet for you</p>
                        <a href="" title="Read more" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card">
                    <div className="card-block block-6">
                        <h4 className="card-title">All over the world</h4>
                        <p className="card-text">Our team is all over the world.</p>
                        <a href="" className="read-more">Read more<i className="fa fa-angle-double-right ml-2" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  );
};

export default AboutUS;