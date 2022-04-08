---
title: Template - [Executive Vote] MOMC Parameter Changes, CRVV1ETHSTETH-A Debt Ceiling Increase, Recognized Delegate Compensation, ETHAmsterdam Event SPF Funding - April 08, 2022
summary: Parameter changes from the latest MOMC proposal, increase the CRVV1ETHSTETH-A Maximum Debt Ceiling, Recognized Delegate Compensation for March, fund the multi-sig for the ETHAmsterdam Event SPF.
date: 2022-04-08T00:00:00.000Z
address: "0x23Ed2d46c47c5f99684346374F3Ed5AC29561737"

---
# [Executive Proposal] MOMC Parameter Changes, CRVV1ETHSTETH-A Debt Ceiling Increase, Recognized Delegate Compensation, ETHAmsterdam Event SPF Funding - April 08, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Parameter Changes from the latest [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-31-march-2022/14347) from the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) including [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line), [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) and Aave D3M [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar), listed in detail below.
- An increase in the CRVV1ETHSTETH-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line), as [recommended](https://forum.makerdao.com/t/immediate-short-term-parameter-changes-proposal-for-crvv1ethsteth-a-dc-and-gap-increase/14476) by the Risk Core Unit, detailed below.
- A total of **77,183 DAI** will be paid to nine Recognized Delegates as per [MIP61 Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), detailed below.
- **50,000 DAI** will be transferred to the ETHAmsterdam Event SPF multi-sig as a result of this successful [Special Purpose Fund (SPF) application](https://mips.makerdao.com/mips/details/MIP55c3SP3), detailed below.

**Voting for this executive proposal will place your MKR in support of the changes outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### MOMC Parameter Changes

As per this [governance poll](https://vote.makerdao.com/polling/QmdS8mCx) on the latest MakerDAO Open Market Committee [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-31-march-2022/14347), the following parameter changes will be made in the Maker Protocol if this executive proposal passes:

**[Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Decreases**
- Decrease the **WSTETH-A** Stability Fee by 0.25% from **2.5%** to **2.25%**.
- Decrease the **CRVV1ETHSTETH-A** Stability Fee by 1.25% from **3.5%** to **2.25%**.
- Decrease the **WBTC-A** Stability Fee by 0.5% from **3.75%** to **3.25%**.
- Decrease the **WBTC-B** Stability Fee by 0.5% from **5%** to **4.5%**.
- Decrease the **GUNIV3DAIUSDC1-A** Stability Fee by 0.1% from **0.1%** to **0%**.
- Decrease the **GUNIV3DAIUSDC2-A** Stability Fee by 0.2% from **0.25%** to **0.05%**.

**[Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Increases**
- Increase the **GUNIV3DAIUSDC1-A** Maximum Debt Ceiling by 650 million DAI from **100 million DAI** to **750 million DAI**.
- Increase the **GUNIV3DAIUSDC2-A** Maximum Debt Ceiling by 250 million DAI from **750 million DAI** to **1 billion DAI**.

**[Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Increase**
- Increase the **GUNIV3DAIUSDC1-A** Target Available Debt by 40 million DAI from **10 million DAI** to **50 million DAI**.

**D3M [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) Increase**
- Increase the **DIRECT-AAVEV2-DAI** Target Borrow Rate by 0.65% from **2.85%** to **3.5%**.

### CRVV1ETHSTETH-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Increase

As a result of this [post](https://forum.makerdao.com/t/immediate-short-term-parameter-changes-proposal-for-crvv1ethsteth-a-dc-and-gap-increase/14476) from the [Risk Core Unit (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2), the CRVV1ETHSTETH-A Maximum Debt Ceiling will be increased by 2 million DAI from **3 million DAI** to **5 million DAI** if this executive proposal passes.

Please note that a Maximum Debt Ceiling of 5 million DAI for this vault type was already approved by an on-chain [poll](https://vote.makerdao.com/polling/Qmek9vzo).

### Recognized Delegate Compensation

As per [MIP61: Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), a total of **77,183 DAI** will be distributed to nine Recognized Delegates as itemized below if this executive proposal passes:

* 12,000 DAI transferred to [Flip Flop Flap Delegate LLC](https://vote.makerdao.com/address/0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
* 12,000 DAI transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x845b36e1e4f41a361dd711bda8ea239bf191fe95) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
* 12,000 DAI transferred to [schuppi](https://vote.makerdao.com/address/0xb21e535fb349e4ef0520318acfe589e174b0126b) at [0x89C5d54C979f682F40b73a9FC39F338C88B434c6](https://etherscan.io/address/0x89C5d54C979f682F40b73a9FC39F338C88B434c6).
* 10,761 DAI transferred to [MakerMan](https://vote.makerdao.com/address/0x22d5294a23d49294bf11d9db8beda36e104ad9b3) at [0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0](https://etherscan.io/address/0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0).
* 9,295 DAI transferred to [ACREInvest](https://vote.makerdao.com/address/0x4d3ac33ab1dd7b0f352b8e590fe8b62c4c39ead5) at [0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D](https://etherscan.io/address/0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D).
* 7,598 DAI transferred to [monetsupply](https://vote.makerdao.com/address/0x45127ec92b58c3a89e89f63553073adcaf2f1f5f) at [0x4Bd73eeE3d0568Bb7C52DFCad7AD5d47Fff5E2CF](https://etherscan.io/address/0x4Bd73eeE3d0568Bb7C52DFCad7AD5d47Fff5E2CF).
* 6,640 DAI transferred to [JustinCase](https://vote.makerdao.com/address/0xcdb792c14391f7115ba77a7cd27f724fc9ea2091) at [0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473](https://etherscan.io/address/0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473).
* 6,606 DAI transferred to [GFX Labs](https://vote.makerdao.com/address/0xf60d7a62c98f65480725255e831de531efe3fe14) at [0xa6e8772af29b29B9202a073f8E36f447689BEef6](https://etherscan.io/address/0xa6e8772af29b29B9202a073f8E36f447689BEef6).
* 283 DAI transferred to [Doo](https://vote.makerdao.com/address/0x8804d391472126da56b9a560aef6c6d5aaa7607b#delegate-credentials) at [0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0](https://etherscan.io/address/0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0).

### ETHAmsterdam Event Special Purpose Fund DAI Distribution

As per this successful [Special Purpose Fund](https://mips.makerdao.com/mips/details/MIP55) (SPF) [application](https://mips.makerdao.com/mips/details/MIP55c3SP3), 50,000 DAI will be transferred to the ETHAmsterdam SPF Event multi-sig wallet at the address [0xF34ac684BA2734039772f0C0d77bc2545e819212](https://etherscan.io/address/0xF34ac684BA2734039772f0C0d77bc2545e819212) if this executive proposal passes.

Further information about this wallet set-up can be found in this forum [post](https://forum.makerdao.com/t/mip55c3-sp3-ethamsterdam-event-spf/13781/74).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
