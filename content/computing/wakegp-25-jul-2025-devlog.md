---
title: WakeGP 25 Jul 2025 Devlog
date: 2025-07-25T10:05:52+03:30
draft: false
categories: Computing
---

Checking the project's `git log`, the first commit is in early 2023. And now at the time of writing this devlog, it's mid 2025. 2.5 years since I started WakeGP research has passed. As the first research project, I chose something big. This, and at the same time the gray dog tying me hands, made this research take more than 2 years.

The problem with gray dog ruling you is not just that you'll have reduced work hours. But also that you'll have lower concentration. And this could result in a negative impact. Various ridiculous bugs which I found in feature extraction. And those made all my 6 months(or more) of experiments, all in vein.

The goal I have for WakeGP is training sequential programs which detect if a specific wake word has been spoken. And I've chosen Genetic Programming to achieve this goal. At the time of writing this log, I've done several experiments to realize so many times I had chosen the wrong route.

First and most important, for a long time, I didn't have an almost formal process to learn which direction should I take. That is you do like 500 runs for two setups and see which one will perform better. But there is a Persian proverb which says whenever you catch the fish, it's fresh. I think in English they might say late is better than never.

## Light quick experiments

I did some experiments with a small fraction of the dataset. Like 800 data points for each class. These experiments included:

- Best values for combinations of `register,coefficients` number. I found that `r=8,coeff=20` is the best
- What to do with "overflow" and anormal numbers. In some data points and with some programs, the values of registers grow too big and become infinite. Then the output register's value might become anormal, including `NaN`. And then you can't determine its sign, which is the prediction. I came to the conclusion that I let these anormalies happen. Then when the output is anormal, I define it as false prediction.
- Effect of my invented parsimony pressure method in combination with deletion mutation. The parameters are `n` for my method, chance of mutation and deletions per mutation. That is, for each program to be mutated, how many instructions are affected. I came to the conclusion that a big chance of mutation, like over `0.5`, with a small number of deletions per mutation and `BestAndWorst = 4` have the best results with respect to both average size and fitness.
- Best value for FFT size. I found that a value from `7000` to `8000` yields the best for a sample rate of `48000`
- Utility of `Oversize` feature of WakeGP. This is still unknown. But it seems `Oversize` causes the population to converge much faster when used with `Tournment > 8`, `Truncate` or `Average` selection methods. And of course, it significantly grows the average size.
- Which instruction set performs the best.

Validity of these experiments are of great question:

- I've used only 800+800 data points for the train dataset. If I use a realistic value, like 10k, would I get the same results?
- Accuracy of these runs are around 80%. Are these data also valid when the programs become more accurate than 95% which is the project goal?

## Heavy experiments

I wrote a small Python script to test 1680 different combinations of parameters. What I included was number of registers, coefficients, constants, maximum size limit and FFT size. There were a total of ~90k runs.

- The values for `register_cells` were `{8, 16, 32, 64, 128}`
- The values for number of coefficients were `{10, 20, 40, 80, 100, 120}`
- The values for FFT size were `{1000, 2000, 4000, 7000, 8000, 12000}`
- The values for number of constants were `{8, 16, 32, 64}`
- The values for size limit `{512, 1024}`
- `6000+1000` data point were used as the train dataset.

The best found combinations are:

```
reg.coeff.fft.const.size_limit
32.20.8000.32.1024
16.20.8000.16.1024
32.20.7000.32.1024
32.20.8000.8.1024
32.20.7000.16.1024
16.20.8000.32.1024
32.20.8000.16.1024
32.20.8000.64.1024
16.20.8000.8.1024
32.20.8000.32.1536
```

All of these have got `deletion_mutation_rate = 0.5`, `deletions_per_mutation = 4` and `parsimony = { BestAndWorst = 4 }`. As you can see, an FFT size of `7000` to `8000` yields the best results for this sample rate. And there is no combination with a limit of `512` instructions. Also unlike what I concluded in my "light and quick" experiments, a number of 8 for registers wasn't good.

The last combination wasn't part of the initial experiments. However, I tested a higher limit manually to see if I could get better fitness values. As you can see, a big number of constants is favored.

So many questions remain unanswered:

- How many of the constants did programs use? When doing these experiments, the software didn't have a feature to output this.
- How many of the coefficients, out of the 20, did the programs use? I tried doing feature selection at the same time.
- Would a bigger number for register cells yield better results? Like `48`?
- How much are these size limits valid for higher accuracies?
- Did my method to control sizes, also handicap the programs to have lower accuracy?

## Future experiments

Today, some new features has been added to WakeGP, walking a new direction. First, the features and constants which the best found individual uses, are printed. Second, a new config, `dataset_config.selected_features` which is an array of integers has been added. Combined, this allows testing different features. One can do like 200 runs. Then using the features which are commonly selected among best performing runs, we can then evolve programs to use only those specific features.

Note that `dataset_config.selected_features` is optional and as its positions suggests, it can be used with both `from_wave` and `from_csv`.
