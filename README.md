<h1 align="center">Vaibhav Lalwani</h1>

<p align="center"><strong>AI systems engineer. I ship agents into real codebases and make them prove what they did.</strong></p>

<p align="center">
  Liverpool, UK · MSc Advanced Data Science &amp; Artificial Intelligence · University of Liverpool<br>
  Open to <strong>Senior AI Engineer</strong>, <strong>Forward Deployed Engineer</strong> and <strong>Applied AI</strong> roles
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/vaibhav-lalwani/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://vaibhavlalwani.vercel.app"><img src="https://img.shields.io/badge/Portfolio-111111?style=flat-square&logo=vercel&logoColor=white" alt="Portfolio"></a>
  <a href="mailto:vaibhavlalwani26969@gmail.com"><img src="https://img.shields.io/badge/Email-3F4147?style=flat-square&logo=gmail&logoColor=white" alt="Email"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/2026-4×%20Hackathon%20Winner-ff6a1a?style=for-the-badge" alt="4x hackathon winner in 2026">
  <img src="https://img.shields.io/badge/Upstream-11%20merged%20PRs-2ea44f?style=for-the-badge&logo=github" alt="11 merged upstream pull requests">
  <img src="https://img.shields.io/badge/SharedOS-Judges'%20Pick-111111?style=for-the-badge" alt="SharedOS Judges' Pick">
</p>

<a href="https://yuzu-market.vercel.app/">
  <img src="https://raw.githubusercontent.com/vaibhav4046/yuzu/master/public/art/problem-with-strangers.webp" alt="Yuzu: the market where agents hire agents" width="100%">
</a>

## In one minute

- **I land work in codebases I did not write.** 11 merged pull requests in 5 upstream repositories: a Rust smart-contract compiler, a Go CLI, a TypeScript automation platform, a knowledge-graph library and a local-LLM runtime. Nine of the eleven ship with new or changed tests.
- **I ship to production URLs, not slides.** Every flagship below has a live deployment and public source.
- **I build agent infrastructure:** markets, memory, retrieval with provenance, spending limits, evaluation and exactly-once side effects.
- **I document what does not work** next to what does. If a system cannot support an answer or an action, it should say so.

## Open-source contributions (merged upstream)

