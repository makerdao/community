---
title: IRV with Majority Budget Example
summary: Signal your support or opposition for the DUX CU Budget Options.
discussion_link: https://forum.makerdao.com/t/signal-request-set-psm-fees-to-0/10894
parameters:
  input_format:
    type: rank-free
    abstain: [0]
  victory_conditions:
    - { 
        type: 'and', 
        conditions: [
          { type : instant-runoff },
          { type: majority, percent: 50 },
          { type : comparison, comparator : '>=', value: 10000 }
        ]
      }
    - { type : default, value : 3 }
  result_display: instant-runoff-breakdown
version: v2.0.0   
options:
  0: Abstain
  1: Approve existing budget only (Business as usual)
  2: Approve increased budget
  3: Reject budget
start_date: 2022-08-08T16:00:00
end_date: 2022-08-11T16:00:00
---

# Poll: IRV with Majority Budget Example

This is an example of a budget subproposal for DUX ( ;) ) that uses IRV. The vote will be active for three days, beginning Monday, August 8 2022 at 16:00 UTC.

**This is an instant-runoff vote.** 
- **You may rank any number of options that you would support in an executive vote.** 
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

In this vote voters will be able to select from 4 options:

* Option 0: Abstain
* Option 1: Approve existing budget only (Business as susual) - x DAI
* Option 2: Approve Increased Budget - 10x DAI
* Option 3: Reject Budget

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to the latest DUX budget. They can choose from the following options:

* Approve existing budget of x DAI.
* Approve an increased budget of 10x DAI.
* Reject budget options.

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1 or Option 2 achieve a majority of non-abstain votes AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, June 30. 
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**
