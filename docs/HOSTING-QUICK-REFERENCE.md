# Hosting Provider Quick Reference

## TL;DR - Current Recommendation

✅ **KEEP USING VERCEL** - It's already the best choice for this Next.js project.

---

## Top 3 Options for Next.js Portfolio Sites

### 1. Vercel (CURRENT - RECOMMENDED) ⭐
- **Why**: Built by Next.js creators, zero config, industry standard
- **Free Tier**: 100 GB bandwidth/month, unlimited projects
- **GitHub**: Native integration, auto-deploy on push
- **Portfolio Value**: ⭐⭐⭐⭐⭐ - Industry leader
- **Setup**: Already done! ✅

### 2. Netlify (Best Alternative)
- **Why**: Great JAMstack platform, generous free tier
- **Free Tier**: 100 GB bandwidth/month, 300 build minutes/month
- **GitHub**: Native integration, auto-deploy previews
- **Portfolio Value**: ⭐⭐⭐⭐ - Very popular

### 3. Cloudflare Pages (Best Performance)
- **Why**: Unlimited bandwidth (free!), global CDN
- **Free Tier**: Unlimited bandwidth & requests
- **GitHub**: Native integration, edge network
- **Portfolio Value**: ⭐⭐⭐⭐ - Major infrastructure provider

---

## If You Want AWS Experience

### AWS Amplify
- **Why**: Learn AWS, good for resume
- **Free Tier**: 12 months, then ~$5/month for personal site
- **GitHub**: Good integration via AWS CLI
- **Portfolio Value**: ⭐⭐⭐⭐ - AWS is industry standard
- **Recommendation**: Deploy here AS WELL to learn AWS (keep Vercel for production)

---

## GitHub Actions Integration

All recommended platforms have excellent GitHub integration:

- **Vercel/Netlify/Cloudflare**: Native Git integration (no Actions needed)
- **AWS Amplify**: Use `aws-amplify/amplify-cli-action`
- **All**: Can use platform CLIs in custom GitHub Actions workflows

---

## Cost Comparison (Personal Site)

| Platform | Monthly Cost |
|----------|--------------|
| Vercel | $0 (free tier) |
| Netlify | $0 (free tier) |
| Cloudflare Pages | $0 (free tier) |
| AWS Amplify | $0 (first 12 months), then ~$5 |
| GitHub Pages | $0 (always free, but limited) |

---

## What NOT to Use

❌ **GitHub Pages** - Static only, no Next.js SSR
❌ **Traditional VPS/EC2** - Overkill, requires manual setup & maintenance

---

## Next Steps

**Recommended Action: NONE**

Your current setup is already optimal:
1. ✅ Vercel hosting (best for Next.js)
2. ✅ GitHub Actions for CI/CD (build & lint)
3. ✅ Domain configured (harrison-blair.dev)

**Optional Learning Opportunity:**
- Set up AWS Amplify as secondary deployment to add AWS to your tech stack knowledge
- Keep Vercel as primary production hosting

---

## See Full Analysis

For detailed comparison, pricing, and implementation guides, see:
[hosting-provider-research.md](./hosting-provider-research.md)
