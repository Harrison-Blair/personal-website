# Blog CMS Quick Decision Guide

## Decision Tree

```
Do you want to write in a code editor (Markdown/MDX)?
│
├─ YES → Do you want type safety and zero dependencies?
│   │
│   ├─ YES → ✅ **Contentlayer** (Recommended)
│   │
│   └─ NO → Do you want a visual preview while editing?
│       │
│       ├─ YES → **Tina CMS**
│       └─ NO → **Custom MDX Solution**
│
└─ NO → Do you want to self-host?
    │
    ├─ YES → Do you need enterprise features?
    │   │
    │   ├─ YES → **Strapi** or **Payload CMS**
    │   └─ NO → **Decap CMS** (simplest)
    │
    └─ NO → How much are you willing to pay?
        │
        ├─ $0/month → **Sanity** (best free tier)
        ├─ Up to $20/month → **Contentful** or **Sanity**
        └─ More → **Ghost** or **WordPress**
```

---

## Quick Feature Comparison

### ✍️ Content Editing Experience

**Best Visual Editing:**
1. Ghost (professional publishing platform)
2. Sanity (real-time, modern UI)
3. Contentful (clean, polished)

**Best Developer Experience:**
1. Contentlayer (type-safe, local)
2. Tina CMS (visual + Git)
3. Sanity (flexible, good DX)

**Easiest for Non-Developers:**
1. Ghost
2. Contentful
3. Sanity

---

### 🖼️ Media Management

**Best Image Handling:**
1. Sanity (Image Pipeline with transformations)
2. Contentful (built-in CDN + transformations)
3. Cloudinary + any CMS (third-party integration)

**Simplest Media Setup:**
1. Contentlayer (local files, next/image)
2. Decap CMS (Git LFS or cloud storage)
3. Sanity (built-in asset pipeline)

---

### 💰 Cost Analysis

**Free Forever:**
- Contentlayer (local files)
- Decap CMS (Git-based)
- Self-hosted Strapi/Payload
- Custom MDX solution

**Generous Free Tier:**
- Sanity (3 users, 5GB bandwidth, unlimited requests)
- Contentful (25K records, basic features)
- Tina CMS (2 editors, limited)

**Paid Required for Production:**
- Ghost ($9-29/month for hosting)
- WordPress hosting ($5-50/month)
- Sanity beyond free tier (~$99/month)

---

## Setup Time Estimates

| Solution | Initial Setup | First Blog Post | Production Ready |
|----------|---------------|-----------------|------------------|
| **Contentlayer** | 1-2 hours | 30 min | 4-6 hours |
| **Decap CMS** | 1-2 hours | 30 min | 3-4 hours |
| **Sanity** | 2-3 hours | 30 min | 6-8 hours |
| **Tina CMS** | 2-3 hours | 30 min | 5-7 hours |
| **Contentful** | 2-3 hours | 30 min | 5-7 hours |
| **Custom MDX** | 3-4 hours | 15 min | 8-12 hours |
| **Strapi** | 4-6 hours | 45 min | 10-15 hours |
| **Ghost** | 4-6 hours | 30 min | 10-15 hours |

---

## Code Examples

### Contentlayer Setup (Simplest)

**1. Install:**
```bash
npm install contentlayer next-contentlayer
```

**2. Configure `contentlayer.config.ts`:**
```typescript
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
```

**3. Create content `content/my-first-post.mdx`:**
```mdx
---
title: My First Dev Log
date: 2024-01-01
description: Getting started with my blog
---

# Hello World

This is my first dev log!
```

**4. Create blog page `src/app/blog/page.tsx`:**
```typescript
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.url}>
            <h2>{post.title}</h2>
            <time>{post.date}</time>
          </Link>
        </article>
      ))}
    </div>
  )
}
```

---

### Sanity Setup (Cloud-based)

**1. Install:**
```bash
npm install next-sanity @sanity/image-url
npm create sanity@latest -- --project-id YOUR_PROJECT_ID --dataset production
```

**2. Define schema `sanity/schemas/post.ts`:**
```typescript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
```

