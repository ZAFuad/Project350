import React, { useState ,useRef} from 'react'
import styled from 'styled-components'
import axios from 'axios'
const ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'http'});
const Create = () => {
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
    const [_hash, setHash] = useState('');
     const handleOnCheckTitle = (e) => {
       setTitle( e.target.value.split(" ").join(""));
     };
     const handleOnCheckOwner = (e) => {
       setOwner( e.target.value.split(" ").join(""));
     };
     const handleOnCheckSymbol= (e) => {
       setSymbol( e.target.value.split(" ").join(""));
     };
     const fileUpload = (e)=>{
       e.preventDefault();
       const file = e.target.files[0];
       if(file){
       const reader = new window.FileReader();
       reader.readAsArrayBuffer(file);
       reader.onloadend= ()=>{
         setHash({buffer:Buffer(reader.result)});
       }
     }
     };
    const changeOnClick = e =>{
        e.preventDefault();
        title=title.toUpperCase();
        symbol =symbol.toUpperCase();
        owner=owner.toUpperCase();
        ipfs.add(_hash.buffer,(err,res)=>{
          if(!err) {
            const hash = res[0].hash;
            const info ={
                title,
                symbol,
                tokenPrice,
                tokenNumber,
                houseNo,
                plot,
                owner,
                deed,
                ward,
                roadNo,
                postCode,
                area,
                content,
                hash
            }
            console.log(info);
            axios.post('http://localhost:8080/asset/create',info)
            .then(res=> console.log(res.data))
            .catch(err=> console.log(err));
          }
          else console.log(err);
        });
        setTitle('');
        setSymbol('');
        setTokenPrice('');
        setTokenNumber('');
        setHouseNo('');
        setPlot('');
        setOwner('');
        setDeed('');
        setWard('');
        setroadNo('');
        setPostCode('');
        setArea('')
        setContent('');
        setHash('');
    }

    return (
        <AddContainer>
            <div className="container">
                <h1>Add New Asset</h1>
                <form onSubmit ={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input onKeyPress={handleOnCheckTitle} onChange={evt=>{
                            setTitle(evt.target.value);
                        }}
                        value ={title}
                        type="text" className="form-control" placeholder="Give a suitable title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="symbol">Symbol</label>
                        <input onKeyPress={handleOnCheckSymbol} onChange={evt=>setSymbol(evt.target.value)}
                        value ={symbol}
                        type="text" className="form-control" placeholder="Choose a unique symbol" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tokenPrice">Token price</label>
                        <input  onChange={evt=>setTokenPrice(evt.target.value)}
                        value ={tokenPrice}
                        type="number" inputMode="numeric" className="form-control" placeholder="Token price in $" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tokenNumber">Token's Quantity</label>
                        <input  onChange={evt=>setTokenNumber(evt.target.value)}
                        value ={tokenNumber}
                        type="number" inputMode="numeric" className="form-control" placeholder="plot number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="symbol">House No</label>
                        <input  onChange={evt=>setHouseNo(evt.target.value)}
                        value ={houseNo}
                        type="text" className="form-control" placeholder="Your house no:" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plot">Plot No</label>
                        <input  onChange={evt=>setPlot(evt.target.value)}
                        value ={plot}
                        type="number" inputMode="numeric" className="form-control" placeholder="plot number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="owner">Owner Name</label>
                        <input onKeyPress={handleOnCheckOwner} onChange={evt=>setOwner(evt.target.value)}
                        value ={owner}
                        type="text" className="form-control" placeholder="Owner's name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deed">Deed No</label>
                        <input  onChange={evt=>setDeed(evt.target.value)}
                        value ={deed}
                        type="number" className="form-control" placeholder="Your Asset's deed no" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ward">Ward No</label>
                        <input  onChange={evt=>setWard(evt.target.value)}
                        value ={ward}
                        type="number" inputMode="numeric" className="form-control" placeholder="Ward number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="roadNo">Road No</label>
                        <input  onChange={evt=>setroadNo(evt.target.value)}
                        value ={roadNo}
                        type="number" inputMode="numeric" className="form-control" placeholder="Road number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postCode">Post Code</label>
                        <input  onChange={evt=>setPostCode(evt.target.value)}
                        value ={postCode}
                        type="number" inputMode="numeric" className="form-control" placeholder="Post code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Asset loacation</label>
                        <textarea
                        value ={area}
                        onChange={evt=>setArea(evt.target.value)}
                         className="form-control" rows="2" placeholder="Give your asset's loacation"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Description</label>
                        <textarea
                        value ={content}
                        onChange={evt=>setContent(evt.target.value)}
                         className="form-control" rows="3" placeholder="Give a short description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hash">Your deed document</label>
                        <input onChange={fileUpload}
                        type="file" className="form-control"  />
                    </div>
                    <button type="submit" className="btn btn-lg btn-danger">Apply now</button>
                </form>
            </div>
        </AddContainer>
    )
}

export default Create


const AddContainer = styled.div`
    margin 3rem auto;
    padding:4rem;
    width:60rem;
    h1{
        font-weight:900;
        color:#000000;
    }
    .btn-danger{
        margin-top:2rem;
        background:#810000;
        border:none;
        &:hover{
            background:#1b1717;
        }
    }

`;
