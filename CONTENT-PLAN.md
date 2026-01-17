# PetCare.Software Content Migration Plan

**Created:** January 2026
**Source:** WordPress (petcare-wp) - 101 posts
**Target:** Astro static site

---

## Content Pillars

The site has 4 main content pillars (matching the pillar pages):

| Pillar | Page | Target Audience |
|--------|------|-----------------|
| Dog Daycare Software | `/dog-daycare-software` | Daycare owners/managers |
| Dog Boarding Software | `/dog-boarding-software` | Boarding facility owners |
| Kennel Software | `/kennel-software` | Kennel operators |
| Cattery Software | `/cattery-software` | Cat boarding businesses |

---

## Current State

### Already Migrated to Astro (10 posts)

| Post | Pillar | Status |
|------|--------|--------|
| dog-daycare-software-comparison.md | Dog Daycare | ✅ Live |
| how-to-start-dog-daycare-business.md | Dog Daycare | ✅ Live |
| is-kennel-software-worth-it.md | Kennel | ✅ Live |
| vaccination-tracking-for-kennels.md | Kennel | ✅ Live |
| reduce-no-shows-pet-business.md | General | ✅ Live |
| dog-boarding-pricing-strategies.md | Dog Boarding | ✅ Live |
| dog-health-safety-protocols.md | Operations | ✅ Live |
| how-to-start-cattery-business.md | Cattery | ✅ Live |
| marketing-dog-daycare-boarding.md | Marketing | ✅ Live |
| staff-training-pet-boarding.md | Operations | ✅ Live |

### WordPress Content Summary

| Pillar | Unique Posts | Approx Words Range | Quality |
|--------|--------------|-------------------|---------|
| Dog Daycare | 35 | 800-9,700 | Good-Excellent |
| Dog Boarding | 17 | 950-4,700 | Good-Excellent |
| Kennel | 22 | 950-4,200 | Good-Excellent |
| Cattery | 11 | 1,700-3,500 | Good-Excellent |
| General/Operations | 8 | 2,000-3,900 | Good |

**Total unique posts:** ~93 (after removing 8 duplicates)

---

## Quality Assessment

### Content to Skip (Duplicates/Low Quality)

The following are duplicates or low-value content that should NOT be migrated:

```
SKIP - Duplicates (same title, different slugs):
- dog-daycare-software-easy-software-that-saves-time-boosts-profits (8 copies)
- Home | PetCare.Software (wrong content type)

SKIP - Near-duplicates (very similar content):
- Multiple "Kennel Software vs Dog Boarding Software" variants
- Multiple "Best [X] Software" with overlapping content
```

### High-Quality Content to Migrate

Content is rated by:
- **Word count** (longer = more comprehensive)
- **Structure** (headings, tables, lists)
- **Internal linking** (supports pillar pages)
- **Unique value** (not duplicated elsewhere)

---

## Migration Priority

### Priority 1: Pillar-Supporting Cornerstone Content

These are comprehensive guides that should be migrated first:

#### Dog Daycare Pillar
| Title | Slug | Words | Priority |
|-------|------|-------|----------|
| Dog Daycare Management: Complete Guide | how-to-choose-kennel-software-12-essential-features | 9,700 | HIGH |
| Best Dog Daycare Software for Small Businesses (2025) | best-dog-daycare-software-for-small-businesses-2025-comparison | 3,100 | HIGH |
| Best Dog Daycare Software in 2025 | best-dog-daycare-software-in-2025-save-time-boost-revenue | 3,000 | HIGH |
| Dog Daycare Software for Staff Management | dog-daycare-software-for-staff-management-a-2025-guide | 2,600 | HIGH |
| Dog Daycare Scheduling and Booking Systems | dog-daycare-scheduling-and-booking-systems-a-complete-guide-2025 | 2,300 | HIGH |

