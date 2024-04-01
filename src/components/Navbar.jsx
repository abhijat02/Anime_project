import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";



const Navbar = () => {
  return (
    <Stack 
    direction= 'row'
    alignItems= 'center'
    p={2}
    sx={{position : 'sticky', background: '#000', top:0, justifyContent: 'space-between'}}
    >
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
            <Typography variant="h4" color='#fff' p={1} fontWeight='bold'>
                AniSugoi
            </Typography>
      </Link>
      <SearchBar>
        
      </SearchBar>
    </Stack>
  )
  
}

export default Navbar