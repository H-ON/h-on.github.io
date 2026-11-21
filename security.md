---
layout: page
title: Security
permalink: /security/
---

# Security

사이버보안에 대한 이론과 핵심 개념을 공부하고 기록하는 공간입니다.

웹 해킹, 시스템 해킹, 네트워크 보안 등 다양한 보안 분야의 지식을 정리합니다.

{% assign posts = site.categories.security | sort: "date" | reverse %}

{% for post in posts %}

## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%Y-%m-%d" }}

{{ post.excerpt | strip_html | truncate: 150 }}

---

{% else %}

아직 등록된 보안 게시글이 없습니다.

{% endfor %}
