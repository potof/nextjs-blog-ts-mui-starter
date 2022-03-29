import { NextLinkComposed } from "../components/link";
import { Chip } from "@mui/material";

interface Props {
  topics: string[];
}

const Topics: React.FC<Props> = ({ topics }) => {
  return (
    <>
      {topics.map((topic: string) => (
        <Chip
          component={NextLinkComposed}
          to={{
            pathname: "/topics/[topic]",
          }}
          linkAs={`/topics/${topic}`}
          size="small"
          key={topic}
          label={topic}
          sx={{ mr: "4px" }}
          clickable
        />
      ))}
    </>
  );
};

export default Topics;
