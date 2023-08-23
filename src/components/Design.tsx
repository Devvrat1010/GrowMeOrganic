import React, { useState } from 'react';
import { Box, Checkbox, Fab, FormControlLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function Design(){
    
    const [checked2, setChecked2] = useState([false, false,false]);
    const [collapse2,setCollapse2]=useState<boolean>(false)

    const handleCollapse2=()=>{
        setCollapse2(!collapse2)
    }


    const handleChangeParent2= (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2([event.target.checked, event.target.checked,event.target.checked]);

        };
    
    const parent2Child1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2([event.target.checked, checked2[1],checked2[2]]);
        };
    
    const parent2Child2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2([checked2[0], event.target.checked,checked2[2]]);
        };
    
    const parent2Child3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2([checked2[0], checked2[1],event.target.checked]);
        };


    const designChildren=(
        <Box sx={{display:"flex",flexDirection:"column",ml:"60px"}}>
            <FormControlLabel
                label="Graphic Design"
                control={<Checkbox
                    checked={checked2[0]}
                    onChange={parent2Child1}
                />}
            />  
            <FormControlLabel
                label="Product Design"
                control={<Checkbox
                    checked={checked2[1]}
                    onChange={parent2Child2}
                />}
            />  
            <FormControlLabel
                label="Web Design"
                control={<Checkbox
                    checked={checked2[2]}
                    onChange={parent2Child3}
                />}
            />  
            
        </Box>)
    return(
        <Box>
            <Fab size="small" color="secondary" aria-label="add" onClick={handleCollapse2}>
                <AddIcon />
            </Fab>
            <FormControlLabel
            label="Design"
            control={
                <Checkbox
                checked={checked2[0] && checked2[1] && checked2[2]}
                indeterminate={(checked2[0] !== checked2[1])||(checked2[1] !== checked2[2])||(checked2[0] !== checked2[2])}
                onChange={handleChangeParent2}
                />
            }
            />
            {(collapse2 || (checked2[0] && checked2[1] && checked2[2])) && designChildren}
        </Box>
    )
}
