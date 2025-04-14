---
title: Atlas Edit Monthly Cycle Proposal (AEP-10) - April 14, 2025
summary: This Atlas Edit Proposal aims to make Aligned Delegate and Facilitator anonymity optional.
discussion_link: https://forum.sky.money/t/aep-10-making-delegate-anonymity-optional/26205
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
start_date: 2025-04-14T16:00:00
end_date: 2025-04-28T16:00:00
---
# Atlas Edit Monthly Cycle Proposal (AEP-10) - April 14, 2025

The Governance Facilitators have placed an [Atlas Edit Monthly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.11.2_Atlas_Edit_Monthly_Cycle/430185a5-fa5d-4664-89cf-21c9e6cfc109%7C0db3326e) into the [voting system](https://vote.makerdao.com/polling). This Governance Poll will be active for fourteen days beginning on Monday, April 14 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Monthly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/81)
- [Proposal Discussion Thread](https://forum.sky.money/t/aep-10-making-delegate-anonymity-optional/26205)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*We currently require AD’s to stay anonymous and even pay bounties for users to reveal their identities. This is likely a large reason AD’s keep communications to a minimum to avoid being doxed. They cannot attend events in person, cannot speak personally, they are incentivized to participate less in Sky. They constantly have a target on their back. What the point of having a request for comments stage of Atlas proposals if people are pushed to never comment? I am pushing this proposal to make anonymity optional for AD’s, they can choose whether they want to be anonymous or not, and the bounty system will be eliminated. Should any member ever be sued, we have a legal defense fund. I’m also going to include in this proposal funding emergencies to defend AD’s such as if they need relocation or security. Going into the future we want active public governance, not cloak and dagger. Also on a practical note, why are we paying people to dox our delegates? That seems like a waste of money that can be better put to use elsewhere. We are not Silk Road and acting like it makes us seem criminal.*

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Monthly Cycle Proposals is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 10,000 MKR, then the following action will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
