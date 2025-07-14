---
title: "How to switch between inputs of a monitor using Linux CLI?"
date: 2023-08-06T14:42:34+03:30
draft: true
categories: Computing
---

Some monitors, like the one my Father and I are using at home, have more than one input for display. For instance, our monitor, has got 2 display inputs, a VGA and a DVI. You can have both of them connected to 2 computers and switch between them.

The most naive method which I found for switching was simply disconnecting the ports and having only one of the ports connected to a computer. It was obvious to me that the monitor should provide a method of switching between inputs while both are connected each to a computer. And there is one: There is a button on the monitor which lets the user, in this case my Father and I, to switch between inputs. But I couldn't find exactly which key combinations should I use to do the switch thingie.

After some research, I realized monitor settings, including active input, can be set from my computer and software side. Monitors expose an I2C interface. And my Linux box recognizes it as a character device file, `/dev/i2c-X` where `X` is a digit. In the rest of this post, I will guide you on how to use this interface with a program which talks the protocol to change settings of the monitor, and how to change the current active input. I am using Ubuntu, therefore you have to install the program using your distro's package manager.

### Step 1: Installing `ddccontrol` which talks in the monitors language

Like when we want to read our Emails, we need a program which talks in Email protocol, for this we need a program which can communicate with the monitor's I2C interface and knows the protocol(s). I have used `ddcutil`:

```
14:49:10 ~ $ apt show ddccontrol
Package: ddccontrol
Version: 0.6.0-8
Priority: optional
Section: universe/utils
Origin: Ubuntu
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Original-Maintainer: Barak A. Pearlmutter <bap@debian.org>
Bugs: https://bugs.launchpad.net/ubuntu/+filebug
Installed-Size: 470 kB
Depends: ddccontrol-db (>= 20060308), libc6 (>= 2.34), libddccontrol0 (>= 0.5.2-1)
Homepage: https://github.com/ddccontrol/ddccontrol
Download-Size: 77.1 kB
APT-Manual-Installed: yes
APT-Sources: http://ir.archive.ubuntu.com/ubuntu jammy/universe amd64 Packages
Description: program to control monitor parameters
 DDCcontrol is a tool used to control monitor parameters, like brightness
 and contrast, without using the OSD (On Screen Display) and the buttons
 in front of the monitor.
```

A curious person might ask a question, a good one, how to find this program? I don't know the best way to find a program in software repositories suitable for some task. But my way has proven effective and useful for myself. I first try to search the entire repository using `apt search`:

```
apt search monitor
```

The reasons are too long? Use `less`:

```
apt search monitor | less
```

Now with `less`, I can search among results for some specific keywords. Because the word "monitor" has many meanings, there are naturally many irrelevant results. I use the keyword "control" because I want to control my monitor settings. If this keyword didn't bring me good results, I could try some other keyword.

Okay by searching, here comes the first hit:

```
batctl/jammy 2022.0-1 amd64
  B.A.T.M.A.N. advanced control and management tool
```

I press `n` to get the next hit:

```
boinc-manager/jammy 7.18.1+dfsg-4 amd64
  GUI to control and monitor the BOINC core client
```

And the next one till I find what I want:

```
ddccontrol/jammy 0.6.0-8 amd64
  program to control monitor parameters
```

After checking with `apt show ddccontrol` to make sure this is what I need, I install it with `apt install ddccontrol`

### Step 2: Realizing usage of the program

The first thing to check in Linux on usage of CLI tools is `man`:

```
man ddccontrol
```

And here we have:

```
NAME
       ddccontrol - A utility to control monitor parameters via software

SYNOPSIS
       ddccontrol -p             [-cdfsv] [-b datadir] [-r ctrl [-w value]]
       ddccontrol dev:/dev/i2c-N [-cdfsv] [-b datadir] [-r ctrl [-w value]]

DESCRIPTION
       This manual page documents briefly the ddccontrol command.

       ddccontrol  is  an open source utility which allows controlling monitor
       parameters via software.

OPTIONS
       A summary of options is included below.

       dev    a device specifier, for example: dev:/dev/i2c-0

       -p     probe I2C devices to find monitor buses

       -c     query capability

       -d     query ctrls 0 - 255

       -r     query ctrl

       -w     value to write to ctrl

       -f     force (avoid validity checks)

       -s     save settings

       -v     verbosity (specify more to increase)

       -b     ddccontrol-db directory (if other than /usr/share/ddccontrol-db)
```

Okay so from my understanding, I should first do `ddccontrol -p` to see a list of monitors and their I2C device files. Then I can read the settings with