| Project | ★ | Merged work |
| --- | --- | --- |
| [**argotorg/fe**](https://github.com/argotorg/fe) — Rust compiler for EVM smart contracts | 1.7k | [#2042](https://github.com/argotorg/fe/pull/2042) check the visibility of a trait named in an `impl` header or bound (closed a soundness hole that let private std traits be forged) · [#2048](https://github.com/argotorg/fe/pull/2048) `fe test` can set block timestamp and number |
| [**mohitsoni48/TurboLLM**](https://github.com/mohitsoni48/TurboLLM) — local LLM runtime with OpenAI/Anthropic-compatible API | 297 | [#305](https://github.com/mohitsoni48/TurboLLM/pull/305) MCP: share the in-flight HTTP handshake · [#304](https://github.com/mohitsoni48/TurboLLM/pull/304) `fetch_url` reads PDF text · [#306](https://github.com/mohitsoni48/TurboLLM/pull/306) llama.cpp-tq3 engine · [#331](https://github.com/mohitsoni48/TurboLLM/pull/331) / [#332](https://github.com/mohitsoni48/TurboLLM/pull/332) one body reader and 400s instead of 500s across the API · [#303](https://github.com/mohitsoni48/TurboLLM/pull/303) patched a high-severity advisory (GHSA-mrhx-c7xc-m3w5) |
| [**hydra-db/selfgraph**](https://github.com/hydra-db/selfgraph) — versioned knowledge graphs for agents | 205 | [#172](https://github.com/hydra-db/selfgraph/pull/172) unmerge no longer fails on references to deleted entities |
| [**KeeperHub/keeperhub**](https://github.com/KeeperHub/keeperhub) — on-chain workflow automation | 25 | [#2372](https://github.com/KeeperHub/keeperhub/pull/2372) release the idempotency key on a definite failure |
| [**KeeperHub/cli**](https://github.com/KeeperHub/cli) | — | [#95](https://github.com/KeeperHub/cli/pull/95) `execute status` requires chain-verified receipts |

Also filed: compiler diagnostics and language issues on [Fe](https://github.com/argotorg/fe/issues?q=author%3Avaibhav4046), plus reconciliation bugs on [KeeperHub](https://github.com/KeeperHub/keeperhub/issues?q=author%3Avaibhav4046). [All my pull requests →](https://github.com/pulls?q=is%3Apr+author%3Avaibhav4046+-user%3Avaibhav4046)

## 2026 winner ledger

| Result | Project | Event | What was built |
| --- | --- | --- | --- |
| **🏆 Judges’ Pick** | **[Yuzu](https://github.com/vaibhav4046/yuzu)** | SharedOS Hackathon | Agent-to-agent market with proof, scoped authority and settlement receipts |
| **🏆 Winner** | **[Leverage](https://github.com/vaibhav4046/leverage)** | RocketRide × SCU Buildathon | Model workforce manager with per-task auctions, test verification and cognitive handoff |
| **🏆 Winner** | **[QueueProof](https://github.com/vaibhav4046/queueproof)** | HydraDB × Connectors Hackathon | Evidence-backed cross-source retrieval with claim-level provenance |
| **🏆 Winner** | **[HydraSentry](https://github.com/vaibhav4046/hydrasentry)** | HydraDB Build Blitz | Memory-integrity firewall that blocks poisoned context before an agent acts |

No scoreboard inflation: finalist and participation results stay separate from wins.

## Flagship systems

| Project | What it demonstrates | Links |
| --- | --- | --- |
| **Yuzu** | Agents that discover, bid, prove, contract, execute and settle work, ending in a signed receipt | [Live](https://yuzu-market.vercel.app/) · [Source](https://github.com/vaibhav4046/yuzu) |
| **HARDSTOP** | A spending firewall for AI agents: one Fe policy kernel, enforced on-chain and simulated natively, with an MCP server | [Live](https://hardstop-omega.vercel.app) · [Source](https://github.com/vaibhav4046/hardstop) |
| **Leverage** | Per-task model auctions, zero-budget routing, cognitive handoffs and repository-test verification | [Live](https://useleverage.vercel.app) · [Source](https://github.com/vaibhav4046/leverage) |
| **ReqKeeper** | Exactly-once settlement of Request Network obligations through KeeperHub, with concurrent-worker and live-chain evidence | [Live](https://reqkeeper.vercel.app) · [Source](https://github.com/vaibhav4046/reqkeeper) |
| **Lacuna** | Temporal memory, exact provenance, contradiction handling and explicit abstention across web, CLI and MCP | [Live](https://lacuna-five.vercel.app/explore) · [Source](https://github.com/vaibhav4046/lacuna) |
| **QueueProof** | Cross-source work retrieval with claim-level citations and inspectable evidence | [Live](https://queueproof.vercel.app) · [Source](https://github.com/vaibhav4046/queueproof) |
| **HydraSentry** | Agent memory integrity, poisoned-context detection and signed integrity evidence | [Live](https://hydrasentry.vercel.app) · [Source](https://github.com/vaibhav4046/hydrasentry) |
| **VIVA** | Voice-first active recall on AssemblyAI streaming, with source-grounded feedback | [Live](https://viva-five-murex.vercel.app) · [Source](https://github.com/vaibhav4046/viva) |
| **Kodro** | Offline robot coding and kinematic simulation for the UK KS3/KS4 computing curriculum | [Live](https://vaibhav4046.github.io/kodro/) · [Source](https://github.com/vaibhav4046/kodro) |
| **Cherry** | User-owned skills, memory, missions and verification for AI agents | [Live](https://cherry-wine.vercel.app) · [Source](https://github.com/vaibhav4046/cherry) |

## How I work (the forward-deployed part)

1. **Reproduce first.** Before changing someone else's system I get the failure to happen on my machine and write it down.
2. **Smallest correct change, then a test that fails without it.** That is how the upstream PRs above got through maintainer review.
3. **Proof over claims.** A working route, a reproducible command, a signed receipt or an evidence artifact somebody else can inspect.
4. **Say what is not done.** Limitations go in the README next to the features.

## Core stack

```text
Languages       TypeScript · Python · JavaScript · SQL · Rust (contributor) · Go (contributor)
AI systems      Agents & tool use · MCP servers · RAG & hybrid retrieval · evals · provenance · guardrails
Models          OpenAI · Anthropic · Groq · Gemini · local models (llama.cpp, Ollama)
Frontend        React · Next.js · Vite · Tailwind CSS · Three.js
Backend         Node.js · FastAPI · REST · serverless functions
Data            PostgreSQL · MongoDB · HydraDB · Redis · vector search
Delivery        GitHub Actions · Vercel · AWS · GCP · Docker
```

## Contact

For Senior AI Engineer, Forward Deployed Engineer, applied-AI or open-source work:

[LinkedIn](https://www.linkedin.com/in/vaibhav-lalwani/) · [Portfolio](https://vaibhavlalwani.vercel.app) · [Email](mailto:vaibhavlalwani26969@gmail.com)
