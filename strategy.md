# Coral DevRel Strategy

**A Developer Relations program for [Coral](https://withcoral.com)**

Prepared by opencolin · Draft v2 · May 27, 2026 (post-CEO conversation)

---

## Cover note

This is a 12-month DevRel proposal for Coral — the open-source, local-first SQL runtime for AI agents. **v2 incorporates direct input from a working session with Coral's CEO Matt Henderson** (May 27, 2026). It updates the positioning narrative, the GTM model (enterprise + managed services upsell), the memory landscape framing, and the engagement options (now three paths: fractional, 90-day pilot → full-time, full-time direct).

Built on a competitive SWOT of 42 vendors, the structure we've used for prior programs (CrewAI, Memori, Glean, Perplexity), and Coral's product reality: 27 bundled + 75+ community sources, ~4.9k GitHub stars in five weeks since the April 27, 2026 open-source release, Apache 2.0, MCP-native.

**Founders:** Matt Henderson (CEO) + James (co-founder). Prior startup sold to Google, 2014. Team currently half Continental Europe, half UK. First two US hires are in the Bay Area: enterprise sales + DevRel engineer.

**Origin:** Coral was extracted from **Phoebe**, the team's AI SRE product. Building a self-hosted version of Phoebe, then watching Claude Code mature, led the team to conclude that the future of agents is *compose-your-own* — that the data-retrieval layer should be unbundled, agent-agnostic, and owned by the customer. Coral is that unbundle. Initial user response was strong enough that Coral became a full company pivot.

**The plan assumes Coral Cloud / Teams ships in Q3 2026** and is engineered to make that launch land into an already-warm community.

---

## 1. Why Coral, why now

Coral's thesis from the founders' own words:

> *"The best agent needs 12 different sources of data and a lot of them sensitive. It's a different kind of strategic and security iteration than having Datadog have your logs and GitHub have your repo and Slack have your communications. The future of agents will gravitate towards compose-your-own — to preserve strategic flexibility and to own the asset. Over the course of years, a company's usage produces a lot of derived intelligence. Companies need to decide if they want that value to accrue to them or accrue to a vertical AI provider."* — Matt Henderson, May 27 2026

That thesis is the entire wedge. Five reinforcing strengths:

- **Compose-your-own is the customer's strategic interest.** Vertical AI vendors (Datadog Bits, Honeycomb MCP, single-vendor SaaS agents) own the data and the derived intelligence. Coral inverts that — the customer composes the agent, owns the runtime, owns the history.
- **Architectural moat.** The only product combining Apache 2.0 + local-first + Rust + MCP-native + cross-source SQL JOINs over SaaS APIs. Steampipe is AGPL. CData and PromptQL are closed. MindsDB is Python ML-platform-retrofitted.
- **Published benchmark.** 31% accuracy gain, 3.4× cost efficiency vs direct provider MCPs (Claude Opus 4.6, n=82). No competitor publishes equivalent numbers.
- **Sovereignty posture.** Single Rust binary, zero data egress. Strongest data-residency story in the category — directly aligned with what enterprises buy from Coral.
- **Agent-agnostic by design.** Plugs into any harness — Claude Code, Cursor, Continue, Cody, Goose, in-house — and stays useful when those harnesses change. *"Reason why part of the infrastructure should be agent-agnostic and shared across agents"* — Matt.

But architectural lead is perishable. Steampipe has 5+ years of plugins (150+). MindsDB has 8× the GitHub stars (39.2k). Composio has 28.5k stars under MIT (and a recent enterprise-trust setback from a security incident). PromptQL is enterprise-funded and Cisco/McDonald's/Instacart-deployed. **Matt's own framing:** *"100 other smart teams working in adjacent spaces. We need to make sure we are the winner or one of the winners."*

DevRel is the lever. Coral does not need more engineering hours — it needs **community-led plugin velocity, public enterprise references, and a defining content narrative** before incumbents pivot.

## 2. The positioning narrative — Coral's pitch in one paragraph

> Your agent's effectiveness depends on having access to twelve sensitive sources at once. Vertical AI products want that data and the derived intelligence to accrue to them. Coral is the agent-agnostic data runtime that keeps both with you. Apache 2.0. Local-first. Compose your own agent on top — Claude Code, Cursor, whatever ships next — and switch harnesses without losing what your usage has taught the system. Owned infrastructure, owned intelligence, owned future.

This is the through-line for every content asset, conference talk, customer pitch, and benchmark publication.

---

## 3. North Star

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

## 4. The seven initiatives

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

## 5. Coral Cloud / Teams launch plan (Q3 2026)

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

## 6. The "on-demand agent dev tools team" — managed services as upsell

Matt's clearest GTM framing in our conversation:

> *"The revenue is in infrastructure or services. The value of the software is, like, for zero dollars from the customer's perspective… The customers need a developer tools team that knows their shit with agents. But their engineers who are the most agent-pulled tend not to be their developer tools team. So we will end up providing managed services that are like having an on-demand agent developer tools team."*

This is not a side hustle — it's how Coral wins large enterprise. It also tells us exactly what DevRel needs to manufacture: the public proof that Coral's team can build, ship, and operate agent integrations at the depth enterprises need. Every reference architecture, every benchmark, every cohort case study is also a sales asset for the managed services tier.

**DevRel deliverables that pre-sell managed services:**

- **Reference implementations as portfolio.** Each BYO Agent reference (Claude Code, Cursor, Cody, Continue) doubles as a "look what we can build for you" portfolio piece for enterprise sales conversations.
- **Cohort case studies with quantified ROI.** Each one is also a sales narrative: *"Here's how we built this with [Cohort co.] — we can build the equivalent for you."*
- **Public office hours that an enterprise prospect can attend** — the team's depth becomes verifiable rather than claimed.
- **"Build Days"** — quarterly all-day live-streamed sessions where the Coral team and a partner enterprise co-build a real integration on stage. Highest-trust enterprise content possible.
- **DevRel engineer as bench overflow.** Early on, the DevRel engineer can take 20% of their time on paid managed-services engagements — turns DevRel from a cost center into partial revenue and forces a tight product feedback loop. Matt's "DevRel engineer" role spec (*"loves building stuff, is technically strong, also a great communicator… building example implementations that inspire"*) is already shaped for this.

**Pricing anchor for managed services** (extrapolating from Matt's framing and enterprise comparables):

- Discovery + first integration: $50K–$150K
- Quarterly retainer (ongoing agent integration work): $20K–$60K/mo
- Annual platform engagement (combined Coral Cloud + services): $250K–$1M

## 7. Memory positioning — vs Memori, MEM0, Cognee

Coral is shipping a memory feature (Matt confirmed in our session). The competitive set Coral is implicitly entering: Memori Labs (we ran their DevRel), MEM0, Cognee — all funded, all pitching "we are your agents' memory layer."

Matt's framing of the positioning:

> *"It'll be a kind of an either/or. You'll either bring your own existing memory tool and use Coral in conjunction with it, or you'll decide that you're happy to use Coral for both."*

This is exactly the right framing. The DevRel program operationalizes it:

- **"Bring your own memory" reference architecture** with the major memory vendors (Memori, MEM0, Cognee). Positions Coral as the data runtime, memory plays as complementary, not competitive. Lowers integration friction for enterprises already deciding on memory.
- **"Coral as memory" reference architecture** with the same dataset, head-to-head. Lets buyers self-select.
- **Memory benchmark** as part of the quarterly benchmark series. Same harness, same task set, four configurations: no memory, Coral memory, Memori + Coral, MEM0 + Coral. Public leaderboard.
- **The strategic argument:** *"Reason why part of the infrastructure should be agent-agnostic and shared across agents. Reason why you'd want it to come from a different vendor than the one that's your model provider."* That same logic applies to memory — and Coral already wins on agent-agnostic + non-model-vendor.

## 8. Content calendar — First 90 days

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

## 9. Events (12-month conference plan)

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

## 10. What we (opencolin) deliver

The substance below is the same in any of the three engagement options. Coral picks the container.

### Three engagement options

> Matt in our session: *"We might end up concluding that we really need to be sort of all-in from the get-go."* So we offer paths:

| Option | Shape | Anchor cost | When to pick |
|---|---|---|---|
| **A · Full-time, all-in** | I close out my current Nebius engagement on a ~60-day transition and join Coral as **Head of DevRel** / **DevRel Engineer** | Standard SF compensation + equity | You're convinced and want exclusive focus from day one |
| **B · 90-day paid pilot → full-time conversion** | Defined OKRs, defined exit criteria, $35K/mo retainer + $50K program seed for the 90 days, then convert | $155K for 90 days, then full-time terms | You want to derisk both sides before either commits |
| **C · Fractional with concrete OKRs** | Quarterly engagement, ramps up to $420K/year + programs as Cloud lands | $35–50K/mo retainer + program budget | You want the operating system without owning a full headcount until Cloud has product-market-fit |

In each option Coral gets the operating system on day one — Discord, office hours, content cadence, benchmark publishing, cohort program, bounty system, OpenClaw agent. The differences are exclusivity, equity, and the ramp.

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

## 11. Resource model

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

### Engagement-option pricing (opencolin)

| Option | Year-1 cost (opencolin only) |
|---|---|
| **A · Full-time** | Standard SF DevRel comp ($220–260K base + equity) — replaces the "Head of DevRel" line above |
| **B · 90-day pilot → full-time** | $155K for 90 days, then converts to Option A terms |
| **C · Fractional** | $35K/mo retainer = **$420K** annual |

**Total Year 1 — full-build path: ~$1.69M.** Realistic ramp for pre/post-Seed Coral: ~$300K + programs in mo 1–6 (1 founder + 1 DevRel + opencolin engagement), expanding to full $1.69M run-rate by mo 9.

### Pre-Seed-friendly version
| Phase | Spend | Headcount |
|---|---|---|
| Mo 1–3 | $35K/mo retainer + $50K programs | Founder-led + 1 opencolin engagement |
| Mo 4–6 | $35K + $100K | + 1 DevRel hire (or convert opencolin engagement) |
| Mo 7–12 | $50K + $200K | + 1 DevRel Engineer, ramp to full team |

**Total Year 1 pre-Seed-friendly: ~$900K.** Cuts bounty pool, halves conference budget, single cohort.

---

## 12. Metrics dashboard (`withcoral.com/metrics` or internal)

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

## 13. Risks + mitigations

| Risk | Likelihood | Mitigation |
|---|---|---|
| Steampipe relicenses to Apache + invests in MCP | Medium | Win cadence — publish faster, build deeper Anthropic alliance |
| MindsDB pivots agent-cost narrative | Medium | Lock the benchmark definition first; differentiate on Rust performance |
| Anthropic ships first-party MCP aggregator | High | Position as "the Anthropic reference data layer," not a competitor |
| Composio recovers from its security incident and wins back enterprise trust | Medium | Lean harder into local-first / Apache 2.0 / sovereignty — Composio's hacker-founder positioning is structurally weaker for the enterprise segment Coral wants |
| Memory plays (Memori, MEM0, Cognee) capture the "agent infrastructure" mind-share | Medium | Public BYO-memory reference architectures + memory inside the quarterly benchmark series (see §7) |
| Vertical AI vendors lock customers into single-source agents | Continuous | Make sovereignty / compose-your-own the lead pitch — Matt's own framing is the entire wedge |
| Bounty quality issues | High | Tiered review gate, maintainer approval, payout only after merge + 30-day stability |
| Brand confusion (Coral AI Google, Cohere Coral) | Continuous | SEO budget, lock @withcoral, Wikipedia disambig |
| Cohort customers won't go public | Medium | 50% Cloud discount for life as quote-permission incentive |
| Cloud launch slips past Q3 2026 | Medium | Decouple community/content milestones from Cloud date |
| Conference budget overruns | Medium | Cap at 8 events year 1; remote-first for the rest |

---

## 14. Why opencolin

We run the same operating system across multiple AI/ML companies — see prior programs for [Memori](https://github.com/opencolin/memori-devrel), [Glean](https://github.com/opencolin/memori-devrel), [CrewAI](https://github.com/opencolin/crewai-devrel), [Perplexity](https://github.com/opencolin/perplexity-devrel), and our internal [AI DevRel agent](https://github.com/opencolin/ai-devrel).

Coral gets:
- Proven 7-initiative framework adapted to your wedge
- Plug-and-play content, community, and event playbooks
- A team that's worked the AI dev tool DevRel motion at four other vendors
- Fractional cost vs full-time team — until Coral Cloud is funded
- An exit ramp: at month 12 we transition to a hired Head of DevRel and hand off the operating system

---

## 15. Next steps

1. Matt + James align on which of the three engagement options fits Coral now
2. 30-minute follow-up call with James to brief him on this doc and the live site
3. If pilot path: sign 90-day pilot ($155K) — kick off Week 1 with Source Spec Cookbook, weekly office hours, Discord investment, Cohort #1 prep
4. If full-time path: confirm comp + equity range, plan 60-day Nebius wind-down
5. Quarterly review gate either way

Contact: collin@dabl.club

---

*Appendix sections (in the accompanying site): full SWOT analysis, vendor matrix, source roadmap, presentation deck, learning paths.*
