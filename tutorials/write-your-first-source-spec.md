# Write your first Coral source spec

**Audience:** developers who want to make any HTTP API queryable in SQL from any AI agent.
**Time:** ~15 minutes for a simple REST API.
**Outcome:** a working YAML source spec that you can `coral source add` and immediately query with SQL.

---

## What a source spec is

A YAML file describing:

1. How to authenticate against an API
2. What "tables" the API exposes (typically one per resource type)
3. What columns each table has (mapped from JSON paths)
4. How to paginate

Coral's SQL engine handles the rest — caching, query pushdown where possible, joining across sources, etc.

## Example — GitHub Trending

We'll build a spec for `https://api.github.com/search/repositories` exposing a single table: `trending_repos`.

### Step 1 — Skeleton

Create `~/.coral/sources/github-trending.yaml`:

```yaml
name: github_trending
description: Live GitHub trending repositories
version: 0.1.0
license: Apache-2.0
maintainer: '@your-handle'

auth:
  type: bearer
  env: GITHUB_TOKEN

base_url: https://api.github.com

tables:
  - name: trending_repos
    endpoint: /search/repositories
    method: GET
    params:
      q: 'stars:>1 created:>{{ date_offset(-7) }}'
      sort: stars
      order: desc
      per_page: 100
    pagination:
      type: page
      param: page
      max_pages: 5
    rows_path: items
    columns:
      - { name: id, path: id, type: integer }
      - { name: full_name, path: full_name, type: text }
      - { name: html_url, path: html_url, type: text }
      - { name: description, path: description, type: text }
      - { name: stars, path: stargazers_count, type: integer }
      - { name: language, path: language, type: text }
      - { name: created_at, path: created_at, type: timestamp }
```

### Step 2 — Lint

```bash
coral source lint ~/.coral/sources/github-trending.yaml
```

Fix any errors. Common issues:

- Missing `rows_path` for endpoints that return an array nested under a key
- Type mismatches (column declared `integer` but JSON returns string)
- Pagination params not matching the API's actual contract

### Step 3 — Test

```bash
coral source test github_trending
```

This runs a sample query, reports row count + sample columns, and warns about NULL-heavy columns or schema drift.

### Step 4 — Register and query

```bash
coral source add --file ~/.coral/sources/github-trending.yaml
coral sql "SELECT full_name, stars, language FROM github_trending.trending_repos WHERE language = 'Rust' ORDER BY stars DESC LIMIT 10"
```

## Spec features cheat-sheet

| Feature | YAML key |
|---|---|
| Bearer / Basic / OAuth / API key auth | `auth.type` |
| Path params | `endpoint: /repos/{owner}/{repo}` + `path_params` |
| Query params | `params` |
| Body for POST | `body` |
| JSONPath column extraction | `columns[].path` |
| Computed columns | `columns[].expr` |
| Pagination — page, cursor, link header | `pagination.type` |
| Rate limit hints | `rate_limit` |
| Caching TTL | `cache.ttl` |
| Required env vars | `auth.env`, `params.{key}.env` |

Full reference: <https://withcoral.com/docs/source-spec>.

## Submitting to the marketplace

Once your spec is working:

1. Fork `withcoral/coral` on GitHub
2. Add your spec to `sources/community/`
3. Open a PR titled `Add source: <name>`
4. Pass CI lint
5. Reviewer merges within 5 business days

On merge: your spec is **Community** tier. After 30 days + 100 installs + clean issue history, it gets promoted to **Verified**, eligible for [bounty payout](https://withcoral.com/bounties).

## Common patterns

### OAuth flows

```yaml
auth:
  type: oauth2
  client_id_env: SOURCE_CLIENT_ID
  client_secret_env: SOURCE_CLIENT_SECRET
  authorize_url: https://example.com/oauth/authorize
  token_url: https://example.com/oauth/token
  scopes: [read]
```

Coral handles the redirect dance via local browser on `coral source add`.

### Cursor pagination

```yaml
pagination:
  type: cursor
  response_path: pagination.next_cursor
  param: cursor
```

### Link-header pagination (GitHub style)

```yaml
pagination:
  type: link_header
  rel: next
```

### Joining computed/foreign keys

You don't declare joins in the spec — Coral's SQL engine handles `JOIN` at query time. But you can hint expected relationships:

```yaml
tables:
  - name: issues
    relationships:
      - to: pull_requests
        from_column: pull_request_url
        to_column: url
```

This populates `coral describe` output and helps agents discover joinable tables.

## Where to get help

- `#source-specs` channel in [Coral Discord](https://withcoral.com/discord)
- Weekly Source Author Office Hours (Tuesdays 11am PT)
- [Source Spec Cookbook](https://withcoral.com/docs/source-spec-cookbook) — annotated examples for every common API pattern

## What's next

- Browse open [bounties](https://withcoral.com/bounties) — paid spec authoring opportunities
- Apply to be a [Coral Champion](https://withcoral.com/champions) — sustained-contribution program ($500/mo retainer)
- Build a meta-spec: a spec that wraps another internal HTTP service in your company
