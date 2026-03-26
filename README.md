# TipperConnect Marketing Website

A Next.js marketing website for TipperConnect - the platform connecting construction sites with trusted hauliers.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the website directory:
   ```bash
   cd tipperconnect-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tipperconnect-website/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with Navbar/Footer
│   ├── page.tsx          # Homepage
│   ├── contact/
│   │   └── page.tsx      # Contact form page
│   ├── privacy/
│   │   └── page.tsx      # Privacy policy page
│   └── terms/
│       └── page.tsx      # Terms of service page
├── components/
│   ├── Navbar.tsx        # Navigation bar (responsive)
│   └── Footer.tsx        # Footer with links
├── public/               # Static assets (add images here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Main landing page with all marketing sections |
| Contact | `/contact` | Contact form for enquiries |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Deployment

### Static Export (Recommended for simple hosting)

1. Build the static export:
   ```bash
   npm run build
   ```

2. The static files will be in the `out/` directory.

3. Upload the `out/` folder to any static hosting provider (Netlify, Vercel, AWS S3, etc.)

### Vercel (Easiest)

1. Push the code to a GitHub repository
2. Import the project in Vercel
3. Vercel will auto-detect Next.js and deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`

## Customisation

### Colours

The colour scheme uses Tailwind's slate and orange palettes. To change:

- Edit `tailwind.config.ts` to add custom colours
- Primary accent: `orange-500` / `orange-600`
- Background: `slate-50` / `slate-900`
- Text: `slate-900` / `slate-600`

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

### Adding Images

1. Add images to the `public/` directory
2. Reference them with `/image-name.png` in your code

### Adding New Pages

1. Create a new folder in `app/` with the route name
2. Add a `page.tsx` file inside
3. The page will automatically be available at that route

## Contact Form

The contact form currently logs submissions to the console. To make it functional:

1. Add a form handling service (Formspree, Netlify Forms, custom API)
2. Update the `handleSubmit` function in `app/contact/page.tsx`

Example with Formspree:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  setIsSubmitted(true)
}
```
