---
layout: page
title: Practice
permalink: /practice/
---

# Practice

직접 실습하고 경험한 내용을 기록하는 공간입니다.

{% assign posts = site.posts | where_exp: "post", "post.categories contains 'practice'" %}

{% for post in posts %}
### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%Y년 %m월 %d일" }}

{{ post.excerpt | strip_html | truncate: 150 }}

---

{% else %}
아직 작성된 실습 게시글이 없습니다.
{% endfor %}
