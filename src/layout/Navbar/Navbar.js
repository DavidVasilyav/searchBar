import { 
  AppBar, 
  Container,
  Toolbar,
  Typography,


} from '@mui/material'
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';



function Navbar() {
  return (
    <AppBar position="static">
<Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          </Toolbar>
          </Container>
    </AppBar>
  )
}

export default Navbar