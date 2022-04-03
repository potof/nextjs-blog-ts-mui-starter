import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Box, Typography } from "@mui/material";
import markdownToHtml from "zenn-markdown-html";
import MainContent from "../../components/mainContent";
import Header from "../../components/header";
import Topics from "../../components/topics";
import Meta from "../../components/meta";
import RelatedPosts from "../../components/relatedPosts";
import "zenn-content-css";
import TodayIcon from "@mui/icons-material/Today";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import config from "../../site.config.json";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  // 対象の記事取得
  const post = getPostBySlug(params!.slug);
  const html = markdownToHtml(post.content || "");

  // 関連記事向けの記事取得
  const relatedPosts = getAllPosts(post.topics, params!.slug);

  return {
    props: {
      post: {
        ...post,
        html,
      },
      relatedPosts: relatedPosts,
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

const Post: NextPage<Props> = ({ post, relatedPosts }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Meta title={post.title} ogtype="article" path={`/posts/${post.slug}`} />
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
        {config.isViewRelatedPosts && <RelatedPosts posts={relatedPosts} />}
      </Box>
    </>
  );
};

export default Post;
