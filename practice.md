---
layout: page
title: Practice
permalink: /practice/
---

# Practice

직접 실습하고 문제를 해결하며 배운 내용을 기록하는 공간입니다.

Linux, Docker, Python, CTF 등 실습 과정과 문제 해결 과정을 정리합니다.

{% assign posts = site.categories.practice | sort: "date" | reverse %}

{% for post in posts %}

## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%Y-%m-%d" }}

{{ post.excerpt | strip_html | truncate: 150 }}

---

{% else %}

아직 등록된 실습 게시글이 없습니다.

{% endfor %}
