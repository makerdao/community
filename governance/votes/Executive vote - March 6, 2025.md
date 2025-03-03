---
title: Template - [Executive Vote] ALLOCATOR-NOVA-A Initialization, SBE Parameter Update, Rate Changes, Launch Project Funding, Integration Boost Funding, Add DssBlow2 to the Chainlog, Spark Proxy Spell - March 6, 2025
summary: Initialize the ALLOCATOR-NOVA-A vault, update the Smart Burn Engine hop Parameter, update multiple rates, distribute funding for the Launch Project and Integration Boost, add DssBlow2 to the Chainlog, trigger a Spark proxy spell.
date: 2025-03-06T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] ALLOCATOR-NOVA-A Initialization, SBE Parameter Update, Rate Changes, Launch Project Funding, Integration Boost Funding, Add DssBlow2 to the Chainlog, Spark Proxy Spell - March 6, 2025

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- ALLOCATOR-NOVA-A will be initialized as described below.
- The Smart Burn Engine `hop` parameter will be updated as described below.
- Multiple rate changes will be made as described below.
- **5 million USDS** and **9.6 million SKY** will be distributed to the Launch Project.
- **3 million USDS** for Integration Boost funding will be transferred to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).
- DssBlow2 will be added to the [Chainlog](https://chainlog.sky.money).
- A Spark proxy spell at [0xBeA5FA2bFC4F6a0b6060Eb8EC23F25db8259cEE0](https://etherscan.io/address/0xBeA5FA2bFC4F6a0b6060Eb8EC23F25db8259cEE0#code) will be triggered.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**18 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### ALLOCATOR-NOVA-A Initialization

- **Authorization**: [Forum post](https://forum.sky.money/t/technical-scope-of-the-nova-allocator-instance/26031/4)
- **Proposal**: [Forum post](https://forum.sky.money/t/technical-scope-of-the-nova-allocator-instance/26031)

#### Chainlog Key Update

If this executive proposal passes, the [Chainlog](https://chainlog.sky.money) key `PIP_ALLOCATOR_SPARK_A` will be renamed to `PIP_ALLOCATOR`.

#### ALLOCATOR-NOVA-A Initialization

If this executive proposal passes, then [AllocatorInit.initilk](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/deploy/AllocatorInit.sol#L97-L164) will be called with the following parameters:

- `sharedInstance.oracle` - **`PIP_ALLOCATOR`** from the Chainlog.
- `sharedInstance.roles` - **`ALLOCATOR_ROLES`** from the Chainlog.
- `sharedInstance.registry` - **`ALLOCATOR-REGISTRY`** from the Chainlog.
- `ilkInstance.owner` - **`MCD_PAUSE_PROXY`** from the Chainlog.
- `ilkInstance.vault` - **[0xe4470DD3158F7A905cDeA07260551F72d4bB0e77](https://etherscan.io/address/0xe4470DD3158F7A905cDeA07260551F72d4bB0e77)** (the newly deployed Allocator Vault).
- `ilkInstance.buffer` - **[0x065E5De3D3A08c9d14BF79Ce5A6d3D0E8794640c](https://etherscan.io/address/0x065E5De3D3A08c9d14BF79Ce5A6d3D0E8794640c)** (the newly deployed Allocator Buffer).
- `cfg.ilk` - **ALLOCATOR_NOVA_A**.
- `cfg.duty` - **0**.
- `cfg.gap` - **1 million USDS**.
- `cfg.maxLine` - **60 million USDS**.
- `cfg.ttl` - **20 hours**.
- `cfg.allocatorProxy` - **`MCD_PAUSE_PROXY`** from the Chainlog.
- `cfg.ilkRegistry` - **`ILK_REGISTRY`** from the Chainlog.

As a result, a new vault called ALLOCATOR-NOVA-A will be created with the following parameters:

- [Stability Fee](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.3_Stability_Fee/67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) - **0%**.
- [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.4.1_Maximum_Debt_Ceiling_(line)/6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb) - **60 million USDS**.
- [Target Available Debt (`gap`)](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.4.2_Target_Available_Debt_(gap)/c1e17312-3744-4360-81f4-03564f0dd09d|57eaf45219bea3b430c268bb) - **1 million USDS**.
- [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/A.3.7.1.1.2.4.3_Ceiling_Increase_Cooldown_(ttl)/58f5315f-938f-464c-b2d2-f611145d469a|57eaf45219bea3b430c268bb) - **20 hours**.

#### Chainlog Key Removal

If this executive proposal passes, the newly created `PIP_ALLOCATOR_NOVA_A` key will be removed from the [Chainlog](https://chainlog.sky.money).

#### Operator Approval

If this executive proposal passes, the operator address at [0x0f72935f6de6C54Ce8056FD040d4Ddb012B7cd54](https://etherscan.io/address/0x0f72935f6de6C54Ce8056FD040d4Ddb012B7cd54) will be approved to transfer USDS out of the Allocator Buffer by calling:

`BufferLike(ALLOCATOR_NOVA_A_BUFFER).approve(USDS, NOVA_OPERATOR, type(uint256).max);`

#### Authorize Operator Using ALLOCATOR_ROLES

If this executive proposal passes, the operator address at [0x0f72935f6de6C54Ce8056FD040d4Ddb012B7cd54](https://etherscan.io/address/0x0f72935f6de6C54Ce8056FD040d4Ddb012B7cd54) will be authorized to call the `draw` and `wipe` functions on the vault by calling:

`RolesLike(ALLOCATOR_ROLES).setUserRole(ilk, NOVA_OPERATOR, 0, true);
RolesLike(ALLOCATOR_ROLES).setRoleAction(ilk, 0, ALLOCATOR_NOVA_A_VAULT, VaultLike.draw.selector, true);
RolesLike(ALLOCATOR_ROLES).setRoleAction(ilk, 0, ALLOCATOR_NOVA_A_VAULT, VaultLike.wipe.selector, true);`

#### Add ALLOCATOR-NOVA-A to the LineMom

If this executive proposal passes, ALLOCATOR-NOVA-A will be added to the [LineMom](https://sky-atlas.powerhouse.io/A.1.9.2.2.3_Debt_Ceiling_Breaker_Exception/8c27b081-2db5-4e8f-9b5c-f5cf0f8d3102|0db30758e055352c).

### Smart Burn Engine `hop` Parameter Update

- **Authorization**: [Forum post](https://forum.sky.money/t/smart-burn-engine-parameter-update-march-6-spell/26055/5)
- **Proposal**: [Forum Post](https://forum.sky.money/t/smart-burn-engine-parameter-update-march-6-spell/26055)

If this executive proposal passes, then the Smart Burn Engine `hop` parameter will be updated as follows:

- Increase the `hop` parameter by 1,284 seconds from 876 seconds to **2,160 seconds**.

### Rate Changes

- **Authorization**: [Forum Post](https://forum.sky.money/t/march-6-2025-stability-scope-parameter-changes-23/26078/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-6-2025-stability-scope-parameter-changes-23/26078)

If this executive proposal passes, then the following rates changes will take place:

- Increase ALLOCATOR-SPARK-A [Stability Fee](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232%7C57eaf45219bea3b430c2) by 0.52 percentage points from 3.22% to 3.74%.
- Reduce the [DAI Savings Rate (DSR)](https://sky-atlas.powerhouse.io/A.3.2.2.2_Dai_Savings_Rate/8e289e71-7ec5-4ce5-8d4d-41aab7a50f53%7C57eab733e951) by 0.75 percentage points from 4.75% to 5.50%.

### Launch Project Funding

- **Authorization**: [Atlas A.5.6](https://sky-atlas.powerhouse.io/A.5.6_Launch_Project/1f433d9d-7cdb-406f-b7e8-f9bc4855eb77%7C8d5a)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/29)

If this executive proposal passes, then the following Launch Project funding distributions will be made:

- Transfer **5 million USDS** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- Transfer **9.6 million SKY** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### Integration Boost Funding

- **Authorization**: [Atlas A.5.2.1.2](https://sky-atlas.powerhouse.io/A.5.2.1.2_Integration_Boost/129f2ff0-8d73-8057-850b-d32304e9c91a%7C8d5a9e88cf49)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-integration-boost-budget-a-5-2-1-2/25536/7)

If this executive proposal passes, then **3 million USDS** will be transferred to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7) to continue funding the Integration Boost initiative.

### Add DssBlow2 to the Chainlog

- **Authorization**: [Forum post](https://forum.sky.money/t/proposed-housekeeping-item-upcoming-executive-spell-2025-03-06/26063/3)
- **Proposal**: [Forum post](https://forum.sky.money/t/proposed-housekeeping-item-upcoming-executive-spell-2025-03-06/26063)

If this executive proposal passes, then the DssBlow2 contract deployed at [0x81EFc7Dd25241acd8E5620F177E42F4857A02B79](https://etherscan.io/address/0x81EFc7Dd25241acd8E5620F177E42F4857A02B79) will be added to the [Chainlog](https://chainlog.sky.money) as `MCD_BLOW2`.

- Source code: https://github.com/makerdao/dss-blow2/blob/master/src/DssBlow2.sol
- Audit: https://github.com/makerdao/dss-blow2/blob/master/audits/ChainSecurity_Sky_DSS_Blow2_audit.pdf

### Spark Proxy Spell

- **Authorization**: Governance Polls [1197](https://vote.makerdao.com/polling/QmQrGdQz), [1198](https://vote.makerdao.com/polling/QmfM4SBB), [1199](https://vote.makerdao.com/polling/QmbDzZ3F)  
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-6-2025-proposed-changes-to-spark-for-upcoming-spell/26036)

If this executive proposal passes, then the Spark proxy spell located at [0xBeA5FA2bFC4F6a0b6060Eb8EC23F25db8259cEE0](https://etherscan.io/address/0xBeA5FA2bFC4F6a0b6060Eb8EC23F25db8259cEE0#code) will be triggred. The expected contents are:

#### [Mainnet] Onboard tBTC to SparkLend

Onboard tBTC to SparkLend on mainnet with the following parameters:

- [Optimal Utilization](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.11_Optimal_Utilization_Definition-7dd3b868-b5c1-4f16-b997-8fb35a971ab1|57eaf45219be608847d6): **60%**
- [Base](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.13_Base_Rate_Definition-3ea70be9-6d09-4e25-8025-a0235dd71c28|57eaf45219be608847d6): **0%**
- [Slope1](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.15_Slope_1_Definition-20c3c3c3-432e-48ac-8336-86b8345f920e|57eaf45219be608847d6): **4%**
- [Slope2](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.16_Slope_2_Definition-e5bb5c04-c9f1-4f85-bd45-1d36269482fe|57eaf45219be608847d6): **300%**
- Stable rate func (deprecated): **N/A**
- Enable Borrow: **YES**
- Stable Rate Borrowing: **NO**
- [Isolation Borrowable](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.20_Isolated_Borrow-9acac8ca-3870-4680-ae38-1ba3deb09fe3|57eaf45219be608847d6bfdb): **NO**
- [Siloed Borrowing](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.21_Siloed_Borrowing_Enabled_Definition-2683581e-34fd-4025-b3ef-a46fc19ec855|57eaf45219be608847d6): **NO**
- [Flash Loan](https://docs.spark.fi/dev/sparklend/features/flash-loans#flash-loans): **YES**
- [Loan To Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **65%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **70%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **8%**
- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **20%**
- [Supply Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.9_Supply_Cap_Definition-75575b79-9a3c-4601-9c57-dd2f7f48e285|57eaf45219be608847d6): **125 tBTC**
- [Supply Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **500 tBTC**
- [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **125 tBTC**
- [Supply Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Borrow Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.10_Borrow_Cap_Definition-fb930369-4ebc-4de0-9414-0a029857bc24|57eaf45219be608847d6): **25 tBTC**
- [Borrow Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **250 tBTC**
- [Borrow Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **25 tBTC**
- [Borrow Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Isolation Mode](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **NO**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [High Efficiency Mode (`Emode`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6) Category: **0**

##### Oracle

- Oracle: BTCUSD Aggor
- Contract: [0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537](https://etherscan.io/address/0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537#code)

#### [Mainnet] Onboard LBTC to SparkLend

Onboard LBTC to SparkLend on mainnet with the following parameters:

- [Optimal Utilization](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.11_Optimal_Utilization_Definition-7dd3b868-b5c1-4f16-b997-8fb35a971ab1|57eaf45219be608847d6): **45%**
- [Base](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.13_Base_Rate_Definition-3ea70be9-6d09-4e25-8025-a0235dd71c28|57eaf45219be608847d6): **5%**
- [Slope1](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.15_Slope_1_Definition-20c3c3c3-432e-48ac-8336-86b8345f920e|57eaf45219be608847d6): **15%**
- [Slope2](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.16_Slope_2_Definition-e5bb5c04-c9f1-4f85-bd45-1d36269482fe|57eaf45219be608847d6): **300%**
- Stable rate func (deprecated): **N/A**
- Enable Borrow: **NO**
- Stable Rate Borrowing: **NO**
- [Isolation Borrowable](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.20_Isolated_Borrow-9acac8ca-3870-4680-ae38-1ba3deb09fe3|57eaf45219be608847d6bfdb): **NO**
- [Siloed Borrowing](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.21_Siloed_Borrowing_Enabled_Definition-2683581e-34fd-4025-b3ef-a46fc19ec855|57eaf45219be608847d6): **NO**
- [Flash Loan](https://docs.spark.fi/dev/sparklend/features/flash-loans#flash-loans): **NO**
- [Loan To Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **65%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **70%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **8%**
- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **15%**
- [Supply Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.9_Supply_Cap_Definition-75575b79-9a3c-4601-9c57-dd2f7f48e285|57eaf45219be608847d6): **250 LBTC**
- [Supply Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **2,500 LBTC**
- [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **250 LBTC**
- [Supply Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Borrow Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.10_Borrow_Cap_Definition-fb930369-4ebc-4de0-9414-0a029857bc24|57eaf45219be608847d6): **0**
- [Borrow Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **N/A**
- [Isolation Mode](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **NO**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [High Efficiency Mode (`Emode`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6) Category: **3**

##### Oracle

- Oracle: BTCUSD Aggor
- Contract: [0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537](https://etherscan.io/address/0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537#code)

##### BTC Correlated [Emode](https://docs.spark.fi/dev/sparklend/features/efficiency-mode-emode#efficiency-mode-emode-1)

- [Emode Category](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6): **3**
- [Loan to Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **85%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **90%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **2%**

###### Initial included assets:

- cbBTC
- LBTC

#### [Base] Spark USDC Morpho - Increase cbBTC Market Supply

- Increase the Supply Cap of the cbBTC/USDC market [(0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836)](https://app.morpho.org/base/market/0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836/cbbtc-usdc) by 400 million USDC from 100 million USDC to **500 million USDC**.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
