---
title: Template - [Executive Vote] BlockTower/Andromeda Vault Update, Smart Burn Engine Launch, Stability Scope Parameter Changes, Delegate Compensation, Spark Proxy Spell - July 12, 2023
summary: new MultiSwap Output Conduit for BlockTower/Andromeda vault; launch new Smart Burn Engine; add Keeper jobs to chainlog; Stability Scope parameter changes; Delegate compensation for June 2023; begin offboarding CRVV1ETHSTETH-A; Core Unit and Ecosystem Actor funding actions; trigger Spark Protocol Proxy Spell 
date: 2023-07-12T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] BlockTower/Andromeda Vault Update, Smart Burn Engine Launch, Stability Scope Parameter Changes, Delegate Compensation, Spark Proxy Spell - July 12, 2023

The Governance Facilitators, Dewiz, Sidestream and PullUp Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:
- The BlockTower/Andromeda vault will be updated with a new MultiSwap Output Conduit contract, as detailed below.
- The new Smart Burn Engine will launch, as detailed below.
- Active Keeper jobs will be added to the chainlog, as detailed below.
- Several Stability Scope parameter changes will be executed, as detailed below.
- Aligned Delegate compensation for June 2023 will be distributed, as detailed below.
- The first stage of offboarding CRVV1ETHSTETH-A will be executed, as detailed below.
- Several actions related to Core Unit and Ecosystem Actor funding will be executed, as detailed below.
- The Spark Protocol Proxy Spell will be triggered to temporarily freeze the sDAI market, as detailed below. 

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### BlockTower Andromeda Vault (RWA015-A) Update

