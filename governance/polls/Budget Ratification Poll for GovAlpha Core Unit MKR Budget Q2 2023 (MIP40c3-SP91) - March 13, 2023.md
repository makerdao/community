---
title: Budget Ratification Poll for GovAlpha Core Unit MKR Budget Q2 2023 (MIP40c3-SP91) - March 13, 2023
summary: This budget adds an MKR compensation plan for GovAlpha (GOV-001) covering the period from 2022-08-01 onwards.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp91-govalpha-core-unit-mkr-budget-q2-2023/19713
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
start_date: 2023-03-13T16:00:00
end_date: 2023-03-27T16:00:00
---
# Budget Ratification Poll for GovAlpha Core Unit MKR Budget Q2 2023 (MIP40c3-SP91) - March 13, 2023

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle#week-2) will be active for fourteen days beginning on Monday, March 13 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP91 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This budget adds an MKR compensation plan for GovAlpha (GOV-001) covering the period from 2022-08-01 onwards. The budget period will cover two years (i.e., until 2024-08-01), or until the Endgame Plan launches and GovAlpha (along with other Core Units) is dissolved, or until GovAlpha is offboarded through other means. This budget differs from previous GovAlpha MKR budgets, which covered retrospective six-month periods. The rationale for this change is discussed below.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/87bf5a5f3c342c5453ea4d4a364f7d57aeed2b08/MIP40/MIP40c3-Subproposals/MIP40c3-SP91.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP91)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp91-govalpha-core-unit-mkr-budget-q2-2023/19713)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, March 30.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).
* Note that if the Constitution MIP Set is approved this proposal will not be actioned, even if approved.

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
