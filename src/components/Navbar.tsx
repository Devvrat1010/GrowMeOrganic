
import { Box,Button } from "@mui/material"
import {useNavigate} from "react-router-dom"

export default function Navbar(){

    const navigate = useNavigate()
    const btn={background:"#686868",color:"black",ml:"76px",mt:"30px",fontSize:"40px",borderRadius:"20px",":hover":{
        background:"#505050"}}
    const getData=()=>{
        console.log("navigating")
        navigate("/takeSurvey/data")
    }
    

    return(
            <Box sx={{height:"fit-content",mr:"50px",width:"100%",display:"flex",justifyContent:"flex-end",fontSize:"40px"}}>
                    <Button variant="contained" onClick={getData} sx={btn}>
                        Data
                    </Button>
                    <Button variant="contained" onClick={()=>navigate("/takeSurvey")} sx={btn}>
                        Survey
                    </Button>
            </Box>      
        
    )
}