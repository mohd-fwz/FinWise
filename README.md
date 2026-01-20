# FinWise

A modern landing page and portal for AI-powered financial management tools. Built with React, Vite, and Tailwind CSS.

## Features

- **AI Budget Tracker** - Smart budget management with AI insights
- **Document Tracker** - Intelligent document organization
- **Tax Buddy** - AI-powered tax assistance
- **FinLit ChatBot** - Financial literacy chatbot
- **Financial Guide AI** - Personalized financial guidance

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/finwise.git

# Navigate to the project directory
cd finwise

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

This project is configured for Vercel deployment.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Click Deploy

The `vercel.json` file includes SPA routing configuration for client-side routing support.

## Project Structure

```
finwise/
├── src/
│   ├── components/     # React components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Root component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## License

MIT
