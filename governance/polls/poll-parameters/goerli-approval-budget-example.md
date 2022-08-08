---
title: Approval Voting with Majority Budget Example
summary: Signal your support or opposition for the DUX CU Budget Options.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp52-development-ux-core-unit-budget-dux-001/12085
parameters:
  input_format: 
    type: choose-free
    options: [1,2,3]
    abstain: [0]
  victory_conditions:
    - { 
        type: 'and', 
        conditions: [
          { type : approval },
          { type: majority, percent: 50 },
          { type : comparison, comparator : '>=', value: 10000 }
        ]
      }
    - { type : default, value : 3 }
  result_display: approval-breakdown
options:
  0: Abstain
  1: Approve existing budget only (Business as usual)
  2: Approve increased budget
  3: Reject budget
version: v2.0.0   
start_date: 2022-08-08T16:00:00
end_date: 2022-08-11T16:00:00
---

# Poll: Approval Voting with Majority Budget Example

This is an example of a budget subproposal for DUX ( ;) ) that uses approval voting. The vote will be active for three days, beginning Monday, August 8 2022 at 16:00 UTC.

**This is an approval vote.**

- **You may vote for multiple options.**
- **You should select all the options that you support.**
- **If you wish to abstain, that should be your one and only choice.**

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

If the score for option 1 or option 2 exceeds 50% AND the votes for the highest scoring option exceed **10,000 MKR**, the highest scoring option that exceeds 50% will be the winner. The following actions will then be taken:

* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, June 30. 
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

If none of the options exceed 50% approval, the proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).


