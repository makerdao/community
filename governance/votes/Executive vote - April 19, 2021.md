---
title: Template - [Executive Vote] Liquidations 2.0 Contracts, Increase Emergency Shutdown Threshold  - April 19, 2021
summary: Vote for this proposal to add Liquidations 2.0 Contracts, and Increase Emergency Shutdown Threshold
date: 2021-04-19T00:00:00.000Z
address: "0xDb0D1af4531F59E4E7EfA4ec0AcADec7518D42B6"
---
# [Executive Proposal] Liquidations 2.0 Contracts, Increase Emergency Shutdown Threshold  - April 19, 2021
The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
* The Liquidations 2.0 Contracts will be authorized.
* LINK-A will be moved to the Liquidations 2.0 Framework.


If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
* The Emergency Shutdown Threshold will increase from 50,000 MKR to 75,000 MKR.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Authorize Liquidations 2.0 Contracts

Given the passing of this [executive](https://vote.makerdao.com/executive/6058cea1efe023001bfeb313?network=mainnet#proposal-detail) the following contracts will be authorized to implement Liquidations 2.0 if this executive proposal passes:
* Add contract "MCD_DOG" - The liquidation module contract, a full upgrade to the previous `cat` contract for liquidations.
* Replace contract "MCD_END" - Contract for executing a shutdown of the protocol.
* Replace contract "MCD_ESM" - Emergency Shutdown Module contract that enables burning MKR to shut the protocol down.
* Replace contract "ILK_REGISTRY" - Contract defining the different vault types within the protocol.
* Add contract "CLIPPER_MOM" - Contract that enables a "circuit breaker" for Liquidations 2.0 if the price of a collateral drops too severely.
* Add contract "MCD_CLIP_LINK_A" - Contract containing the LINK-A auction module (with the parameters listed below).
* Add contract "MCD_CLIP_CALC_LINK_A" - Contract that contains the Auction Price Function for LINK-A. 
* Remove contract "MCD_FLIP_LINK_A" - The previous contract setting the LINK-A liquidation parameters.

Contract addresses and updates may be found in the [Collateral Onboarding Updates Rocket.Chat Channel](https://chat.makerdao.com/channel/collateral-onboarding-updates-ext).

Further details and rationale can be found in this [thread](https://forum.makerdao.com/t/mip45-liquidations-2-0-liq-2-0-liquidation-system-redesign/6352) or by browsing the [Liq2.0 Tag](https://forum.makerdao.com/tag/liq-20) in the forum.

### Add LINK-A to Liquidations 2.0 Framework

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmPtNp9a?network=mainnet#poll-detail), LINK-A will be added to the Liquidations 2.0 Framework with the following parameters if this executive proposal passes:

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3

**Limits**
* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 6 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 8,400 seconds
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 0 DAI

*Because this is the first vault type using Liquidations 2.0, the Global Liquidation Limit will also be set:*

**Global Parameters**  
* [Global Liquidation Limit (`Hole`)](https://community-development.makerdao.com/en/learn/governance/param-global-liquidation-limit): 100 million DAI

Further details and rationale can be found in the following [Risk Evaluation](https://forum.makerdao.com/t/link-a-liquidations-2-0-parameters/7180).

### Increase Emergency Shutdown Threshold

Following this [Risk Evaluation](https://forum.makerdao.com/t/informal-poll-should-we-raise-the-minimum-mkr-needed-to-call-end-cage-for-emergency-shutdown/7277/16) and the subsequent [decision by the Governance Facilitator(s)](https://forum.makerdao.com/t/emergency-shutdown-module-threshold-change/7526), the following change will be made to the amount of MKR tokens needed to activate an Emergency Shutdown (call `end.cage`) if this executive proposal passes:
* Increase threshold from 50,0000 MKR to 75,000 MKR.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
