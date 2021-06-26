---
title: Template - [Executive Vote] Liquidations 2.0 Activations, Transfer May Core Unit Budgets - May 7, 2021
summary: Vote for Liquidations 2.0 Activations, Transfer May Core Unit Budgets
date: 2021-05-07T00:00:00.000Z
address: "0xc5Ed356eadd9863eF78F74155fa4bEE1fc4ad879"

---
# [Executive Proposal] Liquidations 2.0 Activations, Transfer May Core Unit Budgets - May 7, 2021

The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

**Liquidations 2.0**
- The **UNI-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **ZRX-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **AAVE-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **BAT-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **RENBTC-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **LRC-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **MANA-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **COMP-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **KNC-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.
- The **BAL-A** vault type will be added to the Liquidations 2.0 framework with the parameters listed below.

**Core Unit Budget Distributions - May**
- **40,000 DAI** will be distributed to **Real World Finance (RWA-001)**.
- **100,500 DAI** will be distributed to **Risk (RISK-001)**.
- **80,000 DAI** will be distributed to **GovAlpha (GOV-001)**.
- **126,117 DAI** will be distributed to **Growth (GRO-001)**.
- **44,375 DAI** will be distributed to **Content Production (MKT-001)**.

**Other**
- The **UNIV2DAIUSDC-A** Liquidation Ratio will be decreased from 110% to 105%.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Liquidations 2.0

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmPaumGS?network=mainnet#poll-detail), the following vault types will be added to the Liquidations 2.0 framework with the following parameters if this executive proposal passes.

**Included Vault Types**
- **UNI-A**
- **ZRX-A**
- **AAVE-A**
- **BAT-A**
- **RENBTC-A**
- **LRC-A**
- **MANA-A**
- **COMP-A**
- **KNC-A**
- **BAL-A**

**Common Parameters**  
These parameters will be identical for each of the vault types listed above.

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3

**Limits**
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 8,400 seconds
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 0 DAI

**[Local Liquidation Limits (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit)**  
This parameter is different for each vault type.
* UNI-A Local Liquidation Limit (`ilk.hole`): 5 million DAI
* ZRX-A Local Liquidation Limit (`ilk.hole`): 1 million DAI
* AAVE-A Local Liquidation Limit (`ilk.hole`): 5 million DAI
* BAT-A Local Liquidation Limit (`ilk.hole`): 1.5 million DAI
* RENBTC-A Local Liquidation Limit (`ilk.hole`): 3 million DAI
* LRC-A Local Liquidation Limit (`ilk.hole`): 0.5 million DAI
* MANA-A Local Liquidation Limit (`ilk.hole`): 1 million DAI
* COMP-A Local Liquidation Limit (`ilk.hole`): 2 million DAI
* KNC-A Local Liquidation Limit (`ilk.hole`): 0.5 million DAI
* BAL-A Local Liquidation Limit (`ilk.hole`): 3 million DAI

Further details and rationale can be found in the following [proposal](https://forum.makerdao.com/t/remaining-vaults-liquidations-2-0-parameters/7753) from the Risk Team.

### May Core Unit Distributions

Due to the positive outcomes of the [March](https://vote.makerdao.com/executive/6058cea1efe023001bfeb313?network=mainnet#proposal-detail) and the [April](https://vote.makerdao.com/executive/approve-april-2021-governance-cycle?network=mainnet#proposal-detail) monthly governance cycle executive votes, the following budget allocations will be made to fund operations in the month of May if this executive proposal passes.
- **40,000 DAI** will be distributed to the  **[Real World Finance (RWA-001)](https://mips.makerdao.com/mips/details/MIP39c2SP1)**  core unit at **0x9e1585d9CA64243CE43D42f7dD7333190F66Ca09**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP1).
- **100,500 DAI** will be distributed to the **[Risk (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2)**  core unit at **0xd98ef20520048a35EdA9A202137847A62120d2d9**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP2).
- **80,000 DAI** will be distributed to the **[GovAlpha (GOV-001)](https://mips.makerdao.com/mips/details/MIP39c2SP3)** core unit at **0x73f09254a81e1F835Ee442d1b3262c1f1d7A13ff**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP3).
- **126,117 DAI** will be distributed to the **[Growth (GRO-001)](https://mips.makerdao.com/mips/details/MIP39c2SP4)**  core unit at **0x7800C137A645c07132886539217ce192b9F0528e**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP4).
- **44,375 DAI** will be distributed to the **[Content Production (MKT-001)](https://mips.makerdao.com/mips/details/MIP39c2SP5)**  core unit at **0x6A0Ce7dBb43Fe537E3Fd0Be12dc1882393895237** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP41c4SP5).

### Decrease the UNIV2DAIUSDC-A Liquidation Ratio

Due to the positive outcome of this [poll](https://vote.makerdao.com/polling/QmUH4LT7?network=mainnet#poll-detail), the UNIV2DAIUSDC-A [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio/) will be decreased from 110% to 105% if this executive proposal passes.

Please review this [signal thread](https://forum.makerdao.com/t/signal-request-adjust-liquidation-ratio-for-uni-v2-dai-usdc-a-vault-type/7444) to see the rationale and discussion associated with this proposed change.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
