import Link from "../components/link";
import Topics from "../components/topics";
import { getNDayBefore } from "../lib/date";
import { Typography, Box, Grid } from "@mui/material";
import Icon from "@mui/material/Icon";
import config from "../site.config.json";

type Props = {
  slug: string;
  title: string;
  date: string;
  topics: string[];
  icon: string;
};

const SlugCard: React.FC<Props> = ({ slug, title, date, topics, icon }) => {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={70}
          width={70}
          sx={{
            backgroundColor: "#F1F5F9",
            borderRadius: "12px",
            boxShadow: "0 2px 4px #4385bb12",
            shadowColor: "#aaa",
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          <Link
            href="/posts/[slug]"
            as={`/posts/${slug}`}
            key={title}
            color="inherit"
            underline="none"
          >
            <Icon
              className={icon || config.defaultPostIcon}
              color="primary"
              sx={{ fontSize: "40px", m: 2 }}
            />
          </Link>
        </Grid>
        <Grid item pl="15px">
          <Link
            href="/posts/[slug]"
            as={`/posts/${slug}`}
            key={title}
            color="inherit"
            underline="none"
          >
            <Box
              sx={{
                "&:hover": {
                  opacity: 0.5,
                },
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                fontWeight="700"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography fontSize={12} color="gray">
                {getNDayBefore(date)}
              </Typography>
            </Box>
          </Link>
          <Box>
            <Topics topics={topics} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlugCard;
