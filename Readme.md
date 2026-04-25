# 🛍️ ShopEasy - Premium E-Commerce Platform

ShopEasy is a modern, responsive e-commerce application built with React and Vite. It features real-time data fetching from the RapidAPI Ecommerce Hub, a dynamic cart management system, and a sleek, glassmorphic UI designed for a premium shopping experience.

## 🚀 Features

- **Live API Integration**: Real-time product discovery across 10 categories including Mobiles, Laptops, and Fashion.
- **Dynamic Cart Management**: Add, update, and remove items with real-time subtotal calculations.
- **Quick View Modal**: Detailed product insights without leaving the main discovery page.
- **Premium UI/UX**: Custom-built design system with glassmorphic elements, smooth Framer Motion animations, and responsive layouts.
- **Search Functionality**: Filter products instantly across all categories.
- **Global State**: Robust state management using React Context API.

## 🛠 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Vanilla CSS (CSS Modules)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: RapidAPI (Ecommerce Hub)
- **Deployment**: Vercel

## 📂 Folder Structure

```text
src/
├── components/     # Reusable UI components (Navbar, ProductCard, Footer)
├── pages/          # Main page views (Home, Cart)
├── hooks/          # Custom React hooks (useProducts)
├── services/       # API service layer (apiService.js)
├── context/        # Global state management (CartContext)
├── constants/      # App-wide constants (categories)
├── utils/          # Utility functions (formatters)
├── assets/         # Static assets and images
└── App.jsx         # Root component and routing
```

## ⚙️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arpitbanna/ShopEasy.git
   cd ShopEasy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your RapidAPI credentials:
   ```env
   VITE_RAPIDAPI_KEY=your_api_key_here
   VITE_RAPIDAPI_HOST=ecommerce-api3.p.rapidapi.com
   VITE_API_BASE_URL=https://ecommerce-api3.p.rapidapi.com
   ```

4. **Run in development mode**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment

This project is optimized for deployment on **Vercel**. 
- Simply connect your GitHub repository to Vercel.
- Add the Environment Variables in the Vercel project settings.
- The `vercel.json` file handles all client-side routing automatically.

## 🔐 Environment Variables

The app requires the following environment variables:
- `VITE_RAPIDAPI_KEY`: Your unique RapidAPI key.
- `VITE_RAPIDAPI_HOST`: The host for the Ecommerce API.
- `VITE_API_BASE_URL`: The base URL for API requests.

## 👨‍💻 Authors

- **Arpit Singh Pawar**
- **Aryan**

---