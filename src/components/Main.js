import React from "react"
import "../style.css"
import About from "./About"
import Contact from "./Contact"
import Interest from "./Interest"
import Name from "./Name"

export default function Main() {
  return (
    <div className="main">
        <Name />
        <Contact />
        <About />
        <Interest />
            
    </div>
  )
}

