---
title: Add $ilk as a new Vault Type - $date_MONTH_DD,_YYYY
summary: This poll proposes system parameters which could be used to initialize $ilk as a new vault type.
discussion_link: $proposal_thread
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Poll: Add $ilk as a new Vault Type - $date_MONTH_DD,_YYYY

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the MakerDAO mandated actors. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding $ilk ($asset_name) as a new vault type in the Maker Protocol with the parameters below:

### Initial Collateral Parameters

* Underlying Collateral: $collateral_asset
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): $stability_fee
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): $liquidation_ratio
* [Debt Ceiling (`line`)](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): $debt_ceiling
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): $debt_floor

### Liquidation Parameters

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): $calc_parameter
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): $cut_parameter
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): $step_parameter
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): $buf_parameter
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): $chop_parameter

**Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): $ilk-hole-parameter
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): $cusp-parameter
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): $tail-parameter
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): $tolerance-parameter

**Incentives**

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): $chip-parameter
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): $tip-parameter

Please review the following forum threads containing information about $ilk ($asset_name) to inform your position before voting.
* [Proposal Thread]($proposal_thread)
* [Risk Core Unit Evaluation]($risk_link)
* [Protocol Engineering Core Unit Evaluation]($pe_link)
* [Oracles Core Unit Evaluation]($oracles_link)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* $ilk ($asset_name) will be onboarded in a future executive vote as the Protocol Engineering Core Unit's schedule allows. 
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
