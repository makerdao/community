---
title: $GenericChange - $date_MONTH_DD,_YYYY
summary: Signal your preferred option to resolve $GenericChange.
discussion_link: $discussion_link
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
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

The Arbitration Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Community. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a plurality vote.**
- **You may vote for a single option.**
- **You should vote for the option that you prefer.**
- **If you would accept any of the options you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support for one of the following options:
* $A_Detailed
* $B_Detailed
* $C_Detailed
* $D_Detailed

Please review the discussion [thread]($discussion_link) to help inform your position before voting.

## Outcomes

**The non-'Abstain' option with the most votes is deemed the winner and the following actions will be taken:**
* If the winner represents a change from the status quo, this change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
