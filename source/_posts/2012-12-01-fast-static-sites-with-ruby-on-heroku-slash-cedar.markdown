---
layout: post
title: "Fast Static Sites with Ruby on Heroku/Cedar"
date: 2012-12-01 09:43
comments: true
categories: 
- Heroku
- Ruby
- Rack
- Thin
- SSL
---

Recently I needed a simple and fast way for serving a basic static website.

I ended up with a simple Ruby and Rack/Thin-based application, suitable for deploying to Heroku. Which means more or less no maintenance and it supports SSL - which is good in this case. For even simpler free HTML cloud hosting check out GitHub Pages.

For SSL support `Rack::SslEnforcer` is used.

{% gist 4181366 %}

## Run it locally

    $ rackup

