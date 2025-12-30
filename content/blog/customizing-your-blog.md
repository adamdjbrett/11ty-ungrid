---
title: Customizing Your Blog
description: Tips and tricks for customizing your Sakura blog.
date: 2024-01-05
---

Once you have your blog set up, you'll probably want to customize it to match your style and personality.

## Customize the CSS

Edit `css/sakura.css` to change colors, fonts, and layout. The main color is defined as `#d946ef` (magenta).

## Update Metadata

Edit `_data/metadata.json` to:
- Change your site title
- Update your name
- Add your site URL
- Write your site description

## Add Your Posts

Write new posts by creating `.md` files in the `blog/` folder. Each post needs:
- `title` - The post title
- `description` - A short description for listings
- `date` - The publish date (YYYY-MM-DD format)
- `layout` - Set to `post.njk`

## Deploy Your Blog

You can deploy your Sakura blog to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Happy blogging! 🌸
