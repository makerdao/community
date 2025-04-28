---
title: Template - [Executive Vote] STAR2 Allocation System Updates, Increase GSM Pause Delay, Add Emergency Spell to Chainlog, Top-up of the Integration Boost, Launch Project Funding, Spark Proxy Spell, STAR2 Proxy Spell - April 30, 2025
summary: Update STAR2 Allocation Parameters for Technical Test, Increase the GSM Pause Delay, Add EMSP_SPBEAM_HALT to the Chainlog, Transfer funds for Integration Boost, Transfer funds for Launch Project, Execute Spark proxy Spell, Execute STAR2 proxy spell.
date: 2025-04-30T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] STAR2 Allocation System Updates, Increase GSM Pause Delay, Add Emergency Spell to Chainlog, Top-up of the Integration Boost, Launch Project Funding, Spark Proxy Spell, STAR2 Proxy Spell - April 30, 2025

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- STAR2 Allocation System will be updated as described below.
- The [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055) will be increased.
- EMSP_SPBEAM_HALT Standby Spell at [0xDECF4A7E4b9CAa3c3751D163866941a888618Ac0](https://etherscan.io/address/0xDECF4A7E4b9CAa3c3751D163866941a888618Ac0) will be added to the [Chainlog](https://chainlog.sky.money).
- **3 million USDS** will be transferred to top off the Integration Boost at [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).
- **5 million USDS** and **30 million SKY** will be transferred to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- A Spark proxy spell at [0x9362B8a15ab78257b11a55F7CC272F4C4676C2fe](https://etherscan.io/address/0x9362B8a15ab78257b11a55F7CC272F4C4676C2fe) will be executed.
- A STAR2 proxy spell at [0x0c9CC5D5fF3baf096d29676039BD6fB94586111A](https://etherscan.io/address/0x0c9CC5D5fF3baf096d29676039BD6fB94586111A) will be executed.


**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**18 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### STAR2 Allocation System Updates

- **Authorization**: Governance [Poll 1235](https://vote.makerdao.com/polling/QmepaQjk), [Poll 1243](https://vote.makerdao.com/polling/QmedB3hH)  
- **Proposal**: [Forum Post](https://forum.sky.money/t/technical-test-of-the-star2-allocation-system/26289)

If this executive proposal passes, then the following updates to the STAR2 Allocation System will be made.

#### Whitelist STAR2 ALMProxy

- The STAR2 ALMProxy will be whitelisted on the LitePSM by performing a `kiss` call.

#### STAR2 [Debt Ceiling Instant Access Module](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)/071d42e3-8a21-4401-852e-0b52c49768bb%7C57eaf45219bea3b430c2) Changes

- Increase ALLOCATOR-BLOOM-A [DC-IAM `gap`](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4.2_Target_Available_Debt_(gap)/c1e17312-3744-4360-81f4-03564f0dd09d%7C57eaf45219bea3b430c268bb) by 40 million DAI from 10 million DAI to **50 million DAI**.
- Increase ALLOCATOR-BLOOM-A [DC-IAM `line`](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)/6f1a913d-9436-4b70-816b-e317672737d6%7C57eaf45219bea3b430c268bb) by 90 million DAI from 10 million DAI to **100 million DAI**.

### Increase the GSM Pause Delay

- **Authorization**: [Governance Poll 1243](https://vote.makerdao.com/polling/QmedB3hH)
- **Proposal**: [Forum Post](https://forum.sky.money/t/parameter-changes-poll-april-21-2025/26290)

If this executive proposal passes, then [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055) will be increased by 30 hours from 18 hours to **48 hours**.

### Add Emergency Standby Spell to Chainlog

- **Authorization**: [Protocol Facilitator Approval](http://forum.sky.money/t/proposed-housekeeping-item-upcoming-executive-spell-2025-04-30/26304/3)
- **Proposal**: [Forum Post](https://forum.sky.money/t/proposed-housekeeping-item-upcoming-executive-spell-2025-04-30/26304)

If this executive proposal passes, then the EMSP_SPBEAM_HALT Standby Spell at [0xDECF4A7E4b9CAa3c3751D163866941a888618Ac0](https://etherscan.io/address/0xDECF4A7E4b9CAa3c3751D163866941a888618Ac0) will be added to the [Chainlog](https://chainlog.sky.money).

### Top-up of the Integration Boost

- **Authorization**: [Atlas - Integration Boost Primitive](https://sky-atlas.powerhouse.io/A.AG1.2.5.P13_Integration_Boost_Primitive/1c1f2ff0-8d73-81de-9e4f-c86f07474bf2%7C7896ed3326389fe3185c6795)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-integration-boost-budget-a-5-2-1-2/25536/10)

If this executive proposal passes, then the following Integration Boost funding distribution will be made:

- Transfer **3 million USDS** to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).

### Launch Project Funding

- **Authorization**: [Atlas - Launch Project](https://sky-atlas.powerhouse.io/A.5.6_Launch_Project/1f433d9d-7cdb-406f-b7e8-f9bc4855eb77%7C8d5a)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/37)

If this executive proposal passes, then the following [Launch Project](https://sky-atlas.powerhouse.io/A.5.5_Launch_Project/1f433d9d-7cdb-406f-b7e8-f9bc4855eb77|8d5a) funding distributions will be made:

- Transfer **5 million USDS** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- Transfer **30 million SKY** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### Spark Proxy Spell

If this executive proposal passes, then a Spark Proxy Spell will be executed at [0x9362B8a15ab78257b11a55F7CC272F4C4676C2fe](https://etherscan.io/address/0x9362B8a15ab78257b11a55F7CC272F4C4676C2fe) with the following contents.

#### Spark Liquidity Layer Mainnet - Onboard Aave Core USDT

- **Authorization**: [Governance Poll 1236](https://vote.makerdao.com/polling/QmQM99z5)
- **Proposal**: [Forum Post](https://forum.sky.money/t/may-1-2025-proposed-changes-to-spark-for-upcoming-spell/26288)

Onboard Aave Core USDT to the Spark Liquidity Layer on Mainnet with the following [rate limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits): 

- Deposits
  - `Max amount`: **50 million USDT**
  - `Slope`: **25 million USDT per day**
- Withdrawals
  - `Max amount`: **Unlimited**
 
You can read more about Aave Core in this [forum post by BA Labs](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760/7#p-100382-mainnet-spark-liquidity-layer-onboard-aave-v3-main-market-usdc-and-usds-9).

#### Spark Liquidity Layer Mainnet - Onboard SparkLend USDT

- **Authorization**: [Governance Poll 1237](https://vote.makerdao.com/polling/QmfJ5yDF)
- **Proposal**: [Forum Post](https://forum.sky.money/t/may-1-2025-proposed-changes-to-spark-for-upcoming-spell/26288)

Onboard SparkLend USDT to the Spark Liquidity Layer on Mainnet with the following [rate limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits):

- Deposits
  - `Max amount`: **100 million USDT**
  - `Slope`: **50 million USDT per day**
- Withdrawals
  - `Max amount`: **Unlimited**
  
#### SparkLend Ethereum - Adjust USDT Cap Automator Parameters 

- **Authorization**: [Governance Poll 1238](https://vote.makerdao.com/polling/QmZ2vydY)
- **Proposal**: [Forum Post](https://forum.sky.money/t/may-1-2025-proposed-changes-to-spark-for-upcoming-spell/26288)

Adjust the USDT [Cap Automator parameters](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.3_SparkLend_Risk_Parameters_Cap_Automators/1c1f2ff0-8d73-81ec-bc16-e2f85c0765d7%7C7896ed3326389fe3553030cd0a82f68e) on SparkLend Ethereum as follows:

- Supply cap
  - `gap`: Set to **100 million USDT**.
  - `max`: Increase by 470 million USDT from 30 million USDT to **500 million USDT**.
- Borrow cap
  - `gap`: Increase by 47 million USDT from 3 million USDT to **50 million USDT**.
  - `max`: Increase by 421.5 million USDT from 28.5 million USDT to **450 million USDT**.
  - `ttl`: Keep unchanged at **12 hours**.

#### SparkLend Ethereum - Update DAI Interest Rate Model

- **Authorization**: [Governance Poll 1239](https://vote.makerdao.com/polling/Qmdc28Ag)
- **Proposal**: [Forum Post](https://forum.sky.money/t/may-1-2025-proposed-changes-to-spark-for-upcoming-spell/26288)

Update the DAI [Interest Rate Model](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.3_Interest_Rate_Model_Definition/1c1f2ff0-8d73-81dd-99c0-fc707ce48e01%7C7896ed3326389fe3553030cd0a82f68efd49) as follows:

- [Base rate](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.13_Base_Rate_Definition/1c1f2ff0-8d73-81c1-9b9b-ef4b84c1450f%7C7896ed3326389fe3553030cd0a82f68efd49): Set to **SSR value**.
- [Slope 1](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.15_Slope_1_Definition/1c1f2ff0-8d73-81be-9f17-d7d4bfc6cb59%7C7896ed3326389fe3553030cd0a82f68efd49): Set to **0.75%**.
- [Slope 2](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.17_Slope_2_Definition/1c1f2ff0-8d73-8199-aa99-dde95c3f7130%7C7896ed3326389fe3553030cd0a82f68efd49): Set to **15%**.
- [Optimal utilization](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.11_Optimal_Utilization_Definition/1c1f2ff0-8d73-8173-a52b-d6f86efd3366%7C7896ed3326389fe3553030cd0a82f68efd49): Set to **80%**.

#### SparkLend Ethereum - Update USDC Interest Rate Model

- **Authorization**: [Governance Poll 1240](https://vote.makerdao.com/polling/Qmee2jez)
- **Proposal**: [Forum Post](https://forum.sky.money/t/may-1-2025-proposed-changes-to-spark-for-upcoming-spell/26288)

Update the USDC [Interest Rate Model](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.3_Interest_Rate_Model_Definition/1c1f2ff0-8d73-81dd-99c0-fc707ce48e01%7C7896ed3326389fe3553030cd0a82f68efd49) as follows:

- [Base rate](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.13_Base_Rate_Definition/1c1f2ff0-8d73-81c1-9b9b-ef4b84c1450f%7C7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **0%**.
- [Slope 1](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.15_Slope_1_Definition/1c1f2ff0-8d73-81be-9f17-d7d4bfc6cb59%7C7896ed3326389fe3553030cd0a82f68efd49): Reduce by 1.33 percentage points from 6.83% to **5.50%** (SSR + 1%).
- [Slope 2](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.17_Slope_2_Definition/1c1f2ff0-8d73-8199-aa99-dde95c3f7130%7C7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **15%**.
- [Optimal utilization](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.11_Optimal_Utilization_Definition/1c1f2ff0-8d73-8173-a52b-d6f86efd3366%7C7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **95%**.

#### SparkLend Ethereum - Update USDS Interest Rate Model

- **Authorization**: [Governance Poll 1241](https://vote.makerdao.com/polling/QmeNB8S1)
- **Proposal**: [Forum Post](https://forum.sky.money/t/may-1-2025-proposed-changes-to-spark-for-upcoming-spell/26288)

Update the USDS [Interest Rate Model](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.3_Interest_Rate_Model_Definition/1c1f2ff0-8d73-81dd-99c0-fc707ce48e01%7C7896ed3326389fe3553030cd0a82f68efd49) as follows:

- [Base rate](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.13_Base_Rate_Definition/1c1f2ff0-8d73-81c1-9b9b-ef4b84c1450f%7C7896ed3326389fe3553030cd0a82f68efd49): Set to **SSR value**.
- [Slope 1](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.15_Slope_1_Definition/1c1f2ff0-8d73-81be-9f17-d7d4bfc6cb59%7C7896ed3326389fe3553030cd0a82f68efd49): Increase by 0.75 percentage points from 0% to **0.75%**.
- [Slope 2](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.17_Slope_2_Definition/1c1f2ff0-8d73-8199-aa99-dde95c3f7130%7C7896ed3326389fe3553030cd0a82f68efd49): Reduce by 5 percentage points from 20% to **15%**.
- [Optimal utilization](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.11_Optimal_Utilization_Definition/1c1f2ff0-8d73-8173-a52b-d6f86efd3366%7C7896ed3326389fe3553030cd0a82f68efd49): Reduce by 15 percentage points from 95% to **80%**.

#### SparkLend Ethereum - Update USDT Interest Rate Model

- **Authorization**: [Governance Poll 1242](https://vote.makerdao.com/polling/QmfBmrxq)
- **Proposal**: [Forum Post](https://forum.sky.money/t/may-1-2025-proposed-changes-to-spark-for-upcoming-spell/26288)

Update the USDT [Interest Rate Model](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.3_Interest_Rate_Model_Definition/1c1f2ff0-8d73-81dd-99c0-fc707ce48e01%7C7896ed3326389fe3553030cd0a82f68efd49) as follows:

- [Base rate](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.13_Base_Rate_Definition/1c1f2ff0-8d73-81c1-9b9b-ef4b84c1450f%7C7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **0%**.
- [Slope 1](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.15_Slope_1_Definition/1c1f2ff0-8d73-81be-9f17-d7d4bfc6cb59%7C7896ed3326389fe3553030cd0a82f68efd49): Update to **SSR value plus 1%**.
- [Slope 2](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.17_Slope_2_Definition/1c1f2ff0-8d73-8199-aa99-dde95c3f7130%7C7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **15%**.
- [Optimal utilization](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.11_Optimal_Utilization_Definition/1c1f2ff0-8d73-8173-a52b-d6f86efd3366%7C7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **95%**.

### STAR2 Proxy Spell

If this executive proposal passes, then a STAR2 Proxy Spell will be executed at [0x0c9CC5D5fF3baf096d29676039BD6fB94586111A](https://etherscan.io/address/0x0c9CC5D5fF3baf096d29676039BD6fB94586111A) with the following contents.

#### Activate STAR2 Liquidity Layer on Mainnet

- **Authorization**: [Governance Poll 1235](https://vote.makerdao.com/polling/QmepaQjk)
- **Proposal**: [Forum Post](https://forum.sky.money/t/technical-test-of-the-star2-allocation-system/26289)

Activate STAR2 Liquidity Layer on Mainnet with the following parameters.

##### Pre-deployed contracts

| Contract Name | Address |
| ------------- | ------- |
| **ALMProxy** | [`0x491EDFB0B8b608044e227225C715981a30F3A44E`](https://etherscan.io/address/0x491EDFB0B8b608044e227225C715981a30F3A44E#code) |
| **MainnetController** | [`0x3048386E09c72C20FB268a37d2B630D7f2Ee9138`](https://etherscan.io/address/0x3048386E09c72C20FB268a37d2B630D7f2Ee9138#code) |
| **RateLimits** | [`0x5F5cfCB8a463868E37Ab27B5eFF3ba02112dF19a`](https://etherscan.io/address/0x5F5cfCB8a463868E37Ab27B5eFF3ba02112dF19a#code) |
| **ALMRelayer** (SafeProxy) | [`0x0eEC86649E756a23CBc68d9EFEd756f16aD5F85f`](https://etherscan.io/address/0x0eEC86649E756a23CBc68d9EFEd756f16aD5F85f#code) |
| **ALMFreezer** (SafeProxy) | [`0xB0113804960345fd0a245788b3423319c86940e5`](https://etherscan.io/address/0xB0113804960345fd0a245788b3423319c86940e5#code) |

All deployments were [verified by ChainSecurity](https://github.com/ChainSecurity/dv-files/tree/main/sky/bloom-alm-controller).

##### Initial Parameters for the Test

On-chain parameters for the STAR2 Liquidity Layer for initial activation.

| Parameter | Max Amount | Slope (Tokens/Day) |
| --------- | ---------- | ------------------ |
| LIMIT_USDS_MINT | 100 million | 50 million |
| LIMIT_USDS_TO_USDC | 100 million | 50 million |

##### Liquidity Layer

To test the recently deployed STAR2 Liquidity Layer, the STAR2 team proposes to onboard Centrifuge 7540 Vault and conduct a test deployment of 100,000 USDC with the following parameters:

- Deposits
  - `Max amount`: **100 million USDC**
  - `Slope`: **50 million USDC**
- Withdrawals
  - `Max amount`: **Unlimited**

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
