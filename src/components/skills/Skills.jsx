import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";


const Skills = () => {
  return (
    <section className="skills-section">

        <img src={react} alt="" />
        <img src={btc} alt="" />
        <img src={eth} alt="" />
        <img src={truffle} alt="" />
        <img src={gns} alt="" />
        <img src={polygon} alt="" />
        <img src={node} alt="" />
    </section>
  )
}

export default Skills
