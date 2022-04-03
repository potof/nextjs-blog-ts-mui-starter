import Link from "../components/link";
import Topics from "../components/topics";
import { getNDayBefore } from "../lib/date";
import { Typography, Box } from "@mui/material";

type Props = {
  slug: string;
  title: string;
  date: string;
  topics: string[];
};

const SlugCard: React.FC<Props> = ({ slug, title, date, topics }) => {
  return (
    <Box>
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
          <Typography fontSize={12} color="gray">
            {getNDayBefore(date)}
          </Typography>
        </Box>
      </Link>
      <Box>
        <Topics topics={topics} />
      </Box>
    </Box>
  );
};

export default SlugCard;
