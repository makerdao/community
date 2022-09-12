---
title: Ratification Poll for Modify GovAlpha Core Unit MKR Budget (MIP40c3-SP80) - September 12, 2022
summary: This budget proposes a MKR compensation for GovAlpha (GOV-001) with a vesting component (Q3 2022).
discussion_link: https://forum.makerdao.com/t/mip40c3-sp80-modify-govalpha-core-unit-mkr-budget-q3-2022/17164
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
   1: 200% multiplier (330.27 total MKR)
   2: 150% multiplier (247.70 total MKR)
   3: 100% multiplier (165.14 total MKR)
   4: Reject Budget
start_date: 2022-09-12T16:00:00
end_date: 2022-09-26T16:00:00
---
# Ratification Poll for Modify GovAlpha Core Unit MKR Budget (MIP40c3-SP80) - September 12, 2022

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, September 12 at 16:00 UTC.

**This is an instant-runoff vote.** 
- **You may rank any number of options that you would support in an executive vote.** 
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP80 being accepted and implemented in the Maker Protocol by ranking their support of the following options:

* **Option 1 (CU preferred):** 200% multiplier applied: **330.27 total MKR**.
* **Option 2:** 150% multiplier applied: **247.70 total MKR**.
* **Option 3:** 100% multiplier applied: **165.14 total MKR**
* **Option 4:** Reject MKR vesting.

A brief summary of this proposal has been provided by the proposal Author and is shown below:

*"This proposal seeks the ranked choice vote on the following vesting allocations to GovAlpha contributors, covering MKR compensation for the Core Unit for the past 6 months. Subsequent requests will take place every 6 months, featuring the same 12-month cliff. Contributors **do not** forfeit their vesting upon leaving GovAlpha, provided that their departure is a smooth transition and there have been no serious ethical breaches. The table below represents the MKR amounts expressed in a lump sum and per Full-Time Equivalent worker per year:"* 

| *Option*        | *MKR Total* | *MKR/FTE/YEAR* |
| --------------- | ----------- |---------------|
| *200% Multiplier* | *330.27*      | *153.61*        |
| *150% Multiplier* | *247.70*      | *115.21*        |
| *100% Multiplier* | *165.14*      | *76.81*         |

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/115e97a7abd977b192ff67c2a7b1da9663e88c77/MIP40/MIP40c3-Subproposals/MIP40c3-SP80.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP80)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp80-modify-govalpha-core-unit-mkr-budget-q3-2022/17164)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1, Option 2, or Option 3 achieve a majority AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, September 29. 
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).