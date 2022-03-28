import Link from "../components/link";
import Topics from "../components/topics";
import { Typography, Box } from "@mui/material";

const SlugCard = ({
  slug,
  title,
  date,
  topics,
}: {
  slug: string;
  title: string;
  date: string;
  topics: string[];
}) => {
  return (
    <>
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
          <Typography component="h2" variant="h5" fontWeight="700" gutterBottom>
            {title}
          </Typography>
          <Typography color="gray">{date}</Typography>
        </Box>
      </Link>
      <Box>
        <Topics topics={topics} />
      </Box>
    </>
  );
};

export default SlugCard;
