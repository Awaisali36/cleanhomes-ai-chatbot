# CleanHomes - Vercel Deployment Guide

This project has been optimized for deployment on Vercel with the following improvements:

## 🚀 Deployment Ready Features

✅ **Serverless API Functions** - API routes converted to Vercel serverless functions
✅ **Optimized Build Process** - Custom build script for production deployment
✅ **Bundle Size Optimization** - Reduced JavaScript bundle size
✅ **Proper Configuration** - Vercel.json configured for SPA routing
✅ **CORS Handling** - Proper cross-origin request handling
✅ **Environment Detection** - Automatic detection of deployment environment

## 📁 Project Structure for Vercel

```
├── api/                    # Vercel serverless functions
│   ├── bookings.js        # Booking API endpoint
│   └── contact.js         # Contact form API endpoint
├── client/                # React frontend
├── dist/public/           # Build output (generated)
├── vercel.json           # Vercel configuration
├── build.js              # Custom build script
└── .vercelignore         # Files to ignore during deployment
```

## 🔧 Deployment Instructions

### Method 1: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Method 2: Deploy with Git Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy

## 🌐 API Endpoints

After deployment, your API will be available at:
- `https://your-app.vercel.app/api/bookings` - POST/GET booking data
- `https://your-app.vercel.app/api/contact` - POST/GET contact messages

## 🔄 Local Development

For local development, continue using:
```bash
npm run dev
```

The app automatically detects whether it's running locally or on Vercel and adjusts API calls accordingly.

## ⚡ Performance Optimizations

- **Tree Shaking**: Unused code automatically removed
- **Code Splitting**: Components loaded on demand
- **Image Optimization**: Vercel automatically optimizes images
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip compression enabled

## 📊 Bundle Analysis

Current bundle size optimizations:
- Main JavaScript bundle: ~516KB (before optimization)
- CSS bundle: ~65KB
- Images: Automatically optimized by Vercel

## 🔒 Environment Variables

For production deployment, you may want to add these environment variables in Vercel dashboard:
- `VERCEL_ENV=production`
- Any database connection strings
- API keys for external services

## 🛠 Troubleshooting

If you encounter issues:

1. **Build fails**: Check that all dependencies are in `dependencies` not `devDependencies`
2. **API not working**: Verify API functions are in `/api` directory with `.js` extension
3. **Routing issues**: Ensure `vercel.json` has proper SPA routing configuration
4. **CORS errors**: API functions include proper CORS headers

## 📝 Notes

- The project uses in-memory storage for demo purposes
- For production, consider upgrading to a database solution
- All static assets are served with optimal caching headers
- The build process is optimized for Vercel's build environment