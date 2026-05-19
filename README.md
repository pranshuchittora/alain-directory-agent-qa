# Awesome Official MCP Servers & Agent Skills

A curated list of official MCP servers, MCP platforms, registries, and agent skill ecosystems.

This project is official-first. It does not try to be another broad MCP server directory. It tracks platform-backed agent capabilities: official MCP support, official MCP servers, registries, marketplaces, skills, `SKILL.md` ecosystems, and governance surfaces.

## Scope

- Official MCP servers and hosted MCP endpoints
- MCP platforms, registries, marketplaces, gateways, and governance tools
- Official Agent Skills, `SKILL.md` systems, and skill marketplaces
- Domestic, international, and split-edition services, with evidence levels for every entry

## Evidence Levels

| Level | Meaning |
| --- | --- |
| A | Official docs plus official repo, endpoint, server, marketplace, or product page |
| B | Official docs or official repo only |
| C | Official marketplace or registry listing with a verifiable publisher |
| D | Media/community evidence only; keep in watchlist |
| X | Third-party only; not treated as official |

## Service Scope

`Service Scope` describes the service/API edition, not where the company is based.

| Scope | Meaning |
| --- | --- |
| Global | One global service/API surface |
| CN mainland | Mainland China edition or mainland-only docs/endpoints |
| International | Non-mainland or overseas edition |
| CN + International | One documented capability spans both mainland and international surfaces |
| CN/International split | Separate domestic and international editions, domains, accounts, or API hosts |

## Official MCP Servers

