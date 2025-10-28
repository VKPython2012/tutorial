---
layout: ../../Layouts/MarkdownPostLayout.astro
title: "Dynamic Display of New Blog Posts"
pubDate: 08/10/2025
description: "Learning how to use `meta.glob()`"
author: "Bill"
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "The Astro logo on a dark background with rainbow rays."
tags: ["astro", "blogging", "learning astro", "problem solving"]
---

## The Problem

As more posts are added to the blog, it becomes annoying and repetative to add a new list item for every new blog post thats created.

## The Solution

To solve this we created a varaible `allPosts` in `blog.astro`, the values for this this variable come from using `import.meta.glob('./posts/*.md')` this looks in the posts folder using the wildcard `*` to search for any filename with the `.md` extension 