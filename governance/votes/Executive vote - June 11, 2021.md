---
title: Template - [Executive Vote] Parameter Changes, Oracle Whitelisting, Other Changes - June 11, 2021
summary: Vote for Parameter Changes, Oracle Whitelisting, Other Changes
date: 2021-06-11T00:00:00.000Z
address: "0x1dB8b702416D3174dC2F5b12287383AB693f894f"

---
# [Executive Proposal] Parameter Changes, Oracle Whitelisting, Other Changes - June 11, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The PSM-USDC-A Debt Ceiling will be increased from 3 billion DAI to 4 billion DAI.
- Multiple changes to Stability Fees, Debt Ceilings, Target Available Debt, and Ceiling Increase Cooldowns will be made to various vault types as described in the Proposal Details section.
- Auction Parameters for ETH Vault Types will be updated as listed below in the Proposal Details section.
- The UNIV2DAIUSDC-A Vault Type will have its Liquidation Ratio lowered from 105% to 102% and Stability Fee lowered from 1.0% to 0.5% **with liquidations remaining off**.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- Yearn Finance will be added to the whitelist for the UNIUSD, LINKUSD, AAVEUSD, and COMPUSD Oracles.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Urgent PSM-USDC-A Debt Ceiling Adjustment

Following the recommendation of the Risk Core Unit in this [thread](https://forum.makerdao.com/t/adding-psm-usdc-a-dc-increase-into-executive-today/8706), the PSM-USDC-A [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling) will be increased from 3 billion DAI to 4 billion DAI if this executive proposal passes.

### Various Parameter Changes

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmTj45HM?network=mainnet#poll-detail), the following recommendations of the [Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) will be implemented if this executive proposal passes.

For further information, you may view this [thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-7-april-2021/7358) detailing the committee's recommendations.

**[Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) Decreases**

| Vault Type     |   Old |   New | Change |
|----------------|-------|-------|--------|
| ETH-A          | 5.50% | **3.50%** | -2.00% |
| ETH-B          | 10.00% | **9.00%** | -1.00% |
| ETH-C          | 3.00% | **1.00%** | -2.00% |
| WBTC-A         | 4.50% | **3.50%** | -1.00% |
| LINK-A         | 5.00% | **4.00%** | -1.00% |
| YFI-A          | 5.50% | **4.00%** | -1.50% |
| UNI-A          | 3.00% | **2.00%** | -1.00% |
| AAVE-A         | 3.00% | **2.00%** | -1.00% |
| BAT-A          | 5.00% | **4.00%** | -1.00% |
| RENBTC-A       | 5.00% | **4.00%** | -1.00% |
| UNIV2DAIETH-A  | 3.50% | **2.50%** | -1.00% |
| UNIV2USDCETH-A | 4.50% | **3.50%** | -1.00% |
| UNIV2WBTCETH-A | 4.50% | **3.50%** | -1.00% |
| UNIV2UNIETH-A  | 5.00% | **4.00%** | -1.00% |
| UNIV2ETHUSDT-A | 5.00% | **4.00%** | -1.00% |
| UNIV2LINKETH-A | 4.00% | **3.00%** | -1.00% |
| UNIV2AAVEETH-A | 4.00% | **3.00%** | -1.00% |
| UNIV2DAIUSDT-A | 3.00% | **2.00%** | -1.00% |

**[Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling) Increases**

| Vault Type |         Old |       New |       Change |
|------------|-------------|-----------|--------------|
| ETH-B      |  50,000,000 |**300,000,000**|  250,000,000 |
| YFI-A      |  90,000,000 |**130,000,000**|   40,000,000 |

**[Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling) Decreases**

| Vault Type |         Old |       New |       Change |
|------------|-------------|-----------|--------------|
| ZRX-A      |  10,000,000 | **3,000,000** |   -7,000,000 |
| LRC-A      |   5,000,000 | **3,000,000** |   -2,000,000 |
| COMP-A     |  30,000,000 | **20,000,000**|  -10,000,000 |

**[Target Available Debt](https://community-development.makerdao.com/en/learn/governance/module-dciam) (`gap`) Increases**

| Vault Type | Old        | New             | Change     |
|------------|------------|-----------------|------------|
| ETH-A      | 80,000,000 | **100,000,000** | 20,000,000 |
| ETH-B      | 5,000,000  | **10,000,000**  | 5,000,000  |
| WBTC-A     | 15,000,000 | **30,000,000**  | 15,000,000 |
| YFI-A      | 5,000,000  | **7,000,000**   | 2,000,000  |
| UNI-A      | 3,000,000  | **5,000,000**   | 2,000,000  |

**[Target Available Debt](https://community-development.makerdao.com/en/learn/governance/module-dciam) (`gap`) Decreases**

| Vault Type | Old       | New         | Change   |
|------------|-----------|-------------|----------|
| ZRX-A      | 1,000,000 | **500,000** | -500,000 |
| LRC-A      | 1,000,000 | **500,000** | -500,000 |

**[Ceiling Increase Cooldown](https://community-development.makerdao.com/en/learn/governance/module-dciam) (`ttl`) Decreases**

All vault types with DC-IAM enabled will have their Ceiling Increase Cooldown (`ttl`) parameter decreased from 12 hours to **8 hours**.

### Adjusting Auction Parameters for ETH Vault Types

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmUWwuxj?network=mainnet#poll-detail), the following recommendations of the [Risk Core Unit](https://forum.makerdao.com/t/mip39c2-sp2-adding-risk-core-unit/6342) will be implemented if this executive proposal passes.

For further information, you may view this [thread](https://forum.makerdao.com/t/adjusting-auction-parameters-for-eth-vault-types/8477) detailing the Core Unit's recommendations.

**Increasing [Local Liquidation Limits (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit)**

* **ETH-A** Local Liquidation Limit from 22 million DAI to **30 million DAI**
* **ETH-B** Local Liquidation Limit from 8 million DAI to **15 million DAI**
* **ETH-C** Local Liquidation Limit from 5 million DAI to **20 million DAI**

**ETH-B Adjustments**

* Decrease [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function) from 90 seconds to **60 seconds**
* Decrease [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier) from 1.3 to **1.2**


### Lowering the UNIV2DAIUSDC-A Liquidation Ratio and Stability Fee

Given the successful outcome of this [Signal Request](https://forum.makerdao.com/t/signal-request-lower-the-univ2daiusdc-a-liquidation-ratio/8487) and this subsequent [poll](https://vote.makerdao.com/polling/QmTp7axX?network=mainnet#poll-detail), the following changes will be implemented if this executive proposal passes.

**Vault Type Changes**

* The [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio) for UNIV2DAIUSDC-A will be decreased from 105% to 102%.
* The [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) for UNIV2DAIUSDC-A will be decreased from 1.0% to 0.5%.

**Note: The Oracle Domain Team has decided a 102% Liquidation Ratio will be used instead of the 101% that was favored for this Vault Type, due to the oracle risk of estimating the size of the Uniswap Pool as fees accumulate. 
The Risk Core Unit has additionally decided that liquidations should remain off for the vault type, at this time. 
You may view a discussion of these decisions on the [Governance and Risk Call for June 10, 2021](https://youtu.be/6PwakraoHAk).**  

### Whitelist Yearn Finance on UNIUSD, LINKUSD, AAVEUSD, COMPUSD Oracles

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmarCh1g?network=mainnet#poll-detail), Yearn Finance will be added to the UNIUSD, LINKUSD, AAVEUSD, and COMPUSD Oracle Security Module whitelists to read current and queued price data if this executive proposal passes.

For more information, you may view the [application thread](https://forum.makerdao.com/t/mip10c9-sp29-subproposal-to-whitelist-yearn-finance-on-uniusd-linkusd-aaveusd-compusd-oracles/8448) to further inform your vote. 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
