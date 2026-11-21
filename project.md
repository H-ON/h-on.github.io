---
layout: page
title: Project
permalink: /project/
---

# Project

직접 진행한 프로젝트와 활동 경험을 기록하는 공간입니다.

{% assign posts = site.posts | where_exp: "post", "post.categories contains 'project'" %}

{% for post in posts %}
### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%Y년 %m월 %d일" }}

{{ post.excerpt | strip_html | truncate: 150 }}

---

{% else %}
아직 작성된 프로젝트 게시글이 없습니다.
{% endfor %}
