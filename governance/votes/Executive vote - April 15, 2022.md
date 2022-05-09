---
title: Template - [Executive Vote] Offload TUSD and DAI Transfers - April 15, 2022
summary: Offload TUSD collateral via liquidation, DAI Transfers to GRO-001, Ambassadors Program, Gelato Keepers.
date: 2022-04-15T00:00:00.000Z
address: "0xe0Ae8927548FaBa8b8B48926AfD01d1a951F0bAA"

---
# [Executive Proposal] Offload TUSD and DAI Transfers - April 15, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- TUSD collateral held in the Maker Protocol will be offloaded via liquidation.
- **474,683 DAI** will be transferred to the Growth Core Unit as stated in their active budget proposal.
- **25,000 DAI** will be transferred to the Ambassadors Program multi-sig.
- The Gelato Keeper stream of **1,000 DAI per day** will be replaced as a result of a bug in the destination contract.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### TUSD Collateral Offloading

As per [this](https://vote.makerdao.com/polling/QmVkRdjg#poll-detail) successful governance poll, TUSD collateral in the Maker Protocol will be liquidated under the parameters below if this executive proposal passes. The communication and lead-time requirements for offboarding collateral defined in [MIP62](https://mips.makerdao.com/mips/details/MIP62) have been met. 

* Enable liquidations for TUSD-A
* Auction Price Function: Linear Decrease
	* tau: 250 days (estimated 10bps drop per 6 hours = 250 days till 0)
* [Liquidation Penalty](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty): Zero
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): 150%
* [Auction Price Multiplier (buf)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier): 1.00
* [Local Liquidation Limit (ilk.hole)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit): 5 million DAI
* [Max Auction Duration (tail)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration): 5 days (implies minimum price of 0.98)
* [Proportional Kick Incentive (chip)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive): Zero DAI
* [Flat Kick Incentive (tip)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive): Zero DAI*

\* Note that the Protocol Engineering Core Unit have reduced the Flat Kick Incentive to zero as detailed [here](https://forum.makerdao.com/t/tusd-offloading-flat-kick-incentive-change/14645).

For further information, please see the proposal forum thread [here](https://forum.makerdao.com/t/proposed-parameters-for-offboarding-tusd-a/13506).

### Growth Core Unit Budget

As per the ratified [GRO-001 DAI Budget](https://mips.makerdao.com/mips/details/MIP40c3SP37#budget-implementation), **474,683 DAI** will be transferred to the [Growth Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP4) [multi-sig wallet](https://gnosis-safe.io/app/eth:0x7800C137A645c07132886539217ce192b9F0528e) if this executive proposal passes. This is the second of two lump-sum transfers specified in the budget proposal.

### Fund Ambassadors Program Pilot

As per [this](https://vote.makerdao.com/polling/QmPpQ49p#poll-detail) successful governance poll, **25,000 DAI** will be transferred to the Ambassadors Program [multi-sig wallet](https://gnosis-safe.io/app/eth:0xF411d823a48D18B32e608274Df16a9957fE33E45/balances) if this executive proposal passes. 

For further information, please see the signal request thread [here](https://forum.makerdao.com/t/signal-request-fund-ambassadors-program-pilot/13199).

### Replace Gelato Keeper Top-Up Contract DAI Stream

As per [this](https://forum.makerdao.com/t/update-to-the-gelato-keeper-network-top-up-contract/14524) forum post, the [Protocol Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP7) have included a replacement for the Gelato Keeper stream in this executive proposal to resolve a bug related to token approvals. This replacement will take place if this executive proposal passes.
* The existing stream will be revoked - previously streamed funds will be used to fund keeper actions as planned.
* **1,000 DAI per day** will be streamed to the [new contract](https://etherscan.io/address/0x478c7Ce3e1df09130f8D65a23AD80e05b352af62) for 6 months.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
