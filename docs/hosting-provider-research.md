# Hosting Provider Research

## Executive Summary

This document provides a comprehensive analysis of cloud hosting providers for the personal website portfolio project. The evaluation focuses on:
- **GitHub Actions Integration** for CD pipelines
- **Cost-effectiveness** (free/low-cost options)
- **Portfolio Value** (industry-relevant platforms)
- **Next.js Compatibility** (optimized for the tech stack)

## Recommended Options (Ranked)

### 🥇 1. Vercel (Current Choice - RECOMMENDED)
**Status**: ✅ Already in use

**Why It's the Best Choice:**
- **Created by Next.js Team**: Built specifically for Next.js applications with zero-config deployments
- **Automatic Optimizations**: Edge network, image optimization, automatic static optimization
- **GitHub Integration**: Seamless - automatic deployments on git push, preview URLs for PRs
- **Free Tier**: Very generous for personal projects
- **Industry Standard**: Vercel is THE platform for modern web development, excellent portfolio value

**Pricing:**
- **Free Tier**: 
  - Unlimited personal projects
  - 100 GB bandwidth/month
  - Automatic HTTPS
  - Preview deployments
- **Pro**: $20/month (not needed for personal site)

**GitHub Actions Integration:**
- Native integration (no GitHub Actions needed)
- Can also use `vercel-action` for advanced workflows
- Preview deployments for every PR automatically

**Portfolio Value:** ⭐⭐⭐⭐⭐
- Industry leader for React/Next.js
- Shows knowledge of modern deployment practices
- Used by major companies (Airbnb, TikTok, Uber)

