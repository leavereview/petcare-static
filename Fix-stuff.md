Run a comprehensive final audit across the entire petcare.software 
project. Check everything we have built. Do not make any changes — 
report only.

═══════════════════════════════════════════════════════
SECTION 1 — Technical foundation
═══════════════════════════════════════════════════════

1. Run: npm run build
   Report verify-seo.js output in full — total pages checked, 
   errors, noindexed skipped.

2. Check astro.config.mjs:
   - site: 'https://petcare.software' is set
   - @astrojs/sitemap is installed
   - /blog/tag/* pages are filtered out

3. Check public/robots.txt exists and references the sitemap

4. Confirm /dist/sitemap-index.xml exists and report 
   total URL count

═══════════════════════════════════════════════════════
SECTION 2 — Pillar pages (all 4)
═══════════════════════════════════════════════════════

For each of the 4 pillar pages, check and report:

Pages:
- src/pages/dog-daycare-software.astro
- src/pages/dog-boarding-software.astro
- src/pages/kennel-software.astro
- src/pages/cattery-software.astro

Checks:
a. Prose word count (min 1,800)
b. H2 sections (min 6)
c. Named testimonials (min 3) — are they still [PLACEHOLDER] 
   or have real names been added?
d. Case study block present
e. Screenshot count (min 4) — confirm real image files, 
   no broken references
f. CTA above fold
g. CTA at bottom
h. FAQ questions (min 5)
i. FAQ JSON-LD in built /dist/ HTML
j. Spoke links (min 3) — list them
k. Links to other pillar pages (min 1)

Present as a table: pillar page vs check item.

═══════════════════════════════════════════════════════
SECTION 3 — Cluster completeness
═══════════════════════════════════════════════════════

For every cluster post across all 4 clusters, check:
a. File exists in src/content/blog/
b. Word count meets minimum:
   - MIGRATE posts: 1,200+
   - EXPAND/REWRITE posts: stated target
   - CREATE posts: stated target
c. Hub link present in first 200 words
d. ## Related Articles section present with 3 links
e. In sitemap

Report as 4 separate tables, one per cluster.

Daycare cluster (hub: /dog-daycare-software):
- dog-daycare-software-complete-guide (min 1,200)
- dog-daycare-franchise-guide (min 1,200)
- is-dog-daycare-software-worth-it (min 1,200)
- how-to-start-dog-daycare-business (min 1,400)
- dog-daycare-software-comparison (min 1,600)
- marketing-dog-daycare-boarding (min 1,200)
- dog-playgroup-management (min 1,200)
- dog-daycare-software-free (min 1,400)
- best-dog-daycare-software (min 1,600)

Boarding cluster (hub: /dog-boarding-software):
- dog-boarding-software-complete-guide (min 1,200)
- dog-boarding-business-plan (min 1,400)
- is-dog-boarding-software-worth-it (min 1,200)
- dog-boarding-pricing-strategies (min 1,200)
- legal-insurance-pet-boarding (min 1,200)
- staff-training-pet-boarding (min 1,200)
- pet-boarding-business-plan-guide (min 1,400)
- dog-boarding-software-reviews (min 1,400)
- free-dog-boarding-software (min 1,200)

Kennel cluster (hub: /kennel-software):
- kennel-software-complete-guide (min 1,200)
- how-to-start-kennel-business (min 1,200)
- grow-dog-kennel-business (min 1,200)
- kennel-design-guide (min 1,200)
- vaccination-tracking-for-kennels (min 1,200)
- is-kennel-software-worth-it (min 1,200)
- boarding-kennel-software (min 1,400)

Cattery cluster (hub: /cattery-software):
- cattery-software-complete-guide (min 1,200)
- is-cattery-software-worth-it (min 1,200)
- how-to-start-cattery-business (min 1,200)

═══════════════════════════════════════════════════════
SECTION 4 — Cross-cluster linking
═══════════════════════════════════════════════════════

Check each hub page and confirm it links to at least 
one other pillar in body copy (not just navigation):

- dog-daycare-software.astro → links to which other pillar?
- dog-boarding-software.astro → links to which other pillar?
- kennel-software.astro → links to which other pillar?
- cattery-software.astro → links to which other pillar?

═══════════════════════════════════════════════════════
SECTION 5 — Homepage and About
═══════════════════════════════════════════════════════

Check src/pages/index.astro:
a. Word count
b. Links to all 4 pillar pages above the fold
c. Trust signals present (Companies House, experience)

Check src/pages/about.astro:
a. Word count (target: 1,400+)
b. Mentions RevelationPets.com and sold in 2022
c. Mentions Companies House number 05408918
d. Mentions University of Winchester / First Class Honours
e. Links to all 4 pillar pages

═══════════════════════════════════════════════════════
SECTION 6 — Pages that should NOT exist
═══════════════════════════════════════════════════════

Confirm none of these exist or are indexed:
- /blog/tag/* pages (should be noindexed or absent)
- /blog/poodle-grooming-guide
- /blog/goldendoodle-grooming-guide  
- /blog/dog-grooming-tips
- /blog/dog-training-tools-guide
- /blog/dog-grooming-business-plan
- /blog/how-much-to-tip-dog-groomer
- /blog/what-is-a-pup-cup
- /roadmap

═══════════════════════════════════════════════════════
SECTION 7 — Final summary
═══════════════════════════════════════════════════════

After all checks, produce a summary table:

| Area | Status | Issues found |
|------|--------|--------------|

One row per section above. Use ✅ / ❌ / ⚠️.

Then list every issue found across all sections, 
prioritised by impact. Be specific — file name, 
what is wrong, what the fix is.