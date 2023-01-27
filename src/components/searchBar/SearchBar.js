import React, { useState } from 'react'
import classes from './searchBar.module.css'
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    Typography

} from '@mui/material'



function SearchBar() {
    const [input, setInput ] = useState("")


    const [role, setRole] = useState("");
    const roleList = [
        'Mentee',
        'Mentor'
    ]

    const [country, setCountry] = useState("");
    const countries = [
        'Israel',
        'USA',
        'Germany',
        'England'
    ] 

    const [Industry, setIndustry] = useState("");
    const IndustryList = [
        'Building',
        'Real estate',
        'Education',
        'Export',
    ]
    
    const handleChangeRole = (e) => {
        setRole(e.target.value);

    }
    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleChangeIndustry = (e) => {
        setIndustry(e.target.value);

    }
    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    }


  return (
    <Box  className={classes.main_body}>
        <form className={classes.main_form_box}>
        <FormControl sx={{width: '150px'}} >
            <InputLabel >Mentee/mentor</InputLabel>
            <Select
            value={role}
            label='Mentee/mentor'
            onChange={handleChangeRole}
            >
                {roleList.map((role) => 
                <MenuItem value={role}>{role}</MenuItem>
                
                )}
            </Select>
        </FormControl>

    <Box>
        <Typography>
            <h4>Find your {role} today!</h4>
        </Typography>

        <TextField
          id="filled-search"
          label="Search field"
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
            value={Industry}
            label='Industry'
            onChange={handleChangeIndustry}
            >
                {IndustryList.map((Industry) => 
                <MenuItem value={Industry}>{Industry}</MenuItem>
                )}
            </Select>
        </FormControl>
            </Box>
            </form>
        </Box>

    )
}

export default SearchBar