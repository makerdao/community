---
title: Template - [Executive Vote] Vault Onboarding, 6s Updates, and Reducing Vault Liquidation Ratios - August 20, 2021
summary: Onboarding MATIC-A and PSM-PAX-A vault types, updating 6s Broker-Dealer address and debt ceiling, and reducing select liquidation ratios.
date: 2021-08-20T00:00:00.000Z
address: "0x675099a42b236ad27045e3Eb7bcEF4A9106BFD53"

---
# [Executive Proposal] Vault Onboarding, 6s Updates, and Reducing Vault Liquidation Ratios - August 20, 2021

The Governance Facilitators and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- 6s Capital [Debt Ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling) will be **increased** from 1,000 DAI to 15 million DAI and have its Broker-Dealer address updated.
- Select Vaults will have their [Liquidation Ratios](https://makerdao.world/en/learn/governance/param-liquidation-ratio) **decreased** to the amounts displayed in the Proposal Details section.
- PSM-USDC-A Fee-In (tin) will be **increased** from 0.1% to 0.2%

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- MATIC-A will be onboarded with the parameters displayed in the Proposal Details section.
- PSM-PAX-A will be onboarded with the parameters displayed in the Proposal Details section.

_To find out more about the Peg Stability Module and its parameters, visit [the PSM page](https://makerdao.world/en/learn/governance/module-psm/) on the MakerDAO Community Portal._

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### 6s Capital Updates

As per the outcome of [this poll](https://vote.makerdao.com/polling/QmSqXVUQ?network=mainnet#poll-detail) and subsequent [public request](https://forum.makerdao.com/t/executive-vote-request-raising-6s-rwa001-a-debt-ceiling/9893), the [Debt Ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling) for 6s Capital (RWA-001) will be **increased** from 1,000 DAI to 15 million DAI and the Broker-Dealer address updated to **0xE5C35757c296FD19faA2bFF85e66C6B25AC8b978** if this executive proposal passes. For more information on 6s' structure and agreements review [this post](https://forum.makerdao.com/t/introduction-and-6s-on-the-permaweb/9925).

### Reducing Vault Liquidation Ratios

As per the outcome of [this poll](https://vote.makerdao.com/polling/QmZQdJpG?network=mainnet#poll-detail), the following [Liquidation Ratios](https://makerdao.world/en/learn/governance/param-liquidation-ratio) will be **decreased** if this executive proposal passes. For more information on these changes, please review [this proposal](https://forum.makerdao.com/t/decreasing-liquidation-ratios-proposal/9819) and [this analysis](https://forum.makerdao.com/t/decreasing-liquidation-ratios-analysis/9702).

|VAULT TYPE|CURRENT LR|PROPOSED LR|LR DIFFERENCE|
| --- | --- | --- | --- |
|ETH-A|150%|145%|-5%|
|WBTC-A|150%|145%|-5%|
|ETH-C|175%|170%|-5%|
|UNIV2DAIETH-A|125%|120%|-5%|
|UNIV2WBTCETH-A|150%|145%|-5%|
|UNIV2UNIETH-A|165%|160%|-5%|
|UNIV2USDCETH-A|125%|120%|-5%|
|UNIV2WBTCDAI-A|125%|120%|-5%|
|YFI-A|175%|165%|-10%|
|LINK-A|175%|165%|-10%|
|RENBTC-A|175%|165%|-10%|
|UNI-A|175%|165%|-10%|
|AAVE-A|175%|165%|-10%|
|BAL-A|175%|165%|-10%|
|COMP-A|175%|165%|-10%|


### MATIC Collateral Onboarding

As per the outcome of [this poll](https://vote.makerdao.com/polling/QmeRhDHX?network=mainnet#poll-detail), MATIC (Polygon) will be onboarded as the vault type MATIC-A with the following parameters if this executive proposal passes.

**Initial Collateral Parameters**

* Underlying Collateral: Polygon (MATIC)
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 3%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 175%
* [Debt Ceiling (`line`)](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 10 million DAI
* [Target Available Debt (`gap`)](https://community-development.makerdao.com/en/learn/governance/module-dciam): 3 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://community-development.makerdao.com/en/learn/governance/module-dciam): 8 hours
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 10,000 DAI

**Liquidation Parameters**

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

**Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 3 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 140 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

Please review the following forum threads containing information about MATIC (Polygon) to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/matic-mip6-collateral-onboarding-updated/8318)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/matic-collateral-onboarding-risk-evaluation/9069)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/matic-erc20-token-smart-contract-technical-assessment/9140)
* [Oracles Core Unit Evaluation](https://forum.makerdao.com/t/matic-collateral-onboarding-oracle-assessment-mip10c3-sp39/9287)

### PAX Peg Stability Module Collateral Onboarding and Increase to USDC Peg Stability Module Fee-in (tin)

As per the outcome of [this poll](https://vote.makerdao.com/polling/QmdBrVKD?network=mainnet#poll-detail), the PAX Peg Stability Module will be onboarded as the vault type PSM-PAX-A with the following parameters if this executive proposal passes. Due to the new contracts deployed for this PSM, the initial [Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/param-debt-ceiling) will be set lower than the approved amount, as [detailed in this post](https://forum.makerdao.com/t/2021-august-20-exec-update-pax-psm-at-50m-this-week/9958). To read more about this proposal, visit this [forum post](https://forum.makerdao.com/t/create-a-pax-psm/9683).

**Proposed PAX PSM Parameters**
* Fee In (`tin`): 0.1%
* Fee Out (`tout`): 0%
* [Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/param-debt-ceiling): 50 million DAI.

_To read more about these parameters, visit [the PSM page](https://makerdao.world/en/learn/governance/module-psm/) on the MakerDAO Community Portal._

Additionally, the Fee-In (tin) for PSM-USDC-A will be **increased** from 0.1% to 0.2% if this executive proposal passes.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
