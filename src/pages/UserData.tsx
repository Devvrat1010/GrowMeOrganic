import Logo from "../components/Logo"
import { Box } from '@mui/material';
import Form from "../components/Form"

export default function userData(){
    return (
        <Box sx={{background:"white",height:"100%",display:"flex"}}>
            <Box sx={{fontSize:"100px",width:"50%"}}>
                <Box>
                    <Logo 
                        mt="14px"
                        ml="11px"
                        width="173px"
                        height="76px"
                        fontSize="70px"
                    />
                </Box>
                <Box sx={{fontFamily:"Bebas Neue",fontWeight:"normal",fontSize:"66px",ml:"161px",mt:"8%"}}>
                    CREATE PROFILE
                </Box>
                <Form/>

            </Box>  
            <img src="https://i.ibb.co/vvYwR8X/pexels-photo-265642-hehe3.jpg" style={{height:"",width:""}}/>
        </Box>

    )
}
