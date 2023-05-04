---
title: Add $collateral Peg Stability Module - $date_MONTH_DD,_YYYY
summary: Signal your support or opposition to onboarding a $collateral Peg Stability Module.
discussion_link: $proposal_thread
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
# Poll: Add a $collateral Peg Stability Module - $date_MONTH_DD,_YYYY

The Arbitration Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Community. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the onboarding and deployment of a new $collateral Peg Stability Module with the parameters given below.

**Proposed $collateral PSM Parameters**

* [Fee In](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) (`tin`): $tin
* [Fee Out](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) (`tout`): $tout
* [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) (`line`): $line
* [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) (`gap`): $gap
* [Ceiling Increase Cooldown](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) (`ttl`): $ttl

Please review the following threads to help inform your position before voting:
- [$first_thread]($first_thread_url)
- [$second_thread]($second_thread_url)
- [$third_thread]($third_thread_url)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The $collateral PSM will be onboarded in a future executive vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
