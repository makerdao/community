---
title: Template - [Executive Vote] SparkLend Changes, Compensation Distribution, Halting Legacy Streams, Offboarded Delegate Buffer Payments, and Update HVBank Docs - January 12, 2024
summary: Increase the SparkLend D3M Debt Ceiling, execute SpaarkLend Prozy Spell, November and December Aligned Delegate compensation, MKR payouts for SES and BA Labs, Launch Project funding, yank DAI streams for DECO and SES, Offboarded AD Buffer MKR distribution to Navigator and PALC, and Update the HVBank (RWA009-A) doc parameter. 
date: 2023-01-12T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] SparkLend Changes, Compensation Distribution, Halting Legacy Streams, Offboarded Delegate Buffer Payments, and Update HVBank Docs - January 12, 2024

The Governance Facilitators, Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- Increase the SparkLend [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 400 million from 800 million to **1.2 billion Dai**.
- Execute the SparkLend Proxy Spell at $address for updates and technical changes detailed [here](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298).
- November and December Aligned Delegate Compensation will be distributed to 10 delegates.
- BA Labs and SES will recieve **175.00** and **508.55 MKR** respectively.
- The Launch Project will recieve **4.5 million DAI** and **820.00 MKR**.
- The DAI [Token Streams](https://manual.makerdao.com/module-index/module-token-streaming#trade-offs) for DECO and SES will be halted (`yank`).
- Two Derecognized ALigned Delegates will recieve their remining surplus buffer, with Navigator recieving **20.84 MKR** and PALC **6.95 MKR**.
- The HVBank (RWA009-A) [RWA Agreement (`doc`)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter will be updated to to **QmfEgZuiw6wsTRUYerdPZNUrqDXSGM6Nm4fM3nG7nNbEjT**.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Increase the SparkLend D3M

**Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298/5)
**Proposal**: [Forum Post](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298)

If this executive proposal passes, the SparkLend [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 400 million from 800 million to **1.2 billion Dai**.

###  Execute the SparkLend Proxy Spell

**Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298/5)
**Proposal**: [Forum Post](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298)

If this executive proposal passes, the SparkLend Proxy Spell (Ethereum) at $address will be executed. It contains the following action items, as explained in this [forum post](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298):

- Activate SparkLend Freezer Mom.
- Replace DAI oracle with one that is hardcoded to $1.
- Update the wstETH oracle to assume a 1:1 stETH:ETH peg.
- Freeze GNO and set LTV to 0.
- Activate Lido Rewards Program.

### Aligned Delegate Compensation

**Authorization**: [Atlas Section 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements)
**Proposal**: [Forum Post - November](https://forum.makerdao.com/t/november-2023-aligned-delegate-compensation/23351), [Forum Post - December](https://forum.makerdao.com/t/december-2023-aligned-delegate-compensation/23352)

If this executive proposal passes, the following transfers for Aligned Delegate Compensation will be made to qualifying Aligned Delegates.

#### November Compensation



#### December Compensation



### Legacy Agreement MKR Distributions

**Authorization**: [SES](https://mips.makerdao.com/mips/details/MIP40c3SP17), [BA Labs](https://mips.makerdao.com/mips/details/MIP40c3SP25)

If this executive proposal passes, the following transfers will be made per Legacy Core Unit MIP agreements:

- [SES](https://mips.makerdao.com/mips/details/MIP40c3SP17) - 508.55 MKR - [0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6](https://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6).
- [BA Labs](https://mips.makerdao.com/mips/details/MIP40c3SP25) - 175.00 MKR - [0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c](https://etherscan.io/address/0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c).
  

### Launch Project Funding

**Authorization**: [Forum Post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/9)

If this executive proposal passes, the following transfers will be made to the Launch Project as part of the funding defined in the Accessibility Scope:

Transfer 4,500,000 DAI to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).  
Transfer 580.00 MKR to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### End Token Streams

**Authorization**: [DECO](https://forum.makerdao.com/t/mip39c3-sp12-core-unit-offboarding-deco/22333/3), [SES](https://forum.makerdao.com/t/mip39c3-sp11-core-unit-offboarding-ses/22332/2)
**Proposal**: [DECO](https://forum.makerdao.com/t/mip39c3-sp12-core-unit-offboarding-deco/22333), [SES](https://forum.makerdao.com/t/mip39c3-sp11-core-unit-offboarding-ses/22332)

If this executive proposal passes, the DAI [Token Streams](https://manual.makerdao.com/module-index/module-token-streaming#trade-offs) will be halted (`yank`) for [SES](https://makerburn.com/#/expenses/vesting/0xa4c22f0e25C6630B2017979AcF1f865e94695C4b/DAI/15) and [DECO](https://makerburn.com/#/expenses/vesting/0x2Cc583c0AaCDaC9e23CB601fDA8F1A0c56Cdcb71/DAI/21), following their respective offboarding.

### Aligned Delegate Buffer Payments

**Authorization**: [Atlas Section 2.6.3.4.1](https://mips.makerdao.com/mips/details/MIP101#2-6-3-4-1)
**Proposal**: [Forum Post](https://forum.makerdao.com/t/october-2023-aligned-delegate-compensation/22732#october-compensation-2)

### RWA Agreement Upgrade

**Authorization**: [Forum Post](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/14)

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
