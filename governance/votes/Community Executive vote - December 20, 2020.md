---
title: Template - [Executive Vote] Activate the USDC PSM, Reduce Stablecoin Debt Ceilings - December 20, 2020

---
## [Executive Vote] Activate the USDC PSM, Reduce Stablecoin Debt Ceilings - December 20, 2020

The Governance Facilitator(s) have placed an Executive Vote into the voting system on behalf of the Maker Governance community. MKR Holders should vote for this proposal if they wish to make the following alterations to the Maker Protocol.

### Activate the USDC Peg Stability Module (PSM)

As per this governance [poll](https://vote.makerdao.com/polling/QmfTU85J?network=mainnet#poll-detail) in combination with this [forum post](https://forum.makerdao.com/t/psm-usdc-a-starting-debt-ceiling-19th-dec-2020/5739) from the risk domain team, the USDC PSM will be added to the Maker Protocol with the parameters given below if this proposal passes.

* The USDC PSM will be onboarded as the PSM-USDC-A vault type.
* The `tin` parameter will be set to 1% initially and will decrease to 0.1% over 7 days. `tin` refers to the fee when trading USDC in exchange for DAI.
* The `tout` parameter will be set to 0.1%. `tout` refers to the fee when trading DAI in exchange for USDC.
* The initial debt ceiling of the USDC PSM will equal 3 million DAI.

Note that due to the smaller initial debt ceiling of the USDC PSM, the debt ceilings on other stablecoins will not be lowered at this time.

## Summary

Therefore, if this Executive proposal passes the following will occur:
* The PSM-USDC-A vault type will be added using USDC as collateral with the parameters listed above.
* The global line parameter will increase by 3M due to the debt ceiling changes.

This [Executive Vote](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will continue until the number of votes in favor surpasses the votes in favor of the currently leading proposal. This is a [continuous approval](https://community-development.makerdao.com/en/learn/governance/how-voting-works) vote. 

If this executive vote does not pass within 30 days then it will no longer have any effect on the Maker Protocol, even if it should later pass. 

Note that this proposal will include an office-hours modifier that means it can only be cast between 14:00 and 21:00 UTC, Monday - Friday. This is to ensure that smart contracts engineers are on-standby at the time of activation to react to any unforeseen issues.

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
