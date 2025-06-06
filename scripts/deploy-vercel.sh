#!/bin/bash
set -euo pipefail

# Deploy the main website to the 'kavacham' project on Vercel
npm run build
vercel --prod --name kavacham --confirm

# Deploy Storybook to the 'kavacham_storybook' project on Vercel
npm run build-storybook
vercel --config vercel.storybook.json --prod --name kavacham_storybook --confirm
