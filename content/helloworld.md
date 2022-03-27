---
title: "test page"
date: "2022-03-27"
topics: ["debug"]
---

# Title 1

aaaaaaaaaaaaa あああああああああああ

## Title 2

- list 1
- list 2
- list 3

1. list 1
2. list 2
3. list 3

```js:slug.tsx
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
```

## Youtube Link

https://www.youtube.com/watch?v=M8LAQoAyBzo

## Twitter Link

https://twitter.com/TwitterJP/status/1507286739542589454?s=20&t=EW-WxlOt-LTrWCmDbFphow

## Amazon Link

https://amzn.to/3LAjRBh

## a link

https://nextjs.org/
