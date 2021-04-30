---
title: Template - [Executive Vote] Onboarding Uniswap V2 LPTs - February 5, 2021

---
## [Executive Vote] Onboarding Uniswap V2 LPTs - February 5, 2021

The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an Executive Vote into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

### Onboard UNI-V2-DAI-USDC as a new Collateral Type

A new collateral type, UNI-V2-DAI-USDC, will be added to the Maker Protocol if this proposal passes. UNI-V2-DAI-USDC will be added with the following parameters in the UNIV2DAIUSDC-A vault type. These parameters match those in the previous governance [poll](https://vote.makerdao.com/polling/QmeCbcVz?network=mainnet#poll-detail).

This poll allows the MakerDAO governance community to signal their support or opposition to adding UNI-V2-DAI-USDC (UniswapV2 DAI-USDC LP Token) as a collateral type in the Maker Protocol with the parameters below:

* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 3%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 110%
* [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 3 million DAI
* [Debt Floor](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 2000 DAI

Liquidations for UNIV2DAIUSDC-A will be disabled as both the DAI and USDC Oracles will return a constant price of $1. For this reason, auction parameters have been omitted.

Please review the following forum threads containing information about UNI-V2-DAI-USDC (UniswapV2 DAI-USDC LP Token) to inform your position before voting.
* [Initial Collateral Application](https://forum.makerdao.com/t/uni-v2-dai-usdc-mip6-collateral-onboarding-application/5830)
* [Risk Evaluation](https://forum.makerdao.com/t/uni-v2-dai-usdc-collateral-onboarding-risk-evaluation/6258)
* [Smart Contracts Evaluation](https://forum.makerdao.com/t/uni-v2-dai-usdc-erc20-token-smart-contract-technical-assessment/6232)
* [Oracles Evaluation](https://forum.makerdao.com/t/uni-v2-dai-usdc-collateral-onboarding-oracle-assessment-mip10c3-sp22/6285)

### Onboard UNI-V2-ETH-USDT as a new Collateral Type

A new collateral type, UNI-V2-ETH-USDT, will be added to the Maker Protocol if this proposal passes. UNI-V2-ETH-USDT will be added with the following parameters in the UNIV2ETHUSDT-A vault type. These parameters match those in the previous governance [poll](https://vote.makerdao.com/polling/Qma6wD3v?network=mainnet).

* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 4%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 140%
* [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 3 million DAI
* Auction Lot Size: 50,000 DAI
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* [Debt Floor](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 2,000 DAI

Please review the following forum threads containing information about UNI-V2-ETH-USDT (UniswapV2 ETH-USDT LP Token) to inform your position before voting.
* [Initial Collateral Application](https://forum.makerdao.com/t/uni-v2-eth-usdt-dai-collateral-onboarding-application/4280)
* [Risk Evaluation](https://forum.makerdao.com/t/uni-v2-eth-usdt-collateral-onboarding-risk-evaluation/6259)
* [Smart Contracts Evaluation](https://forum.makerdao.com/t/uni-v2-eth-usdt-erc20-token-smart-contract-technical-assessment/6231)
* [Oracles Evaluation](https://forum.makerdao.com/t/uni-v2-eth-usdt-collateral-onboarding-oracle-assessment-mip10c3-sp22/6284)

## Summary

Therefore, if this Executive proposal passes the following will occur:
* The UNIV2DAIUSDC-A vault type will be added using UNI-V2-DAI-USDC as collateral with the parameters listed above.
* The UNIV2ETHUSDT-A vault type will be added using UNI-V2-ETH-USDT as collateral with the parameters listed above.
* The Global System Debt Ceiling will increase by 6 million DAI.

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
