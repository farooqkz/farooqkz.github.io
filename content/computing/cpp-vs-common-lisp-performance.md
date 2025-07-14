---
title: "C++ vs Common Lisp Performance"
date: 2022-01-17T12:47:45+03:30
draft: false
category: Computing
aliases:
  - /posts/cpp-vs-common-lisp-performance.html
---

![dot for stats](https://farooqkz.de1.hashbang.sh/count/tag.svg)

After I read a small paper named [How to make Lisp go faster than C](http://www.iaeng.org/IJCS/issues_v32/issue_4/IJCS_32_4_19.pdf) I decided to do some small benchmarking myself with C++ and Common Lisp. For benchmarking I have written programs which find prime numbers from 2 up to 384460. All programs were run on my laptop with the following specs and properties:

![Specs of Farooq's laptop](/farooqs-laptop-specs.png)

#### C++

```cpp
bool isprime(unsigned long n) {
    if (n < 2) return false;
    for (unsigned long i = 2; i < n; i++) {
        if (n%i == 0) return false;
    }
    return true;
}
int main() {
    unsigned count = 0;
    for (unsigned long i = 2; i <= 384460; i++) {
        if (isprime(i)) {
            count++;
        }
    }
    return count;
}
```

And the time this program took to find all prime numbers in the given range without optimizing(`clang++ prime.cpp`):

```
real    1m2.907s
user    1m2.816s
sys 0m0.084s
```

And with `-O3` option:

```
real    0m54.604s
user    0m54.566s
sys 0m0.008s
```

Also with `-O2` option:

```
real    0m53.953s
user    0m53.953s
sys 0m0.000s
```

#### Common Lisp untyped

Code:

```cl
(defun isprime (n)
  (if (< n 2)
      nil
      (loop for i from 2 to (1- n)
        when (zerop (mod n i))
          return nil
        finally
           (return t))))

(defun main ()
  (loop for i from 2 to 384460 count (isprime i)))

(main)
```

And the time it took:

```
real    2m0.889s
user    2m0.805s
sys 0m0.078s
```

Common Lisp typed and optimized

```cl
(declaim (optimize (speed 3) (safety 0) (debug 0)))

(defun isprime (n)
  (declare (type fixnum n))
  (if (< n 2)
      nil
      (loop for i fixnum from 2 to (1- n)
        when (zerop (mod n i))
          return nil
        finally
           (return t))))

(defun main ()
  (loop for i fixnum from 2 to 384460 count (isprime i)))

(main)
```

And the time it took:

```
real    0m59.837s
user    0m59.755s
sys 0m0.070s
```

As you see according to these results CL typed and optimized code is a bit slower than the C++ version. However someone who helped me a lot in `#clschool` on freenode reported that both C++ version and CL typed version ran in 21.6s.

**NOTE: I used SBCL for both typed and untyped versions**

#### Thanks to

- People in #clschool who helped me
- Didier Verna for his good paper

{{< chat cpp-vs-common-lisp-performance.md >}}
