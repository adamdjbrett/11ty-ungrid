# Ungrid Blog

A minimalist blog built with 11ty 3.1.2 and ungrid.css.

## Features

- **Lightweight** - No bloat, just clean HTML and minimal CSS
- **Fast** - Static site generation means lightning-fast page loads
- **Responsive** - Works great on all devices using ungrid.css
- **Easy to customize** - Simple templates and straightforward structure

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

This will start a development server at `http://localhost:8080` with hot-reload enabled.

### Build

```bash
npm run build
```

This generates the static site in the `_site/` directory.

## Project Structure

```
ungrid-blog/
├── _includes/          # Layout templates
├── _data/              # Global data (metadata.json)
├── content/            # Content files (markdown)
│   ├── blog/          # Blog posts
│   └── pages/         # Static pages
├── css/               # Stylesheets
├── public/            # Static assets
├── .eleventy.js       # Eleventy configuration
└── package.json       # Dependencies
```

## Writing Posts

Create a new markdown file in `content/blog/`:

```markdown
---
layout: post.njk
title: Your Post Title
date: 2024-01-18
tags: [posts, your-tag]
excerpt: "Optional excerpt"
---

Your content here...
```

## Customization

- Edit `_data/metadata.json` to update site metadata
- Modify `css/ungrid.css` to customize styles
- Update `_includes/base.njk` to change the main layout
- Edit `_includes/post.njk` to customize post layout

## License

MIT
