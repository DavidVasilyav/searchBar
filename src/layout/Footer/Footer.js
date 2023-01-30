import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Box component={"footer"} >
      <BottomNavigation
        sx={{ position: "bottom", bottom: 0, left: 0, right: 0, borderTop: '#000 2px solid', pt: 1 }}
      >
        <Typography variant="p" component="p" sx={{ fontSize: "14px" }}>
          Copyright  GVI March 2022 - {year}.
        </Typography>
        ;
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
