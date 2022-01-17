import React from "react"
import "../style.css"

export default function Contact() {
  return (
    <div className="contact">
        <a href="mailto:bicharri@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="email-button"><i class="fas fa-envelope"></i> Email</button>
        </a>
        <a href="https://www.linkedin.com/in/elvisbicharri/" target="_blank" rel="noopener noreferrer">
            <button className="linkedin-button"><i class="fab fa-linkedin"></i> LinkedIn</button>      
        </a>
    </div>
  )
}

