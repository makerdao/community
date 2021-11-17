---
title: Template - [Executive Vote] Parameter Changes, WSTETH-A Onboarding - October 22, 2021
summary: Raises GUNIV3DAIUSDC1-A Debt Ceiling, adjusts DC-IAM Parameters for ETH-A, ETH-B, and WBTC-A, and onboards WSTETH-A (Wrapped Staked ETH).
date: 2021-10-22T00:00:00.000Z
address: "0xc0Dc70048F678e0c9DA82aD11CdC063aA081d950"

---
# [Executive Proposal] Parameter Changes, WSTETH-A Onboarding - October 22, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- GUNIV3DAIUSDC1-A [Debt Ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling) will be **increased** from 10 million DAI to 50 million DAI.
- ETH-A, ETH-B, and WBTC-A will have multiple [Debt Ceiling Instant Access Module](https://makerdao.world/en/learn/governance/module-dciam) Parameters adjusted as detailed below.
- WSTETH-A (Wrapped Staked ETH) vault type will be onboarded to the Maker Protocol with the parameters detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### GUNIV3DAIUSDC1-A  Debt Ceiling

As per [this poll](https://vote.makerdao.com/polling/QmU6fTQx?network=mainnet#poll-detail), the GUNIV3DAIUSDC1-A [Debt Ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling) will be **increased** from 10 million DAI to 50 million DAI if this executive proposal passes.

For more information, please see [this thread](https://forum.makerdao.com/t/request-to-raise-the-g-uni-dc-to-50m/10838) recommending this adjustment. 

### Debt Ceiling - Instant Access Module Parameter Updates 

As per [this poll](https://vote.makerdao.com/polling/QmP6GPeK?network=mainnet#poll-detail), several changes to the Debt Ceiling Instant Access Module](https://makerdao.world/en/learn/governance/module-dciam) Parameters of ETH-A, ETH-B, and WBTC-A will be made as detailed below if this executive proposal passes.

**ETH-A**
* Increase [Target Available Debt](https://makerdao.world/en/learn/governance/module-dciam) (`gap`) from 100 million DAI to 150 million DAI.
* Decrease [Ceiling Increase Cooldown](https://makerdao.world/en/learn/governance/module-dciam) (`ttl`) from 8 hours to 6 hours.

**ETH-B**
* Increase [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) (`line`) from 300 million DAI to 500 million DAI.
* Increase [Target Available Debt](https://makerdao.world/en/learn/governance/module-dciam) (`gap`) from 10 million DAI to 20 million DAI.
* Decrease [Ceiling Increase Cooldown](https://makerdao.world/en/learn/governance/module-dciam) (`ttl`) from 8 hours to 6 hours.

**WBTC-A**
* Increase [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) (`line`) from 750 million DAI to 1.5 billion DAI.
* Increase [Target Available Debt](https://makerdao.world/en/learn/governance/module-dciam) (`gap`) from 30 million DAI to 60 million DAI.
* Decrease [Ceiling Increase Cooldown](https://makerdao.world/en/learn/governance/module-dciam) (`ttl`) from 8 hours to 6 hours.

### WSTETH-A Onboarding

As per [this poll](https://vote.makerdao.com/polling/QmXXHpYi?network=mainnet#poll-detail) WSTETH-A will be onboarded with the following parameters if this executive proposal passes.

#### Initial Collateral Parameters

* Underlying Collateral: wstETH (Wrapped Staked ETH)
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 4%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 160%
* [Debt Ceiling (`line`)](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 5 million DAI
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 10,000 DAI
* [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 3 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 8 hours

#### Liquidation Parameters

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

**Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 3 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 140 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

For more information, please review the following forum threads containing information about wstETH (Wrapped Staked ETH) to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/steth-mip6-collateral-onboarding/5762)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/steth-collateral-onboarding-risk-evaluation/9061)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/steth-erc20-token-smart-contract-technical-assessment/9284)
* [Oracles Core Unit Evaluation](https://forum.makerdao.com/t/wsteth-collateral-onboarding-oracle-assessment-mip10c3-sp42/10881)

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
