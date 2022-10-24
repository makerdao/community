---
title: Template - [Executive Vote] rETH Onboarding, Oracle Whitelist Additions, Enable Starknet Fees - October 26, 2022
summary: Onboarding rETH, whitelist Oasis.app on rETH/USD oracle, ad add fee structure to Starknet Teleport.
date: 2022-10-26T00:00:00.000Z
address: 

---
# [Executive Proposal] rETH Onboarding, Oracle Whitelist Additions, Starknet Housekeeping - October 26, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Oasis.app will be whitelisted on the rETH/USD oracle as detailed below.
- Enable the fee mechanism on the Starknet DAI bridge, as detailed below.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- The rETH-A vault type will be onboarded to the Maker Protocol with the parameters below.

**Voting for this executive proposal will place your MKR in support of the changes outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier which means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some knowledgeable actors are available if issues arise with the new contracts deployed by this spell.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Oasis.app Whitelist

As per the outcome of this [governance poll](https://vote.makerdao.com/polling/QmZzFPFs#vote-breakdown), [Oasis.app](https://oasis.app/) will be whitelisted on the following OSM Oracle if this executive proposal passes:
* rETH/USD

Please review [MIP10](https://mips.makerdao.com/mips/details/MIP10) and the [forum thread]([://](https://forum.makerdao.com/t/mip10c9-sp31-proposal-to-whitelist-oasis-app-on-rethusd-oracle/18195)) to inform your position on this issue before voting.

### Enable Starknet Fees

As per the successful outcome of this [governance poll](https://vote.makerdao.com/polling/QmbWkTvW#vote-breakdown), the 1 basis point fee will be enabled on Starknet Teleport if this executive proposal passes.

The technical changes to enable this fee have been explained in [this post](https://forum.makerdao.com/t/starknet-changes-for-2022-10-26-executive-spell/18468), for more information on the fee mechanism, please see this [documentation](https://docs.starknet.io/documentation/develop/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees).

### rETH-A Vault Type Onboarding

As per the successful outcome of this [governance poll](https://vote.makerdao.com/polling/QmS7dBuQ#poll-detail), rETH will be onboarded with the parameters listed below if this executive proposal passes.

**Collateral Parameters**

* Underlying Collateral: Rocket Pool ETH (rETH)
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 1.5%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 170%
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 15000 DAI
* [Maximum Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/module-dciam): 5 million DAI
* [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 3 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 8 hours


**Liquidation Parameters**

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.1
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

**Liquidation Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 2 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.45
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 120 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Liquidation Incentives**

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 250 DAI

Please review the following forum threads containing information about rETH to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/reth-mip6-collateral-application/6881)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/reth-collateral-onboarding-risk-evaluation/15286)
* [Smart Contract Technical Assessment](https://forum.makerdao.com/t/reth-erc20-token-smart-contract-technical-assessment/12885)
* [Oracles Core Unit Evaluation](https://forum.makerdao.com/t/mip10c3-sp22-proposal-reth-oracle-collateral-onboarding-oracle-assessment/15564)

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
