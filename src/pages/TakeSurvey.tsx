import { Box, Button} from "@mui/material"
import {useEffect, useState} from "react"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import CustomerService from "../components/CustomerService";
import Design from "../components/Design"

export default function TakeSurvey(){

    const navigate = useNavigate()

    const [validated,setValidated]=useState<boolean>(false)
    useEffect(()=>{
        try{
            const count=localStorage.getItem("count")
            // console.log("end")
            if(count==="3"){
                setValidated(true)
            }
        }
        catch(err){
            console.log(err)
        }
    
    },[])

    const btn={background:"#686868",color:"black",ml:"76px",mt:"30px",fontSize:"40px",borderRadius:"20px",":hover":{
        background:"#505050"}}



    return(
          
        <Box sx={{background:"white",height:"100%"}}>
            {
                validated ? (
                <Box>
                    <Box sx={{display:"flex"}}>
                        <Logo 
                            mt="14px"
                            ml="11px"
                            width="173px"
                            height="76px"
                            fontSize="70px"
                            />
                        <Navbar/>
                    
                    </Box>
                    <Box sx={{display:"flex",gap:"100px",m:"30px"}}>
                        <CustomerService/>
                        <Design/>
                        
                    </Box>
                </Box>

                ):                
                (<Box>
                    <Button onClick={()=>navigate("/userData")} variant="contained" sx={btn}>
                        Fill Form First
                    </Button>
                </Box>)
            }
        </Box>
      )

}