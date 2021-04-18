import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import CardItem from './CardItem';
import axios from 'axios'
import './Cards.css';

const Cards = ({ posts }) => {

    return(
        <div className='cards'>
            <h1>Check out the houses!!!</h1>
            <div className='cards--container'>
                <div className='cards--wrapper'>
                    <ul className='cards--items'>
                      {posts.map(post=>{
                        return(
                        <CardItem
                        src = 'images/img1.jpg'
                        text = {post.title}
                        path={post._id}/>
                        )
                      })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;
