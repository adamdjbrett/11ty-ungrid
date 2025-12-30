---
layout: base.njk
title: Home
permalink: /
---

## Welcome

This is a minimalist blog built with [11ty](https://www.11ty.dev/) and [ungrid.css](https://chrisnager.com/ungrid/), a lightweight responsive grid system.

### Recent Posts

<div class="row">
{%- for post in collections.posts | slice(0, 3) %}
    <div class="col">
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        <p><small>{{ post.date | readableDate }}</small></p>
        <p>{{ post.data.excerpt or post.content | striptags | truncate(150) }}</p>
    </div>
{%- endfor %}
</div>

<p><strong><a href="/blog/">View all posts →</a></strong></p>
