import { ReactNode } from "react";
import { Container } from "@mui/material";

interface Props {
  children: ReactNode;
}

const MainContent: React.FC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 4px #4385bb12",
        shadowColor: "#aaa",
        minHeight: "600px",
        pt: "20px",
        pb: "20px",
      }}
    >
      {children}
    </Container>
  );
};

export default MainContent;
