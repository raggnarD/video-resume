# How to Add Your Portfolio to Squarespace

You have two options to add your Netflix-style portfolio to your Squarespace page at `https://www.jameskocher.com/video-resume`:

## Option 1: Code Block (Recommended)

This is the easiest method and works well for most Squarespace sites.

### Steps:

1. **Edit your Squarespace page** (`/video-resume`)
2. **Add a Code Block:**
   - Click the "+" button to add a new block
   - Select "Code" from the block options
3. **Copy and paste the code:**
   - Open the file `squarespace-embed.html` in a text editor
   - Copy everything from `<style>` to `</script>` (the CSS and JavaScript sections)
   - Paste it into the Code Block
4. **Save and publish** your page

**Note:** You may need to remove the `<style>` and `</style>` tags and just paste the CSS directly, and do the same for the JavaScript (remove `<script>` tags). Squarespace Code Blocks sometimes handle this differently.

## Option 2: Iframe Embed (Alternative)

If the Code Block doesn't work well, you can host the portfolio on GitHub Pages and embed it via iframe.

### Steps:

1. **Enable GitHub Pages** (if not already done):
   - Go to your GitHub repository: https://github.com/raggnarD/netflix-resume
   - Settings → Pages
   - Select `main` branch as source
   - Your site will be available at: `https://raggnarD.github.io/netflix-resume/`

2. **Add iframe to Squarespace:**
   - Edit your `/video-resume` page
   - Add a Code Block
   - Paste this code:
   ```html
   <iframe 
       src="https://raggnarD.github.io/netflix-resume/" 
       width="100%" 
       height="2000px" 
       frameborder="0"
       style="border: none; min-height: 2000px;"
       allowfullscreen>
   </iframe>
   ```
   - Adjust the `height` value as needed (you can use `100vh` for full viewport height)

## Option 3: Full HTML Embed (Most Reliable)

For the best compatibility, use this approach:

1. **Edit your Squarespace page** (`/video-resume`)
2. **Add a Code Block**
3. **Copy the entire contents** of `squarespace-embed.html` and paste it into the Code Block
4. **Save and publish**

## Troubleshooting

- **Styles not loading?** Make sure all CSS is included in the `<style>` tag
- **JavaScript not working?** Ensure all JavaScript is within `<script>` tags
- **Layout issues?** You may need to adjust z-index values if Squarespace's navigation overlaps
- **Mobile responsiveness?** The portfolio is already responsive, but you may need to adjust the Code Block width settings in Squarespace

## Customization

After embedding, you can still customize the portfolio by editing the `rolesData` object in the JavaScript section. Look for the section that starts with:

```javascript
const rolesData = {
    role1: {
        title: "Leading the Charge at Ideal Innovations",
        ...
    }
}
```

Update the titles, descriptions, and video URLs as needed.

