# 🏛️ Arsir Architect — Company Profile Website

A responsive, dynamic company profile web application built for **Arsir Architect**, showcasing architectural portfolios, services, team details, and client contact capabilities.

---

## 🌟 Overview & Key Highlights

This repository contains the source code for the **Arsir Architect** official web platform. Designed to provide potential clients and partners with a seamless browsing experience, it highlights the firm's architectural portfolio, design philosophy, and services.

### Key Features
- **Portfolio Showcase**: Interactive galleries featuring completed and ongoing architecture projects.
- **Service Breakdown**: Clear presentation of design, planning, and architectural services.
- **About Us & Philosophy**: Insights into the team, firm values, and approach.
- **Contact & Inquiries**: Dedicated contact pathways for client engagements.
- **Performance & SEO Optimized**: Built using Next.js page optimization and asset management.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js](https://nextjs.org/) (React 18)
- **Styling & UI**: Vanilla CSS / Bootstrap 5 / Custom Modular Styles
- **Components & Interactivity**: jQuery & React Owl Carousel for dynamic media sliders
- **Analytics**: Vercel Analytics integration
- **Linting & Code Quality**: ESLint (`eslint-config-next`)

---

## 📁 Project Structure

```text
arsir-company-profile/
├── components/          # Reusable UI components (Header, Footer, Sliders, Cards)
├── pages/               # Next.js Page routes
│   ├── index.js         # Homepage
│   ├── about-us/        # Firm overview & team
│   ├── projects/        # Project gallery & filtering
│   ├── project/         # Individual project detail pages
│   └── contact-us/      # Inquiries & contact form page
├── public/              # Static assets (Images, Fonts, Icons)
├── styles/              # Global & modular CSS styles
└── next.config.js       # Next.js configuration
```

---

## 🚀 Getting Started locally

### Prerequisites
Make sure you have **Node.js** (v16.x or higher) and **npm** / **yarn** / **pnpm** installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/edwinsenjaya/arsir-company-profile.git
   cd arsir-company-profile
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application in action.

---

## 📋 Available Scripts

- `npm run dev`: Runs the app in development mode with hot-reloading.
- `npm run build`: Builds the production-ready optimized bundle.
- `npm run start`: Starts the production server using the built bundle.
- `npm run lint`: Runs ESLint to check for code formatting and code quality issues.

---

## 👨‍💻 Developer Notes for Recruiters

- **Component Architecture**: Built with modularity and reusability in mind.
- **SEO & Performance**: Leverages Next.js page structure, custom document headers, and optimized font loading for fast load times and clean SEO indexing.
- **Responsive Layouts**: Designed to be fully fluid and accessible across desktop, tablet, and mobile screens.
