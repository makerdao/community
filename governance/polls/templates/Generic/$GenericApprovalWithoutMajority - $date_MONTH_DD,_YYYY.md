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
    - { type : approval }
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

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the $poll_source. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is an approval vote to select a single winning outcome.**
- **You may vote for multiple options.**
- **You should select all the options that you would support in an executive vote.**
- **Unselected options signal that you do not approve of those options and would not support the option(s) in an executive vote.**
- **If you wish to abstain, that should be your one and only choice.**

## Review

The community can vote in this poll to express support or opposition to the following changes:
* $GenericChangeA
* $GenericChangeB
* $GenericChangeC

Please review the discussion [thread]($discussion_link) to help inform your position before voting.

## Outcomes

**The non-'Abstain' option with the most votes is deemed the winner, if it represents a change from the status quo the following actions will be taken:**
* This change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
