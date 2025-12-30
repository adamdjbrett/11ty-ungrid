---
layout: post.njk
title: Understanding ungrid.css
date: 2024-01-17
tags: [posts, css, grid]
excerpt: "A deep dive into how ungrid.css works and why it's so lightweight"
---

ungrid.css is one of the smallest responsive grid systems available. Let's explore how it works.

## The CSS

Here's the entire ungrid grid system:

```css
@media (min-width: 30em) {
    .row { width: 100%; display: table; table-layout: fixed; }
    .col { display: table-cell; }
}
```

That's it! Just two CSS rules inside a media query.

## How It Works

### The Table Display Model

ungrid uses `display: table` for the row and `display: table-cell` for columns. This approach:

- Distributes columns equally
- Handles responsive sizing automatically
- Works in all browsers
- Requires no JavaScript

### Responsive Behavior

On screens smaller than 30em (480px), columns stack vertically. On larger screens, they display side-by-side.

## HTML Structure

Using ungrid is simple:

```html
<div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
</div>
```

Each column takes equal width on larger screens and full width on smaller screens.

## Advantages

1. **Minimal** - Only 54 bytes when minified
2. **No dependencies** - Pure CSS
3. **Flexible** - Works with any HTML structure
4. **Accessible** - Uses semantic structure
5. **Fast** - Tiny file size means faster downloads

## Limitations

- No built-in column spanning
- No gutters (you manage padding manually)
- Limited to equal-width columns without modifications

But for many projects, these "limitations" are actually features—they encourage simplicity.

## Conclusion

ungrid proves that you don't need a heavy framework like Bootstrap or Foundation. For minimalist projects, a few lines of CSS can accomplish the same goals with a fraction of the overhead.
