import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getAllPosts } from "../lib/api";
import MainContent from "../components/mainContent";
import Header from "../components/header";
import SlugCard from "../components/slugCard";
import { Box, Stack } from "@mui/material";
import config from "../site.config.json";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
      </Head>
      <Box>
        <Header />
        <MainContent>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}
          >
            {allPosts.map((post) => (
              <SlugCard
                slug={post.slug}
                title={post.title}
                date={post.date}
                topics={post.topics}
                key={post.slug}
              />
            ))}
          </Stack>
        </MainContent>
      </Box>
    </>
  );
};

export default Home;