Per this [technical assessment](http://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974?u=le_bateleur), the proposed updates to the [BlockTower/Andromeda vault](https://vote.makerdao.com/polling/QmbudkVR#poll-detail) concern authorizing a new MultiSwap Output Conduit contract. Providing greater flexibility for each swap operation, the new contract will allow the operator to interact with the desired [PSM](https://forum.makerdao.com/t/mip29-peg-stability-module/5071#paragraph-summary-5) to obtain USDC, USDP or GUSD. The contract has been deployed and [audited](https://github.com/makerdao/rwa-toolkit/blob/8d30ed2cb657641253d45b57c894613e26b4ae1b/audits/ChainSecurity_MakerDAO_RWA_Toolkit_audit.pdf). If this executive proposal passes, the following actions will occur:

* A new MultiSwap Output Conduit `RWA015_A_OUTPUT_CONDUIT` ([0x1E86CB085f249772f7e7443631a87c6BDba2aCEb](https://etherscan.io/address/0x1E86CB085f249772f7e7443631a87c6BDba2aCEb)) will be authorized.
* The operator on the existing Output Conduit will be deauthorized.
* The existing `RWA015_A_OUTPUT_CONDUIT_LEGACY` will be removed from the [chainlog](https://chainlog.makerdao.com/).

### Smart Burn Engine Launch

Per the [Atlas](https://mips.makerdao.com/mips/details/MIP101#5-9-surplus-buffer-and-smart-burn-engine-sta9), the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#9-surplus-buffer-and-smart-burn-engine), and a recent [poll](https://vote.makerdao.com/polling/QmQmxEZp#poll-detail), the proposed actions concern authorizing a [new Smart Burn Engine](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201). Instead of the previous 'buy and burn' mechanism, the new Smart Burn Engine will use excess Dai from the Surplus Buffer to accumulate MKR tokens in the form of Univ2 LP tokens. These LP tokens will be transferred to a protocol-owned address, thus increasing on-chain liquidity for MKR. If this executive proposal passes, the following actions will occur:

* The new Smart Burn Engine (`FlapperUniV2`) will launch.
* The existing `MCD_FLAP` address will be replaced in the [chainlog](https://chainlog.makerdao.com/) with `FlapperUniV2`.
* [Maximum System Surplus](https://manual.makerdao.com/parameter-index/core/param-system-surplus-buffer) (`vow.hump`) will be reduced by 200 million DAI from 250 million DAI to 50 million DAI.
* [Surplus Auction Lot Size](https://manual.makerdao.com/parameter-index/surplus-auction/param-surplus-lot-size) (`vow.bump`) will be reduced by 25,000 DAI from 30,000 DAI to 5,000 DAI.
* `hop` will be set to 1,577 seconds. `hop` defines the minimum seconds interval between kicks.
* `want` will be set to 0.98. `want` defines the relationship between the purchase price of MKR and the price provided by the MKR/USD oracle, i.e. the slippage. A `want` of 0.98 means that the purchase price of MKR can be up to 2% worse than the oracle price.
* `receiver` will be set to `MCD_PAUSE_PROXY` ([0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB](https://etherscan.io/address/0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB)). `receiver` is the destination address of the LP tokens purchased by the Smart Burn Engine.
* `pip` will be set to [0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df](https://etherscan.io/address/0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df). `pip` is a reference price oracle, used for bounding the exchange rate of the swap.
* `FlapperJob` will be added, and the [chainlog](https://chainlog.makerdao.com/) will be updated accordingly.

### Add DssCron Jobs to Chainlog

[SES](https://forum.makerdao.com/t/dsscron-housekeeping-additions/21292), the Protocol Scope Facilitator, has proposed updating the chainlog with active [DssCron jobs](https://github.com/makerdao/dss-cron) to the Keeper network. The [Keeper Network](https://mips.makerdao.com/mips/details/MIP63#paragraph-summary) is a unified repository that coordinates between third-party keeper protocols for various operational needs, including poking oracles and liquidating vaults.

If this executive proposal passes, the following Keeper network sequencer will be added to the [chainlog](https://chainlog.makerdao.com/):

* Sequencer: [0x238b4E35dAed6100C6162fAE4510261f88996EC9](https://etherscan.io/address/0x238b4E35dAed6100C6162fAE4510261f88996EC9)

If this executive proposal passes, the following active jobs will be added to the [chainlog](https://chainlog.makerdao.com/):

- AutoLineJob [thi=1000 bps, tlo=5000 bps]: [0x67AD4000e73579B9725eE3A149F85C4Af0A61361](https://etherscan.io/address/0x67AD4000e73579B9725eE3A149F85C4Af0A61361)
- LerpJob [maxDuration=1 day]: [0x8F8f2FC1F0380B9Ff4fE5c3142d0811aC89E32fB](https://etherscan.io/address/0x8F8f2FC1F0380B9Ff4fE5c3142d0811aC89E32fB)
- D3MJob [threshold=500 bps, ttl=10 minutes]: [0x1Bb799509b0B039345f910dfFb71eEfAc7022323](https://etherscan.io/address/0x1Bb799509b0B039345f910dfFb71eEfAc7022323)
- ClipperMomJob: [0xc3A76B34CFBdA7A3a5215629a0B937CBDEC7C71a](https://etherscan.io/address/0xc3A76B34CFBdA7A3a5215629a0B937CBDEC7C71a)
- OracleJob: [0xe717Ec34b2707fc8c226b34be5eae8482d06ED03](https://etherscan.io/address/0xe717Ec34b2707fc8c226b34be5eae8482d06ED03)

### Stability-Scope Defined Parameter Changes

Several parameter changes have been proposed by Ecosystem Actor [Block Analitica (BA Labs)](https://forum.makerdao.com/t/professional-ecosystem-actor-introduction-ba-labs/20813). These parameter changes are authorized by the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#0-the-stability-scope) and were approved for inclusion in this executive proposal by the responsible Facilitator in two posts ([1](http://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238?u=le_bateleur), [2](http://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6?u=le_bateleur)).

#### [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Update

- DSR will be reduced by 0.30% from 3.49% to 3.19%.

#### [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) Changes

- WSTETH-A Liquidation Ratio will be reduced by 10% from 160% to 150%.
- WSTETH-B Liquidation Ratio will be reduced by 10% from 185% to 175%.
- RETH-A Liquidation Ratio will be reduced by 20% from 170% to 150%.

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Changes

- ETH-A Stability Fee (SF) will be reduced by 0.30% from 3.74% to 3.44%.
- ETH-B Stability Fee (SF) will be reduced by 0.30% from 4.24% to 3.94%.
- ETH-C Stability Fee (SF) will be reduced by 0.30% from 3.49% to 3.19%.
- WSTETH-A Stability Fee (SF) will be reduced by 0.30% from 3.74% to 3.44%.
- WSTETH-B Stability Fee (SF) will be reduced by 0.30% from 3.49% to 3.19%.
- RETH-A Stability Fee (SF) will be reduced by 0.30% from 3.74% to 3.44%.
- WBTC-A Stability Fee (SF) will be reduced by 0.11% from 5.80% to 5.69%.
- WBTC-B Stability Fee (SF) will be reduced by 0.11% from 6.30% to 6.19%.
- WBTC-C Stability Fee (SF) will be reduced by 0.11% from 5.55% to 5.44%.

### Aligned Delegate Compensation for June 2023

Per the [Atlas](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-ad-income-and-participation-requirements) and [Governance Scope](https://mips.makerdao.com/mips/details/MIP113#6-3-prime-delegate-and-reserve-delegate-slots), the Governance Facilitators prepared a [post](http://forum.makerdao.com/t/june-2023-aligned-delegate-compensation/21310?u=le_bateleur) detailing [Aligned Delegate](https://mips.makerdao.com/mips/details/MIP101#2-6-aligned-delegates-ads-gov6) compensation for 2023. The total compensation to be distributed to Delegates will total **229.44 MKR**. If this executive proposal passes, the compensation will be distributed as seen below:

| Aligned Delegate | Address                                                      | Amount (MKR) |
| ---------------- | ------------------------------------------------------------ | ------------ |
| 0xDefensor       | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 29.76        |
| BONAPUBLICA      | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 29.76        |
| QGov             | [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6) | 29.76        |
| TRUE NAME        | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 29.76        |
| UPMaker          | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 29.76        |
| vigilant         | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 29.76        |
| WBC              | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) | 20.16        |
| PBG              | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 9.92         |
| Bandhar          | [0xE83B6a503A94a5b764CCF00667689B3a522ABc21](https://etherscan.io/address/0xE83B6a503A94a5b764CCF00667689B3a522ABc21) | 7.68         |
| Libertas         | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 7.04         |
| PALC             | [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A) | 2.24         |
| Harmony          | [0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2](https://etherscan.io/address/0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2) | 1.92         |
| VoteWizard       | [0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) | 1.6          |
| Navigator        | [0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) | 0.32         |



### CRVV1ETHSTETH-A - 1st Stage Offboarding

Per the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#14-3-12), the responsible Facilitator has proposed ([here](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238#crvv1ethsteth-a-proposed-offboarding-11) and [here](http://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6?u=le_bateleur)) taking the first step to offboard CRVV1ETHSTETH-A. The Stability Scope provides that certain collateral types must be offboarded if they fall below a total debt of 20 million. The total debt from CRVV1ETHSTETH-A fell below this threshold on June 19, 2023 and has not recovered. Until CRVV1ETHSTETH-A can be fully offboarded, the Facilitator proposes that the initial step be taken of setting the CRVV1ETHSTETH-A Debt Ceiling to **zero Dai**, thus precluding further minting. If this executive proposal passes, the following actions will occur:

- CRVV1ETHSTETH-A [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) `(line)` will be set to **zero Dai**.
- CRVV1ETHSTETH-A will be removed from [Debt Ceiling Instant Access](https://manual.makerdao.com/module-index/module-dciam) (`MCD_IAM_AUTO_LINE`).

### Ecosystem Actor Funding

#### A) Ecosystem Actor Dai Budget Streams

Per the [Support Scope](https://mips.makerdao.com/mips/details/MIP106#7-4-2) and [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-launch-project), the proposed actions concern setting up Dai budget streams to fund the work of Ecosystem Actors Jetstream and Chronicle Labs. 

- [Jetstream](https://forum.makerdao.com/t/professional-ecosystem-actor-introduction-jetstream/21054) takes over the existing duties of the Development & UX (DUX-001) Core Unit and will be initially involved in the [Launch Project](http://forum.makerdao.com/t/the-launch-project-and-scope-artifact-update-proposal/21048?u=le_bateleur). The Accessibility Scope Facilitator has [approved](http://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306/2?u=le_bateleur) the onboarding of Jetstream as an Ecosystem Actor.

- Spinning off from the Oracles Core Unit, [Chronicle Labs](https://forum.makerdao.com/t/professional-ecosystem-actor-introduction-chronicle-labs/21053) will launch a decentralized oracle protocol and infrastructure services to support the soon-to-launch SubDAOs. In a recent [poll](https://vote.makerdao.com/polling/QmdnSKPu), Maker governance ratified amendments to the Support Scope that include a [provision incubating Chronicle Labs](https://mips.makerdao.com/mips/details/MIP106#7-4-2-1a) with a one-year linear stream.  

If this executive proposal passes, the following Dai budget streams will be executed:

| Ecosystem Actor               | Start Date | End Date   | Address                                                      | Amount (DAI)  |
| ----------------------------- | ---------- | ---------- | ------------------------------------------------------------ | ------------- |
| Jetstream Auditor Wallet      | 2023-07-01 | 2024-12-31 | [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962) | 2,964,006 DAI |
| Chronicle Labs Auditor Wallet | 2023-07-01 | 2024-06-30 | [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f) | 3,721,800 DAI |



#### B) Ecosystem Actor MKR Budget Streams

Per the [Support Scope](https://mips.makerdao.com/mips/details/MIP106#7-4-2) and [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-launch-project), the proposed actions concern setting up MKR budget streams to fund the work of Ecosystem Actors Jetstream and Chronicle Labs. 

If this executive proposal passes, the following MKR budget streams will be executed:

| Ecosystem Actor               | Start Date | End Date   | Address                                                      | Amount (MKR) |
| ----------------------------- | ---------- | ---------- | ------------------------------------------------------------ | ------------ |
| Jetstream Auditor Wallet      | 2023-06-26 | 2024-12-31 | [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962) | 1,619.93 MKR |
| Chronicle Labs Auditor Wallet | 2023-07-01 | 2024-06-30 | [0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f) | 2,216.4 MKR  |



#### C) Ecosystem Actor Dai Transfer

Per the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-launch-project) and [its Facilitator](http://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306/2?u=le_bateleur), the proposed actions concern using the Launch Project budget to set up a [one-time Dai transfer](http://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306?u=le_bateleur) to onboard Ecosystem Actor Jetstream for a 3-month runway. If this executive proposal passes, the following one-time Dai transfer will be executed:

| Ecosystem Actor          | Address                                                      | Amount (DAI) |
| ------------------------ | ------------------------------------------------------------ | ------------ |
| Jetstream Auditor Wallet | [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962) | 494,001 DAI  |



### Core Unit MKR Vesting Transfers

#### A) DECO-001 Core Unit

The [DECO-001](https://forum.makerdao.com/t/mip39c2-sp23-adding-the-deco-fixed-rate-core-unit/10224#core-unit-id-7) Core Unit manages the Deco fixed-rate protocol. Per its [ratified MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP36#mkr-vesting), the proposed changes concern the transfer of **125 MKR** to the Core Unit's Auditor Wallet ([0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7)). If this executive proposal passes, the transfer will be executed. 

#### B) DUX-001 Core Unit

The Development & UX (DUX-001) Core Unit has formally [offboarded](http://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306?u=le_bateleur). Per its [original MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP27), the proposed changes concern the transfer of **56.48 MKR** to the Core Unit's Auditor Wallet ([0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad)). If this executive proposal passes, the transfer will be executed.   

### Cancel DUX-001 Core Unit Dai Stream

Per its [voluntary offboarding](http://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306?u=le_bateleur), the DAI stream ID 14 to DUX-001 will be terminated if this executive proposal passes.

### Spark Proxy Spell Execution  

Stewarded by Ecosystem Actor Phoenix Labs, [Spark Protocol](http://forum.makerdao.com/t/announcing-phoenix-labs-and-spark-protocol/19731?u=le_bateleur) is a front-end for interacting with DAI. Its first offering is [Spark Lend](https://forum.makerdao.com/t/announcing-phoenix-labs-and-spark-protocol/19731?u=le_bateleur#spark-lend-sl-7), a lending market for the most liquid, decentralized and highest market-cap assets.  

Per Phoenix Lab's [post](http://forum.makerdao.com/t/freeze-the-sdai-market-on-spark/21322?u=le_bateleur), and as authorized by the [Support Scope Facilitator,](http://forum.makerdao.com/t/freeze-the-sdai-market-on-spark/21322/2?u=le_bateleur) the proposed actions concern triggering the Spark Proxy Spell that will temporarily freeze the sDAI market on Spark Lend. Phoenix Labs is preparing for a configuration update that will restrict sDAI as collateral to only short ETH and staked ETH. While freezing a market prevents new deposits, users are always free to repay/withdraw. 

If this executive proposal passes, the following action will occur:

- Trigger Spark Spell at [0x843A0539Ca7466Abcb769f1c1d30C8423e13A297](https://etherscan.io/address/0x843A0539Ca7466Abcb769f1c1d30C8423e13A297).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).



