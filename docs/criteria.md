# Inclusion Criteria

This project is official-first.

## Included

- Official MCP servers from the service provider.
- Official MCP clients or first-party MCP support in agent platforms.
- Official MCP marketplaces, registries, gateways, or governance surfaces.
- Official Agent Skills, `SKILL.md` systems, skill stores, or platform skill ecosystems.
- High-quality entries from China and global ecosystems when official evidence is available.

## Not Included In Main Tables

- Third-party MCP servers for a platform unless the platform officially references or publishes them.
- Media-only announcements without official docs or official product pages.
- Generic MCP tutorials that do not identify an official platform capability.
- Dead repositories or unmaintained experiments unless they are historically important.

## Evidence Levels

| Level | Meaning | Main Table? |
| --- | --- | --- |
| A | Official docs plus official repo, endpoint, server, marketplace, or product page | Yes |
| B | Official docs or official repo only | Yes, with caution |
| C | Official marketplace or registry listing with a verifiable publisher | Case by case |
| D | Media/community evidence only | Watchlist |
| X | Third-party only | No |

## Required Fields

Every entry should include:

- `name`
- `organization`
- `region`
- `category`
- `official_links`
- `evidence_level`
- `last_checked`

MCP entries should also include:

- `role`
- `protocols` when known
- `risk_tags`

Skill entries should also include:

- `skill_format`

## Risk Tags

Use risk tags when an entry can access sensitive systems:

- `payment`
- `financial-data`
- `enterprise-data`
- `local-files`
- `code`
- `cloud-write`
- `deployment`
- `write-actions`
- `third-party-apps`
