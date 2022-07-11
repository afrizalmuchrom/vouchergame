import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { Link, useParams } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const hostgame = [
    ['Mobile Legends','mobleg-logo.png','Zone ID'],
    ['Free Fire','free-fire-new-logo.png','-'],
    ['Free Fire MAX','free-fire-max-logo.png','-'],
    ['Valorant','valorant-logo.png','-'],
    ['UC PUBGM - Indonesia','pubgm-logo.png','-'],
    ['Genshin Impact','genshin-logo.png',['America','Asia','Europe','TW_HK_MO']],
    ['Ragnarok X-ID Number','rox-logo.png',["Opera Phantom","Wing of Blessing","Royal Instrument","Valhalla","Gungnir","Central Plains","Dark Lord","Temple of Dawn","Golden Lava","Highland","Demon's Castle","Sealed Island","Sipera","Silent Ship","Golden Route","Sapir","Rose Red","Kingdom of Freedom","Nicola","Crystal Waterfall","Bifrost","Nastia","Strouf Treasury","Green Tranquil Pond","Ingael","Tome of Glory","Incense Pavilion","Carew","Boulders and Horns","Exquisite Pond","Nemesis","Bright Lotus Pond","Seocho Market","Eudora","Moonlit Temple","Hidden Wood Ruins","Dungeon Throne","Ayothaya","Luzhon","Majapahit","Garden City","Manila","Sukhothai","Tossakan","Badang","Lapulapu","Gatotkaca","Srikandi","Kumpakan","Angeling","Deviling","Ghostring","Mastering","Xu Nu","Song Tu","Half Anniversary","Aldebaran","Clock Tower","Attack On Poring"]],
    ['Ragnarok X-Login','rox-logo.png',["Odin - Opera Phantom","Odin - Wing Of Blessing","Odin - Royal Instrument","Odin - Valhalla","Odin - Gungnir","Odin - Central Plains", "Odin - Dark Lord","Odin - Clock Tower","Heimdal - Temple Of Dawn","Heimdal - Golden Lava","Heimdal - Highland","Heimdal - Demon's Castle","Heimdal - Sealed Island","Heimdal - Sipera","Bragi - Silent Ship","Bragi - Golden Route","Bragi - Sapir","Bragi - Rose Red","Bragi - Kingdom Of Freedom","Bragi - Nicola","Mimir - Crystal Waterfall","Mimir - Bifrost","Mimir - Nastia","Mimir - Strouf Treasury","Mimir - Green Tranquil Pond","Mimir - Ingael","Valkyrie - Tome Of Glory","Valkyrie - Incense Pavilion","Valkyrie - Carew","Valkyrie - Boulders And Horns","Valkyrie - Exquisite Pond","Valkyrie - Nemesis","Valkyrie - Aldebaran","Loki - Dungeon Throne","Loki - Hidden Wood Ruins","Loki - Moonlit Temple","Loki - Eudora","Loki - Seocho Market","Loki - Bright Lotus Pond","Gaia - Ayothaya","Gaia - Luzhon","Gaia - Majapahit","Gaia - Garden City","Gaia - Manila","Gaia - Sukhothai","Legends - Tossakan","Legends - Badang","Legends - Lapulapu","Legends - Gatotkaca","Legends - Srikandi","Legends - Kumpakan","Chaos - Angeling","Chaos - Deviling","Chaos - Ghostring","Chaos - Mastering","Cung Hoang Dao - Xu Nu","Cung Hoang Dao - Song Tu","Together We Rox - Half Anniversary","Attack On Poring"]],
    ['Higgs Domino','higgs_domino_tile.png','-'],
    ['Ragnarok M Eternal Love','ragnarok-logo.png',['Eternal Love','Midnight Party','Memory Of Fight','Valhalla']],
    ['Ni no Kuni','ninokuni.png',["Sand Libra","Sand Aquarius","Sand Dorado","Sand Scorpius","Sand Pisces","Sand Eridanus", "Aqua Aquarius","Aqua Capricorn","Aqua Scorpius","Aqua Taurus","Aqua Carina","Sand Aries","Sand Cancer","Sand Capricorn","Sand Gemini","Sand Leo","Sand Taurus","Sand Virgo","Aqua Aries","Aqua Cancer","Aqua Gemini","Aqua Leo","Aqua Libra","Aqua Virgo","Aqua Pisces","Aqua Dorado","Aqua Orion","Aqua Eridanus"]],
    ['Apex Legends Mobile','ApexLegendsMobile.png'],
    ['Voucher Playstation Network','VPSN.png'],
    ['Steam Wallet Code - ID','unnamed.png'],
    ['Call Of Duty Mobile','codmobile_tile.png'],
    ['Arena Of Valor','aov_tile.png'],
    ['Marvel Super War','MARVELsuperwar.png'],
    ['Chimeraland','chimeraland.png'],
    ['Honkai Impact 3','honkai_impact_PqCMq0eRb.png'],
    ['LifeAfter','lifeafter-logo.png'],
    ['Be The King','be-the-king-logo.png'],
    ['Dragon Raja','dragon-raja-logo.png'],
    ['Hyper Front','hyperfront_tile.png'],
    ['Lords Mobile','lords-mobile-logo.png'],
    ['Laplace M','laplace_m_tile.png'],
    ['Light Of Thel','lot-logo.png'],
    ['Sausage Man','sausage-man-logo.png'],
    ['Perfect World','PW-2.png'],
    ['Ragnarok Origin (NA) - Login','ragnarok-origin-logo.png'],
    ['Ragnarok Forever Love','ragnarok-forever-love.png'],
    ['Cloud Song','cloud_song_tile.png'],
    ['Atlantica Rebirth','atlantica-rebirth.png'],
    ['Idol Street','idol-street2.png'],
    ['Lost Saga Origin','lost-saga-origin.png'],
    ['Omega Legends','omega-legend-logo.png'],
    ['One Punch Man','one-punch-man-logo.png'],
    ['Pokemon Unite - Login','pokemon-unite.png'],
    ['Ragnarok Retro','ragnarok-retro.png'],
    ['RF Classic','rf-online-classic.png'],
    ['RF Remastered','RF-online-remastered.png'],
    ['Seven Knights 2 - Login','seven_knights_2.png'],
    ['The Legend Neverlend','legend-of-neverland.png'],
    ['Tom and Jerry Chase','tom-and-jerry-logo.png'],
    ['Idle Legends : Gods Saga','IDLGS.png'],



]

