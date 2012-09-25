---
comments: true
date: 2012-06-30 11:56:25
layout: post
slug: summasummarum-on-linux-using-wine
title: SummaSummarum on Linux Using Wine
wordpress_id: 1908
categories:
- Hacking
- Open Source
---

It works out of the box using Wine 1.5, however since I'm using Ubuntu in English SummaSummarum uses English locales; thousand separators, dates etc.

To change to behavior something like this is required:

    LANG=da_DK.UTF-8 /usr/bin/wine SummaSummarum/summa.exe
