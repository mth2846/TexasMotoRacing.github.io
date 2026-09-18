/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig = {
  output: 'export',               // static HTML — deploys to GitHub Pages, Vercel, Netlify, anything
  images: { unoptimized: true },  // required for static export
  basePath: repo,                 // set NEXT_PUBLIC_BASE_PATH=/repo-name for a GitHub project site
  assetPrefix: repo || undefined,
  trailingSlash: true,
};
export default nextConfig;
