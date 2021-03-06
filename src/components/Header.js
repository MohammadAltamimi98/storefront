import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function Header(props) {
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log(state.cart.count);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Store Front 🏪
          </Typography>
          <Button color="inherit">Cart ({state.cart.count}) 🛒</Button>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Header;
