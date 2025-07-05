---
title: Ollama not accepting PR for Vulkan support
build:
  render: never
  list: never
  publishResources: false
---

This story is about why we need more than FOSS. We need free open source softwares which are also community centric. In mid 2024, a contributor sends [a PR](https://github.com/ollama/ollama/pull/5059) to [Ollama](https://github.com/ollama/ollama) the FOSS LLM inference engine. This pull request adds Vulkan support which community really wanted it for a long time. Several community members report the code as working and even review it. And they were waiting for ollama maintainers to merge the changes into upstream.

For 7 months, Ollama maintainers were completely silent about this, making space for all kinds of theories, including conspiracy ones about the engine and the developers/maintainers behind it. And they were  already active on the repository making commits and managing other PRs and issues.

Finally after this period, a maintainer replies that they don't want to support compute backends other than Cuda and (I think?) ROCm. This results in the PR owner to start its own fork and go on that route.

This is a reminder for all of us that a software being FOSS is not enough nowadays for our society. A community managed free software far better than the one which is managed exclusively by a small team or a company.

And don't get me wrong. The maintainers of course have the right to not merge the PR. But wasting 7 months time of the PR owner and also the community for this, is the major problem here. If you are hosting your project on a space like Github, and PRs are enabled for your repository, you should make it clear what PR do you accept and what you won't.

In [CONTRIBUTING.md](https://github.com/ollama/ollama/blob/main/CONTRIBUTING.md) it has been written that adding large features may not be accepted. Yet even till now, there is [an open issue](https://github.com/ollama/ollama/issues/2033) about adding Vulkan support and maintainers haven't commented on it. Also there is [another older PR](https://github.com/ollama/ollama/pull/2578) and maintainers haven't made any comment there. And all these 3 are still open at the time of writing this post.