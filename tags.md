---
layout: default
title: Tags
permalink: /tags/
---
{% assign groups = site.tags | sort %}
<section class="wrapper page-shell">
  <header class="page-heading">
    <h1>Tags</h1>
    <p class="lede">관심 있는 태그로 게시글을 찾아보세요.</p>
  </header>
  {% if groups.size > 0 %}
    <nav class="tag-index" aria-label="태그 목록">
      {% for group in groups %}
        {% assign tag = group[0] %}
        <a class="pill" href="#tag-{{ tag | url_encode | url_encode }}">#{{ tag | escape }} <span>{{ group[1].size }}</span></a>
      {% endfor %}
    </nav>
    {% for group in groups %}
      {% assign tag = group[0] %}
      <section class="tag-section" id="tag-{{ tag | url_encode }}">
        <h2>#{{ tag | escape }}</h2>
        <ul class="archive-list">
          {% for entry in group[1] %}
            <li><a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a><time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: '%Y.%m.%d' }}</time></li>
          {% endfor %}
        </ul>
      </section>
    {% endfor %}
  {% else %}
    <p class="empty-state">아직 등록된 태그가 없습니다.</p>
  {% endif %}
</section>
