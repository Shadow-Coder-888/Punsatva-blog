# Punsatva Blog

A modern blog page built for **Punsatva**, a men's wellness platform that blends **Ayurvedic principles** with **modern medical science**. This project was developed as part of a WordPress-to-Next.js migration assignment, focusing on performance, responsiveness, SEO, and maintainable code architecture.

## Live Demo

**Website:** https://punsatva-blog.vercel.app

---

## Project Overview

The goal of this project was to recreate and optimize a blog page using the Next.js App Router while maintaining a clean user experience, fast loading times, and strong SEO foundations.

The application follows modern frontend development practices with reusable components, optimized image handling, and responsive layouts across all device sizes.

---

## Features

* Fully responsive design for mobile, tablet, and desktop devices
* Built using Next.js 15 App Router
* TypeScript for type safety and maintainability
* Tailwind CSS for modern utility-first styling
* Optimized image loading using Next.js Image component
* Sticky Table of Contents sidebar for improved navigation
* Interactive FAQ accordion section
* Reusable component architecture
* SEO-friendly metadata configuration
* Clean and scalable project structure

---

## Tech Stack

| Technology   | Purpose                     |
| ------------ | --------------------------- |
| Next.js 15   | React Framework             |
| TypeScript   | Type Safety                 |
| Tailwind CSS | Styling                     |
| App Router   | Routing & Layout Management |
| next/image   | Image Optimization          |
| Vercel       | Deployment & Hosting        |

---

## Project Structure

```bash
punsatva-blog/
│
├── app/
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── page.tsx              # Redirects to /blog
│   └── blog/
│       └── page.tsx          # Main blog page
│
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer section
│   ├── FAQ.tsx               # FAQ accordion
│   └── TableOfContents.tsx   # Sticky TOC sidebar
│
├── public/
│   └── images/
│
├── next.config.ts
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Shadow-Coder-888/punsatva-blog.git
```

### 2. Navigate to the Project Directory

```bash
cd punsatva-blog
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Performance & Optimization

* Next.js App Router architecture
* Optimized image delivery with `next/image`
* Reduced client-side JavaScript
* SEO metadata implementation
* Responsive layout design
* Reusable and maintainable component structure

---

## Deployment

The application is deployed on Vercel.

**Production URL:** https://punsatva-blog.vercel.app

---

## Author

**Shadow Coder**

GitHub: https://github.com/Shadow-Coder-888

---

## License

This project was created for an assignment and educational purposes.
