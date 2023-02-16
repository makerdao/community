---
title: Set $ilk Debt Ceiling Instant Access Module Parameters - $date_MONTH_DD,_YYYY
summary: Signal your support or opposition to using the Debt Ceiling Instant Access Module for $ilk with the listed parameters.
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
# Poll: Set $ilk Debt Ceiling Instant Access Module Parameters - $date_MONTH_DD,_YYYY

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Risk Core Unit. The community can vote in this poll to express support or opposition to using the Debt Ceiling Instant Access Module for $ilk with the listed parameters.

This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The proposed parameters for the $ilk Debt Ceiling Instant Access Module are:
* Collateral Type (`ilk`): $ilk
* Maximum Debt Ceiling (`line`): $line
* Target Available Debt (`gap`): $gap
* Ceiling Increase Cooldown (`ttl`): $ttl

Please review the discussion [thread]($discussion_link) to help inform your position before voting.

For more information regarding the Debt Ceiling Instant Access Module and how these parameters interact, check out the module documentation [here](https://manual.makerdao.com/module-index/module-dciam).

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

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).