import React from 'react'
import '../App.css';
import { Button } from './Button'
import './Main.css';

function Main() {
    return (
        <div className='main-container'>
            <video src="./video/video-1.mp4" autoPlay loop muted />
            <h1>
                Something New
            </h1>
            <p> Find your favourite house</p>

            <div className='main-btn'>
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    GET STARTED
                </Button>
                
            </div>
        </div>
    )
}
export default Main;