---
title: Atlas Edit Monthly Cycle Proposal (AEP-1) - February 10, 2025
summary: This Atlas Edit proposal aims to formally define 'housekeeping' and document the process that has been in place for the past few years for including housekeeping actions in the spell.
discussion_link: https://forum.sky.money/t/aep1-atlas-edit-monthly-cycle-proposal-2025-01-29/25907
parameters:
    input_format:
        type: single-choice
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : plurality },
                { type : comparison, comparator : '>=', value: 10000 }
            ]
        }
        - {type : default, value : 2 }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2025-02-10T16:00:00
end_date: 2025-02-24T16:00:00
---
# Atlas Edit Monthly Cycle Proposal (AEP-1) - February 10, 2025

The Governance Facilitators have placed an [Atlas Edit Monthly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.10.2_Atlas_Edit_Monthly_Cycle-430185a5-fa5d-4664-89cf-21c9e6cfc109|0db3326e) into the [voting system](https://vote.makerdao.com/polling). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for fourteen days beginning on Monday, February 10 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Canonical Proposal Link](https://github.com/makerdao/next-gen-atlas/blob/b3dfe8fac27d30cc5a6557691f9565092fff9ccf/Atlas%20Edit%20Proposals/AEP1%20-%20Atlas%20Edit%20Monthly%20Cycle%20Proposal%20-%202025-01-29.md)
- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/59)
- [Proposal Discussion Thread](https://forum.sky.money/t/aep1-atlas-edit-monthly-cycle-proposal-2025-01-29/25907)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*This Atlas Edit proposal aims to formally define “housekeeping” and document the process that has been in place for the past few years for including housekeeping actions in the spell.*

### List of Edits

- Addition of three documents under [A.1.11 - Weekly Governance Cycle - Operational Weekly Cycle - Governance Facilitators’ Authority To Create Proposals](https://github.com/makerdao/next-gen-atlas/blob/1c32644a66ba468821be94b30aa96b05537d507e/Sky%20Atlas/Sky%20Atlas.html#L4035) ([Atlas Explorer - A.1.10.1.6](https://sky-atlas.powerhouse.io/A.1.10.1.6_Governance_Facilitators%E2%80%99_Authority_To_Create_Proposals/fcd23442-3728-4dda-88d7-ea0124dcb3b5%7C0db303084211)), namely:
  - Weekly Governance Cycle - Operational Weekly Cycle - Governance Facilitators’ Role in Adding Housekeeping Items In Executive Votes.
  - Weekly Governance Cycle - Operational Weekly Cycle - Definition Of Housekeeping Items.
  - Weekly Governance Cycle - Operational Weekly Cycle - Process for Adding Housekeeping Item In Executive Vote.

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 10,000 MKR, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
