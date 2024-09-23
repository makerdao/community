---
title: Atlas Edit Weekly Cycle Proposal - September 23, 2024
summary: Signal your support or opposition to this Atlas edit, which 1) adds an exemption allowing the Ecosystem entity to occupy multiple ecosystem roles, 2) adjusts the wording regarding non-compliance for location-filtering, 3) adds a short term Sky on Solana crosschain strategy, 4) approves a liquidity bootstrapping budget for the Sky Ecosystem.
discussion_link: https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal-week-of-2024-09-23/25179
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
start_date: 2024-09-23T16:00:00
end_date: 2024-09-26T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - September 23, 2024

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate Byteron](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal-week-of-2024-09-23/25179/7). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, September 23 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/35)
- [Proposal Discussion Thread](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal-week-of-2024-09-23/25179)

A brief summary of this Atlas Edit is shown below:

- Adds an exemption allowing the Ecosystem entity to occupy multiple ecosystem roles.
- Adjusts the wording regarding non-compliance for location-filtering.
- Adds a short-term Sky on Solana crosschain strategy.
- Approves a liquidity bootstrapping budget for the Sky Ecosystem.

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 20,000 MKR, then the following actions will be taken:**
- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).