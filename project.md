---
layout: page
title: Project
permalink: /project/
---

# Project

개인 및 팀 프로젝트와 개발 활동을 기록하는 공간입니다.

프로젝트의 목표, 사용 기술, 구현 과정, 문제 해결 및 결과를 정리합니다.

{% assign posts = site.categories.project | sort: "date" | reverse %}

{% for post in posts %}

## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%Y-%m-%d" }}

{{ post.excerpt | strip_html | truncate: 150 }}

---

{% else %}

아직 등록된 프로젝트가 없습니다.

{% endfor %}
