---
title: Template - [Executive Vote] Core Unit MKR Vesting, Recognized Delegate Compensation, MOMC Parameter Changes - September 07, 2022
summary: Includes MKR Vesting for Real World Finance, Deco, and Growth Core Units, Recognized Delegate compensation for August, and parameter changes from the most recent MOMC proposal.
date: 2022-09-07T00:00:00.000Z
address: "0x07bFA4db5587A75617aFA9E43624b8C2609497b5"

---
# [Executive Proposal] Core Unit MKR Vesting, Recognized Delegate Compensation, MOMC Parameter Changes - September 07, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- A total of **163 MKR** will be transferred to two core units, detailed below.
- **803 MKR** will be streamed to the Growth Core Unit (GRO-001) as per their approved MKR budget MIP, detailed below.
- A total of **117,445 DAI** will be transferred to sixteen Recognized Delegates, detailed below.
- Parameter changes from the [latest proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-25-august-2022/17448) from the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) proposal, including changes to [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), [Maximum Debt Ceilings (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line), and [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) listed in detail below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Core Unit MKR Transfers

As per their successful budget proposals (linked below), a total of 163 MKR will be streamed to multiple Core Units if this executive proposal passes:
* **38 MKR** will be transferred to the [Real World Finance Core Unit (RWF-001)](https://mips.makerdao.com/mips/details/MIP39c2SP1) at [0x96d7b01Cc25B141520C717fa369844d34FF116ec](https://etherscan.io/address/0x96d7b01Cc25B141520C717fa369844d34FF116ec) as per their approved [MKR compensation proposal](https://mips.makerdao.com/mips/details/MIP40c3SP38). Note that the amount being transferred is lower than the initially requested amount due to a reduction in the number of FTEs working for RWF-001.
* **125 MKR** will be transferred to the [Deco Fixed Rate Core Unit (DECO-001)](https://mips.makerdao.com/mips/details/MIP39c2SP23) at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7) as per their approved [MKR compensation proposal](https://mips.makerdao.com/mips/details/MIP40c3SP36).

### Core Unit MKR Stream

As per their successful [MKR compensation proposal](https://mips.makerdao.com/mips/details/MIP40c3SP23), **803 MKR** will be streamed to the [Growth Core Unit (GRO-001)](https://mips.makerdao.com/mips/details/MIP39c2SP4) at [0x7800C137A645c07132886539217ce192b9F0528e](https://etherscan.io/address/0x7800C137A645c07132886539217ce192b9F0528e) starting on 2022-07-01 and ending on 2023-07-01, if this executive proposal passes. 

Please note, as this is the second MKR vesting stream for this Core Unit, the cliff date for this stream will be set to the start date to enable the Core Unit to vest tokens for contributors that had already reached their 12-month cliff before this stream was established.

**Note:** the previous stream for the Growth Core Unit for 803 MKR was established in the [2021-12-10 executive vote](https://vote.makerdao.com/executive/template-executive-vote-parameter-changes-switching-mkr-vesting-source-december-10-2021#proposal-detail). When this stream ended, 63.18 MKR remained unclaimed. This [transaction](https://etherscan.io/tx/0x2755d689a8939e0d95c15bef1cfa14d048b79bb218362338fc9173657643c382) from the GRO-001 multi-sig has redirected this stream to the MakerDAO [Pause Proxy](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb). As a result, the leftover MKR can no longer be claimed by the Growth Core Unit.

### Recognized Delegate Compensation

As per [MIP61: Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), a total of **117,445 DAI** will be distributed to sixteen Recognized Delegates as itemized below if this executive proposal passes:

- **12,000 DAI** will be transferred to [Flip Flop Flap Delegate LLC](https://vote.makerdao.com/address/0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
- **12,000 DAI** will be transferred to [JustinCase](https://vote.makerdao.com/address/0xcdb792c14391f7115ba77a7cd27f724fc9ea2091) at [0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473](https://etherscan.io/address/0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473).
- **12,000 DAI** will be transferred to [Doo](https://vote.makerdao.com/address/0x8804d391472126da56b9a560aef6c6d5aaa7607b) at [0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0](https://etherscan.io/address/0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0).
- **11,970 DAI** will be transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x845b36e1e4f41a361dd711bda8ea239bf191fe95) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
- **11,844 DAI** will be transferred to [schuppi](https://vote.makerdao.com/address/0xb21e535fb349e4ef0520318acfe589e174b0126b) at [0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167](https://etherscan.io/address/0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167).
- **11,392 DAI** will be transferred to [Flipside Crypto](https://vote.makerdao.com/address/0x84b05b0a30b6ae620f393d1037f217e607ad1b96) at [0x62a43123FE71f9764f26554b3F5017627996816a](https://etherscan.io/address/0x62a43123FE71f9764f26554b3F5017627996816a).
- **9,773 DAI** will be transferred to [Penn Blockchain](https://vote.makerdao.com/address/0x7ddb50a5b15aea7e7cf9ac8e55a7f9fd9d05ecc6) at [0x2165d41af0d8d5034b9c266597c1a415fa0253bd](https://etherscan.io/address/0x2165d41af0d8d5034b9c266597c1a415fa0253bd).
- **8,512 DAI** will be transferred to [GFX Labs](https://vote.makerdao.com/address/0xf60d7a62c98f65480725255e831de531efe3fe14) at [0xa6e8772af29b29B9202a073f8E36f447689BEef6](https://etherscan.io/address/0xa6e8772af29b29B9202a073f8E36f447689BEef6).
- **8,090 DAI** will be transferred to [Chris Blec](https://vote.makerdao.com/address/0x2c511d932c5a6fe4071262d49bfc018cfbaaa1f5) at [0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170](https://etherscan.io/address/0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170).
- **6,681 DAI** will be transferred to [ACREInvest](https://vote.makerdao.com/address/0x4d3ac33ab1dd7b0f352b8e590fe8b62c4c39ead5) at [0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D](https://etherscan.io/address/0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D).
- **4,492 DAI** will be transferred to [mhonkasalo & teemulau](https://vote.makerdao.com/address/0xaa19f47e6acb02df88efa9f023f2a38412069902) at [0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d](https://etherscan.io/address/0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d).
- **3,797 DAI** will be transferred to [Llama](https://vote.makerdao.com/address/0x4e314eba76c3062140ad196e4ffd34485e33c5f5) at [0xA519a7cE7B24333055781133B13532AEabfAC81b](https://etherscan.io/address/0xA519a7cE7B24333055781133B13532AEabfAC81b).
- **2,670 DAI** will be transferred to [MakerMan](https://vote.makerdao.com/address/0x22d5294a23d49294bf11d9db8beda36e104ad9b3) at [0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0](https://etherscan.io/address/0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0).
- **1,809 DAI** will be transferred to [Blockchain@Columbia](https://vote.makerdao.com/address/0xb8df77c3bd57761bd0c55d2f873d3aa89b3da8b7) at [0xdC1F98682F4F8a5c6d54F345F448437b83f5E432](https://etherscan.io/address/0xdC1F98682F4F8a5c6d54F345F448437b83f5E432).
- **208 DAI** will be transferred to [CodeKnight](https://vote.makerdao.com/address/0xe89f973a19cd76c3e5e236062668e43042176638) at [0x46dFcBc2aFD5DD8789Ef0737fEdb03489D33c428](https://etherscan.io/address/0x46dFcBc2aFD5DD8789Ef0737fEdb03489D33c428).
- **207 DAI** will be transferred to [Frontier Research LLC](https://vote.makerdao.com/address/0x316090e23cc44e70245ba9846404413aca2df16f#delegate-credentials) at [0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8](https://etherscan.io/address/0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8).

### MOMC Parameter Changes

As per [this poll](https://vote.makerdao.com/polling/QmXHnn2u), the following changes recommended by the [Maker Open Market Committee - Parameter Proposal Group](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) will be made, if this executive proposal passes:

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) decreases

- Decrease the CRVV1ETHSTETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 2.25% to **2.0%**.
- Decrease the MANA-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 6% to **4.5%**.
- Decrease the ETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 2.25% to **1.5%**.
- Decrease the ETH-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 3.75% to **3.0%**.
- Decrease the WSTETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 2.25% to **1.5%**.
- Decrease the WBTC-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 2.25% to **2%**.
- Decrease the WBTC-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 3.75% to **3.5%**.
- Decrease the RENBTC-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 2.5% to **2.25%**.

#### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) increases

- Increase the WSTETH-B [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 100 million DAI to **200 million DAI**.
- Increase the CRVV1ETHSTETH-A [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 5 million DAI to **20 million DAI**.

#### [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) increases

- Increase the CRVV1ETHSTETH-A [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) from 3 million DAI to **10 million DAI**.

**Note:** the poll initially proposed a new Maximum Debt Ceiling for CRVV1ETHSTETH-A of 50 million DAI. The [Protocol Engineering Core Unit has advised](https://forum.makerdao.com/t/2022-09-07-executive-inclusion-update-crvv1ethsteth-a-maximum-debt-ceiling/17628) limiting this to 20 million DAI due to technical concerns.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).