#!/usr/bin/env node

import { execSync } from 'child_process';
import { mkdirSync, existsSync } from 'fs';
import path from 'path';

console.log('🚀 Building CleanHomes for Vercel deployment...');

try {
  // Ensure dist directory exists
  const distDir = path.join(process.cwd(), 'dist');
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
  }

  // Build the frontend with Vite
  console.log('📦 Building frontend with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
  console.log('📁 Frontend output: dist/public');
  console.log('🔗 API functions: api/ directory (handled by Vercel)');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}