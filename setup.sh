#!/bin/bash
# E-Commerce App Setup Guide

echo "🛍️ E-Commerce App - Setup Instructions"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to app directory
cd app || exit

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 To start the application:"
echo "   1. Navigate to the app directory: cd app"
echo "   2. Run: npm start"
echo "   3. Open http://localhost:3000 in your browser"
echo ""
echo "🐳 To run with Docker:"
echo "   1. Build: docker build -t ecommerce-app ."
echo "   2. Run: docker run -p 3000:3000 ecommerce-app"
echo "   3. Open http://localhost:3000 in your browser"
