import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../lib/createEmotionCache";
import initTwitterScriptInner from "zenn-embed-elements/lib/init-twitter-script-inner";
import GoogleAnalytics from "../lib/gtag";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useEffect(() => {
    import("zenn-embed-elements");
  });
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GoogleAnalytics />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <script
          dangerouslySetInnerHTML={{
            __html: initTwitterScriptInner,
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