#### Dog Boarding Pillar
| Title | Slug | Words | Priority |
|-------|------|-------|----------|
| Best Dog Boarding Software in 2025 | best-dog-boarding-software-in-2025-complete-guide-reviews | 4,700 | HIGH |
| Top 10 Features Every Dog Boarding Software Should Include | top-10-features-every-dog-boarding-software-should-include-2025-guide | 2,600 | HIGH |
| Dog Boarding Software vs Manual Booking Systems | dog-boarding-software-vs-manual-booking-systems-which-saves-more-time-2025-guide | 2,600 | HIGH |
| Dog Boarding Software with Online Booking | dog-boarding-software-with-online-booking-why-its-a-must-have-2025-guide | 2,700 | HIGH |
| Best Dog Boarding Software for Small Businesses | best-dog-boarding-software-for-small-businesses-2025-comparison | 2,400 | HIGH |

#### Kennel Pillar
| Title | Slug | Words | Priority |
|-------|------|-------|----------|
| Best Kennel Software for Small Pet Businesses | best-kennel-software-for-small-pet-businesses-2025-guide-reviews | 4,200 | HIGH |
| Kennel Software with Online Booking | kennel-software-with-online-booking-why-its-a-game-changer-2025-guide | 3,200 | HIGH |
| How to Start a Dog Kennel / Boarding Business | how-to-start-a-dog-kennel-boarding-business-beginners-guide | 3,200 | HIGH |
| Top 10 Features Every Kennel Management System Should Have | top-10-features-every-kennel-management-system-should-have-2025-guide | 2,100 | HIGH |
| Kennel Software vs Spreadsheets | kennel-software-vs-spreadsheets-why-its-time-to-upgrade-2025-guide | 2,100 | HIGH |

#### Cattery Pillar
| Title | Slug | Words | Priority |
|-------|------|-------|----------|
| Best Cattery Software in 2025 | best-cattery-software-in-2025-guide-for-small-medium-facilities | 3,050 | HIGH |
| Best Cattery Software for Small Businesses | best-cattery-software-for-small-businesses-2025-comparison | 2,970 | HIGH |
| Top 10 Features Every Cattery Management System Should Have | top-10-features-every-cattery-management-system-should-have-2025-guide | 2,310 | HIGH |
| Cattery Software vs Spreadsheets | cattery-software-vs-spreadsheets-which-saves-more-time | 2,130 | HIGH |
| How Cattery Software Improves Customer Satisfaction | how-cattery-software-improves-customer-satisfaction-2025-guide | 2,040 | HIGH |

### Priority 2: Operations & Business Guides

| Title | Pillar | Words | Priority |
|-------|--------|-------|----------|
| Emergency Preparedness for Dog Daycare & Boarding | Operations | 3,900 | MEDIUM |
| Handling Special Needs Dogs in Daycare & Boarding | Operations | 3,800 | MEDIUM |
| Building Customer Loyalty Programs | Business | 3,600 | MEDIUM |
| Customer Feedback & Reputation Management | Business | 3,540 | MEDIUM |
| Legal & Insurance Essentials | Business | 3,460 | MEDIUM |
| Seasonal Care Tips for Dogs | Operations | 3,450 | MEDIUM |
| Financial Management for Dog Daycare & Boarding | Business | 3,435 | MEDIUM |
| Partnering with Veterinarians & Trainers | Business | 3,350 | MEDIUM |
| How to Write a Business Plan for a Pet Boarding Facility | Business | 2,540 | MEDIUM |
| 7 Data Driven Strategies to Grow Your Dog Kennel Business | Business | 1,640 | MEDIUM |

### Priority 3: Operational How-To Content

| Title | Category | Words |
|-------|----------|-------|
| Dog Calming Techniques for Daycare & Boarding | Care | 2,330 |
| Dog Bathing & Grooming Routines | Care | 2,240 |
| Dog Health & Safety Protocols | Care | 2,240 |
| Dog Feeding & Nutrition Guidelines | Care | 2,200 |
| Dog Playgroup Management Strategies | Operations | 2,180 |
| Dog Behavior Tracking & Reporting | Operations | 2,050 |
| Staff Training & Certification | HR | 2,130 |
| Dog Boarding Daily Schedules & Routines | Operations | 2,160 |
| Dog Boarding Facility Design & Layout | Facilities | 2,250 |
| Designing Safe & Comfortable Dog Boarding Kennels | Facilities | 2,440 |
| Best Dog Enrichment Toys | Products | 2,140 |
| What Are Pup Cups? | Products | 1,830 |
| Essential Dog Grooming Tools & Supplies | Products | 2,380 |

