Drop real photos here (e.g. `sunset.jpg`, `karaoke.png`), then in `for-my-wife/index.html`
replace a `<div class="photo ...">...</div>` block with:

```html
<div class="photo"><img src="images/sunset.jpg" alt="..."><span class="cap">Caption here</span></div>
```

and add this CSS once if not present:

```css
.photo img { width:100%; height:100%; object-fit:cover; border-radius:16px; }
```
