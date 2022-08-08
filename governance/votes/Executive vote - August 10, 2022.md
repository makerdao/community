---
title: Template - [Executive Vote] HVBank Vault Drawdown, MOMC Parameter Changes, SocGen Vault Drawdown Authorization, Recognized Delegate Compensation - August 10, 2022
summary: Huntingdon Valley (HVBank) Vault Drawdown; MOMC parameter changes, including Stability Fees and Maximum Debt Ceilings; SocGen Vault Drawdown Authorization (OFH token, onboarded as RWA008-A); Recognized Delegates compensation (121,808 DAI).
date: 2022-08-10T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] HVBank Vault Drawdown, MOMC Parameter Changes, SocGen Vault Drawdown Authorization, Recognized Delegate Compensation - August 10, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- **25,000,000 DAI** will be drawn down for HVBank, as detailed below.
- Parameter changes from the latest [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-28-july-2022/16895) from the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355), including [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), [Maximum Debt Ceilings (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line), listed in detail below, will be applied.
- SocGen Forge will be authorized to drawdown DAI from the previously activated SocGen Vault (RWA-008).
- A total of **121,808 DAI**, detailed below, will be transferred to multiple Recognized Delegates.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that the recipients of the funds for HVBank are available at the time of execution of this executive proposal.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Huntingdon Valley (HVBank) Vault Drawdown

As per this successful governance [poll](https://vote.makerdao.com/polling/QmQMDasC#vote-breakdown), 25 million DAI will be drawn down in the RWA-009 (HVBank) vault, if this executive proposal passes.

Further description of the schedule and mechanism being used for drawdown from this vault can be seen in this [post](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/8) from the Collateral Engineering Services Core Unit (CES-001).

This will be the third of the four planned drawdowns of 25 million DAI each.

### MOMC Parameter Changes

As per this [governance poll](https://vote.makerdao.com/polling/QmfMRfE4) on the latest MakerDAO Open Market Committee [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-28-july-2022/16895), the following parameter changes will be made if this executive proposal passes:

**[Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Reductions**

- Reduce the **ETH-B** Stability Fee from 4% **to 3.75%**.
- Reduce the **WSTETH-A** Stability Fee from 2.50% to **2.25%**.
- Reduce the **WSTETH-B** Stability Fee from 0.75% to **0%**.
- Reduce the **WBTC-B** Stability Fee from 4.00% to **3.75%**.

**[Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Increases**

- Increase the **GUNIV3DAIUSDC1-A** Stability Fee from 0.01% to **0.02%**.
- Increase the **GUNIV3DAIUSDC2-A** Stability Fee from 0.05% to **0.06%**.
- Increase the **UNIV2DAIUSDC-A** Stability Fee from 0.01% to **0.02%**.

**[Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Increases**
- Increase the **GUNIV3DAIUSDC1-A** Maximum Debt Ceiling from 750 million DAI to **1 billion DAI**.
- Increase the **GUNIV3DAIUSDC2-A** Maximum Debt Ceiling from 1 billion DAI to **1.25 billion DAI**.
- Increase the **MANA-A** Maximum Debt Ceiling from 15 million DAI to **17 million DAI**.

### Activate SocGen Vault

The SocGenForge OFH token was [onboarded on August 2, 2022](https://vote.makerdao.com/executive/template-executive-vote-onboarding-real-world-asset-vaults-july-29-2022). However, due to the key holders being unavailable during the spell creation and validation, the ownership of the `operator` wallet could not be verified. 

[The ownership has now been verified](https://forum.makerdao.com/t/security-tokens-refinancing-mip6-application-for-ofh-tokens/10605/42). The final permission to SocGen's wallet which will allow them to drawdown DAI will be granted, if this executive proposal passes.

Please see [this post](https://forum.makerdao.com/t/socgen-forge-ofh-granting-final-permission-after-the-onboarding/17033) from the Collateral Engineering Services Core Unit (CES-001) that explains this in more detail.

### Recognized Delegate Compensation

As per [MIP61: Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), a total of **121,808 DAI** will be distributed to 14 Recognized Delegates as itemized below if this executive proposal passes:

- **12,000 DAI** will be transferred to [Flip Flop Flap Delegate LLC](https://vote.makerdao.com/address/0x0f4be9f208c552a6b04d9a1222f385785f95beaa) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
- **12,000 DAI** will be transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x92e1ca8b69a44bb17afa92838da68fc41f12250a) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
- **12,000 DAI** will be transferred to [JustinCase](https://vote.makerdao.com/address/0xcdb792c14391f7115ba77a7cd27f724fc9ea2091) at [0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473](https://etherscan.io/address/0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473).
- **12,000 DAI** will be transferred to [Doo](https://vote.makerdao.com/address/0x8804d391472126da56b9a560aef6c6d5aaa7607b) at [0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0](https://etherscan.io/address/0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0).
- **11,918 DAI** will be transferred to [schuppi](https://vote.makerdao.com/address/0xb4b82978fce6d26a22dea7e653bb9ce8e14f8056) at [0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167](https://etherscan.io/address/0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167).
- **11,387 DAI** will be transferred to [Flipside Crypto](https://vote.makerdao.com/address/0x84b05b0a30b6ae620f393d1037f217e607ad1b96) at [0x62a43123FE71f9764f26554b3F5017627996816a](https://etherscan.io/address/0x62a43123FE71f9764f26554b3F5017627996816a).
- **9,438 DAI** will be transferred to [Penn Blockchain](https://vote.makerdao.com/address/0x7ddb50a5b15aea7e7cf9ac8e55a7f9fd9d05ecc6) at [0x2165d41af0d8d5034b9c266597c1a415fa0253bd](https://etherscan.io/address/0x2165d41af0d8d5034b9c266597c1a415fa0253bd).
- **9,174 DAI** will be transferred to [Chris Blec](https://vote.makerdao.com/address/0x2c511d932c5a6fe4071262d49bfc018cfbaaa1f5) at [0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170](https://etherscan.io/address/0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170).
- **8,512 DAI** will be transferred to [GFX Labs](https://vote.makerdao.com/address/0xf60d7a62c98f65480725255e831de531efe3fe14) at [0xa6e8772af29b29B9202a073f8E36f447689BEef6](https://etherscan.io/address/0xa6e8772af29b29B9202a073f8E36f447689BEef6).
- **6,912 DAI** will be transferred to [MakerMan](https://vote.makerdao.com/address/0x22d5294a23d49294bf11d9db8beda36e104ad9b3) at [0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0](https://etherscan.io/address/0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0).
- **6,628 DAI** will be transferred to [ACREInvest](https://vote.makerdao.com/address/0x4d3ac33ab1dd7b0f352b8e590fe8b62c4c39ead5) at [0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D](https://etherscan.io/address/0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D).
- **4,029 DAI** will be transferred to [mhonkasalo & teemulau](https://vote.makerdao.com/address/0xaa19f47e6acb02df88efa9f023f2a38412069902) at [0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d](https://etherscan.io/address/0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d).
- **3,797 DAI** will be transferred to [Llama](https://vote.makerdao.com/address/0x4e314eba76c3062140ad196e4ffd34485e33c5f5) at [0x82cD339Fa7d6f22242B31d5f7ea37c1B721dB9C3](https://etherscan.io/address/0x82cD339Fa7d6f22242B31d5f7ea37c1B721dB9C3).
- **2,013 DAI** will be transferred to [Blockchain@Columbia](https://vote.makerdao.com/address/0xb8df77c3bd57761bd0c55d2f873d3aa89b3da8b7) at [0xdC1F98682F4F8a5c6d54F345F448437b83f5E432](https://etherscan.io/address/0xdC1F98682F4F8a5c6d54F345F448437b83f5E432).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).