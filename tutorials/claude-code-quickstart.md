# Quickstart — Coral + Claude Code

**Audience:** Claude Code users who want cross-source SQL over their SaaS data, with measurable token + accuracy gains.
**Time:** ~5 minutes.
**Outcome:** Claude Code asks SQL questions across GitHub, Datadog, Linear, Stripe — and uses ~3× fewer tokens than direct provider MCPs.

---

## What you'll do

1. Install Coral
2. Add 2 sources (start with GitHub + Linear)
3. Register Coral as an MCP server in Claude Code
4. Run a cross-source SQL query end-to-end

## 1. Install Coral

```bash
# macOS / Linux
brew install withcoral/tap/coral

# or via shell installer
curl -fsSL https://withcoral.com/install.sh | sh
```

Verify:

```bash
coral --version
```

## 2. Add sources

GitHub:

```bash
coral source add --interactive github
```

You'll be prompted for a GitHub PAT (read-only scopes are sufficient). Coral stores credentials locally in the OS keychain — they never leave your machine.

Linear:

```bash
coral source add --interactive linear
```

Verify both are configured:

```bash
coral source list
```

## 3. Register Coral as a Claude Code MCP server

```bash
claude mcp add --scope user coral -- coral mcp-stdio
```

Restart Claude Code. Coral is now exposed as a set of MCP tools: `sql`, `list_catalog`, `search_catalog`, `describe_table`, `list_columns`.

## 4. Run a cross-source query

In Claude Code, ask:

> Show me every open GitHub issue in `withcoral/coral` that has a corresponding Linear ticket, with the Linear status.

Behind the scenes Claude Code will call Coral's `sql` tool with something like:

```sql
SELECT
  i.number,
  i.title,
  i.state AS github_state,
  l.status AS linear_status,
  l.assignee_name
FROM github.issues i
LEFT JOIN linear.tickets l
  ON l.url LIKE '%' || i.html_url || '%'
WHERE i.repo = 'withcoral/coral'
  AND i.state = 'open'
ORDER BY i.created_at DESC
LIMIT 20;
```

One SQL call · two sources · joined client-side · cached for the next 60 seconds.

## What you just saved (vs direct provider MCPs)

For this exact question, on Claude Opus 4.6:

- **~70% fewer input tokens** (Coral returns rows, not per-tool blobs)
- **~3× lower latency** (one network round-trip instead of 8–12)
- **Higher accuracy** because the model doesn't lose context across many tool calls

## Where to go next

- Add a third source: `coral source add datadog`
- Browse the [source catalog](https://withcoral.com/sources)
- Try a 3-way JOIN: GitHub × Linear × Datadog ("which issues correspond to active alerts?")
- Read the [Source Spec Cookbook](https://withcoral.com/docs/source-spec-cookbook) and contribute a new source
- Apply to the [Co-Pilot Cohort](https://withcoral.com/cohort) if your team needs custom sources

## Troubleshooting

**Claude Code doesn't see Coral tools.** Run `claude mcp list` to confirm the registration. If `coral` isn't listed, the `coral mcp-stdio` binary may not be on `PATH` — check `which coral`.

**Source authentication failing.** Run `coral source test <name>` to validate the credential. Re-add with `coral source add --interactive <name>` if expired.

**Want to inspect what Claude Code actually queried?** Run `coral logs --tail` while interacting with Claude Code.
