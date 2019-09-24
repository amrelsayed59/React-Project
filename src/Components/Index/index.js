import React, { Component } from 'react';

import Home from './../Home'
import Work from './../Work'
import Portofolio from './../Portofolio'
import About from './../About'
import Profile from './../Profile'
import SocialMedia from './../SocialMedia'
import Footer from './../Footer'



class Index extends Component {
  render() {
    return (
      <div>
       
        <Home/>
        <About/>
        <Portofolio/>
        <Profile />
        <Work/>
        <SocialMedia/>
        <Footer/>
      </div>
    );
  }
}

export default Index;
