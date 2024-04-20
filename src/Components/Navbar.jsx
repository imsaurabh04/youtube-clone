import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "../Components";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        background:
        "linear-gradient(to bottom, rgba(87, 87, 87, 0.4), rgba(0,0,0,0))",
        backgroundColor: "#000",
        zIndex: "1000"
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center"}}>
        <img src="/icons8-youtube-logo-240.png" alt="logo" height={45} />
        <Typography 
          fontWeight="bold"
          fontFamily="Gothic"
          letterSpacing="1px"
          color="#fff">
          YouTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