const newrelease = [
    ['Diablo: Immortal - Login','diabloimortal.png'],
    ['Mirage Perfect Skyline','MiragePerfectSkyline_tile.png'],
    ['League Of Legends : Wild Rift','lol-wildrift-logo.png'],
    ['Dragon Hunter Login','dragonhunter.png'],
    ['Four Gods On Wemix','fourgod.png'],
    ['Thetan Arena','thetanArena.png'],
    ['Bigo Live','bigo-live.png'],
    ['Never After','neverafter.png'],
    ['Never After Login','neverafter.png'],
    ['Clash Of Clans','coc.png'],
    ['Voucher Google Play','GooglePlay.png'],
    ['Voucher Nintentdo','nintendo.png'],
    ['Voucher Roblox','roblox.png'],
]

const gamevoucher = [
    ['Voucher Valorant','valorant-logo.png'],
    ['Voucher Point Blank','point-blank-logo.png'],
    ['Voucher Razer Gold','razer-gold-logo.png'],
    ['Voucher Garena Shells','garena-logo.png'],
]


export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Divider sx={{marginTop:3,marginBottom:3,fontWeight:'bold'}}>
            <Chip label="HOT GAME" />
        </Divider>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
            {hostgame.map((items, index) => (
            <Box item xs={2} sm={4} md={4} key={index} sx={{padding:'3px'}}  component={Link} to={"/formorder/"+items[0]+'/'+items[2]} style={{textDecoration:'none'}}>
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
        
            {newrelease.map((items, index) => (
            <Box item xs={2} sm={4} md={4} key={index} sx={{padding:'3px'}} component={Link} to={"/formorder/"+items[0]+'/'+items[2]} style={{textDecoration:'none'}}>
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
        
            {gamevoucher.map((items, index) => (
            <Box item xs={2} sm={4} md={4} key={index} sx={{padding:'3px',}} component={Link} to={"/formorder/"+items[0]+'/'+items[2]} style={{textDecoration:'none'}}>
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