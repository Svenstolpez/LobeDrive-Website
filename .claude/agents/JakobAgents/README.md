# JakobAgents (Custom Personas)

This folder contains Jakob’s personal specialist personas. These agents are preferred when the task depends on:
- Jakob/Rebecca tone of voice and writing style
- Swedish language nuance
- Relationship-oriented communication
- Domain-specific advisory roles (career, psychology, medicine, etc.)

## How to choose an agent (fast rule)
Use this decision order:
1) If the task is primarily **writing/copy/translation in Swedish** or requires **Jakob/Rebecca style** → choose a JakobAgent first.
2) If the task is **technical engineering** (frontend/backend/devops) → use the categorized agents in `.claude/agents/01–10-*`.
3) If a similar agent exists in multiple places (e.g., Malin in both `JakobAgents/` and `agents/writing/`) → **JakobAgents wins** unless the task explicitly targets the `agents/writing/` workflow library.

## Agent index (JakobAgents)

- `AGENT_Alex_Morgan_Startup_Serial_Entrepreneur.md`  
  Startup founder/operator perspective. Product/market strategy, prioritization, execution, fundraising framing.

- `AGENT_Anna_Lindholm_Executive_Career_Advisor_UK.md`  
  Executive career advisory. Positioning, CV/LinkedIn, interview strategy, negotiation, leadership narrative.

- `AGENT_David_Richards_Management_Consultant.md`  
  Structured problem-solving. MECE, hypotheses, stakeholder framing, decks/memos, decision support.

- `AGENT_Dr_Michael_Carter_Diving_Medicine_US.md`  
  Diving medicine and safety guidance. Risk awareness and practical next steps (non-emergency framing).

- `AGENT_Eva_Hydman_Psykiatri.md`  
  Psychiatry-oriented perspective. Clinical framing, boundaries, referral logic (non-diagnostic support).

- `AGENT_Jens_Sorensen_Allmanmedicin.md`  
  General medicine perspective. Symptom triage, primary care framing, practical guidance (non-diagnostic).

- `AGENT_Johanna_Nilsson_Livs_Karriarcoach.md`  
  Life/career coaching. Motivation, practical action plans, values-based decisions.

- `AGENT_Malin_Johansson_Skrivassistent_JS.md`  
  Jakob Sörensen-style writing assistant. Swedish copy, tone refinement, clarity, persuasion, structure.

- `AGENT_Sofia_Lindholm_copy_sv.md`  
  Swedish copy specialist. Brand-safe language, conversion-oriented copy, clean Swedish idiom.

- `AGENT_Stina_ Allansson_Psykolog_NPF.md`  
  Psychology lens with NPF focus. Practical strategies, supportive tone, boundaries (non-diagnostic).

## Known overlap / duplicates
- `AGENT_Malin_Johansson_Skrivassistent_JS.md` also exists under `.claude/agents/writing/`.
  Precedence: **Use JakobAgents/Malin by default.** Only use `agents/writing/` if the task explicitly concerns the writing workflow library.

## Usage examples (copy/paste prompts)
- “Use JakobAgents/Malin to rewrite this into Swedish with my tone.”
- “Use JakobAgents/Sofia to polish this Swedish landing page copy for clarity and conversion.”
- “Use JakobAgents/David to structure a 1-page memo and recommendation.”
- “Use JakobAgents/Anna to rewrite my LinkedIn ‘About’ section for executive roles.”