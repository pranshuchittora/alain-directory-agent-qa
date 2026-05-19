# Awesome 官方 MCP Servers 与 Agent Skills

[English](README.md) | [简体中文](README.zh-CN.md)

一个 official-first 的 MCP Server、MCP 平台、注册表、市场与 Agent Skill 生态索引。

本项目不想再做一个泛泛的 MCP Server 黄页。我们重点跟踪平台背书的 Agent 能力：官方 MCP 支持、官方 MCP Server、注册表、市场、Skills、`SKILL.md` 生态与治理能力。

## 范围

- 官方 MCP Server 与托管 MCP 端点
- MCP 平台、注册表、市场、网关与治理工具
- 官方 Agent Skills、`SKILL.md` 系统与 Skill 市场
- 国内版、海外版、国内/海外拆分版本，并为每个条目标注证据等级

## 证据等级

| 等级 | 含义 |
| --- | --- |
| A | 官方文档加官方仓库、端点、Server、市场或产品页 |
| B | 只有官方文档或官方仓库 |
| C | 官方市场或注册表中可验证发布方的条目 |
| D | 只有媒体或社区证据；放入 watchlist |
| X | 仅第三方实现；不视为官方 |

## 服务范围

`Service Scope` 描述的是服务/API 版本，不是公司所在地。

| 范围 | 含义 |
| --- | --- |
| Global | 单一全球服务/API 面 |
| CN mainland | 中国大陆版，或仅有大陆文档/端点 |
| International | 非大陆版或海外版 |
| CN + International | 同一能力同时覆盖大陆与国际服务面 |
| CN/International split | 国内版和海外版存在独立域名、账号体系、API host 或产品线 |

## 官方 MCP Servers

| 名称 | 组织 | 服务范围 | 角色 | 证据 | 链接 |
| --- | --- | --- | --- | --- | --- |
| GitHub MCP Server | GitHub | Global | 远程/本地 MCP Server、Copilot 集成、注册表 | A | [Docs](https://docs.github.com/en/copilot/concepts/about-mcp) |
| OpenAI Docs MCP | OpenAI | Global | 公共文档 MCP Server | A | [Docs](https://platform.openai.com/docs/docs-mcp) |
| Cloudflare MCP Servers | Cloudflare | Global | 托管远程 MCP Server、MCP 托管、治理 | A | [Docs](https://developers.cloudflare.com/agents/model-context-protocol/mcp-servers-for-cloudflare/) |
| Figma Dev Mode MCP | Figma | Global | 设计到代码 MCP Server | A | [Docs](https://developers.figma.com/docs/figma-mcp-server/) |
| Notion MCP | Notion | Global | 托管工作区 MCP Server | A | [Docs](https://developers.notion.com/guides/mcp/overview) |
| Linear MCP | Linear | Global | 远程 MCP Server | A | [Docs](https://linear.app/docs/mcp) |
| Atlassian Rovo MCP | Atlassian | Global | Jira、Confluence、Compass 远程 MCP Server | A | [Docs](https://support.atlassian.com/rovo/docs/atlassian-remote-mcp-server/) |
| Vercel MCP | Vercel | Global | 官方远程 MCP Server 与 MCP 托管 | A | [Docs](https://vercel.com/docs/mcp/vercel-mcp/) |
| Stripe MCP | Stripe | Global | Stripe API 与文档 MCP Server | A | [Docs](https://docs.stripe.com/mcp) |
| Zapier MCP | Zapier | Global | 自动化 MCP 端点与可嵌入 MCP | A | [Docs](https://docs.zapier.com/mcp/home) |
| Salesforce MCP Solutions | Salesforce | Global | Salesforce DX、Hosted MCP、Heroku、MuleSoft | A | [Docs](https://developer.salesforce.com/docs/ai/agentforce/guide/mcp.html) |
| AWS Bedrock AgentCore MCP | AWS | Global | MCP runtime、gateway 与托管 Server 工作流 | A | [Docs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp.html) |
| Google ADK / Gemini CLI MCP | Google | Global | MCP client/server bridge 与官方 MCP catalog | A | [ADK](https://google.github.io/adk-docs/tools-custom/mcp-tools/) |
| Azure AI Foundry MCP | Microsoft | Global | 云托管 Foundry MCP Server | A | [Docs](https://learn.microsoft.com/en-us/azure/ai-foundry/mcp/get-started?view=foundry) |
| Alibaba Cloud Model Studio MCP | Alibaba Cloud | CN mainland | MCP 服务、自定义 MCP、市场 | A | [Docs](https://help.aliyun.com/zh/model-studio/mcp-introduction) |
| ModelScope MCP Marketplace | ModelScope | CN mainland | MCP 市场与 benchmark 生态 | A | [Marketplace](https://modelscope.cn/mcp) |
| Baidu Qianfan / Comate MCP | Baidu | CN mainland | AppBuilder/Comate MCP 支持与工具 | A | [Docs](https://cloud.baidu.com/doc/AI_REFERENCE/s/Dm9qfl477) |
| Tencent Yuanqi / CloudBase MCP | Tencent | CN mainland | MCP 插件、CloudBase MCP、ADP MCP | A | [Yuanqi](https://yuanqi.tencent.com/guide/plugin-market-integrate-mcp-plugin) |
| Huawei AgentArts MCP | Huawei Cloud | CN mainland | MCP 市场、自定义 MCP 服务 | A | [Docs](https://support.huaweicloud.com/usermanual-agentarts/agentarts_05_0137.html) |
| MiniMax MCP | MiniMax | CN/International split | 官方 MCP Server 与文档 | A | [Docs](https://platform.minimax.io/docs/guides/mcp-guide) |
| Z.ai MCP Calling | Z.ai | CN + International | API 级 MCP Server 调用 | A | [Docs](https://docs.z.ai/guides/capabilities/mcp-call) |
| Kimi Playground MCP | Moonshot AI | CN mainland | 通过 ModelScope 与 CLI 的 MCP client 集成 | B | [Docs](https://platform.kimi.ai/docs/guide/configure-the-modelscope-mcp-server) |

## 官方 Agent Skills

| 名称 | 组织 | 服务范围 | Skill 形态 | 证据 | 链接 |
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

## 数据

README 会保持简短。结构化数据在：

- [data/official-mcp-servers.yml](data/official-mcp-servers.yml)
- [data/agent-skills.yml](data/agent-skills.yml)
- [data/china-vertical-apps.yml](data/china-vertical-apps.yml)
- [data/watchlist.yml](data/watchlist.yml)

## 贡献

欢迎提交 Pull Request。新增条目请提供官方证据链接和证据等级。只有第三方实现的项目应进入 watchlist，而不是官方主表。
