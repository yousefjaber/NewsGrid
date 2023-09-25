import React from 'react'
import logo from '../../public/images/logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
export default function navBar(){  
    return ( 
<nav id="main-nav">
    <div className="container">
      <img src={logo} alt="NewsGrid" class="logo"/>
      <div className="social">
        <a href="http://facebook.com" target="_blank"><FaFacebook className="fab fa-facebook fa-2x"/></a>
        <a href="http://twitter.com" target="_blank"><FaTwitter class="fab fa-twitter fa-2x"/></a>
        <a href="http://instagram.com" target="_blank"><FaInstagram class="fab fa-instagram fa-2x"/></a>
        <a href="http://youtube.com" target="_blank"><FaYoutube class="fab fa-youtube fa-2x"/></a>
      </div>
      <ul>
        <li><a className="current" href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    </div>
  </nav>
  );
}
