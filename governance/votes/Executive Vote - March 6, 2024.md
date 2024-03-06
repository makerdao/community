---
title: Template - [Executive Vote] Delegate Compensation, Smart Burn Engine Parameter Adjustment, Launch Project Funding, Whistleblower Bounty, WBTC Vault Parameter Changes, Spark Proxy Spell - March 6, 2024
summary: Distribute delegate compensation for February 2024, decrease the Smart Burn Engine hop parameter, distribute DAI and MKR funding for the Launch Project, pay a whistleblower bounty, update the gap parameter for WBTC-A and WBTC-C, trigger a Spark Proxy Spell.
date: 2024-03-06T00:00:00.000Z
address: "0xD8D60b7A9998098261DF5175B5b0Fb567CD0Fb1A"

---
# [Executive Proposal] Delegate Compensation, Smart Burn Engine Parameter Adjustment, Launch Project Funding, Whistleblower Bounty, WBTC Vault Parameter Changes, Spark Proxy Spell - March 6, 2024

The Governance Facilitators and Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Twelve Aligned Delegates will receive a total of 259.83 MKR as compensation for February 2024.
- The `hop` parameter of the Smart Burn Engine will be decreased.
- 3,000,000 DAI and 500 MKR will be distributed to the Launch Project.
- 20.84 MKR will be paid as a whistleblower bounty.
- The `gap` parameter for WBTC-A and WBTC-C will be increased.
- A proxy spell for Spark Protocol at 0xf3449d6D5827F0F6e0eE4a941f058307056D3736 will be executed.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Delegate Compensation for February 2024

* **Authorization**: [Atlas Section 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/february-2024-aligned-delegate-compensation/23766)

If this executive proposal passes, the following transfers for Aligned Delegate Compensation will be made to qualifying Aligned Delegates.

|Delegate | Amount (MKR) | Address|
|--- | --- | ---|
|BLUE | 41.67 | [0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf](https://etherscan.io/address/0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf)|
|BONAPUBLICA | 41.67 | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3)|
|Cloaky | 41.67 | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818)|
|TRUE NAME | 41.67 | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d)|
|0xDefensor | 23.71 | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9)|
|JAG | 13.89 | [0x58D1ec57E4294E4fe650D1CB12b96AE34349556f](https://etherscan.io/address/0x58D1ec57E4294E4fe650D1CB12b96AE34349556f)|
|UPMaker | 13.89 | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd)|
|vigilant | 13.89 | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61)|
|PBG | 13.44 | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2)|
|Pipkin | 5.82 | [0x0E661eFE390aE39f90a58b04CF891044e56DEDB7](https://etherscan.io/address/0x0e661efe390ae39f90a58b04cf891044e56dedb7)|
|QGov | 4.48 | [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6)|
|WBC | 4.03 | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47)|

This is a total of: **259.83 MKR**.

### Smart Burn Engine [`hop`](https://mips.makerdao.com/mips/details/MIP104#9-1-3-1) Update

* **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/Qmat6oFs)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/smart-burn-engine-the-rate-of-mkr-accumulation-reconfiguration-and-transaction-analysis-parameter-reconfiguration-update-5/23737)

If this executive proposal passes the following change to the `hop` parameter of the Smart Burn Engine will take place:

* Decrease the `hop` parameter by 6,570 seconds from 26,280 seconds to **19,710 seconds**.

### Launch Project Funding

* **Authorization**: [Accessibility Scope 9.1](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/12)

If this executive proposal passes the following transfers to the Launch Project will take place:

* Transfer **3,000,000 DAI** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
* Transfer **500 MKR** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### Whistleblower Bounty Payment

