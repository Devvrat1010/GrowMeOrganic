import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Hero from './pages/Hero';
import UserData from './pages/UserData';
import TakeSurvey from './pages/TakeSurvey';
import Data from './pages/Data';
import Survey from './pages/Survey';
import { useEffect } from 'react';


function App() {
    useEffect(()=>{
        console.log("useEffect")
        const curr=fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) =>localStorage.setItem("data",JSON.stringify(data)));
        // localStorage.setItem("data",JSON.stringify(curr))
        // console.log(curr)
    },[])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/userData" element={<UserData/>} />
                <Route path="/takeSurvey" element={<TakeSurvey/>} />
                <Route path="/takeSurvey/data" element={<Data/>} />
            </Routes>    
        </Router>
    )
}

export default App
