---
title: Template - [Executive Vote] Activate new Flapper, initiate Curve ETH-stETH offboarding, Facilitator parameter changes, Spark Protocol proxy spell, budget actions, Aligned Delegate compensation, Andromeda housekeeping, DssCron Chainlog housekeeping - July 12, 2023
summary: Deploy new Flapper with initial parameters for UniswapV2, step 1 of CRVV1ETHSTETH-A offboarding with initial parameters, recommended parameter changes from Responsible Facilitators, freeze sDAI market on Spark Protocol, June Aligned Delegate compensation, budget implementation for Chronicle and Jetstream; MKR vesting for Development and UX and Deco Core Units, update RWA015-A output conduit, update Chainlog to sync with DssCron addresses.
date: 2023-07-12T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Activate new Flapper, initiate Curve ETH-stETH offboarding, Facilitator parameter changes, Spark Protocol proxy spell, budget actions, Aligned Delegate compensation, Andromeda housekeeping, DssCron Chainlog housekeeping - July 12, 2023

The Governance Facilitators and [dewiz](https://dewiz.xyz/) have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **major items** will occur within the Maker Protocol:
- A new Flapper (MKR burn engine) will be deployed with initial parameters to interact with a Uniswap v2 pool, as detailed below.
- Curve ETH/stETH offboarding step one will be initiated, with changes to [Debt Ceiling Instant Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam) as described below.
- Recommended parameter changes from Responsible Facilitators will be executed, including changes to the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate), [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio), and [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), as described below.
- A proxy spell, freezing the sDAI market for Spark Protocol, will be executed, as detailed below.

If this executive proposal passes, the following **minor items** will be made to the Maker Protocol:
- Actions for budget stream management and distribution will take place, as detailed below.
- 229.44 MKR will be distributed to Aligned Delegates for their June performance. 
- RWA Housekeeping will be performed for Andromeda (RWA015-A) enabling the multi-swap conduit, as detailed below.
- DssCron HouseKeeping will be performed to update the Chainlog with all used DssCron addresses, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Major Proposal Details

### New Flapper Initiation

