import React from 'react'
import "./Projects.css"
import img1 from "../../assets/img1.png"
import { FaDonate } from 'react-icons/fa';


const Projects = () => {
    return (
        <section className="project-section">
            <h1 className="title">Projects </h1>
            <div className="card-wrapper">
            <a href="#1" className="project-card" >
                    <div className="card-img">
                        <img src={img1} alt="" /></div>
                    <div className="card-text">
                        <h3>Chai Dapp</h3>
                        <p>Dapp to gift eth to the person if you want to donate</p>
                    </div>
                </a>
                {/* card2 */}
                <a href="#2" className="project-card" >
                    <div className="card-img">
                        <img src={img1} alt="" /></div>
                    <div className="card-text">
                        <h3>Chai Dapp</h3>
                        <p>Dapp to gift eth to the person if you want to donate</p>
                    </div>
                </a>
                {/* card3 */}
                <a href="#3" className="project-card" >
                    <div className="card-img">
                        <img src={img1} alt="" /></div>
                    <div className="card-text">
                        <h3>Chai Dapp</h3>
                        <p>Dapp to gift eth to the person if you want to donate</p>
                    </div>
                </a>
            </div>

            <p className='donate'>Liked the project's ? Consider donating Eth's <FaDonate className='icon' /></p>
        </section>
    )
}

export default Projects