**3. Fetch posts in Next.js:**
```typescript
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default async function Blog() {
  const posts = await client.fetch(`*[_type == "post"]`)
  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  )
}
```

---

### Decap CMS Setup (Git-based with UI)

**1. Install:**
```bash
npm install netlify-cms-app
```

**2. Create `public/admin/config.yml`:**
```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main

media_folder: "public/images/blog"
public_folder: "/images/blog"

collections:
  - name: "blog"
    label: "Blog"
    folder: "content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Date", name: "date", widget: "datetime"}
      - {label: "Description", name: "description", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Featured Image", name: "image", widget: "image"}
```

**3. Create `public/admin/index.html`:**
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

Access at: `http://localhost:3000/admin`

---

## Migration Considerations

### Can I Switch Later?

**Easy to Migrate From:**
- Contentlayer → Sanity/Contentful (export MD, import via API)
- Decap CMS → Contentlayer (files already in Git)
- Custom MDX → Contentlayer (just add config)

**Harder to Migrate From:**
- Sanity/Contentful → File-based (need export scripts)
- Ghost → Anything (proprietary format)
- WordPress → Anything (complex export process)

**Recommendation:** Start with Contentlayer. If you outgrow it, migrating to a headless CMS is straightforward since you already have structured content.

---

## Common Pitfalls to Avoid

### With Contentlayer:
- ❌ Don't commit large binary files to Git
- ✅ Use Next.js Image Optimization for images
- ✅ Keep images under 1MB, optimize before committing

### With Sanity/Contentful:
- ❌ Don't forget about API rate limits
- ✅ Cache responses in Next.js
- ✅ Use ISR (Incremental Static Regeneration)

### With Git-based CMS:
- ❌ Don't use Git LFS without understanding costs
- ✅ Consider Cloudinary/Imgur for large media
- ✅ Optimize images before upload

---

## Testing the Waters (Proof of Concept)

### Weekend Project Plan (8 hours)

**Saturday Morning (3 hours):**
1. Choose your CMS (use decision tree above)
2. Basic setup and configuration
3. Create 2-3 sample blog posts

**Saturday Afternoon (2 hours):**
4. Build blog listing page
5. Build individual post pages
6. Test image handling

**Sunday (3 hours):**
7. Style the blog with Tailwind CSS
8. Add features (tags, search, etc.)
9. Deploy to Vercel
10. Write actual first blog post!

---

## Final Recommendation for Dev Logs

**Start with Contentlayer** because:

1. ✅ Zero cost
2. ✅ Content versioned in Git
3. ✅ Type-safe (TypeScript)
4. ✅ Fast to set up
5. ✅ Perfect for developers
6. ✅ Easy to migrate later if needed
7. ✅ Works offline
8. ✅ No API dependencies
9. ✅ Great for code-heavy posts
10. ✅ Integrates with Next.js perfectly

**Upgrade to Sanity if:**
- Need visual editing
- Want team collaboration
- Require image transformations
- Blog becomes more than dev logs

---

## Support & Community

**Largest Communities:**
1. WordPress (huge, but not recommended for your use case)
2. Contentful (large enterprise community)
3. Sanity (growing, very active Discord)
4. Ghost (medium, focused community)

**Best Documentation:**
1. Next.js + Contentlayer
2. Sanity
3. Contentful

**Most Responsive Support:**
1. Sanity (Discord, very active)
2. Tina CMS (Discord)
3. Contentlayer (GitHub Issues)

---

## Summary Table: Personal Website Blog

| Criteria | Contentlayer | Sanity | Decap CMS |
|----------|-------------|--------|-----------|
| **Setup Time** | 2-3 hrs | 4-6 hrs | 2-4 hrs |
| **Cost** | Free | Free tier | Free |
| **Dev Experience** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Non-dev Friendly** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Media Handling** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Offline Work** | ✅ Yes | ❌ No | ⚠️ Limited |
| **Vendor Lock-in** | ✅ None | ⚠️ Some | ✅ None |
| **Type Safety** | ✅ Yes | ⚠️ Partial | ❌ No |
| **For Dev Logs** | ✅ Perfect | ⭐ Good | ⭐ Good |

**Winner for Your Use Case: Contentlayer** 🏆
