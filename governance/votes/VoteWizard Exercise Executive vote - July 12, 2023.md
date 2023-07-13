---
title: Template - [Executive Vote] BlockTower Andromeda Upgrade, Smart Burn Engine Deployment, Active Jobs updates, Stability Scope Parameter Changes, Delegate Compensation, Funding for Ecosystem Actors, Funding for Core Units, Spark Proxy Spell  - July 12, 2023
summary: Deployment of RWA015_A_OUTPUT_CONDUIT for BlockTower Andromeda, deployment of FlapperUniV2 Flapper to activate the Smart Burn Engine , updates to keeper cron jobs, stability scope parameters changes, delegate Compensation for June, funding for Chronicle Labs and Jetstream Ecosystem Actors, funding for DECO-001 and DUX-001 core units, Spark proxy spell to temporarily freeze sDAI market.
date: 2023-07-12T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] BlockTower Andromeda Upgrade, Deployment of Smart Burn Engine, Active Jobs updates, Stability Scope Parameter Changes, Delegate Compensation, Funding for Ecosystem Actors, Funding for Core Units, Spark Proxy Spell - July 12, 2023

The Governance Facilitators and Sidestream, Dewiz, PullUp Labs and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes**, **additions**, and **routine actions** will occur within the Maker Protocol:

