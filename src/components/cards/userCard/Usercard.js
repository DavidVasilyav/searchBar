import React from "react";
import {
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Stack,
  Switch,
  Chip,
  Avatar,
  Box,
  Table,
} from "@mui/material";
import { LocationOn, Phone, Person, Email } from "@mui/icons-material";
import "./Usercard.css";
import * as UserCardStyle from "./UserCard.style";

export default function Usercard({firstName, country, email, role}) {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 'max-content', margin: 4, color: "var(--text--color)" }}>
      <CardMedia
        sx={UserCardStyle.cardMediaStyle}
        image={
          "https://www.realco.co.il/wp-content/uploads/2020/01/%D7%A8%D7%A7%D7%A2-%D7%9E%D7%95%D7%91%D7%99%D7%99%D7%9C-min.jpg"
        }
        title="green iguana"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://cdnb.artstation.com/p/assets/images/images/039/196/767/20210702010025/smaller_square/beomjun-baek-face-work.jpg?1625205625"
          sx={{
            width: 86,
            height: 86,
            top: 180,
            ml: 2,
          }}
        ></Avatar>

        <Typography
          sx={{
            // position: "absolute",
            top: 230,
            mt: 10,
            ml: 18,
            fontWeight: "bold",
            fontSize: 19,
            fontFamily: "var(--title--font)",
            color: "#fff",
          }}
        >
          {firstName}
          <Typography sx={{ fontSize: 12, color: "var(--text--color)" }}>
            <LocationOn sx={{ ml: -0.5, fontSize: 12 }} />
            {country}
          </Typography>
        </Typography>
      </CardMedia>

      <Box>
        <CardContent
          sx={{
            mt: 5,
          }}
        >
          <Divider />
          <Typography
            variant="body2"
            color="var(--text--color)"
            fontFamily="var(--title--font)"
            sx={{
              padding: 2,
              height: 0,
              color: "transparent",
              "&:hover": {
                color: "black",
                height: 50,
                transitionDelay: "100ms",
              },
            }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Box>

      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          sx={{
            fontSize: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Phone sx={{ fontSize: "medium" }} />
          053111111
        </Typography>

        <Typography
          sx={{
            fontSize: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Email sx={{ fontSize: "medium" }} />
          {email}
        </Typography>

        <Typography
          sx={{
            fontSize: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Person sx={{ fontSize: "medium" }} />
          {role}
        </Typography>
      </CardActions>

      <Divider />

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: "background.default", p: 2 }}
      >
        <Chip label="chat" color="primary" onClick={function () {}}></Chip>
        <Chip label="Online" color="success" onClick={function () {}}></Chip>

        <Chip
          label="link"
          variant="outlined"
          color="primary"
          onClick={function () {}}
        ></Chip>
      </Stack>
    </Card>
  );
}
