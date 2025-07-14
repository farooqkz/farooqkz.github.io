---
title: "Failed research: Generating vocal form of an English word with Genetic Algorithms"
date: 2022-10-22T10:15:37+03:30
draft: false
categories: Computing
---

I thought by using GAs and feeding individual waveforms to a Speech Recognition engine, I could generate vocal form of English word
"hello". However after several tries, GAs don't seem the right tool for the job.

## Code

Code is on [a Github repository](https://github.com/farooqkz/hello_generator) and is written using Rust for high performance.

## Individual

Considering that human speech is just overlapping sine waves, each [Individual](https://github.com/farooqkz/hello_generator/blob/master/src/individual.rs) is a set of [SineWaves](https://github.com/farooqkz/hello_generator/blob/master/src/sinewave.rs). To compute fitness of each individual,
first all the SineWaves each are converted to [Waveforms](https://github.com/farooqkz/hello_generator/blob/master/src/waveform.rs) and after that the Waveforms are [mixed](https://github.com/farooqkz/hello_generator/blob/master/src/waveform.rs#L14) and feed to [Vosk](https://alphacephei.com/vosk/) using a small English model. Then the distance of the result by Vosk with the target word is computed and returned as fitness. If nothing is detected, [a default maximum distnace value](https://github.com/farooqkz/hello_generator/blob/master/src/consts.rs#L20) is returned.

### SineWave

Each Individual can have a number of SineWaves. The number is in [a defined range](https://github.com/farooqkz/hello_generator/blob/master/src/consts.rs#L2) and is chosen randomly upon initializing. Each SineWave has 3 properties: start, length and frequency. Frequency of each sinewave is random within [a range](https://github.com/farooqkz/hello_generator/blob/master/src/consts.rs#L6) as are start and length.

### Combination

Two individuals are combined using simple cross over: A random point is selected and waves are cloned to one of the two new childs, depending on that a wave is before the point or after it. [Here](https://github.com/farooqkz/hello_generator/blob/master/src/individual.rs#L45) is the combine method.

### Mutation

Depending on mutation rate given by the user, a small number of individuals are mutated. These two ways are tested:

- Just reselecting frequency of each of the sinewaves within the defined range.
- Generating a new random sinewave and adding it to the set.

## Tests and the results

Several tests has been done. With population from 50 to about 2000. First the fitness function was computed using two variables: distance of the recognized text from the target word and number of sinewaves in an individual. However the latter seemed irrevelant when nothing is detected at all. In the next tests, there was only one parameter for fitness: distance. However since nothing was yet recognized, it always remained constant and in it's worst value.

Frequencies of sinewaves were first within range of 20 to 20k. But then I changed it to the frequency of male voice which is a much more narrow range. Also with different number of sinewaves in an individual, tests were done.

## Conclusion

The right tool and method hasn't been chosen for the job. With population from 50 upto 2000, nothing was detected. It is very improbable that something is detected just by combining sinewaves randomly which is done for population initialization. And when there is absolutely nothing to be detected, the fitness remains constant and GA can't progress at all. Since it is not completely impossible, it _might_ be possible to have something with a population size of **really HUGE**, like at least millions. But even in that case, this method is extremely inefficient.

## Next steps

Maybe using Genetic Programming which is a subset of Machine Learning, it is possible to evolve separate programs which generate sinewaves. Each program could generate a single phoneme and by mixing these, one word could be generated.

{{< chat failed-research-generating-vocal-form-of-an-english-word-with-genetic-algorithms.md >}}
