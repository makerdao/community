---
title: $GenericChange - $date_MONTH_DD,_YYYY
summary: Rank your preferred options to resolve $GenericChange.
discussion_link: $discussion_link
parameters:
    input_format: rank-free
    victory_conditions:
        - { type : instant-runoff }
    result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: $A
   2: $B
   3: $C
   4: $D
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Poll:$GenericChange - $date_MONTH_DD,_YYYY

The $poll_deployers have placed a Governance Poll into the voting system on behalf of $poll_source. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.1_Operational_Weekly_Cycle-b189fa17-57a9-4d4e-9780-0ce4efd94211%7C0db30308) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is an instant-runoff vote.**

- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community can vote in this poll to rank their support of the following options:

- $A_Detailed
- $B_Detailed
- $C_Detailed
- $D_Detailed

Please review the discussion [thread]($discussion_link) to help inform your position before voting.

## Outcomes

**If a non-'Abstain' option receives more votes than each other option (excluding 'Abstain') and the votes for that option exceed 50% of the total votes cast then that option is deemed the winner and the following actions will be taken:**

- If the winner represents a change from the status quo, this change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) has expired.

**If no option has enough votes to exceed 50% of the total votes cast, then no further actions will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
