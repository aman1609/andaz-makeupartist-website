# 💄 Makeup Artist Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, Tailwind CSS, and TypeScript for a freelance makeup artist based in Bengaluru.

## ✨ Features

- **Modern Design**: Clean, minimal, premium aesthetic with smooth animations
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Fast Performance**: Built with Next.js 14 App Router for optimal performance
- **SEO Optimized**: Metadata and semantic HTML for better search engine visibility
- **Reusable Components**: Well-structured, maintainable component architecture
- **WhatsApp Integration**: Direct contact via WhatsApp for quick bookings
- **Portfolio Gallery**: Filterable gallery with category-based navigation
- **Contact Form**: Beautiful, functional contact form for inquiries

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Poppins (body)

## 📁 Folder Structure

```
makeup-artist-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind directives
│   │   ├── layout.tsx           # Root layout with font configuration
│   │   └── page.tsx             # Main homepage
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx       # Navigation with mobile menu
│       │   └── Footer.tsx       # Footer with links and contact info
│       └── sections/
│           ├── Hero.tsx         # Landing section with CTA
│           ├── About.tsx        # About section with features
│           ├── Services.tsx     # Services grid with pricing
│           ├── Portfolio.tsx    # Filterable gallery
│           ├── Testimonials.tsx # Client reviews
│           └── Contact.tsx      # Contact form + WhatsApp CTA
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.mjs              # Next.js configuration
└── package.json                 # Dependencies
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
- Primary colors: Used for branding and CTAs
- Neutral colors: Used for text and backgrounds

### Content
Update the following files with your actual content:
- `src/components/sections/Hero.tsx` - Name, tagline, stats
- `src/components/sections/About.tsx` - Bio and features
- `src/components/sections/Services.tsx` - Services and pricing
- `src/components/sections/Portfolio.tsx` - Portfolio images
- `src/components/sections/Testimonials.tsx` - Client testimonials
- `src/components/sections/Contact.tsx` - Contact details
- `src/components/layout/Footer.tsx` - Footer information

### Images
Replace placeholder images with actual photos:
- Use high-quality images (recommended: 1200x1600px for portfolio)
- Update image URLs in component files
- Consider using Next.js Image component for optimization

### WhatsApp Number
Update the phone number in `src/components/sections/Contact.tsx`:
```typescript
const whatsappLink = `https://wa.me/YOUR_PHONE_NUMBER?text=${whatsappMessage}`;
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect your Git repository
- **Railway**: Deploy using their Next.js template
- **AWS/GCP**: Use their Next.js hosting services

## 📱 Sections

1. **Hero**: Eye-catching landing with CTA buttons and stats
2. **About**: Personal story and key features
3. **Services**: Detailed service offerings with pricing
4. **Portfolio**: Filterable gallery showcasing work
5. **Testimonials**: Social proof from happy clients
6. **Contact**: Form + WhatsApp integration

## 🎯 Key Features Explained

### Smooth Scrolling
Navigation links use anchor tags for smooth scrolling to sections.

### Mobile Menu
Responsive navigation that transforms into a mobile-friendly menu on smaller screens.

### Portfolio Filter
Click category buttons to filter portfolio items dynamically.

### WhatsApp CTA
Direct link to WhatsApp with pre-filled message for quick bookings.

### Hover Effects
Subtle animations and hover states throughout for better UX.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or support, please contact the developer.

---

Built with ❤️ using Next.js and Tailwind CSS
