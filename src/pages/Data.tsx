import { Box } from "@mui/material"
import {useEffect,useState} from "react"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import {DataGrid} from "@mui/x-data-grid"


export default function TakeSurveyData(){
    console.log("started")

    const [temp,setTemp]=useState<any[]>([])
    const getData=async ()=>{
        console.log("func,hehe")
            // await fetch('https://www.balldontlie.io/api/v1/teams')
            // .then((response) => response.json())
            // .then(data => setTemp(data))
            await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then(data => setTemp(data))
            // await axios.get('https://www.balldontlie.io/api/v1/teams')
            // .then((res)=>{setTemp(res.data.data)})
            console.log(temp)
            // let answer=true
            console.log(temp[0])
            const check=temp[0]
            console.log("endFunc")
        }
    useEffect(()=>{
        console.log("useEffect")
        getData()
        console.log("endEffect")
    },[])
    console.log(temp)
    
    const columns=[
        {field:"id",headerName:"ID",width:100},

        {field:"userId",headerName:"userId",width:100},
        {field:"title",headerName:"title",width:300 },
        {field:"body",headerName:"body",width:"100%"}
    ]

    const rows=
        temp.map((item)=>{
            return(

                {id:item.id,
                userId:item.userId,
                title:item.title,
                body:item.body}

            )
        })


    return(
        
        <Box sx={{background:"white",height:"100%",width:"100%"}}>
            <Box sx={{display:"flex",width:"100%"}}>
                <Logo 
                    mt="14px"
                    ml="11px"
                    width="173px"
                    height="76px"
                    fontSize="70px"
                    />
                <Navbar/>  
            </Box>
            <Box sx={{fontFamily:"poppins"}}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    getRowHeight={() => 'auto'}
                    />
            </Box>

        </Box>
    )

}