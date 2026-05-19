# Contributing

Thanks for helping keep this index useful and trustworthy.

## Add An Entry

1. Add the entry to the relevant data file:
   - `data/official-mcp-servers.yml`
   - `data/agent-skills.yml`
   - `data/china-vertical-apps.yml`
   - `data/watchlist.yml`
2. Include at least one official source link.
3. Set an evidence level using `docs/criteria.md`.
4. Add `last_checked` in `YYYY-MM-DD` format.
5. Prefer concise notes over marketing copy.

Do not edit README tables by hand. They are generated from `data/*.yml`.

## Official Sources

Good sources:

- Official product documentation
- Official GitHub organization or repository
- Official marketplace listing
- Official product page
- Official developer blog

Avoid promoting a third-party MCP server as official unless the platform itself publishes or references it.

## Pull Request Checklist

- [ ] The entry has official evidence links.
- [ ] The evidence level is justified.
- [ ] Third-party-only projects are in the watchlist, not the official table.
- [ ] Sensitive capabilities include risk tags.
- [ ] Links are accessible at the time of submission.
- [ ] `npm run validate:data` passes.
- [ ] `npm run generate:readme` has been run when data changes affect README tables.
