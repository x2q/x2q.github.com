---
layout: post
title: "Howto Setup PDF Printer on Linux"
date: 2013-01-30 10:10
comments: true
categories: 
- Ubuntu
- Debian
- pdf
- Cups
---

Installing a pdf-printer on Windows is crap, but in Linux/Ubuntu/Debian it is quite easy.
    
    $ sudo apt-get install cups-pdf

Then restart your cups daemon

    $ sudo service cups restart

And you are ready to print to pdf files.
