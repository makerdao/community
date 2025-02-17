---
title: $GenericChange - $date_MONTH_DD,_YYYY
summary: Signal your support or opposition to $GenericChange.
discussion_link: $discussion_link
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
        ]
      }
    - { type : default, value : $StatusQuoOrRejectOptionNumber }
  result_display: approval-breakdown
options:
   0: Abstain
   1: $Option1
   2: $Option2
   3: $Option3
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Poll:$GenericChange - $date_MONTH_DD,_YYYY

The $poll_deployers have placed a Governance Poll into the voting system on behalf of the $poll_source. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.1_Operational_Weekly_Cycle-b189fa17-57a9-4d4e-9780-0ce4efd94211%7C0db30308) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is an approval vote to select a single winning outcome.**

- **You may vote for multiple options.**
- **You should select all the options that you would support in an executive vote.**
- **Unselected options signal that you do not approve of those options and would not support the option(s) in an executive vote.**
- **If you wish to abstain, that should be your one and only choice.**

## Review

The community can vote in this poll to express support or opposition to the following changes:

- $GenericChangeA
- $GenericChangeB
- $GenericChangeC

Please review the discussion [thread]($discussion_link) to help inform your position before voting.

## Outcomes

**The winner of this vote requires an overall majority of votes to support it. The non-`Abstain` option with the most votes AND the support of a majority of votes is deemed the winner and the following actions will be taken:**

- This change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) has expired.

**If the condition above is not met, then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).

