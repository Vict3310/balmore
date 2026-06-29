---
name: auto-skill-product-color-swatches
description: Implement color swatch selector for product cards in React, where each product has its own set of color options with corresponding images and small circular dot buttons
source: auto-skill
extracted_at: '2026-06-28T16:05:07.593Z'
---

## Problem
An e-commerce product section needs a color swatch — small clickable dots — beneath product text overlay that switches between image variants per product. Each product may have a different number of color options.

## Approach

### 1. Define color option objects per product
Instead of one shared color array, create separate config objects so each product has its own image set and label set:

```jsx
const somervilleColors = {
    images: [capbrownnet, capnetblue],
    names: ['brown', 'blue'],
}

const adeerdeenColors = {
    images: [capred, capgreen, cappurple, capwhite],
    names: ['red', 'green', 'purple', 'white'],
}
```

### 2. Make a generic ProductCard component
Accept `options` as a prop so the component is reusable across products:

```jsx
const ProductCard = ({ title, price, className, options }) => {
    const [colorIdx, setColorIdx] = useState(0)
    const imgSrc = options.images[colorIdx]
    // ... render with imgSrc and options.names
}
```

### 3. Render swatch buttons
Map over `options.names` to create small circular buttons. Use the color name as the `style={{ background }}` for the dot:

```jsx
<div className='color-swatches'>
    {options.names.map((name, i) => (
        <button
            key={name}
            className={`swatch ${colorIdx === i ? 'active' : ''}`}
            onClick={() => setColorIdx(i)}
        >
            <span className='swatch-dot' style={{ background: name }} />
        </button>
    ))}
</div>
```

### 4. Swatch CSS
- Swatch button: transparent background, small circle, `border: 2px solid transparent`
- Active/hover state: white border ring (`border-color: white`)
- Dot: smaller inner circle with `opacity: 0.85`, opacity 1 when active
- Use `display: flex; gap: 0.5rem;` for the swatch container

## Common pitfalls
- **Variable name mismatches** — define a constant and use it in both the declaration and the JSX reference. Check for typos in camelCase names (e.g. `aderdeenColors` vs `aderdeenColors`).
- **Key prop on mapped buttons** — use the color name string as key, not the index (prevents stale state issues when names aren't sequential).
- **State scope** — each ProductCard has its own `useState`, so colors are tracked independently per card. Don't hoist the state to a parent unless you want shared selection.
- **Color name as CSS background** — using `style={{ background: name }}` works for named colors (red, green, blue, purple, white) but falls back for hex/RGB values. For non-standard color names, use the actual hex value or a named CSS color.

## Usage
1. Import images into the component file
2. Group images + labels into per-product config objects
3. Create reusable `ProductCard` accepting `options` prop
4. Style swatches with the CSS above
5. Pass correct config to each `<ProductCard options={...} />`
