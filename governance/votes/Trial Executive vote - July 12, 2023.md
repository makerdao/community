---
title: Multiswap Conduit, FlapperUniV2, Cron Jobs to Chainlog, Scope defined Parameter Changes and Other Actions, July 12, 2023
summary: Includes parameter changes for multiple scope aspects; Dai Savings Rate adjustment; budget streams for Chronicle Labs and Jet Stream; cancellation of DUX-001 budget; funds transferred to Jet Stream Ecosystem and various Core Units; deployment of FlapperUniV2; Cron Jobs addition to Chainlog; and CRVV1ETHSTETH-A offboarding.
date: 2023-07-12T00:00:00.000Z
address: "$spell_address"
---

# [Executive Proposal] Multiswap Conduit, FlapperUniV2, Cron Jobs to Chainlog, Scope defined Parameter Changes and Other Actions - July 12, 2023

The Governance Facilitator(s), Sidestream, dewiz, and PullUp have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

- Multiple risk parameters will be changed including Stability Fees and Liquidation Ratios, as detailed below.
- The Dai Savings Rate will be decreased to 3.19%.
- DAI streams totaling 6,685,806 DAI will be set up for Chronicle Labs and Jet Stream development budgets.
- MKR streams totaling 3836.33 MKR will be set up for Chronicle Labs and Jet Stream development budgets. 
- Current streaming budget for DUX-001 will be canceled.
- A total of 494,001 DAI will be transferred to the Jet Stream Ecosystem.
- A total of 229.44 MKR will be distributed to previously active Aligned Delegates.
- A total of 125 MKR will be transferred to the Deco Fixed Rate Core Unit.
- A total of 56.8 MKR will be transferred to the Development & UX Core Unit (DUX-001). 
- Legacy RWA Multiswap Conduit will be removed.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- The FlapperUniV2 (Smart Burn Engine) will be added to replace Surplus Auctions (flaps).
- Multiple Cron Jobs will be added to Chainlog
- A new Multiswap Conduit will be added for RWA015-A.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Stability Scope Defined Parameter Changes

As per the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104), and the [adjustments to the base rate](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6), the following parameter changes will be made, if this executive proposal passes:

