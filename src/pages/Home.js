import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import React from "react";
import Logo from "../components/Logo";

const HomeStyles = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default function Home() {
  return (
    <HomeStyles>
      <Logo />

      <Typography
        variant="h2"
        sx={{
          color: "#171E2B",
          letterSpacing: "0",
        }}
      >
        Lite landscape enhancement
      </Typography>
    </HomeStyles>
  );
}
