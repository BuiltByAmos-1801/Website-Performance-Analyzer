<h1 align="center">🌐 Website Performance Analyzer 🚀</h1>

<p align="center">
  <b>Analyze your website’s Performance, SEO, Accessibility, and Best Practices — all in one modern, responsive dashboard.</b><br/>
  <i>Built with ❤️ by <a href="https://github.com/BuiltByAmos">Amos Anand</a> • Powered by Next.js + TailwindCSS</i>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white"/></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white"/></a>
  <a href="https://developers.google.com/speed/docs/insights/v5/get-started"><img src="https://img.shields.io/badge/PageSpeed%20API-4285F4?style=for-the-badge&logo=google&logoColor=white"/></a>
  <a href="#"><img src="https://img.shields.io/github/stars/BuiltByAmos/WebsitePerformanceAnalyzer?style=for-the-badge"/></a>
  <a href="#"><img src="https://img.shields.io/github/forks/BuiltByAmos/WebsitePerformanceAnalyzer?style=for-the-badge"/></a>
  <a href="#"><img src="https://img.shields.io/github/license/BuiltByAmos/WebsitePerformanceAnalyzer?style=for-the-badge"/></a>
</p>

---

## 🧭 Table of Contents

- [Overview](#-overview)
- [Why This Project Matters](#-why-this-project-matters)
- [Features](#-features)
- [Demo Preview](#-demo-preview)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Folder Structure](#-folder-structure)
- [Installation Guide](#-installation-guide)
- [API Integration](#-api-integration)
- [Data Flow Diagram](#-data-flow-diagram)
- [Core Components](#-core-components)
- [UI & UX Design](#-ui--ux-design)
- [Performance Visualization](#-performance-visualization)
- [Error Handling](#-error-handling)
- [Security Practices](#-security-practices)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)
- [Built By](#-built-by)

---

## 📘 Overview

**Website Performance Analyzer** is a developer tool that allows you to analyze how fast and efficient a website is.  
It leverages the **Google PageSpeed Insights API** to fetch detailed metrics on:

- ⚡ Performance  
- 🔎 SEO Optimization  
- ♿ Accessibility  
- 🧠 Best Practices  

Each metric is represented with clean visual graphs, dynamic score cards, and animations — all designed to give you **a beautiful and functional analysis experience.**

---

## 💡 Why This Project Matters

Website performance affects everything — **user engagement, SEO ranking, conversion rate, and revenue**.  
This tool helps:

- Developers identify weak points in their pages.  
- Agencies present client reports visually.  
- Students learn about Lighthouse and web vitals.  
- Creators measure how their portfolio websites perform.  

> 💬 *If your website loads faster, users stay longer — and this tool helps you make that happen.*

---

## ✨ Features

| Type | Feature | Description |
|------|----------|-------------|
| 🌐 **URL Analyzer** | Analyze any domain or subdomain. | Quick performance scan using Google API. |
| ⚙️ **Real-time Metrics** | Fetch live data from Google servers. | No caching — always current results. |
| 📊 **Beautiful Charts** | Visualize performance scores. | React Circular Progressbar & Recharts. |
| 🌓 **Dark/Light Mode** | Responsive UI. | Automatically adapts to system theme. |
| 💾 **History Storage** | Save previous analysis results *(optional)*. | Stored locally or via database. |
| 🧾 **PDF Report** | Export summary as a shareable PDF *(coming soon)*. | Ideal for client deliverables. |
| 🔗 **Share Reports** | Get a shareable link for analysis. | Public report URLs available. |

---

## 🖼️ Demo Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/BuiltByAmos/WebsitePerformanceAnalyzer/main/assets/demo-preview.gif" width="80%" alt="Website Performance Analyzer Demo Preview"/>
</p>

---

## 🛠️ Tech Stack

| Layer | Tools & Technologies |
|-------|----------------------|
| **Frontend** | Next.js, React, TailwindCSS, Framer Motion |
| **Backend** | Node.js, Next.js API routes |
| **API** | Google PageSpeed Insights API |
| **Visualization** | Recharts, Circular Progress Bars |
| **Storage (Optional)** | MongoDB / Firebase |
| **Deployment** | Vercel / Render |
| **Design Tools** | Figma + Tailwind UI Components |

---

## 🏗️ Architecture

```plaintext
User Input → Next.js API Route → Google PageSpeed API → JSON Response → Data Visualization UI
