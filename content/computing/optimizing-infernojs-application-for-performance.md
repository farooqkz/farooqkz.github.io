---
title: "Optimizing Infernojs Application for Performance"
date: 2022-02-23T12:53:55+03:30
draft: false
categories: Computing
---

![dot for stats](https://farooqkz.de1.hashbang.sh/count/tag.svg)

InfernoJS, ~~a fork of ReactJS for mobile,~~ is very high performance Javascript UI framework. It has good features of ReactJS, except big community and support of Facebook. But unlike ReactJS which has a very bad performance comparing to many other UI frameworks, InfernoJS is fast and small. You might want to use your favorite search engine to find the benchmarks related to this topic.

You also might want to read **Why InfernoJS?** section part of [my post on BananaHackers blog](https://blog.bananahackers.net/farooqkz/the-development-of-the-matrix-client-has-started) to read more why should you choose a framework, perhaps something like InfernoJS or ReactJS for your application instead of using no framework if your application or website is medium sized or big.

Of course, performance is not everything but when you are writing for weak hardwares such as [KaiOS](https://en.wikipedia.org/wiki/KaiOS) devices with only 512MB or even less memory(RAM) and dual core weak processors, that's when performance matters.

This becomes even more important if you are writing an application which people would often use so it is wise to provide best possible user experience and one thing which matters now, is performance and thus longer battery life for users.

Now enough of lecturing! Here goes the tips you would like to consider when using InfernoJS to provide best possible performance.

I will update this post later and add more tips once I find more ways to optimize.

### Use JSX optimization flags

This is too obvious, I know. But let me remind you that you can further optimize your components using JSX flags such as `$HasTextChildren`. There is a complete reference on InfernoJS website, [here](https://www.infernojs.org/docs/guides/optimizations).

For example this component here:

```javascript
function Name({ firstname, lastname }) {
  return (
    <div>
      <h3>{firstname}</h3>
      <h3>{lastname}</h3>
    </div>
  );
}
```

Can be written like this which is more optimized:

```javascript
function Name({ firstname, lastname }) {
  return (
    <div>
      <h3 $HasTextChildren>{firstname}</h3>
      <h3 $HasTextChildren>{lastname}</h3>
    </div>
  );
}
```

As you can see I have not written `$HasNonKeyedChildren` for the `<div>`. That's because the compiler automatically does it for me whenever it can clearly see the children shape at compile time.

I could also write `Name` component like this:

```javascript
function Name({ firstname, lastname }) {
  return (
    <div>
      <h3 $HasVNodeChildren>{createTextVNode(firstname)}</h3>
      <h3 $HasVNodeChildren>{createTextVNode(lastname)}</h3>
    </div>
  );
}
```

While this definitely will have better performance than writing no flags, it is ugly and has a bit worse performance comparing to `$HasTextChildren`.

The limitation about `$HasTextChildren` is that you can use it only when the children is bare text. So you'll have to go with `$HasVNodeChildren` + `createTextVnode()` sometimes; like when mixing text and other stuff together.

### Functional components are faster, a bit

In general, functional components are a bit faster than Class components. In Inferno you cannot use state with them and they're stateless. This difference is usually only noticeable when you've got a LOT of them like thousands.

### Final words

In this post I tried to share with you the knowledge I had about optimizing Inferno apps for performance. Do you know any other way? Let me know through comments!

{{< chat optimizing-infernojs-application-for-performance.md >}}
