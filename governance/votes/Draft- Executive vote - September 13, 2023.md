---
title: Template - [Executive Vote] Scope-Defined Parameter Changes, Spark Protocol D3M Parameter Changes, Delegate Compensation, Set Fortunafi Debt Ceiling to Zero, DAO Resolution for HV Bank and Other Actions - September 13, 2023
summary: Scope-defined parameter changes; Spark Protocol D3M parameter changes; Aligned Delegate compensation for August 2023; set Fortunafi Debt Ceiling to zero; approve DAO Resolution for HV Bank to terminate future purchases; Trigger Spark Protocol Proxy Spell; Core Unit MKR vesting transfers; scuttle MCD_CAT contract.  
date: 2023-09-13T00:00:00.000Z
address: "$spell_address"





---

# [Executive Proposal] Scope-Defined Parameter Changes, Spark Protocol D3M Parameter Changes, Delegate Compensation, Set Fortunafi Debt Ceiling to Zero, DAO Resolution for HV Bank and Other Actions - September 13, 2023

The Reserve Governance Facilitators, Sidestream, Dewiz and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following actions within the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- Several Stability Scope-defined parameter changes will be executed, as detailed below.
- The Spark Protocol Dai Direct Deposit Module (D3M) Maximum Debt Ceiling will be increased to 400 million DAI; and the Ceiling Increase Cooldown will be increased to 12 hours. 
- Aligned Delegate compensation for August 2023 will be distributed.
- The Fortunafi vault's Debt Ceiling will be set to zero DAI, per the Stability Scope Artifact's requirement to offboard legacy Legal Recourse Assets.
- A DAO resolution pertaining to the HV Bank vault will be approved to terminate future purchases and return available cash from the HVB Master Participation Trust. This is per the Stability Scope Artifact's requirement to offboard legacy Legal Recourse Assets.
- A Spark Protocol Proxy Spell will be triggered that implements changes to the DAI borrow spread and the flash loan fee.
- MKR vesting transfers will be executed for the DECO-001 and SES-001 Core Units, per their successful budget proposals. 
- The `MCD_CAT` contract will be scuttled by removing it from the Chainlog and removing all its permissions on the Protocol contracts.  

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the actions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

For voters' convenience, each proposed item is prefaced with information showing its provenance. 

- "Authorization" links to the official document(s) or governance action authorizing the proposed item's inclusion in the Executive Vote. This can be the Atlas, a Scope Alignment Artifact, a governance poll and/or a ratified budget proposal. 
- "Reasoning" links to the MakerDAO Forum post providing the rationale and additional context for each item. 
- "Authorizing Parties" may also be listed (with or without links). These may include the responsible Scope Facilitator and/or Scope Advisory Council members.

### Stability-Scope Defined Parameter Changes

*Authorization*: [Stability Scope Artifact](https://mips.makerdao.com/mips/details/MIP104#0-the-stability-scope)\
*Reasoning*: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-5/21969/1) "Stability Scope Parameter Changes"\
*Authorizing Parties:* [Stability Scope Facilitator]() {**LINK MISSING**}

