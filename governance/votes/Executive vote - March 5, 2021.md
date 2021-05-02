---
title: Template - [Executive Vote] Parameter Updates and Onboarding RWA-001  - March 5, 2021

---
# [Executive Proposal] Parameter Updates and Onboarding RWA-001 - March 5, 2021

The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote. 

---

## Executive Summary

If this executive proposal passes the following **changes** will occur within the Maker Protocol:
- The ETH-A [Target Available Debt](https://community-development.makerdao.com/en/learn/governance/module-dciam) (`gap`) will increase from 30 million DAI to 80 million DAI.
- The Bid Duration (`ttl`) parameter will decrease from 6 hours to 4 hours for all vault types where liquidations are enabled.
- The Max Auction Duration (`tau`) parameter will decrease from 6 hours to 4 hours for all vault types where liquidations are enabled.
- The `box` parameter will increase from 15 million DAI to 20 million DAI.
- The Minimum Bid Increment (`beg`) parameter will increase from 3% to 5% for the ETH-B vault type.
- The Minimum Bid Increment (`beg`) parameter will increase from 3% to 5% for the UniswapV2 Liquidity Pool vault types.

If this executive proposal passes the following **additions** will be made to the Maker Protocol:
- The RWA001-A vault type will be added using RWA001 (6s Capital) as collateral with preliminary, non-final parameters for testing purposes.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it can only be executed between 14:00 and 21:00 UTC, Monday - Friday. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots caused by auction parameter changes.

If this executive proposal does not pass within **30 days** then it will expire and can no longer have any effect on the Maker Protocol. 

---

## Proposal Details

### Increase ETH-A Target Available Debt

As per this [poll](https://vote.makerdao.com/polling/QmXKFm9n?network=mainnet#poll-detail) and the associated forum [signal](https://forum.makerdao.com/t/signal-request-increase-eth-a-dc-iam-gap/6603), the [Target Available Debt](https://community-development.makerdao.com/en/learn/governance/module-dciam/) (`gap`) will be increased from 30 million DAI to 80 million DAI for the ETH-A vault type if this executive proposal passes.

### Collateral Auction Parameter Updates

As per this [poll](https://vote.makerdao.com/polling/QmPyvEzd?network=mainnet) and the associated proposal [thread](https://forum.makerdao.com/t/flip-auctions-parameter-adjustment-proposal/6732) multiple auction parameters will be changed if this executive proposal passes.

In addition to those changes listed in the poll, the Minimum Bid Increment (`beg`) of UNIV2DAIUSDT-A will also increase from 3% to 5%. This was an accidental omission from the poll due to the onboarding timeline of UNIV2DAIUSDT-A. It has been included here because it keeps all UniswapV2 liquidity pool token vault types with consistent auction parameters.

### Onboarding RWA-001

As per this [poll](https://vote.makerdao.com/polling/QmSqXVUQ?network=mainnet#poll-detail), this executive proposal represents the latest step in onboarding RWA-001 (6s Capital). If this executive proposal passes the RWA001-A vault type will be added using RWA001 (6s Capital) as collateral with preliminary, non-final parameters for testing purposes.

The preliminary parameters for RWA-001 (6s Capital) are:

* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 3%
* [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 1000 DAI

Please review the following forum threads containing information about RWA-001 (6s Capital) to inform your position before voting.

* [MIP21: Real World Assets - Off-Chain Asset Backed Lender](https://forum.makerdao.com/t/mip21-real-world-assets-off-chain-asset-backed-lender/3917)
* [Declaration of Intent](https://forum.makerdao.com/t/mip13c3-sp4-declaration-of-intent-commercial-points-off-chain-asset-backed-lender-to-onboard-real-world-assets-as-collateral-for-a-dai-loan/3914)
* [Risk Evaluation](https://forum.makerdao.com/t/sixs-collateral-onboarding-risk-evaluation/5352)
* [Smart Contracts Evaluation](https://forum.makerdao.com/t/rwa-001-erc20-token-smart-contract-domain-community-assessment/5363)
* [Oracles Evaluation](https://forum.makerdao.com/t/sixs-rwa-001-collateral-onboarding-oracle-assessment-mip10c3-sp18/5378)

## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
