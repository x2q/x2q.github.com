---
layout: post
title: "EMONCMS: SPIII Solar Controller &amp; Current Cost"
date: 2012-10-11 16:42
comments: true
categories:
- Linux
- Raspberry
Tags:
- CurrentCost
- Raspberry
- SPIII
- EMONCMS
---

My father has got a solar water heater system with a SPIII Solar Water Heater Controller.
The controller itself is some crappy closed source with a bad interface (non-standard compliant HTML interface) - however it works.

In order to collect all environmental data from the house we decided to buy a [Raspberry PI](http://www.raspberrypi.org/) and a few [Arduino](http://www.arduino.cc/) devices.

So far we are able to collect data from the SPIII Solar Water Heater Controller using `curl` and from the [Current Cost](http://www.currentcost.com/) device (via cosm.com as proxy) using the following bash code:

{% gist 3872852 %}


The result so far in emoncms:

{% img http://static.x2q.net/emoncms.png %}

