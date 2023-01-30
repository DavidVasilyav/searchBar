import React, { useState } from 'react'
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    Typography,
    Slider,
    Grid
} from '@mui/material'

import classes from './searchBar.module.css'
import Usercard from '../cards/userCard/Usercard'
import data from '../../data/data.json'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';


function SearchBar() {
    const [search, setSearch] =useState(data);
    const [input, setInput ] = useState("");
    const [alignment, setAlignment] = React.useState('left');
    
    const handleAlignment = (e, newAlignment) => {
        setAlignment(newAlignment);
    };
    
    
    const [role, setRole] = useState("");
    const roleList = [
        'Mentee',
        'Mentor'
    ]

    const [country, setCountry] = useState("");
    const countries = [
        'Israel',
        'United States',
        'Belgium',
        'Germany'
    ] 

    const [industry, setIndustry] = useState("");
    const IndustryList = [
        'Building',
        'Real estate',
        'Construction Worker',
        'Export/Import',
        'Architect'
    ]
    
    const [SliderBar, setSliderBar] = useState(0);
    
    const handleChangeSlider  = (e) => {
        setSliderBar(e.target.value);
        console.log(132);
    }
    
    const handleChangeRole = (e) => {
        setRole(e.target.value);
        console.log(e.target);

    }
    
    const handleInput = (e) => {
        const keyword = e.target.value

        if (keyword !== '') {
            const results = data.filter((user) => {
              return user.first_name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setSearch(results);
          }
          setInput(keyword);
        };
      
        const handleChangeCountry = (e) => {
            const keyword = e.target.value
            setCountry(keyword)
            if(input === '') {
                const results = data.filter((user) => {
                    return user.country.toLowerCase().startsWith(keyword.toLowerCase());
                });
                setSearch(results);
                
                } else if(input !== '') {
                    const inputFiltered = data.filter((user) => {
                        return user.first_name.toLowerCase().startsWith(input.toLowerCase());
                      });
                    const finalResults = inputFiltered.filter((user) => {
                    return user.country.toLowerCase().startsWith(keyword.toLowerCase());
                });
                setSearch(finalResults);
            }
    
        }
        const handleChangeIndustry = (e) => {
            const keyword = e.target.value
            setIndustry(keyword)
            if(input || country === '') {
                const results = data.filter((user) => {
                    return user.role.toLowerCase().startsWith(keyword.toLowerCase());
                });
                setSearch(results);
                
                } else if(input || country  !== '') {
                    const inputFiltered = data.filter((user) => {
                        return user.first_name.toLowerCase().startsWith(input.toLowerCase());
                      });
                    const countryResults = inputFiltered.filter((user) => {
                    return user.country.toLowerCase().startsWith(country.toLowerCase());
                });

                const finalResults = countryResults.filter((user) => {
                    return user.role.toLowerCase().startsWith(keyword.toLowerCase());
                });
                setSearch(finalResults);
            }
        }
  return (
    <Box className={classes.main_body}>
        <Box className={classes.main_form_box}>
        {/* <FormControl sx={{width: '150px'}} >
        <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            > 
            <ToggleButton value={"Mentee"} aria-label="left aligned" onClick={handleChangeRole}>
            <FormatAlignCenterIcon value={"Mentee"} />
            </ToggleButton>
            
            <ToggleButton value={"Mentor"} aria-label="right aligned" onClick={handleChangeRole}>
            </ToggleButton>
            
            </ToggleButtonGroup> */}
            
            {/* <FormControlLabel control={<Switch defaultChecked />} label="Mentee" value={'Mentee'} /> */}
            {/* <InputLabel >Mentee/mentor</InputLabel>
            <Select
            value={role}
            label='Mentee/mentor'
            onChange={handleChangeRole}
            >
                {roleList.map((role) => 
                <MenuItem value={role}>{role}</MenuItem>
                
                )}
            </Select> */}
        {/* </FormControl> */}
    <Box>
        {/* <Typography>
            <h4>Find your {role} today!</h4>
        </Typography> */}

        <TextField
          id="filled-search"
          label="Type name to search"
          type="search"
          variant="filled"
          onChange={handleInput}
          value={input}
          sx={{
              width: "350px"
            }}
            />
            </Box>                

        <Box 
        className={classes.filter_box}
        >
        <Typography>
            <h4>Filters:</h4>
        </Typography>

        <FormControl sx={{width: '150px'}} >
            <InputLabel >country</InputLabel>
            <Select
            value={country}
            label='country'
            onChange={handleChangeCountry}
            >
                {countries.map((country) => 
                <MenuItem value={country}>{country}</MenuItem>
                )}
            </Select>
        </FormControl>

        <FormControl sx={{width: '150px'}} >
            <InputLabel >Industry</InputLabel>
            <Select
            value={industry}
            label='Industry'
            onChange={handleChangeIndustry}
            >
                {IndustryList.map((Industry) => 
                <MenuItem value={Industry}>{Industry}</MenuItem>
                )}
            </Select>
        </FormControl>
            </Box>
               
             <Slider sx={{width: '170px' }}
                        value={SliderBar}
                        min={0}
                        max={15}
                        step={1}
                        onChange={handleChangeSlider}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        marks
                    />
            </Box>

            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 8 }} >
                {search.map((data) => 
                <Grid item xs={12} sm={4} md={2} className={classes.card}>
                <item>
                 <Usercard firstName={data.first_name} country={data.country} email={data.email} role={data.role} />
                 </item>
                 </Grid>
                 )}

                 </Grid>
        </Box>
    )
}

export default SearchBar