As per this forum [post](https://forum.makerdao.com/t/project-andromeda-full-deployment/21278) and this [poll](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201) a new version of the Flapper (MKR burn engine) will be activated, if this executive proposal passes.

This implementation uses several familiar parameters applied at different settings to accommodate for swaps on Uniswap v2. Significant changes are listed below:
- **Reduce vow.hump by 200 million DAI** from 250 million DAI to **50 million DAI**.
- **Reduce vow.bump by 25,000 DAI** from 30,000 DAI to **5,000 DAI**.
- **Set hop to 26 minutes, 17 seconds**.
- **Set want to 0.98**.

For more information please the full set of actions listed in the "Contract" section of the spell address listed above. The new Flapper repo can be found [here](https://github.com/makerdao/dss-flappers/blob/univ2/README.md).

### Initiate Curve ETH/stETH Offboarding Parameters

As per this, [Atlas MIP-62](https://mips.makerdao.com/mips/details/MIP62) the first step of collateral offboarding will take place for CRVV1ETHSTETH-A based on a request from a Responsible Facilitator [here](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6), if this executive proposal passes. 

The CRVV1ETHSTETH-A [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will accordingly be set to **0**.

### Responsible Facilitator Parameter Change Recommendations

As per this forum [post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6) from a Responsible Facilitator, the following Risk Parameter updates will take place, if this executive proposal passes.

#### DSR Update

**Reduce the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) by 0.30%** from 3.49% to **3.19%**

#### [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) Changes

| Vault    | Current LR | Proposed LR |
|----------|------------|-------------|
| WSTETH-A | 160%       | **150%**    |
| WSTETH-B | 185%       | **175%**    |
| RETH-A   | 170%       | **150%**    |


#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), and [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) Changes

| Vault    | Current SF | Proposed SF |
|----------|------------|-------------|
| ETH-A    | 3.74%      | **3.44%**   |
| ETH-B    | 4.24%      | **3.94%**   |
| ETH-C    | 3.49%      | **3.19%**   |
| WSTETH-A | 3.74%      | **3.44%**   |
| WSTETH-B | 3.49%      | **3.19%**   |
| RETH-A   | 3.74%      | **3.44%**   |
| WBTC-A   | 5.80%      | **5.69%**   |
| WBTC-B   | 6.30%      | **6.19%**   |
| WBTC-C   | 5.55%      | **5.44%**   |

### Spark Protocol Proxy Spell

As per this forum [post](https://forum.makerdao.com/t/freeze-the-sdai-market-on-spark/21322), a proxy spell will be executed to freeze the sDAI market on Spark Protocol, if this executive proposal passes.

"The purpose of this update is to restrict sDAI as collateral to only short ETH and staked ETH. Freezing a market prevents new deposits, but users are always free to repay/withdraw."

The spell code for the proxy spell can be found at [0x843A0539Ca7466Abcb769f1c1d30C8423e13A297](https://etherscan.io/address/0x843A0539Ca7466Abcb769f1c1d30C8423e13A297#code).

## Minor Proposal Details

### Budget Management Actions

As per this forum [post](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306) the following budget actions will take place, if this executive proposal passes.

#### Chronicle Labs

- Chronicle Labs Auditor Wallet will be streamed **3,721,800 DAI** from 2023-07-01 00:00:00 to 2024-06-30 23:59:59 at [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f).
- Chronicle Labs Auditor Wallet will be streamed **2,216.4 MKR** from 2023-07-01 00:00:00 to 2024-06-30 23:59:59 at [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f).

#### Jetstream 

- Jetstream Auditor Wallet will be streamed **2,964,006 DAI** beginning on 2023-07-01 and ending on 2024-12-31 to [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962).
- Jetstream Auditor Wallet will be streamed **1,619.93 MKR** begining 2023-06-26 and ending on 2024-12-31 to [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962).
- Jetstream will receive 494,001 DAI to [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962).

#### Development and UX Core Unit (DUX-001)
- DUX-001 will receive 56.48 MKR at [0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad).
- End (yank) DAI stream 14 when this executive passes. 

#### Deco Core Unit (DECO-001)

- DECO-001 will receive 125 MKR at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7).


### June Awards for Aligned Delegates

As per this forum [post](https://forum.makerdao.com/t/june-2023-aligned-delegate-compensation/21310) the following distributions will be made, if this executive proposal passes.

| Delegate    | Address                                                                                                               | MKR   |
|-------------|-----------------------------------------------------------------------------------------------------------------------|-------|
| 0xDefensor  | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 29.76 |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 29.76 |
| QGov        | [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6) | 29.76 |
| TRUE NAME   | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 29.76 |
| UPMaker     | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 29.76 |
| vigilant    | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 29.76 |
| WBC         | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) | 20.16 |
| PBG         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 9.92  |
| Bandhar     | [0xE83B6a503A94a5b764CCF00667689B3a522ABc21](https://etherscan.io/address/0xE83B6a503A94a5b764CCF00667689B3a522ABc21) | 7.68  |
| Libertas    | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 7.04  |
| PALC        | [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A) | 2.24  |
| Harmony     | [0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2](https://etherscan.io/address/0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2) | 1.92  |
| VoteWizard  | [0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) | 1.6   |
| Navigator   | [0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) | 0.32  |

To learn more about Delegate Compensation, please read this [section](https://mips.makerdao.com/mips/details/MIP101#2-6-3-1-1-the-process-for-modifying-the-number-of-pd-and-rd-slots-must-generally-aim-to-have-changes-in-the-number-of-slots-happen-at-the-end-of-the-election-season-but-in-extraordinary-circumstances-which-must-be-specified-by-the-governance-scope-they-can-be-done-with-1-month-warning-) of the Atlas.

### Andromeda Output Conduit

As per this forum [post](https://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974/11) a new Output Conduit will be activated to allow Andromeda (RWA0151-A) to choose between Maker [PSMs](https://manual.makerdao.com/module-index/module-psm#trade-offs), if this executive proposal passes. 

Code for the MultiSwapOutputConduit can be found [here]([https://github.com/makerdao/rwa-toolkit/blob/8d30ed2cb657641253d45b57c894613e26b4ae1b/audits/ChainSecurity_MakerDAO_RWA_Toolkit_audit.pdf).

### DssCron Chainlog Housekeeping

As per this forum [post](https://forum.makerdao.com/t/dsscron-housekeeping-additions/21292) the Chainlog will be brought up to date with past DssCron addresses and ones required by the new additions in this spell, if this executive proposal passes. 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
