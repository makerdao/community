---
title: Template - [Executive Vote] Collateral Onboarding and Offboarding, PSM DC-IAM changes - September 17, 2021
summary: Onboarding Gelato UniswapV3 DAI/USDC Pool, Offboarding legacy KNC token, and making Debt Ceiling Instant-access Module parameter changes for Peg Stability Modules.
date: 2021-09-17T00:00:00.000Z
address: "0x958ddD605BE8d0955F6AEec8569ad623e1130F02"

---
# [Executive Proposal] Collateral Onboarding and Offboarding, PSM DC-IAM changes - September 17, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The GUNIV3DAIUSDC1-A vault type will be onboarded to the Maker Protocol with the parameters detailed below.
- The process for offboarding the KNC-A vault type will begin as detailed below.
- Debt Ceiling Instant Access Module parameter changes will be made for PSM-PAX-A and PSM-USDC-A as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

 This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### GUNIV3DAIUSDC1-A Onboarding

Due to the outcome of this [governance poll](https://vote.makerdao.com/polling/QmZ5TESw?network=mainnet#poll-detail) the GUNIV3DAIUSDC1-A vault will be created with the parameters below if this executive proposal passes.

**Collateral Parameters**

* Underlying Collateral: [GUNI-DAI/USDC](https://forum.makerdao.com/t/g-uni-dai-usdc-uniswap-v3-lp-erc20-collateral-onboarding-application/9026)
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 1%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 105%
* [Debt Ceiling (`line`)](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 10 million DAI
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 10,000 DAI
* [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 10 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 8 hours


**Liquidation Parameters**

*Note that liquidations are **disabled** for this collateral type. The following parameters will only become relevant if liquidations are later enabled by Maker Governance.*

-- Core --
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.999
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 120 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.05
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

-- Limits --

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 5 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.9
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 220 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.95

-- Incentives --

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.10%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

**Further Information**

Please review the following forum threads containing information about GUNIV3DAIUSDC1-A (Gelato) to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/g-uni-dai-usdc-uniswap-v3-lp-erc20-collateral-onboarding-application/9026)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/g-uni-dai-usdc-collateral-onboarding-risk-evaluation/9719)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/guni-dai-usdc-erc20-token-smart-contract-technical-assessment/9139)
* [Oracles Core Unit  Evaluation](https://forum.makerdao.com/t/guni-dai-usdc-collateral-onboarding-oracle-assessment-mip10c3-sp41/10268)

### KNC-A Offboarding

As per the result of this governance [poll](https://vote.makerdao.com/polling/QmQ4Jotm?network=mainnet), the process to begin the offboarding of the KNC-A vault type will begin if this executive proposal passes. This process consists of two items:

1. Immediately lower the KNC-A [liquidation penalty (`chop`)](https://makerdao.world/en/learn/governance/param-liquidation-penalty) from 13% to 0% to avoid penalizing liquidated vaults.
2. Raise the KNC-A [liquidation ratio (`mat`)](https://makerdao.world/en/learn/governance/param-liquidation-ratio) from 175% to 5,000% over 60 days to liquidate the remaining KNC-A vaults.

Further details and discussion can be found in this [forum thread](https://forum.makerdao.com/t/signal-request-offboard-knc-legacy-token/10081).

### DC-IAM Changes for [Peg Stability Modules](https://makerdao.world/en/learn/governance/module-psm)

As per the results of this governance [poll](https://vote.makerdao.com/polling/QmbGPgxo?network=mainnet), several parameter changes will take place if this executive proposal passes.

* The [Debt Ceiling Instant Access Module (DC-IAM)](https://makerdao.world/en/learn/governance/module-dciam) will be activated for PSM-PAX-A with the following parameters:
  * Maximum Debt Ceiling (`line`): 500 million DAI
  * Target Available Debt (`gap`): 50 million DAI
  * Ceiling Increase Cooldown (`ttl`): 24 hours
* Reduce the PSM-USDC-A Target Available Debt (`gap`) from 1 billion DAI to 950 million DAI

Further details and discussion can be found on this forum [thread](https://forum.makerdao.com/t/signal-request-activate-dc-iam-for-psm-pax-a-and-adjust-dc-iam-gap-parameter-for-psm-usdc-a/10199) to help inform your position before voting.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