| Name | Organization | Service Scope | Role | Evidence | Links |
| --- | --- | --- | --- | --- | --- |
| GitHub MCP Server | GitHub | Global | Remote/local MCP server, Copilot integration, registry | A | [Docs](https://docs.github.com/en/copilot/concepts/about-mcp) |
| OpenAI Docs MCP | OpenAI | Global | Public docs MCP server | A | [Docs](https://platform.openai.com/docs/docs-mcp) |
| Cloudflare MCP Servers | Cloudflare | Global | Managed remote MCP servers, MCP hosting, governance | A | [Docs](https://developers.cloudflare.com/agents/model-context-protocol/mcp-servers-for-cloudflare/) |
| Figma Dev Mode MCP | Figma | Global | Design-to-code MCP server | A | [Docs](https://developers.figma.com/docs/figma-mcp-server/) |
| Notion MCP | Notion | Global | Hosted workspace MCP server | A | [Docs](https://developers.notion.com/guides/mcp/overview) |
| Linear MCP | Linear | Global | Remote MCP server | A | [Docs](https://linear.app/docs/mcp) |
| Atlassian Rovo MCP | Atlassian | Global | Remote MCP server for Jira, Confluence, Compass | A | [Docs](https://support.atlassian.com/rovo/docs/atlassian-remote-mcp-server/) |
| Vercel MCP | Vercel | Global | Official remote MCP server and MCP hosting | A | [Docs](https://vercel.com/docs/mcp/vercel-mcp/) |
| Stripe MCP | Stripe | Global | Stripe API and docs MCP server | A | [Docs](https://docs.stripe.com/mcp) |
| Zapier MCP | Zapier | Global | Automation MCP endpoint and embeddable MCP | A | [Docs](https://docs.zapier.com/mcp/home) |
| Salesforce MCP Solutions | Salesforce | Global | Salesforce DX, Hosted MCP, Heroku, MuleSoft | A | [Docs](https://developer.salesforce.com/docs/ai/agentforce/guide/mcp.html) |
| AWS Bedrock AgentCore MCP | AWS | Global | MCP runtime, gateway, and hosted server workflows | A | [Docs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp.html) |
| Google ADK / Gemini CLI MCP | Google | Global | MCP client/server bridge and official MCP catalog | A | [ADK](https://google.github.io/adk-docs/tools-custom/mcp-tools/) |
| Azure AI Foundry MCP | Microsoft | Global | Cloud-hosted Foundry MCP server | A | [Docs](https://learn.microsoft.com/en-us/azure/ai-foundry/mcp/get-started?view=foundry) |
| Alibaba Cloud Model Studio MCP | Alibaba Cloud | CN mainland | MCP services, custom MCP, marketplace | A | [Docs](https://help.aliyun.com/zh/model-studio/mcp-introduction) |
| ModelScope MCP Marketplace | ModelScope | CN mainland | MCP marketplace and benchmark ecosystem | A | [Marketplace](https://modelscope.cn/mcp) |
| Baidu Qianfan / Comate MCP | Baidu | CN mainland | AppBuilder/Comate MCP support and tools | A | [Docs](https://cloud.baidu.com/doc/AI_REFERENCE/s/Dm9qfl477) |
| Tencent Yuanqi / CloudBase MCP | Tencent | CN mainland | MCP plugins, CloudBase MCP, ADP MCP | A | [Yuanqi](https://yuanqi.tencent.com/guide/plugin-market-integrate-mcp-plugin) |
| Huawei AgentArts MCP | Huawei Cloud | CN mainland | MCP marketplace, custom MCP services | A | [Docs](https://support.huaweicloud.com/usermanual-agentarts/agentarts_05_0137.html) |
| MiniMax MCP | MiniMax | CN/International split | Official MCP server and docs | A | [Docs](https://platform.minimax.io/docs/guides/mcp-guide) |
| Z.ai MCP Calling | Z.ai | CN + International | API-level MCP server calling | A | [Docs](https://docs.z.ai/guides/capabilities/mcp-call) |
| Kimi Playground MCP | Moonshot AI | CN mainland | MCP client integration via ModelScope and CLI | B | [Docs](https://platform.kimi.ai/docs/guide/configure-the-modelscope-mcp-server) |

## Official Agent Skills

| Name | Organization | Service Scope | Skill Format | Evidence | Links |
| --- | --- | --- | --- | --- | --- |
| Anthropic Agent Skills | Anthropic | Global | `SKILL.md` | A | [Docs](https://docs.claude.com/en/docs/agents-and-tools/agent-skills) |
| Claude Code Skills | Anthropic | Global | `SKILL.md` | A | [Docs](https://docs.claude.com/en/docs/claude-code/skills) |
| OpenAI / Codex Skills | OpenAI | Global | `SKILL.md` | A | [Repo](https://github.com/openai/skills) |
| Windsurf Cascade Skills | Windsurf | Global | `SKILL.md` | A | [Docs](https://docs.windsurf.com/windsurf/cascade/skills) |
| Salesforce Agentforce Skills | Salesforce | Global | Agentforce Skills / Abilities | A | [Docs](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/mdexperts.html) |
| MiniMax Skills | MiniMax | CN/International split | Agent Skills repository | A | [Repo](https://github.com/MiniMax-AI/skills) |
| Huawei AgentArts Skill | Huawei Cloud | CN mainland | Platform Skill | A | [Docs](https://support.huaweicloud.com/lowcode-agentarts/agentarts_05_01301.html) |
| Coze Skills | Coze | CN/International split | Platform skills | B | [Overview](https://www.coze.cn/overview) |
| DiDi Skills | DiDi | CN mainland | MCP-backed lightweight skills | B | [Docs](https://mcp.didichuxing.com/claw) |

## Data

The README is intentionally short. Structured data lives in:

- [data/official-mcp-servers.yml](data/official-mcp-servers.yml)
- [data/agent-skills.yml](data/agent-skills.yml)
- [data/china-vertical-apps.yml](data/china-vertical-apps.yml)
- [data/watchlist.yml](data/watchlist.yml)

## Contributing

Pull requests are welcome. Please include official evidence links and an evidence level for every new entry. Third-party-only implementations should go to the watchlist, not the official tables.