### Priority 4: Supporting/Comparison Content

| Title | Pillar | Words |
|-------|--------|-------|
| Is Dog Daycare Software Worth It for Small Businesses? | Dog Daycare | 1,950 |
| How Dog Daycare Software Improves Customer Satisfaction | Dog Daycare | 2,180 |
| Mobile Friendly Dog Daycare Software | Dog Daycare | 2,480 |
| Dog Daycare Safety How to Prevent Injuries | Dog Daycare | 2,510 |
| Is Dog Boarding Software Worth It for Small Pet Businesses? | Dog Boarding | 2,790 |
| How Dog Boarding Software Improves Customer Satisfaction | Dog Boarding | 2,520 |
| Affordable Dog Boarding Software Options | Dog Boarding | 2,570 |
| Affordable Kennel Software Options | Kennel | 2,130 |
| How Kennel Software Improves Customer Satisfaction | Kennel | 2,010 |
| Kennel Software Comparison (UK/USA/Australia) | Kennel | 1,430 |
| Affordable Cattery Software Options | Cattery | 1,970 |
| Is Cattery Software Worth It? | Cattery | 1,890 |
| Cattery Software with Online Booking | Cattery | 2,030 |

---

## Content Gaps (Not in WordPress)

Consider creating new content for:

1. **Case studies** - Real customer success stories
2. **Video tutorials** - Software walkthrough guides
3. **Local SEO pages** - "Dog Daycare Software [City]" pages
4. **Integration guides** - Payment processors, accounting software
5. **Pricing calculator** - Interactive tool for ROI estimation

---

## Migration Process

### For Each Post:

1. **Export from WordPress**
   ```bash
   ssh petcare-wp "cd /opt/bitnami/wordpress && mysql -u bn_wordpress -p\$(cat wp-config.php | grep DB_PASSWORD | cut -d\\' -f4) bitnami_wordpress -N -e \"SELECT post_content FROM wp_posts WHERE post_name='[slug]'\""
   ```

2. **Convert to Markdown**
   - Strip WordPress-specific markup
   - Convert HTML to Markdown
   - Update internal links to Astro routes
   - Add frontmatter (title, description, pubDate, pillar)

3. **Quality Review**
   - Check for broken links
   - Verify images exist or remove
   - Update "2025" references if needed
   - Ensure consistent formatting

4. **Add to Astro**
   - Save to `src/content/blog/[slug].md`
   - Run `npm run build` to verify
   - Test locally with `npm run dev`

---

## Recommended Migration Order

### Phase 1: Cornerstone Content (20 posts)
- 5 per pillar (highest word count, most comprehensive)
- Estimated effort: 2-3 hours per post

### Phase 2: Business & Operations Guides (10 posts)
- Cross-pillar content that supports all service pages
- Estimated effort: 1-2 hours per post

### Phase 3: Supporting Content (30 posts)
- Comparison articles, feature deep-dives
- Estimated effort: 1 hour per post

### Phase 4: Remaining Quality Content (25 posts)
- Lower priority but still valuable
- Estimated effort: 30-60 min per post

---

## Notes

- **Duplicates identified:** 8 posts with identical titles (keep only one, preferring highest word count)
- **Low-quality posts:** Some auto-generated or thin content should be skipped
- **Internal links:** All WordPress URLs need updating to Astro routes
- **Images:** Most posts reference external or wp-content images - may need to download or replace
- **Dates:** Update "2025" to "2026" where appropriate for freshness

---

## Summary

| Category | Count |
|----------|-------|
| Already migrated | 10 |
| Priority 1 (Cornerstone) | 20 |
| Priority 2 (Business/Ops) | 10 |
| Priority 3 (How-To) | 13 |
| Priority 4 (Supporting) | 13 |
| Skip (duplicates/low quality) | ~35 |
| **Total actionable** | ~56 |

Migrating Priority 1 and 2 content (30 posts) would give strong coverage across all pillars and provide a solid SEO foundation.
