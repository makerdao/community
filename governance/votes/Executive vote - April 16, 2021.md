---
title: Template - [Executive Vote] Liquidations 2.0 Contracts, Increase Emergency Shutdown Threshold  - April 16, 2021
---
# [Executive Proposal] Liquidations 2.0 Contracts, Increase Emergency Shutdown Threshold  - April 16, 2021
The Governance Facilitator(s) have placed an Executive Vote into the voting system on behalf of the Maker Governance community. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

### Authorize Liquidations 2.0 Contracts

Given the passing of this [executive](https://vote.makerdao.com/executive/6058cea1efe023001bfeb313?network=mainnet#proposal-detail) the following contracts will be authorized to implement Liquidations 2.0:
* "MCD_DOG": "0x121D0953683F74e9a338D40d9b4659C0EBb539a0" - Main contract for Liquidations 2.0.
* "MCD_END": "0x0D1a98E93d9cE32E44bC035e8C6E4209fdB70C27" - Contract for executing a shutdown of the protocol.
* "MCD_ESM": "0x23Aa7cbeb266413f968D284acce3a3f9EEFFC2Ec" - Emergency Shutdown Module contract that enables burning MKR to shut the protocol down.
* "ILK_REGISTRY": "0xB3fBb13b831F254DbBB9a1abdb81d8D91589B3B4"- Contract defining the different vault types within the protocol.
* "CLIPPER_MOM": "0x96E9a19Be6EA91d1C0908e5E207f944dc2E7B878"- Contract that enables a "circuit breaker" for Liquidations 2.0.
* "MCD_CLIP_LINK_A": "0x1eB71cC879960606F8ab0E02b3668EEf92CE6D98" - Contract containing the LINK-A auction module.
* "MCD_CLIP_CALC_LINK_A": "0xbd586d6352Fcf0C45f77FC9348F4Ee7539F6e2bD" - Contract preforming the LINK-A price calculator function.

Additionally, the MCD_FLIP_LINK_A contract will be removed as it was responsible for the current liquidation system. 

Further details and rationale can be found in this [thread](https://forum.makerdao.com/t/mip45-liquidations-2-0-liq-2-0-liquidation-system-redesign/6352) or by browsing the [Liq2.0 Tag](https://forum.makerdao.com/tag/liq-20) in the forum.

### Add LINK-A to Liquidations 2.0 Framework

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmPtNp9a?network=mainnet#poll-detail), LINK-A will be added to the Liquidations 2.0 Framework with the following parameters:

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

**Global Parameters**  
Because this is the first vault type using liquidations 2.0, the Global Liquidation Limit will also be set:
* [Global Liquidation Limit (`Hole`)](https://community-development.makerdao.com/en/learn/governance/param-global-liquidation-limit): 100 million DAI

Further details and rationale can be found in the following [Risk Evaluation](https://forum.makerdao.com/t/link-a-liquidations-2-0-parameters/7180).

### Increase Emergency Shutdown Threshold

Given this [Risk Evaluation](https://forum.makerdao.com/t/informal-poll-should-we-raise-the-minimum-mkr-needed-to-call-end-cage-for-emergency-shutdown/7277/16) the following change will be made to the amount of MKR tokens needed to activate an Emergency Shutdown (call `end.cage`):
* Increase threshold from 50,0000 MKR to 75,000 MKR.

## Summary

Therefore, if this Executive proposal passes the following will occur:
* The Liquidations 2.0 Contracts will be authorized at the listed addresses.
* LINK-A will be moved to the Liquidations 2.0 Framework.
* The Emergency Shutdown Threshold will be increased from 50,000 to 75,000 MKR.

This [Executive Vote](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will continue until the number of votes in favor surpasses the votes in favor of the currently leading proposal. This is a [continuous approval](https://community-development.makerdao.com/en/learn/governance/how-voting-works) vote. 

If this executive vote does not pass within 30 days then it will expire and have no effect on the Maker Protocol, even if it should later pass. 

Note that this proposal will include an office-hours modifier that means it can only be cast between 14:00 and 21:00 UTC, Monday - Friday. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations.


## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