**Learning Resources:**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel + Next.js Guide](https://vercel.com/docs/frameworks/nextjs)

---

### 🥈 2. Netlify
**Best Alternative to Vercel**

**Strengths:**
- Excellent GitHub integration with automatic deployments
- Great for static sites and JAMstack
- Generous free tier
- Edge functions and serverless capabilities

**Pricing:**
- **Free Tier**:
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Automatic HTTPS
- **Pro**: $19/month

**GitHub Actions Integration:**
- Native Git integration (no Actions needed)
- Can use `netlify-cli` or `netlify-actions` for custom workflows
- Automatic deploy previews

**Next.js Support:**
- Good, but not as optimized as Vercel
- Requires some configuration for advanced features

**Portfolio Value:** ⭐⭐⭐⭐
- Very popular in the industry
- Strong JAMstack ecosystem
- Used by Nike, Citrix, Kubernetes

**When to Choose:**
- If you want an alternative to Vercel
- If you're deploying non-Next.js projects
- If you need Netlify-specific features (CMS, forms)

---

### 🥉 3. Cloudflare Pages
**Best for Global Performance**

**Strengths:**
- Unlimited bandwidth (even on free tier!)
- Excellent global CDN (Cloudflare's network)
- Great GitHub integration
- Free tier is very generous

**Pricing:**
- **Free Tier**:
  - Unlimited bandwidth
  - Unlimited requests
  - 500 builds/month
  - 1 concurrent build
- **Pro**: $20/month (unlimited builds)

**GitHub Actions Integration:**
- Native Git integration
- Can use `cloudflare/wrangler-action` for custom deployments
- Automatic preview deployments

**Next.js Support:**
- Good support via automatic platform detection
- Edge runtime support
- Some limitations on advanced Next.js features

**Portfolio Value:** ⭐⭐⭐⭐
- Cloudflare is a major infrastructure provider
- Shows understanding of CDN and edge computing
- Used globally by millions of websites

**When to Choose:**
- If you need unlimited bandwidth
- If global edge performance is critical
- If you're interested in Cloudflare Workers/edge computing

---

### 4. AWS Amplify
**For AWS Ecosystem Experience**

**Strengths:**
- Full AWS integration
- Good for learning AWS
- CI/CD built-in
- Serverless backend integration

**Pricing:**
- **Free Tier** (12 months):
  - 1000 build minutes/month
  - 15 GB storage/month
  - 15 GB served/month
- **After Free Tier**: Pay per use
  - $0.01 per build minute
  - $0.15 per GB served

**GitHub Actions Integration:**
- Can use `aws-amplify/amplify-cli-action`
- Native GitHub integration available
- AWS CLI integration

**Next.js Support:**
- Full Next.js SSR and SSG support
- Automatic platform detection

**Portfolio Value:** ⭐⭐⭐⭐
- AWS is industry standard
- Shows cloud platform knowledge
- Good for backend integration with AWS services

**When to Choose:**
- If you want AWS on your resume
- If you're building full-stack with AWS backend
- If you want to learn AWS ecosystem

**Considerations:**
- More complex than Vercel/Netlify
- Free tier is limited to 12 months
- Can become expensive at scale

---

### 5. Railway
**For Full-Stack Applications**

**Strengths:**
- Extremely easy deployment
- Great for databases + web app together
- Usage-based pricing
- Docker support

**Pricing:**
- **Free Tier**:
  - $5 free credit/month
  - Pay for what you use
- **After Credits**: ~$5-10/month for small projects

**GitHub Actions Integration:**
- Native GitHub integration
- Can use Railway CLI in GitHub Actions
- Automatic deployments

**Next.js Support:**
- Excellent Next.js support
- Easy environment variables
- Great for full-stack Next.js

**Portfolio Value:** ⭐⭐⭐
- Growing platform in developer community
- Shows modern deployment practices
- Good for full-stack projects

**When to Choose:**
- If you need a database with your app
- If you want Docker-based deployments
- If you prefer usage-based pricing

---

### 6. GitHub Pages
**For Static Sites Only**

**Strengths:**
- Completely free
- GitHub native
- Perfect GitHub Actions integration
- Great for documentation

**Pricing:**
- **Free**: Unlimited for public repos

**GitHub Actions Integration:**
- Perfect integration
- Can use `peaceiris/actions-gh-pages` or `actions/deploy-pages`
- Full control over deployment workflow

**Next.js Support:**
- ⚠️ Static export only (`next export`)
- No server-side rendering
- No API routes
- Requires configuration

**Portfolio Value:** ⭐⭐
- Good for open source projects
- Limited for modern web apps
- Not suitable for production web apps

**When to Choose:**
- Only for static-only sites
- Documentation sites
- Open source project pages

**NOT RECOMMENDED for this project** because:
- Next.js SSR features won't work
- No automatic image optimization
- Limited compared to modern platforms

---

### 7. Render
**Good Heroku Alternative**

**Strengths:**
- Easy to use
- Good free tier
- PostgreSQL database available
- Docker support

**Pricing:**
- **Free Tier**:
  - Static sites: Free
  - Web services: Free (with limitations, spin down after inactivity)
- **Paid**: From $7/month

**GitHub Actions Integration:**
- Native Git integration
- Can use Render API in GitHub Actions
- Automatic deployments

**Next.js Support:**
- Good support
- May require configuration
- Free tier has cold starts

**Portfolio Value:** ⭐⭐⭐
- Growing platform
- Popular Heroku alternative
- Used by many startups

**When to Choose:**
- If you need a free full-stack platform
- If you're okay with cold starts
- If you want database + web service together

---

## Comparison Table

| Provider | Free Tier | GitHub Actions | Next.js Support | Portfolio Value | Best For |
|----------|-----------|----------------|-----------------|-----------------|----------|
| **Vercel** | ⭐⭐⭐⭐⭐ | Native + Actions | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Next.js apps |
| **Netlify** | ⭐⭐⭐⭐⭐ | Native + Actions | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | JAMstack apps |
| **Cloudflare** | ⭐⭐⭐⭐⭐ | Native + Actions | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Global performance |
| **AWS Amplify** | ⭐⭐⭐ | AWS Actions | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | AWS ecosystem |
| **Railway** | ⭐⭐⭐ | Native + CLI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Full-stack apps |
| **GitHub Pages** | ⭐⭐⭐⭐⭐ | Perfect | ⭐⭐ | ⭐⭐ | Static sites only |
| **Render** | ⭐⭐⭐ | Native + API | ⭐⭐⭐⭐ | ⭐⭐⭐ | Heroku alternative |

---

## Final Recommendation

### Keep Using Vercel ✅

**Reasons:**
1. **Already Configured**: The site is already on Vercel (per README)
2. **Perfect for Next.js**: Built by the Next.js team, zero configuration
3. **Industry Standard**: Best resume/portfolio value for modern React development
4. **Free Tier**: More than sufficient for personal portfolio
5. **GitHub Integration**: Automatic deployments, preview URLs
6. **Performance**: Best-in-class for Next.js with automatic optimizations

### If You Want AWS Experience

Consider **AWS Amplify** as a secondary deployment for learning purposes:
- Deploy the same site to both Vercel (production) and AWS Amplify (learning)
- Add AWS to your tech stack knowledge
- Keep Vercel as primary hosting due to superior Next.js optimization

### GitHub Actions Workflow Example (If Needed)

While Vercel has native GitHub integration, here's how you could set up a manual deployment workflow:

```yaml
# .github/workflows/deploy-vercel.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

---

## Cost Analysis for Personal Portfolio

### Monthly Estimates (After Free Tier)

| Provider | Personal Site Cost | Notes |
|----------|-------------------|-------|
| Vercel | $0/month | Free tier sufficient |
| Netlify | $0/month | Free tier sufficient |
| Cloudflare | $0/month | Unlimited bandwidth! |
| AWS Amplify | $0-5/month | After 12-month free tier |
| Railway | $0-5/month | $5 credit/month |
| GitHub Pages | $0/month | Always free |
| Render | $0/month | Static sites free |

**Conclusion**: All platforms offer viable free options for a personal portfolio site.

---

## Learning & Career Value

### For a Software Developer Portfolio:

**Tier 1 (Must Know):**
- Vercel/Netlify (Modern web deployment)
- GitHub Actions (CI/CD)

**Tier 2 (Great to Have):**
- AWS (Amplify/S3/CloudFront)
- Cloudflare (CDN/Edge computing)

**Tier 3 (Nice to Have):**
- Railway/Render (Full-stack platforms)
- Docker/Container deployment

### Recommendation:
1. **Primary**: Use Vercel (already set up)
2. **Learn**: Set up AWS Amplify as alternative to learn AWS
3. **CI/CD**: Keep GitHub Actions for build/lint, let Vercel handle deployment

---

## Implementation Steps

### Current State ✅
- Already using Vercel
- GitHub Actions for CI (build & lint)
- Domain: harrison-blair.dev

### Recommended Actions
1. **Document Vercel setup** in repository
2. **Keep current workflow** - it's optimal
3. **Optional**: Add AWS Amplify deployment for learning
4. **Optional**: Add deployment badges to README

### No Action Needed
The current setup (Vercel + GitHub Actions for CI) is already the industry best practice for Next.js applications.

---

## Additional Resources

### Vercel
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel + GitHub](https://vercel.com/docs/git/vercel-for-github)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Deploy to Vercel via Actions](https://github.com/marketplace/actions/vercel-action)

### AWS Amplify (For Learning)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Amplify + Next.js](https://docs.amplify.aws/nextjs/)

### Cloudflare Pages
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Deploy Next.js](https://developers.cloudflare.com/pages/framework-guides/nextjs/)

---

## Conclusion

**The current setup with Vercel is optimal.** No migration is necessary. Vercel offers:
- Best-in-class Next.js hosting
- Excellent portfolio value
- Free tier sufficient for personal projects
- Perfect GitHub integration
- Industry-standard platform

If the goal is to gain AWS experience for career development, consider deploying to AWS Amplify as a secondary deployment while keeping Vercel as the primary production host.
