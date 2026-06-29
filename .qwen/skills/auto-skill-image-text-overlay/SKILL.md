---
name: image-text-overlay
description: Overlay text content on top of images in React components using absolute positioning and gradient backgrounds
source: auto-skill
extracted_at: '2026-06-28T15:48:58.695Z'
---

## Problem
Text content needs to be layered on top of images in React components — not beside them — with readable styling against varying backgrounds.

## Approach

### 1. Parent container: `position: relative` + `overflow: hidden`
Give the container that holds both image and text `position: relative` and `overflow: hidden`. This establishes the positioning context for the absolute overlay.

```css
.container {
    position: relative;
    overflow: hidden;
}
```

### 2. Image fills the container
Make the image fill its parent so the overlay matches exactly:

```css
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
```

### 3. Overlay div: `position: absolute` with full coverage
The text overlay uses `position: absolute` with `top/bottom/left/right: 0` to cover the entire image area:

```css
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    color: white;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}
```

The gradient (darker at bottom, fading upward) keeps text readable while preserving the image beneath.

### 4. Text readability tips
- Dark-to-light gradient from the bottom edge
- White text with reduced opacity on secondary content (h3, p)
- Padding prevents text from touching image edges

### 5. Flex alignment fix: `align-self: flex-start`
If a flex child (like a side panel) stretches to match its sibling's height, add `align-self: flex-start` to constrain it to its content height.

### 6. Responsive square images with aspect-ratio trick
When you need a fixed aspect ratio (e.g., 1:1 square) without JS:

```css
.img-wrap {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
}
.img-wrap img {
    position: absolute;
    width: 100%;
    height: 100%;
}
```

## Common pitfalls
- **Typo**: `position: reletive` (misspelled) — always double-check. Use `absolute` for the overlay child, `relative` for the parent.
- **Don't put overlay and image as siblings of a flex parent** — that puts them side-by-side instead of stacked.
- **Don't forget `display: block`** on the image to avoid unwanted whitespace at the bottom.
- **Gradient direction matters** — `to top` keeps the bottom where text sits dark, fading out above it.
