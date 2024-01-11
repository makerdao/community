---
title: Template - [Executive Vote] SparkLend Changes, Compensation Distribution, Halting Legacy Streams, Offboarded Delegate Buffer Payments, and Update HVBank doc - January 12, 2024
summary: Increase the SparkLend D3M Debt Ceiling, execute SparkLend Proxy Spell, November and December Aligned Delegate compensation, MKR payouts for SES and BA Labs, Launch Project funding, yank DAI streams for DECO and SES, offboarded AD Buffer MKR distribution to Navigator and PALC, and update the HVBank (RWA009-A) doc parameter. 
date: 2024-01-12T00:00:00.000Z
address: "0x54561C3BC933e3B61bD44eb402AeD19AC72b4DA0"

---
# [Executive Proposal] SparkLend Changes, Compensation Distribution, Halting Legacy Streams, Offboarded Delegate Buffer Payments, and Update HVBank doc - January 12, 2024

The Governance Facilitators, Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- Execute the SparkLend Proxy Spell at [0x2f2c514137173bc98B3699A0d291f7593637c596](https://etherscan.io/address/0x2f2c514137173bc98B3699A0d291f7593637c596) for updates and technical changes detailed [here](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298) and [here](https://forum.makerdao.com/t/jan-11th-2024-expedited-inclusion-of-a-patch-to-spark-pool-implementation/23393).
- Increase the SparkLend [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 400 million from 800 million to **1.2 billion DAI**.
- November and December Aligned Delegate Compensation will be distributed to 10 delegates.
- Two Derecognized Aligned Delegates will receive their remaining AD buffer, with Navigator receiving **20.84 MKR** and PALC **6.95 MKR**.
- The DAI [Token Streams](https://manual.makerdao.com/module-index/module-token-streaming) for DECO and SES will be halted (`yank`).
- BA Labs and SES will receive **175.00** and **508.55 MKR** respectively.
- The Launch Project will receive **4.5 million DAI** and **820.00 MKR**.
- The HVBank (RWA009-A) [RWA Agreement (`doc`)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter will be updated to to **QmfEgZuiw6wsTRUYerdPZNUrqDXSGM6Nm4fM3nG7nNbEjT**.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

###  Execute the SparkLend Proxy Spell

**Authorization**: [Ecosystem Approval 1](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298/5), [Ecosystem Approval 2](https://forum.makerdao.com/t/jan-11th-2024-expedited-inclusion-of-a-patch-to-spark-pool-implementation/23393/3)   
**Polls**: [1](https://vote.makerdao.com/polling/QmdVy1Uk), [2](https://vote.makerdao.com/polling/QmeWioX1), [3](https://vote.makerdao.com/polling/QmRdew4b), [4](https://vote.makerdao.com/polling/QmXtvu32), [5](https://vote.makerdao.com/polling/QmRKkMnx)  
**Proposal**: [Forum Post 1](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298), [Forum Post 2](https://forum.makerdao.com/t/jan-11th-2024-expedited-inclusion-of-a-patch-to-spark-pool-implementation/23393)

If this executive proposal passes, the SparkLend Proxy Spell (Ethereum) at [0x2f2c514137173bc98B3699A0d291f7593637c596](https://etherscan.io/address/0x2f2c514137173bc98B3699A0d291f7593637c596) will be executed. It contains the following [polled items](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298) and code updates as outlined in this [forum post](https://forum.makerdao.com/t/jan-11th-2024-expedited-inclusion-of-a-patch-to-spark-pool-implementation/23393):

- Activate SparkLend Freezer Mom.
- Replace DAI Oracle with one that is hardcoded to $1.
- Update the wstETH oracle to assume a 1:1 stETH:ETH peg.
- Freeze GNO and set LTV to 0.
- Activate Lido Rewards Program.
- Expedited code update. 

### Increase the SparkLend D3M Maximum Debt Ceiling

**Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298/5), [Poll](https://vote.makerdao.com/polling/QmdQSuAc)  
**Proposal**: [Forum Post](https://forum.makerdao.com/t/spark-spell-proposed-changes/23298)

If this executive proposal passes, the SparkLend [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 400 million from 800 million to **1.2 billion DAI**.

### Aligned Delegate Compensation

**Authorization**: [Atlas Section 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements)  
**Proposal**: [Forum Post - November](https://forum.makerdao.com/t/november-2023-aligned-delegate-compensation/23351), [Forum Post - December](https://forum.makerdao.com/t/december-2023-aligned-delegate-compensation/23352)

If this executive proposal passes, the following transfers for Aligned Delegate Compensation will be made to qualifying Aligned Delegates.

#### November Compensation

| Delegate     | Amount (MKR) | Address                                                                                                               |
|--------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| 0xDefensor   | 41.67        | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) |
| BONAPUBLICA  | 41.67        | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Cloaky       | 41.67        | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| TRUE NAME    | 41.67        | [0x612F7924c367575a0Edf21333D96b15F1B345A5d](https://etherscan.io/address/0x612F7924c367575a0Edf21333D96b15F1B345A5d) |
| BLUE         | 13.95        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| UPMaker      | 13.89        | [0xbB819DF169670DC71A16F58F55956FE642cc6BcD](https://etherscan.io/address/0xbB819DF169670DC71A16F58F55956FE642cc6BcD) |
| vigilant     | 13.89        | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) |
| JAG          | 13.02        | [0x58D1ec57E4294E4fe650D1CB12b96AE34349556f](https://etherscan.io/address/0x58D1ec57E4294E4fe650D1CB12b96AE34349556f) |
| PBG          | 0.45         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |


#### December Compensation

| Delegate     | Amount (MKR) | Address                                                                                                               |
|--------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| 0xDefensor   | 41.67        | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) |
| BONAPUBLICA  | 41.67        | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Cloaky       | 41.67        | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| TRUE NAME    | 41.67        | [0x612F7924c367575a0Edf21333D96b15F1B345A5d](https://etherscan.io/address/0x612F7924c367575a0Edf21333D96b15F1B345A5d) |
| BLUE         | 39.20        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| PBG          | 13.89        | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |
| UPMaker      | 13.89        | [0xbB819DF169670DC71A16F58F55956FE642cc6BcD](https://etherscan.io/address/0xbB819DF169670DC71A16F58F55956FE642cc6BcD) |
| vigilant     | 13.89        | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) |
| JAG          | 12.95        | [0x58D1ec57E4294E4fe650D1CB12b96AE34349556f](https://etherscan.io/address/0x58D1ec57E4294E4fe650D1CB12b96AE34349556f) |
| WBC          | 11.28        | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) |

### Derecognized Aligned Delegate Buffer Payments

**Authorization**: [Atlas Section 2.6.3.4.1](https://mips.makerdao.com/mips/details/MIP101#2-6-3-4-1)  
**Proposal**: [Forum Post](https://forum.makerdao.com/t/october-2023-aligned-delegate-compensation/22732#october-compensation-2)

If this executive proposal passes, the following transfers will be made to pay out the remainder of the AD buffers following two Aligned Delegate derecognitions:

- Navigator - 20.84 MKR - [0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072)
- PALC - 6.95 MKR - [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A)

### End Token Streams

**Authorization**: [DECO](https://forum.makerdao.com/t/mip39c3-sp12-core-unit-offboarding-deco/22333/3), [SES](https://forum.makerdao.com/t/mip39c3-sp11-core-unit-offboarding-ses/22332/2)  
**Proposal**: [DECO](https://forum.makerdao.com/t/mip39c3-sp12-core-unit-offboarding-deco/22333), [SES](https://forum.makerdao.com/t/mip39c3-sp11-core-unit-offboarding-ses/22332)

If this executive proposal passes, the DAI [Token Streams](https://manual.makerdao.com/module-index/module-token-streaming) will be halted (`yank`) for [SES](https://makerburn.com/#/expenses/vesting/0xa4c22f0e25C6630B2017979AcF1f865e94695C4b/DAI/15) and [DECO](https://makerburn.com/#/expenses/vesting/0x2Cc583c0AaCDaC9e23CB601fDA8F1A0c56Cdcb71/DAI/21), following their respective offboarding.

### Legacy Agreement MKR Distributions

**Authorization**: [SES](https://mips.makerdao.com/mips/details/MIP40c3SP17), [BA Labs](https://mips.makerdao.com/mips/details/MIP40c3SP25)

If this executive proposal passes, the following transfers will be made per Legacy Core Unit MIP agreements:

- [SES](https://mips.makerdao.com/mips/details/MIP40c3SP17) - 508.55 MKR - [0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6](https://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6). (Note - This figure covers the 278 MKR owed to SES from November plus the remainder of the legacy MKR agreements owed to the team, following their offboarding.)
- [BA Labs](https://mips.makerdao.com/mips/details/MIP40c3SP25) - 175.00 MKR - [0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c](https://etherscan.io/address/0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c).
  
### Launch Project Funding

**Authorization**: [Forum Post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/9)

If this executive proposal passes, the following transfers will be made to the Launch Project as part of the funding defined in the Accessibility Scope:

- Transfer **4,500,000 DAI** to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).  
- Transfer **820.00 MKR** to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### RWA Agreement Update

**Authorization**: [Forum Post](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/14)

If this executive proposal passes, the HVBank (RWA009-A) [RWA Agreement (`doc`)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter will be updated to to [QmfEgZuiw6wsTRUYerdPZNUrqDXSGM6Nm4fM3nG7nNbEjT](https://ipfs.io/ipfs/QmfEgZuiw6wsTRUYerdPZNUrqDXSGM6Nm4fM3nG7nNbEjT).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
