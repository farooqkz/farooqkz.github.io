---
title: "A note about Epaper monitors"
date: 2023-10-06T10:21:52Z
draft: false
categories: Computing
---

If you are not already familiar with epaper, it's a display technology which does not emit light and has got a lower refresh rate. Another very important and interesting characteristic of an epaper display is that it needs power only when refreshing. This means you can disconnect power from an epaper display and it will show the last image forever. Though not refreshing them for long will hurt their health.

Epaper displays are widely used in ebook reader tablets to offer an eyestrain-free reading experience. These days there are lots of epaper tablets in different sizes, forms, with different hardwares and so on. I have got a BOOX Leaf which is a 7" epaper tablet from [BOOX](https://boox.com) company. It runs Android 10 and I am using it right now to write this post in [Termux](https://termux.com) using [neovim](https://github.com/neovim/neovim).

Additionally, you can buy cheap individual display modules or panels from black and white to multi colour with different refresh rates. [Waveshare](https://www.waveshare.com/) is one selling a diverse variety of them.

As the writing experience is very good on the tablet with a Bluetooth keyboard connected, I was tempted to buy an epaper monitor. BOOX already has got two epaper monitors in sizes of 13.3" and 25.3". However second thoughts and some research imply that experience on epaper monitors won't be as good as on tablets.

LinusTechTips Youtube channel did a review of an epaper monitor from [Dasung](https://dasung.com). I agree LTT is not a good source of correct and accurate information but at least I could watch the video to see how the monitor performs. And I noticed it does not perform well, which is unfortunate. Plus I don't know about any epaper monitor which is in colour. Though there are some colour epaper tablets from BOOX which run Android and videos show they don't perform bad.

A good guess to explain the difference in the quality of experience would be that an epaper monitor just receives the video signals and it can't produce a high quality representation on the epaper panel. But in a tablet the display and the rest of system are closely integrated. It also might be possible that with a different GPU or driver, we could get good quality images from epaper monitors.

A good experiment to see if the latter is possible, would be using a Linux host with a custom display driver and a cheap epaper display from Waveshare or other resellers plus a MCU.

{{< chat a-note-about-epaper-monitors.md >}}