* **Authorization**: [Atlas Section 2.6.6](https://mips.makerdao.com/mips/details/MIP101#2-6-6-aligned-delegate-operational-security)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/ad-derecognition-due-to-operational-security-breach-02-02-2024/23619/10)

If this executive proposal passes the following transfer of a whistleblower bounty will take place:

* Transfer **20.84 MKR** to @VeniceTree at [0xCDDd2A697d472d1e8a0B1B188646c756d097b058](https://etherscan.io/address/0xCDDd2A697d472d1e8a0B1B188646c756d097b058).

**Note:** The MKR amount has been rounded to 2 decimal places to aid in the spellcrafting and verification process.

### WBTC Vault [Target Available Debt `gap`](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-) Changes

* **Authorization**: [Stability Scope 14.3](https://mips.makerdao.com/mips/details/MIP104#14-3-native-vault-engine)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-10-wbtc-a-c-dc-iam-gap/23765)

If this executive proposal passes the following changes to the `gap` parameter will take place:

* Increase the WBTC-A `gap` by 2 million DAI from 2 million DAI to **4 million DAI**.
* Increase the WBTC-C `gap` by 6 million DAI from 2 million DAI to **8 million DAI**.

### Spark Protocol Proxy Spell

If this executive proposal passes a Spark Protocol proxy spell at [0xf3449d6D5827F0F6e0eE4a941f058307056D3736](https://etherscan.io/address/0xf3449d6D5827F0F6e0eE4a941f058307056D3736) will be executed. The expected contents of this are:

#### SparkLend CapAutomator Activation

* **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmUE5xr8)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/feb-22-2024-proposed-changes-to-sparklend-for-upcoming-spell/23739)

This new feature will enable dynamic adjustments to borrow and supply caps. The core mechanism is similar to the [Debt Ceiling Instant Access Modules (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam) used for Maker core vaults and will help reduce governance overhead in maintaining the supply and borrow caps for various assets.

If this executive proposal passes, the module will be activated with the following max limit (`max`), buffer size (`gap)`, and cooldown (`ttl`) parameters for the covered assets:

**WETH**

* Supply cap
  * `gap`: **150,000 WETH**
  * `ttl`: **12 hours**
  * `max`: **2 million WETH**
* Borrow cap
  * `gap`: **10,000 WETH**
  * `ttl`: **12 hours**
  * `max`: **1 million WETH**

**wstETH**

* Supply cap
  * `gap`: **50,000 wstETH**
  * `ttl`: **12 hours**
  * `max`: **1.2 million wstETH**
* Borrow cap
  * `gap`: **100 wstETH**
  * `ttl`: **12 hours**
  * `max`: **3,000 wstETH**

**rETH**

* Supply cap
  * `gap`: **10,000 rETH**
  * `ttl`: **12 hours**
  * `max`: **80,000 rETH**
* Borrow cap
  * `gap`: **100 rETH**
  * `ttl`: **12 hours**
  * `max`: **2,400 rETH**

**WBTC**

* Supply cap
  * `gap`: **500 WBTC**
  * `ttl`: **12 hours**
  * `max`: **5,000 WBTC**
* Borrow cap
  * `gap`: **100 WBTC**
  * `ttl`: **12 hours**
  * `max`: **2,000 WBTC**

**sDAI**

* Supply cap
  * `gap`: **50 million sDAI**
  * `ttl`: **12 hours**
  * `max`: **1 billion sDAI**
* Borrow cap: n/a - not a borrowable asset

**USDC**

* Supply cap
  * `gap`: N/A
  * `ttl`: N/A
  * `max`: **60 million USDC**
* Borrow cap
  * `gap`: **6 million USDC**
  * `ttl`: **12 hours**
  * `max`: **57 million USDC**

**USDT**

* Supply cap
  * `gap`: N/A
  * `ttl`: N/A
  * `max`: **30 million USDT**
* Borrow cap
  * `gap`: **3 million USDT**
  * `ttl`: **12 hours**
  * `max`: **28.5 million USDT**

#### SparkLend Collateral Parameter Changes

* **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmRU6mmi)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/feb-22-2024-proposed-changes-to-sparklend-for-upcoming-spell/23739)

If this executive proposal passes the following collateral parameter changes will be made to SparkLend:

**WETH**

* Increase LTV from 80% to **82%**
* Increase LT from 82.5% to **83%**
* Reduce slope 1 from 3.2% to **2.8%**

**wstETH**

* Increase LTV from 68.5% to **79%**
* Increase LT from 79.5% to **80%**

**rETH**

* Increase LTV from 68.5% to **79%**
* Increase LT from 79.5% to **80%**
* Increase base rate from 0% to **0.25%**

**WBTC**

* Increase LTV from 70% to **74%**

**sDAI**

* Increase LTV from 74% to **79%**
* Increase LT from 76% to **80%**
* Increase liquidation penalty from 4.5% to **5%**

**ETH emode**

* Increase LTV from 90% to **92%**

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
