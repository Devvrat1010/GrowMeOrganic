import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typewriter from 'typewriter-effect';
import Button from '@mui/material/Button';
import Logo from '../components/Logo';
import {useNavigate} from 'react-router-dom';
export default function Hero(){
    const navigate = useNavigate();

    const nextPage = () => {
        const wait = () => new Promise(resolve => setTimeout(resolve,175));
        wait()
        .then(() => {
        navigate('/userData')})
    }
    // setTimeout(() => {
        
    // }, timeout);        
    return(
        <Box sx={{bgcolor:"#101010",width:"100%",height:"730px",mt:0,p:0,display:"flex",justifyContent:"space-between"}}>
            <Box>
                <Logo 
                    mt="55px"
                    ml="55px"
                    width="193px"
                    height="96px"
                    fontSize="80px"
                />
                <Box sx={{color:"white",fontFamily:"poppins",fontWeight:"bold",fontSize:"70px",ml:"70px",mt:"30px"}}>
                    Explore Insights from Every Angle:
                </Box>
                <Box sx={{color:"white",fontSize:"40px",fontFamily:"poppins",fontWeight:"medium",ml:"76px"}}>
                    Welcome to Surveysphere -
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Your Source for data driven Discovery')
                            .pauseFor(1000)
                            .deleteAll()
                            .pauseFor(500)
                            typewriter.typeString('Personalize data as per your preference')
                            .pauseFor(1000)
                            .start();
                        }}
                        options={{
                            loop: true,
                            delay: 100,
                        }}
                        />
                </Box>
                <Button onClick={nextPage} sx={{background:"#686868",color:"black",ml:"76px",mt:"30px",fontSize:"40px",borderRadius:"20px",":hover":{
                    background:"#505050"
                }}}>
                    Get Started
                </Button>


            </Box>
            <Box>
                <Avatar alt="Remy Sharp" sx={{height:"700px",width:"fit-content",mr:"70px",mb:'0px'}} src="https://i.giphy.com/media/IXnygGeB6LPPi/giphy.webp" />
            </Box>
        </Box>

    )
}