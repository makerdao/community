---
title: Template - [Executive Vote] Spark Lend D3M Onboarding - May 02, 2023
summary: Adds a new D3M to Spark Lend.
date: 2023-05-02T00:00:00.000Z
address: "0x77107F74bf30250aFFada0fbD09fa517658B4916"

---
# [Executive Proposal] Spark Lend D3M Onboarding - May 02, 2023

The Arbitration Facilitator(s), Phoenix Labs, PullUp, and dewiz have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- A new D3M to Spark Lend will be added to the Maker Protocol, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Spark Lend D3M Onboarding

As per previous approval in multiple polls ([1](https://vote.makerdao.com/polling/QmRZAMq2), [2](https://vote.makerdao.com/polling/QmTiALcZ), [3](https://vote.makerdao.com/polling/QmYBegVf), [4](https://vote.makerdao.com/polling/QmTJBUXJ), [5](https://vote.makerdao.com/polling/QmRxNdG7)) and per the Scope Frameworks ([Decentralized Collateral Scope](https://mips.makerdao.com/mips/details/MIP104), [Ecosystem Scope](https://mips.makerdao.com/mips/details/MIP106)), the D3M to Spark Lend will be activated in this spell using the following parameters:

### Vault Parameters

* Ilk Name: **DIRECT-SPARK-DAI**
* Increase the [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) to **5 million DAI**.
* Set [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) to **5 million DAI**.
* Set [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) to **8 hours**.
* Set `tau` to **7 days**; this parameter defines the time period required before debt can be written off after a D3M has been caged.

### Additional Parameters/Instructions

* Assign `King` to the Pause Proxy with address: [0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb). This address will receive any rewards.
* Set Aave Buffer Plan (`buffer`) to **30 million DAI**. This ensures a fixed liquidity buffer on the DAI Pool.
* Set `baseRateConversion` to **1/90%**. This value is multiplied by the DSR to set the DAI market borrow rate.
* Set `borrowSpread` to **0**. This will keep the borrow rate flat if the D3M Debt Ceiling is above the vault debt.
* Set `supplySpread` to **0**.
* Set `maxRate` to **75%**. This is the maximum value for both supply and borrows and is encouraged when vault debt exceeds the Debt Ceiling of the D3M.
* Update the DAI Interest Strategy Contract to `0x113dc45c524404F91DcbbAbB103506bABC8Df0FE`, disabling the performance bonus.
* Set DAI Reserve Factor to 0% using `poolConfigurator.setReserveFactor(DAI_ADDRESS, 0)`. This means all revenue will be sent to Maker.
* Freeze the WBTC market using `poolConfigurator.setReserveFreeze(WBTC_ADDRESS, true)`. This aligns with the Decentralized Collateral Scope Framework.

For more information on Direct Deposit Modules, please see the entry in the Maker Operational Manual [here](https://manual.makerdao.com/module-index/module-dai-direct-deposit).
	
## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).