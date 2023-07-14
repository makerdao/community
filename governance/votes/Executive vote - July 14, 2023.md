---
title: Template - [Executive Vote] BlockTower Andromeda Upgrade, Smart Burn Engine Deployment, Keeper Job Updates, Scope Defined Parameter Changes, Delegate Compensation, Ecosystem Actor and Core Unit Funding Updates, Spark Protocol Proxy Spell Execution - July 14, 2023
summary: Deploy the multiswap output conduit for BlockTower Andromeda; deploy the new Smart Burn Engine; housekeeping updates to keeper jobs; multiple parameter changes per the Stability Scope, Delegate compensation for June 2023, funding and housekeeping for Ecosystem Actors and Core Units; execute a proxy spell for Spark Protocol.
date: 2023-07-14T00:00:00.000Z
address: "0x402D46A20C849390Da96CeB0C3c04832D29e87d7"

---
# [Executive Proposal] BlockTower Andromeda Upgrade, Smart Burn Engine Deployment, Keeper Job Updates, Scope Defined Parameter Changes, Delegate Compensation, Ecosystem Actor and Core Unit Funding Updates, Spark Protocol Proxy Spell Execution - July 14, 2023

The Governance Facilitators and Sidestream, PullUp, and dewiz have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes and additions** will occur within the Maker Protocol:
- A new multiswap output conduit for BlockTower Andromeda (RWA015-A) will be deployed, as detailed below.
- The new Smart Burn Engine will be deployed, as detailed below.
- Keeper jobs will be updated, as detailed below.
- Multiple parameter changes per the Stability Scope will be made, as detailed below.
- Delegate compensation for June 2023 will be distributed, as detailed below.
- Funding stream setup, budget distributions, and housekeeping for Ecosystem Actors and Core Units will be carried out, as detailed below.
- A proxy spell for Spark Protocol will be executed, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### BlockTower Andromeda (RWA015-A) Update

