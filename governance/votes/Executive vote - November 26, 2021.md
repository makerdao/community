---
title: Template - [Executive Vote] Onboarding New Vault Types, Parameter Changes, and Core Unit Budget Distributions - November 26, 2021
summary: Onboarding WBTC-C and PSM-GUSD-A, linearly increasing the surplus buffer, increasing D3M Debt Ceiling, and distributing Core Unit Budgets.
date: 2021-11-26T00:00:00.000Z
address: "0xeff6840401d2F1104b70953aDC300c4F39C7Eb40"

---
# [Executive Proposal] Onboarding New Vault Types, Parameter Changes, and Core Unit Budget Distributions - November 26, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** and **additions** will occur within the Maker Protocol:
- The **WBTC-C** vault type will be onboarded to the Maker Protocol with the parameters below.
- The **GUSD [Peg Stability Module](https://makerdao.world/en/learn/governance/module-psm)** will be onboarded to the Maker Protocol with the parameters below.
- The **[System Surplus Buffer](https://makerdao.world/en/learn/governance/param-system-surplus-buffer)** will be increased to 90 million DAI over a period of 30 weeks.
- The **Aave DAI Direct Deposit Module** [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) will be increased from 50 million DAI to 100 million DAI.
- A total of **906,805 DAI** will be transferred to [SAS-001](https://mips.makerdao.com/mips/details/MIP39c2SP25), [IS-001](https://mips.makerdao.com/mips/details/MIP39c2SP24) and [DECO-001](https://mips.makerdao.com/mips/details/MIP39c2SP23) as per their budget proposals.
- A total of **9,173,516 DAI** will be streamed to [RWF-001](https://mips.makerdao.com/mips/details/MIP39c2SP1), [COM-001](https://mips.makerdao.com/mips/details/MIP39c2SP8) [SAS-001](https://mips.makerdao.com/mips/details/MIP39c2SP25), [IS-001](https://mips.makerdao.com/mips/details/MIP39c2SP24), [MKT-001](https://mips.makerdao.com/mips/details/MIP39c2SP5) and [DECO-001](https://mips.makerdao.com/mips/details/MIP39c2SP23) as per their budget proposals.


**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### WBTC-C Vault Type Onboarding

As per the successful outcome of this [governance poll](https://vote.makerdao.com/polling/QmdVYMRo?network=mainnet#poll-detail), WBTC-C will be onboarded with the parameters listed below if this executive proposal passes.

**Collateral Parameters**

* Underlying Collateral: Wrapped Bitcoin (wBTC)
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 1.5%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 175%
* [Maximum Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/module-dciam): 1 billion DAI
* [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 100 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 8 hours
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 7,500 DAI

**Liquidation Parameters**

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.2
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

**Liquidation Limits**

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 25 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 90 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Liquidation Incentives**

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

Please review the following forum threads containing information about WBTC-C to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/signal-request-new-vault-type-for-wbtc-with-a-higher-lr/11579)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/proposed-risk-parameters-for-WBTC-C-vault-type/11707)


### GUSD [Peg Stability Module](https://makerdao.world/en/learn/governance/module-psm) (PSM) Onboarding

As per the successful outcome of this [governance poll](https://vote.makerdao.com/polling/QmayeEjz?network=mainnet), PSM-GUSD-A will be onboarded with the parameters listed below if this executive proposal passes.

**Proposed GUSD PSM Parameters**

* [Fee In](https://makerdao.world/en/learn/governance/module-psm) (`tin`): 0%
* [Fee Out](https://makerdao.world/en/learn/governance/module-psm) (`tout`): 0%
* [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) (`line`): 10 million DAI\*
* [Target Available Debt](https://makerdao.world/en/learn/governance/module-dciam) (`gap`): 10 million DAI
* [Ceiling Increase Cooldown](https://makerdao.world/en/learn/governance/module-dciam) (`ttl`): 24 hours

Please review the following threads to help inform your position before voting:
* [Proposal](https://forum.makerdao.com/t/proposal-gusd-psm/11148)
* [Risk Evaluation](https://forum.makerdao.com/t/psm-gusd-a-collateral-onboarding-risk-evaluation/11559)
* [Technical Evaluation](https://forum.makerdao.com/t/gusd-erc20-token-smart-contract-technical-assessment/4603)
* [Oracle Evaluation](https://forum.makerdao.com/t/mip10c3-sp13-proposal-gusd-oracle-collateral-onboarding-oracle-assessment/4777)

\* Note that the initial Maximum Debt Ceiling is being set to 10 million DAI to limit risk. A proposal to increase the Maximum Debt Ceiling to 100 million will be included in a future executive vote.

### Surplus Buffer Linear Increase

As per the successful outcome of this [governance poll](https://vote.makerdao.com/polling/QmUqfZRv?network=mainnet#poll-detail), the [System Surplus Buffer](https://makerdao.world/en/learn/governance/param-system-surplus-buffer) will be increased from 60 million DAI to 90 million DAI over a period of 30 weeks (1 million DAI per week) if this executive proposal passes.

### Increase Aave D3M (DAI Direct Deposit Module) Debt Ceiling 

As per the successful outcome of this [governance poll](https://vote.makerdao.com/polling/QmZhvNu5?network=mainnet), the Aave D3M [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) will be increased from 50 million DAI to 100 million DAI if this executive proposal passes.

For more information regarding the DAI Direct Deposit Module (D3M), check out the forum thread [here](https://forum.makerdao.com/t/discussion-direct-deposit-dai-module-d3m/7357).

### Core Unit Budget Distributions

As per multiple successful budget proposals (linked below), DAI will be transferred and streamed to multiple Core Units if this executive proposal passes, as detailed below:

**Direct DAI Transfers**

**245,738 DAI** will be transferred to the Sidestream Auction Services ([SAS-001](https://mips.makerdao.com/mips/details/MIP39c2SP25)) Core Unit at [0xb1f950a51516a697E103aaa69E152d839182f6Fe](https://etherscan.io/address/0xb1f950a51516a697E103aaa69E152d839182f6Fe) upon execution of this proposal as per their  most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP43).  

**195,443 DAI** will be transferred to the Immunefi Security ([IS-001](https://mips.makerdao.com/mips/details/MIP39c2SP24)) Core Unit at [0xd1F2eEf8576736C1EbA36920B957cd2aF07280F4](https://etherscan.io/address/0xd1F2eEf8576736C1EbA36920B957cd2aF07280F4) upon execution of this proposal as per their  most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP42).  

**465,625 DAI** will be transferred to the Deco Fixed Rate ([DECO-001](https://mips.makerdao.com/mips/details/MIP39c2SP23)) Core Unit at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7) upon execution of this proposal as per their  most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP35).  



**DAI Streams**

A total of **1,860,000 DAI** will be streamed to the Real World Finance ([RWF-001](https://mips.makerdao.com/mips/details/MIP39c2SP1)) Core Unit at [0x9e1585d9CA64243CE43D42f7dD7333190F66Ca09](https://etherscan.io/address/0x9e1585d9CA64243CE43D42f7dD7333190F66Ca09) over 12 months starting 2022-01-01 as per their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP39).  

A total of **12,242 DAI** will be streamed to the Governance Communications ([COM-001](https://mips.makerdao.com/mips/details/MIP39c2SP8)) Core Unit at [0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9](https://etherscan.io/address/0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9) over 1 month starting 2021-12-01 as per their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP40).  

A total of **257,500 DAI** will be streamed to the Governance Communications ([COM-001](https://mips.makerdao.com/mips/details/MIP39c2SP8)) Core Unit at [0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9](https://etherscan.io/address/0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9) over 6 months starting 2021-01-01 as per their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP40).  

A total of **1,130,393 DAI** will be streamed to the Sidestream Auction Services ([SAS-001](https://mips.makerdao.com/mips/details/MIP39c2SP25)) Core Unit at [0xb1f950a51516a697E103aaa69E152d839182f6Fe](https://etherscan.io/address/0xb1f950a51516a697E103aaa69E152d839182f6Fe) over 12 months starting 2021-12-01 as per their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP43).  

A total of **366,563 DAI** will be streamed to the Immunefi Security ([IS-001](https://mips.makerdao.com/mips/details/MIP39c2SP24)) Core Unit at [0xd1F2eEf8576736C1EbA36920B957cd2aF07280F4](https://etherscan.io/address/0xd1F2eEf8576736C1EbA36920B957cd2aF07280F4) over 8 months starting 2021-12-01 as per their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP42).  

A total of **424,944 DAI** will be streamed to the Content Production ([MKT-001](https://mips.makerdao.com/mips/details/MIP39c2SP5)) Core Unit at [0xDCAF2C84e1154c8DdD3203880e5db965bfF09B60](https://etherscan.io/address/0xDCAF2C84e1154c8DdD3203880e5db965bfF09B60) over 5 months starting 2021-12-01 as per their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP33).  

A total of **5,121,875 DAI** will be streamed to the Deco Fixed Rate ([DECO-001](https://mips.makerdao.com/mips/details/MIP39c2SP23)) Core Unit at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7) over 33 months starting 2021-12-01 as per their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP35).  

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
