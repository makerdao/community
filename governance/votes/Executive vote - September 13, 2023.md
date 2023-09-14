---
title: Template - [Executive Vote] Stability Scope Parameter Changes, Spark Protocol D3M Parameter Changes, Set Fortunafi Debt Ceiling to Zero DAI, DAO Resolution for HV Bank, Delegate Compensation and Other Actions - September 13, 2023
summary: Stability Scope parameter changes; Spark Protocol D3M parameter changes; set Fortunafi (RWA005-A) Debt Ceiling to zero DAI; approve DAO Resolution for HV Bank (RWA009-A) to terminate future purchases; Aligned Delegate compensation for August 2023; Core Unit MKR vesting transfers; scuttle MCD_CAT contract; trigger Spark Protocol Proxy Spell.
date: 2023-09-13T00:00:00.000Z
address: "0xD97B4e0b43708c836935c9b2320f57074DC1D146"

---

# [Executive Proposal] Stability Scope Parameter Changes, Spark Protocol D3M Parameter Changes, Set Fortunafi Debt Ceiling to Zero DAI, DAO Resolution for HV Bank, Delegate Compensation and Other Actions - September 13, 2023

The Reserve Governance Facilitators, Sidestream, Dewiz and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following actions within the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- Several Stability Scope parameter changes will be executed, including changes to Stability Fees and activation of the DC-IAM for PSM-PAX-A. 
- Adjustments will be made to the Spark Protocol Dai Direct Deposit Module (D3M) Maximum Debt Ceiling and Ceiling Increase Cooldown. 
- The Fortunafi vault's Debt Ceiling will be set to zero DAI, per the Stability Scope Artifact's requirement to offboard legacy Legal Recourse Assets.
- A DAO resolution pertaining to the HV Bank vault will be approved to terminate future purchases and return available cash from the HVB Master Participation Trust. This is per the Stability Scope Artifact's requirement to offboard legacy Legal Recourse Assets.
- Aligned Delegate compensation for August 2023 will be distributed.
- MKR vesting transfers will be executed for the DECO-001 and SES-001 Core Units, per their successful budget proposals. 
- The `MCD_CAT` contract will be scuttled by removing it from the Chainlog and removing all its permissions on the Protocol contracts.  
- A Spark Protocol Proxy Spell will be triggered that implements changes to the DAI borrow spread and the flash loan fee.

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the actions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Stability Scope Parameter Changes

