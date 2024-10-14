---
title: Atlas Edit Weekly Cycle Proposal - October 14, 2024
summary: Signal your support or opposition to the multiple listed Atlas Edits in the weekly cycle. 
discussion_link: https://forum.sky.money/t/atlas-weekly-cycle-edit-proposal-week-of-october-14-2024-01/25324
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
start_date: 2024-10-14T16:00:00
end_date: 2024-10-17T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - October 14, 2024

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate JuliaChang](https://forum.sky.money/t/atlas-weekly-cycle-edit-proposal-week-of-october-14-2024-01/25324/2). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, October 14 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/40)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-weekly-cycle-edit-proposal-week-of-october-14-2024-01/25324)

*Changes to the Atlas in this edit include:*
- *Implement Seal Engine parameters and related risk parameters in preparation for Seal Engine alpha launch.*
- *Early Bird Bonus details.*
- *Replaces “Delegated Votes” with “Delegated Voting Power.*
- *New Atlas Edit Weekly Cycle triggering requirements.*
- *Changes to Collateral Onboarding/Offboarding authority.*
- *Defining the Operational Weekly Cycle.*
- *Proposal terminology for the Atlas Edit Monthly Cycle.*
- *Aligning Element Annotations with their target documents.*
- *Adds Multisig Freeze Of SparkLend.*

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 20,000 MKR, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.
- Action items, such as the Seal Engine Parameters and Early Bird Bonus, will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then this change will become active in the Sky Protocol after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) has expired.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
