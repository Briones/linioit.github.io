---
layout: home
lang: es
title: Home
---
<div class="row mb-2">
  {% assign posts = site.posts | where:"lang", page.lang  %}
  {%- for post in posts -%}
  <div class="col-md-6">
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h3 class="mb-0">
          <a class="text-dark" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
        <small class="mb-1 text-muted">{{ post.date | date: site.date_format_home }}</small>
        <p class="card-text mb-auto">{{ post.content | strip_html | truncatewords:50 }}</p>
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>
