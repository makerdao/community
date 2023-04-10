---
title: Budget Ratification Poll for Modifying Sidestream Auction Services Core Unit Budget (SAS-001) (MIP40c3-SP95) - March 13, 2023
summary: MIP40c3-SP95 modifies the DAI budget for the SAS-001 Core Unit, continuing operations from 2023-04-01 until 2024-03-31.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp95-modifying-sidestream-auction-services-core-unit-budget-sas-001/19737
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
   1: Approve existing budget - 1,130,392.56 DAI
   2: Approve reduced budget - 850,950 DAI
   3: Reject budget
start_date: 2023-03-13T16:00:00
end_date: 2023-03-27T16:00:00
---
# Budget Ratification Poll for Modifying Sidestream Auction Services Core Unit Budget (SAS-001) (MIP40c3-SP95) - March 13, 2023

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle#week-2) will be active for fourteen days beginning on Monday, March 13 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP95 being accepted and implemented in the Maker Protocol by ranking their support of the following options:

* **Option 0:** Abstain.
* **Option 1:** Approve existing budget - 1,130,392.56 DAI.
* **Option 2:** Approve reduced budget - 850,950 DAI.
* **Option 3:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*The original budget for SAS-001 expired on 30-Nov-2022. Afterward, SAS was allowed to operate on leftover funds to bridge the funding gap. This proposal creates a new budget stream for the Core Unit to continue operations from 2023-04-01 onwards.*

*The structure of the budget maximizes accountability in light of the current uncertainty on precise Endgame requirements. As SAS transitions towards becoming a Full-Stack Development Ecosystem Actor for the Endgame, this budget will cover:*

- *Pre-Project Endgame Work (current examples include: Contributing to Governance Security -Scope creation, Evaluation of a NoCode Tool for Spell creation, various contributions to increase developer accessibility)*
- *Maintenance of Existing Software (Auctions UI and APIs, …)*

*As we want to operate as transparently as possible, every time SAS finds an opportunity with a clearly defined project with a fixed budget, we’ll use the project budget instead of the CU budget.*

*A current example: For at least the next two months, we’ll be working on the Ecosystem API (Switchboard) Project. The respective monthly project budget will cover 60-80 % of the monthly CU budget. This means that 60-80 % of the SAS CU budget during these months will be refunded to the DAO. Overtime, as more Endgame projects become clearer, there will be various project budgets available. Therefore, the CU budget will be used less.*

*This subproposal creates a new budget stream for the Core Unit to continue operations from 2023-04-01 to 2024-03-31.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/0966a7d3d69d42701051fe3013ec55750d1672ea/MIP40/MIP40c3-Subproposals/MIP40c3-SP95.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP95)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp95-modifying-sidestream-auction-services-core-unit-budget-sas-001/19737)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1 or Option 2 achieve a majority AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, March 30. 
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
