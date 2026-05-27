# Coral DevRel Strategy

**A fractional Developer Relations program for [Coral](https://withcoral.com)**

Prepared by opencolin · Draft v1 · May 27, 2026

---

## Cover note

This is a 12-month fractional DevRel proposal for Coral — the open-source, local-first SQL runtime for AI agents. The proposal is built on a competitive SWOT of 42 vendors, the established structure of our prior DevRel programs for CrewAI, Memori, Glean, and Perplexity, and Coral's specific product reality: 27 bundled + 75+ community sources, ~4.9k GitHub stars in five weeks, Apache 2.0, MCP-native, no announced funding, no commercial tier yet.

The plan assumes **Coral Cloud / Teams ships in Q3 2026** and is engineered to make that launch land into an already-warm community.

---

## 1. Why Coral, why now

Coral has the strongest architectural thesis in the emerging Agent Data Access Platform (ADAP) category:

- **Only** product combining Apache 2.0 + local-first + Rust + MCP-native + cross-source SQL JOINs over SaaS APIs.
- **Published benchmark** — 31% accuracy gain, 3.4× cost efficiency vs direct provider MCPs on Claude Opus 4.6 across 82 real coding tasks. No competitor publishes equivalent numbers.
- **Permissive license** — Steampipe (closest analog) is AGPL-3.0; CData and PromptQL are closed. Coral is uniquely embeddable.
- **Performance and posture** — single Rust binary, zero data egress. Strongest data-residency story in the category.

But architectural lead is perishable. Steampipe has 5+ years of plugins (150+). MindsDB has 8× the GitHub stars (39.2k). Composio has 28.5k stars under MIT. PromptQL (Hasura) is enterprise-funded and Cisco/McDonald's/Instacart-deployed. The next 6–12 months decide whether Coral is *the* category leader, *a* category leader, or absorbed.

DevRel is the lever. Coral does not need more engineering hours — it needs **community-led plugin velocity, public reference customers, and a defining content narrative** before incumbents pivot.

---

## 2. North Star

> **Active weekly Coral installs running ≥3 sources per user.**

One metric captures product-market fit (installed), activation (configured sources), and stickiness (using multiple). All sub-metrics roll up to it.

**12-month targets**

| Metric | Today (May 27, 2026) | T+12 mo |
|---|---|---|
| GitHub stars | 4.9k | 20k |
| Source specs (bundled + verified community) | 102 | 250+ |
| Weekly active developers (≥1 query) | unknown — instrument | 5,000 |
| % of installs running ≥3 sources at day 30 | unknown — instrument | 60% |
| Named customer references | 0 | 20 |
| Quotable public logos | 0 | 5 |
| Newsletter subscribers | 0 | 8,000 |
| Coral Cloud paid teams (Q3 2026 launch) | n/a | 50 |
| Coral Cloud ARR (Q4 2026 exit) | $0 | $500K |

---

## 3. The seven initiatives

The same 7-initiative template we used for Memori and Glean, tuned to Coral's wedge. Each initiative attaches to a specific SWOT lever.

### Initiative 1 — Source Spec Marketplace
**Attacks:** W1 (integration breadth), O4 (no dominant OSS leader yet)

A public, filterable registry at `withcoral.com/sources` — Official / Verified / Community tiers, popularity sort, category facets (observability, infra, customer data, finance, productivity), and one-click install via `coral source add <id>`.

Investments:
- **Source Spec Cookbook** — annotated examples for REST, GraphQL, paginated, OAuth, file-based, and streaming sources.
- **Linting + test harness** — every submitted spec runs through a public CI matrix.
- **Author Office Hours** — Tuesdays, 11am PT, 60 min. Drop in, get unblocked.
- **Featured-source rotation** — top placement + tweet thread + blog spotlight for each promoted spec.

### Initiative 2 — Bring-Your-Own-Agent Reference Architectures
**Attacks:** S8 (MCP-native), O5 (composability with code-context tools)

Coral's wedge requires an agent in front of it. We ship official, maintained reference architectures for the top AI coding/SRE agents:

- **Claude Code + Coral** — co-marketed with Anthropic.
- **Cursor + Coral** — one-click `.cursor/mcp.json`.
- **Continue.dev + Coral** — MCP via Coral.
- **Sourcegraph Cody + Coral** — code-graph × ops-data demo.
- **Goose / Aider / Devin / Cline / Claude Desktop** — quickstart per agent.

Each reference architecture ships a GitHub repo, a 5-minute video, a written guide, and a **token-savings calculator** (input: # of investigations/week; output: monthly $ saved vs direct MCPs).

### Initiative 3 — Token Efficiency Benchmark Series
**Attacks:** S2 (defensible performance claim), T3 (Anthropic ships better reference), T8 (token-efficiency narrative weakens)

Quarterly benchmarks across new model releases on identical task sets. Always reproducible — harness is open-sourced. Comparisons against Composio, Anthropic reference MCPs, Steampipe, vendor MCPs (Datadog Bits AI, Honeycomb), and MindsDB.

Public leaderboard at `withcoral.com/benchmarks`. We own the metric definition before competitors do.

Cadence: one major drop per quarter (4/year) + ad-hoc drops for major model releases (Opus 4.7, GPT-5, Gemini 3, etc.).

### Initiative 4 — Coral Co-Pilot Cohort (Design Partners)
**Attacks:** W3 (no customers), W2 (no commercial model — pre-sells Cloud)

Cohort-based design partner program. **12 weeks, 8–10 companies per batch, 4 batches per year.**

White-glove from Rajya, Matt, and the DevRel team:
- Dedicated Slack channel per cohort
- Custom source specs built on demand
- Weekly office hours with the founders
- First access to Coral Cloud (Q3 2026)
- 50% discount on Cloud for life

In exchange:
- Published case study with quantified ROI (tokens saved, hours saved)
- Quotable customer story
- Co-presented conference talk
- Logo on `withcoral.com/customers`

**Target list:** AI-native startups already invested in Claude Code/Cursor and likely to publicly endorse — Vercel, Linear, Stripe, Notion, Cursor, Replit, Cognition, Decagon, Sierra, Anthropic itself, Sourcegraph, Anysphere, Browserbase, E2B, Modal, Baseten.

**Public Cohort Demo Day** — quarterly livestream where the cohort shows their Coral implementations. Same playbook YC uses for Demo Day — manufactures social proof at scale.

### Initiative 5 — Source Spec Bounty Program
**Attacks:** W1 (integration breadth), O4 (open-source leadership)

Crowdsourced breadth, with real money:

| Tier | Complexity | Payout |
|---|---|---|
| T1 | REST API, simple auth, ≤5 tables | $200 |
| T2 | OAuth, pagination, ≥10 tables | $500 |
| T3 | GraphQL/custom protocol or stateful auth | $1,000 |
| T4 | Complex SaaS (Salesforce, SAP, NetSuite) with deep schema | $2,000 |

Quarterly bonuses:
- **$5,000** top contributor each quarter
- **$10,000** grand prize annually

Public leaderboard. GitHub avatars on `withcoral.com/contributors`. Quarterly **Coral Hack Week** — themed pushes: Observability Week, Customer-Data Week, Security-Tooling Week, Finance Week.

Budget: **$150K/year** in bounty payouts targets ~150 new specs. At 70% acceptance rate ≈ 100 new specs/year through bounties alone, doubling current count.

### Initiative 6 — Community + Content Engine
**Attacks:** All weaknesses; especially W3, W8 (brand confusion)

**Weekly office hours** — Tuesdays 11am PT. Open Zoom + Discord audio. Demos, AMA, plugin author help.

**Discord investment** — 4 dedicated channels minimum:
- `#sql-help`
- `#source-specs`
- `#showcase` (community wins)
- `#benchmarks`
- `#claude-code-coral`, `#cursor-coral`, `#cody-coral` (agent-specific)

**Content cadence**
- 1 Coral-team post per 2 weeks (deep technical / benchmark / launch)
- 1 community "How I Coral" post per week (already a working pattern — Simon Whitaker, Antón Rodríguez posts in May 2026)
- Biweekly newsletter — *The Coral Reef* (subscribers as KPI)
- Weekly YouTube — 5-min source spec walkthroughs + benchmark explainers
- HN/Reddit/Twitter coordinated launches for every major release

**Podcast guesting** (target list):
Latent Space, AI Engineer, Practical AI, ChangeLog, Software Engineering Daily, AI Generation, The Stack Overflow Podcast, Hanselminutes, Devtools.fm.

**Brand-confusion mitigation:** SEO investment on "Coral SQL," "withcoral," "Coral MCP," "Coral agent data." Lock social handles (@withcoral on every platform). Wikipedia disambig page.

### Initiative 7 — Strategic Channel Integrations
**Attacks:** T6 (IDP displacement), T5 (Composio/Zapier commoditize), O8 (acquisition optionality)

Convert displacement threats into distribution:

- **Backstage Plugin (Apache 2.0)** — Coral as first-class MCP source plugin in Backstage. Ships with quickstart and reference Spotify Portal config.
- **Cursor Marketplace** — featured one-click setup.
- **VS Code MCP gallery** — list as soon as Microsoft ships it.
- **Claude Desktop / Claude Code featured integration** — co-marketing with Anthropic via reference architecture (Initiative 2).
- **Smithery / mcp.run / Klavis registries** — featured server placement.
- **AWS Marketplace + Azure Marketplace** — listing for Coral Cloud (Q3 2026 launch).
- **Strategic alliances:** Vercel (deploy templates), Modal (compute partner), Anysphere/Cursor (default data layer).

---

## 4. Coral Cloud / Teams launch plan (Q3 2026)

The 12 months break into three phases, each ending with a marketing moment.

### Phase 1 — Foundations (Months 1–3, Jun–Aug 2026)
- Source Spec Cookbook v1
- Reference architectures for Claude Code, Cursor (the top two)
- Benchmark drop on Opus 4.7
- Discord investment, weekly office hours begin
- Cohort #1 application opens; 8 companies accepted
- Bounty program launches with $50K initial pool
- **Milestone:** 8k stars, 130 sources, 1,500 WAD

### Phase 2 — Cloud launch (Months 4–6, Sep–Nov 2026)
- **Coral Cloud / Teams GA** — multi-tenant SaaS, shared credential vault, audit logs, RBAC
- Pricing anchor: $25–50/user/mo (per SWOT comparables)
- AWS Marketplace listing
- Backstage plugin GA
- Cohort #1 Demo Day — public livestream with 8 customer stories
- Cohort #2 opens
- Second benchmark drop covering vendor MCPs head-to-head
- **Milestone:** 12k stars, 180 sources, 3,000 WAD, 25 Cloud teams paying

### Phase 3 — Scale (Months 7–12, Dec 2026–May 2027)
- AI Engineer World's Fair + KubeCon major presence
- Anthropic co-marketed launch ("Coral is the reference data layer for Claude Code")
- Plugin SDK v2 + community plugin marketplace
- Cohorts #3 + #4
- Third + fourth benchmark drops
- First analyst recognition (Gartner Cool Vendor, Forrester Wave inclusion targets)
- **Milestone:** 20k stars, 250 sources, 5,000 WAD, 50 Cloud teams, $500K ARR

---

## 5. Content calendar — First 90 days

| Wk | Drop | Channel | Persona |
|---|---|---|---|
| 1 | "Why we built Coral in Rust" (founder post) | Blog + HN | All |
| 2 | Source Spec Cookbook v1 launch | Blog + Discord | Plugin authors |
| 3 | Benchmark: Claude Code + Coral on Opus 4.7 | Blog + Twitter + HN | SRE / coding agents |
| 4 | Cursor + Coral reference architecture | YouTube + Blog | Cursor users |
| 5 | Co-Pilot Cohort #1 applications open | Landing page + email | Enterprise |
| 6 | Customer story #1 (cohort reveal) | Blog + LinkedIn | Enterprise |
| 7 | Bounty program launch | Discord + Blog + Tweet | Plugin authors |
| 8 | Hack Week #1: Observability | Discord + livestream | SRE |
| 9 | Backstage plugin alpha | Backstage Discord + Blog | Platform eng |
| 10 | Customer story #2 | Blog + LinkedIn | Enterprise |
| 11 | "Coral vs Steampipe: when to pick each" (honest comparison) | Blog | Researchers, evaluators |
| 12 | AI Engineer World's Fair talk + booth | Conference + recording | All |

---

## 6. Events (12-month conference plan)

| Quarter | Event | Investment | Goal |
|---|---|---|---|
| Q3 2026 | AI Engineer World's Fair | Talk + booth (~$25K) | 500 demos, 100 cohort applications |
| Q3 2026 | KubeCon NA | Booth (~$30K) | SRE persona acquisition |
| Q3 2026 | All Things Open | Talk only (~$5K) | OSS community visibility |
| Q4 2026 | SREcon | Talk (~$5K) | "MCP and AI SRE" thought leadership |
| Q4 2026 | MCP Summit (if Anthropic hosts) | Sponsor (~$15K) | Anthropic alliance signal |
| Q1 2027 | KubeCon EU | Booth (~$30K) | EU + compliance persona |
| Q1 2027 | Strange Loop / Open Source Summit | Talk (~$5K each) | OSS credibility |
| Q2 2027 | DevRelCon, Render ATL, PlatformCon | Talks (~$15K total) | Platform eng + DevRel community |

Total event budget: **~$130K/year** (sponsorships + travel for 4 FTEs).

---

## 7. What we (opencolin) deliver

This is a **fractional DevRel engagement**, not a hire. We bring the operating system; Coral keeps engineering focus on the runtime.

### Always-on operating system (monthly retainer)
- DevRel strategy ownership and quarterly OKR planning
- Content engine: blog editing, technical writing, video production
- Community ops: Discord moderation, office hours hosting, newsletter
- Benchmark publishing cadence and reproducibility infrastructure
- Cohort program management end-to-end
- Bounty triage + review queue management
- Conference talk authoring and submission machinery
- Analyst & press outreach
- Brand/SEO operations
- Monthly metrics dashboard + executive readout

### Project-based deliverables
- BYO Agent reference architecture per agent (5–7 in year 1)
- Source Spec Cookbook + plugin SDK docs
- Cloud launch GTM (Phase 2)
- Backstage plugin + other channel integrations
- Cohort case studies (8–10 per cohort)

### Tooling we deploy
- *OpenClaw* — our internal AI DevRel agent for triaging community questions, drafting outreach, and routing leads (see `opencolin/ai-devrel`)
- *MetricsBoard* — public metrics dashboard
- *Cohort Portal* — application + onboarding flow
- *Bounty Tracker* — public leaderboard and payout pipeline

---

## 8. Resource model

### Headcount (12-month)
| Function | FTE | Annual |
|---|---|---|
| Head of DevRel (founder-owned mo 1–6, hire mo 7+) | 1 | $220K |
| Developer Advocate (community + content) | 1 | $180K |
| DevRel Engineer (reference architectures + integrations) | 1 | $200K |
| Technical writer (docs + cookbook) | 0.5 | $90K |
| Community manager (Discord + events) | 0.5 | $75K |
| **Subtotal** | **4** | **$765K** |

### Programs
| Program | Annual |
|---|---|
| Bounty payouts | $150K |
| Co-Pilot Cohort white-glove + Demo Day production | $50K |
| Conference sponsorships + travel | $130K |
| Content production (video, podcast guesting, paid spots) | $60K |
| Hack Weeks (4×/year) | $40K |
| Analyst program (Gartner, Forrester briefings) | $30K |
| **Subtotal** | **$460K** |

### Tools + infra
| | Annual |
|---|---|
| Discord Nitro/community tools, newsletter, video, analytics | $40K |
| **Subtotal** | **$40K** |

### Fractional DevRel retainer (opencolin)
| | Annual |
|---|---|
| 12 months × $35K/mo | $420K |

**Total Year 1: ~$1.69M** — high-end if Coral hires fully. Realistic ramp: ~$300K + programs in mo 1–6 (1 founder + 1 DevRel hire + fractional engagement), expanding post-Seed to full $1.69M run-rate by mo 9.

### Pre-Seed/Seed-friendly version
| Phase | Spend | Headcount |
|---|---|---|
| Mo 1–3 | $35K/mo retainer + $50K programs | Founder-led + 1 fractional engagement |
| Mo 4–6 | $35K + $100K | + 1 DevRel hire |
| Mo 7–12 | $50K + $200K | + 1 DevRel Engineer, ramp to full team |

**Total Year 1 pre-Seed-friendly: ~$900K.** Cuts bounty pool, halves conference budget, single cohort.

---

## 9. Metrics dashboard (`withcoral.com/metrics` or internal)

Public-facing for credibility. Updated weekly.

**Acquisition**
- GitHub stars (delta/week)
- Weekly installs (Homebrew + install.sh + Windows)
- Discord new members
- Newsletter subscribers

**Activation**
- % of installs configuring ≥1 source within 7 days
- % configuring ≥3 sources within 30 days (N* input)
- MCP registrations (Claude Code / Cursor / Cody / Continue)

**Engagement**
- Weekly active developers (queries executed)
- Source specs contributed/week (community)
- PRs merged from community

**Retention**
- 30/60/90-day install retention
- Average sources per active user

**Commercial (post Q3 2026)**
- Cohort → Cloud conversion rate
- Pipeline from community → sales
- Coral Cloud ARR
- Logo count

---

## 10. Risks + mitigations

| Risk | Likelihood | Mitigation |
|---|---|---|
| Steampipe relicenses to Apache + invests in MCP | Medium | Win cadence — publish faster, build deeper Anthropic alliance |
| MindsDB pivots agent-cost narrative | Medium | Lock the benchmark definition first; differentiate on Rust performance |
| Anthropic ships first-party MCP aggregator | High | Position as "the Anthropic reference data layer," not a competitor |
| Bounty quality issues | High | Tiered review gate, maintainer approval, payout only after merge + 30-day stability |
| Brand confusion (Coral AI Google, Cohere Coral) | Continuous | SEO budget, lock @withcoral, Wikipedia disambig |
| Cohort customers won't go public | Medium | 50% Cloud discount for life as quote-permission incentive |
| Cloud launch slips past Q3 2026 | Medium | Decouple community/content milestones from Cloud date |
| Conference budget overruns | Medium | Cap at 8 events year 1; remote-first for the rest |

---

## 11. Why opencolin

We run the same operating system across multiple AI/ML companies — see prior programs for [Memori](https://github.com/opencolin/memori-devrel), [Glean](https://github.com/opencolin/memori-devrel), [CrewAI](https://github.com/opencolin/crewai-devrel), [Perplexity](https://github.com/opencolin/perplexity-devrel), and our internal [AI DevRel agent](https://github.com/opencolin/ai-devrel).

Coral gets:
- Proven 7-initiative framework adapted to your wedge
- Plug-and-play content, community, and event playbooks
- A team that's worked the AI dev tool DevRel motion at four other vendors
- Fractional cost vs full-time team — until Coral Cloud is funded
- An exit ramp: at month 12 we transition to a hired Head of DevRel and hand off the operating system

---

## 12. Next steps

1. Confirm fractional engagement scope (this doc as starting point)
2. Sign 90-day pilot ($35K/mo retainer + $50K program seed = $155K) covering Phase 1 Foundations
3. Kick off Week 1: Source Spec Cookbook, weekly office hours, Discord investment, Cohort #1 prep
4. Quarterly review gate to expand to full Year 1 engagement

Contact: collin@dabl.club

---

*Appendix sections (in the accompanying site): full SWOT analysis, vendor matrix, source roadmap, presentation deck, learning paths.*
