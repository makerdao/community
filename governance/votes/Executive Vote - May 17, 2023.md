---
title: Template - [Executive Vote] Offboarding Multiple Vault Types, Constitutional Delegate Compensation, Multiple DAI Budget Streams, MKR Vesting - May 17, 2023
summary: Set final offboarding parameters for multiple vault types, Constitutional Delegate compensation MKR transfers for April 2023, multiple DAI budget streams, Data Insights Core Unit (DIN-001) MKR vesting transfer.
date: 2023-05-17T00:00:00.000Z
address: "0xa1c423ee0bbc927ef5809c7ebb24c86d4284e431"

---
# [Executive Proposal] Offboarding Multiple Vault Types, Constitutional Delegate Compensation, Multiple DAI Budget Streams, MKR Vesting - May 17, 2023

The Arbitration Facilitator(s) and Sidestream Auction Services have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- YFI-A, LINK-A, MATIC-A, and UNIV2USDCETH-A vault types will be offboarded with updated risk parameters, as detailed below. 
- A total of **190.4 MKR** will be distributed to 11 Constitutional Delegates, as itemized below.
- DAI streams will be set up for Governance Security Engineering and Multichain Engineering budgets, as detailed below.
- A total of **103.16 MKR** will be transferred to the [Data Insights Core Unit (DIN-001)](https://mips.makerdao.com/mips/details/MIP39c2SP22), as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that auction keepers are available to react to unforeseen issues with their bots in the event of liquidations on offboarded collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Offboarding Parameter Changes

As per [this poll](https://vote.makerdao.com/polling/QmPwHhLT) the following parameter changes will be made to the YFI-A, LINK-A, MATIC-A, and UNIV2USDCETH-A vault types, if this executive proposal passes:

* Decrease the [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to **0%**.
* Decrease the [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to **0%**.
* Decrease the [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive) to **0%**.
* Increase the [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) to **10,000%**.

Please review the [discussion thread](https://forum.makerdao.com/t/decentralized-collateral-scope-parameter-changes-1-april-2023/20302) to inform your position before voting.

### Constitutional Delegate Compensation Distribution for April 2023

As per [MIP113, Article 5.4](https://mips.makerdao.com/mips/details/MIP113#5-4-constitutional-delegate-income-management), a total of **190.4 MKR** will be distributed to 11 Constitutional Delegates as itemized below, if this executive proposal passes:

#### Prime Constitutional Delegates

* 23.8 MKR will be transferred to [0xDefensor](https://forum.makerdao.com/t/0xdefensor-constitutional-delegate-communications/20458) at [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9).
* 23.8 MKR will be transferred to [BONAPUBLICA](https://forum.makerdao.com/t/bonapublica-constitutional-delegate-recognition-submission/20451) at [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3).
* 23.8 MKR will be transferred to [Frontier Research](https://forum.makerdao.com/t/frontier-research-ad-communications/20441) at [0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8](https://etherscan.io/address/0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8).
* 23.8 MKR will be transferred to [GFX Labs](https://forum.makerdao.com/t/constitutional-delegate-recognition-submission/20407) at [0x9B68c14e936104e9a7a24c712BEecdc220002984](https://etherscan.io/address/0x9B68c14e936104e9a7a24c712BEecdc220002984).
* 23.8 MKR will be transferred to [QGov](https://forum.makerdao.com/t/qgov-ad-recognition-submission/20494) at [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6).
* 23.8 MKR will be transferred to [TRUE NAME](https://forum.makerdao.com/t/true-name-aligned-delegate-communications-platform/20455) at [0x612F7924c367575a0Edf21333D96b15F1B345A5d](https://etherscan.io/address/0x612F7924c367575a0Edf21333D96b15F1B345A5d).
* 23.8 MKR will be transferred to [vigilant](https://forum.makerdao.com/t/cd-recognition-submission-vigilant/20457) at [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61).

#### Reserve Constitutional Delegates

* 5.95 MKR will be transferred to [CodeKnight](https://forum.makerdao.com/t/codeknight-constitutional-delegate-communications/20443) at [0xf6006d4cF95d6CB2CD1E24AC215D5BF3bca81e7D](https://etherscan.io/address/0xf6006d4cF95d6CB2CD1E24AC215D5BF3bca81e7D).
* 5.95 MKR will be transferred to [Flip Flop Flap Delegate LLC](https://forum.makerdao.com/t/flip-flop-flap-delegate-llc-aligned-delegate-recognition-submission-and-communication/20477) at [0x3d9751EFd857662f2B007A881e05CfD1D7833484](https://etherscan.io/address/0x3d9751EFd857662f2B007A881e05CfD1D7833484).
* 5.95 MKR will be transferred to [PBG](https://forum.makerdao.com/t/pbg-aligned-delegate-communication-platform/20471) at [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2).
* 5.95 MKR will be transferred to [UPMaker](https://forum.makerdao.com/t/upmaker-ad-submission/20577) at [0xbB819DF169670DC71A16F58F55956FE642cc6BcD](https://etherscan.io/address/0xbB819DF169670DC71A16F58F55956FE642cc6BcD).

### DAI Budget Streams

As per [MIP107, Articles 6.1.1A and 7.1.1A](https://mips.makerdao.com/mips/details/MIP107#6-1-1a-), the following DAI budget streams will be created if this executive proposal passes:

| Budget | DAI Amount | Start Date | End Date | Destination Address |
|---|---|---|---|---|
| Governance Security Engineering | 2,200,000 | 2023-05-01 | 2024-05-01 | [0x569fAD613887ddd8c1815b56A00005BCA7FDa9C0](https://etherscan.io/address/0x569fAD613887ddd8c1815b56A00005BCA7FDa9C0) |
 Multichain Engineering | 2,300,000 | 2023-05-01 | 2024-05-01 | [0x868B44e8191A2574334deB8E7efA38910df941FA](https://etherscan.io/address/0x868B44e8191A2574334deB8E7efA38910df941FA) |

Note that these streams are implemented as a [dssvest stream](https://manual.makerdao.com/module-index/module-token-streaming) that is controlled by the Ecosystem Scope Facilitators, and paid out to Ecosystem Actors in order to do work necessary for Governance Security Engineering and Multichain Engineering to function properly. 

For more information about these budget streams, see the forum post [here](https://forum.makerdao.com/t/scope-funding-update/20848). 

### Data Insights Core Unit (DIN-001) MKR Transfer

As per their successful [MKR vesting proposal](https://mips.makerdao.com/mips/details/MIP40c3SP64#mkr-vesting), **103.16 MKR** will be transferred to the [Data Insights Core Unit (DIN-001)](https://mips.makerdao.com/mips/details/MIP39c2SP22) wallet [0x7327Aed0Ddf75391098e8753512D8aEc8D740a1F](https://etherscan.io/address/0x7327Aed0Ddf75391098e8753512D8aEc8D740a1F), if this executive proposal passes.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
