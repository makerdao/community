---
title: Template - [Executive Vote] Collateral Onboarding, ETH-B DC-IAM, Other Changes - December 11, 2020

---
## [Executive Vote] Collateral Onboarding, ETH-B DC-IAM, Other Changes - December 11, 2020

The Governance Facilitator(s) and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

### Onboard renBTC as a new Collateral Type

A new collateral type, renBTC, will be added to the Maker Protocol if this proposal passes. renBTC will be added with the following parameters in the renBTC-A vault type. These parameters match those in the previous governance [poll](https://vote.makerdao.com/polling/QmNnd9ty#poll-detail).

* Stability Fee: 6%
* Liquidation Ratio: 175%
* Debt Ceiling: 2 million DAI
* Auction Lot Size: 50,000 DAI
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 500 DAI

Please review the following forum threads containing information about renBTC to inform your position before voting.
* [Initial Collateral Application](https://forum.makerdao.com/t/renbtc-mip6-collateral-application/2971)
* [Risk Evaluation](https://forum.makerdao.com/t/renbtc-collateral-onboarding-risk-evaluation/5095)
* [Smart Contracts Evaluation](https://forum.makerdao.com/t/renbtc-erc20-token-smart-contract-technical-assessment/5341)
* [Oracles Evaluation](https://forum.makerdao.com/t/renbtc-collateral-onboarding-oracle-assessment-mip10c3-sp17/5377)


### Onboard UNI as a new Collateral Type

A new collateral type, UNI (Uniswap), will be added to the Maker Protocol if this proposal passes. UNI will be added with the following parameters in the UNI-A vault type. These parameters match those in the previous governance [poll](https://vote.makerdao.com/polling/QmUtaREo#poll-detail).

* Stability Fee: 3%
* Liquidation Ratio: 175%
* Debt Ceiling: 15 million DAI
* Auction Lot Size: 50,000 DAI
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 500 DAI

Please review the following forum threads containing information about UNI (Uniswap) to inform your position before voting.
* [Initial Collateral Application](https://forum.makerdao.com/t/uni-mip6-collateral-onboarding-application/4433)
* [Risk Evaluation](https://forum.makerdao.com/t/uni-collateral-onboarding-risk-evaluation/5348)
* [Smart Contracts Evaluation](https://forum.makerdao.com/t/uni-erc20-token-smart-contract-domain-community-assessment/5347)
* [Oracles Evaluation](https://forum.makerdao.com/t/uni-collateral-onboarding-oracle-assessment-mip10c3-sp15/5375)

### Enable Debt Ceiling Instant Access Module (DC-IAM) for ETH-B

With [MIP27](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625) passing successfully through the November Governance Cycle the Debt Ceiling Instant Access Module has been implemented and is now ready for use within the Maker Protocol. Due to this recent [poll](https://vote.makerdao.com/polling/QmSD43Jk?network=mainnet#poll-detail), the DC-IAM will initially be implemented for the ETH-B collateral type. If this proposal passes, the DC-IAM will be activated for ETH-B with the following parameters:

* Collateral Type (`ilk`): ETH-B
* Maximum Debt Ceiling (`line`): 50 million DAI
* Target Available Debt (`gap`): 5 million DAI
* Ceiling Increase Cooldown (`ttl`): 12 hours

Additionally, last week there was a [poll](https://vote.makerdao.com/polling/QmXDZLbs?network=mainnet) to increase the ETH-B debt ceiling from 10 million DAI to 20 million DAI. Normally the results of that poll would be included in this executive proposal. However, the implementation of the DC-IAM for ETH-B overrides the debt ceiling parameter for ETH-B and for that reason, that change has not been included.

Please review the discussion [thread](https://forum.makerdao.com/t/eth-b-dc-iam-initial-parameters/5512) to help inform your position before voting.

Additional information on the Debt Ceiling Instant Access Module can be found in [MIP27](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625).

### Reduce Stablecoin Stability Fees to 0%

Due to the result from this governance [poll](https://vote.makerdao.com/polling/QmeWnmyC?network=mainnet#poll-detail), the Stability Fee for USDC-A, TUSD-A, PAXUSD-A and GUSD-A will be reduced to 0% if this proposal passes.

Please review this forum [thread](https://forum.makerdao.com/t/on-chain-poll-stablecoin-vaults-fee-adjustment-7th-dec-2020/5414) for further comments on this proposal.

### Modify YFI-A parameters

Due to the result from this governance [poll](https://vote.makerdao.com/polling/QmWn8Tmt?network=mainnet#poll-detail), the YFI-A Debt Ceiling will be increased from 20 million DAI to 30 million DAI if this proposal passes, additionally, the YFI-A Stability Fee will be increased from 4% to 10% if this proposal passes.

Further discussion of these changes can be found [here](https://forum.makerdao.com/t/signal-request-yfi-vault-options/5425).

### Whitelist Yearn.finance on the YFIUSD OSM Oracle

As per the on-chain governance [poll](https://vote.makerdao.com/polling/Qmbutya7#vote-breakdown) for the YFIUSD OSM oracle, [Yearn.finance](https://yearn.finance/) will be whitelisted on the YFIUSD OSM oracle if this proposal passes.

Further details and discussion on this whitelist proposal can be found [here](https://forum.makerdao.com/t/mip10c9-sp14-subproposal-to-whitelist-yearn-finance-on-yfiusd-oracle/5228)

## Summary

Therefore, if this Executive proposal passes the following will occur:

**Collateral Onboarding**
* The renBTC-A vault type will be added using renBTC as collateral with the parameters listed above.
* The UNI-A vault type will be added using UNI as collateral with the parameters listed above.

**Stability Fees**
* The USDC-A Stablity Fee will decrease from 4% to 0%.
* The TUSD-A Stablity Fee will decrease from 4% to 0%.
* The PAXUSD-A Stablity Fee will decrease from 4% to 0%.
* The GUSD-A Stablity Fee will decrease from 4% to 0%.
* The YFI-A Stability Fee will increase from 4% to 10%.

**Debt Ceiling Instant Access Module (DC-IAM)**
* The DC-IAM will be given permissions over the `Vat` contract to manage debt ceilings within the Maker Protocol.
* The DC-IAM will be activated for ETH-B with the parameters listed above.

**Other**
* The YFI-A Debt Ceiling will increase from 20 million DAI to 30 million DAI.
* Yearn.finance will be whitelisted on the YFIUSD OSM Oracle.
* The global line parameter will increase by 27 million DAI as a result of the other debt ceiling changes.

This [Executive Vote](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will continue until the number of votes in favor surpasses the votes in favor of the currently leading proposal. This is a [continuous approval](https://community-development.makerdao.com/en/learn/governance/how-voting-works) vote. 

If this executive vote does not pass within 30 days then it will expire, and will have no effect on the Maker Protocol, even if it should later pass. 

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

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
