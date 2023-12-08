import { Box, Typography } from "@mui/material";
import React from "react";
import formatted from "../utils/HeaderTIme";

const Header = () => {
  return (
    <Box className="flex flex-col items-center py-5">
      <Typography>The Dragon News</Typography>
      <Typography>slogan</Typography>
      <Typography>{formatted}</Typography>
    </Box>
  );
};

export default Header;
