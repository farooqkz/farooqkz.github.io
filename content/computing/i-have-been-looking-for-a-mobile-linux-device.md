---
title: "I've been looking for a mobile Linux device for a while and here's the conclusion"
date: 2022-08-13T20:03:33+04:30
draft: false
category: Computing
---

For a long time, however not continous, I've been looking for a portable Linux device for geekish stuff like shell and programming as well as web browsing and maybe a bit chatting.

I also wanted such a device to have very long battery life and a QWERTY keyboard so that typing will be convenient with it. When you are talking about battery life, you probably want your device to have ARM processor or if it's x86, it must be Atom. Would you like Core i5 or Core i7 instead? Fine! then forget about long battery life.

The screen also must be pretty small so that carrying it would be easy and a smaller screen would eat less battery per hour. But being too small will hurt your eyes reading the text. So an average of 6-7 inchs seems to be a balance between portability and ease on your eyes.

So here are my trys. If you are too lazy to read, jump to "Conclusion".

## First try: Chromebooks

At the beginning I was considering chromebooks. They are cheap, many in small form factors such as 11-12inchs which is not perfect but at least not as big as 14-15. They also have ARM processors or lowend x86 ones such as Atom or Celeron.

**But chromebooks were not my answer.** Despite the hardware advantages of chromebooks and their cheap prices, they have a big disadvantage when it comes to a user like me which is Linux and hackability. It seems that there is no good Linux support for Chromebooks yet. Also it seems many of these chromebooks **come with locked bootloaders**. A member of Linux room on Matrix suggested that I don't try painful process of installation of Linux on such these devices. Last but not the least, they've got different and strange keyboards.

## Second try: Linux ARM laptops

In the next step, I thought there might be some ARM Linux laptops which have small screen size and come for cheap. After trying some queries I've found only [Pinebook from Pine64](https://www.pine64.org/pinebook/) comes with a relatively small screen(11.6" according to spec).

It seemed really cool and it was only 100 bucks!

But after talking about it with folks in BananaHackers chatroom(in offtopic room), someone suggested that I don't buy anything from them as they are known to ship damaged devices. Also people from "Rust offtopic" on Matrix told me the device is too slow.

## Third try: DIY laptop with a (Raspberry) Pi

This could be so complicated. But I could 3D print a case for a Pi, preferably a NanoPi with Armbian support and an HDMI port. After some search I've found a project on thingiverse. It would be both a cool and fun project and a small portable Linux device. **But people said it won't be as good as I am thinking it will be**

## Fourth try: postmarketOS

I also found postmarketOS, an Operating System for mobile devices, mostly phones and tablets. But it seems for most devices, there is no good support for all hardware features. Or if there is, the device is not that cheap.

## Conclusion

It seems Android is the best, most supported and cheapest choice for me. Web browsing with the Android browser and Termux for shell stuff. I could connect a physical keyboard with OTG or Bluetooth as well. You can find cheap Lenovo tablets which come with Android 8. However, I chose something different: [BOOX Leaf](https://shop.boox.com/collections/all/products/leaf) so that it could save me from eye strain as well. I also could read papers and books on it without problem. It comes with an octa-core snapdragon, Android 10 and 2GB of Memory(RAM).
