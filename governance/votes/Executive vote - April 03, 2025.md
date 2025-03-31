---
title: Template - [Executive Vote] ALLOCATOR-BLOOM-A Initialization, Smart Burn Engine Parameter Update, Grand Prix DAO Resolution, Spark Proxy Spell - April 03, 2025
summary: Initialize the ALLOCATOR-BLOOM-A vault, update the Smart Burn Engine hop Parameter, approve Spark Tokenization Grand Prix DAO Resolution, trigger a Spark Proxy Spell.
date: 2025-04-03T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] ALLOCATOR-BLOOM-A Initialization, Smart Burn Engine Parameter Update, Grand Prix DAO Resolution, Spark Proxy Spell - April 03, 2025

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:
- ALLOCATOR-BLOOM-A will be initialized as described below.
- The Smart Burn Engine hop parameter will be updated as described below.
- A DAO Resolution for the Spark Tokenization Grand Prix will be approved.
- A Spark proxy spell at address [$TBD]($Proxy_Spell_Link) will be executed.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**18 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### ALLOCATOR-BLOOM-A Initialization

- **Authorization**: [Protocol Facilitator Approval](https://forum.sky.money/t/technical-scope-of-the-star-2-allocator-launch/26190/3)
- **Proposal**: [Forum Post](https://forum.sky.money/t/technical-scope-of-the-star-2-allocator-launch/26190)

#### Allocator Initialization Parameters

If this executive proposal passes, then [AllocatorInit.initilk](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/deploy/AllocatorInit.sol#L97-L164) will be called with the following parameters:

- `sharedInstance.oracle` - **PIP_ALLOCATOR** from chainlog.
- `sharedInstance.roles` - **ALLOCATOR_ROLES** from chainlog.
- `sharedInstance.registry` - **ALLOCATOR_REGISTRY** from chainlog.
- `ilkInstance.owner` - **MCD_PAUSE_PROXY** from chainlog.
- `ilkInstance.vault` - [**0x26512A41C8406800f21094a7a7A0f980f6e25d43**](https://etherscan.io/address/0x26512A41C8406800f21094a7a7A0f980f6e25d43) (`AllocatorVault` contract).
- `ilkInstance.buffer` - [**0x629aD4D779F46B8A1491D3f76f7E97Cb04D8b1Cd**](https://etherscan.io/address/0x629aD4D779F46B8A1491D3f76f7E97Cb04D8b1Cd) (`AllocatorBuffer` contract).
- `cfg.ilk` - **ALLOCATOR-BLOOM-A**
- `cfg.duty` - **0**.
- `cfg.gap` - **10 million USDS**.
- `cfg.maxLine` - **10 million USDS**.
- `cfg.ttl` - **86,400 seconds**.
- `cfg.allocatorProxy` - [**0x1369f7b2b38c76B6478c0f0E66D94923421891Ba**](https://etherscan.io/address/0x1369f7b2b38c76B6478c0f0E66D94923421891Ba) (`SubProxy` contract).
- `cfg.ilkRegistry` - **ILK_REGISTRY** from chainlog.

As a result, a new vault called ALLOCATOR-NOVA-A will be created with the following parameters:

- [Stability Fee](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.3_Stability_Fee/67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) - **0%**.
- [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.4.1_Maximum_Debt_Ceiling_(line)/6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb) - **10 million USDS**.
- [Target Available Debt (`gap`)](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.4.2_Target_Available_Debt_(gap)/c1e17312-3744-4360-81f4-03564f0dd09d|57eaf45219bea3b430c268bb) - **10 million USDS**.
- [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.4.3_Ceiling_Increase_Cooldown_(ttl)/58f5315f-938f-464c-b2d2-f611145d469a|57eaf45219bea3b430c268bb) - **86,400 seconds**.

#### Chainlog Key Removal

If this executive proposal passes, the newly created `PIP_ALLOCATOR_BLOOM_A` key will be removed from the [Chainlog](https://chainlog.sky.money).

#### Add ALLOCATOR-BLOOM-A to the LineMom

If this executive proposal passes, ALLOCATOR-BLOOM-A will be added to the [LineMom](https://sky-atlas.powerhouse.io/A.1.9.2.2.3_Debt_Ceiling_Breaker_Exception/8c27b081-2db5-4e8f-9b5c-f5cf0f8d3102|0db30758e055352c).

### Smart Burn Engine `hop` Parameter Update

- **Authorization**: [Governance Poll 1216](https://vote.makerdao.com/polling/Qmf3cZuM)
- **Proposal**: [Forum Post](https://forum.sky.money/t/smart-burn-engine-parameter-update-april-3-spell/26201)

If this executive proposal passes, then the Smart Burn Engine `hop` parameter will be updated as follows:

- Reduce the `hop` parameter by 493 seconds from 1,728 seconds to **1,235 seconds**.

### Tokenization Grand Prix DAO Resolution Approval

- **Authorization**: [Stability Facilitator Approval](https://forum.sky.money/t/spark-tokenization-grand-prix-legal-overview-of-selected-products/26154/2)  
- **Proposal**: [Forum Post](https://forum.sky.money/t/spark-tokenization-grand-prix-legal-overview-of-selected-products/26154)

If this executive proposal passes, the resolutions posted within IPFS hash [bafkreidmumjkch6hstk7qslyt3dlfakgb5oi7b3aab7mqj66vkds6ng2de](https://ipfs.io/ipfs/bafkreidmumjkch6hstk7qslyt3dlfakgb5oi7b3aab7mqj66vkds6ng2de) will be approved.

### Spark Proxy Spell

- **Authorization**: [Stability Facilitator Approval 1](https://forum.sky.money/t/april-3-2025-proposed-changes-to-spark-for-upcoming-spell/26155/7)  
- **Proposal**: [Forum Posts 1](https://forum.sky.money/t/april-3-2025-proposed-changes-to-spark-for-upcoming-spell/26155), [2](https://forum.sky.money/t/april-3-2025-proposed-changes-to-spark-for-upcoming-spell-2/26203)

If this executive proposal passes, then a Spark Proxy Spell will be executed at [$TBD]($Proxy_Spell_Link) with the following contents.


## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
