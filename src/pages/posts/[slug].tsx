import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Box, Typography } from "@mui/material";
import markdownToHtml from "zenn-markdown-html";
import MainContent from "../../components/mainContent";
import Header from "../../components/header";
import Topics from "../../components/topics";
import Meta from "../../components/meta";
import "zenn-content-css";
import TodayIcon from "@mui/icons-material/Today";

import { getPostBySlug, getAllPosts } from "../../lib/api";

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const html = markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        html,
      },
    },
  };
}

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

const Post = ({ post }: any) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Meta title={post.tile} ogtype="article" path={`/posts/${post.slug}`} />
      <Box>
        <Header />
        <MainContent>
          <Box textAlign="center" py="50px">
            <Box>
              <Typography variant="h1" lineHeight="52px">
                {post.title}
              </Typography>
            </Box>
            <Box pr="10px" pt="20px">
              <Typography color="gray" display="inline-block" mx={2}>
                <TodayIcon
                  fontSize="small"
                  sx={{
                    verticalAlign: "text-bottom",
                    mr: 0.5,
                  }}
                />
                {post.date}
              </Typography>
              <Topics topics={post.topics} />
            </Box>
          </Box>
          <div
            className="znc"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </MainContent>
      </Box>
    </>
  );
};

export default Post;
