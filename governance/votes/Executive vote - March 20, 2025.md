---
title: Template - [Executive Vote] ETH and WSTETH Oracle Migration, Rate Changes, Smart Burn Engine Parameter Update, Bug Bounty Payout, Aligned Delegate Compensation, Atlas Core Development Payments, Integration Boost Top-up, Spark Proxy Spell - March 20, 2025
summary: ETH and WSTETH oracle migration to Chronicle's new Scribe-based design, multiple rate changes including DSR and SSR changes, Smart Burn Engine hop parameter update, bug bounty payout, Aligned Delegate compensation for February 2025, Atlas Core Development payments, Integration Boost funding distribution, Spark proxy spell. 
date: 2025-03-20T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] ETH and WSTETH Oracle Migration, Rate Changes, Smart Burn Engine Parameter Update, Bug Bounty Payout, Aligned Delegate Compensation, Atlas Core Development Payments, Integration Boost Top-up, Spark Proxy Spell - March 20, 2025

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- Sky's ETH and WSTETH oracles will be migrated from the current Median-based design to Chronicle's new Scribe-based design.
- Multiple rate changes will be made as described below.
- The Smart Burn Engine `hop` parameter will be updated as described below.
- A total of **55,000 USDS** for a Bug Bounty payout will be distributed as described below.
- A total of **23,613 USDS** will be distributed to seven Aligned Delegated as compensation for February 2025.
- Atlas Core Development payments totalling **86,639 USDS** and **618,000 SKY** will be distributed.
- **3 million USDS** for Integration Boost funding will be transferred to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).
- A Spark proxy spell at [0x1e865856d8F97FB34FBb0EDbF63f53E29a676aB6](https://etherscan.io/address/0x1e865856d8F97FB34FBb0EDbF63f53E29a676aB6#code) will be triggered.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**18 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### ETH and WSTETH Oracle Migration

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/march-20-2025-final-native-vault-engine-oracle-migration-proposal-eth-steth/26110/2), [Governance Poll 1201](?)
- **Proposal**: Forum posts [1](http://forum.sky.money/t/march-20-2025-final-native-vault-engine-oracle-migration-proposal-eth-steth/26110/), [2](https://forum.sky.money/t/technical-scope-of-the-eth-and-wsteth-oracles-migration/26128)

If this executive proposal passes, then the following oracle changes will be made as part of the migration process defined in [A.3.7.1.1.4, Oracles](https://sky-atlas.powerhouse.io/A.3.7.1.1.4_Oracles/c317d8c1-5706-4632-90a3-442b5f3d9000%7C57eaf45219bea3b4):

- Update the ETH oracle source to [0x46ef0071b1E2fF6B42d36e5A177EA43Ae5917f4E](https://etherscan.io/address/0x46ef0071b1E2fF6B42d36e5A177EA43Ae5917f4E).
- Update the WSTETH oracle source to [0xA770582353b573CbfdCC948751750EeB3Ccf23CF](https://etherscan.io/address/0xA770582353b573CbfdCC948751750EeB3Ccf23CF).

### Rate Changes

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/mar-20-2025-stability-scope-parameter-changes-24/26129/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/mar-20-2025-stability-scope-parameter-changes-24/26129)

If this executive proposal passes, then the following rate changes will take place:

- Reduce ETH-A [Stability Fee](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.3_Stability_Fee/67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) by 1.75 percentage points from 7.75% to **6.00%**.
- Reduce ETH-B Stability Fee by 1.75 percentage points from 8.25% to **6.50%**.
- Reduce ETH-C Stability Fee by 1.75 percentage points from 7.50% to **5.75%**.
- Reduce WSTETH-A Stability Fee by 1.75 percentage points from 8.75% to **7.00%**.
- Reduce WSTETH-B Stability Fee by 1.75 percentage points from 8.50% to **6.75%**.
- Reduce WBTC-A Stability Fee by 1.75 percentage points from 12.75% to **11.00%**.
- Reduce WBTC-B Stability Fee by 1.75 percentage points from 13.25% to **11.50%**.
- Reduce WBTC-C Stability Fee by 1.75 percentage points from 12.50% to **10.75%**.
- Reduce ALLOCATOR-SPARK-A [Stability Fee](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232%7C57eaf45219bea3b430c2) by 1.12 percentage points from 3.74% to **2.62%**.
- Reduce the [DAI Savings Rate (DSR)](https://sky-atlas.powerhouse.io/A.3.2.2.2_Dai_Savings_Rate/8e289e71-7ec5-4ce5-8d4d-41aab7a50f53%7C57eab733e951) by 2.00 percentage points from 5.50% to **3.50%**.
- Reduce the [Sky Savings Rate (SSR)](https://sky-atlas.powerhouse.io/A.3.2.2.3_Sky_Savings_Rate/73d91126-21c9-4e8a-bedf-8a51a432bb59|57eab733e951) by 2.00 percentage points from 6.50% to **4.50%**.

### Smart Burn Engine `hop` Parameter Update

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/smart-burn-engine-parameter-update-march-20-spell/26130/3)
- **Proposal**: [Forum Post](https://forum.sky.money/t/smart-burn-engine-parameter-update-march-20-spell/26130)

If this executive proposal passes, then the Smart Burn Engine `hop` parameter will be updated as follows:

- Decrease the `hop` parameter by 432 seconds from 2,160 seconds to **1,728 seconds**.

### Bug Bounty Payout

- **Authorization**: [Atlas A.2.9.1.1](https://sky-atlas.powerhouse.io/A.2.9.1.1_Bug_Bounty_Program_For_Critical_Infrastructure/7d58645d-713c-4c54-a2ee-e0c948fb0c25|9e1f4492c8ce)
- **Proposal**: [Forum Post](https://forum.sky.money/t/bounty-payout-request-for-immunefi-bug-38567/26072)

If this executive proposal passes, then the following distributions for Immunefi bug #38567 will be made:

- Transfer **50,000 USDS** to the whitehat at [0x29d17B5AcB1C68C574712B11F36C859F6FbdBe32](https://etherscan.io/address/0x29d17B5AcB1C68C574712B11F36C859F6FbdBe32).
- Transfer **5,000 USDS** to Immunefi at [0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18 (immunefi.eth)](https://etherscan.io/address/0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18).

### Aligned Delegate Compensation for February 2025

- **Authorization**: [Atlas A.1.5.6](https://sky-atlas.powerhouse.io/A.1.5.6_Budget_For_Prime_Delegate_Slots/e3e420fc-9b1f-4fdc-9983-fcebc45dd3aa|0db3af4ece0c)
- **Proposal**: [Forum Post](https://forum.sky.money/t/february-2025-aligned-delegate-compensation/26131)

If this executive proposal passes, then a total of **23,613 USDS** will be distributed to seven Aligned Delegates and their teams as compensation for February 2025.

| Delegate    | Amount (USDS) | Address                                                                                                               |
|-------------|--------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE        | 4,000         | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Bonapublica | 4,000         | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Cloaky      | 4,000         | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |
| JuliaChang  | 4,000         | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| WBC         | 3,613         | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) |
| PBG         | 3,429         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |
| Byteron     | 571           | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |

### Atlas Core Development Payments

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/atlas-core-development-payment-requests-march-2025/26077/8), Atlas Axis Approvals [1](http://forum.sky.money/t/atlas-core-development-payment-requests-march-2025/26077/6), [2](http://forum.sky.money/t/atlas-core-development-payment-requests-march-2025/26077/7)
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-core-development-payment-requests-march-2025/26077)

If this executive proposal passes, then a total of **86,639 USDS** and **618,000 SKY** will be distributed for Atlas Core Development funding.

#### USDS Payments

| Recipient | Amount (USDS) | Address                                                                                                               |
|-----------|--------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE      | 50,167        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky    | 16,417        | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |
| Ennoia    | 10,055        | [0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b](https://etherscan.io/address/0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b) |
| Kohla     | 10,000        | [0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a](https://etherscan.io/address/0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a) |

#### SKY Payments

| Recipient | Amount (SKY) | Address                                                                                                               |
|-----------|-------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE      | 330,000      | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky    | 288,000      | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |

### Integration Boost Top-up

- **Authorization**: [Atlas A.5.2.1.2](https://sky-atlas.powerhouse.io/A.5.2.1.2_Integration_Boost/129f2ff0-8d73-8057-850b-d32304e9c91a|8d5a9e88cf49)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-integration-boost-budget-a-5-2-1-2/25536/8)

If this executive proposal passes, then the following Integration Boost funding distribution will be made:

- Transfer **3 million USDS** to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).

### Spark Proxy Spell

If this executive proposal passes, then a Spark Proxy Spell will be executed at [0x1e865856d8F97FB34FBb0EDbF63f53E29a676aB6](https://etherscan.io/address/0x1e865856d8F97FB34FBb0EDbF63f53E29a676aB6) with the following contents.

#### Increase the Spark Effective DAI and USDS Borrow Rate

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/mar-20-2025-stability-scope-parameter-changes-24/26129/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/mar-20-2025-stability-scope-parameter-changes-24/26129)

- Increase the Spark Effective DAI and USDS borrow rate by ~0.25 percentage points, from ~0.25% to **~0.5%**.

#### [Spark Liquidity Layer Base - Spark USDC Morpho] - Increase cbBTC Market Supply Cap

- **Authorization**: [Governance Poll 1197](https://vote.makerdao.com/polling/QmQrGdQz)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-6-2025-proposed-changes-to-spark-for-upcoming-spell/26036)

- Increase the Supply Cap of the cbBTC/USDC market ([0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836](https://app.morpho.org/base/market/0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836/cbbtc-usdc)) by 400 million USDC from 100 million USDC to **500 million USDC**.

#### [SparkLend Ethereum] - Onboard LBTC

- **Authorization**: [Governance Poll 1198](https://vote.makerdao.com/polling/QmfM4SBB)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-6-2025-proposed-changes-to-spark-for-upcoming-spell/26036)

Onboarding of Lombard BTC (LBTC) onto SparkLend Ethereum with the following parameters:

##### Collateral Parameters

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

##### Oracle Information

- Oracle: BTCUSD Aggor
- Contract: [0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537](https://etherscan.io/address/0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537#code)

##### BTC Correlated [Emode](https://docs.spark.fi/dev/sparklend/features/efficiency-mode-emode#efficiency-mode-emode-1)

- [Emode Category](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6): **3**
- [Loan to Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **85%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **90%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **2%**

Initial included assets:

- cbBTC
- LBTC

#### [SparkLend Ethereum] - Onboard tBTC

- **Authorization**: [Governance Poll 1199](https://vote.makerdao.com/polling/QmbDzZ3F)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-6-2025-proposed-changes-to-spark-for-upcoming-spell/26036)

Onboarding of Threshold BTC (tBTC) onto SparkLend Ethereum with the following parameters:

##### Collateral Parameters

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

##### Oracle Information

- Oracle: BTCUSD Aggor
- Contract: [0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537](https://etherscan.io/address/0x4219aA1A99f3fe90C2ACB97fCbc1204f6485B537#code)

#### [Spark Liquidity Layer Arbitrum] - Onboard Aave USDC

- **Authorization**: [Governance Poll 1201](https://vote.makerdao.com/polling/Qmf4PDcJ)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-20-2025-proposed-changes-to-spark-for-upcoming-spell/26113)

Onboarding Aave USDC onto the Spark Liquidity Layer on Arbitrum with the following [Rate Limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits):

- Deposits
  - `max amount`: **30 million USDC**
  - `slope`: **15 million USDC**
- Withdrawals
  - `max amount`: **unlimited**

#### [Spark Protocol Mainnet] - Onboard July USDe PT onto Morpho Spark DAI Vault

- **Authorization**: [Governance Poll 1203](https://vote.makerdao.com/polling/QmXvuNAv)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-20-2025-proposed-changes-to-spark-for-upcoming-spell/26113)

Onboarding July USDe PT onto the Morpho Spark DAI Vault with the following parameters:

- Pool LLTV: **91.5%**
- Oracle Discount Rate: **20%**
- Supply Cap: **200 million DAI**

#### [Spark Protocol Mainnet] - Onboard May eUSDe PT onto Morpho Spark DAI Vault

- **Authorization**: [Governance Poll 1204](https://vote.makerdao.com/polling/QmXrHgdj)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-20-2025-proposed-changes-to-spark-for-upcoming-spell/26113)

Onboarding May eUSDe PT onto the Morpho Spark DAI Vault with the following parameters:

- Pool LLTV: **91.5%**
- Oracle Discount Rate: **20%**
- Supply Cap: **300 million DAI**

#### [SparkLend Ethereum] - Onboard ezETH

- **Authorization**: [Governance Poll 1205](https://vote.makerdao.com/polling/QmTj3BSu)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-20-2025-proposed-changes-to-spark-for-upcoming-spell/26113)

Onboarding ezETH onto SparkLend Ethereum with the following parameters:

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
- [Loan To Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **72%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **73%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **10%**
- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **15%**
- [Supply Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.9_Supply_Cap_Definition-75575b79-9a3c-4601-9c57-dd2f7f48e285|57eaf45219be608847d6): **2,000 ezETH**
- [Supply Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **20,000 ezETH**
- [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **2,000 ezETH**
- [Supply Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Borrow Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.10_Borrow_Cap_Definition-fb930369-4ebc-4de0-9414-0a029857bc24|57eaf45219be608847d6): **0**
- [Borrow Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **N/A**
- [Isolation Mode](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **NO**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [High Efficiency Mode (`Emode`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6) Category: **0**

##### Oracle Information

- Oracle: `ezETH/ETH exchange rate (from contract) * ETHUSD market price`
- Oracle Implementation: *To be added when available*

#### [SparkLend Ethereum] - Onboard rsETH

- **Authorization**: [Governance Poll 1206](https://vote.makerdao.com/polling/QmPkA2GP)
- **Proposal**: [Forum Post](https://forum.sky.money/t/march-20-2025-proposed-changes-to-spark-for-upcoming-spell/26113)

Onboarding rsETH onto SparkLend Ethereum with the following parameters:

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
- [Loan To Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **72%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **73%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **10%**
- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **15%**
- [Supply Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.9_Supply_Cap_Definition-75575b79-9a3c-4601-9c57-dd2f7f48e285|57eaf45219be608847d6): **2,000 rsETH**
- [Supply Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **20,000 rsETH**
- [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **2,000 rsETH**
- [Supply Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Borrow Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.10_Borrow_Cap_Definition-fb930369-4ebc-4de0-9414-0a029857bc24|57eaf45219be608847d6): **0**
- [Borrow Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **N/A**
- [Isolation Mode](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **NO**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [High Efficiency Mode (`Emode`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6) Category: **0**

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
