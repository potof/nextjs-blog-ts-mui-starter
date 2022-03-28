import { NextLinkComposed } from "../components/link";
import { Chip } from "@mui/material";

const Topics = ({ topics }: { topics: string[] }) => {
  return (
    <>
      {topics.map((tag: string) => (
        <Chip
          component={NextLinkComposed}
          to={{
            pathname: "/topics/[topic]",
          }}
          linkAs={`/topics/${tag}`}
          size="small"
          label={tag}
          sx={{ mr: "4px" }}
          clickable
        />
      ))}
    </>
  );
};

export default Topics;
