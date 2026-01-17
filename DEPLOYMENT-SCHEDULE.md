# PetCare.Software Blog Deployment Schedule

**Created:** January 16, 2026
**Total Posts:** 29
**Strategy:** 10 immediate, 19 scheduled weekly

---

## Batch 1: Deploy Immediately (January 16, 2026)

High-priority cornerstone content and key supporting articles.

| # | Slug | Category | Priority |
|---|------|----------|----------|
| 1 | `dog-daycare-software-complete-guide` | Cornerstone | HIGH |
| 2 | `dog-boarding-software-complete-guide` | Cornerstone | HIGH |
| 3 | `kennel-software-complete-guide` | Cornerstone | HIGH |
| 4 | `cattery-software-complete-guide` | Cornerstone | HIGH |
| 5 | `how-to-start-dog-daycare-business` | Business Guide | HIGH |
| 6 | `how-to-start-cattery-business` | Business Guide | HIGH |
| 7 | `how-to-start-kennel-business` | Business Guide | HIGH |
| 8 | `pet-boarding-business-plan-guide` | Business Guide | HIGH |
| 9 | `is-kennel-software-worth-it` | Supporting | MEDIUM |
| 10 | `is-dog-daycare-software-worth-it` | Supporting | MEDIUM |

---

## Batch 2: Week of January 23, 2026

| # | Slug | Category |
|---|------|----------|
| 11 | `is-dog-boarding-software-worth-it` | Supporting |
| 12 | `is-cattery-software-worth-it` | Supporting |
| 13 | `dog-health-safety-protocols` | Operations |
| 14 | `staff-training-pet-boarding` | Operations |
| 15 | `vaccination-tracking-for-kennels` | Operations |

---

## Batch 3: Week of January 30, 2026

| # | Slug | Category |
|---|------|----------|
| 16 | `dog-calming-techniques` | Operations |
| 17 | `dog-playgroup-management` | Operations |
| 18 | `emergency-preparedness-pet-facility` | Operations |
| 19 | `legal-insurance-pet-boarding` | Business |

---

## Batch 4: Week of February 6, 2026

| # | Slug | Category |
|---|------|----------|
| 20 | `kennel-design-guide` | Operations |
| 21 | `financial-management-pet-business` | Business |
| 22 | `dog-boarding-pricing-strategies` | Business |
| 23 | `reduce-no-shows-pet-business` | Marketing |

---

## Batch 5: Week of February 13, 2026

| # | Slug | Category |
|---|------|----------|
| 24 | `marketing-dog-daycare-boarding` | Marketing |
| 25 | `customer-loyalty-pet-business` | Marketing |
| 26 | `grow-dog-kennel-business` | Business |
| 27 | `partnering-vets-trainers-pet-care` | Marketing |

---

## Batch 6: Week of February 20, 2026

| # | Slug | Category |
|---|------|----------|
| 28 | `dog-daycare-software-comparison` | Supporting |
| 29 | `pet-care-technology-trends` | Industry |

---

## GitHub Actions Implementation

To schedule posts, you can use date-based frontmatter and a GitHub Action that only builds posts with `date <= today`.

### Option 1: Scheduled Workflow

Create `.github/workflows/scheduled-deploy.yml`:

```yaml
name: Scheduled Deploy

on:
  schedule:
    # Runs every Thursday at 9am UTC
    - cron: '0 9 * * 4'
  workflow_dispatch: # Allow manual trigger

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        run: |
          rsync -avz --delete dist/ ubuntu@${{ secrets.REMOTE_HOST }}:/var/www/${{ secrets.SITE_DOMAIN }}/
```

### Option 2: Draft/Published Status

Add a `draft` field to frontmatter:

```markdown
---
title: "Post Title"
date: "2026-01-23"
draft: true  # Set to false when ready to publish
---
```

Update `src/content/config.ts` to filter drafts in production.

### Option 3: Future Date Filtering

Posts already have dates. Modify your blog listing to filter:

```astro
---
const posts = await getCollection('blog');
const today = new Date();
const publishedPosts = posts.filter(post => new Date(post.data.date) <= today);
---
```

---

## Quick Reference: Posts by Date

| Publish Date | Posts |
|--------------|-------|
| Jan 16, 2026 | 10 |
| Jan 23, 2026 | 5 |
| Jan 30, 2026 | 4 |
| Feb 6, 2026 | 4 |
| Feb 13, 2026 | 4 |
| Feb 20, 2026 | 2 |
| **Total** | **29** |

---

## Notes

- All posts are already created with January 16, 2026 dates
- Update dates in frontmatter to match deployment schedule OR use draft status
- Consider announcing cornerstone guides on social media
- Monitor Google Search Console for indexing after each batch
- Internal links between posts are already in place
