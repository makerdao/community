---
title: Template - [Executive Vote] Maker Teleport Temporary Shutdown, DAI Transfers, Starknet Contract Deauthorizations - February 3, 2023
summary: Temporarily shut down the L2 side of the teleport bridge on Optimism, Arbitrum, and Starknet; DAI transfers for SPF funding, Tech-Ops Core Unit, and GovComms severance; deauthorize the old Starknet contracts.
date: 2023-02-03T00:00:00.000Z
address: "0x2aC9F1c14Eec4B7955978f1E808B28dE337f8D20"

---
# [Executive Proposal] Maker Teleport Temporary Shutdown, DAI Transfers, Starknet Contract Deauthorizations - February 3, 2023

The Governance Facilitator(s) and the Starknet Engineering and Protocol Engineering Core Units have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The L2 side of the Teleport bridge on Optimism, Arbitrum, and Starknet will be temporarily shut down, as detailed below.
- **138,894 DAI** will be transferred to the Tech-Ops Core Unit, as detailed below.
- A total of **146,559 DAI** will be transferred to twelve recipients as part of the offboarding of the Governance Communications Core Unit, itemized below.
- **209,000 DAI** will be transferred to fund a Special Purpose Fund posted by the Strategic Finance Core Unit, as detailed below.
- The old Starknet bridge and governance relays will be deauthorized, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Maker Teleport Temporary Shutdown

