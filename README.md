# Website Performance Analyzer

A modern web application built with Next.js that analyzes website performance using Google PageSpeed Insights API. Get detailed metrics about performance, accessibility, best practices, and SEO for any website.

## Features

- 🚀 Real-time website performance analysis
- 📊 Beautiful, animated charts and metrics display
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- ⚡ Fast and efficient API integration
- 🎨 Modern UI with Tailwind CSS and Framer Motion

## Tech Stack

- **Frontend Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Charts:** Recharts, react-circular-progressbar
- **Animations:** Framer Motion
- **API Integration:** Google PageSpeed Insights
- **TypeScript:** For type safety
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Google PageSpeed Insights API key

### Installation

1. Clone the repository and install dependencies:
   ```bash
   git clone <repository-url>
   cd website-performance-analyzer
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Google PageSpeed Insights API key:
     ```
     NEXT_PUBLIC_GOOGLE_API_KEY=your_api_key_here
     ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Getting a Google PageSpeed Insights API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the PageSpeed Insights API
4. Create credentials (API key)
5. Copy the API key to your `.env.local` file

## Project Structure

```
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts    # API route for PageSpeed analysis
│   ├── globals.css         # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/
│   ├── InputForm.tsx      # URL input form
│   ├── ResultCard.tsx     # Metric display card
│   └── ScoreChart.tsx     # Circular progress chart
├── types/
│   └── index.ts           # TypeScript interfaces
├── utils/
│   └── api.ts             # API utility functions
└── public/
    └── ...                # Static assets
```

## Features In Detail

### Performance Metrics
- Performance Score
- Accessibility Score
- Best Practices Score
- SEO Score

### UI/UX
- Animated transitions and loading states
- Responsive design for all screen sizes
- Error handling and user feedback
- Dark/Light mode support

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

This project is licensed under the MIT License.
