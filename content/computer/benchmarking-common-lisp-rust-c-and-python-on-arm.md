---
title: "Benchmarking Common Lisp, Rust,  C and Python on ARM"
date: 2022-11-08T14:19:59+03:30
draft: false 
---

I have previously benchmarked [C++ against Common Lisp](/computer/cpp-vs-common-lisp-performance/) and the result was that unlike the common belief about Lisp, it can have performance which is almost as fast as C++. After that I did another benchmark for [computing fibonnaci series using Rust, Common Lisp, C and Python](/computer/py-c-rust-cl-benchmark/). But both of these benchmarks were done on **x86_64**. In this benchmark, I'm using the same codes from the last benchmark but run them on an ARM device instead. Unfortunately, my device is old and not ARM64 but still it can be of interest.

At the time of writing this paragraph, I haven't done any benchmark, yet. Nevertheless, I think the results from compiled languages should be more interesting. Because this benchmark shows how much these compilers are optimized for ARM. As for Rust, C and Common Lisp, they are directly compiled to machine's native code. Regarding Common Lisp, this is true if we use something which does so. Because the language itself doesn't require to be even compiled and it is up to the implemention to compile Common Lisp code or interpret it. Or that if it's compiled, it is compiled to native code or some immediate language or that it requires a VM or not.

For Rust, there is just one usable compiler which I am aware of. But for C and Common Lisp, there are more than one compiler which are both mature and compile to native code. So it would be useful if more than a single compiler is used.

![Farooq's NanoPi NEO specs](/farooq-nanopi-neo-specs.png)

As for C, I use clang and gcc which are available in Debian repositories. As for CL, one choice is definitely SBCL which is very famous for it's performance and that it compiles to native code. But as I want to test with other CL implementations as well, I have to choose at least one other which compiles to native code, as well.

Looking at the table on [this page on CLiki](https://www.cliki.net/Common+Lisp+implementation), there is another choice: CCL. SBCL can be found in Debian repositories and as for CCL, a compiled Linux binary for ARM can be found in Github releases page.

## Common Lisp untyped

### CCL

```
minetest:~:% time ./armcl --load fibo-safe.lisp
102334155
./armcl --load fibo-safe.lisp  7.39s user 0.04s system 100% cpu 7.420 total
```

### SBCL

```
minetest:~:% time sbcl --script ./fibo-safe.lisp
102334155sbcl --script ./fibo-safe.lisp  72.11s user 0.05s system 99% cpu 1:12.16 total
```

It is very surprising that SBCL is this bad on ARM!

## Common Lisp typed with no safety

### CCL

```
minetest:~:% time ./armcl --load fibo-unsafe.lisp
102334155
./armcl --load fibo-unsafe.lisp  5.05s user 0.04s system 100% cpu 5.086 total
```

### SBCL

```
minetest:~:% time sbcl --script ./fibo-unsafe.lisp 
102334155sbcl --script ./fibo-unsafe.lisp  14.06s user 0.07s system 85% cpu 16.456 total
```

## Rust

```
minetest:~:% time ./fibo
102334155
./fibo  1.50s user 0.00s system 99% cpu 1.504 total
```

## Python

### Pypy 3.7

```
minetest:~:% time pypy3 fibo.py  
102334155
pypy3 fibo.py  19.88s user 0.22s system 98% cpu 20.315 total
```

### CPython 3.9

```
minetest:~:% time python3 fibo.py
102334155
python3 fibo.py  287.57s user 0.04s system 100% cpu 4:47.61 total
```

Impressive! Isn't it?

## C

### GCC


```
minetest:~:% gcc -O2 fibo.c
minetest:~:% time ./a.out
102334155./a.out  1.63s user 0.01s system 99% cpu 1.639 total
```

### clang

```
minetest:~:% clang -O2 fibo.c
minetest:~:% time ./a.out 
102334155./a.out  1.33s user 0.00s system 99% cpu 1.333 total
```

## Summary and conclusion

From fastest to slowest:

 - C with clang: **1.33s**
 - Rust: **1.50s**
 - C with gcc: **1.64s**
 - CL typed CCL: **5.09s**
 - CL untyped CCL: **7.42s**
 - CL typed SBCL: **16.46s**
 - Python with pypy: **20.32s**
 - CL untyped SBCL: **72.16s**
 - Python with CPython: **287.61s**

gcc is older than clang so it is not surprising that it outperforms clang on x86. But we see that on ARM the story is different.

Among Lispers, SBCL is known for high performance. In my previous benchmarks on x86, we saw that if we use static typing and tell
the compiler to optimize for speed only, performance of Lisp can be compared to C. However it seems that SBCL hasn't been optimized much for
ARM.

A reasonable concern is that the SBCL from Debian repositories has such a problem. The SBCL I have is `2.1.1` while [the platform table on SBCL website](http://www.sbcl.org/platform-table.html) says the latest version for ARMhf is `1.4.11`.

I've tried the binary from SBCL website for my ARM device and the results were interesting: **127s** for untyped code and **14s** for the typed one!

Note that for all these languages, the Fibonnaci series is computed recursively. So this benchmark could *only* show which one does the recursion better than the others. Another benchmark for testing arithmetic would be interesting, too.