As per this [forum post](https://forum.makerdao.com/t/community-notice-pecu-to-redeploy-teleport-l2-gateways/19550) from Facilitator @Derek, the Protocol Engineering Core Unit is planning to redeploy the Teleport L2 Gateways due to the identification of a minor issue. To facilitate this, the L2 side of the Teleport bridges will be temporarily shut down to protect users if this executive proposal passes.

Specifically, `ETH-MAIN-A` will be removed from the `validDomains` mapping of authorized destination domains in the `L2DaiTeleportGateway` contract for each of the three supported L2 domains (Optimism, Arbitrum, and Starknet). This action will be implemented by calling the `L1GovernanceRelay` contract of each domain in order to execute a special-purpose L2 spell (executed by the `L2GovernanceRelay` of the domain) that will take care of calling the file function of the corresponding `L2DaiTeleportGateway`.

Below are the relevant deployed contract addresses:

|Domain|L1GovernanceRelay|L2GovernanceRelay|L2DaiTeleportGateway|
| --- | --- | --- | --- |
|Optimism|[0x09B354CDA89203BB7B3131CC728dFa06ab09Ae2F](https://etherscan.io/address/0x09B354CDA89203BB7B3131CC728dFa06ab09Ae2F)|[0x10E6593CDda8c58a1d0f14C5164B376352a55f2F](https://optimistic.etherscan.io/address/0x10E6593CDda8c58a1d0f14C5164B376352a55f2F)|[0x18d2CF2296c5b29343755E6B7e37679818913f88](https://optimistic.etherscan.io/address/0x18d2cf2296c5b29343755e6b7e37679818913f88)|
|Arbitrum|[0x9ba25c289e351779E0D481Ba37489317c34A899d](https://etherscan.io/address/0x9ba25c289e351779E0D481Ba37489317c34A899d)|[0x10E6593CDda8c58a1d0f14C5164B376352a55f2F](https://arbiscan.io/address/0x10E6593CDda8c58a1d0f14C5164B376352a55f2F)|[0x5dBaf6F2bEDebd414F8d78d13499222347e59D5E](https://arbiscan.io/address/0x5dBaf6F2bEDebd414F8d78d13499222347e59D5E)|
|Starknet|[0x2385C60D2756Ed8CA001817fC37FDa216d7466c0](https://etherscan.io/address/0x2385c60d2756ed8ca001817fc37fda216d7466c0)|[0x05f4d9b039f82e9a90125fb119ace0531f4936ff2a9a54a8598d49a4cd4bd6db](https://voyager.online/contract/0x05f4d9b039f82e9a90125fb119ace0531f4936ff2a9a54a8598d49a4cd4bd6db)|[0x05b20d8c7b85456c07bdb8eaaeab52a6bf3770a586af6da8d3f5071ef0dcf234](https://voyager.online/contract/0x05b20d8c7b85456c07bdb8eaaeab52a6bf3770a586af6da8d3f5071ef0dcf234)|

### Tech-Ops Core Unit DAI Transfer

As per their recent successful [MIP14c2-SP1](https://mips.makerdao.com/mips/details/MIP14c2SP1) subproposal, **138,894 DAI** will be transferred to the [Tech-Ops Core Unit (TECH-001)](https://mips.makerdao.com/mips/details/MIP39c2SP29) Auditor Wallet at [0x2dC0420A736D1F40893B9481D8968E4D7424bC0B](https://etherscan.io/address/0x2dC0420A736D1F40893B9481D8968E4D7424bC0B), if this executive proposal passes.

### Governance Communications Core Unit Offboarding Payments

As per the recent successful [MIP39c3-SP7](https://mips.makerdao.com/mips/details/MIP39c3SP7) subproposal, a total of **146,559 DAI** will be distributed to the offboarding [Governance Communications Core Unit (COM-001)](https://mips.makerdao.com/mips/details/MIP39c2SP8), as itemized below, if this executive proposal passes.

- **131,200 DAI** to the GovComms Multisig at [0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9](https://etherscan.io/address/0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9).
- **1,336 DAI** to Alec Horner at [0x50D2f29206a76aE8a9C2339922fcBCC4DfbdD7ea](https://etherscan.io/address/0x50D2f29206a76aE8a9C2339922fcBCC4DfbdD7ea).
- **1,983 DAI** to Andrea Suárez at [0xeD27986bf84Fa8E343aA9Ff90307291dAeF234d3](https://etherscan.io/address/0xeD27986bf84Fa8E343aA9Ff90307291dAeF234d3).
- **715 DAI** to Ashton Playsted at [0x3dfE26bEDA4282ECCEdCaF2a0f146712712e81EA](https://etherscan.io/address/0x3dfE26bEDA4282ECCEdCaF2a0f146712712e81EA).
- **1,376 DAI** to Bernard Agrest at [0x74520D1690348ba882Af348223A30D760BCbD72a](https://etherscan.io/address/0x74520D1690348ba882Af348223A30D760BCbD72a).
- **583 DAI** to Brandon Lewandowski at [0x471C5806cadAFB297D9b95B914B65f626fDCD1a7](https://etherscan.io/address/0x471C5806cadAFB297D9b95B914B65f626fDCD1a7).
- **1,026 DAI** to Constanza Pregal at [0x051cCee0CfBF1Fe9BD891117E85bEbDFa42aFaA9](https://etherscan.io/address/0x051cCee0CfBF1Fe9BD891117E85bEbDFa42aFaA9).
- **631 DAI** to Gala at [0x1c138352C779af714b6cE328C9d962E5c82EBA07](https://etherscan.io/address/0x1c138352C779af714b6cE328C9d962E5c82EBA07).
- **255 DAI** to Iván Berestein at [0x55f2E8728cFCCf260040cfcc24E14A6047fF4d31](https://etherscan.io/address/0x55f2E8728cFCCf260040cfcc24E14A6047fF4d31).
- **1,758 DAI** to Larry Wu at [0xE004DAabEfe0322Ac1ab46A3CF382a2A0bA81Ab4](https://etherscan.io/address/0xE004DAabEfe0322Ac1ab46A3CF382a2A0bA81Ab4).
- **3,013 DAI** to Mario Ferrari at [0xC2bE81CeB685eea53c77975b5F9c5f82641deBC8](https://etherscan.io/address/0xC2bE81CeB685eea53c77975b5F9c5f82641deBC8).
- **2,683 DAI** to Po Kunfu at [0xdB7c1777b5d4502b3d1228c2449F1816EB507748](https://etherscan.io/address/0xdB7c1777b5d4502b3d1228c2449F1816EB507748).

### SPF Funding

As per their successful [MIP55c3-SP12] subproposal, **209,000 DAI** will be transferred to [0x4Af6f22d454581bF31B2473Ebe25F5C6F55E028D](https://etherscan.io/address/0x4Af6f22d454581bF31B2473Ebe25F5C6F55E028D) if this executive proposal passes.

This Special Purpose Fund is intended to support Commercial and Legal Domain Work to support the expanded mandate for Real World Assets for the [Strategic Finance (SF-001) Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP36).

### Starknet Contract Deauthorizations

As per this [forum post](https://forum.makerdao.com/t/starknet-changes-for-executive-spell-on-the-week-of-2023-01-30/19607) from StarkNet Engineering Core Unit Facilitator @pyramidmaker, the old Starknet Bridge and Governance Relay contracts will be deauthorized if this executive proposal passes.

The new versions of these contracts have already been deployed in a previous executive spell.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com/) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