Several Stability Scope-defined parameter changes have been proposed by Stability Scope Advisory Council Member [Block Analitica (BA Labs)](https://forum.makerdao.com/t/professional-ecosystem-actor-introduction-ba-labs/20813): 

#### [Yield Benchmark](https://forum.makerdao.com/t/stability-scope-parameter-changes-5/21969#stability-collateral-yield-benchmark-usdp-included-in-cash-stablecoins-11) Change

- `Stability Collateral Yield Benchmark` will be reduced by 0.59% from 1.94% to **1.35%**.

#### [Base Rate](https://forum.makerdao.com/t/stability-scope-parameter-changes-5/21969#base-rate-changes-12) Change

- `Base Rate` will be increased by 0.02% from 3.93% to **3.95%**.

#### [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Update

- DSR will be increased by 0.12% from 3.33% to **3.45%**.

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Changes

- ETH-A Stability Fee will be increased by 0.12% from 3.58% to **3.70%**.
- ETH-B Stability Fee will be increased by 0.12% from 4.08% to **4.20%**.
- ETH-C Stability Fee will be increased by 0.12% from 3.33% to **3.45%**.

#### PSM-USDP-A DC-IAM [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Change

- Maximum Debt Ceiling will be increased from 0 (zero) to **120 million DAI**.

### Spark Protocol Dai Direct Deposit Module (D3M) Parameter Changes

*Authorization*: [Governance Poll 2023-09-04](https://vote.makerdao.com/polling/QmQnUhZt#poll-detail)\
*Reasoning*: [Forum post](http://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801) "Upcoming Spell Proposed Changes"\
*Authorizing Parties:* [Stability Scope Facilitator](http://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801/4); [BA Labs](http://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801/5)

Phoenix Labs has proposed increasing the Spark Protocol D3M [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) parameter as SparkLend's DAI borrow market is maxed out and requires capacity for more users. Phoenix Labs has also proposed increasing the D3M [Ceiling Increase Cooldown](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) parameter to reduce exposure to Maker Core should a time-sensitive shutdown be required. If this executive proposal passes, the following actions will occur:

- The Spark Protocol D3M (DIRECT-SPARK-DAI) Maximum Debt Ceiling will be increased from 200 million DAI to **400 million DAI.**
- The Spark Protocol D3M (DIRECT-SPARK-DAI) Ceiling Increase Cooldown will be increased from 8 hours to **12 hours.**

### Aligned Delegate Compensation for August 2023

*Authorization*: [Atlas](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements); [Governance Scope Artifact](https://mips.makerdao.com/mips/details/MIP113#6-3-1a)\
*Reasoning*: [Forum Post](https://forum.makerdao.com/t/august-2023-aligned-delegate-compensation/21983) "August 2023 Aligned Delegate Compensation"\
*Authorizing party*: Reserve Governance Facilitators

The total compensation to be distributed to Delegates will be **271.88 MKR**. If this executive proposal passes, the compensation will be distributed as seen below:

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
| BLUE        | [0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf](https://etherscan.io/address/0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf) | 1.25         |

*Note*: Per the Governance Scope, there are only 10 paid Aligned Delegate slots. QGov and WBC received payments in August because they were previously ranked ADs who went unranked in September. Therefore, per [the Atlas](https://mips.makerdao.com/mips/details/MIP101#2-6-3-4-1), they were allocated payments from their respective AD Buffer. 

### Fortunafi (RWA005-A) Vault - Initiate Offboarding

*Authorization*: [Stability Scope Artifact](https://mips.makerdao.com/mips/details/MIP104#14-4-legacy-legal-recourse-assets); [Governance Poll 2023-08-28](https://vote.makerdao.com/polling/Qmcb1c9x);\
*Reasoning*: [Forum post](http://forum.makerdao.com/t/request-to-poll-offboarding-legacy-legal-recourse-assets/21582) "Offboarding Legacy Legal Recourse Assets"\
*Authorizing party*:  [Stability Scope Facilitator](http://forum.makerdao.com/t/request-to-poll-offboarding-legacy-legal-recourse-assets/21582/8)

The Stability Scope Artifact requires that legacy Legal Recourse Assets be offboarded prior to the launch of NewChain. If this executive proposal passes, the Fortunafi vault Debt Ceiling will be decreased from 15 million DAI to **zero DAI**.

### DAO Resolution for HV Bank (RWA009-A) Vault

*Authorization*: [Stability Scope Artifact](https://mips.makerdao.com/mips/details/MIP104#14-4-legacy-legal-recourse-assets); [Governance Poll 2023-08-28](https://vote.makerdao.com/polling/QmNgKzcG);\
*Reasoning*: [Forum post](http://forum.makerdao.com/t/request-to-poll-offboarding-legacy-legal-recourse-assets/21582) "Offboarding Legacy Legal Recourse Assets"\
*Authorizing party*:  [Stability Scope Facilitator](http://forum.makerdao.com/t/request-to-poll-offboarding-legacy-legal-recourse-assets/21582/8)

The Stability Scope Artifact requires that legacy Legal Recourse Assets be offboarded prior to the launch of NewChain. The Stability Scope Facilitator seeks approval of a DAO Resolution that will instruct the RWA Foundation to terminate future purchases in HV Bank’s RWA Master Participation Trust and return excess available cash to the DAO. 

If this executive proposal passes, the DAO Resolution with the IPFS hash [QmXU2TwsRpVevGY74NVFbD9bKwtsw1mSuSce7My1zinD9m](https://gateway.pinata.cloud/ipfs/QmXU2TwsRpVevGY74NVFbD9bKwtsw1mSuSce7My1zinD9m) will be approved.

For reference, a raw version of the text may be found below:

```
MAKERDAO RESOLUTION

Date: DATED AS OF RELATED EXECUTIVE VOTE ON MAKERDAO
No: 1
Purpose: RWA MASTER PARTICIPATION TRUST TERMINATION OF FUTURE PURCHASES

This resolution is intended to terminate future purchases into the RWA Master Participation Trust, established July 12, 2022 pursuant to the Amended and Restated Trust Agreement by and between Wilmington Savings Fund Society, FSB (in its capacity as “Trustee”) and RWA Foundation, a Cayman Islands foundation company (the “RWA Foundation).

On July 12, 2022, RWA Master Participation Trust entered into a Master Participation Agreement (the “Agreement”) with Huntingdon Valley Bank, a Pennsylvania chartered bank, acting as “Seller” and RWA Master Participation Trust acting as “Buyer.”

Reference is made to the Articles of Association (the “Articles”) of the RWA Foundation, pursuant to which RWA Foundation’s operations are governed.

This resolution sets out the instructions and ratifications duly passed as an executed vote on https://vote.makerdao.com (“Maker Governance Voting Portal”) in accordance with the governance protocols of MakerDAO on the date specified above.

RATIFICATION AND INSTRUCTION

In accordance with the governance protocols of MakerDAO on the date specified above and pursuant to the Articles, the Maker token holders hereby approve and ratify the termination of future purchases into the RWA Master Participation Trust pursuant to the Agreement and instruct the directors of the RWA Foundation and its associated agents (Leeward Management, Zedra Directors, and Silverside Management) to perform the following actions:

(i) Instruct the Trustee or other parties as necessary to provide written notice to Seller for the purpose of terminating future purchases as soon as permissible under the Agreement.
(ii) Instruct the Trustee or other parties as necessary, after the termination of future purchases is in effect, to return excess available cash held at WSFS for the benefit of the RWA Master Participation Trust to the MakerDAO protocol

```



### Spark Proxy Spell

A [Proxy Spell](https://forum.makerdao.com/t/executive-proxies-and-spark-protocol/20976) for Spark Protocol at [X] {**MISSING**} will be triggered if this executive proposal passes.

#### DAI Borrow Spread Change

*Authorization*: [Governance Poll 2023-09-04](https://vote.makerdao.com/polling/QmQrkxud)\
*Reasoning*: [Forum Post](https://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801) "Upcoming Spell Proposed Changes"\

Phoenix Labs has proposed increasing the DAI borrow spread; otherwise, there would be zero-risk in farming the airdrop. The Proxy Spell will increase the DAI borrow spread from 0% to **0.5%**.

#### Flash Loan Fee Change

*Authorization*: [Governance Poll 2023-09-04](https://vote.makerdao.com/polling/QmbCDKof#poll-detail)\
*Reasoning*: [Forum Post](https://forum.makerdao.com/t/upcoming-spell-proposed-changes/21801) "Upcoming Spell Proposed Changes"\

The Flash Loan Fee was reset to 0.09% in the pool upgrade and needs to be lowered again to its previous level. The Proxy Spell will reduce the [Flash Loan Fee](https://docs.sparkprotocol.io/developers/guides/flash-loans#flash-loan-fee) from 0.09% to **0%**.

### Core Unit MKR Vesting Transfers

#### A) DECO-001 Core Unit

*Authorization*: [Ratified MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP36#sentence-summary)

The [DECO-001](https://mips.makerdao.com/mips/details/MIP39c2SP23#mission) Core Unit manages the Deco fixed-rate protocol. The proposed action concerns the transfer of **125 MKR** to the Core Unit's Auditor Wallet ([0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7)). If this executive proposal passes, the transfer will be executed.

#### B) SES-001 Core Unit

*Authorization*: [Ratified MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP17#sentence-summary)

The Sustainable Ecosystem Scaling (SES) Core Unit is the Responsible Facilitator for the Support, Protocol, Stability and Accessibility Scopes. The proposed action concerns the transfer of **34.94 MKR** to the Core Unit's Auditor Wallet ([0x87acdd9208f73bfc9207e1f6f0fde906bca95cc6](https://etherscan.io/address/0x87acdd9208f73bfc9207e1f6f0fde906bca95cc6)). If this executive proposal passes, the transfer will be executed.

### Scuttle MCD_CAT Contract

*Reasoning*: Forum Post "[Proposal to Scuttle MCD_CAT](https://forum.makerdao.com/t/proposal-to-scuttle-mcd-cat-upcoming-executive-spell-2023-09-13/21958)"\
*Authorizing Party*: Protocol Scope Facilitators

`MCD_CAT` is the liquidation agent of the legacy Collateral Liquidation module. Despite not being in use, it is still present in the Chainlog and still holds wards permissions within `MCD_VAT` . The proposed action concerns scuttling `MCD_CAT`, since there is no expectation the contract will ever be used again. If this Executive Proposal passes, the following actions will occur to completely remove the contract from the system:

- Remove `MCD_CAT` from the [Chainlog](https://chainlog.makerdao.com/).
- Revoke `MCD_CAT` access to `MCD_VAT`: `vat.deny(cat)`.
- Yield ownership of `MCD_CAT`: `cat.deny(pauseProxy)`.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).