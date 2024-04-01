import {useState} from "react";
import { Stack, Typography, Button, Popover, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState('');

  const handlePopoverOpen = (e) =>{
    setAnchorEl(e.currentTarget);
  };
  const handlePopoverClose = (e) =>{
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
      <Stack
      direction='row'
      alignItems='center'
      onMouseEnter= {handlePopoverOpen}
      onMouseLeave = {handlePopoverClose}>
          <Button
          style={{ color: '#fff' }} 
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true">
            Genres
          </Button>
          <Popover
          id="mouse-over-popover"
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <MenuItem onClick={handlePopoverClose}>Action</MenuItem>
          <MenuItem onClick={handlePopoverClose}>Adventure</MenuItem>
          <MenuItem onClick={handlePopoverClose}>Comedy</MenuItem>
          
        </Popover>
      </Stack>
      <SearchBar />
      
      
    </Stack>
  )
  
}

export default Navbar