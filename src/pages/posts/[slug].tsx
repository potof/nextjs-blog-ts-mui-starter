import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Box, Typography } from "@mui/material";
import markdownToHtml from "zenn-markdown-html";
import MainContent from "../../components/mainContent";
import Header from "../../components/header";
import Topics from "../../components/topics";
import Meta from "../../components/meta";
import "zenn-content-css";

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
            <Typography variant="h1" lineHeight="52px">
              {post.title}
            </Typography>
            <Typography color="gray" display="inline-block" pr="10px" pt="20px">
              {post.date}
            </Typography>
            <Topics topics={post.topics} />
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
