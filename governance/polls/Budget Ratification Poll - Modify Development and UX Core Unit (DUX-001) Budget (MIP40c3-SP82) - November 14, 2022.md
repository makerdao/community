---
title: Budget Ratification Poll for Modify Development and UX Core Unit (DUX-001) Budget (MIP40c3-SP82) - November 14, 2022
summary: MIP40c3-SP82 renews the Development & UX Core Unit (DUX-001) budget from February 1st 2023 through January 31st 2024.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp82-development-ux-core-unit-budget-dux-001/17611
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
   1: Approve existing budget only 
   2: Approve reduced budget - NewBase 
   3: Approve reduced budget - NewBear 
   4: Reject budget
start_date: 2022-11-14T16:00:00
end_date: 2022-11-28T16:00:00
---
# Budget Ratification Poll for Modify Development and UX Core Unit (DUX-001) Budget (MIP40c3-SP82) - November 14, 2022

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, November 14 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP82 being accepted and implemented in the Maker Protocol by ranking their support of the following options:
* **Option 0:** Abstain.
* **Option 1:** Approve existing budget only (Business as usual): 1,871,300 DAI
* **Option 2:** Approve reduced budget (NewBase): 1,611,420 DAI
* **Option 3:** Approve reduced budget (NewBear): 1,426,416 DAI
* **Option 4:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*MIP40c3-SP82 renews the Development & UX Core Unit (DUX-001) budget from February 1st 2023 through January 31st 2024, and is written in accordance with the latest MIP40 amendment. This budget proposal is written in recognition of today’s bearish market context and the DAO’s intent to cut costs. In this proposal we provide two distinct budget options that both represent a significant (>10%) bottom-line budget reduction for our Core Unit without impairing execution of our mandate. We collectively decided to not include any raises or bonuses in this budget proposal.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/247f11f556ad5b2be78525c7fa6c9966da76ecec/MIP40/MIP40c3-Subproposals/MIP40c3-SP82.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP82)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp82-modify-development-ux-core-unit-budget-dux-001/17611)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1, Option 2, or Option 3 achieve a plurality AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, December 1.
* The resulting budget stream will be implemented via an executive vote, as the [Protocol Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP7)'s schedule allows.

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
