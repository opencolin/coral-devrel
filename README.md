# `coral-devrel`

A fractional Developer Relations program for [Coral](https://withcoral.com) — the open-source, local-first SQL runtime for AI agents.

Prepared by [opencolin](https://github.com/opencolin) · Draft v1 · 2026-05-27

---

## What this repo is

An outside-in pitch document. It is a self-contained static site that walks Coral's team through:

- A 42-vendor competitive SWOT
- A 7-initiative DevRel program tuned to Coral's wedge
- A 12-month phased plan that anchors on **Coral Cloud / Teams GA in Q3 2026**
- An engagement model, budget, and 90-day pilot scope

The site mirrors the structure we used for [Memori](https://github.com/opencolin/memori-devrel), [CrewAI](https://github.com/opencolin/crewai-devrel), [Perplexity](https://github.com/opencolin/perplexity-devrel), and runs on top of our [AI DevRel OS](https://github.com/opencolin/ai-devrel).

## Layout

```
.
├── strategy.md                # Canonical strategy document (read this first)
├── index.html                 # Landing — vision + 7 initiatives + CTAs
├── programs.html              # Cohort · Bounty · Grants
├── ecosystem.html             # Agents · Sources · IDPs · Frontier models
├── community.html             # Discord · Office hours · Champions
├── content.html               # Calendar · pillars · newsletter · SEO
├── events.html                # Conferences · talks · hack weeks
├── partners.html              # Anthropic alliance · channel · registries
├── marketplace.html           # Source Spec Marketplace plan
├── swot-analysis.html         # Vendor matrix + SWOT
├── metrics-dashboard.html     # KPIs + targets
├── presentation.html          # Keyboard-navigable deck (arrows / space)
├── data/
│   └── metrics.json           # Powers the metrics dashboard
├── programs/
│   ├── design-partner-cohort.md
│   ├── bounty-program.md
│   └── grants.md
├── tutorials/
│   ├── claude-code-quickstart.md
│   ├── cursor-quickstart.md
│   └── write-your-first-source-spec.md
├── templates/
│   ├── source-spec-rest/
│   └── source-spec-graphql/
├── assets/
│   ├── css/main.css
│   └── js/main.js
├── vercel.json
└── README.md
```

## How to read this

1. **Strategy first.** [`strategy.md`](strategy.md) is the canonical document. The HTML is presentation; the markdown is content.
2. **Then the deck.** [`presentation.html`](presentation.html) is the 21-slide walkthrough — arrow keys to navigate, number keys to jump.
3. **Then the SWOT.** [`swot-analysis.html`](swot-analysis.html) covers the competitive landscape (42 vendors) and how each initiative maps to a SWOT lever.
4. **Then the programs.** [`programs.html`](programs.html) details Cohort + Bounty + Grants.
5. **Everything else** — content, community, events, partners, marketplace, metrics — is execution detail.

## Running locally

Static site. No build step.

```bash
# Anything that serves static files works
python3 -m http.server 4000
# or
npx serve .
```

Then open <http://localhost:4000>.

## Deploying

The included `vercel.json` deploys this as a static site on Vercel.

```bash
vercel
```

## Next steps

If this pitch resonates, the fastest path is:

1. 30-minute review call with Rajya + Matt
2. Confirm scope, sign 90-day pilot ($155K) for Phase 1
3. Week 1 kickoff: Source Spec Cookbook, weekly office hours, Discord investment, Cohort #1 prep

Contact: <collin@dabl.club>

## License

Pitch document — all rights reserved by opencolin. Not a public commitment. Use of Coral name, logo, and benchmarks is for the purpose of this proposal only.
