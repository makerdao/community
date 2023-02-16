---
title: Add $ilk as a new Vault Type - $date_MONTH_DD,_YYYY
summary: This poll proposes system parameters which could be used to initialize $ilk as a new vault type.
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
# Poll: Add $ilk as a new Vault Type - $date_MONTH_DD,_YYYY

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Community. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding $ilk ($asset_name) as a new vault type in the Maker Protocol with the parameters below:

### Initial Vault Parameters

* Underlying Collateral: $collateral_asset
* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): $stability_fee
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): $liquidation_ratio
* [Debt Floor (`dust`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-floor): $debt_floor
* $If not using DC-IAM
* [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): $debt_ceiling
* $If using DC-IAM
* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): $maximum_debt_ceiling
* [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): $target_available_debt
* [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): $ceiling_increase_cooldown

### Liquidation Parameters

* [Auction Price Function (`calc`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function): $calc_parameter
* [Price Change Multiplier (`cut`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#exponential-stair-step): $cut_parameter
* [Price Change Interval (`step`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#exponential-stair-step): $step_parameter
* [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier): $buf_parameter
* [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty): $chop_parameter

**Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit): $ilk-hole-parameter
* [Maximum Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown): $cusp-parameter
* [Maximum Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration): $tail-parameter
* [Breaker Price Tolerance (`tolerance`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-breaker-price-tolerance): $tolerance-parameter

**Incentives**

* [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive): $chip-parameter
* [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive): $tip-parameter

Please review the following forum threads containing information about $ilk ($asset_name) to inform your position before voting.
* [Proposal Thread]($proposal_thread)
* [Risk Core Unit Evaluation]($risk_link)
* [Protocol Engineering Core Unit Evaluation]($pe_link)
* [Oracles Core Unit Evaluation]($oracles_link)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* $ilk ($asset_name) will be onboarded in a future executive vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).