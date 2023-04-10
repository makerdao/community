---
title: Budget Ratification Poll for GovAlpha Core Unit DAI Budget 2023-2024 (MIP40c3-SP90) - March 13, 2023
summary: MIP40c3-SP90 provides voters with a choice of three DAI budgets for the GovAlpha Core Unit for 12 months, starting on 2023-04-01 and ending on 2024-03-31.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp90-govalpha-core-unit-dai-budget-2023-2024/19712
parameters:
  input_format:
    type: rank-free
    abstain: [0]
  victory_conditions:
    - {
        type: 'and',
        conditions: [
          { type : instant-runoff },
          { type : comparison, comparator : '>=', value: 10000 }
        ]
      }
    - { type : default, value : 4 }
  result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Approve BasePlus budget - 904,805 DAI
   2: Approve Base budget - 805,805 DAI
   3: Approve SuperBear budget - 674,905 DAI
   4: Reject budget
start_date: 2023-03-13T16:00:00
end_date: 2023-03-27T16:00:00
---
# Budget Ratification Poll for GovAlpha Core Unit DAI Budget 2023-2024 (MIP40c3-SP90) - March 13, 2023

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle#week-2) will be active for fourteen days beginning on Monday, March 13 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP90 being accepted and implemented in the Maker Protocol by ranking their support of the following options:
* **Option 0:** Abstain.
* **Option 1:** Approve BasePlus budget: 904,805 DAI.
* **Option 2:** Approve Base budget 805,805 DAI DAI.
* **Option 3:** Approve SuperBear budget: 674,905 DAI.
* **Option 4:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*MIP40c3-SP90 provides voters with a choice of three DAI budgets for the GovAlpha Core Unit for 12 months, starting on 2023-04-01 and ending on 2024-03-31. All three budgets represent an overall reduction in DAI amount requested from last year, with a minimum reduction of 18.47% and a maximum reduction of 39.19%. DssVest will be used to implement the chosen budget through a 12-month stream.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/87bf5a5f3c342c5453ea4d4a364f7d57aeed2b08/MIP40/MIP40c3-Subproposals/MIP40c3-SP90.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP90)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp90-govalpha-core-unit-dai-budget-2023-2024/19712)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1, Option 2, or Option 3 achieve a majority AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
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
