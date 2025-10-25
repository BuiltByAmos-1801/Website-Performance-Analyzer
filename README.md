# 🚀 Website Performance Analyzer

![Banner](https://via.placeholder.com/1200x300?text=Website+Performance+Analyzer+%7C+Analyze+%7C+Optimize+%7C+Ship)

A modern, fast, and friendly web application to analyze any website's Performance, SEO, Accessibility, and Best Practices using the Google PageSpeed Insights API. Built with Next.js, Tailwind CSS, and modern React animation and charting libraries to deliver a polished user experience.

---

Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Live Demo](#-live-demo)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

- Analyze any public website by URL (desktop & mobile analyses)
- Metrics: Performance, SEO, Accessibility, and Best Practices
- Animated charts (Recharts) and circular progress bars
- Responsive design: Desktop, tablet and mobile ready
- Dark & Light mode toggle
- Clean error handling and user feedback for invalid URLs or API issues
- Optional features (configurable): Save past reports, download PDF reports, website previews (thumbnails)

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|---|---:|---|
| Framework | Next.js (React) | App framework, server & client routes |
| Language | TypeScript | Static typing & developer DX |
| Styling | Tailwind CSS | Utility-first styling |
| Animation | Framer Motion | Smooth UI animations & transitions |
| Charts | Recharts | Charting for trend views |
| Circular UI | react-circular-progressbar | Circular score visualizations |
| API | Google PageSpeed Insights API | Source of performance metrics |
| Deployment | Vercel / Render | Host frontend & serverless APIs |

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts        # API route that proxies requests to PageSpeed Insights
│   ├── globals.css             # Tailwind + global styles
│   ├── layout.tsx              # Root layout (theme provider, header)
│   └── page.tsx                # Main page (search form, results container)
├── components/
│   ├── InputForm.tsx           # URL input and options
│   ├── ResultCard.tsx          # Metric card (score + breakdown)
│   ├── ScoreChart.tsx          # Circular progress chart component
│   ├── HistoryList.tsx         # (Optional) saved reports list
│   └── Header.tsx              # App header & theme toggle
├── lib/
│   └── pagespeed.ts            # PageSpeed API helper & types
├── utils/
│   └── format.ts               # Helpers (formatting, validation)
├── types/
│   └── index.ts                # TypeScript interfaces & types
├── public/
│   └── images/                 # Placeholder screenshots / favicons
├── prisma/ (optional)
│   └── schema.prisma           # If you implement saved reports (DB)
├── .env.local.example
├── next.config.js
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

Prerequisites
- Node.js 18+
- npm or yarn
- Google PageSpeed Insights API key

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/BuiltByAmos-1801/Website-Performance-Analyzer.git
cd Website-Performance-Analyzer
npm install
# or
# yarn
```

2. Create environment variables

Copy the example env and add your Google API key:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add:

```
NEXT_PUBLIC_GOOGLE_API_KEY=your_api_key_here
# OPTIONAL: if using server-side secret env
GOOGLE_API_KEY=your_api_key_here
```

Notes:
- Put the key in a server-side variable (non-public) for API calls routed via serverless functions (recommended).
- If you call the PageSpeed API client-side, use `NEXT_PUBLIC_GOOGLE_API_KEY`, but be aware the key is exposed in build output.

3. Run development server:

```bash
npm run dev
# or
# yarn dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm start
```

Helpful scripts (package.json)
- dev — start local dev server
- build — production build
- start — start production server
- lint — run linter
- format — run formatter

---

## 🧭 Usage

How to analyze a website:

1. Enter a full website URL in the input (e.g., https://example.com).
2. Choose Desktop or Mobile (if option provided).
3. Click Analyze.
4. The app sends the request to the PageSpeed Insights API (proxied through the app API route).
5. Results display as:
   - Overall scores (Performance, Accessibility, Best Practices, SEO)
   - Detailed audits and suggestions (if available)
   - Animated charts and circular progress bars for quick visual assessment
6. Optional:
   - Save the report to history
   - Download the report as PDF
   - Preview page screenshot (thumbnail)

Best practices:
- Use server-side API proxying to keep the API key private.
- Respect Google API usage quotas. Consider caching responses for repeated URLs.

Example developer endpoint (internal):
- GET /api/analyze?url=https://example.com&strategy=mobile

---

## 🖼️ Screenshots

> Replace these placeholders with real screenshots from your app (in /public/images or a repo wiki).

- Homepage / Analyze Form
![Screenshot - Home](https://via.placeholder.com/900x500?text=Homepage+-+Analyze+Form)

- Results and Charts
![Screenshot - Results](https://via.placeholder.com/900x500?text=Results+-+Charts+and+Scores)

- Mobile / Dark Mode
![Screenshot - Mobile Dark](https://via.placeholder.com/400x800?text=Mobile+View+-+Dark+Mode)

---

## 🔗 Live Demo

Live demo (placeholder): https://example.vercel.app

Replace the above with your deployed URL after you deploy to Vercel / Render.

---

## 🚧 Future Improvements

Planned/optional features:
- User accounts & saved historical reports
- PDF/PNG export of reports (print-friendly layout)
- Scheduled monitoring & alerts (weekly/monthly checks)
- Multi-page audit (crawl a list of pages)
- Lighthouse scoring history trends & exportable CSV
- Improved caching, rate limiting, and retry strategies for API reliability
- Accessibility report deep-dive & remediation suggestions
- Auto-screenshot thumbnails via headless browser (Puppeteer / Playwright)

---

## 🤝 Contributing

Thanks for your interest in contributing! Please follow these steps:

1. Fork the repository and create your branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Commit your changes with clear messages:
   ```bash
   git commit -m "feat: add X"
   git push origin feature/your-feature-name
   ```
3. Open a Pull Request describing your changes and why they're useful.
4. Please ensure:
   - Code is formatted (Prettier) and linted (ESLint)
   - TypeScript types are added where appropriate
   - Add or update tests where relevant
5. For major changes, open an issue first to discuss the design and scope.

Contributing guidelines:
- Follow semantic commit messages (optional)
- Keep PRs small and focused
- Add documentation updates (README) for new features

---

## 📝 License

This project is licensed under the MIT License — see the LICENSE file for details.

---

## 👤 Author

Amos Anand — BuiltByAmos

- GitHub: https://github.com/BuiltByAmos
- Repo: https://github.com/BuiltByAmos-1801/Website-Performance-Analyzer
- LinkedIn: www.linkedin.com/in/amos-anand-a1a57b390

---

If you found this project useful — give it a ⭐ on GitHub!  
Want a feature added or found a bug? Please open an issue or a pull request. Thank you 🙏
