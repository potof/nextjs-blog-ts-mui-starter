## Demo

https://nextjs-blog-ts-mui-starter.vercel.app/

![score](README/score.png)

## Guide

「Markdown で書いた文書をさくっとブログ形式で公開できる」ことを目的に作りました。

Next.js 公式のブログテンプレートでは外国人向けのレイアウトなのか正直なところ使えるところは少なく、多数のカスタマイズが必要になるので大変です。

カスタマイズするベースとして機能するようにシンプルに作りました。

## 特徴

Next.js & Typescript で作っています

- お手軽にそれっぽい画面になるように Material UI 5 を導入しています
  - next/link を MUI Link でラッピングするやつ公式サンプルも導入しています
- Markdown パーサは Zenn-editor packages を使っています
  - シンタックスハイライト
  - Twitter Link 埋め込み
  - Youtube Link 埋め込み
  - 外部リンクのブログカード化
- パースした HTML には Zenn の CSS を適用しています
  - すごい、一気に Zenn で馴染みある画面に！
- トピックス機能
- Google Analytics
- 記事の最後に関連記事を出力する機能
  - `site.config.json` の `isViewRelatedPosts` を `true` で有効にします

zenn-editor

https://github.com/zenn-dev/zenn-editor/tree/canary/packages

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
