---
title: Do I need a Lisp machine come back?
draft: true
categories: Computing
tags:
  - dailynote
date: 2025-07-28T10:05:52+03:30
---
One might say I'm too obsessed about Lisp. Or about "unconventional" things. Maybe I am. Or maybe dead technologies have got some gems which you cannot find in the modern world of computing.

The story is about [WakeGP](https://codeberg.org/farooqkz/wakegp). Few years ago, I wanted to start with Evolutionary Machine Learning, specifically Genetic Programming. So about 2.5 years ago, I started writing WakeGP software using Rust. And it's been few months which I'm doing experiments using different parameters and algorithms to see which one fits best.

My program uses TOML as the configuration file. It first loads the dataset as specified in the config, and through a process, finally produces train, test and validation datasets. Then the Genetic Programming run starts and after each generation, a line is printed to standard output to tell me about the last generation. Finally when the end condition has happened, it finds the best and the smallest individual and evaluates them on the 3 datasets. There is also a second stage trainer which one can use to further optimize the numeric constants. Though I don't use it currently.

Assuming that my algorithm works as it should, which is very questionable, I need to find the best hyperparameters which lead to best and smallest individuals, or at least the best ones. To find the best combination of hyperparameters, I need to do a lot of runs using each combination. Then finally I should do a T test to find out which ones perform better.

The current process is that I write a Python script which holds a list of combinations(see [my July devlog](/computing/wakegp-25-jul-2025-devlog/)) and it does a number of runs per each combination. I used to write shell scripts. But working with TOML files is not easy with them. And also they are slower. But that's not the end, I also write a systemd service which launches the Python script. And I have to enable the service to run on boot.

When the experiments are done, I have to write another Python script to read all WakeGP logs, extract the numbers(fitness, accuracy and size), and do T tests to find out which ones perform the best. I first a lower number of experiments per combinations. Some combinations fall way behind. I then schedule a second wave with combinations which are in the same "best bucket". Those are combinations which I don't have enough data to prove one of them perform better than the other. p value is large enough. But... a Python script which extracts all data and does a large number of T tests is way slow. I can either install more headache on my mind by doing multi processing or use pypy which is faster. But even pypy while being tons faster is still very slow.

Anyway, I do it with pypy, now I have a list of "bests". I have to do a second wave of experiments. I have to change the runner script to instead of creating a list of all combinations and finding the best, it reads from a text file.

Again I just get through it. I do the same for the next waves. Finally I decide to do experiments for a different set of hyperparameters. I have to copy the runner script, change it according to my need, write a new systemd unit file and do the same process again. Needless to say that I also have to write another Python script to extract the results because this time, I'm not looking at the old outputs. I can try writing a more generalized Python script and even interact with systemd using it. But then I'll have to spend 2-3 days to design and write such a thing, plus probably few more days to debug it. And it won't be late before I realize the script is not general enough and I need to change it again. It greatly slows me down...

All these issues are there while I don't need to change WakeGP code. Which written in Rust, it means each time I change the algorithm, I need to recompile it. And wait tens of seconds for it to finish. For now let's assume it's just the hyperparameters.

There are also other problems. Like if I need my computer for something, I'll have to either stop the runner service or change number of threads WakeGP uses. Both routes create tons of issues for me.

For the first one, I have to remember to start it again. If I don't and go home, I have lost few hours. I do it all the week and then I have to wait a week longer to get the experiment results.

For the latter, I have to go down adding a configuration option to the runner script to somehow read thread count from some configuration file and revert thread count to original after a time frame. Heck no. I wrote it but it didn't work well. And I didn't have time to spend debugging where am I wrong.

If I want to do some small experiments. Like compare just two combinations, I can't go for the runner script. I have to do it with shell and the `for` loop. It comes with tons of disadvantages, however with the advantage that initial investment is negligible.