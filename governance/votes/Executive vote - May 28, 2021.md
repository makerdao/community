---
title: Template - [Executive Vote] Urgent Changes, Oracle Whitelisting, Liquidations 2.0 Activations - May 28, 2021
summary: Vote for Urgent Changes, Oracle Whitelisting, Liquidations 2.0 Activations
date: 2021-05-28T00:00:00.000Z
address: "0x671eA626229F829Eb711FFa141734d211bEb66A7"

---
# [Executive Proposal] Urgent Changes, Oracle Whitelisting, Liquidations 2.0 Activations - May 28, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The **PSM-USDC-A** Debt Ceiling will increase from 2 billion DAI to 3 billion DAI.
- The Flat Kick Incentive (`tip`) will increase from 0 DAI to 300 DAI for all vault types with active liquidations.
- [B.Protocol](https://www.bprotocol.org/) will be whitelisted on the **WBTC** OSM and Medianizer Oracles.
- The **UNIV2DAIETH-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2USDCETH-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2ETHUSDT-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2WBTCDAI-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2WBTCETH-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2LINKETH-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2UNIETH-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2AAVEETH-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **UNIV2DAIUSDT-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.


**Voting for this executive proposal will place your MKR in support of the changes outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Increase PSM-USDC-A Debt Ceiling

As per this urgent [signal thread](https://forum.makerdao.com/t/urgent-adjustments-to-tip-psm-usdc-a-dc/8274), the mandated actors have decided to propose an increase to the PSM-USDC-A Debt Ceiling to help mitigate the possibility of DAI deviating from the dollar peg in the event of further volatility in the market. The PSM-USDC-A Debt Ceiling will increase from 2 billion DAI to 3 billion DAI if this executive proposal passes.

The reasoning for this urgent inclusion can be found [here](https://forum.makerdao.com/t/urgent-adjustments-to-tip-psm-usdc-a-dc/8274/11).

### Increase Flat Kick Incentive (`tip`) for All Vault Types

As per this urgent [signal thread](https://forum.makerdao.com/t/urgent-adjustments-to-tip-psm-usdc-a-dc/8274), the mandated actors have decided to propose an increase to the [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive) to ensure liquidations run smoothly for smaller vaults in the event of further volatility in the market. The [Flat Kick Incentive](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive) will increase from 0 DAI to 300 DAI on all vault types with liquidations enabled if this executive proposal passes.

The reasoning for this urgent inclusion can be found [here](https://forum.makerdao.com/t/urgent-adjustments-to-tip-psm-usdc-a-dc/8274/11).

### Whitelist B.Protocol on WBTC Oracles

As per the outcome of this [poll](https://vote.makerdao.com/polling/QmSUny5o?network=mainnet#poll-detail), [B.Protocol](https://www.bprotocol.org/) will be whitelisted on the WBTC OSM and Medianizer oracles if this executive proposal passes. See the [OSM](https://forum.makerdao.com/t/mip10c9-sp28-subproposal-to-whitelist-b-protocol-contract-for-wbtc-usd-oracle-access-osm/7876) and [Medianizer](https://forum.makerdao.com/t/mip10c9-sp27-subproposal-to-whitelist-b-protocol-contract-for-wbtc-usd-oracle/7875) whitelisting applications for further details.

### Adding Stablecoin-Volatile Uniswap LPs to Liquidations 2.0

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmQ3tMWq?network=mainnet#poll-detail), the following vault types will be added to the Liquidations 2.0 framework with the following parameters if this executive proposal passes. Further details and rationale may be found in the proposal posted [here](https://forum.makerdao.com/t/uni-lps-liquidations-2-0-parameters/8073).
* UNIV2DAIETH-A
* UNIV2USDCETH-A
* UNIV2ETHUSDT-A
* UNIV2WBTCDAI-A

The above vault types will be added with the following parameters:

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.995
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 125 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.15

**Limits**
* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 5 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.6
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 215 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.7

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

---

### Adding Volatile-Volatile Uniswap LPs to Liquidations 2.0

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmTkWrzY?network=mainnet#poll-detail), the following vault types will be added to the Liquidations 2.0 framework with the following parameters if this executive proposal passes. Further details and rationale may be found in the proposal posted [here](https://forum.makerdao.com/t/uni-lps-liquidations-2-0-parameters/8073).
* UNIV2WBTCETH-A
* UNIV2LINKETH-A
* UNIV2UNIETH-A
* UNIV2AAVEETH-A

**Common Parameters** 

These parameters will be identical for each of the vault types listed above.

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 130 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3

**Limits**
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 200 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

**[Local Liquidation Limits (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit)**  

This parameter is different for each vault type listed above.

* UNIV2WBTCETH-A Local Liquidation Limit (`ilk.hole`): 5 million DAI
* UNIV2LINKETH-A Local Liquidation Limit (`ilk.hole`): 3 million DAI
* UNIV2UNIETH-A Local Liquidation Limit (`ilk.hole`): 3 million DAI
* UNIV2AAVEETH-A Local Liquidation Limit (`ilk.hole`): 3 million DAI

---

### Adding UNIV2DAIUSDT-A to Liquidations 2.0

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmUqRPjD?network=mainnet#poll-detail), the UNIV2DAIUSDT-A vault type will be added to the Liquidations 2.0 framework with the following parameters if this executive proposal passes. Further details and rationale may be found in the proposal posted [here](https://forum.makerdao.com/t/uni-lps-liquidations-2-0-parameters/8073).

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.999
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 120 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.05

**Limits**
* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 5 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.9
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 220 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.95

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

---

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
