import { Box, Container, Typography } from "@mui/material";
import { NextLinkComposed } from "../components/link";
import config from "../site.config.json";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: 60,
          backgroundColor: "white",
          boxShadow: "0 2px 4px #4385bb12",
          marginBottom: 5,
          justifyContent: "space-between",
        }}
      >
        <Container maxWidth="md">
          <Typography
            component={NextLinkComposed}
            to={{
              pathname: "/",
            }}
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {"{{"} {config.title} {"}}"}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Header;
