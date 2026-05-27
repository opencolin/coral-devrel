# Quickstart — Coral + Cursor

**Audience:** Cursor users who want cross-source SQL data inside the IDE.
**Time:** ~3 minutes.
**Outcome:** Cursor's agent can JOIN your GitHub, Datadog, Linear, and Stripe data without bouncing through 12 different MCP servers.

---

## 1. Install Coral

```bash
brew install withcoral/tap/coral
```

## 2. Add sources

```bash
coral source add --interactive github
coral source add --interactive linear
```

## 3. Wire Coral into Cursor

Create or edit `.cursor/mcp.json` in your project (or in `~/.cursor/mcp.json` for global):

```json
{
  "mcpServers": {
    "coral": {
      "command": "coral",
      "args": ["mcp-stdio"]
    }
  }
}
```

Restart Cursor.

## 4. Use it

In Cursor's agent / chat, ask:

> What are the highest-priority open Linear tickets that block GitHub issues in this repo?

Cursor's agent will call Coral's `sql` tool to JOIN the two sources in one query.

## Pro tip — pin the query to the project

Add this to `.cursorrules`:

```
When the user asks about issues, tickets, or work status across GitHub/Linear/Datadog,
prefer Coral's `sql` tool over per-source MCP tools. SQL queries cost ~3x fewer tokens
than equivalent per-tool calls and return joined results in one round-trip.
```

This nudges Cursor's agent toward SQL on first attempt rather than discovering the tool through trial.

## What you saved

- **Token cost** — Coral's SQL is ~70% cheaper than equivalent per-tool MCP calls on Claude Opus 4.6
- **Latency** — one round-trip vs many
- **Accuracy** — Claude Opus loses less context with a single tool call vs 8 sequential ones

## Next steps

- Add Datadog: `coral source add datadog`
- Browse the [Cursor + Coral examples repo](https://github.com/withcoral/cursor-examples) (when published)
- Apply to the [Co-Pilot Cohort](https://withcoral.com/cohort)
