---
title: POLL PARAMETERS Rank Free Approval
summary: Signal your support or opposition for setting the Fee In (tin) and Fee Out (tout) parameters to 0% for all PSM vaults.
discussion_link: https://forum.makerdao.com/t/signal-request-set-psm-fees-to-0/10894
parameters:
  input_format: rank-free
  victory_conditions:
    - { type : approval, options: [0,1,2] }
    - { type : comparison, options: [0,1,2], comparator : '>=10000' }
    - { type : default, value : 2 }
  result_display: approval-breakdown
options:
  0: Approve existing budget only (Business as usual)
  1: Approve increased budget
  2: Reject budget
  3: Abstain
version: v2.0.0   
start_date: 2022-03-06T16:00:00
end_date: 2029-11-05T16:00:00
---

# Poll: RANK FREE, APPROVAL EXAMPLE

This is a test poll of the approval victory condition.

It requires more than 10,000 MKR in either option to be the winner. If no winner is choosen, the default winner is option 2 (Reject).
