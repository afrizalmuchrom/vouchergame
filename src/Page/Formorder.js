import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';

import { Link, useParams } from 'react-router-dom';

import {alldata} from './../Data/Data';

export default function TextMobileStepper() {
    
    const {cat, id} = useParams();
    
    const [server, setServer] = React.useState('Pilih Server');
    const [qty, setQty] = React.useState('1');

    const Optionserver = () => {
      
        if(alldata[cat][id][2] == 'Zone ID'){
            return <TextField id="zoneid" label="zoneid" variant="outlined" />
        }else if(alldata[cat][id][2] == '-'){

        }else{
            return <Select
                  labelId="idserverlabel"
                  id="idserver"
                  value={server}
                  onChange={handleChange}
                  displayEmpty
                  >
                    {alldata[cat][id][2].map((item,index) => (
                        <MenuItem key={index} value={item} > {item} </MenuItem>
                    ))} 
                       

                  </Select>
        }

    }

    const Listnominal = () => {
        
        let output = []
        {alldata[cat][id][4].map((item,index) => (
            
            output.push(<Button size="medium" variant="outlined" style={{fontWeight:'bold', margin:1}}>{item[0]+''+alldata[cat][id][3]+'- Rp. '+item[1]}</Button>)
        ))} 

        return output;
    }

    const handleChange = (event) => {
        setServer(event.target.value);
    };

    const steps = [
        {
          label: 'Masukkan User ID dan Nama Server',
      
          content: 
          
              <Box
             
              sx={{
              '& > :not(style)': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off">
      
                  <TextField id="username" label="Username" variant="outlined" />
                  
                  <Optionserver/>

                  
      
              </Box>,
      
        },
        {
          label: 'Pilih Nominal dan Jumlah',
          content:
            <Box >
                
                <Listnominal/>
                <Divider style={{margin:10}} />
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField id="qty" label="Jumlah" type="number" variant="outlined" />
                </FormControl>
      
              </Box>,
        },
        {
          label: 'Metode Pembayaran',
          content: 
          <div >

            <Typography>Isikan semua data dengan benar, karena informasi pembayaran akan kami kirimkan melalui WhatsApp & Email.</Typography>
            <Button size="medium" variant="outlined" style={{fontWeight:'bold', margin:10, width:'100%'}}><img src="/Bank/bca.png" width='30%'/></Button>
            <Typography sx={{textAlign:'center'}} paragraph>00000000000 a/n Irsyad.</Typography>
            <Button size="medium" variant="contained" style={{fontWeight:'bold', marginTop:30, width:'100%'}}>Pesan Sekarang</Button>

         
          </div>,
        },
      ];

    

    
    
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
        <Paper
            square
            elevation={0}
            sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            }}
        >
            
            <Typography paragraph component="div"><b>{alldata[cat][id][0]}</b> :<br></br> {steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: '100%', maxWidth: '100%', width: '100%', p: 2 }}>
            {steps[activeStep].content}
        </Box>
        <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Selanjutnya
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Kembali
            </Button>
            }
        />
        </Box>
    );
}