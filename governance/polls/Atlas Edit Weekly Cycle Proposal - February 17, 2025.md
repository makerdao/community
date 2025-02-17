---
title: Atlas Edit Weekly Cycle Proposal - February 17, 2025
summary: This proposal includes 1) updating Documentation Regarding Standby Spells, 2) updating The Spark Pre-launch Token Rewards, 3) incorporating Slope 1 Spread Parameter, 4) updating References to Emergency Process, 5) cleaning Up Provisions Regarding Sealing USDS Generation Risk Parameters, 6) removing References To Season System, 7) cleaning Up Atlas Documents To Prepare For JSON Version.
discussion_link: $https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-for-week-of-february-17-2025/25979
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
start_date: 2025-02-17T16:00:00
end_date: 2025-02-20T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - February 17, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate Cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-for-week-of-february-17-2025/25979/2?u=blimpa). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, February 17 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/66)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-for-week-of-february-17-2025/25979)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*This proposal includes seven sets of edits:*

- ***Updating Documentation Regarding Standby Spells** - Updates the Standby Spells that are available.*
- ***Updating The Spark Pre-launch Token Rewards** - Updates the Spark Pre-launch Token Rewards to include USDS.*
- ***Incorporating Slope 1 Spread Parameter** - Adds documentation regarding the Spark Slope 1 Spread parameter for WETH.*
- ***Updating References to Emergency Process** - Updates references to align with the current emergency process.*
- ***Cleaning Up Provisions Regarding Sealing USDS Generation Risk Parameters** - These risk parameters are specified in the Protocol Scope so the provisions related to them in the Stability Scope can be deleted.*
- ***Removing References To Season System** - Removes outdated reference to the Season System with regard to Delegate Contracts.*
- ***Cleaning Up Atlas Documents To Prepare For JSON Version** - Removes some Supporting Documents and makes copies of others so that each copy of a Supporting Document targets exactly one Primary Document in preparation of upgrade of Atlas from HTML to JSON.*

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 20,000 MKR, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