- Launch of new [RWA015_A_OUTPUT_CONDUIT](http://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974/11) conduit, for BlockTower Andromeda.
- Deployment of [Smart Burn Engine](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201).
- Keeper [active jobs](https://github.com/makerdao/dss-cron#active-jobs) will be updated.
- Adjustments to a series of [Stability Scope Parameters](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6).
- The distribution of [delegate compensation for June 2023](https://forum.makerdao.com/t/june-2023-aligned-delegate-compensation/21310) will be carried out.
- Funding for Chronicle Labs and Jetstream Ecosystem Actors will be carried out.
- Funding for DECO-001 and DUX-001 core units will be carried out.
- Spark proxy spell to temporarily freeze sDAI market will be executed.


**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes, additions and routine actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### BlockTower Andromeda Updates

The following actions will take place if this executive proposal passes.

- The multiswap output conduit, `RWA015_A_OUTPUT_CONDUIT`, at [0x1E86CB085f249772f7e7443631a87c6BDba2aCEb](https://etherscan.io/address/0x1E86CB085f249772f7e7443631a87c6BDba2aCEb#code) will be authorized. Allowing BlockTower Andromeda transactions to be routed via USDP, USDC or USDP PSM as detailed in this [post](https://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974).
- Authorization will be revoked from the operator on the outdated output conduit.
- `RWA015_A_OUTPUT_CONDUIT_LEGACY` will be removed from the chainlog.

### Deployment of Smart Burn Engine

As per the outcome of this recent [poll](https://vote.makerdao.com/polling/QmQmxEZp), the Smart Burn Engine will be implemented as outlined in this [post](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201), The deployment will incorporate the following specifications:

- FlapperUniV2 will be deployed.
- `MCD_FLAP` value will be replaced by the new FlapperUniV2 address in the chainlog.
- The vow.hump will be decreased from 250 million DAI to **50 million DAI**, a reduction of 200 million DAI.
- The vow.bump will be scaled down from 30,000 DAI to **5,000 DAI**, a reduction of 25,000 DAI.
- The hop will be set to **1,577 seconds**.
- The `want` parameter will be set to **0.98**.
- The receiver will be set to `MCD_PAUSE_PROXY`.
- FlapperJob will be added and included in the chainlog.
- The pip will be set to `0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df`.

Employing the FlapperUniV2 flapper, the Smart Burn Engine will procure Surplus Buffer Dai from the `vow`. A portion of this Dai will then be exchanged for MKR using the UniV2 MKR/Dai Liquidity Pool (LP). Subsequently, it will inject MKR/Dai liquidity back into the same UniV2 LP pair.

### Active Jobs updates

In accordance with the details in this [post](https://forum.makerdao.com/t/dsscron-housekeeping-additions/21292), the following keeper cron jobs will be updated:

- `AutoLineJob` [thi=1000 bps, tlo=5000 bps]: 0x67AD4000e73579B9725eE3A149F85C4Af0A61361
- `LerpJob` [maxDuration=1 day]: 0x8F8f2FC1F0380B9Ff4fE5c3142d0811aC89E32fB
- `D3MJob` [threshold=500 bps, ttl=10 minutes]: 0x1Bb799509b0B039345f910dfFb71eEfAc7022323
- `ClipperMomJob`: 0xc3A76B34CFBdA7A3a5215629a0B937CBDEC7C71a
- `OracleJob`: 0xe717Ec34b2707fc8c226b34be5eae8482d06ED03

### Stability Scope Parameter Changes

In accordance with the details in this [post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6), the following parameters proposed by BA Labs, serving as an Advisory Council Member (ACM) for the stability scope, will be changed:

#### [Dai Savings Rate](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Update:

- DSR will be reduced by 0.30% from 3.49% to **3.19%**

#### The following adjustments will be made to the [Liquidation Ratios](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio):

- `WSTETH-A` Liquidation Ratio will be decreased by 10% from 160% to **150%**
- `WSTETH-B` Liquidation Ratio will be decreased by 10% from 185% to **175%**
- `RETH-A` Liquidation Ratio will be decreased by 20% from 170% to **150%**

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) across various collateral types are set to decrease as follows:

- `ETH-A` Stability Fee will be reduced by 0.30% from 3.74% to **3.44%**
- `ETH-B` Stability Fee will be reduced by 0.30% from 4.24% to **3.94%**
- `ETH-C` Stability Fee will be reduced by 0.30% from 3.49% to **3.19%**
- `WSTETH-A` Stability Fee will be reduced by 0.30% from 3.74% to **3.44%**
- `WSTETH-B` Stability Fee will be reduced by 0.30% from 3.49% to **3.19%**
- `RETH-A` Stability Fee will be reduced by 0.30% from 3.74% to **3.44%**
- `WBTC-A` Stability Fee will be reduced by 0.11% from 5.80% to **5.69%**
- `WBTC-B` Stability Fee will be reduced by 0.11% from 6.30% to **6.19%**
- `WBTC-C` Stability Fee will be reduced by 0.11% from 5.55% to **5.44%**

### Delegate compensation for June 2023

In accordance with the details in this [post](https://forum.makerdao.com/t/june-2023-aligned-delegate-compensation/21310), the aligned delegate compensation will be distributed as follow:

| Delegate | Address | Amount |
|---|---|---|
| 0xDefensor | 0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9 | 29.76 |
| BONAPUBLICA | 0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3 | 29.76 |
| QGov | 0xB0524D8707F76c681901b782372EbeD2d4bA28a6 | 29.76 |
| TRUE NAME | 0x612f7924c367575a0edf21333d96b15f1b345a5d | 29.76 |
| UPMaker | 0xbb819df169670dc71a16f58f55956fe642cc6bcd | 29.76 |
| vigilant | 0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61 | 29.76 |
| WBC | 0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47 | 20.16 |
| PBG | 0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2 | 9.92 |
| Bandhar | 0xE83B6a503A94a5b764CCF00667689B3a522ABc21 | 7.68 |
| Libertas | 0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f | 7.04 |
| PALC | 0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A | 2.24|
| Harmony | 0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2 |1.92|
| VoteWizard | 0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1 |1.6|
| Navigator | 0x11406a9CC2e37425F15f920F494A51133ac93072 |0.32|

This is a total of **229.44** MKR.

### CRVV1ETHSTETH-A 1st Stage Offboarding

In accordance with the details in this [post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6), BA Labs, serving as an Advisory Council Member (ACM) for the stability scope, advocates for the reduction of the [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) (line) to **0 (zero)**, signaling the initiation of the `CRVV1ETHSTETH-A` offboarding procedure.

- The Debt Ceiling for `CRVV1ETHSTETH-A` is to be set to **0**.
- `CRVV1ETHSTETH-A` is to be removed from the automatic line adjustment.

### Funding for Ecosystem Actors

In accordance with the details in this [post](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306) and the [Support Scope](https://mips.makerdao.com/mips/details/MIP106#7-4-2-1a), the following budget streams and one time DAI transfer will be implemented:

#### Ecosystem Actor Dai Budget Stream

| Entity | Duration | Amount | Wallet Address |
|--------|----------|--------|----------------|
| Chronicle Labs Auditor Wallet | 2023-07-01 00:00:00 to 2024-06-30 23:59:59 | 3,721,800 DAI | 0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f |
| Jetstream Auditor Wallet | 2023-07-01 00:00:00 to 2024-12-31 23:59:59 | 2,964,006 DAI | 0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962 |

#### Ecosystem Actor MKR Budget Stream

| Entity | Duration | Amount | Wallet Address |
|--------|----------|--------|----------------|
| Chronicle Labs Auditor Wallet | 2023-07-01 00:00:00 to 2024-06-30 23:59:59 | 2,216.4 MKR | 0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f |
| Jetstream Auditor Wallet | 2023-06-26 00:00:00 to 2024-12-31 23:59:59 | 1,619.93 MKR | 0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962 |

#### Ecosystem Actor Dai Transfer

One time DAI transfer will be sent to Jetstream for 3 month runway.

| EA | Amount | Wallet Address |
|----|--------|----------------|
| Jetstream | 494,001 DAI | 0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962 |


### Funding for Core Units

#### Core Units MKR Transfers

In accordance with the details in this [post](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306) and the [Core Unit MKR Budget](https://mips.makerdao.com/mips/details/MIP40c3SP36#mkr-vesting), the following MKR transfer will be performed to core units:

| Core Unit ID | Amount | Wallet Address |
|---|---|---|
| DECO-001 | 125 MKR | 0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7 |
| DUX-001 | 56.48 MKR | 0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad |


#### Core Unit DAI Stream Cancel

In accordance with the details in this [post](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306), the following Dai stream will be cancel due to the voluntarily offboarding of the core unit:

- yank DAI stream ID 14 to DUX-001


### Trigger Spark Proxy Spell

In accordance with the details in this [post](https://forum.makerdao.com/t/freeze-the-sdai-market-on-spark/21322), the following Spark Protocol spell to freeze the sDAI market will be executed.

- Spark Spell at 0x843A0539Ca7466Abcb769f1c1d30C8423e13A297

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).