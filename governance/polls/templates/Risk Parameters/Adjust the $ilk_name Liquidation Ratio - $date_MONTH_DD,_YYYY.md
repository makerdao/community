---
title: Adjust the $ilk_name Liquidation Ratio - $date_MONTH_DD,_YYYY
summary: Signal your support or opposition for $IncreasingDecreasing the $ilk_name Liquidation Ratio from $current_ratio to $new_ratio.
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
# Poll: $IncreaseDecrease the $ilk_name Liquidation Ratio - $date_MONTH_DD,_YYYY

The Arbitration Facilitators have placed a Governance Poll into the voting system on behalf of the $poll_source. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

MKR Token Holders may vote in this poll to express support or opposition to the following [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) change:
* $IncreaseDecrease the $ilk_name Liquidation Ratio from $current_ratio to $new_ratio.

Please review the discussion [thread]($discussion_link) to inform your position on this issue before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option, then the following actions will be taken:**
* This parameter change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then this change will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option, then no further action will be taken at this time.**

---

## Resources

Unsure about the Liquidation Ratio parameter and what you should take into account when voting? Check out the parameter documentation [here](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
