import React, { useState } from 'react'
import './Hero.css'
import heroImg from '../../assets/hero-img.png'
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import {MdPrivateConnectivity} from "react-icons/md"


const Hero = () => {
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');
const sendMessage =()=>{
    console.log('msg sent')
}
    const admin = true;

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-text">
                    <p><span>John Doe </span>
                        is a Full-Stack Blockchain Developer From India.</p>
                    <h1>I develop decentralised apps in web3 space.</h1>
                    <h3>over 6 months of practical experience with a good knowledge in blockchain development.i help web3 community by contributing in the web3 space.</h3>
                    {/*  =========popup bootstrap==========  */}

                    <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Please Write Your Message Here!
                        </ModalHeader>
                        <ModalBody>
                            <form action="">
                                <Row>

                                    <input
                                        value={message}
                                        onChange={e => setMessage(console.log(e.target.value))}
                                        type="text" />
                                        <Button onClick={()=>sendMessage()} className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                    {/*  =========popup bootstrap end==========  */}
                    { admin === true ?(<button className="connect-btn">
                        <MdPrivateConnectivity className='icon'/>
                        </button>):('') 
                    }
                </div>
                <div className="hero-img">

                    <div className="img-container">
                        <img src={heroImg} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
