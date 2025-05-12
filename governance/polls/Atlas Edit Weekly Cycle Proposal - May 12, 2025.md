---
title: Atlas Edit Weekly Cycle Proposal - May 12, 2025
summary: This Atlas Edit 1) clarifies SKY staking parameters, 2) adds documentation regarding approval of the upgrade from MKR to SKY, 3) updates documentation regarding legacy brands, 4) includes new Vote Delegate Factory contract in MKR to SKY upgrade plan.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-12-2025/26364
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
start_date: 2025-05-12T16:00:00
end_date: 2025-05-15T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - May 12, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate JuliaChang](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-12-2025/26364/5). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, May 12 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/104)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-12-2025/26364)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*This proposal includes the following edits:*

- _**Clarify SKY Staking Parameters** - Clarifies where SKY Staking parameters will be specified when SKY Staking launches._
- _**Add Documentation Regarding Approval Of Upgrade From MKR To SKY** - Adds documentation regarding the vote by MKR holders to approve the upgrade from MKR to SKY as the governance token of the Protocol._
- _**Update Documentation Regarding Legacy Brands** - Updates the documentation regarding legacy brands to reflect the deprecation of MKR as the governance token of the Protocol._
- **Include New Vote Delegate Factory Contract In MKR To SKY Upgrade Plan** - Adds the deployment of the new Vote Delegate Factory contract to the MKR to SKY upgrade plan.
## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 20,000 MKR, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
