import React, {useState,useEffect}from 'react'
import styled from "styled-components"
import {useParams} from 'react-router-dom';
import axios from 'axios'

function Detail() {
    let [title, setTitle] = useState('');
    let [symbol, setSymbol] = useState('');
    let [tokenPrice,setTokenPrice]= useState('');
    let [tokenNumber, setTokenNumber]=useState('');
    let [houseNo, setHouseNo] = useState('');
    let [plot ,setPlot]=useState('');
    let [owner,setOwner] = useState('');
    let [deed , setDeed] =useState('');
    let [ward  , setWard] =useState('');
    let [roadNo , setroadNo] =useState('');
    let [postCode , setPostCode] = useState('')
    let [content , setContent]= useState('');
    let [area , setArea] =useState('')
    let [_hash, setHash] = useState('');
    let {id} =useParams();
    console.log(id);   
    useEffect(()=>{
 
        axios.get(`http://localhost:8080/asset/${id}`) 
        .then(res=>{
            console.log(id)
            setTitle(res.data.title);
            setSymbol(res.data.symbol);
            setTokenPrice(res.data.tokenPrice);
            setTokenNumber(res.data.tokenNumber);
            setHouseNo(res.data.houseNo);
            setPlot(res.data.plot);
            setOwner(res.data.owner);
            setDeed(res.data.deed);
            setWard(res.data.ward);
            setroadNo(res.data.roadNo);
            setPostCode(res.data.postCode);
            setArea(res.data.area);
            setHash(res.data.hash);
            setContent(res.data.content);


        })
        .catch(err=> console.log(err));       
    })
    
    return (
        <ViewContainer>
            <h2>{title}</h2>
            <h2>{symbol}</h2>
            <h2>{tokenNumber}</h2>
            <h2>{tokenPrice}</h2>
            <h2>{houseNo}</h2>
            <h2>{plot}</h2>
            <h2>{owner}</h2>
            <h2>{deed}</h2>
            <h2>{ward}</h2>
            <h2>{roadNo}</h2>
            <h2>{postCode}</h2>
            <h2>{area}</h2>
            <img src= {`https://ipfs.io/ipfs/${_hash}`}/>
            <p>{content}</p>
        </ViewContainer>
    )
}

export default Detail


const ViewContainer = styled.div `

    margin: 6rem auto ;
    padding:3rem;
    img{
        width:800;
        height:600px;
    }
`;