---
title: Template - [Executive Vote] Curve stETH-ETH Onboarding, Rate Limited Flapper, Immunefi Bug Bounty Payouts - March 11, 2022
summary: Onboard Curve stETH-ETH LP tokens as the CRVV1ETHSTETH-A vault type, add rate limiter to the flapper contract, Immunefi Bug Bounty payouts.
date: 2022-03-11T00:00:00.000Z
address: "0xEEC1e1aef39309998d14615a177d989F37342cf1"

---
# [Executive Proposal] Curve stETH-ETH Onboarding, Rate Limited Flapper, Immunefi Bug Bounty Payouts - March 11, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes and additions** will occur within the Maker Protocol:
- Curve stETH-ETH LP tokens will be onboarded as a new collateral to the Maker Protocol as the CRVV1ETHSTETH-A vault type, parameters listed below.
- A new rate limiter, detailed below, will be added to the flapper contract.
- A total of 2,750 DAI will be transferred to two addresses, detailed below, as part of the [Immunefi Bug Bounty Program](https://mips.makerdao.com/mips/details/MIP64).

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Onboarding CRVV1ETHSTETH-A

As per this successful [governance poll](https://vote.makerdao.com/polling/Qmek9vzo), the CRVV1ETHSTETH-A vault type will be onboarded with the following parameters if this executive proposal passes.

-- Initial Collateral Parameters --

* Underlying Collateral: Curve stETH-ETH LP tokens.
* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): 3.5%*
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): 155%
* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): 3 million DAI*
* [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): 3 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): 8 hours
* [Debt Floor (`dust`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-floor): 25,000 DAI*

-- Liquidation Parameters --

* [Auction Price Function (`calc`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function): Stairstep Exponential Decrease
* [Price Change Multipler (`cut`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#exponential-stair-step): 0.99
* [Price Change Interval (`step`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#exponential-stair-step): 90 seconds
* [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier): 1.30
* [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty): 13%

-- Limits --

* [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit): 3 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration): 140 minutes
* [Breaker Price Tolerance (`tolerance`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-breaker-price-tolerance): 0.5

-- Incentives --

* [Proportional Kick Incentive (`kick`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incenctive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive): 300 DAI

**\*  Please note the updated parameters proposed by the Risk Core Unit (RISK-001) in this forum [post](https://forum.makerdao.com/t/curvelp-steth-eth-parameters-adjustment/13767).**

Please review the following forum threads containing information about CRVV1ETHSTETH-A to inform your position before voting.

* [Proposal Thread](https://forum.makerdao.com/t/curvelp-steth-eth-mip6-collateral-onboarding-application/10229)
* [Risk Core Unit Evaulation](https://forum.makerdao.com/t/curvelp-steth-eth-collateral-onboarding-risk-evaluation/11224)
* [Protocol Engineering Coure Unit Evaluation](https://forum.makerdao.com/t/curve-fi-eth-steth-erc20-token-smart-contract-technical-assessment/11855)
* [Oracles Core Unit Evaluation](https://forum.makerdao.com/t/curvelp-steth-eth-collateral-onboarding-oracle-assessment-mip10c3-sp43/11854)

### Add Rate Limiter to Flap Auctions

As per these successful governance polls [1](https://vote.makerdao.com/polling/QmagLVA2), [2](https://vote.makerdao.com/polling/Qmdd4Pg7) a new rate limiter, detailed below, will be added to the flapper contract if this executive proposal passes.

* [Modify the Flapper-Contract](https://forum.makerdao.com/t/rate-limited-flapper/13056) by introducing a rate limit so the protocol can control the amount of simultaneously running flap-auctions. This is achieved by limiting the amount of DAI that can be simultaneously auctioned for MKR.
* Add a parameter, `lid`, which sets the total value of DAI allowed to be sent out to [surplus (flap) auctions](https://auctions.makerdao.com/flap) at once.
* Set the `lid` parameter to **150,000 DAI**.

Please note this executive proposal does not include a change to the [System Surplus Buffer](https://manual.makerdao.com/parameter-index/core/param-system-surplus-buffer) which will remain at the current value of 250 million DAI.

Please review the following discussion threads to help inform your position before voting.

* [Rate Limited Flapper Outline](https://forum.makerdao.com/t/rate-limited-flapper/13056)
* [Proposal to Introduce the Rate Limited Flapper](https://forum.makerdao.com/t/signal-request-bring-back-the-mkr-burn/12837)
* [Rate Limiter Parameter Proposal](https://forum.makerdao.com/t/rate-limiter-parameter-proposal/13193)

### Immunefi Bug Bounty Payouts

As part of the [Immunefi Bug Bounty Program](https://mips.makerdao.com/mips/details/MIP64), a total of 2,750 will be transferred as follows if this executive proposal passes:

* **2,500 DAI** will be transferred to [0x3C32F2ca11D92a7093d1F237161C1fB692F6a8eA](https://etherscan.io/address/0x3C32F2ca11D92a7093d1F237161C1fB692F6a8eA).
* **250 DAI** will be transferred to [0x2BC5fFc5De1a83a9e4cDDfA138bAEd516D70414b](https://etherscan.io/address/0x2BC5fFc5De1a83a9e4cDDfA138bAEd516D70414b).

For further details, please see the relevant forum thread [here](https://forum.makerdao.com/t/bounty-payout-request-for-immunefi-bug-5565/13545).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
