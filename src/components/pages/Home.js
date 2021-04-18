import '../../App.css';
import Main from '../Main';
import Cards from '../Cards';
import Footer from '../Footer';
import React ,{useState ,useEffect} from 'react'
import {Route}  from 'react-router-dom'
import axios from 'axios'
function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/asset").
            then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    });

    return (
        <>
            <Main />
            <Route exact path="/"
                render={() => <Cards
                    posts={posts}
                />}
                />
            <Footer/>
        </>
    );
}
export default Home;
