import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { Link, useParams } from 'react-router-dom';

import {alldata} from './../Data/Data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Divider sx={{marginTop:3,marginBottom:3,fontWeight:'bold'}}>
            <Chip label="HOT GAME" />
        </Divider>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
            {alldata.hotgame.map((items, index) => (
            <Box item xs={2} sm={4} md={4} key={index} sx={{padding:'3px'}}  component={Link} to={"/formorder/hotgame/"+index} style={{textDecoration:'none'}}>
                <Item style={{borderRadius: '10%', padding:6, width:'110px'}}>
                    <img width="100" height="100" src={"/Images/"+items[1]} style={{borderRadius: '10%'}} />
                    <Typography paragraph sx={{marginTop:1, marginBottom:1, color:'black', fontSize:14}}>
                        {items[0]}
                    </Typography>
                </Item>
            </Box>
            ))}

        </Grid>

        <Divider sx={{marginTop:3,marginBottom:3,fontWeight:'bold'}}>
            <Chip label="NEW RELEASE" />
        </Divider>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        
            {alldata.newrelease.map((items, index) => (
            <Box item xs={2} sm={4} md={4} key={index} sx={{padding:'3px'}} component={Link} to={"/formorder/newrelease/"+index} style={{textDecoration:'none'}}>
                <Item style={{borderRadius: '10%', padding:6, width:'110px'}}>
                    <img width="100" height="100" src={"/Images/"+items[1]} style={{borderRadius: '10%'}} />
                    <Typography paragraph sx={{marginTop:1, marginBottom:1, color:'black', fontSize:14}}>
                        {items[0]}
                    </Typography>
                </Item>
            </Box>
            ))}

        </Grid>

        <Divider sx={{marginTop:3,marginBottom:3,fontWeight:'bold'}}>
            <Chip label="VOUCHER GAME" />
        </Divider>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
            {alldata.gamevoucher.map((items, index) => (
            <Box item xs={2} sm={4} md={4} key={index} sx={{padding:'3px',}} component={Link} to={"/formorder/vouchergame/"+index} style={{textDecoration:'none'}}>
                <Item style={{borderRadius: '10%', padding:6, width:'110px'}}>
                    <img width="100" height="100" src={"/Images/"+items[1]} style={{borderRadius: '10%'}} />
                    <Typography paragraph sx={{marginTop:1, marginBottom:1, color:'black', fontSize:14}}>
                        {items[0]}
                    </Typography>
                </Item>
            </Box>
            ))}

        </Grid>

    </Box>
  );
}