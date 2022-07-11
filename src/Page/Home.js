import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Listgame from './Listgame';
import Formorder from './Formorder';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor:'#f3fcff' }}>
        <CssBaseline />
        <Router> 
        <AppBar position="fixed" open={open} sx={{ backgroundColor:'#fff', color:'#000' }}>
            <Toolbar component={Link} to={"/"} style={{textDecoration:'none',color:'#000'}}>
                {/* <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton> */}
                <img src='/logoastore.png' width='40px' />
                <Typography variant="h6" noWrap component="div" >
                    <b>A</b>storepay 
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} Astore.my.id
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
            {[['Syarat & Ketentuan',<InfoIcon/>], ['Whatsapp',<WhatsAppIcon/>]].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                    {text[1]} &nbsp;
                    <ListItemText primary={text[0]} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider />
            
        </Drawer>
        <Main open={open}>
            
            <DrawerHeader />
            
               

                <Switch>

                    <Route path="/formorder/:cat/:id">
                        <Formorder/>
                    </Route>

                    <Route path="/" exact component={Listgame} ></Route>

                </Switch>

        

            <Divider light />
            <Typography paragraph variant="h6" sx={{fontWeight:'bold', marginTop:5}}>
                Top Up Game Online & Beli Voucher Game Online Terbaru dan Murah di LapakGaming
            </Typography>
            <Typography >
                Top Up game & voucher lapakgaming.com. Metode pembayaran lengkap, instant proses, terpercaya dan legal 100%. Buat para buyer dan seller dan sultan - sultan di luar sana pastikan belanja dan jualan top up game dan voucher mu di lapakgaming.com. Tersedia bermacam - macam jenis game populer seperti Mobile Legends, PUBG Mobile, Valorant, Free Fire, Ragnarok, Dragon Raja, Light Of Thel, dan berbagai game lainnya yang tidak kalah seru untuk dimainkan. 
            </Typography>
                
            <Divider style={{margin:30}}/>

            <Box sx={{ flexGrow: 1, textAlign:'left' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} component={Link} to={"/"} style={{textDecoration:'none',color:'#000'}}>
                    <b>AstorePay</b> <br/>
                    Top Up Game & Voucher Murah
                    </Grid>

                    <Grid item xs={6}>
                        <WhatsAppIcon/> <FacebookIcon/> <InstagramIcon/>
                    </Grid>
                </Grid>
            </Box>
        
        </Main>
        </Router>
    </Box>
  );
}
