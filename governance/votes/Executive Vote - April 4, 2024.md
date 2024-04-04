---
title: Template - [Executive Vote] Increase GSM Pause Delay, Increase Spark MetaMorpho Vault Maximum Debt Ceiling, Add Native Vaults to Debt Ceiling Breaker, SparkLend Proxy Spell, and TACO Resolutions - April 4, 2024
summary: Increase the Governance Security Module Pause Delay, increase Spark MetaMorpho Maximum Debt Ceiling, add native vaults to Debt Ceiling Breaker, Trigger SparkLend Proxy Spell, and approve BT Project Ethena Resolutions. 
date: 2024-04-04T00:00:00.000Z
address: "0x016e2848993CFbC952a93BA3D496162Afe703cA8"

---
# [Executive Proposal] Increase GSM Pause Delay, Increase Spark MetaMorpho Vault Maximum Debt Ceiling, Add Native Vaults to Debt Ceiling Breaker, SparkLend Proxy Spell, and TACO Resolutions - April 4, 2024

The Governance Facilitators, SideStream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- The [Governance Security Module (GSM) Pause Delay](https://mips.makerdao.com/mips/details/MIP113#10-1-gsm-governance-security-module-pause-delay) will be increased to **30 hours**.
- Spark MetaMorpho Vault DDM [Maximum Debt Ceiling (line)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-) will be increased to **1 billion DAI**.
- Native Vault Engine ilks will be added to the [Debt Ceiling Breaker (LINE_MOM)](https://mips.makerdao.com/mips/details/MIP113#10-2-3-debt-ceiling-breaker) as detailed below.
- A SparkLend Proxy Spell [0x7748C5E6EEda836247F2AfCd5a7c0dA3c5de9Da2](https://etherscan.io/address/0x7748c5e6eeda836247f2afcd5a7c0da3c5de9da2) will be triggered.
- [A set of TACO Resolutions](https://gateway.pinata.cloud/ipfs/QmUarSLBgfvCK5Mco2QS8UraSqwxWtK5jKiEbxDYxE1C4A) for BT Project Ethena will be approved. 

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **16 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### [Governance Pause Delay (GSM)](https://mips.makerdao.com/mips/details/MIP113#10-1-gsm-governance-security-module-pause-delay) Increase

- **Authorization:** [Poll](https://vote.makerdao.com/polling/QmcLsYwj)  
- **Proposal:** [Forum post](https://forum.makerdao.com/t/gsm-pause-delay-increase-proposal/23929)

If this executive proposal passes, The Governance Pause Delay (GSM) will be increased by 14 hours, from 16 to **30 hours**.

### Spark MetaMorpho Vault DDM [Maximum Debt Ceiling (line)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-) Increase

- **Authorization:** [Forum Post](https://forum.makerdao.com/t/morpho-spark-dai-vault-update-1-april-2024/24006/9)  
- **Proposal:** [Forum post](https://forum.makerdao.com/t/morpho-spark-dai-vault-update-1-april-2024/24006)

If this executive proposal passes, the Spark MetaMorpho Vault DDM Maximum Debt Ceiling (line) will increase by 900 million DAI, from 100 million DAI to **1 billion DAI**.

### Add ilks to [Debt Ceiling Breaker (LINE_MOM)](https://mips.makerdao.com/mips/details/MIP113#10-2-3-debt-ceiling-breaker)

- **Authorization:** [Poll](https://vote.makerdao.com/polling/QmZsAM36#vote-breakdown)  
- **Proposal:** [Forum post](https://forum.makerdao.com/t/gov12-1-2-bootstrapping-edit-proposal-gov10-2-3-1a-edit/24005)

If this executive proposal passes, the following ilks will be added to the Debt Ceiling Breaker (LINE_MOM):

* ETH-A
* ETH-B
* ETH-C
* WSTETH-A
* WSTETH-B
* WBTC-A
* WBTC-B
* WBTC-C

### Trigger SparkLend Proxy Spell

- **Authorization:** Polls: [1](https://vote.makerdao.com/polling/QmdjqTvL), [2](https://vote.makerdao.com/polling/QmaEqEav), [3](https://vote.makerdao.com/polling/QmbCWUAP). [Forum Post](https://forum.makerdao.com/t/morpho-spark-dai-vault-update-1-april-2024/24006/9)  
- **Proposal:** Forum posts: [1](https://forum.makerdao.com/t/mar-21-2024-proposed-changes-to-sparklend-for-upcoming-spell/23918), [2](https://forum.makerdao.com/t/morpho-spark-dai-vault-update-1-april-2024/24006)

If this executive proposal passes, the SparkLend Proxy spell at [0x7748C5E6EEda836247F2AfCd5a7c0dA3c5de9Da2](https://etherscan.io/address/0x7748c5e6eeda836247f2afcd5a7c0da3c5de9da2) will be executed. The expected contents of this are:

#### Increase ETH Borrow Cap `gap` Parameter

Increases [ETH Market](https://app.spark.fi/reserve-overview/?underlyingAsset=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&marketName=proto_spark_v3) borrow cap `gap` parameter by 10,000 ETH from 10,000 ETH to **20,000 ETH**

#### Increase WBTC Supply Cap `max` Parameter

Increases [WBTC market](https://app.spark.fi/reserve-overview/?underlyingAsset=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&marketName=proto_spark_v3) supply cap `max` parameter by 4,000 WBTC from 6,000 WBTC to **10,000 WBTC**

#### Activate Kill Switch Security Module

[Adds a kill switch](https://github.com/marsfoundation/sparklend-kill-switch) to disable all borrowing across markets in the event of a depeg on key collateral assets.

#### Update MetaMorpho Market Caps

Updates Market Cap Parameters to the following:

* USDe 77% LLTV pool cap: **1 billion DAI**
* USDe 86% LLTV pool cap: **500 million DAI**
* USDe 91.5% LLTV pool cap: **200 million DAI**
* USDe 94.5% LLTV pool cap: **10 million DAI**
* sUSDe 77% LLTV pool cap: **1 billion DAI**
* sUSDe 86% LLTV pool cap: **200 million DAI**
* sUSDe 91.5% LLTV pool cap: **50 million DAI**
* sUSDe 94.5% LLTV pool cap: **10 million DAI**

### Approve TACO Resolutions

- **Authorization:** [Forum post](https://forum.makerdao.com/t/bt-project-ethena-risk-legal-assessment/23978/9)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/bt-project-ethena-risk-legal-assessment/23978)

If this executive proposal passes, the resolutions posted within [QmUarSLBgfvCK5Mco2QS8UraSqwxWtK5jKiEbxDYxE1C4A](https://gateway.pinata.cloud/ipfs/QmUarSLBgfvCK5Mco2QS8UraSqwxWtK5jKiEbxDYxE1C4A) will be approved. 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