As per the original [technical assessment](https://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974), a multiswap Output Conduit was initially proposed for this vault type. This will allow the `operator` role to choose which PSM is used to obtain redeemable stablecoins in return for Dai drawn from the vault. Currently, the vault is configured to use the USDP PSM as a compromise while the multiswap tool was developed. The multiswap Output Conduit is now audited and deployed, and the following actions will be carried out, if this executive proposal passes. 

- A new Output Conduit at [0x1E86CB085f249772f7e7443631a87c6BDba2aCEb](https://etherscan.io/address/0x1E86CB085f249772f7e7443631a87c6BDba2aCEb) will be authorized, allowing the `operator` to select which PSM BlockTower Andromeda transactions are routed through. This means that USDC, GUSD, or USDP may be used for drawdowns.
- The relevant [Chainlog](https://chainlog.makerdao.com/) entry `RWA015_A_OUTPUT_CONDUIT` will be updated to reflect the change to the Output Conduit.
- The USDP, GUSD, and USDC PSMs will be whitelisted by calling `clap`.
- The current Output Conduit will be deauthorized.
- The old `RWA015_A_OUTPUT_CONDUIT_LEGACY` will be removed from the chainlog as it will no longer be used.

### Smart Burn Engine Deployment

As per this successful governance [poll](https://vote.makerdao.com/polling/QmQmxEZp) and the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#9-surplus-buffer-and-smart-burn-engine), a new Smart Burn Engine will be deployed along with the following parameters, if this executive proposal passes.

- Deploy the new Smart Burn Engine as `MCD_FLAP`.
- The [Maximum System Surplus (`vow.hump`)](https://manual.makerdao.com/parameter-index/surplus-auction/param-surplus-auction-limit) will be reduced by 200 million DAI from 250 million DAI to **50 million DAI**.
- The [Surplus Auction Lot Size (`vow.bump`)](https://manual.makerdao.com/parameter-index/surplus-auction/param-surplus-lot-size) will be reduced by 25,000 DAI from 30,000 DAI to **5,000 DAI**.
- The `hop` will be set to **1,577 seconds**. The `hop` parameter defines the minimum amount of time that must elapse between `kick`s, setting the maximum frequency of market actions.
- The `want` will be set to **0.98**. The `want` parameter defines the relationship between the purchase price of MKR and the price provided by the MKR/USD oracle, i.e., the slippage. A want of 0.98 means that the purchase price of MKR can be up to 2% worse than the oracle price. However, if the price of MKR on Uniswap is better than the Oracle price, the Smart Burn Engine will not be constrained.
- The `pip` will be set to `0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df`. The `pip` is the oracle referenced by the Smart Burn Engine.
- The `receiver` will be set to the Pause Proxy address - `0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB `. The `receiver` is the address that LP tokens will be deposited to after each market action.
- A `FlapJob` will be added to the chainlog and keeper network sequencer. The address for the `FlapJob` is `0xc32506E9bB590971671b649d9B8e18CB6260559F`. This will allow the Maker Keeper Network to trigger the Smart Burn Engine. This job will only trigger if gas price is below 138 gwei. It will still be able to trigger the Smart Burn Engine manually in this scenario. This restriction is to stop excessive amounts of gas being spent while purchasing relatively small amounts of MKR.

The new Smart Burn Engine will purchase MKR tokens for Dai from the Surplus Buffer. This MKR will then be paired with more Dai from the Surplus Buffer and deposited to UniswapV2's DAI/MKR pool. The LP tokens will be stored in the Pause Proxy.

As only one `Flapper` can be active in the Maker Protocol, the old `MCD_FLAP` used for buy-and-burn will be deactivated.

Please review the [discussion thread](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201) for more information.

### Keeper Job Updates

As per this [post](https://forum.makerdao.com/t/dsscron-housekeeping-additions/21292) from the Protocol Scope Facilitators, the following addresses related to the Maker Keeper Network (DssCron) will be added to the [Chainlog](https://chainlog.makerdao.com/), if this executive proposal passes.

- **Sequencer:** `0x238b4E35dAed6100C6162fAE4510261f88996EC9`
- **AutoLineJob:** `0x67AD4000e73579B9725eE3A149F85C4Af0A61361` - with a thi of 1000 bps and a tlo of 5000 bps
- **LerpJob:** `0x8F8f2FC1F0380B9Ff4fE5c3142d0811aC89E32fB` - with a maxDuration of 1 day
- **D3MJob:** `0x1Bb799509b0B039345f910dfFb71eEfAc7022323` - with a threshold of 500bps and a ttl of 10 minutes.
- **ClipperMomJob:** `0xc3A76B34CFBdA7A3a5215629a0B937CBDEC7C71a`
- **OracleJob:** `0xe717Ec34b2707fc8c226b34be5eae8482d06ED03`

For more information on these keeper jobs and the parameters listed, please refer to the DssCron [Github repo](https://github.com/makerdao/dss-cron).

### Scope Defined Parameter changes

As per this [post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238) and [updated numbers](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6) from Block Analitica, the following parameter changes will be made, if this executive proposal passes.

#### [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Adjustment

- Reduce the DSR by 0.30% from 3.49% to **3.19%**.

#### [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) Reductions

- Reduce the WSTETH-A Liquidation Ratio by 10% from 160% to **150%**.
- Reduce the WSTETH-B Liquidation Ratio by 10% from 185% to **175%**.
- Reduce the RETH-A Liquidation Ratio by 20% from 170% to **150%**.

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Reductions

- Reduce the ETH-A Stability Fee by 0.30% from 3.74% to **3.44%**.
- Reduce the ETH-B Stability Fee by 0.30% from 4.24% to **3.94%**.
- Reduce the ETH-C Stability Fee by 0.30% from 3.49% to **3.19%**.
- Reduce the WSTETH-A Stability Fee by 0.30% from 3.74% to **3.44%**.
- Reduce the WSTETH-B Stability Fee by 0.30% from 3.49% to **3.19%**.
- Reduce the RETH-A Stability Fee by 0.30% from 3.74% to **3.44%**.
- Reduce the WBTC-A Stability Fee by 0.11% from 5.80% to **5.69%**.
- Reduce the WBTC-B Stability Fee by 0.11% from 6.30% to **6.19%**.
- Reduce the WBTC-C Stability Fee by 0.11% from 5.55% to **5.44%**.

### Delegate Compensation for June 2023

As per [The Atlas](https://mips.makerdao.com/mips/details/MIP101) and [Governance Scope](https://mips.makerdao.com/mips/details/MIP113) the Governance Facilitators have published the details of delegate compensation for June [here](https://forum.makerdao.com/t/june-2023-aligned-delegate-compensation/21310). The payments will be distributed if this executive proposal passes.

| Delegate | Address | Amount |
|---|---|---|
| 0xDefensor | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 29.76 |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 29.76 |
| QGov | [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6) | 29.76 |
| TRUE NAME | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 29.76 |
| UPMaker | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 29.76 |
| vigilant | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 29.76 |
| WBC | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) | 20.16 |
| PBG | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 9.92 |
| Bandhar | [0xE83B6a503A94a5b764CCF00667689B3a522ABc21](https://etherscan.io/address/0xE83B6a503A94a5b764CCF00667689B3a522ABc21) | 7.68 |
| Libertas | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 7.04 |
|PALC | [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A) | 2.24|
|Harmony |[0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2](https://etherscan.io/address/0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2) |1.92|
|VoteWizard |[0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) |1.6|
|Navigator |[0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) |0.32|

This is a total of **229.44 MKR**.

### First Stage of CRVV1ETHSTETH-A Offboarding

As per this [post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238) from Block Analitica, CRVV1ETHSTETH-A meets the criteria for offboarding detailed in the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104). The following initial actions will be taken if this executive proposal passes.

- Remove CRVV1ETHSTETH-A from the [DC-IAM (autoline)](https://manual.makerdao.com/module-index/module-dciam).
- Set the CRVV1ETHSTETH-A [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to **0 DAI**.

Following discussion among the spell team the Global Debt Ceiling is not being reduced at this time. Due to each vault type having an individual Debt Ceiling this does not have any substantive effect on the operation of the Maker Protocol. For more information on the Global Debt Ceiling see [here](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling).

### Ecosystem Actor Funding

#### Ecosystem Actor Dai Budget Streams

Per the [Support Scope](https://mips.makerdao.com/mips/details/MIP106#7-4-currently-incubating) and the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108) the following Dai Budget Streams will be set up, if this executive proposal passes.

| Destination                   | Start Date | End Date   | Address                                    | Amount (DAI) |
|-------------------------------|------------|------------|--------------------------------------------|--------------|
| Chronicle Labs Auditor Wallet | 2023-07-01 | 2024-06-30 | [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f) | 3,721,800    |
| Jetstream Auditor Wallet      | 2023-07-01 | 2024-12-31 | [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962) | 2,964,006    |

Note that the stream to Jetstream is part of the Launch Project and is further described in [this](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306) forum post.

#### Ecosystem Actor MKR Budget Streams

Per the [Support Scope](https://mips.makerdao.com/mips/details/MIP106#7-4-currently-incubating) and the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108) the following MKR Budget Streams will be set up, if this executive proposal passes.

| Destination                   | Start Date | End Date   | Cliff Date | Address                                    | Amount (MKR) |
|-------------------------------|------------|------------|------------|--------------------------------------------|--------------|
| Chronicle Labs Auditor Wallet | 2023-07-01 | 2024-06-30 | 2023-07-01 | [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f) | 2,216.4      |
| Jetstream Auditor Wallet      | 2023-06-26 | 2024-12-31 | 2023-06-26 | [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962) | 1,619.93     |

*Note:* to accommodate the stream for Chronicle Labs, this executive proposal will raise the `cap` on the maximum annual MKR that can be vested through DssVest.

#### Ecosystem Actor Dai Transfer

As part of the Launch Project, the following Dai transfer will be made if this executive proposal passes.

- Transfer **494,001 DAI** to the Jetstream Auditor Wallet at [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962).

Note that the transfer to Jetstream is part of the Launch Project and is further described in [this](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306) forum post.

### Core Unit MKR Vesting Transfers

#### DECO-001

As per their successful [MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP36#mkr-vesting), **125 MKR** will be transferred to the DECO Core Unit Auditor Wallet at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7) if this executive proposal passes.

#### DUX-001

As part of their [voluntary offboarding](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306), **56.48 MKR** will be transferred to the DUX Core Unit Auditor Wallet at [0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad) if this executive proposal passes.

This is the remainder of the MKR due to the DUX Core Unit under that agreement. The original MKR budget may be seen [here](https://mips.makerdao.com/mips/details/MIP40c3SP27).

### Cancel Core Unit Dai stream

As part of their [voluntary offboarding](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306), Dai stream ID 14 to DUX-001 will be canceled if this executive proposal passes.

### Spark Proxy Spell Execution

The Spark Protocol Proxy Spell at [0x843A0539Ca7466Abcb769f1c1d30C8423e13A297](https://etherscan.io/address/0x843A0539Ca7466Abcb769f1c1d30C8423e13A297) will be executed if this executive proposal passes.

This spell will freeze the sDAI market on Spark Protocol in anticipation of further upgrades.

Further information may be found on the forum [here](https://forum.makerdao.com/t/freeze-the-sdai-market-on-spark/21322).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
