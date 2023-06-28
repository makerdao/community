---
title: Template - [Executive Vote] BlockTower Andromeda Updates, GUSD PSM Parameter Changes, and Other Actions - June 28, 2023
summary: BlockTower Andromeda Updates; Reduce GUSD PSM Debt Ceiling and Fee Out; Aligned Delegate One-Off Compensation; Core Unit Vesting Transfers; Reimburse BlockTower Legal Expenses; Add Chainlink keeper network treasury address; Update on-chain Monetalis Clydesdale RWA Agreement. 
date: 2023-06-28T00:00:00.000Z
address: "0x07D8D43916bc235B71d9683111De7c7c626Bb906"

---
# [Executive Proposal] BlockTower Andromeda Updates, GUSD PSM Parameter Changes, and Other Actions - June 28, 2023

The Governance Facilitators, [Dewiz](https://dewiz.xyz/), and Sidestream have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **high-impact actions** will occur within the Maker Protocol:
- The [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) for BlockTower Andromeda will be increased to **1.28 billion DAI**.
- The [Debt Ceiling Instant Access Module](https://manual.makerdao.com/module-index/module-dciam) will be enabled for BlockTower Andromeda.
- A new Output Conduit will be deployed to route BlockTower Andromeda via the USDP PSM.
- The GUSD [PSM](https://manual.makerdao.com/module-index/module-psm) parameters will be adjusted with the goal of reducing GUSD exposure.

If this executive proposal passes, the following **low-impact or routine actions** will occur within the Maker Protocol:
- Aligned Delegate One-Off Compensation totaling **277.76 MKR** will be distributed.
- Vesting transfers totaling **482.6 MKR** will be distributed to the Oracles Core Unit, the Risk Core Unit, and the Sustainable Ecosystem Scaling Core Unit.
- BlockTower will be reimbursed a total of **133,466 DAI** for legal expenses incurred in Project Andromeda from the Legal Recourse Asset Budget 
- A keeper network treasury address will be set for Chainlink.
- The on-chain representation of the Monetalis Clydesdale [RWA Agreement](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) will be updated to include documentation related to the most recent debt ceiling increase.

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### BlockTower Andromeda (RWA-015) Updates 

Given the successful onboarding [poll](https://vote.makerdao.com/polling/QmbudkVR) and testing at a Debt Ceiling of 2.5 million DAI the following actions will take place if this executive proposal passes.

The [Debt Ceiling Instant Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam) will be enabled for BlockTower Andromeda with the following parameters:
* [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): **1.28 billion DAI**
* [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): **50 million DAI**
* [Ceiling Increase Cooldown](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): **24 hours**

The BlockTower Andromeda oracle price will be updated to match the new Maximum Debt Ceiling.

A new Output Conduit at [0x1a976926bF6105Ff6dA1F7b1667bBe825974961E](https://etherscan.io/address/0x1a976926bF6105Ff6dA1F7b1667bBe825974961E#code) will be authorized, routing BlockTower Andromeda transactions via the USDP PSM as [confirmed](https://forum.makerdao.com/t/consolidated-action-items-for-2023-06-28-executive/21187/2) by the relevant Scope Facilitators. Operationally, this will mean the USDP PSM is drained to provide funding for BlockTower Andromeda.

The relevant [Chainlog](https://chainlog.makerdao.com/) entry `RWA015_A_OUTPUT_CONDUIT` will be updated to reflect the change to the Output Conduit. 

### GUSD PSM Parameter Changes

As per the outcome of this recent [poll](https://vote.makerdao.com/polling/QmaXg3JT#poll-detail), the following changes to the GUSD PSM parameters will take place if this executive proposal passes.

* The [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be reduced from 500 million DAI to **110 million DAI**. 
* The [Fee Out](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) will be reduced from 0.01% to **zero**. 

### Aligned Delegate One-Off Compensation

As described in [this summary](https://forum.makerdao.com/t/aligned-delegate-compensation-for-may-2023/21197) and authorized by the [Governance Scope](https://mips.makerdao.com/mips/details/MIP113#12-scope-bootstrapping), a total of **277.76 MKR** will be distributed to previously active Aligned Delegates as detailed below if this executive proposal passes.

| Delegate | Address | Amount (MKR) |
|---|---|---|
| 0xDefensor | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 29.76 |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 29.76 |
| Frontier Research | [0xa2d55b89654079987cf3985aeff5a7bd44da15a8](https://etherscan.io/address/0xa2d55b89654079987cf3985aeff5a7bd44da15a8) | 29.76 |
| GFX Labs | [0x9b68c14e936104e9a7a24c712beecdc220002984](https://etherscan.io/address/0x9b68c14e936104e9a7a24c712beecdc220002984) | 29.76 |
| QGov | [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6) | 29.76 |
| TRUE NAME | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 29.76 |
| vigilant | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 29.76 |
| Bandhar | [0xE83B6a503A94a5b764CCF00667689B3a522ABc21](https://etherscan.io/address/0xE83B6a503A94a5b764CCF00667689B3a522ABc21) | 9.92 |
| CodeKnight | [0xf6006d4cF95d6CB2CD1E24AC215D5BF3bca81e7D](https://etherscan.io/address/0xf6006d4cF95d6CB2CD1E24AC215D5BF3bca81e7D) | 9.92 |
| Flip Flop Flap Delegate LLC | [0x3d9751EFd857662f2B007A881e05CfD1D7833484](https://etherscan.io/address/0x3d9751EFd857662f2B007A881e05CfD1D7833484) | 9.92 |
| Libertas | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 9.92 |
| PBG | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 9.92 |
| UPMaker | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 9.92 |
| WBC | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) | 9.92 |

Note that AD compensation for May has been used to fill the [AD Buffers](https://mips.makerdao.com/mips/details/MIP101#2-6-3-4-ad-buffer-the-ad-buffer-is-an-account-of-mkr-that-builds-up-when-an-ad-achieves-an-income-rank-of-either-pd-or-rd-the-initial-income-that-the-ad-earns-accumulates-in-the-ad-buffer-until-it-contains-1-month-s-worth-of-income-at-that-point-the-ad-income-starts-paying-out-the-to-account-that-controls-the-ad-pdm-), as described in the linked [summary](https://forum.makerdao.com/t/aligned-delegate-compensation-for-may-2023/21197). 

### Core Unit Vesting Transfers

As per previously ratified governance proposals, the following vesting transfers will take place if this executive proposal passes.

* **297.3 MKR** will be transferred to the [Oracles Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP13) at  [0x2d09B7b95f3F312ba6dDfB77bA6971786c5b50Cf](https://etherscan.io/address/0x2d09B7b95f3F312ba6dDfB77bA6971786c5b50Cf) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP75#mkr-vesting).
* **175 MKR** will be transferred to the [Risk Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP2) at [0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c](https://etherscan.io/address/0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP25#mkr-vesting-schedule).
* **10.3 MKR** will be transferred to the [Sustainable Ecosystem Scaling Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP10) at [0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6](https://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP17).

### BlockTower Legal Expense Reimbursement

As per this [forum post](https://forum.makerdao.com/t/project-andromeda-legal-expenses/20984) and [authorization](https://forum.makerdao.com/t/consolidated-action-items-for-2023-06-28-executive/21187/2) from the relevant Scope Facilitators, **133,466 DAI** will be transferred to BlockTower at [0xc4dB894A11B1eACE4CDb794d0753A3cB7A633767](https://etherscan.io/address/0xc4dB894A11B1eACE4CDb794d0753A3cB7A633767) if this executive proposal passes.

### Chainlink Keeper Network Treasury Address

Following up from a previous executive entry as described in this [forum post](https://forum.makerdao.com/t/poll-notice-keeper-network-follow-up-updates/21056) and given [authorization](https://forum.makerdao.com/t/consolidated-action-items-for-2023-06-28-executive/21187/2) provided by the relevant Scope Facilitators, the Chainlink keeper network treasury address will be set to [0xaBAbd5e7d6d05672391aB2A914F57ce343D5CFA6](https://etherscan.io/address/0xaBAbd5e7d6d05672391aB2A914F57ce343D5CFA6) if this executive proposal passes.

### Monetalis Clydesdale RWA Agreement Update

As described [here](https://forum.makerdao.com/t/consolidated-action-items-for-2023-06-28-executive/21187), the Monetalis Clydesdale [RWA Agreement](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter has been out-of-date since the most recent debt ceiling increase took place. This will be updated as described if this executive proposal passes. The amended RWA Agreement parameter be found at [QmY185L4tuxFkpSQ33cPHUHSNpwy8V6TMXbXvtVraxXtb5](https://gateway.pinata.cloud/ipfs/QmY185L4tuxFkpSQ33cPHUHSNpwy8V6TMXbXvtVraxXtb5).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).