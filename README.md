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
<!-- auto:badge:start -->
<img src="https://img.shields.io/badge/Upstream-11%20merged%20PRs-2ea44f?style=for-the-badge&logo=github" alt="11 merged upstream pull requests">
<!-- auto:badge:end -->
  <img src="https://img.shields.io/badge/SharedOS-Judges'%20Pick-111111?style=for-the-badge" alt="SharedOS Judges' Pick">
</p>

<a href="https://yuzu-market.vercel.app/">
  <img src="https://raw.githubusercontent.com/vaibhav4046/yuzu/master/public/art/problem-with-strangers.webp" alt="Yuzu: the market where agents hire agents" width="100%">
</a>

## In one minute

<!-- auto:summary:start -->
- **I land work in codebases I did not write.** 11 merged pull requests in 5 upstream repositories, including argotorg/fe (1.7k★). 10 of the 11 add or change tests.
<!-- auto:summary:end -->
- **I ship to production URLs, not slides.** Every flagship below has a live deployment and public source.
- **I build agent infrastructure:** markets, memory, retrieval with provenance, spending limits, evaluation and exactly-once side effects.
- **I document what does not work** next to what does. If a system cannot support an answer or an action, it should say so.

## Open-source contributions (merged upstream)

<!-- auto:oss:start -->
| Project | ★ | Merged work |
| --- | --- | --- |
| [**argotorg/fe**](https://github.com/argotorg/fe) — Emerging smart contract language for the Ethereum blockchain. | 1.7k | [#2042](https://github.com/argotorg/fe/pull/2042) visibility-check traits in `impl` headers and bounds (closed a soundness hole) · [#2048](https://github.com/argotorg/fe/pull/2048) `fe test` can set block timestamp and number |
| [**mohitsoni48/TurboLLM**](https://github.com/mohitsoni48/TurboLLM) — Run any local LLM engine, auto-tuned to your GPU — polished web UI +… | 298 | [#332](https://github.com/mohitsoni48/TurboLLM/pull/332) one body reader for every route module · [#331](https://github.com/mohitsoni48/TurboLLM/pull/331) 400, not 500, for malformed conversation and folder bodies · [#304](https://github.com/mohitsoni48/TurboLLM/pull/304) `fetch_url` reads a PDF's text layer · [#306](https://github.com/mohitsoni48/TurboLLM/pull/306) add the llama.cpp-tq3 engine · [#303](https://github.com/mohitsoni48/TurboLLM/pull/303) patch a high-severity advisory (GHSA-mrhx-c7xc-m3w5) · [#305](https://github.com/mohitsoni48/TurboLLM/pull/305) MCP: share the in-flight HTTP handshake and await the initialized notification |
| [**hydra-db/selfgraph**](https://github.com/hydra-db/selfgraph) — Build and query versioned knowledge graphs for AI agents, with any gr… | 228 | [#172](https://github.com/hydra-db/selfgraph/pull/172) unmerge no longer fails on references to deleted entities |
| [**KeeperHub/keeperhub**](https://github.com/KeeperHub/keeperhub) — Automate on-chain events and actions reliably and securely. Build Wor… | 26 | [#2372](https://github.com/KeeperHub/keeperhub/pull/2372) release the idempotency key on a definite failure |
| [**KeeperHub/cli**](https://github.com/KeeperHub/cli) — KeeperHub CLI for workflow management, execution, and MCP server | 1 | [#95](https://github.com/KeeperHub/cli/pull/95) `execute status` requires chain-verified receipts |

In review upstream right now: 6 pull requests (argotorg/fe, mohitsoni48/TurboLLM, hydra-db/mintlify-docs).
<!-- auto:oss:end -->

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

## Latest work

<!-- auto:latest:start -->
| Project | What it is | Started | Links |
| --- | --- | --- | --- |
| **nyc-rideshare-spark** | Scala + Spark 3.5 batch pipeline over 115M NYC rideshare trips: data-quality gate, incremental partitioned Parquet, measured join and pruni… | 2026-11-22 | [Source](https://github.com/vaibhav4046/nyc-rideshare-spark) |
| **ledgerline** | Java 21 + Spring Boot double-entry payments ledger: idempotent transfers, Stripe test-mode webhooks, transactional outbox, Testcontainers c… | 2026-11-22 | [Source](https://github.com/vaibhav4046/ledgerline) |
| **ts-transformer-ablations** | Do transformers beat linear models for time-series forecasting? A controlled PyTorch ablation study on ETT (5 seeds, Diebold-Mariano tests). | 2026-11-22 | [Source](https://github.com/vaibhav4046/ts-transformer-ablations) |
| **taubench-reliability** | Reliability (pass^k) study on tau2-bench retail with a local 4B model: prompt rules help on held-out tasks, a same-model write verifier hur… | 2026-11-22 | [Source](https://github.com/vaibhav4046/taubench-reliability) |
| **mcp-gatekeeper** | Deterministic, model-free MCP safety proxy for PostgreSQL: AST policy, optimistic concurrency, circuit breakers with compensation, savepoin… | 2026-11-22 | [Source](https://github.com/vaibhav4046/mcp-gatekeeper) |
| **grounding-reranker** | PyTorch cross-encoder that checks whether a cited passage supports a claim (VitaminC, 0.908 acc / ECE 0.019 on 55k test pairs) | 2026-11-22 | [Source](https://github.com/vaibhav4046/grounding-reranker) |
| **langchain-lacuna** | LangChain retriever with provenance and an abstaining LangGraph agent for Lacuna agent memory | 2026-11-22 | [Source](https://github.com/vaibhav4046/langchain-lacuna) |
| **langchain-hardstop** | LangChain tools and a LangGraph guard node for HARDSTOP, a spending firewall for AI agents | 2026-11-21 | [Source](https://github.com/vaibhav4046/langchain-hardstop) |

<sub>This table and the open-source table update themselves from GitHub every 6 hours.</sub>
<!-- auto:latest:end -->

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
