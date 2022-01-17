import React from "react"
import "../style.css"
import twitter from "../images/twitter-icon.png"
import facebook from "../images/facebook-icon.png"
import instagram from "../images/instagram-icon.png"
import github from "../images/github-icon.png"

export default function Footer() {
  return (
    <div className="footer">
        <a href="https://twitter.com/bicharri" target="_blank" rel="noopener noreferrer">
            <img className="icon-size" src={twitter} alt=""/>
        </a>        
        <img className="icon-size" src={facebook} alt=""/>
        <img className="icon-size" src={instagram} alt=""/>
        <a href="https://github.com/cheddarking" target="_blank" rel="noopener noreferrer">
            <img className="icon-size" src={github} alt=""/>
        </a>
        
    </div>
  )
}

