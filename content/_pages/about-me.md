---
title: "About Farooq Karimi Zadeh"
date: 2023-04-12T21:49:16+03:30
draft: false
---


### The name

My fullname is Farooq Karimi Zadeh Shaquii. Farooq is my first name and that's the name I prefer people to call me with and what most people use to call me. Karimi Zadeh is my last name. And finally, Shaquii is the suffix and is the name of my Father's town/homeland.

From a certain point of view, "X Zadeh" lastnames in Persian are like "XSon" in English. "X Zadeh" means we are descendants of "X" just like "XSon", that if we consider the word "Son" "descendant" idiomatically.

### Technical and Academic interests

I've been programming since I was about 12 years old. With [Game Maker 8.0](https://en.wikipedia.org/wiki/GameMaker) and not with code. I was creating silly 2D games. Later, I started learning CSharp and voila `MessageBox.Show("Me is virus!");` :) and yeah don't forget the semicolon...

I was creating silly apps till sometime in 2015. And after that, I "relocated" with my baggage in Ubuntu. No CSharp there so I started learning Python, version 3. I continued writing silly CLI stuff and after that, I discovered web and started creating web applications with [CherryPy](https://cherrypy.dev). Later in around 2020, I replaced CherryPy with [Flask](https://flask.palletsprojects.com/) due to its bigger community and better support.

In 2022, I learned about [Genetic Algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm) and had started learning [Rust](https://www.rust-lang.org/) in about the same time to have a compiled language in my toolbox. Back then, I was thinking, what if we evolve math formulas with this Evolutionary heuristic instead of just strings? After some research, I found Genetic Programming and Symbolic Regression. So till now I'm stuck with Rust and Evolutionary Machine Learning. I needed a language with high performance and Python wasn't it. I also wanted the language to be suitable for usage in embedded industry so that I won't have to learn another one solely for that purpose. The answer for me has been Rust.

I am also interested in Circuits. Actually my hobby before I turned into the Dark side of the Source was assembling circuits. But at that time, I being just a child, I could not design my own circuits and just assembling the circuits others had designed seemed very pointless and not fun.

Last but not the least, Mathematics and combinatorics are also very interesting for me. However, I don't spend much time with these very old friends of mine, anymore. Which is unfortunate and I hope to change them in future.

### Languages

I can fully utilize Persian, Bandari and English. Perhaps Bandari should not be counted as another language. It is spoken by native people of [my city](https://en.wikipedia.org/wiki/Bandar_Abbas), the islands in the south of my city and many villages around. Other cities in the same province have a bit different dialects of the same language. Language of some people outside the province but close to it are also very similar and distinguished from the language of other people of those provinces.

I can also understand Arabic. Not good enough to talk in most situations. But good enough to understand a big portion of texts especially if they are old.

Last but not the least, it's been a while which I'm learning German.

*Bonus: Find some poems of mine in this website, hidden somewhere, in Arabic, English and Persian!*

### Projects

Now here we get to the interesting part :)


#### Lead developer

These are maintained:

 - [chooj](https://github.com/farooqkz/chooj)(Typescript, InfernoJS, KaiOS): A [Matrix](https://matrix.org) client for [KaiOS](https://en.wikipedia.org/wiki/KaiOS).
 - [ctf-notify](https://github.com/farooqkz/ctf-notify)(Flask, Python, React, Javascript): A small web application to get current status of [the Minetest CTF server](https://ctf.rubenwardy.com) as well as getting notification when the desired setup(map/mode/online players) is being played.
 - [deltachat-loginbot](https://github.com/deltachat-bot/deltachat-loginbot)(Rust, Axum): Written with [Rust](https://rust-lang.org) and [axum](https://github.com/tokio-rs/axum), it covers enough of [OAuth2](https://oauth.net) specification so that users of a [Discourse](https://discourse.org) instance can login with their [DeltaChat](https://delta.chat).
 - [KaiUIng](https://github.com/farooqkz/KaiUIng)(SASS, SCSS, CSS, InfernoJS, Typescript): A UI library for KaiOS. With [Inferno](https://infernojs.org) bindings.
 - [stack-gp-test](https://github.com/farooqkz/stack-gp-test)(Rust): An example program, written in Rust, which solves a simple Symbolic Regression problem using Stack based Genetic Programming. Includes some text about Genetic Programming, Stack based Genetic Programming and the Symbolic Regression problem in general.
 - [KaiScr](https://notabug.org/farooqkz/KaiScr)(Python): Two small programs written in Python to record screen of a KaiOS device as well as watching a live stream of it.
 - [chooj's push-gateway](https://github.com/farooqkz/chooj-pushgateway)(Python, Flask): A Matrix client needs a push gateway server to deliever push notifications. The current version is more a prototype. For real world usage, I would change it or even rewrite it in Rust.

These aren't actively maintained anymore:

 - [Talking bot for KaiOS](https://notabug.org/bananaphone/talkingbot)(Vanilla Javascript): A talking(not chatting) bot toy app for KaiOS.
 - [VM-IRC](https://notabug.org/bananaphone/vm-irc)(Javascript, JQuery): A simple and minimal IRC client for KaiOS.
 - [fooplot](https://notabug.org/bananaphone/fooplot)(Javascript): A simple app for KaiOS to graph mathematical functions
 - [simplequran](https://notabug.org/bananaphone/simplequran): A very simple app to read the Holy Quran.
 - [fobil](https://notabug.org/farooqkz/fobil)(Common Lisp): A simple static blogger
 - [drawlogo86](https://notabug.org/farooqkz/drawlogo86)(x86 Assembly): This program displays a 16x16 sprite(possibly your logo!) when you boot your storage.
 - [mtbotter](https://notabug.org/farooqkz/mtbotter)(C++): A library to create [Minetest](https://minetest.net) bots. I don't remember anything about it. If I wanted Minetest bots again, I would replicate the protocol implementation in Rust.
 - [BHA](https://notabug.org/farooqkz/BHA)(Python): Bash History Analyzer
 - [PotatoEgg](https://notabug.org/farooqkz/PotatoEgg)(Cherrypy, Python, Vanilla Javascript): A simple file manager but web based

#### Major contributor

These are the projects which I do major contributions to them:

 - [DeltaChat Desktop](https://github.com/deltachat/deltachat-desktop)(Electron, Tauri, Typescript, React, SCSS, SASS): See [DeltaChat](https://delta.chat). Utilizes a backend such as Electron or Tauri and a frontend written using React and Javascript.
- [message-parser](https://github.com/deltachat/message-parser)(Rust, nom): This is utilized to parse different portions of a text message in DeltaChat Desktop. We hope that in future, it could be utilized in other DeltaChat apps as well. I'm thinking I could even one day use it in chooj.
- [Minetest Capture the Flag](https://github.com/MT-CTF)(Lua, Minetest/Luanti): I think my first contribution was somewhere around 2020-2021. Not so sure. Also read [this post of mine](/computer/evolution-of-minetest-ctf-game-over-years/) regarding the history of the game, as well as [this post from rubenwardy on his blog](https://blog.rubenwardy.com/2023/08/16/minetest-ctf-is-10/).

### Friends' websites

Author(s) of these people are not necessary my real life friends. Many of them, I have never seen or talk with them and we were communicating with IM apps. Nevertheless, I would like to include a link to their website because I think they have content useful and interesting. Among these, many of these "hacker friends" don't like the bloated web and prefer to have a gopherhole.

 - [lumidify's gopherhole](gopher://lumidify.org): He is almost at the same age as me. He doesn't like bloated stuff like the Web and many softwares in today's world. Last time I was with contact with him, he was creating a text editor with C.
 - [Luxferre's weblog](https://chronovir.us/): Another hacker but much older than me. Dislikes bloated stuff and the founder of BananaHackers community.
 - [Simon Laux's Github](https://github.com/simon-laux): He doesn't have a website which I am aware of, yet. Before he tells me he is almost the same age as me, I was expecting him to be around 30 like Luxferre because he seems really wise and very skillful.
 - [Behnam Simjoo's Github](https://github.com/b-simjoo/): Behnam has been a close friend of mine for years. Our technical interests can be very different as well as how we approach the problems. He also has something which I believe the rest of this list don't: He is both a good web developer and a good web designer. To be honest, I don't have talent for art like he does. We write in https://pcworms.ir together but that's Persian and he hasn't got an English website, yet.
 - [Cyan's Github](https://github.com/cyan-2048): This youth is a very hardworking and talented programmer. Doesn't have a website, yet.
 - [John David Deubl(strukturart)](https://strukturart.com): An Artist, Analogue photographer, poet and hardworking programmer. I always admired his constant distraction-free hardwork in my heart.
 - [Affe Null](https://git.abscue.de/affe_null): This hacker have done significant work and is a BananaHacker council member. You might know about [the port of Debian to 8110](https://git.abscue.de/bananian/bananian), [the shell for the same phone](https://git.abscue.de/obp/bananui/bananui) and [his toolbox for hacking Nokia 2780 flip](https://git.abscue.de/affe_null/weeknd-toolbox).
 - [Muhammad Saleh Kamyab](https://framagit.org/mskf1383): This boy is another young programmer. He has also interests in literature which is quite rare among programmers!
