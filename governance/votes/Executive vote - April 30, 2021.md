---
title: Template - [Executive Vote] Liquidations 2.0 Activations, Oracle Feed Changes - April 30, 2021
summary: Vote for this proposal for Liquidations 2.0 Activations and Oracle Feed Changes
date: 2021-04-30T00:00:00.000Z
address: "0x3Baab03C225eB9033FC6B73C16D310D56Afa922F"

---
# [Executive Proposal] Liquidations 2.0 Activations, Oracle Feed Changes - April 30, 2021

The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

**Liquidations 2.0**
- The ETH-A vault type will be added to the liquidations 2.0 framework with the parameters listed below.
- The ETH-B vault type will be added to the liquidations 2.0 framework with the parameters listed below.
- The ETH-C vault type will be added to the liquidations 2.0 framework with the parameters listed below.
- The WBTC-A vault type will be added to the liquidations 2.0 framework with the parameters listed below.

**Oracles**
- [DeFi Saver](https://defisaver.com/) will be onboarded as an Oracle Light Feed.
- The pseudonymous individual known as 'Lisko' will be offboarded as an Oracle Dark Feed.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

The next executive proposal will be submitted next Friday, potentially resulting in this executive proposal being replaced if it has not passed by that time.

---

## Proposal Details

### Liquidations 2.0

Given the successful outcomes of these polls for [ETH-A](https://vote.makerdao.com/polling/Qme8CTGu?network=mainnet), [ETH-B](https://vote.makerdao.com/polling/QmTBfsaB?network=mainnet), [ETH-C](https://vote.makerdao.com/polling/QmYU7BMP?network=mainnet) and [WBTC-A](https://vote.makerdao.com/polling/QmT63Z5v?network=mainnet); these vault types will be added to the liquidations 2.0 framework with the following parameters if this executive proposal passes:

**Common Parameters**  
These parameters are the same for each of the ETH-A, ETH-B, ETH-C, and WBTC-A vault types.

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3

**Limits**
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 8,400 seconds
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 0 DAI

**[Local Liquidation Limits (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit)**  
This parameter is different for each vault type.
* ETH-A Local Liquidation Limit (`ilk.hole`): 22 million DAI
* ETH-B Local Liquidation Limit (`ilk.hole`): 8 million DAI
* ETH-C Local Liquidation Limit (`ilk.hole`): 5 million DAI
* WBTC-A Local Liquidation Limit (`ilk.hole`): 15 million DAI

Further details and rationale can be found in the following [risk evaluation](https://forum.makerdao.com/t/eth-and-wbtc-vaults-liquidations-2-0-parameters/7628).

### Appoint DeFi Saver as Oracle Light Feed

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/Qmby2Ur5?network=mainnet#poll-detail), [DeFi Saver](https://defisaver.com/) will be onboarded as an Oracle Light Feed if this proposal passes.

Please see this light feed application [subproposal](https://forum.makerdao.com/t/mip10c14-sp7-proposal-appoint-defi-saver-as-a-light-feed/7207) for details and discussion. 

### Remove 'Lisko' as an Oracle Dark Feed

Given this opt-out [communication](https://forum.makerdao.com/t/dark-oracle-removal-request/7555), 'Lisko' will be removed as an oracle dark feed if this executive proposal passes.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
