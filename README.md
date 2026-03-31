# Erjon Musa – Personal Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern, highly responsive personal portfolio for an AI/ML and Computer Engineer. Features a dark-mode glassmorphism aesthetic, smooth scroll-spy navigation, interactive project modals, and an integrated serverless contact form.

## 🚀 Features

- **Modern Architecture**: Built on Next.js 15 App Router and React 18.
- **Dynamic UI/UX**: Extensive use of [Framer Motion](https://www.framer.com/motion/) for scroll-triggered reveal animations, floating background elements, and seamlessly expanding components.
- **Glassmorphism Design**: Custom UI heavily utilizing translucent backdrops, subtle blurred gradients, and dark mode optimizations tailored via Tailwind CSS.
- **Interactive Project Modals**: Reusable component architecture combining detailed markdown-style copy, technology stack badges, and custom image galleries.
- **Serverless Contact Form**: Fully integrated contact mechanism using the [Resend SDK](https://resend.com), protected by honeypot spam detection and server-side rate-limiting.
- **Fully Responsive**: Flawless layout scaling from mobile screens to ultrawide monitors.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Libraries**: [Material UI (MUI)](https://mui.com/) (used primarily for complex grid layouts)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Delivery**: [Resend](https://resend.com/)

## 📂 Repository Structure

The core source code lives inside the `app/` directory:

```text
app/
├── api/             # Next.js API Routes (e.g., Contact form endpoint)
├── components/      # React functional components
│   ├── common/      # Navbars, floating elements, gradients
│   ├── education/   # Interactive timeline elements
│   ├── modals/      # Shared architecture for fullscreen case studies
│   ├── projects/    # Content-specific components for individual projects
│   └── sections/    # Top-level page assemblies (Hero, About, Skills, etc.)
├── config/          # Centralized configuration (e.g., Navigation links)
├── data/            # Static data stores
└── utils/           # Helper functions and shared logic
```

## ⚙️ Local Development

### Prerequisites
- Node.js version 18 or higher
- npm (or yarn/pnpm)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/erjon-musa/erjon-portfolio.git
   cd erjon-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your Resend API Key for the contact form:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
   *Note: If no API key is provided, the contact form will gracefully fall back to terminal logging instead of throwing errors.*

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ☁️ Deployment

This project is optimized for blazing-fast edge deployments on **Vercel**. 
Simply link the repository to your Vercel account, set the `RESEND_API_KEY` in the project's Environment Variables dashboard, and push to the `main` branch for automatic CI/CD rollouts. 

---
**Designed and built by [Erjon Musa](https://www.linkedin.com/in/erjonmusa/)**
