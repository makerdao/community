---
title: Atlas Edit Weekly Cycle Proposal - May 5, 2025
summary: This Atlas Edit 1) defines the process for the MKR-to-SKY upgrade, 2) updates the entities authorized to validate Standby Spells, 3) adds documentation regarding Protego, 4) clarifies the short-term logic for Agent Artifact updates, 5) removes the outdated document for recentering the Maker brand.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-5-2025/26319
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
start_date: 2025-05-05T16:00:00
end_date: 2025-05-08T16:00:00
---
# Atlas Edit Weekly Cycle Proposal - May 5, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.1.1_Edits_To_The_Atlas/115f2ff0-8d73-80a9-af46-ef481d81934e%7C0db303084211) into the [voting system](https://vote.makerdao.com/polling) [on behalf of Prime Delegate cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-5-2025/26319/4). This Governance Poll will be active for three days beginning on Monday, May 5 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/103)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-5-2025/26319/1)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Define Process For MKR To SKY Upgrade** - Defines the process to upgrade the governance token of the Sky Protocol from MKR to SKY._
- _**Update Entities Authorized To Validate Standby Spells** - Provides two additional entities in the Governance Facilitators teams with the authority to validate Standby Spells._
- _**Add Documentation Regarding Protego** - Defines logic for the Protego contract._
- _**Clarify Short-Term Logic For Agent Artifact Updates** - Defines short-term logic for updating Agent Artifacts._
- _**Remove Outdated Document For Recentering Maker Brand** - Removes an outdated document regarding a process that took place in November 2024._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **20,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 20,000 MKR, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
