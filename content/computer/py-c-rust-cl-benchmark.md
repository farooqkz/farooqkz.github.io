---
title: "A benchmark between Python, C, Rust and Common Lisp for calculating fibonacci series"
date: 2022-03-31T17:12:35+04:30
draft: false 
---

![dot for stats](https://farooqkz.de1.hashbang.sh/count/tag.svg)

A few years ago I did [a benchmark between Common Lisp and C++](/computer/cpp-vs-common-lisp-performance/)
and wrote pieces of code for determining if a number is prime or not. Unlike what most people usually think about Common Lisp,
it could be nearly as fast as C++ when you use the typed version of your code and disable safety stuff of SBCL.

This time, I want to do another benchmark for computing the fibonnaci and I do it **without using loops and only with recursions**. As an experienced Python developer knows, Python will fail for large inputs because there is a limitation on how many times a function can call itself.

This benchmark will hopefully indicate which language is more optimized for recursion. Email me if you think I am wrong about this.

## What is the properties of the host system?

I have the same computer as I had when benchmarking C++ versus Common Lisp years ago except that I've added an extra 4GB Memory module. But for the sake of clearness I am putting my neofetch again:

![Specs of Farooq's laptop](/farooqs-laptop-specs-1.png)

## Python

First let's get our hands dirty with Python:

```python
def fibo(n: int):
    if n <= 2:
        return 1
    else:
        return fibo(n-1) + fibo(n-2)

if __name__ == "__main__":
    print(fibo(40))
```

### Python3.8

```
[17:28:09]:~/py$ time python3.8 fibo.py 
102334155

real	0m20.983s
user	0m20.906s
sys	0m0.028s
```

### Python3.10

```
[17:34:55]:~/py$ time python3.10 fibo.py 
102334155

real	0m23.500s
user	0m23.440s
sys	0m0.024s
```

### PyPy3

```
[17:35:59]:~/py$ time pypy3 fibo.py 
102334155

real	0m1.332s
user	0m1.282s
sys	0m0.028s
```

## Rust

Now I get my hand into Rust code:

```rs
fn fibo(n: u8) -> u64 {
    if n <= 2 {
        1
    } else {
        fibo(n-1) + fibo(n-2)
    }
}

fn main() {
    println!("{}", fibo(40))
}
```

### rustc 1.55.0 without optimization flag(`-O`)

```
[17:39:30]:~/rs$ time ./fibo
102334155

real	0m1.003s
user	0m0.998s
sys	0m0.004s
```

### rustc 1.55.0 with optimization flag(`-O`)

```
[17:43:16]:~/rs$ time ./fibo 
102334155

real	0m0.265s
user	0m0.260s
sys	0m0.005s
```

## C

```c
#include <stdio.h>

int fibo(int n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}

int main() {
    printf("%d", fibo(40));
}
```

### clang without any flag

```
[17:45:28]:~/c$ time ./a.out 
102334155
real	0m0.510s
user	0m0.501s
sys	0m0.008s
```

### gcc without any flag

```
[17:46:59]:~/c$ time ./a.out 
102334155
real	0m0.482s
user	0m0.482s
sys	0m0.000s
```

### clang with -O2

```
[17:47:51]:~/c$ time ./a.out 
102334155
real	0m0.257s
user	0m0.257s
sys	0m0.000s
```

### gcc with -O2

```
[17:48:47]:~/c$ time ./a.out 
102334155
real	0m0.230s
user	0m0.229s
sys	0m0.000s
```

## Common Lisp untyped

```cl
(defun fibo (n)
  (if (<= n 2)
      1
      (+
       (fibo (1- n))
       (fibo (1- (1- n))))))
	     
(write (fibo 40))
```

### SBCL

```
[17:51:50]:~/lisp$ time sbcl --script fibo.lisp
102334155

real	0m2.081s
user	0m1.986s
sys	0m0.031s
```

## Common Lisp typed with no safety

```cl
(declaim (optimize (speed 3) (safety 0) (debug 0)))

(defun fibo (n)
  (declare (type fixnum n))
  (if (<= n 2)
      1
      (+
       (fibo (1- n))
       (fibo (1- (1- n))))))
	     
(write (fibo 40))
```


### SBCL

```
[17:55:57]:~/lisp$ time sbcl --script fibo.lisp
102334155

real	0m0.765s
user	0m0.696s
sys	0m0.008s
```

## Summary

In order from fastest to slowest:

 - GCC with -O2: **0.230s**
 - clang with -O2: **0.257s**
 - Rust with optimization flag: **0.265s**
 - Common Lisp typed with SBCL: **0.765s**
 - PyPy3: **1.332s**
 - Common Lisp untyped with SBCL: **2.081s**
 - Python3.8: **20.983s**


{{< chat py-c-rust-cl-benchmark.md >}}