*Authorization*: [Stability Scope Artifact](https://mips.makerdao.com/mips/details/MIP104#0-the-stability-scope)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-5/21969/1) "Stability Scope Parameter Changes"\
*Authorizing Party:* Stability Scope Facilitator ([1](http://forum.makerdao.com/t/stability-scope-parameter-changes-5/21969/4), [2](http://forum.makerdao.com/t/stability-scope-parameter-changes-5/21969/6))

The parameter changes below have been proposed by Stability Scope Advisory Council Member [Block Analitica (BA Labs)](https://forum.makerdao.com/t/professional-ecosystem-actor-introduction-ba-labs/20813): 

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Changes

- ETH-A Stability Fee will be increased by 0.12% from 3.58% to **3.70%**.
- ETH-B Stability Fee will be increased by 0.12% from 4.08% to **4.20%**.
- ETH-C Stability Fee will be increased by 0.12% from 3.33% to **3.45%**.

#### PSM-PAX-A  [Debt Ceiling Instant Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam#description) Activation

Per the [Stability Scope Artifact](https://mips.makerdao.com/mips/details/MIP104#7-2-1-3-1a-), exposure to USDP is capped at 120 million USDP and requires that a marketing reward of at least 2% is available. A recent [proposal](http://forum.makerdao.com/t/proposal-to-increase-the-psm-pax-a-debt-ceiling-to-120mm-dai/21265) from Trident Digital Group and Paxos states that an ongoing monthly payment of 2.25% on the notional value of the PSM-PAX-A will be sent to MakerDAO if (i) USDP is reincluded in MIP104#7-2-1-3 and (ii) the PSM-PAX-A Max Debt Ceiling is increased to at least 120 million DAI.  

Given the Stability Scope's inclusion of USDP, the proposed change concerns activating the marketing reward by enabling the DC-IAM on PSM-PAX-A. If this executive proposal passes, the DC-IAM will be activated for PSM-PAX-A with the following parameters:  

- [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased from zero DAI to **120 million DAI**.
- [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) will be increased from zero DAI to **50 million DAI.**
- [Ceiling Increase Cooldown](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) will be set to **24 hours**. 

### Spark Protocol Dai Direct Deposit Module (D3M) Parameter Changes

*Authorization*: [Governance Poll 2023-09-04](https://vote.makerdao.com/polling/QmQnUhZt#poll-detail)\
*Proposal*: [Forum post](http://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801) "Upcoming Spell Proposed Changes"

If this executive proposal passes, the following actions will occur:

- The Spark Protocol D3M (DIRECT-SPARK-DAI) [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased from 200 million DAI to **400 million DAI.**
- The Spark Protocol D3M (DIRECT-SPARK-DAI) [Ceiling Increase Cooldown](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) will be increased from 8 hours to **12 hours.**

### Fortunafi (RWA005-A) Vault - Initiate Offboarding

*Authorization*: [Stability Scope Artifact](https://mips.makerdao.com/mips/details/MIP104#14-4-legacy-legal-recourse-assets); [Governance Poll 2023-08-28](https://vote.makerdao.com/polling/Qmcb1c9x)\
*Proposal*: [Forum post](http://forum.makerdao.com/t/request-to-poll-offboarding-legacy-legal-recourse-assets/21582) "Offboarding Legacy Legal Recourse Assets"

The Stability Scope Artifact requires that Legacy Legal Recourse Assets be offboarded prior to the launch of NewChain. If this executive proposal passes, the Fortunafi vault Debt Ceiling will be decreased from 15 million DAI to **zero DAI**.

### DAO Resolution for HV Bank (RWA009-A) Vault

*Authorization*: [Stability Scope Artifact](https://mips.makerdao.com/mips/details/MIP104#14-4-legacy-legal-recourse-assets); [Governance Poll 2023-08-28](https://vote.makerdao.com/polling/QmNgKzcG)\
*Proposal*: [Forum post](http://forum.makerdao.com/t/request-to-poll-offboarding-legacy-legal-recourse-assets/21582) "Offboarding Legacy Legal Recourse Assets"

The Stability Scope Artifact requires that Legacy Legal Recourse Assets be offboarded prior to the launch of NewChain. The Stability Scope Facilitator seeks approval of a DAO Resolution that will instruct the RWA Foundation to terminate future purchases in HV Bank’s RWA Master Participation Trust and return excess available cash to the DAO. 

If this executive proposal passes, the DAO Resolution with the IPFS hash [QmXU2TwsRpVevGY74NVFbD9bKwtsw1mSuSce7My1zinD9m](https://gateway.pinata.cloud/ipfs/QmXU2TwsRpVevGY74NVFbD9bKwtsw1mSuSce7My1zinD9m) will be approved.

### Aligned Delegate Compensation for August 2023

*Authorization*: [Atlas](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements); [Governance Scope Artifact](https://mips.makerdao.com/mips/details/MIP113#6-3-1a)\
*Proposal*: [Forum Post](https://forum.makerdao.com/t/august-2023-aligned-delegate-compensation/21983) "August 2023 Aligned Delegate Compensation"\
*Authorizing party*: Reserve Governance Facilitators

The total compensation to be distributed to Aligned Delegates will be **271.88 MKR**. If this executive proposal passes, the compensation will be distributed as seen below:

| Delegate    | Address                                                      | Amount (MKR) |
| ----------- | ------------------------------------------------------------ | ------------ |
| 0xDefensor  | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 41.67        |
| TRUE NAME   | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 41.67        |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 41.67        |
| vigilant    | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cb55500601bcce9f4cb0a0a72dc226f61) | 41.67        |
| Navigator   | [0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) | 28.23        |
| QGov        | [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6) | 20.16        |
| UPMaker     | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 13.89        |
| PALC        | [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78deac4f87bd8007b9cb56b8d53889ed5374e83a) | 13.89        |
| PBG         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8d4df847db7ffe0b46af084fe031f7691c6478c2) | 13.89        |
| Cloaky      | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) | 7.17         |
| WBC         | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xebce83e491947adb1396ee7e55d3c81414fb0d47) | 6.72         |
| BLUE        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf) | 1.25         |

*Note*: Per the Governance Scope, there are only 10 paid Aligned Delegate slots. QGov and WBC received payments in August because they were previously ranked ADs who became unranked in September. Therefore, per [the Atlas](https://mips.makerdao.com/mips/details/MIP101#2-6-3-4-1), they were allocated payments from their respective AD Buffer. 

### Core Unit MKR Vesting Transfers

#### DECO-001 Core Unit

*Authorization*: [Ratified MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP36#sentence-summary)

The proposed action concerns the transfer of **125 MKR** to the Core Unit's Auditor Wallet ([0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7)). If this executive proposal passes, the transfer will be executed.

#### SES-001 Core Unit

*Authorization*: [Ratified MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP17#sentence-summary)

The proposed action concerns the transfer of **34.94 MKR** to the Core Unit's Auditor Wallet ([0x87acdd9208f73bfc9207e1f6f0fde906bca95cc6](https://etherscan.io/address/0x87acdd9208f73bfc9207e1f6f0fde906bca95cc6)). If this executive proposal passes, the transfer will be executed.

### Scuttle MCD_CAT Contract

*Proposal*: Forum Post "[Proposal to Scuttle MCD_CAT](https://forum.makerdao.com/t/proposal-to-scuttle-mcd-cat-upcoming-executive-spell-2023-09-13/21958)"\
*Authorizing Party*: [Protocol Scope Facilitators](http://forum.makerdao.com/t/proposal-to-scuttle-mcd-cat-upcoming-executive-spell-2023-09-13/21958/2)

`MCD_CAT` is the liquidation agent of the legacy Collateral Liquidation module. Despite not being in use, it is still present in the Chainlog and still holds wards permissions within `MCD_VAT` . The proposed action concerns scuttling `MCD_CAT`, since there is no expectation the contract will ever be used again. If this Executive Proposal passes, the following actions will occur to completely remove the contract from the system:

- Remove `MCD_CAT` from the [Chainlog](https://chainlog.makerdao.com/).
- Revoke `MCD_CAT` access to `MCD_VAT`: `vat.deny(cat)`.
- Yield ownership of `MCD_CAT`: `cat.deny(pauseProxy)`.

### Spark Protocol Proxy Spell

If this executive proposal passes, a [Proxy Spell](https://forum.makerdao.com/t/executive-proxies-and-spark-protocol/20976) for Spark Protocol implementing the following changes will be triggered at [0x95bcf659653d2E0b44851232d61F6F9d2e933fB1](https://etherscan.io/address/0x95bcf659653d2E0b44851232d61F6F9d2e933fB1):

#### DAI Borrow Spread Change

*Authorization*: [Governance Poll 2023-09-04](https://vote.makerdao.com/polling/QmQrkxud)\
*Proposal*: [Forum Post](https://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801) "Upcoming Spell Proposed Changes"

The Proxy Spell will increase the DAI borrow spread from 0% to **0.5%**.

#### Flash Loan Fee Change

*Authorization*: [Governance Poll 2023-09-04](https://vote.makerdao.com/polling/QmbCDKof#poll-detail)\
*Proposal*: [Forum Post](https://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801) "Upcoming Spell Proposed Changes"

The Proxy Spell will reduce the [Flash Loan Fee](https://docs.sparkprotocol.io/developers/guides/flash-loans#flash-loan-fee) from 0.09% to **0%**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
