---
title: Budget Ratification Poll for Modifying Strategic Finance Core Unit Budget, SF-001 (MIP40c3-SP93) - March 13, 2023
summary: MIP40c3-SP93 adds the DAI budget for the Strategic Finance Core Unit (SF-001).
discussion_link: https://forum.makerdao.com/t/mip40c3-sp93-modifying-strategic-finance-core-unit-budget-sf-001/19728
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
    - { type : default, value : 3 }
  result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Approve Base budget - 2,409,015 DAI
   2: Approve Bear budget - 1,981,140 DAI
   3: Reject budget
start_date: 2023-03-13T16:00:00
end_date: 2023-03-27T16:00:00
---
# Budget Ratification Poll for Modifying Strategic Finance Core Unit Budget, SF-001 (MIP40c3-SP93) - March 13, 2023

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle#week-2) will be active for fourteen days beginning on Monday, March 13 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP93 being accepted and implemented in the Maker Protocol by ranking their support of the following options:
* **Option 0:** Abstain.
* **Option 1:** Approve Base budget: 2,409,015 DAI.
* **Option 2:** Approve Bear budget: 1,981,140 DAI.
* **Option 3:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*MIP40c3-SP93 adds the DAI budget for the Strategic Finance Core Unit (SF-001). It contains: Total Budget Cap: The hard limit voted on by Governance, First-month forecast: The actual first-month estimated expenses, Breakdown of Permanent Team for the expected first payment (April). Note - the proposed budget covers the pre-game phase and may be changed significantly based on End Game plan changes, cluster & ecosystem actor funding, etc.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/17c852d048cc1cf65b7ffeebae7b89dfcc2839fb/MIP40/MIP40c3-Subproposals/MIP40c3-SP93.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP93)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp93-modifying-strategic-finance-core-unit-budget-sf-001/19728)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1 or Option 2 achieve a majority AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
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
