import {Box,Checkbox,FormControlLabel,Fab} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

export default function CustomerService(){
    const [checked, setChecked] = useState([false, false]);
    const [collapse1,setCollapse1]=useState<boolean>(false)

    const handleCollapse1=()=>{
        setCollapse1(!collapse1)
    }

    const handleChangeParent1= (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
      };
    
      const parent1Child1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
      };
    
      const parent1Child2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
      };

    const customerServiceChildren=(<Box sx={{display:"flex",flexDirection:"column",ml:"60px"}}>
            <FormControlLabel
                label="Customer Success"
                control={<Checkbox
                    checked={checked[0]}
                    onChange={parent1Child1}
                />}
            />
            <FormControlLabel
                label="Support"
                control={<Checkbox
                    checked={checked[1]}
                    onChange={parent1Child2}
                />}
            />
        </Box>)
    return(
        <Box>
            <Fab size="small" color="secondary" aria-label="add" onClick={handleCollapse1}>
                <AddIcon />
            </Fab>
            <FormControlLabel
            label="Customer Service"
            control={
                <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChangeParent1}
                />
            }
            />
            {(collapse1 || (checked[0] && checked[1]))  &&  customerServiceChildren}
        </Box>
    )
}
