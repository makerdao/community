---
title: Adjust $protocol_name D3M Parameters - $date_MONTH_DD,_YYYY
summary: Signal your support or opposition to adjusting the $protocol_name DAI Direct Deposit Module (D3M) parameters.
discussion_link: $discussion_link
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Poll: Adjust $protocol_name D3M Parameters - $date_MONTH_DD,_YYYY

The Arbitration Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the Risk Core Unit. The community can vote in this poll to express support or opposition to using the $protocol_name Direct Deposit DAI Module (D3M) with the listed parameters. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to making the following parameter changes to the $protocol_name DAI Direct Deposit Module (D3M):
* $IncreaseDecrease the DIRECT-$protocol_name-DAI [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from $current_line to $new_line.
* $IncreaseDecrease the DIRECT-$protocol_name-DAI [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) from $current_gap to $new_gap.
* $IncreaseDecrease the DIRECT-$protocol_name-DAI Target Borrow Rate (`bar`) from %current_bar to $new_bar.

Please review the discussion [thread]($discussion_link) to help inform your position before voting.

For more information regarding the DAI Direct Deposit Module (D3M) and how these parameters interact, check out the forum thread [here](https://forum.makerdao.com/t/discussion-direct-deposit-dai-module-d3m/7357).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These parameter changes will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
