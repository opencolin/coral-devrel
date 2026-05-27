# Coral Grants for Builders

**Owner:** opencolin DevRel team
**Cadence:** Continuous (Micro), monthly (Standard), quarterly (Strategic)
**Annual budget:** $100K
**Target:** ~20 grants/year · 3–5 noteworthy projects

---

## Why grants (vs bounties)

The Bounty program rewards integration breadth. Grants reward **emergent use cases** — things we couldn't have specified in advance. Both are needed.

Adapted from the Memori grant model and the patterns we ran for CrewAI.

## Three tiers

### Tier 1 — Micro Grant ($2,500)

For individual developers building tools, demos, content, or open-source utilities on Coral.

- **Eligibility:** individual contributor
- **Application:** ~200 words describing the project + a link to a public repo or design
- **Review:** weekly (DevRel team)
- **No equity, no strings** — just build something useful

**Examples:**
- A VS Code extension that surfaces Coral query results inline
- A LangChain toolkit wrapping Coral
- A blog series of 5 in-depth Coral case studies
- A Coral × DuckDB benchmark exploration

### Tier 2 — Standard Grant ($10,000)

For teams building meaningful integrations or extensions.

- **Eligibility:** team of 2+, or solo founder building a product
- **Application:** 1-page form: project, team, milestones, public deliverable
- **Review:** monthly (DevRel + founder)
- **Reporting:** monthly check-in, public artifact at end

**Examples:**
- A multi-tenant Coral hosting service for agencies
- A Coral × Backstage advanced integration plugin
- A reference architecture for AI customer support agents using Coral
- A research paper benchmarking Coral against 10 alternatives

### Tier 3 — Strategic Grant ($25,000)

For founders building Coral-native products (commercial or OSS).

- **Eligibility:** founder with a serious project
- **Application:** longer pitch + call with Coral founders
- **Review:** quarterly cohort
- **Includes:** mentorship + co-marketing + go-to-market support
- **Not an investment:** Coral does not take equity for grants

**Examples:**
- A startup building an AI SRE agent on Coral
- A vertical-specific Coral distribution (Coral for healthcare, Coral for finance)
- A managed Coral Cloud reseller for EU customers (data-residency angle)
- A Coral-native semantic layer / dbt-style modeling tool

## Application flow

1. Public landing at `withcoral.com/grants`
2. Application form per tier
3. Review window:
   - Micro: 1 week
   - Standard: 4 weeks
   - Strategic: 8 weeks (quarterly cohort)
4. Decision communicated by email + public announcement if recipient consents
5. Payment via Open Collective or Wise

## Public-facing recognition

- All grant recipients listed on `withcoral.com/grants/recipients`
- Quarterly grant cohort announcement post
- Recipients invited to present at Demo Day (Strategic tier)
- Coral team amplifies on Twitter/LinkedIn when projects ship

## Annual budget math

- Micro: ~10 grants × $2,500 = $25K
- Standard: ~7 grants × $10K = $70K
- Strategic: ~4 grants × $25K = $100K → trimmed to ~1 grant in year 1 = $25K
- + admin overhead: $10K (Open Collective fees, application review time)
- = **~$130K** projected · capped at $100K with selectivity

(Strategic tier scales up in year 2 once selection signal improves.)

## Eligibility / exclusions

- Must publish a public artifact (code, content, research, product)
- Must use Coral as a core component (not just an optional integration)
- Cannot be a current Coral team member or family thereof
- Cannot be funded by a Coral competitor (Steampipe / Turbot, CData, Composio, MindsDB)

## Risks

- **Vaporware:** mitigation = milestone reporting + payment in tranches for Standard/Strategic tiers
- **Selection bias toward known names:** mitigation = blind first-round review on Micro grants
- **Conflict with bounty:** mitigation = grants explicitly fund things that aren't source specs; bounty funds specs

## Success metrics

- 20 funded projects/year
- 80% deliver their committed public artifact
- 3–5 projects reach "noteworthy" (cited in newsletter, mentioned at conference, used by 100+ devs)
- 1 strategic grant produces a fundable startup or major OSS project
