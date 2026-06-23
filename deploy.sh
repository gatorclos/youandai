#!/bin/bash
set -e
echo "🚀 Deploying youand.ai to Vercel..."
echo ""

# Check for vercel CLI
if ! command -v vercel &> /dev/null; then
  echo "Installing Vercel CLI..."
  npm install -g vercel
fi

# Deploy to gatorclos-projects team
vercel deploy --prod --yes --scope=gatorclos-projects

echo ""
echo "✅ Done! Add youand.ai as a custom domain in your Vercel dashboard."
