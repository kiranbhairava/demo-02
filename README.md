# Fire Project - Requirements & Documentation

## Overview

This project is a modern, responsive website for a fire safety solutions company. It is built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui, and is structured for scalability and easy customization. The site includes multiple industry-specific pages, product listings, blog, resources, and contact forms.

---

## Tech Stack

- **Frontend Framework:** React (with TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (with custom configuration)
- **UI Components:** shadcn/ui, Radix UI, Lucide Icons
- **Routing:** React Router DOM
- **Forms & Validation:** React Hook Form, Zod
- **State/Data:** Local state, static data (no backend integration by default)
- **Other:** Embla Carousel, Recharts, date-fns, and more

---

## Folder Structure

```
src/
  components/         # Reusable UI components (Header, Footer, etc.)
    ui/               # Shared UI primitives (Button, Card, Modal, etc.)
    about/            # About page-specific components
    buyonline/        # Buy Online page-specific components
    career/           # Career page-specific components
    clients/          # Clients page-specific components
  pages/              # Main screens (one file per route/page)
  hooks/              # Custom React hooks
  lib/                # Utility functions and libraries
  App.tsx             # Main app component
  main.tsx            # Entry point
  index.css           # Global styles
public/               # Static assets (images, favicon, etc.)
```

---

## Key Features & Screens

### 1. **Header & Navigation**
- Responsive navigation bar with dropdowns for Products, Services, Industries.
- Top bar with contact info and quick links.

### 2. **Home Page**
- Hero slider, company stats, product showcase, manufacturing overview, industries served, refilling services, suppression systems, client logos, testimonials.

### 3. **About Page**
- Company overview, mission/vision, certifications, milestones, core values, company profile.

### 4. **Industry-Specific Pages**
- Dedicated pages for Home & Car, Hospitals, Schools, Offices, Data Centers, Residential Societies, Hotels & Restaurants, Factories, Electrical Rooms.
- Each page details recommended fire safety products and systems for that environment.

### 5. **Products & Buy Online**
- Product categories for different environments.
- Lists of recommended products for each area.
- Discount banners and payment information.

### 6. **Resources**
- Downloadable PDFs (brochures, manuals).
- How-to videos for product usage and installation.

### 7. **Blog**
- List of blog posts with images, excerpts, and categories.
- Popular posts, categories, and archives.

### 8. **Contact**
- Company and branch addresses, Google map, contact form.

### 9. **Career**
- Job openings and application form.

### 10. **Refilling Service & Agent Registration**
- Information and forms for refilling services and agent registration.

### 11. **Clients**
- Sectors served, client testimonials.

### 12. **404 Not Found**
- Custom error page for undefined routes.

---

## Customization Guidelines

### 1. **Branding**
- Update logo and color scheme in `Header.tsx`, `Footer.tsx`, and Tailwind config.
- Replace images in the `public/` folder and in page components.

### 2. **Content**
- Edit static text and product lists in the relevant page files under `src/pages/`.
- Update contact info and addresses in `Contact.tsx` and `Header.tsx`.

### 3. **Navigation**
- Modify navigation links in `Header.tsx` to match your site structure.

### 4. **UI Components**
- Reuse or extend components in `src/components/ui/` for consistent design.
- Use shadcn/ui and Radix UI for accessible, customizable UI primitives.

### 5. **Styling**
- Tailwind CSS is used for all styling. Custom colors and themes can be set in `tailwind.config.ts`.
- Responsive design is built-in; test on multiple devices.

### 6. **Forms**
- All forms use React Hook Form and Zod for validation. Adjust fields and validation schemas as needed.

---

## Setup & Development

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```sh
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

### Build for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

---

## Configuration

- **Tailwind CSS:** See `tailwind.config.ts` for theme and color customization.
- **TypeScript:** Path aliases are set in `tsconfig.json` (e.g., `@/components`).
- **Environment Variables:** Add `.env` if you need to configure API endpoints or other secrets.

---

## Dependencies

See `package.json` for a full list. Key dependencies include:
- `react`, `react-dom`, `react-router-dom`
- `tailwindcss`, `@tailwindcss/typography`, `tailwindcss-animate`
- `shadcn/ui`, `@radix-ui/*`
- `react-hook-form`, `zod`
- `vite`, `typescript`, `eslint`

---

## Deployment

- The site can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).
- For custom domains, configure your hosting provider accordingly.

---

## Extending Functionality

- Add new pages by creating new files in `src/pages/` and updating the router.
- Create new UI components in `src/components/ui/` for reuse.
- Integrate with a backend by adding API calls in hooks or utility files.

---

## Support

For questions or help with customization, contact your development team or refer to the documentation for the libraries used.
