---
title: Template - [Executive Vote] Parameter Changes, Starknet Bridge Limit and Authority Changes, Recognized Delegate Compensation, SH-001 Budget Distribution - June 08, 2022
summary: Parameter changes from the latest MOMC proposal, Maximum Debt Ceiling changes as the first step of the collateral off-boarding process, increase the Starknet DAI bridge limit and give DSChief control over the L1EscrowMom contract, Recognized Delegate Compensation for May 2022, DAI transfer and set-up of DAI and MKR streams for the Strategic Happiness Core Unit.
date: 2022-06-08T00:00:00.000Z
address: "0x7d5f7f781Fb8A256006026255dEaa0BCe1bBfEd2"

---
# [Executive Proposal] Parameter Changes, Starknet Bridge Limit and Authority Changes, Recognized Delegate Compensation, SH-001 Budget Distribution - June 08, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes and additions** will occur within the Maker Protocol:
- Parameter changes from the latest proposal from the MakerDAO Open Market Committee proposal including [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) changes, Aave D3M [Target Borrow Rate](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) decrease, WSTETH-B [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) increase, listed in detail below.
- Multiple vault types will have their [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) set to 0 as the first stage of the [collateral off-boarding process](https://mips.makerdao.com/mips/details/MIP62), detailed below.
- DAI bridge limit and authority changes to the Starknet DAI Bridge, detailed below.
- A total of **78,062 DAI** will be paid to eleven Recognized Delegates as per [MIP61 Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), detailed below.
- A total of **230,000 DAI** will be transferred to the Strategic Happiness Core Unit (SH-001), detailed below.
- A total of **540,000 DAI** will be streamed to the Strategic Happiness Core Unit (SH-001), detailed below.
- A total of **250 MKR** will be streamed to the Strategic Happiness Core Unit (SH-001), detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### MOMC Parameter Changes

As per this [governance poll](https://vote.makerdao.com/polling/QmYx9e3k) on the latest MakerDAO Open Market Committee [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-27-may-2022/15410), the following parameter changes will be made if this executive proposal passes:

**[Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Decreases**
- Decrease the **WSTETH-A** Maximum Debt Ceiling by 100 million DAI from **300 million DAI** to **200 million DAI**.
- Decrease the **DIRECT-AAVEV2-DAI** Maximum Debt Ceiling by 200 million DAI from **300 million DAI** to **100 million DAI**.
- Decrease the **LINK-A** Maximum Debt Ceiling by 50 million DAI from **100 million DAI** to **50 million DAI**.

**[Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Increase**
- Increase the **MANA-A** Maximum Debt Ceiling by 5 million DAI from **10 million DAI** to **15 million DAI**.

**D3M [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) Decrease**
- Decrease the **DIRECT-AAVEV2-DAI** Target Borrow Rate by 0.75% from **3.5%** to **2.75%**.

**[Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Increase**
- Increase the **WSTETH-B** Target Available Debt by 15 million DAI from **15 million DAI** to **30 million DAI**.

### Maximum Debt Ceiling Reductions

As per these governance polls ([1](https://vote.makerdao.com/polling/QmSfLS6V), [2](https://vote.makerdao.com/polling/QmQUozNn), [3](https://vote.makerdao.com/polling/QmY3YsDB), [4](https://vote.makerdao.com/polling/QmUeYVa2), [5](https://vote.makerdao.com/polling/QmZHNkip)), the following vault types will have their [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) set to 0 DAI as the first-step of the collateral off-boarding process defined in [MIP62](https://mips.makerdao.com/mips/details/MIP62) if this executive proposal passes:

- **UNI-A**
- **UNIV2DAIETH-A**
- **UNIV2WBTCETH-A**
- **UNIV2UNIETH-A**
- **UNIV2WBTCDAI-A**

For more information, please see the original Signal Request on the forum [here](https://forum.makerdao.com/t/signal-request-offboard-uni-univ2daieth-univ2wbtceth-univ2unieth-and-univ2wbtcdai/15160).

### Starknet DAI Bridge Technical Changes

As a result of this [post](https://forum.makerdao.com/t/details-about-spells-to-be-included-in-june-8th-2022-executive-vote/15532) from the [StarkNet Engineering Core Unit (SNE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP19), the following changes will be made, if this executive proposal passes:

- The DAI Bridge Limit will be increased by 100,000 DAI from **100,000 DAI** to **200,000 DAI**. Please note Maker Governance has already approved a DAI Bridge Limit of up to 5 million DAI in this governance [poll](https://vote.makerdao.com/polling/QmUnhQZy).
- [DSChief](https://etherscan.io/address/0x0a3f6849f78076aefaDf113F5BED87720274dDC0) will be given control over [L1EscrowMom](https://etherscan.io/address/0xc238E3D63DfD677Fa0FA9985576f0945C581A266). This change will allow Maker Governance to shut down the Starknet Bridge via an Executive Vote without needing to wait for the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) for the shutdown to take effect.
	- This will be achieved by calling `setAuthority(0x0a3f6849f78076aefaDf113F5BED87720274dDC0)` on the L1EscrowMom contract.

### Strategic Happiness Core Unit (SH-001) Budget Distribution

As per their successful [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP67), the following budget distributions will take place for the [Strategic Happiness Core Unit (SH-001)](https://mips.makerdao.com/mips/details/MIP39c2SP11), if this executive proposal passes:

* **230,000 DAI** will be transferred to the [Strategic Happiness Core Unit (SH-001)](https://mips.makerdao.com/mips/details/MIP39c2SP11) at [0xc657aC882Fb2D6CcF521801da39e910F8519508d](https://etherscan.io/address/0xc657aC882Fb2D6CcF521801da39e910F8519508d).
* **540,000 DAI** will be streamed to the [Strategic Happiness Core Unit (SH-001)](https://mips.makerdao.com/mips/details/MIP39c2SP11) at [0xc657aC882Fb2D6CcF521801da39e910F8519508d](https://etherscan.io/address/0xc657aC882Fb2D6CcF521801da39e910F8519508d) starting on 2022-06-01 and ending on 2023-03-15.
* **250 MKR** will be streamed to the [Strategic Happiness Core Unit (SH-001)](https://mips.makerdao.com/mips/details/MIP39c2SP11) at [0x955993Df48b0458A01cfB5fd7DF5F5DCa6443550](https://etherscan.io/address/0x955993Df48b0458A01cfB5fd7DF5F5DCa6443550) starting on 2022-06-01 and ending on 2026-06-01 with a cliff date of 2023-11-23.

Please note the address for the DAI budget distributions is different to the address listed in the [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP67) after the Core Unit Facilitator set up a multi-sig wallet for the Core Unit. Please see this forum [post](https://forum.makerdao.com/t/mip40c3-sp67-modify-core-unit-budget-strategic-happiness-sh-001/13805/93) for more details.

### Recognized Delegate Compensation

As per [MIP61: Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), a total of **78,062 DAI** will be distributed to eleven Recognized Delegates as itemized below if this executive proposal passes:

* 12,000 DAI transferred to [Flip Flop Flap Delegate LLC](https://vote.makerdao.com/address/0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
* 12,000 DAI transferred to [schuppi](https://vote.makerdao.com/address/0xb21e535fb349e4ef0520318acfe589e174b0126b) at [0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167](https://etherscan.io/address/0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167).
* 12,000 DAI transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x845b36e1e4f41a361dd711bda8ea239bf191fe95) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
* 11,025 DAI transferred to [MakerMan](https://vote.makerdao.com/address/0x22d5294a23d49294bf11d9db8beda36e104ad9b3) at [0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0](https://etherscan.io/address/0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0).
* 9,372 DAI transferred to [ACREInvest](https://vote.makerdao.com/address/0x4d3ac33ab1dd7b0f352b8e590fe8b62c4c39ead5) at [0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D](https://etherscan.io/address/0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D).
* 7,626 DAI transferred to [JustinCase](https://vote.makerdao.com/address/0xcdb792c14391f7115ba77a7cd27f724fc9ea2091) at [0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473](https://etherscan.io/address/0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473).
* 6,607 DAI transferred to [GFX Labs](https://vote.makerdao.com/address/0xf60d7a62c98f65480725255e831de531efe3fe14) at [0xa6e8772af29b29B9202a073f8E36f447689BEef6](https://etherscan.io/address/0xa6e8772af29b29B9202a073f8E36f447689BEef6).
* 6,275 DAI transferred to [monetsupply](https://vote.makerdao.com/address/0x45127ec92b58c3a89e89f63553073adcaf2f1f5f) at [0x4Bd73eeE3d0568Bb7C52DFCad7AD5d47Fff5E2CF](https://etherscan.io/address/0x4Bd73eeE3d0568Bb7C52DFCad7AD5d47Fff5E2CF).
* 622 DAI transferred to [Doo](https://vote.makerdao.com/address/0x8804d391472126da56b9a560aef6c6d5aaa7607b) at [0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0](https://etherscan.io/address/0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0).
* 270 DAI transfered to [Flipside Crypto](https://vote.makerdao.com/address/0x84b05b0a30b6ae620f393d1037f217e607ad1b96) at [0x62a43123FE71f9764f26554b3F5017627996816a](https://etherscan.io/address/0x62a43123FE71f9764f26554b3F5017627996816a).
* 265 DAI transferred to [Penn Blockchain](https://vote.makerdao.com/address/0x7ddb50a5b15aea7e7cf9ac8e55a7f9fd9d05ecc6) at [0x070341aA5Ed571f0FB2c4a5641409B1A46b4961b](https://etherscan.io/address/0x070341aA5Ed571f0FB2c4a5641409B1A46b4961b).

For further information, please see this forum [post](https://forum.makerdao.com/t/recognized-delegate-compensation-breakdown-may-2022/15536).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
