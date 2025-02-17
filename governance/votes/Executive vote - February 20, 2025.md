---
title: Template - [Executive Vote] Rate Adjustments, GSM Pause Delay Change, Initialize Arbitrum Token Bridge, ALLOCATOR-SPARK-A DC-IAM Parameter Changes, Modify Emergency Spells in the Chainlog, Aligned Delegate Compensation, Atlas Core Development Payments, Top-up of the Integration Boost, Spark Proxy Spell - February 20, 2025
summary: $summary
date: $YYYY-MM-DDT00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Rate Adjustments, GSM Pause Delay Change, Initialize Arbitrum Token Bridge, ALLOCATOR-SPARK-A DC-IAM Parameter Changes, Modify Emergency Spells in the Chainlog, Aligned Delegate Compensation, Atlas Core Development Payments, Top-up of the Integration Boost, Spark Proxy Spell - February 20, 2025

The Governance Facilitators and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- [Stability Fees](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) for multiple vaults and the [Savings Rates (DSR and SSR)](https://sky-atlas.powerhouse.io/A.4.3.1_Savings_Rates/5586fe33-b0af-41f0-9629-b1716c7c0967%7Cb3417d54) will be decreased.
- The [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) will be ?.
- The Arbitrum Token Bridge will be initialized as described below.
- Two Emergency Spells will be updated in the [Chainlog](https://chainlog.sky.money).
- A total of **20,387 USDS** will be distributed to six Aligned Delegates as compensation for January, 2025.
- A total of **102,436 USDS** and **988,000 SKY** will be transferred to two Atlas Core Development contributors.
- ? Top-up Integration Boost.
- A Spark proxy spell will be executed.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**30 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

$OfficeHours? This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### Stability Fee Reductions

- **Authorization**: [$link_to_approval]()
- **Proposal**: [$link_to_proposal]()

If this executive proposal passes, then the [Stability Fees (SF)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) for the vault types listed below will be decreased as follows:

- Reduce ETH-A SF by TBC percentage points from 9.75% to TBC%.
- Reduce ETH-B SF by TBC percentage points from 10.25% to TBC%.
- Reduce ETH-C SF by TBC percentage points from 9.50% to TBC%.
- Reduce WSTETH-A SF by TBC percentage points from 10.75% to TBC%.
- Reduce WSTETH-B SF by TBC percentage points from 10.50% to TBC%.
- Reduce WBTC-A SF by TBC percentage points from 14.25% to TBC%.
- Reduce WBTC-B SF by TBC percentage points from 14.75% to TBC%.
- Reduce WBTC-C SF by TBC percentage points from 14.00% to TBC%.
- Reduce ALLOCATOR-SPARK-A SF by TBC percentage points from 1.33% to TBC%

### Savings Rate Reductions

- **Authorization**: [$link_to_approval]()
- **Proposal**: [$link_to_proposal]()

If this executive proposal passes, then the [DAI Savings Rate (DSR)](https://sky-atlas.powerhouse.io/A.3.2.2.2_Dai_Savings_Rate/8e289e71-7ec5-4ce5-8d4d-41aab7a50f53|57eab733e951) and the [SKY Savings Rate (SSR)](https://sky-atlas.powerhouse.io/A.3.2.2.3_Sky_Savings_Rate/73d91126-21c9-4e8a-bedf-8a51a432bb59%7C57eab733e951) will be decreased as follows:

- Reduce DSR by TBC percentage points from 7.25% to TBC%.
- Reduce SSR by TBC percentage points from 8.75% to TBC%.

### GSM Pause Delay Change

- **Authorization**: [$link_to_approval]()
- **Proposal**: [$link_to_proposal]()

If this executive proposal passes, then the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0) will be ? by ? hours, from 30 hours to **? hours**.

### Arbitrum Token Bridge Initialization

- **Authorization**: [$link_to_approval]()
- **Proposal**: [Forum Post](https://forum.sky.money/t/technical-scope-of-the-arbitrum-token-gateway-launch/25972)

If this executive proposal passes, then the Arbitrum Token Bridge will be initialized Init Arbitrum Token Bridge by calling TokenGatewayInit.initGateways using the following parameters:

- Set parameter `l1GatewayInstance.gateway`: (ERC1967Proxy: 0x84b9700E28B23F873b82c1BEb23d86C091b6079E)
- Set parameter `l1GatewayInstance.gatewayImp`: (L1TokenGateway: 0x12eDe82637d5507026D4CDb3515B4b022Ed157b1)
- Set parameter `l2GatewayInstance.gateway`: (ERC1967Proxy: 0x13F7F24CA959359a4D710D32c715D4bce273C793)
- Set parameter `l2GatewayInstance.gatewayImp`: (L2TokenGateway: 0xD404eD36D6976BdCad8ABbcCC9F09ef07e33A9A8)
- Set parameter `l2GatewayInstance.spell`: (L2TokenGatewaySpell: 0x3D4357c3944F7A5b6a0B5b67B36588BA45D3f49D)
- Set parameter `cfg.l1Router`: (L1GatewayRouter (ERC1967Proxy): 0x72Ce9c846789fdB6fC1f34aC4AD25Dd9ef7031ef)
- Set parameter `cfg.inbox`: (Inbox(ERC1967Proxy): 0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f)
- Set parameter `cfg.l1Tokens`: (array [`USDS`, `SUSDS`])
- Set parameter `cfg.l2Tokens`: (array [Usds(ERC1967Proxy): 0x6491c05A82219b8D1479057361ff1654749b876b, SUsds(ERC1967Proxy): 0xdDb46999F8891663a8F2828d25298f70416d7610])
- Set parameter `cfg.maxWithdraws`: (array [type(uint256).max, type(uint256).max])
- Set parameter `cfg.xchainMsg.maxGas`: 350000
- Set parameter `cfg.xchainMsg.gasPriceBid`: 100000000
- Set parameter `cfg.xchainMsg.maxSubmissionCost`: 1316000000000000

### ALLOCATOR-SPARK-A DC-IAM Parameter Changes

- **Authorization**: [$link_to_approval]()
- **Proposal**: [Forum Post](https://forum.sky.money/t/feb-20-2025-proposed-changes-to-spark-for-upcoming-spell/25951)

If this executive proposal passes, then the ALLOCATOR-SPARK-A DC-IAM parameters below will be changed as follows:

- Increase DC-IAM [Target Available Debt (`gap`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.4_Target_Available_Debt_Definition-b876ecf4-a901-4721-9c4b-9f2fc21f954c|57ea599773d45150b2632df9) by 400 million USDS from 100 million USDS to **500 million USDS**.
- Increase DC-IAM [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.3_Maximum_Debt_Ceiling_Definition-e4a0d8f1-4a01-46a7-b693-a94e7f4afc1a|57ea599773d45150b2632df9) by 4 billion USDS from 1 billion USDS to **5 billion USDS**.
- The [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.5_Ceiling_Increase_Cooldown_Definition-3d5980c5-7036-4b68-93e0-a48551fe09ed|57ea599773d45150b2632df9) will remain unchanged at **24 hours**.

### Emergency Spell Chainlog Update

- **Authorization**: [$link_to_approval]()
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-for-week-of-february-17-2025/25979)

If this executive proposal passes, then the [Chainlog](https://chainlog.sky.money) keys below will be updated as follows:

- Update the value of `EMSP_CLIP_BREAKER_FAB` to [0x867852d30bb3cb1411fb4e404fae28ef742b1023](https://etherscan.io/address/0x867852d30bb3cb1411fb4e404fae28ef742b1023)
- Update the value of `EMSP_LINE_WIPE_FAB` to [0x8646f8778b58a0df118facedf522181ba7277529](https://etherscan.io/address/0x8646f8778b58a0df118facedf522181ba7277529)

### Aligned Delegate Compensation for January

- **Authorization**: [Atlas A.1.5.8](https://sky-atlas.powerhouse.io/A.1.5.8_Budget_For_Prime_Delegate_Slots/e3e420fc-9b1f-4fdc-9983-fcebc45dd3aa%7C0db3af4ece0c)
- **Proposal**: [Forum Post](https://forum.sky.money/t/january-2025-aligned-delegate-compensation/25993)

If this executive proposal passes, then a total of **20,387 USDS** will be distributed to six Aligned Delegates as compensation for January 2025:

| Delegate    | Amount (USDS) | Address                                                                                                               |
|-------------|---------------|-----------------------------------------------------------------------------------------------------------------------|
| BLUE        | 4,000 USDS    | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Bonapublica | 4,000 USDS    | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Byteron     | 4,000 USDS    | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| Cloaky      | 4,000 USDS    | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |
| JuliaChang  | 4,000 USDS    | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| PBG         | 387 USDS      | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |

### Atlas Core Development Payments

- **Authorization**: [$link_to_approval]()
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-core-development-payment-requests-february-2025/25921)

If this executive proposal passes, then a total of **102,436 USDS** and **988,000 SKY** will be transferred to two Atlas Core Development contributors and their teams:

#### USDS Token Transfers

| Contributor     | USDS Amount | Address                                                                                                               |
|-----------------|-------------|-----------------------------------------------------------------------------------------------------------------------|
| BLUE            | 83,601 USDS | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky          | 18,835 USDS | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |

#### SKY Token Transfers

| Contributor | SKY Amount  | Address                                                                                                               |
|-------------|-------------|-----------------------------------------------------------------------------------------------------------------------|
| BLUE        | 550,000 SKY | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky      | 438,000 SKY | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |

### Top-up of the Integration Boost

- **Authorization**: [$link_to_approval]()
- **Proposal**: [Forum Post]()

If this executive proposal passes, then ?

### Spark Proxy Spell

- **Authorization**: [$link_to_approval]()
- **Proposal**: [Forum Post]()

If this executive proposal passes, then ?

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
