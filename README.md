# Smart Home Landing Page

A modern, responsive landing page for a smart home automation company, built with React and Next.js. Inspired by premium smart home websites with smooth scrolling animations and elegant design.

## 🚀 Features

- ✨ Smooth scroll animations using Framer Motion
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Next.js 14
- 🎭 Interactive components and hover effects
- 🌙 Elegant color scheme with gold accents
- 📝 Contact form with validation
- 🔄 Animated sections on scroll

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Google Fonts (Montserrat, Playfair Display)

## 📦 Installation

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Setup

1. Clone or download the project:
```bash
cd keus-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
keus-landing-page/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Header navigation with mobile menu
│   ├── Hero.tsx            # Hero section with parallax
│   ├── AmbienceControl.tsx # Features showcase section
│   ├── IntelligentSpaces.tsx # Smart automation section
│   ├── IntuitiveInterfaces.tsx # Control methods section
│   ├── ContactSection.tsx   # Contact form and info
│   └── Footer.tsx          # Footer with links and newsletter
├── public/
│   └── images/             # Image assets (add your images here)
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Key Sections

1. **Hero Section**: Full-screen banner with parallax scrolling effect
2. **Ambience Control**: Showcases 4 main features (Lighting, Climate, Curtain, Media)
3. **Intelligent Spaces**: Highlights automation capabilities
4. **Intuitive Interfaces**: Interactive showcase of control methods
5. **Contact Section**: Form with property details and contact information
6. **Footer**: Links, social media, and newsletter signup

## 🎯 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1a1a1a',  // Dark background
    light: '#2d2d2d',
  },
  accent: {
    DEFAULT: '#d4af37',  // Gold accent
    light: '#e5c158',
  },
}
```

### Fonts

Change fonts in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Content

Update text content in each component file under the `components/` directory.

### Images

Add your images to the `public/images/` folder and reference them in components:

```typescript
<Image src="/images/your-image.jpg" alt="Description" />
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Build for Production

```bash
npm run build
npm start
```

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS/DigitalOcean**: Build and serve the `.next` folder
- **Docker**: Create Dockerfile for containerized deployment

## 🎬 Animation Details

- **Scroll Animations**: Sections fade and slide in on scroll
- **Parallax Effects**: Hero section has depth with parallax
- **Hover Effects**: Interactive elements scale and change colors
- **Micro-interactions**: Buttons, cards, and icons respond to user actions
- **Page Load**: Staggered animations for a polished entrance

## 📝 Environment Variables

Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🔧 Performance Optimization

- Images are optimized with Next.js Image component
- CSS is minimized with Tailwind's purge
- Animations use GPU-accelerated transforms
- Code splitting with Next.js automatic optimization

## 🐛 Troubleshooting

### Animations not working
- Ensure Framer Motion is properly installed
- Check browser console for errors

### Styles not applying
- Run `npm run dev` to restart the dev server
- Clear browser cache

### TypeScript errors
- Run `npm run lint` to identify issues
- Check `tsconfig.json` configuration

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. Suggestions and improvements are welcome!

## 📞 Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
