---
title: "Machine Learning is not (only) Neural Network"
date: 2023-07-11T17:09:08+03:30
draft: false
categories: Computing
---

In the recent years, Neural Networks and their applications have grown significantly. And we have a huge -not yet ending- enthusiasm for them.
Historically, NNs were abandoned after a period of enthusiasm and several interesting researches.
But after sometime, perhaps after computers were more capable, they returned back to the game.
Nowadays, most people who are in touch with technology stuff probably imagine Machine Learning means Neural Networks.

## What are ANNs?

To answer this question, we first need to understand what a "neuron" is and only after that,
we can understand the whole concept which is a network formed by these small units.
From a math nerd point of view, a neuron is a function which takes a vector(array) of real numbers,
computes each of them with another real named "weight" and will output 1 only if
the sum of these multiplications is greater than a threshold:

$$
f(X) = \begin{cases}
1, &\text{if } b + \sum_{i=1}^{n}{X_i . w_i} \gt 0  \\\\
0, &\text{if } \text{otherwise}
\end{cases}
$$

If the mathematical representation is not appealing, a neuron is simply a machine which takes some numbers,
multiplies each of them with another number, the weight. Then sums it up with a number named "bias"
or $b$. And then only if the sum is greater than a threshold, the machine will turn on and output $1$.
Otherwise, the machine will stay off and won't output anything. Or will output $0$.
Strictly speaking, each of these machines uses an "Activation Function"
and [the step function](https://en.wikipedia.org/wiki/Step_function)
is just one of the choices we have for our neuron.

Now an ANN, is more than one of these "machines". The first neuron gets fed from our input and sends its output to the input of the next neuron.
Then the next neuron does the same job but with probably different "weights" and will give its output to the next till we reach the "output" neuron which we get our output from.

In actual implementations, usually we have several layers of
these neurons. With each layer getting its input from the previous
layer and feeding its output to the next one(Except, obviously, the input and output layers).

![A two layer ANN](https://upload.wikimedia.org/wikipedia/commons/0/00/Multi-Layer_Neural_Network-Vector-Blank.svg)

<sup>This picture is from the WikiMedia user [Offnfopt](https://commons.wikimedia.org/wiki/File:Multi-Layer_Neural_Network-Vector-Blank.svg)</sup>

Now, if we choose the weights and the network architecture correctly,
we can get our network to do a certain task for us.
For example we want our network to distinguish input photos,
dog or cat. This is a binary classification problem Machine Learning which NNs can solve for us if we happen to find the right weights and structure for our network.

The process of finding these "weights"
or possibly even the structure itself,
is called "training". In ML and in general,
the process of finding the optimum model and/or parameters which suits our problem
is called that. In the case of an NN, the model is formed by its architecture and weights of each neuron.

## What is the problem of ANNs?

TL;DR, "Performance".

Here comes my personal beliefs.

The idea is very interesting and it is amazing that this computation machine is
Turing Complete.

But these interesting machines, are very inefficient the way we get them to work.
Most of the time, we "emulate" the NNs on our computers both for training and usage.
When we try to emulate stuff on something which it wasn't optimized for it, we sacrifice performance,
and NNs are no exception.
The processors we use are meant to have a list of instructions and execute
them one by one and they are efficient when we use loops.

~~There have been several tries to implement NNs as actual hardware.
But these are not widespread, yet.~~

Nowadays, there are NPUs and TPUs out there. But most of these we've got today are capable of
running only small models within a reasonable timeframe. If you want an NPU with good performance for
huge models, such as these LLMs out there, you ought to pay few thousand bucks. Let me know if I'm wrong, in the comments.

## What other paradigms of ML exist?

Several, actually. Decision Tree Classifiers, Support Vector Machines, Simulated Annealing when used to find an optimum model or program are all kinds of machine learning paradigms(or methods or techniques) which are not Neural Networks. I have decided to concentrate my research and studies on one of them:
Evolutionary Machine Learning and [Genetic Programming](https://en.wikipedia.org/wiki/Genetic_programming).\
In GP, we see the code as data and as our model to solve a problem.
I believe the idea was first formulated by [John Koza](https://en.wikipedia.org/wiki/John_Koza)
in his book. In plain, the idea is that we need to find a
program which does the job we have in mind. And we use techniques
inspired by Darwinian Evolution to find the optimal program.

_NOTE: Precisely, there were many who proposed evolving programs
to solve problems before Koza did. One of whom is the famous
Turing, the Father of Computer Science. However, to my knowledge,
it was Koza who first employed this technique to solve ML problems with it._

Let's again talk about the binary classification problem.
Is a given photo, is the photo of a dog or a cat?
With ANNs, we have to simulate them on a computer to train them using
whatever learning method. And these days, you need to employ GPUs most of the time
if you want to do something non-trivial. After the training, your model is a network
structure and a set of weights and you have to simulate the model on the target machine.

But with GP, our model is an actual computer program. We need to find a program which does our job good enough.
And to get to the right program, we use methods of [Natural Selection](https://en.wikipedia.org/wiki/Natural_selection)
and "survival of the most fit"

There are several ways to represent these "programs". Initially, Koza used
[Lisp](<https://en.wikipedia.org/wiki/Lisp_(programming_language)>) to accomplish
the goal. The feature Lisp had at that time which I believe no other language
had, was that the Lisp code could also be seen as and work with like some data.
Koza used Lisp [S-expressions](https://en.wikipedia.org/wiki/S-expression) to represent programs. This feature of Lisp is still quite unique among programming languages. (If you think Lisp is slow, see [Didier Verna's paper "How to make Lisp go faster than C?"](https://www.lrde.epita.fr/~didier/research/publications/papers/verna.06.imecs.html))
And he wrote programs, which were producing programs(or Lisp S-expressions),
to solve different tasks like evolving a multiplexer.

The representation Koza chose is today known as
"Tree Genetic Programming". After that, several other representations were proposed by
researchers which each are better suited for a specific class of tasks.
For example, Genetic Network Programming was proposed to solve the Artificial
Ant problem more efficient than the representation Koza
had used for the same problem. In this problem, we
need to program a machine, an artificial ant, which is looking for food in an area.
The location of food blocks is unknown. But we have several of these "ants" and each ant can mark
an area to guide other ants once it finds a food block. The goal is finding a strategy(or a program)
for all ants which maximizes the amount of food found in a constant period of time. Or alternatively, find a constant amount of food in minimum time.

Another representation is Stack based Genetic Programming.
I have written a simple program to solve a Symbolic Regression problem
which is available on [a Github repository](https://github.com/farooqkz/stack-gp-test). I've included
some small introduction about Stack GP and the problem my codes solves with it, as well.

Finally, if you are interesting to learn more about Genetic Programming, I suggest you read [this introduction](https://alfagroup.csail.mit.edu/sites/default/files/documents/2015%20Genetic%20Programming.%20James%20McDermott%20and%20Una-May%20O%27Reilly.%20Handbook%20of%20Computational%20Intelligence%2C%202015.pdf).

{{< chat machine-learning-is-not-neural-network.md >}}
