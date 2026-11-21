---
layout: default
title: Blog
permalink: /blog/
---
<section class="wrapper page-shell">
  <header class="page-heading">
    <h1>Blog</h1>
    <p class="lede">보안 공부, 실습, 프로젝트를 기록합니다.</p>
  </header>
  {% include topic-links.html %}
  {% if site.posts.size > 0 %}
    <div id="search" class="search-panel" role="search" aria-label="게시글 검색" hidden>
      <label for="post-search">게시글 검색</label>
      <input id="post-search" type="search" placeholder="제목, 요약, 카테고리, 태그로 검색" aria-controls="posts">
      <p id="search-status" role="status"></p>
    </div>
    <div id="posts" class="post-grid">
      {% for entry in site.posts %}
        {% include post-card.html post=entry searchable=true %}
      {% endfor %}
    </div>
    <p id="search-empty" class="empty-state" hidden>검색 결과가 없습니다. 다른 검색어를 입력해 보세요.</p>
    <script src="{{ '/assets/search.js' | relative_url }}" defer></script>
  {% else %}
    <p class="empty-state">아직 공개된 게시글이 없습니다.</p>
  {% endif %}
</section>
