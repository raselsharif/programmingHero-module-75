import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Footer = () => {
  const pages = [
    {
      page: "Home",
      pathname: "/",
    },
    {
      page: "Pages",
      pathname: "/pages",
    },
    {
      page: "category",
      pathname: "/category",
    },
    {
      page: "news",
      pathname: "/news",
    },
    {
      page: "about",
      pathname: "/about",
    },
  ];
  return (
    <div className="py-10 bg-black">
      <Container>
        <Box className="flex justify-center gap-4">
          {pages.map((page) => (
            <Link key={page.page} href={page.pathname}>
              <Typography textAlign="center" color={"white"}>
                {page.page}
              </Typography>
            </Link>
          ))}
        </Box>
        <Typography color={"gray"} align="center" className="mt-5">
          Copyright
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
