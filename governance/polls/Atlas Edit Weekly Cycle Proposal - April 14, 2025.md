---
title: Atlas Edit Weekly Cycle Proposal - April 14, 2025
summary: This Atlas Edit 1) builds out logic regarding types of capital 2) introduces the Sky Treasury Management Function 3) Adds initial logic for the Monthly Settlement Cycle 4) Adds provisions for the Rate Setter Module 5) Adds triggering requirements for the Monthly Governance Cycle 6) Corrects issues in the Agent Launch proposal.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-april-14-2025/26262
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
start_date: 2025-04-14T16:00:00
end_date: 2025-04-17T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - April 14, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate JuliaChang](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-april-14-2025/26262/3). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, April 14 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/87)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-april-14-2025/26262)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes six sets of edits:_

- **Build Out Logic Regarding Types Of Capital** - Incorporates Rune’s [The Types Of Risk Capital: Internal, External, First Loss, Senior](https://forum.sky.money/t/the-types-of-risk-capital-internal-external-first-loss-senior/26122) Forum post and part of his [Senior Risk Capital And srUSDS](https://forum.sky.money/t/senior-risk-capital-system-and-srusds/26096) Forum post.
- **Introduce Sky Treasury Management Function** - Incorporates Rune’s [Sky Treasury Management Function](https://forum.sky.money/t/sky-treasury-management-function-update/26132) Forum post and the remainder of his [Senior Risk Capital And srUSDS](https://forum.sky.money/t/senior-risk-capital-system-and-srusds/26096) Forum post.
- **Add Initial Logic For Monthly Settlement Cycle** - Adds initial logic for the Monthly Settlement Cycle.
- **Add Provisions For Rate Setter Module** - Adds provisions for the Stability Parameter Bounded External Access Module (SP-BEAM) to allow interest rates to be updated more frequently.
- **Add Triggering Requirements For Monthly Governance Cycle** - Adds triggering requirements for Atlas Edit Monthly Cycle proposals.
- **Correct Issues In Agent Launch Proposal** - Makes minor corrections to the Atlas following up on the Agent Launch.

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 20,000 MKR, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
