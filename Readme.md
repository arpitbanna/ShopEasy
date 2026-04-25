# 🛍️ ShopEasy - Premium E-Commerce Experience

ShopEasy is a modern, responsive e-commerce platform built with React, designed to provide a premium shopping experience with real-time data and a glassmorphic aesthetic.

![ShopEasy Home Page](file:///Users/aryan/.gemini/antigravity/brain/426e7754-4e9e-4206-9ac3-3159b42f1443/shopeasy_home_page_1777081328717.png)

## ✨ Features

- **🚀 Live API Integration**: Fetches real-time product data from the RapidAPI Ecommerce Hub across 10+ categories (Mobiles, Laptops, Fashion, etc.).
- **🛒 Dynamic Cart System**: 
  - Global state management using React Context API.
  - Inline quantity controls (`[- 1 +]`) directly on product cards.
  - Persistent cart state with real-time total calculation.
- **🔍 Quick View Modal**:
  - Detailed product views with high-quality images and descriptions.
  - Fully responsive and perfectly centered layout using Framer Motion.
- **💎 Premium UI/UX**:
  - **Glassmorphism Design**: Sleek, frosted-glass effects on cards and navigation.
  - **Modern Typography**: Using 'Plus Jakarta Sans' for a premium feel.
  - **Micro-animations**: Smooth hover effects and transitions powered by Framer Motion.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile screens.

## 🛠️ Tech Stack

- **Core**: React 19, Vite
- **Styling**: Vanilla CSS (CSS Modules)
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Data Source**: RapidAPI (Ecommerce API)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/arpitbanna/ShopEasy.git
   cd ShopEasy
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔌 API Configuration

The application uses the **Ecommerce API** via RapidAPI. 

- **Host**: `ecommerce-api3.p.rapidapi.com`
- **Endpoints Used**: `/mobiles`, `/laptops`, `/womenswear`, `/malefootwear`, etc.

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, ProductCard, QuickView)
├── context/        # Global state (CartContext)
├── pages/          # Main views (Home, Cart)
├── data/           # Mock data and configuration
└── App.jsx         # Main entry point and routing
```

## 📄 License
This project is for demonstration purposes. Developed as a premium e-commerce template.

---
Built with ❤️ by Antigravity (Advanced AI Coding Assistant)
