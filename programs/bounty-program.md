# Source Spec Bounty Program

**Owner:** opencolin DevRel team
**Cadence:** Continuous; quarterly themed Hack Weeks
**Annual budget:** $150K in bounties + $40K hack week ops
**Target:** ~100 new merged community specs/year (70% acceptance rate from ~150 submissions)

---

## Why a bounty program

Source breadth is Coral's #1 SWOT weakness — 102 sources today vs Steampipe 150+, CData 300+, Composio 1,000+, Zapier 9,000+. The bounty is the fastest way to close that gap without hiring 10 integration engineers.

## Payout tiers

| Tier | Complexity | Payout | Examples |
|---|---|---|---|
| T1 | REST API · API key or basic auth · ≤5 tables | **$200** | StatusGator, weather APIs, public data |
| T2 | OAuth · pagination · ≥10 tables | **$500** | HubSpot, Mixpanel, Zendesk basics, Calendly |
| T3 | GraphQL or custom protocol or stateful auth | **$1,000** | Shopify Admin, Asana, Monday.com, Linear deep |
| T4 | Complex SaaS · deep schema · enterprise auth | **$2,000** | Salesforce, SAP, NetSuite, Workday, Oracle |

## Quarterly bonuses

- **$5,000** top contributor per quarter (by # of merged specs weighted by tier)
- **$10,000** grand prize annually (most impactful contributor — community vote + Coral team)
- **$1,000** for the first community spec to reach 1,000+ unique installs

## Hack Week themes (4/year)

| Quarter | Theme | Source examples |
|---|---|---|
| Q3 2026 | Observability Week | New Relic, Elastic APM, Splunk, Tempo, Loki, Mimir, Honeycomb extensions |
| Q4 2026 | Customer-Data Week | HubSpot, Pipedrive, Segment, Customer.io, Intercom deep, Mixpanel, Amplitude |
| Q1 2027 | Security-Tooling Week | Okta, 1Password, Snyk, Wiz, Crowdstrike, Sumo Logic, Tenable |
| Q2 2027 | Finance Week | QuickBooks, NetSuite, Brex, Mercury, Ramp, Recurly, Chargebee, Plaid |

## Submission flow

1. Browse open bounties at `withcoral.com/bounties` — see tier, expected effort, target schema
2. Claim a bounty (max 2 concurrent claims per contributor)
3. Author YAML spec following the [Source Spec Cookbook](https://withcoral.com/docs/source-spec-cookbook)
4. Open PR against `withcoral/coral` with spec + tests
5. Coral team reviews within 5 business days
6. On merge + lint pass + 30-day stability: bounty paid via [Open Collective](https://opencollective.com/) or Wise

## Review criteria

Specs must:

- Pass automated lint (`coral source lint`)
- Include at least one example query
- Include documentation of required credentials
- Pass a 30-day stability check (no regressions reported)
- Be Apache 2.0 licensed (default — no other license accepted)

Specs are **not required** to:

- Cover 100% of the upstream API
- Handle every edge case
- Be production-grade for every use case (that's the Verified tier promotion path)

## Promotion path

Community → Verified → Official:

- **Community** (default on merge): auto, lint-passing
- **Verified** (after 30 days): 100+ installs, named maintainer, regression-free
- **Official** (Coral team adoption): chosen by Coral team based on demand; becomes part of bundled distribution

## Public leaderboard

`withcoral.com/contributors` shows:

- GitHub avatar + handle
- # of merged specs (weighted)
- Total bounty earned (or "$XK+" for top tier)
- Featured spec link

Top 3 monthly contributors get tweeted + included in newsletter.

## Payment logistics

- US contributors: 1099 issued; payment via direct deposit or PayPal
- International: Wise transfer or Open Collective; recipient handles local tax
- Crypto option (USDC) available on request

## Annual budget math

- 150 submissions × 70% acceptance × avg $1,000 weighted payout = **$105K**
- + $5K × 4 quarters = $20K bonuses
- + $10K grand prize
- + $15K admin / review time
- = **$150K**

## Risks

- **Quality dump:** mitigation = tiered review gate, 30-day stability check before payout
- **Single-author dominance:** mitigation = $5K cap on top quarterly contributor, $10K cap on grand prize
- **Bounty hunters vs community builders:** mitigation = Champion program separately rewards sustained contribution
- **Duplicate submissions:** mitigation = "claim before authoring" mechanic