**[Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Decrease**
- Decrease the DSR by 0.30% from 3.49% to 3.19%

**[Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) Changes**
- Reduce WSTETH-A Liquidation Ratio by 10% from 160% to 150%
- Reduce WSTETH-B Liquidation Ratio by 10% from 185% to 175%
- Reduce RETH-A Liquidation Ratio by 20% from 170% to 150%

**[Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Reductions**
- Reduce the ETH-A Stability Fee (SF) by 0.30% from 3.74% to 3.44%
- Reduce the ETH-B Stability Fee (SF) by 0.30% from 4.24% to 3.94%
- Reduce the ETH-C Stability Fee (SF) by 0.30% from 3.49% to 3.19%
- Reduce the WSTETH-A Stability Fee (SF) by 0.30% from 3.74% to 3.44%
- Reduce the WSTETH-B Stability Fee (SF) by 0.30% from 3.49% to 3.19%
- Reduce the RETH-A Stability Fee (SF) by 0.30% from 3.74% to 3.44%
- Reduce the WBTC-A Stability Fee (SF) by 0.11% from 5.80% to 5.69%
- Reduce the WBTC-B Stability Fee (SF) by 0.11% from 6.30% to 6.19%
- Reduce the WBTC-C Stability Fee (SF) by 0.11% from 5.55% to 5.44%

#### CRVV1ETHSTETH-A 1st Stage Offboarding

As per [MIP104 ](https://mips.makerdao.com/mips/details/MIP104#0-the-stability-scope) the debt ceiling (``line``) for ``CRVV1ETHSTETH-A`` will be set to ``0``. 

This change will be happening alongside the other [Stability Scope Parameter changes](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6).


### Deploy Multiswap Conduit for RWA015-A (Andromeda)

Following the results of a recent [technical assessment from ChainSecurity](https://github.com/makerdao/rwa-toolkit/blob/8d30ed2cb657641253d45b57c894613e26b4ae1b/audits/ChainSecurity_MakerDAO_RWA_Toolkit_audit.pdf), the following changes will be made to [BlackTower Andromeda RWA015](https://github.com/makerdao/rwa-toolkit) if this proposal passes:

- A new version of the output conduit will be added to the chainlog as `RWA015_A_OUTPUT_CONDUIT`. This will allow an authorized party to choose which PSM they want to interact with.
- The operator on the old output conduit will be de-authorized.
- `RWA015_A_OUTPUT_CONDUIT_LEGACY` will be removed from the chainlog.

More context around [RWA015] Project Andromeda: Technical Assessment can be found [here](http://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974/11).

### Deploy FlapperUniV2

The Smart Burn Engine (Dss Flappers) allocates excess Dai from the Surplus Buffer and accumulates MKR tokens in the form of Univ2 LP tokens. Surplus Auctions (flaps) will be replaced by the [Dss Flappers](https://github.com/makerdao/dss-flappers/blob/univ2/README.md) contracts ([audit](https://chainsecurity.com/security-audit/maker-flapperuniv2/)).

Given the successful launch [poll](https://vote.makerdao.com/polling/QmQmxEZp) the following actions will take place if this proposal passes: 

* Deprecate MCD_FLAP and remove MCD_FLAP from chainlog
* Deploy FlapperUniV2
* Set ``hop`` to 1,577 seconds - hop defines the minimum interval between kicks, limiting the frequency of market actions.
* Set ``want`` to 0.98 - A want of 0.98 means that the purchase price of MKR can be up to 2% worse than the oracle price.
* Set ``receiver`` to [MCD_PAUSE_PROXY](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb) - destination address of the LP tokens purchased by the Smart Burn Engine.
* Add FlapperJob and add to chainlog
* Set ``pip`` to TBD
* [Surplus Lot Size](https://manual.makerdao.com/parameter-index/surplus-auction/param-surplus-lot-size): Reduce ``vow.bump`` by 25,000 DAI from 30,000 DAI to 5,000 DAI

Furthermore, the following stability scope change will be made in accordance with [MIP104](https://mips.makerdao.com/mips/details/MIP104#9-1-1-1-the-surplus-buffer-upper-limit-is-50-million-dai-):
* [Maximum System Surplus](https://manual.makerdao.com/parameter-index/core/param-system-surplus-buffer): Reduce ``vow.hump`` by 200 million DAI from 250 million DAI to 50 million DAI

### Adding Cron Jobs to Chainlog

The new Flapper addition [requires updates](https://forum.makerdao.com/t/dsscron-housekeeping-additions/21292) to the [cron jobs](https://github.com/makerdao/dss-cron) (scheduled tasks). This will add the following addresses to the [chainlog](https://chainlog.makerdao.com/) contract. 

**Sequencer**: [0x238b4E35dAed6100C6162fAE4510261f88996EC9](https://etherscan.io/address/0x238b4e35daed6100c6162fae4510261f88996ec9)

| Job | Deployment | Details |
|--|------|--|
| **[AutoLineJob](https://github.com/makerdao/dss-cron/blob/master/src/AutoLineJob.sol)**| [0x67AD4000e73579B9725eE3A149F85C4Af0A61361](https://etherscan.io/address/0x67ad4000e73579b9725ee3a149f85c4af0a61361)|thi=1000 bps, tlo=5000 bps| 
|**[LerpJob](https://github.com/makerdao/dss-cron/blob/master/src/LerpJob.sol)**|[0x8F8f2FC1F0380B9Ff4fE5c3142d0811aC89E32fB](https://etherscan.io/address/0x8f8f2fc1f0380b9ff4fe5c3142d0811ac89e32fb)|maxDuration=1 day|
|**[D3MJob](https://github.com/makerdao/dss-cron/blob/master/src/D3MJob.sol):**|[0x1Bb799509b0B039345f910dfFb71eEfAc7022323](https://etherscan.io/address/0x1bb799509b0b039345f910dffb71eefac7022323#code)|threshold=500 bps, ttl=10 minutes|
|**[ClipperMomJob](https://github.com/makerdao/dss-cron/blob/master/src/ClipperMomJob.sol):**|[0xc3A76B34CFBdA7A3a5215629a0B937CBDEC7C71a](https://etherscan.io/address/0xc3a76b34cfbda7a3a5215629a0b937cbdec7c71a)|-|
|**[OracleJob](https://github.com/makerdao/dss-cron/blob/master/src/OracleJob.sol):**|[0xe717Ec34b2707fc8c226b34be5eae8482d06ED03](https://etherscan.io/address/0xe717ec34b2707fc8c226b34be5eae8482d06ed03)|-|

### Aligned Delegate One-Off Compensation

As described in [this summary](https://forum.makerdao.com/t/june-2023-aligned-delegate-compensation/21310) and authorized by the [Governance Scope](https://mips.makerdao.com/mips/details/MIP113#12-scope-bootstrapping), a total of **229.44 MKR** will be distributed to previously active Aligned Delegates as detailed below if this executive proposal passes.


| Delegate | Address | Amount (MKR) |
|--|------|--|
|0xDefensor|[0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9)|29.76|
|Bonapublica|[0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762b08d7e78dbf8f24e5c3f1ab415021d3)|29.76|
|QGov|[0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xb0524d8707f76c681901b782372ebed2d4ba28a6)|29.76|
|True Name|[0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d)|29.76|
|UPMaker|[0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd)|29.76|
|vigilant|[0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cb55500601bcce9f4cb0a0a72dc226f61)|29.76|
|WBC|[0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xebce83e491947adb1396ee7e55d3c81414fb0d47)|20.16|
|PBG|[0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8d4df847db7ffe0b46af084fe031f7691c6478c2)|9.92|
|Bandhar|[0xE83B6a503A94a5b764CCF00667689B3a522ABc21](https://etherscan.io/address/0xE83B6a503A94a5b764CCF00667689B3a522ABc21)|7.68|
|Libertas|[0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xe1ebffa01883ef2b4a9f59b587fff1a5b44dbb2f)|7.04|
|PALC|[0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A)|2.24|
|Harmony|[0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2](https://etherscan.io/address/0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2)|1.92|
|Vote Wizard|[0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9e72629df4fcaa2c2f5813fbbdc55064345431b1)|1.6|
|Navigator|[0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072)|0.32|



### Ecosystem Actor DAI Budget Stream

As per [MIP106 Article 7.4.2.1A](https://mips.makerdao.com/mips/details/MIP106#7-4-2-1a-), and ratified in [Amendment Subproposal MIP102c2-SP8](https://vote.makerdao.com/polling/QmdnSKPu#poll-detail), the following DAI budget streams will be created if this executive proposal passes:

| Budget | DAI Amount | Start Date | End Date | Destination Address |
|--|--|--|--|------|
|Chronicle Labs Auditor Wallet|3,721,800|2023-07-01|2024-06-30|[0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f#readContract)|
|Jet Stream Auditor Wallet|2,964,006|2023-07-01|2024-12-31|[0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xf478a08c41ad06e8d957d5e6b6bcde7452cee962)|

### Ecosystem Actor MKR Budget Stream

As per [MIP106 Article 7.4.2.1A](https://mips.makerdao.com/mips/details/MIP106#7-4-2-1a-), and ratified in [Amendment Subproposal MIP102c2-SP8](https://vote.makerdao.com/polling/QmdnSKPu#poll-detail), the following MKR budget streams will be created if this executive proposal passes:

| Budget | MKR Amount | Start Date | End Date | Destination Address |
|--|--|--|--|------|
|Chronicle Labs Auditor Wallet|2,216.4|2023-07-01|2024-06-30|[0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f](https://etherscan.io/address/0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f#readContract)|
|Jet Stream Auditor Wallet|1,619.93|2023-06-26| 2024-12-31|[0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xf478a08c41ad06e8d957d5e6b6bcde7452cee962)|

### Ecosystem Actor DAI Transfer
- **494,001 DAI** will be transferred to [Jet Stream Ecosystem Actor](https://forum.makerdao.com/t/professional-ecosystem-actor-introduction-jetstream/21054) at [0xF478A08C41ad06E8D957d5e6B6Bcde7452cEE962](https://etherscan.io/address/0xf478a08c41ad06e8d957d5e6b6bcde7452cee962) as per this [poll](https://vote.makerdao.com/polling/QmdnSKPu#poll-detail) and [MIP](https://mips.makerdao.com/mips/details/MIP108#9-launch-project)

### Core Unit Vesting Transfers 
As per previously ratified governance proposals, the following vesting transfers will take place if this executive proposal passes.

- **125 MKR** will be transferred to the [Deco Fixed Rate Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP23) at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xf482d1031e5b172d42b2daa1b6e5cbf6519596f7) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP36#sentence-summary).
- **56.8 MKR** will be transferred to the [Development & UX Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP18) (DUX-001) at [0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP52)

### Cancel Core Unit DAI Stream

As per previously ratified [polling](https://vote.makerdao.com/polling/QmdnSKPu) and the [approval](http://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306/2) of the [Sustainable Ecosystem Scaling Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP10), the following streams will be canceled if this proposal passes:
- Current streaming [budget](https://mips.makerdao.com/mips/details/MIP40c3SP52#sentence-summary) for [DUX-001](https://mips.makerdao.com/mips/details/MIP39c2SP18) at [0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad)

## Review

### Additional Context Regarding Jetstream

[DUX-001](https://mips.makerdao.com/mips/details/MIP39c2SP18) will be winding down its core unit and [bootstrapping the Jetstream Ecosystem Actor](https://mips.makerdao.com/mips/details/MIP39c2SP18), which will carry on the mandate of DUX. This is done with the [approval](http://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306/2) of the [Sustainable Ecosystem Scaling Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP10) as defined in [MIP-108.9](https://mips.makerdao.com/mips/details/MIP108#9-launch-project) under 'Launch Unit.'

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
