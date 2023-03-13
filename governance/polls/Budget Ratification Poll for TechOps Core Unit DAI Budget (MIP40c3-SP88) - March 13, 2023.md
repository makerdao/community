---
title: Budget Ratification Poll for TechOps Core Unit DAI Budget (MIP40c3-SP88) - March 13, 2023
summary: MIP40c3-SP88 renews the TechOps Core Unit (TECH-001) annual budget from April 1st 2023 through to March 31st 2024.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp88-techops-core-unit-dai-budget/19017
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
   1: Approve NewBase budget - 1,666,722 DAI
   2: Approve NewBear budget - 1,368,924 DAI
   3: Reject budget
start_date: 2023-03-13T16:00:00
end_date: 2023-03-27T16:00:00
---
# Budget Ratification Poll for TechOps Core Unit DAI Budget (MIP40c3-SP88) - March 13, 2023

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle#week-2) will be active for fourteen days beginning on Monday, March 13 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP88 being accepted and implemented in the Maker Protocol by ranking their support of the following options:
* **Option 0:** Abstain.
* **Option 1:** Approve NewBase budget: 1,666,722 DAI.
* **Option 2:** Approve NewBear budget: 1,368,924 DAI.
* **Option 3:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*The TechOps Core Unit handles system administration and technical support needs of Maker Protocol and its Core Units. TECH-001 strives to improve communication and collaboration between the developers, end users, and other MakerDAO stakeholders by applying DevOps principles to software delivery and first-class technical support. For the past year, TECH-001 has been delivering infrastructure and support in an automated, safe, fast, and repeatable way with the help from some of the modern Infrastructure Administration tools, while continuously monitoring and improving our process throughout.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/3acee4a1998e2521c6020be8c1603ce1346db34c/MIP40/MIP40c3-Subproposals/MIP40c3-SP88.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP88)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp88-techops-core-unit-dai-budget/19017)

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
