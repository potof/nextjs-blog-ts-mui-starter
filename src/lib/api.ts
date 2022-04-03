import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { title, date, topics },
    content,
  } = matter(fileContents);

  return {
    slug: realSlug,
    title: title,
    date: date,
    topics: topics,
    content: content,
  };
}

export function getAllPosts(topics?: string[]) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  if (topics == null) {
    // 全部の記事を返す
    return posts;
  } else {
    // topics でフィルタして記事を返却する
    const isIncludes = (arr: string[], target: string[]) =>
      arr.some((el) => target.includes(el));
    return posts.filter((slug) => isIncludes(slug.topics, topics));
  }
}

type TopicCountMap = Record<string, number>;
export const getTopicCountMap = async (): Promise<TopicCountMap> => {
  const allPostsData = getAllPosts();
  const topicCountMap = allPostsData.reduce((acc: TopicCountMap, post) => {
    post.topics?.forEach((topic: string) => {
      acc[topic] = acc[topic] === undefined ? 1 : acc[topic] + 1;
    });
    return acc;
  }, {});
  return topicCountMap;
};
