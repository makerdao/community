---
title: Template - [Executive Vote] Deploy new Flapper, Facilitator parameter changes, budget items, Aligned Delegate Compensation, Spark Protocol proxy-spell, Andromeda multi-swap output conduit, DssCron housekeeping  - July 12, 2023
summary: Initiate new Flapper with initial parameters, recommended parameter changes from Responsible Facilitators including step one of Curve stETH/ETH pool vault offboarding, Core Unit Vesting for DUX-001 and DECO-001 + Jetstream and Chronicle streams, latest Aligned Delegate Compensation, trigger Spark proxy-spell, BlockTower/Andromeda (RWA015-A) output conduit change for multi-swap, adding current state of DssCron to Chainlog. 
date: 2023-07-12T00:00:00.000Z
address: "$spell_address"
---
# [Executive Proposal] Deploy new Flapper, Facilitator parameter changes, budget items, Aligned Delegate Compensation, Spark Protocol proxy-spell, Andromeda multi-swap output conduit, DssCron housekeeping  - July 12, 2023

The Governance Facilitators and [Dewiz](https://dewiz.xyz/) have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **major changes** will occur within the Maker Protocol:
- Deploy new Flapper with Uniswap v2 pool and initial parameters.
- Recommended Parameter Changes from Responsible Facilitators changes to the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) , [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio), [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling), [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), and step 1 of offboarding Curve stETH/ETH Vault.
- Budget stream management and distribution, as detailed below.
- Latest distribution of Aligned Delegate MKR. 

If this executive proposal passes, the following **minor changes** will be made to the Maker Protocol:
- Pass Spark proxy-spell, with the effects detailed below .
- Update Blocktower/Andromeda (RWA015-A) Multiswap Output Conduit.
- Add Chainlog records for DssCron Housekeeping. 

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Deploy New Flapper

As per this [forum post](https://forum.makerdao.com/t/project-andromeda-full-deployment/21278), which was approved by this [poll](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201)a new version of the Flapper will be deployed utilizing a Uniswap v2 pool and changes to Maker parameters below, if this executive proposal passes.

- Deprecate MCD_FLAP and remove MCD_FLAP from chainlog
- Deploy FlapperUniV2
- Reduce vow.hump by 200 million DAI from 250 million DAI to **50 million DAI**
- Reduce vow.bump by 25,000 DAI from 30,000 DAI to **5,000 DAI**
- Set hop to **1,577 seconds**
- Set want to **0.98**
- Set receiver to MCD_PAUSE_PROXY
- Set pip to 0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df 

For more information please see the new Flapper contents [here](https://github.com/makerdao/dss-flappers/blob/univ2/README.md).

### Recommended Parameter Changes

As per this [forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6), the following parameter changes as well as the first step of offboarding the Curve stETH/ETH Vault will take place if this executive proposal passes. 

#### DSR Update

- Reduce [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) by 0.30% from 3.49% to **3.19%**

#### Liquidation Ratio Changes

- Reduce WSTETH-A  [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 10% from 160% to **150%**
- Reduce WSTETH-B  [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 10% from 185% to **175%**
- Reduce RETH-A [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 20% from 170% to **150%**

#### Stability Fee Changes

- Reduce the ETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.30% from 3.74% to **3.44%**
- Reduce the ETH-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 4.24% to **3.94%**
- Reduce the ETH-C [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 3.49% to **3.19%**
- Reduce the WSTETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.30% from 3.74% to **3.44%**
- Reduce the WSTETH-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 3.49% to **3.19%**
- Reduce the RETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 3.74% to **3.44%**
- Reduce the WBTC-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.11% from 5.80% to **5.69%**
- Reduce the WBTC-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.11% from 6.30% to **6.19%**
- Reduce the WBTC-C [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.11% from 5.55% to **5.44%**

#### Curve stETH/ETH Initial Offboarding Parameters 

- Set CRVV1ETHSTETH-A  [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to **0**.
- Remove CRVV1ETHSTETH-A from [Debt Ceiling Instant Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam).

### Budget Items and Housekeeping

As per this [forum post](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306) and this [poll](https://vote.makerdao.com/polling/QmdnSKPu)the following budget actions will take place if this executive vote passes.

#### Ecosystem Actor Dai Budget Stream

- Chronicle Labs Auditor Wallet will be streamed **3,721,800 DAI** from 2023-07-01 00:00:00 to 2024-06-30 23:59:59 at [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f).
- Jetstream Auditor Wallet will be streamed **2,964,006 DAI** from 2023-07-01 00:00:00 to 2024-12-31 23:59:59  at [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962)

#### Ecosystem Actor MKR Budget Stream

- Chronicle Labs Auditor Wallet will be streamed **2,216.4 MKR** from 2023-07-01 00:00:00 to 2024-06-30 23:59:59 at [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f).
- Jetstream Auditor Wallet will be streamed **1,619.93 MKR** from 2023-06-26 00:00:00 to 2024-12-31 23:59:59  at [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962).

#### Ecosystem Actor Dai Transfer

- Jetstream will receive 494,001 DAI at [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962).

#### Core Unit MKR Vesting Transfer

- DECO-001 will receive 125 MKR at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7).
- DUX-001 will receive 56.48 MKR at [0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad).

#### Core Unit DAI Stream Cancel

- yank DAI stream ID 14 (DUX-001) as it is replaced with the MKR stream above. 


### Aligned Delegate Compensation

As per this [forum post](https://forum.makerdao.com/t/june-2023-aligned-delegate-compensation/21310), the following MKR distributions will be made if this executive proposal passes.

| Delegate | Address | Amount (MKR) |
|---|---|---|
| 0xDefensor | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 29.76 |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 29.76 |
| QGov| [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6) | 29.76 |
| TRUE NAME | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 29.76 |
| UPMaker | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 29.76|
| vigilant | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 29.76 |
| WBC | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) | 20.16 |
| PBG | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 9.92 |
| Bandhar | [0xE83B6a503A94a5b764CCF00667689B3a522ABc21](https://etherscan.io/address/0xE83B6a503A94a5b764CCF00667689B3a522ABc21) | 7.68 |
| Libertas | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 7.04 |
| PALC | [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A) | 2.24 |
| Harmony | [0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2](https://etherscan.io/address/0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2) | 1.92 |
| VoteWizard | [0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) | 1.6 |
| Navigator | [0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) | 0.32 |

### Spark Protocol Proxy-Spell

As per this [forum post](https://forum.makerdao.com/t/freeze-the-sdai-market-on-spark/21322), the Spark Protocol Proxy-Spell at [0x843A0539Ca7466Abcb769f1c1d30C8423e13A297](https://etherscan.io/address/0x843A0539Ca7466Abcb769f1c1d30C8423e13A297) will be executed if this executive proposal passes.

This is a temporary measure to freeze the sDAI market. The purpose of this update is to restrict sDAI as collateral to only short ETH and staked ETH. Freezing a market prevents new deposits, but users are always free to repay/withdraw.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
