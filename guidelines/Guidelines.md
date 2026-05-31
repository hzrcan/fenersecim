# Fenersecim Product & Editorial Guidelines

## 1. Product Intent

- Platform is an independent election information and comparison product for Fenerbahce congress members and supporters.
- The product is not an official club or campaign platform.
- Primary goal: help users make informed decisions with clear, comparable, and source-aware information.

## 2. Neutrality Principles

- Use equal information depth and consistent section structure for each candidate.
- Avoid persuasive language and avoid wording that implies endorsement.
- Popularity score is contextual and indicative only; it must never be presented as official polling.

## 3. Source & Evidence Policy

- Every interview summary must include: `sourceUrl`, `sourceLabel`, `updatedAt`, `status`.
- Candidate/project claims should be traceable to public statements, trusted media coverage, or official announcements.
- If a claim cannot be fully verified, mark it as unclear and describe uncertainty plainly.

## 4. Correction Workflow

- Corrections may come from members, candidate teams, or editorial review.
- For each correction:
	1. verify source,
	2. update relevant content,
	3. refresh `updatedAt`,
	4. keep wording factual and neutral.
- Contact channel for corrections: fenersecim@gmail.com.

## 5. Interview Summary Quality Bar

- Keep summaries concise and factual.
- Distinguish clearly between:
	- key points,
	- stated commitments,
	- unresolved or unclear points.
- Do not infer hidden intent; only summarize what is explicitly stated or strongly evidenced.

## 6. Data Governance

- Collect minimum user data required for feature purpose.
- Explain why data is collected and where it is used.
- If invite flow is re-opened, deduplicate by email and guard against repeated submissions.

## 7. SEO Policy Gate

- Current policy is noindex/noarchive across pages.
- Any switch to indexable mode requires explicit product decision and synchronized updates across:
	- SEO meta tags,
	- robots directives,
	- deployment headers.

## 8. Release Checklist (Minimum)

- Route-level sanity check: home, candidates, detail, compare, interviews, methodology.
- Verify at least one updated timestamp appears for new or changed interview content.
- Verify no broken source links on changed items.
- Verify neutrality language on edited candidate-facing copy.
