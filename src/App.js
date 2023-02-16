import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Cards from './components/mobile/Cards';
import Sales from './components/mobile/Sales';
import FemaleIcon from '@mui/icons-material/Female';
import GirlIcon from '@mui/icons-material/Girl';
import ToysIcon from '@mui/icons-material/Toys';
import ClothesMan from './components/mobile/ClothesMan';
import ClothesWoman from './components/mobile/ClothesWoman';
import ClothesChildrens from './components/mobile/ClothesChildrens';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

function App() {
  const switchMobile = useMediaQuery('(min-width:600px)');
  const [state, setState] = React.useState({
    right: false,
  });
  const [clothesChildrens, setClothesChildrens] = React.useState(false);
  const [clothesWoman, setClothesWoman] = React.useState(false);
  const [clothesMan, setClothesMan] = React.useState(false);
  const [sales, setSales] = React.useState(true)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 150, marginLeft: 0 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="Ofertas" disablePadding>
          <ListItemButton onClick={() => switchViews("sales")}>
            <LoyaltyIcon 
            style={{
              color: '#6F6F6E'
            }}
            />
            <ListItemText primary="Ofertas" />
          </ListItemButton>
        </ListItem>

        <ListItem key="Hombres" disablePadding>
          <ListItemButton onClick={() => switchViews("men")}>
            <FemaleIcon 
            style={{
              color: '#6F6F6E'
            }}
            />
            <ListItemText primary="Hombres" />
          </ListItemButton>
        </ListItem>

        <ListItem key="Mujeres" disablePadding>
          <ListItemButton onClick={() => switchViews("woman")}>
            <GirlIcon 
            style={{
              color: '#6F6F6E'
            }}
            />
            <ListItemText primary="Mujeres" />
          </ListItemButton>
        </ListItem>

        <ListItem key="Ninios" disablePadding>
          <ListItemButton onClick={() => switchViews("children")}>
            <ToysIcon 
            style={{
              color: '#6F6F6E'
            }}
            />
            <ListItemText primary="Niños" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );


  const switchViews = (show) => {
    if (show == "men") {
      setClothesMan(true);
      setClothesWoman(false);
      setClothesChildrens(false);
      setSales(false);

    } else if (show == "woman") {
      setClothesMan(false);
      setClothesWoman(true);
      setClothesChildrens(false);
      setSales(false);

    } else if (show == "children") {
      setClothesMan(false);
      setClothesWoman(false);
      setClothesChildrens(true);
      setSales(false);

    } else if (show == "sales") {
      setClothesMan(false);
      setClothesWoman(false);
      setClothesChildrens(false);
      setSales(true);
    }
  }

  const SwitchClotes = () => {
    if (clothesMan) {
      return <ClothesMan />
    } else if (clothesWoman) {
      return <ClothesWoman />
    } else if (clothesChildrens) {
      return <ClothesChildrens />
    } else if (sales) {
      return (
        <>
          <Cards />
          <Sales />
        </>
      );
    }
  }

  return (
    <>
      {switchMobile ?
        <p
          style={{
            fontSize: 60,
          }}
        >Desktop
        </p>
        :
        <>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static"
                style={{
                  backgroundColor: 'white'
                }}
              >
                <Toolbar variant="dense">
                  <IconButton edge="start" color="black" aria-label="menu" sx={{ mr: 2 }}
                    onClick={toggleDrawer("right", true)}
                  >
                    <MenuIcon style={{
                      fontSize: 30
                    }}
                    />
                  </IconButton>
                  <Typography variant="h6" color="black" component="div">
                    A&F Fashions
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </Box>
          </div>
          <SwitchClotes />
        </>
      }
    </>
  );
}

export default App;
