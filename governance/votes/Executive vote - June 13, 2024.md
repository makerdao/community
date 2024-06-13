---
title: Template - [Executive Vote] Disable Starknet Dai Bridge, Aligned Delegate Compensation for May 2024, AVC Member Participation Rewards for Q2 2024, Launch Project Funding, Spark Proxy Spell, USDP Jar Housekeeping - June 13, 2024
summary: Disable the Starknet Dai Bridge, distribute Aligned Delegate compensation for May 2024, distribute AVC Member compensation for Q2 2024, transfer funding to the Launch Project, trigger a Spark Proxy spell, and perform housekeeping actions on the USDP Jar.
date: 2024-06-13T00:00:00.000Z
address: "0x622Ad624491a01a2a6beAD916C3Ca3B90BcA0854"		
---

# [Executive Proposal] Disable Starknet Dai Bridge, Aligned Delegate Compensation for May 2024, AVC Member Participation Rewards for Q2 2024, Launch Project Funding, Spark Proxy Spell, USDP Jar Housekeeping - June 13, 2024
		
The Governance Facilitators, Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.
		
If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.
		
---
		
## Executive Summary
		
If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Starknet Dai Bridge will be disabled.
- Aligned Delegate compensation for May 2024 totaling **210.81 MKR** will be distributed.
- Aligned Voter Committee Member participation rewards for Q2 2024 totalling **100.08 MKR** will be distributed.
- **5,000,000 DAI** and **450 MKR** will be transferred to the Launch Project.
- A Spark proxy spell will be triggered at [0x258FD2E6b5C155aa5f3e84326A622288bd70f376](https://etherscan.io/address/0x258FD2E6b5C155aa5f3e84326A622288bd70f376).
- A series of housekeeping actions to push USDP out of the input conduit will be carried out, as detailed below.
		
**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**
		
Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**.
		
This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 
		
If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.
		
		
---
		
## Proposal Details
		
### Disable Starknet Dai Bridge
		
- **Authorization:** [Forum Post](https://forum.makerdao.com/t/starknet-dai-handover/22033/13)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/starknet-dai-handover/22033/12)
		
As part of the transition from the old Starknet Dai Bridge to a new version maintained by Starkgate, deposits on the old bridge will be disabled, if this executive proposal passes. Withdrawals will still be possible. To do this the following action needs to occur:
		
* Call `close` on the [STARKNET_DAI_BRIDGE](https://etherscan.io/address/0x9F96fE0633eE838D0298E8b8980E6716bE81388d).
		
For more information please review the [forum thread](https://forum.makerdao.com/t/starknet-dai-handover/22033) and [latest update](https://forum.makerdao.com/t/starknet-dai-handover/22033/12).
		
### May 2024 Aligned Delegate Compensation
		
- **Authorization:** [Atlas Section 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/may-2024-aligned-delegate-compensation/24441)
		
If this executive proposal passes, the following transfers totaling **210.81 MKR** for Aligned Delegate compensation will be made to qualifying Aligned Delegates.
		
| Delegate    | Amount (MKR) | Address                                                                                                               |
|-------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| BLUE        | 41.67        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky      | 41.67        | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| JuliaChang  | 41.67        | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Pipkin      | 34.26        | [0x0E661eFE390aE39f90a58b04CF891044e56DEDB7](https://etherscan.io/address/0x0E661eFE390aE39f90a58b04CF891044e56DEDB7) |
| Byteron     | 12.50        | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| BONAPUBLICA | 11.11        | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| WBC         | 11.11        | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) |
| PBG         | 8.49         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |
| Rocky       | 3.70         | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xc31637bda32a0811e39456a59022d2c386cb2c85) |
| vigilant    | 2.78         | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) |
| UPMaker     | 1.85         | [0xbB819DF169670DC71A16F58F55956FE642cc6BcD](https://etherscan.io/address/0xbB819DF169670DC71A16F58F55956FE642cc6BcD) |
		
### Q2 2024 AVC Member Participation Rewards
		
- **Authorization:** [Atlas 2.5.10 prior to its removal by MIP102c2-SP34](https://github.com/makerdao/mips/pull/1100/files#diff-bad206bdb2371d68c4940c519b4cf8817b59781422c6d7c0d8da48ab24decb33L535-L565)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/avc-member-participation-rewards-q2-2024/24442)
		
If this executive proposal passes, the following distributions totaling **100.08 MKR** will be made for Q2 2024 AVC member compensation. This has been pro-rated to two months following the most recent amendments to The Atlas that removed the AVC Member role.
		
| AVC Member Name | Address                                                                                                               | AVC                | Amount (MKR) | 
|-----------------|-----------------------------------------------------------------------------------------------------------------------|--------------------|--------------|
| IamMeeoh        | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](https://etherscan.io/address/0x47f7A5d8D27f259582097E1eE59a07a816982AE9) | KISS               | 12.51        |       
| DAI-Vinci       | [0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a](https://etherscan.io/address/0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a) | KISS               | 12.51        |       
| opensky         | [0xf44f97f4113759E0a57756bE49C0655d490Cf19F](https://etherscan.io/address/0xf44f97f4113759E0a57756bE49C0655d490Cf19F) | KISS               | 12.51        |       
| Res             | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784) | Resiliency         | 12.51        |       
| Harmony         | [0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3](https://etherscan.io/address/0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3) | Resiliency         | 12.51        |       
| Libertas        | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | Resiliency         | 12.51        |       
| seedlatam.eth   | [0xd43b89621fFd48A8A51704f85fd0C87CbC0EB299](https://etherscan.io/address/0xd43b89621fFd48A8A51704f85fd0C87CbC0EB299) | Sovereign Finance  | 12.51        |       
| 0xRoot          | [0xC74392777443a11Dc26Ce8A3D934370514F38A91](https://etherscan.io/address/0xC74392777443a11Dc26Ce8A3D934370514F38A91) | Sovereign Finance  | 12.51        |
		
### Launch Project Funding
		
- **Authorization:** [Accessibility Scope 9.1](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/17)
		
If this executive proposal passes, the following transfers to the Launch Project will be made:
		
- Transfer **5,000,000 DAI** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- Transfer **450 MKR** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
		
### Spark Proxy Spell
		
- **Authorization:** [Governance Poll](https://vote.makerdao.com/polling/QmPmVeDx)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/may-31-2024-proposed-changes-to-sparklend-for-upcoming-spell/24413)
		
If this executive proposal passes, a Spark proxy spell at [0x258FD2E6b5C155aa5f3e84326A622288bd70f376](https://etherscan.io/address/0x258FD2E6b5C155aa5f3e84326A622288bd70f376) will be triggered. The expected contents are as follows:
		
#### Onboard Etherfi weETH to SparkLend on Mainnet
		
weETH will be onboarded to SparkLend on mainnet with the following parameters:
		
* Token: **weETH**
* Token Address: **[0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee](https://etherscan.io/address/0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee)**
* Oracle: weETH/eETH exchange rate (from contract) * eETH/ETH fixed at 1 ([implementation](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/WEETHExchangeRateOracle.sol))
* Optimal Utilization: **45%**
* Base: **5%**
* Slope1: **15%**
* Slope2: **300%**
* Borrow Enabled: **No**
* Stable Rate Borrowing: **No**
* Isolation Borrowable: **No**
* Siloed Borrowing: **No**
* Flash Loan Enabled: **No**
* Loan To Value: **72%**
* Liquidation Threshold: **73%**
* Liquidation Bonus: **10%**
* Reserve Factor: **15%**
* Supply Cap: **5,000 weETH**
* Supply Cap (`max`): **50,000 weETH**
* Supply Cap (`gap`): **5,000 weETH**
* Supply Cap (`ttl`): **12 hours**
* Borrow Cap: **0**
* Borrow Cap (`max`): N/A
* Borrow Cap (`gap`): N/A
* Borrow Cap (`ttl`): N/A
* [Isolation Mode](https://devs.spark.fi/sparklend/features/isolation-mode) Enabled: **Yes**
* Isolation Mode Debt Ceiling: **50 million USD**
* Liquidation Protocol Fee: **10%**
* Emode Category: N/A
		
### USDP Jar Housekeeping
		
- **Authorization:** [Forum Post](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-04-18/24084/4)
- **Proposal:** [Forum Post](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-04-18/24084/4)
		
If this executive proposal passes, following the recommendation of the Governance Facilitators in collaboration with the spell team, the following operations will be performed:
		
- Raise `PSM-PAX-A` Debt Ceiling to **2,000 DAI**
- Call push(uint256 amt) on `MCD_PSM_PAX_A_INPUT_CONDUIT_JAR` with an `amt` of **1,159 USDP**
- Call void() on `MCD_PSM_PAX_A_JAR`
- Set `PSM-PAX-A` Debt Ceiling to **0 DAI**
		
This will have the following net results:
		
- **Debt Ceiling** remains at **0 DAI** after the transaction has been executed.
- Dai generated from `PSM_PAX_A` increases by **1,159 DAI**.
- USDP balance of [MCD_JOIN_PSM_PAX_A](https://etherscan.io/address/0x7bbd8ca5e413bca521c2c80d8d1908616894cf21) increases by **1,159 USDP**.
- USDP balance of [PSM_PAX_A_INPUT_CONDUIT_JAR](https://etherscan.io/address/0xda276ab5f1505965e0b6cd1b6da2a18ccbb29515) decreases to **0 USDP**.
- Surplus Buffer increases by **1,159 DAI**.
		
## Review
		
Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.
		
---
		
## Resources
		
Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).
		
To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
