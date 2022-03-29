import config from "../site.config.json";
import Head from "next/head";

type Props = {
  path?: string;
  title?: string;
  description?: string;
  ogtype?: string;
};

const Meta: React.FC<Props> = ({ path, title, description, ogtype }) => {
  return (
    <Head>
      <title>{title || config.title}</title>
      <meta name="description" content={description || config.description} />
      <meta property="og:title" content={title || config.title} />
      <meta property="og:url" content={`${config.url}/${path} || ""`} />
      <meta property="og:description" content={config.description} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:image" content={`${config.url}/ogp.png`} />
      <meta property="og:type" content={ogtype || "blog"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  );
};

export default Meta;
