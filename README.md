# Netflix-Style Resume Portfolio

A modern, Netflix-inspired portfolio website showcasing professional experience as interactive "movies" with trailers, titles, and descriptions.

## Features

- **Netflix-style UI**: Dark theme with smooth animations and transitions
- **Hero Section**: Featured role with prominent display
- **Movie Cards**: Scrollable rows of professional roles
- **Modal Details**: Click any role to view detailed information and trailer
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Easy Customization**: Simple data structure for updating roles

## File Structure

```
Resume/
├── index.html      # Main HTML structure
├── styles.css      # Netflix-style styling
├── script.js       # Interactive functionality and role data
└── README.md       # This file
```

## Customization

### Updating Role Information

Edit the `rolesData` object in `script.js` to customize each role:

```javascript
role1: {
    title: "Your Movie Title",
    description: "Your detailed description",
    position: "Your Position",
    duration: "Time Period",
    videoUrl: "https://youtube.com/embed/VIDEO_ID" // YouTube embed URL or direct video URL
}
```

### Adding Video Trailers

1. **YouTube Videos**: Use the embed URL format:
   ```
   https://www.youtube.com/embed/VIDEO_ID
   ```

2. **Vimeo Videos**: Use the embed URL format:
   ```
   https://player.vimeo.com/video/VIDEO_ID
   ```

3. **Direct Video Files**: Update the video placeholder HTML in `script.js` to use a `<video>` tag:
   ```html
   <video controls width="100%">
       <source src="path/to/video.mp4" type="video/mp4">
   </video>
   ```

### Styling Customization

Edit `styles.css` to customize:
- Colors (Netflix red, dark themes, etc.)
- Fonts and typography
- Spacing and layout
- Animations and transitions

## Usage

1. Open `index.html` in a web browser
2. Click on any role card to view details and trailer
3. Customize the content in `script.js` with your specific information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### GitHub Pages with Custom Domain

1. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select the `main` branch
   - Click "Save"

2. **Configure Custom Domain (jameskocher.com):**
   - The `CNAME` file is already included in the repository
   - In your Squarespace domain settings, add these DNS records:
     - **Type:** CNAME
     - **Host:** www
     - **Points to:** raggnarD.github.io
     - **Type:** A
     - **Host:** @ (or blank)
     - **Points to:** GitHub Pages IP addresses:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
   - In GitHub repository settings → Pages, enter `jameskocher.com` in the custom domain field
   - Wait for DNS propagation (can take up to 24-48 hours)

3. **Alternative: Squarespace Integration**
   - Create a new page in Squarespace
   - Use a Code Block to embed the HTML
   - Or use Squarespace's Developer Mode to upload the files

## Future Enhancements

- Add more roles easily by extending the `rolesData` object
- Implement video autoplay on hover
- Add filtering and search functionality
- Include additional metadata (skills, achievements, etc.)

