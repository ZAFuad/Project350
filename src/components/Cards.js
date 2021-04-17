import React from 'react';
import {Link} from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>Check out the houses!!!</h1>
            <div className='cards--container'>
                <div className='cards--wrapper'>
                    <ul className='cards--items'>
                        <CardItem
                        src = 'images/img1.jpg'
                        text = "House no-01"
                        path='/market-place'/>
                         <CardItem
                        src = 'images/img2.jpg'
                        text = "House no-02"
                        path='/market-place'/>
                         <CardItem
                        src = 'images/img3.jpg'
                        text = "House no-03"
                        path='/market-place'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;