---
title: Template - [Executive Vote] Aave Lido Market USDS DDM Parameters Adjustments, ALLOCATOR-SPARK-A DC-IAM Changes, Surplus Buffer Upper Limit Increase, Stability Fee Changes, Savings Rate Changes, GSM Delay Increase, Addition of ilks to the LineMom, Addition of Standby Spells to the Chainlog, Funding Disbursements, ESM Minimum Threshold Increase, AD and Atlas Core Development Compensation, Spark Proxy Spell - November 28, 2024
summary: Increase Aave Lido Market USDS DDM line, change ALLOCATOR-SPARK-A DC-IAM parameters, increase Surplus Buffer Upper Limit, change multiple Stability Fees, increase DSR and SSR, increase GSM Delay, add ilks to the LineMom, add Standby Spells and Standby Spell Factories to the Chainlog, distribute funding for the Launch Project, the Sky Ecosystem Liquidity Bootstrapping, and the Integration Boost, increase ESM Minimum Threshold, payout AD compensation for October 2024, make  Atlas Core Development payments, execute Spark Proxy Spell.
date: 2024-11-28T00:00:00.000Z
address: "0xA514b7f3540d23Aec41725096A302a718EBe5F71"

---
# [Executive Vote] Aave Lido Market USDS DDM Parameters Adjustments, ALLOCATOR-SPARK-A DC-IAM Changes, Surplus Buffer Upper Limit Increase, Stability Fee Changes, Savings Rate Changes, GSM Delay Increase, Addition of ilks to the LineMom, Addition of Standby Spells to the Chainlog, Funding Disbursements, ESM Minimum Threshold Increase, AD and Atlas Core Development Compensation, Spark Proxy Spell - November 28, 2024

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- The Aave Lido Market USDS Direct Deposit Module (DDM) line will be increased.
- The ALLOCATOR-SPARK-A [Debt Ceiling Instant Access Module (DC-IAM)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)-071d42e3-8a21-4401-852e-0b52c49768bb|57eaf45219bea3b430c2) parameters will be changed.
- The [Surplus Buffer Upper Limit (`vow.hump`)](https://sky-atlas.powerhouse.io/A.3.5.1_Surplus_Buffer_Splitter_Parameters/122f2ff0-8d73-80f8-9a2a-d221794f73f5%7C57ea2c54) will be increased.
- The [Stability Fees](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) for multiple vault types will be changed, as itemized below.
- The [Savings Rates (DSR and SSR)](https://sky-atlas.powerhouse.io/A.4.3.1_Savings_Rates/5586fe33-b0af-41f0-9629-b1716c7c0967%7Cb3417d54) will be increased.
- The [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.8.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) will be increased.
- Seven ilks will be added to the [`LineMom`](https://github.com/makerdao/line-mom/tree/master).
- [Four Standby Spell factories and three Global/Multi-ilk Standby Spells](https://github.com/makerdao/dss-emergency-spells) will be added to the Chainlog.
- A total of **19 million USDS** and **24 million SKY** will be distributed to fund the Launch Project, the Sky Ecosystem Liquidity Boostrapping budget, and the Integration Boost budget.
- The [Emergency Shutdown Module (ESM)](https://docs.makerdao.com/smart-contract-modules/shutdown/emergency-shutdown-module) minimum threshold (`min`) will be increased.
- A total of **20,701 USDS** will be distributed to seven Aligned Delegates as compensation for October 2024, as itemized below.
- A total of **90,277 USDS** and **330,000 SKY** will be distributed to three Atlas Core Development key contributors, as itemized below.
- A Spark Proxy spell will be triggered.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### Aave Lido Market USDS Direct Deposit Module (DDM) Parameter Adjustment

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25543/3), [Poll 1160](https://vote.makerdao.com/polling/QmabCDcn)
- **Proposal**: [Forum Post](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25543)

If this executive proposal passes, then the [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.3_Maximum_Debt_Ceiling_Definition-e4a0d8f1-4a01-46a7-b693-a94e7f4afc1a|57ea599773d45150b2632df9) for the Aave Lido Market USDS DDM (DIRECT-SPK-AAVE-LIDO-USDS) will be increased by 100 million USDS from 100 million USDS to **200 million USDS**.


### ALLOCATOR-SPARK-A DC-IAM Changes

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell-amendments/25575/3), [Poll 1165](https://vote.makerdao.com/polling/QmcNd4mH)
- **Proposal**: [Forum Post](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell-amendments/25575)

If this executive proposal passes, then the [ALLOCATOR-SPARK-A](https://makerburn.com/#/collateral/ALLOCATOR-SPARK-A) [Debt Ceiling Instant Access Module (DC-IAM)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)-071d42e3-8a21-4401-852e-0b52c49768bb|57eaf45219bea3b430c2) parameters will be changed as follows:

- Increase DC-IAM [Target Available Debt (`gap`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.4_Target_Available_Debt_Definition-b876ecf4-a901-4721-9c4b-9f2fc21f954c|57ea599773d45150b2632df9) by 90 million USDS from 10 million USDS to **100 million USDS**.
- Increase DC-IAM [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.3_Maximum_Debt_Ceiling_Definition-e4a0d8f1-4a01-46a7-b693-a94e7f4afc1a|57ea599773d45150b2632df9) by 90 million USDS from 10 million USDS to **100 million USDS**.
- The [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.5_Ceiling_Increase_Cooldown_Definition-3d5980c5-7036-4b68-93e0-a48551fe09ed|57ea599773d45150b2632df9) will remain unchanged at **24 hours**.

### Surplus Buffer Upper Limit Increase

- **Authorization**: [Poll 1159](https://vote.makerdao.com/polling/QmZfYrR7)
- **Proposal**: [Forum Post](https://forum.sky.money/t/weekly-atlas-edit-proposal-week-of-2024-11-18-0/25552)

If this executive proposal passes, then the [Surplus Buffer Upper Limit (`vow.hump`)](https://sky-atlas.powerhouse.io/A.3.5.1_Surplus_Buffer_Splitter_Parameters/122f2ff0-8d73-80f8-9a2a-d221794f73f5%7C57ea2c54) will be increased by 60 million DAI from 60 million DAI to **120 million DAI**.


### Stability Fee Changes

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/stability-scope-parameter-changes-18-sfs-dsr-ssr-spark-effective-dai-borrow-rate-spark-liquidity-layer/25593/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/stability-scope-parameter-changes-18-sfs-dsr-ssr-spark-effective-dai-borrow-rate-spark-liquidity-layer/25593)

If this executive proposal passes, then the [Stability Fees](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) (SF) for the vault types listed below will be changed as follows:

- Increase ETH-A SF by 1 percentage point from 8.25% to **9.25%**
- Increase ETH-B SF by 1 percentage point from 8.75% to **9.75%**
- Increase ETH-C SF by 1 percentage point from 8.00% to **9.00%**
- Increase WSTETH-A SF by 1 percentage point from 9.25% to **10.25%**
- Increase WSTETH-B SF by 1 percentage point from 9.00% to **10.00%**
- Increase WBTC-A SF by 1 percentage point from 11.25% to **12.25%**
- Increase WBTC-B SF by 1 percentage point from 11.75% to **12.75%**
- Increase WBTC-C SF by 1 percentage point from 11.00% to **12.00%**
- Increase ALLOCATOR-SPARK-A SF by 4.11 percentage points from 5.20% to **9.31%**

### Savings Rate Changes

- **Authorization**: [Ecosystem Approval](http://forum.sky.money/t/stability-scope-parameter-changes-18-sfs-dsr-ssr-spark-effective-dai-borrow-rate-spark-liquidity-layer/25593/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/stability-scope-parameter-changes-18-sfs-dsr-ssr-spark-effective-dai-borrow-rate-spark-liquidity-layer/25593)

If this executive proposal passes, the then following savings rates changes will take place:

- Increase the [Dai Savings Rate (DSR)](https://sky-atlas.powerhouse.io/A.3.2.2.2_Dai_Savings_Rate/8e289e71-7ec5-4ce5-8d4d-41aab7a50f53|57eab733e951) by 1 percentage point from 7.50% to **8.50%**.
- Increase the [Sky Savings Rate (SSR)](https://sky-atlas.powerhouse.io/A.3.2.2.3_Sky_Savings_Rate/73d91126-21c9-4e8a-bedf-8a51a432bb59|57eab733e951) by 1 percentage point from 8.50% to **9.50%**.

### GSM Pause Delay Increase

- **Authorization**: [Governance Facilitator Approval](https://forum.sky.money/t/november-28th-spell-parameter-proposal-esm-threshold-gsm-delay-increase/25579/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/november-28th-spell-parameter-proposal-esm-threshold-gsm-delay-increase/25579)

If this executive proposal passes, then the [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.8.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) will be increased by 14 hours from 16 hours to **30 hours**.



### Addition of ilks to the `LineMom`

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/standby-spells-for-sky-emergency-response/25594/4)
- **Proposal**: [Forum Post](https://forum.sky.money/t/standby-spells-for-sky-emergency-response/25594/2)

If this executive proposal passes, then the following ilks will be added to the [`LineMom`](https://github.com/makerdao/line-mom/tree/master), allowing the [Standby Spells](https://github.com/makerdao/dss-emergency-spells) to affect them:

- [ALLOCATOR-SPARK-A](https://makerburn.com/#/collateral/ALLOCATOR-SPARK-A)
- [RWA001-A](https://makerburn.com/#/collateral/RWA001-A)
- [RWA002-A](https://makerburn.com/#/collateral/RWA002-A)
- [RWA009-A](https://makerburn.com/#/collateral/RWA009-A)
- [RWA012-A](https://makerburn.com/#/collateral/RWA012-A)
- [RWA013-A](https://makerburn.com/#/collateral/RWA013-A)
- [RWA015-A](https://makerburn.com/#/collateral/RWA015-A)

### Addition of Standby Spells to the Chainlog

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/standby-spells-for-sky-emergency-response/25594/4)
- **Proposal**: [Forum Post](https://forum.sky.money/t/standby-spells-for-sky-emergency-response/25594)

[Standby Spells](https://github.com/makerdao/dss-emergency-spells) are reusable pre-deployed spells that bypass the [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.8.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) when executed, so that their effects are immediate.

You can read an introduction to them on [this November 25, 2024 forum post](https://forum.sky.money/t/standby-spells-for-sky-emergency-response/25594) by a Governance Facilitator. For detailed technical information, please visit the [GitHub repository at GitHub - makerdao/dss-emergency-spells: Emergency Spells for MakerDAO](https://github.com/makerdao/dss-emergency-spells).

Each Standby Spell is capable of some single action. Standby Spells that trigger some action on _all_ ilks susceptible to having the action applied to them are called _Global/Multi-Ilk Standby Spells_; Standby Spells that trigger some action on _some single_ ilk are called _Single-Ilk Standby Spells_.

If this executive proposal passes, then the following _Standby Spell Factories_ (i.e., contracts capable of spawning Single-Ilk Standby Spells for some action) and _Global/Multi-Ilk Standby Spells_ will be added to the [Chainlog](https://chainlog.sky.money).

#### Standby Spell Factories

| Name | Action of Standby Spells Spawned | Chainlog Key | Address |
|---|---|---|---|
| SingleClipBreakerFactory | [Set Clip Breaker](https://github.com/makerdao/dss-emergency-spells#set-clip-breaker) | EMSP_CLIP_BREAKER_FAB | [0xd7321d0919573a33f9147fd2579a48f60237564a](https://etherscan.io/address/0xd7321d0919573a33f9147fd2579a48f60237564a) |
| SingleDdmDisableFactory | [Disable DDM](https://github.com/makerdao/dss-emergency-spells#disable-ddm) | EMSP_DDM_DISABLE_FAB | [0x8BA0f6C4009Ea915706e1bCfB1d879E34587dC69](https://etherscan.io/address/0x8BA0f6C4009Ea915706e1bCfB1d879E34587dC69) |
| SingleLineWipeFactory | [Wipe `line`](https://github.com/makerdao/dss-emergency-spells#wipe-line) | EMSP_LINE_WIPE_FAB | [0xA649730fA92695096b7C49DBae682995F8906684](https://etherscan.io/address/0xA649730fA92695096b7C49DBae682995F8906684) |
| SingleOsmStopFactory | [Stop OSM](https://github.com/makerdao/dss-emergency-spells#stop-osm) | EMSP_OSM_STOP_FAB | [0x83211c74131bA2B3de7538f588f1c2f309e81eF0](https://etherscan.io/address/0x83211c74131bA2B3de7538f588f1c2f309e81eF0) |

#### Global/Multi-ilk Standby Spells

| Name | Action | Chainlog Key | Address |
|---|---|---|---|
| MultiClipBreakerSpell | [Set Clip Breaker](https://github.com/makerdao/dss-emergency-spells#set-clip-breaker) | EMSP_GLOBAL_CLIP_BREAKER | [0x828824dBC62Fba126C76E0Abe79AE28E5393C2cb](https://etherscan.io/address/0x828824dBC62Fba126C76E0Abe79AE28E5393C2cb) |
| MultiLineWipeSpell | [Wipe `line`](https://github.com/makerdao/dss-emergency-spells#wipe-line) | EMSP_GLOBAL_LINE_WIPE | [0x4B5f856B59448304585C2AA009802A16946DDb0f](https://etherscan.io/address/0x4B5f856B59448304585C2AA009802A16946DDb0f) |
| MultiOsmStopSpell | [Stop OSM](https://github.com/makerdao/dss-emergency-spells#stop-osm) | EMSP_GLOBAL_OSM_STOP | [0x3021dEdB0bC677F43A23Fcd1dE91A07e5195BaE8](https://etherscan.io/address/0x3021dEdB0bC677F43A23Fcd1dE91A07e5195BaE8) |

### Launch Project Funding

- **Authorization**: [Atlas A.5.6](https://sky-atlas.powerhouse.io/A.5.6_Launch_Project/1f433d9d-7cdb-406f-b7e8-f9bc4855eb77%7C8d5a)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/26)

If this executive proposal passes, then the following Launch Project funding distributions will be made:

- Transfer **10 million USDS** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- Transfer **24 million SKY** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### Sky Ecosystem Liquidity Bootstrapping

- **Authorization**: [Poll 1158](https://vote.makerdao.com/polling/QmYHUDVA)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-sky-ecosystem-liquidity-bootstrapping-budget-a-5-6-1-9/25537/2)

If this executive proposal passes, then the following Sky Ecosystem Liquidity Bootstrapping funding distribution will be made:

- Transfer **6 million USDS** to [0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD](https://etherscan.io/address/0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD).

### Integration Boost Funding

- **Authorization**: [Poll 1158](https://vote.makerdao.com/polling/QmYHUDVA)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-integration-boost-budget-a-5-2-1-2/25536/2)

If this executive proposal passes, then the following Integration Boost funding distribution will be made:

- Transfer **3 million USDS** to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).

### ESM Minimum Threshold Increase

- **Authorization**: [Governance Facilitator Authorization](https://forum.sky.money/t/november-28th-spell-parameter-proposal-esm-threshold-gsm-delay-increase/25579/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/november-28th-spell-parameter-proposal-esm-threshold-gsm-delay-increase/25579)

If this executive proposal passes, then the [Emergency Shutdown Module (ESM)](https://docs.makerdao.com/smart-contract-modules/shutdown/emergency-shutdown-module) [Minimum Threshold (`min`)](https://manual.makerdao.com/module-index/module-emergency-shutdown#minimum-threshold-min) will be increased by 200,000 MKR from 300,000 MKR to **500,000 MKR**.


### Aligned Delegate Compensation for October 2024

- **Authorization**: [Atlas A.1.5.8](https://sky-atlas.powerhouse.io/A.1.5.8_Budget_For_Prime_Delegate_Slots/e3e420fc-9b1f-4fdc-9983-fcebc45dd3aa%7C0db3af4ece0c)
- **Proposal**: [Forum Post](https://forum.sky.money/t/october-2024-aligned-delegate-compensation/25581)

If this executive proposal passes, then a total of **20,701 USDS** will be distributed to six Aligned Delegates and their teams as compensation for October 2024.

| Delegate | Amount (USDS) | Address |
|---|---|---|
| BLUE | 2,968 | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| BONAPUBLICA | 4,000 | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Byteron | 1,733 | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| Cloaky | 4,000 | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| JuliaChang | 4,000 | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Vigilant | 4,000 | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) |


### Atlas Core Development Payment to Key Atlas Contributors

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/atlas-core-development-payment-requests-november-2024/25580/8), Atlas Axis Authorizations [1](https://forum.sky.money/t/atlas-core-development-payment-requests-november-2024/25580/4), [2](https://forum.sky.money/t/atlas-core-development-payment-requests-november-2024/25580/6)
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-core-development-payment-requests-november-2024/25580)

If this executive proposal passes, then a total of **90,277 USDS** and **330,000 SKY** will be distributed to three Atlas Core Development key contributors.

| Contributor | Amount | Address |
|---|---|---|
| Kohla (Cloaky) | 20,000 USDS | [0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a](https://etherscan.io/address/0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a) |
| Ennoia (Cloaky) | 20,110 USDS | [0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b](https://etherscan.io/address/0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b) |
| BLUE | 50,167 USDS | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| BLUE | 330,000 SKY | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |

### Spark Proxy Spell

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25543/3), [Ecosystem Authorization](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell-amendments/25575/3), [Ecosystem Authorization](https://forum.sky.money/t/stability-scope-parameter-changes-18-sfs-dsr-ssr-spark-effective-dai-borrow-rate-spark-liquidity-layer/25593/2), Governance Polls [1](https://vote.makerdao.com/polling/QmSxJJ6Z), [2](https://vote.makerdao.com/polling/QmaxFZfF), [3](https://vote.makerdao.com/polling/QmWUkstV), [4](https://vote.makerdao.com/polling/QmQ2Umfm), [5](https://vote.makerdao.com/polling/QmcNd4mH)
- **Proposal**: [Forum Post](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25543), [Forum Post](https://forum.sky.money/t/28-nov-2024-proposed-changes-to-spark-for-upcoming-spell-amendments/25575)

If this executive proposal passes, then a Spark Proxy Spell will be executed at [0x6c87D984689CeD0bB367A58722aC74013F82267d](https://etherscan.io/address/0x6c87D984689CeD0bB367A58722aC74013F82267d) with the following contents.

#### [Mainnet] Spark Effective DAI Borrow Rate Increase

- Increase the Spark Effective DAI Borrow Rate by ~1 percentage point, from ~8.5% to **~9.5%**.

#### [Mainnet] Adjust SparkLend Parameters for [WBTC](https://spark.blockanalitica.com/v1/ethereum/markets/WBTC/risk)

- Reduce SparkLend WBTC [liquidation threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.6.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db%7C57eaf45219be608847d6) by 5 percentage points from 65% to **60%**.

#### [Mainnet] Adjust SparkLend Parameters for [cbBTC](https://spark.blockanalitica.com/v1/ethereum/markets/cbBTC/risk)

- Increase cbBTC [liquidation threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.6.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6) by 5 percentage points from 70% to **75%**.
- Increase cbBTC [maximum LTV](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.4_LTV_Definition/e5d19de9-0eb7-4572-857c-e83d91d92c88%7C57eaf45219be608847d6) by 9 percentage points from 65% to **74%**.

#### [Mainnet] Onboard PT-USDe-27Mar2025 to Morpho Spark DAI Vault and Adjust PT-sUSDe-27Mar2025 Pool Parameters

- Onboard [PT-USDe-27Mar2025](https://morpho.blockanalitica.com/ethereum/markets/ab0dcab71e65c05b7f241ea79a33452c87e62db387129e4abe15e458d433e4d8) to Morpho Spark DAI Vault with the configurations that follow: 
  - Pool LLTV: **91.5%**
  - Oracle discount rate: **20%**
  - Supply cap: **100 million DAI**

- Increase [PT-sUSDe-27Mar2025](https://morpho.blockanalitica.com/ethereum/markets/5e3e6b1e01c5708055548d82d01db741e37d03b948a7ef9f3d4b962648bcbfa7) pool supply cap by 200 million DAI, from 200 million DAI to **400 million DAI**.

#### [Base] Corrections to Base Executor Configuration

- Update the following parameters for [Spark Governance on Base](https://basescan.org/address/0xF93B7122450A50AF3e5A76E1d546e95Ac1d0F579#readContract):
  - Decrease the `delay` parameter from 100 seconds to **0 seconds**.
  - Increase the `gracePeriod` parameter from 1,000 seconds to **604,800 seconds (7 days)**.
 
#### Provision Liquidity to Base ALM Proxy

-  Increase the amount of sUSDS available on Base by **90 million sUSDS**.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
