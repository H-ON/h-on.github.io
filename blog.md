---
layout: page
title: Blog
permalink: /blog/
---

# All Posts

이곳은 H-ON의 전체 공부 기록을 모아놓은 공간입니다.

보안 공부, 실습, 프로젝트 등 다양한 기록을 확인할 수 있습니다.

---

{% assign posts = site.posts | sort: "date" | reverse %}

{% for post in posts %}

### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%Y년 %m월 %d일" }}

{{ post.excerpt | strip_html | truncate: 150 }}

---

{% else %}

아직 작성된 게시글이 없습니다.

첫 번째 게시글을 기대해 주세요!

{% endfor %}
