---
title: POLL PARAMETERS Approval voting + majority of 50%  with default to 3
summary: Signal your support or opposition for setting the Fee In (tin) and Fee Out (tout) parameters to 0% for all PSM vaults.
discussion_link: https://forum.makerdao.com/t/signal-request-set-psm-fees-to-0/10894
parameters:
  input_format: 
    type: choose-free
    options: [1,2]
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
    - { type : default, value : 2 }
  result_display: approval-breakdown
options:
  0: Abstain
  1: Approve existing budget only (Business as usual)
  2: Approve increased budget
  3: Reject budget
  4: None of the above
version: v2.0.0   
start_date: 2022-03-06T16:00:00
end_date: 2029-11-05T16:00:00
---

# Poll: RANK FREE, APPROVAL EXAMPLE

This is a test poll of the approval victory condition.

It requires more than 10,000 MKR in either option to be the winner. If no winner is choosen, the default winner is option 2 (Reject).
