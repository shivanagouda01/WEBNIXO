# Webnixo Website

Professional web development business website.

## Deployment on Vercel

This project is optimized for Vercel deployment.

### Steps:
1. **Push to GitHub**: Upload your code to a GitHub repository.
2. **Import to Vercel**: Go to [Vercel](https://vercel.com), click "Add New" > "Project", and select your repository.
3. **Configure**:
   - **Framework Preset**: Vite (automatically detected).
   - **Build Command**: `npm run build`.
   - **Output Directory**: `dist`.
4. **Environment Variables**:
   - If you use the Gemini AI features, add `GEMINI_API_KEY` in the Vercel project settings under "Environment Variables".
5. **Deploy**: Click "Deploy" and your site will be live!

### Local Development
```bash
npm install
npm run dev
```
