import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
// import Link from "next/link";
import Link from "../components/link";
import { getAllPosts } from "../lib/api";
import MainContent from "../components/mainContent";
import { Container, Box, Stack, Typography } from "@mui/material";
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
        <MainContent>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}
          >
            {allPosts.map((post) => (
              <Link
                href="/posts/[slug]"
                as={`/posts/${post.slug}`}
                key={post.title}
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
                  <Typography component="h2" variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography color="gray">{post.date}</Typography>
                </Box>
              </Link>
            ))}
          </Stack>
        </MainContent>
      </Box>
    </>
  );
};

export default Home;
