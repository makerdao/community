---
title: Atlas Edit Weekly Cycle Proposal - September 16, 2024
summary: Signal your support or opposition to this Atlas edit, which 1) Updates the GSM Delay Exception for the Smart Burn Engine based on a request from BA Labs, 2) adds exemption for the Facilitator anonymity requirement for Ecosystem based on discussion with Governance Facilitators, 3) makes minor updates to language in some places to incorporate initial feedback on Atlas v2.
discussion_link: https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal/25083
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
start_date: 2024-09-16T16:00:00
end_date: 2024-09-19T16:00:00
---
# Poll: Atlas Edit Weekly Cycle Proposal - September 16, 2024

The Governance Facilitators have placed an Atlas Edit Weekly Cycle Proposal into the voting system [on behalf of Prime Aligned Delegate Blue](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal/25083/3). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, September 16 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/33)
- [Proposal Discussion Thread](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal/25083)

A brief summary of this Atlas Edit has been provided by the proposal author and is shown below:

- *Updates [GSM delay exception for Smart Burn Engine](https://sky-atlas.powerhouse.io/#A.1.8.2.2.8_Smart_Burn_Engine_Breaker_Exception-d82f2eb4-fe8b-4bc0-827e-9e3f859118b5|0db30758e055352c) based on a request from BA Labs. (This update has also been reviewed/approved by Ephy).*
- *Adds exemption for the Facilitator anonymity requirement for Ecosystem, based on discussion with Governance Facilitators.*
- *Makes minor updates to language in some places to incorporate initial feedback on Atlas v2.*

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- This associated Pull Request will be merged into the Atlas.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
