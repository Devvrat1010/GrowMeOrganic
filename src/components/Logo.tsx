import Box from '@mui/material/Box';
export default function Logo(props: { mt: string; ml: string; width: string; height: string; fontSize: string;}){
    return(
        <Box sx={{bgcolor:"white",p:"5px",display:"flex",gap:"5px",alignItems:"center",width:"fit-content",mt:props.mt,ml:props.ml,height:"fit-content",borderWidth:"2px",borderColor:"black",borderStyle:"solid"}}>
            <Box sx={{bgcolor:'black',p:"5px",color:"white",width:props.width,height:props.height,textAlign:"center",fontFamily:"Bebas Neue",fontSize:props.fontSize,fontWeight:"light"}}>
                Survey
            </Box>
            <Box sx={{p:"5px",width:props.width,height:props.height,textAlign:"center",fontFamily:"",fontSize:props.fontSize}}>
                Sphere
            </Box>
        </Box>
    )
}