import React, { useState } from 'react';
import { AppBar, Tabs, Tab, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const tabStyle = {
  fontFamily: 'Great Vibes, cursive',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
};

function NavLog() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', boxShadow: 'none' }}>
          <img src={logo} alt='logo' style={{ height: '55px', width: '170px' }} />
          <IconButton edge="start" color="black" aria-label="menu" onClick={handleMenuClick} sx={{ display: { xs: 'block', md: 'none' }, marginLeft:'auto' }}>
            <MenuIcon />
          </IconButton>
          <Tabs centered sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tab style={{ ...tabStyle }} label='Home' component={Link} to='/ahome' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Adopt a pet' component={Link} to='/adopt' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='About PC' component={Link} to="/about" disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Contact' component={Link} to="/contact" disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Help' disableRipple disableFocusRipple component={Link} to="/help" />
            <Tab style={{ ...tabStyle }} label='Donate' component={Link} to='/donate' disableRipple disableFocusRipple />
            <Tab style={{ ...tabStyle }} label='Accesories' component={Link} to='/donate' disableRipple disableFocusRipple />
          </Tabs>
        </AppBar>
        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/adopt">Adopt a pet</MenuItem>
          <MenuItem onClick={handleMenuClose}>About PC</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
          <MenuItem onClick={handleMenuClose}>Help</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/donate">Donate</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default NavLog;
