import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Hero from './pages/Hero';
import UserData from './pages/UserData';
import TakeSurvey from './pages/TakeSurvey';
import Data from './pages/Data';


function App() {

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
