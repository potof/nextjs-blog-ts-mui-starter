import { Box, Container, Typography } from "@mui/material";
import { NextLinkComposed } from "../components/link";
import config from "../site.config.json";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

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
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            {"{{"} {config.title} {"}}"}
          </Typography>

          {config.twitter && (
            <a href={config.twitter} target="_blank" rel="noopener noreferrer">
              <TwitterIcon
                fontSize="large"
                sx={{
                  color: "black",
                  textDecoration: "none",
                }}
              />
            </a>
          )}

          {config.github && (
            <a href={config.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon
                fontSize="large"
                sx={{
                  color: "black",
                  textDecoration: "none",
                }}
              />
            </a>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Header;
