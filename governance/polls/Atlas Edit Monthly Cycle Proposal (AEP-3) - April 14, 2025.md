---
title: Atlas Edit Monthly Cycle Proposal (AEP-3) - April 14, 2025
summary: This Atlas Edit Proposal aims to introduce a monthly community meeting to The Atlas.
discussion_link: https://forum.sky.money/t/aep-03-monthly-developer-ad-community-meetings/25991
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
# Atlas Edit Monthly Cycle Proposal (AEP-3) - April 14, 2025

The Governance Facilitators have placed an [Atlas Edit Monthly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.10.2_Atlas_Edit_Monthly_Cycle-430185a5-fa5d-4664-89cf-21c9e6cfc109|0db3326e) into the [voting system](https://vote.makerdao.com/polling). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for fourteen days beginning on Monday, April 14 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/86)
- [Proposal Discussion Thread](https://forum.sky.money/t/aep-03-monthly-developer-ad-community-meetings/25991)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*To enhance communication, transparency, and cohesion among the DAO and better keep things organized I am proposing to adopt a system similar to most DAOs/ETH-style governance and have monthly discord meetings. This would not just be for Sky DAO but for the sub-DAO’s as well to attend so that everyone is up to date on what is going on and have a chance to interact. These meetings will be recorded and posted to Youtube so that future users may look up past decisions/discussions. How I envision this working is that every month there is a meeting of all Sky employees where they can discuss what is going on and communicate between themselves while the audience is muted. AD’s will be required to attend 1 in 3 meetings, missing 3 in a row results in disqualification. Once the employees are done, the AD’s will be able to ask questions and discuss monthly governance proposals. Once the AD’s are finished, there will be a 20 minute question period for the community to ask questions. I will note that all other organizations wishing to cooperate with Sky must ask on the forum, this would not be a period for advertising. Edit: To add, AD’s can write down their questions they don’t need to talk (due to the anonymity requirements for AD’s).*

Additional information about the processing of AEP-3 can be found [here](https://forum.sky.money/t/clarifications-regarding-aeps-3-and-8/26271).
## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 10,000 MKR, then the following action will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
