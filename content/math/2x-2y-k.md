---
title: "2^x+2^y=k"
date: 2022-01-16T21:49:16+03:30
draft: false
---


![dot for stats](https://farooqkz.de1.hashbang.sh/count/tag.svg)

2<sup>x</sup> + 2<sup>y</sup> = k where x, y and k are positive integers and k is a constant. The question's that for different values of k how many solution does our equation have? For any odd k there is no solution and for positive powers of 2 there is one. We want a general solution for this equation.

### Solution by Susam Pal

We will take this fact for granted: Every positive integer can be uniquely expressed as the sum of distinct powers of 2. In other words, every positive integer has a unique binary representation.

Now consider the case where x = y. Let m = x = y. Then k = 2<sup>m</sup> + 2<sup>m</sup> = 2<sup>(m+1)</sup>. Further, if k = 2<sup>(m+1)</sup> where m > 1, x = y = m is a solution. There cannot be a solution in which x != y because that would result in another binary representation of k apart from the existing representation of 2<sup>(m+1)</sup> which would contradict the uniqueness of the binary representation of k. Therefore there must be exactly 1 solution when k is a positive power of 2.

Now consider the case where x != y. Let x = m and y = n. Then k = 2<sup>m</sup> + 2<sup>n</sup> = 2<sup>n</sup> + 2<sup>m</sup>. Thus both (x = m, y = n) and (x = n, y = m) are solutions. There cannot be a solution in which x = y because that would lead to k = 2<sup>(x+1)</sup> which violates the uniqueness of the binary representation of k. Also, there cannot be another solution in which either x or y does not belong to {m, n} because that would too violate the uniqueness of the binary representation of k. We conclude that there must be exactly 2 solutions when k is a sum of two distinct positive powers of 2.

For any other positive integer k, no solutions are possible. We can show this by contradiction. Let k be such that it is neither a positive power of 2 nor a sum of two distinct positive powers of 2. If we assume that a solution exists for such k, then we have two positive integers x and y such that 2<sup>x</sup> + 2<sup>y</sup> = k. If x = y, it contradicts the fact that k is not a positive power of 2. If x != y, it contradicts the fact that k is a sum of two distinct positive powers of 2.

Thus, we can conclude that the equation has exactly 1 solution when k is a positive power of 2, 2 solutions when k is a sum of two distinct positive powers of 2, no solutions otherwise.


{{< chat 2x-2y-k.md >}}
