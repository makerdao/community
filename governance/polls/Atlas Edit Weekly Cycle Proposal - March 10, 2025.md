---
title: Atlas Edit Weekly Cycle Proposal - March 10, 2025
summary: This Atlas Edit proposal lays the foundation for the launch of the new Star Agents and the Sky Primitives.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-03-10/26111
parameters:
    input_format:
        type: single-choice
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : plurality },
                { type : comparison, comparator : '>=', value: 20000 }
            ]
        }
        - {type : default, value : 2 }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2025-03-10T16:00:00
end_date: 2025-03-13T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - March 10, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate Julia Chang](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-03-10/26111/3). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, March 10 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit on Notion](https://www.notion.so/atlas-axis/Public-Atlas-Edit-Weekly-Proposal-for-Agent-Launch-Week-of-2025-03-10-1aff2ff08d738081880fcdc15ceb12b0)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-03-10/26111)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*On behalf of @atlas-axis, we are honored to submit this proposal to prepare the Atlas for the launch of the new Star Agents and the Sky Primitives. We have much more work ahead of us, but this proposal, if approved, will place us on a strong foundation.*

*Our submission contains the following proposed updates to the Atlas:*

- *Atlas Preamble*
  - *Definitions*
- *Governance Scope*
  - *Agents, Agent Scope and Agent Artifacts*
  - *Root Control*
  - *Conflict Protocol Between Artifacts and Sky Core Atlas*
  - *Star Agents and Executor Agents*
- *Support Scope*
  - *Sky Primitive Process Definition Schema*
  - *Essential elements for all Sky Primitives have been outlined, with the Integration Boost and Accessibility Reward Primitives fully fleshed out*
- *Stability Scope*
  - *First Loss Capital*
  - *Asset Liability Management*
- *Agent Scope*
  - *Spark Artifact*
  - *Launch Agent 1 Artifact*
  - *Launch Agent 2 Artifact*
  - *Launch Agent 3 Artifact*

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 20,000 MKR, then the following actions will be taken:**

- A Pull Request mirroring the proposal on Notion will be set up and merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
