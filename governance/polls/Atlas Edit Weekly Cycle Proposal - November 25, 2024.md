---
title: Atlas Edit Weekly Cycle Proposal - November 25, 2024
summary: Signal your support or opposition to the multiple listed Atlas Edits in the weekly cycle.
discussion_link: https://forum.sky.money/t/2024-11-25-atlas-edit-weekly-cycle-forum-proposal/25590
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
start_date: 2024-11-25T16:00:00
end_date: 2024-11-28T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - November 25, 2024

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate JuliaChang](https://forum.sky.money/t/2024-11-25-atlas-edit-weekly-cycle-forum-proposal/25590/2). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, November 25 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/50)
- [Proposal Discussion Thread](https://forum.sky.money/t/2024-11-25-atlas-edit-weekly-cycle-forum-proposal/25590)

*Changes to the Atlas in this edit include:*

- ***Emergency Response System** - Generalizes previous content regarding the Emergency Voting System to an Emergency Response System, including an Emergency Response Group.*
- ***Emergency Spells** - Adds documentation regarding Emergency Spells, and in particular a new category of Standby Spells.*
- ***Aligned Delegate Budget And Participation Requirements** - Adds a requirement for Prime Delegates to use emergency communications tools.*
- ***Integrator Program** - Clarifies that Integrators are responsible for complying with laws and regulations in all jurisdictions in which they operate.*
- ***Early Bird Reward** - Reorganizes Early Bird Reward logic and updates it to reflect the fact that the Early Bird Reward program has largely been completed.*
- ***AD Payout Process** - Specifies the monthly compensation cycle for Aligned Delegates in greater detail.*
- ***Add Debt Writeoff Timelock Parameter for DDMs** - Adds documentation regarding the debt writeoff timelock parameter for the Spark Dai Direct Deposit Module.*
- ***Document Additional SparkLend Risk Parameters** - Adds documentation regarding flash loan parameters for Spark.*
- ***Add Definition Of Surplus Buffer** - Adds a definition of the Surplus Buffer to the Atlas*.
- ***Update Language Regarding Facilitator Selection Process** - Clarifies that Sky Governance continues to select the Facilitators responsible for each Scope after the launch of Stars.*
- ***Miscellaneous Changes** - Removes Annotations targeting documents that were previously deleted and updates the titles of some documents.*


## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 20,000 MKR, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
