---
layout: default
title: Home
permalink: /
---
<section class="hero">
  <div class="wrapper hero-inner">
    <div>
      <p class="kicker">CYBERSECURITY &amp; TECHNOLOGY</p>
      <h1>Think. Learn.<br><em>Secure.</em></h1>
      <p class="hero-description">사이버보안과 컴퓨터공학을 공부하며 배운 지식, 직접 해본 실습, 그리고 프로젝트를 기록합니다.</p>
      <a class="button button-primary" href="{{ '/blog/' | relative_url }}">블로그 둘러보기</a>
    </div>
    <div class="hero-art" aria-hidden="true"><span></span></div>
  </div>
</section>
<section class="wrapper home-section" aria-labelledby="latest-heading">
  <div class="section-heading">
    <h2 id="latest-heading">최신 게시글</h2>
    <a href="{{ '/blog/' | relative_url }}">전체 게시글 보기</a>
  </div>
  <div class="post-grid">
    {% for entry in site.posts limit: 4 %}
      {% include post-card.html post=entry heading='h3' %}
    {% else %}
      <p class="empty-state">아직 공개된 게시글이 없습니다.</p>
    {% endfor %}
  </div>
</section>
<section class="topic-section" aria-labelledby="topics-heading">
  <div class="wrapper home-section">
    <h2 id="topics-heading">분야별로 보기</h2>
    <div class="topic-grid">
      {% for topic in site.data.topics %}
        {% assign entries = site.categories[topic.slug] %}
        <a class="topic-card" href="{{ topic.url | relative_url }}">
          <h3>{{ topic.name | escape }}</h3>
          <p>{{ topic.description | escape }}</p>
          <span>{{ entries.size | default: 0 }}개 게시글</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>
