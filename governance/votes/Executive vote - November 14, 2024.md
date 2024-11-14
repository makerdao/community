---
title: Template - [Executive Vote] Stability Fee Increases, Saving Rate Increases, Sky Ecosystem Liquidity Bootstrapping Funding, Integration Boost Funding, SparkLend D3M Parameter Update, Gelato Keeper Treasury Address Update, ConsolFreight Debt Write-Off and Associated DAO Resolution, Facilitator Payment Streams, Aligned Delegate Compensation, Spark Proxy Spell - November 14, 2024
summary: Increase multiple native vault stability fees, increase the DSR and the SSR, transfer USDS for Liquidity Initiatives, transfer USDS for Integration Boost initiative, update the SparkLend buffer parameter on mainnet, update the treasury address used by the Gelato keeper, write off the debt of ConsolFreight (RWA-003) and approve a related DAO Resolution, set up new Facilitator vesting streams, distribute Aligned Delegate compensation for September 2024, trigger a Spark Proxy Spell.
date: 2024-11-14T00:00:00.000Z
address: "0xd442Ea4b93712762E337c1e15F367F0b1050fEa4"

---
# [Executive Proposal] SparkLend D3M Parameter Update, Gelato Keeper Treasury Address Update, ConsolFreight Debt Write-Off and Associated DAO Resolution, Facilitator Payment Streams, Aligned Delegate Compensation, Spark Proxy Spell - November 14, 2024

The Governance Facilitators, Sidestream and Dewiz have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- The Stability Fee for multiple native vaults will be increased.
- The Dai Savings Rate (DSR) and the Sky Savings Rate (SSR) will be increased.
- 4 million USDS will be transferred for Sky Ecosystem Liquidity Bootstrapping funding.
- 3 million USDS will be transferred for Integration Boost funding.
- The SparkLend buffer parameter on mainnet will be increased.
- The treasury address for the Gelato keeper will be updated.
- The debt of the ConsolFreight (RWA-003) vault will be written off.
- A DAO Resolution with the hash [QmX4DdVBiDBjLXYT4J4jC1XMdTn2Q7Ao8L66pKB8N3yETA](https://gateway.pinata.cloud/ipfs/QmX4DdVBiDBjLXYT4J4jC1XMdTn2Q7Ao8L66pKB8N3yETA) will be approved.
- New Facilitator vesting streams will be created.
- Aligned Delegate compensation for September 2024 will be distributed.
- A Spark Proxy Spell at [0x8a3aaeAC45Cf3D76Cf82b0e4C63cCfa8c72BDCa7](https://etherscan.io/address/0x8a3aaeAC45Cf3D76Cf82b0e4C63cCfa8c72BDCa7) will be executed.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### [Stability Fee](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.3.1_Rates_SF/8e224fee-978f-4d6d-931a-34e16c293890|57eaf45219bea3b430c2b232) Increases

- **Authorization**: [Forum Post](https://forum.sky.money/t/stability-scope-parameter-changes-17-sfs-dsr-ssr-spark-effective-dai-borrow-rate/25522/4)
- **Proposal**: [Forum Post](https://forum.sky.money/t/stability-scope-parameter-changes-17-sfs-dsr-ssr-spark-effective-dai-borrow-rate/25522/3)

If this executive proposal passes, then the following [Stability Fee](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.3.1_Rates_SF/8e224fee-978f-4d6d-931a-34e16c293890|57eaf45219bea3b430c2b232) increases will take place:

- Increase the ETH-A Stability Fee by 2 percentage point from 6.25% to **8.25%**.
- Increase the ETH-B Stability Fee by 2 percentage point from 6.75% to **8.75%**.
- Increase the ETH-C Stability Fee by 2 percentage point from 6.00% to **8.00%**.
- Increase the WSTETH-A Stability Fee by 2 percentage point from 7.25% to **9.25%**.
- Increase the WSTETH-B Stability Fee by 2 percentage point from 7.00% to **9.00%**.
- Increase the WBTC-A Stability Fee by 2 percentage point from 9.25% to **11.25%**.
- Increase the WBTC-B Stability Fee by 2 percentage point from 9.75% to **11.75%**.
- Increase the WBTC-C Stability Fee by 2 percentage point from 9.00% to **11.00%**.

### Savings Rate Increases

- **Authorization**: [Forum Post](https://forum.sky.money/t/stability-scope-parameter-changes-17-sfs-dsr-ssr-spark-effective-dai-borrow-rate/25522/4)
- **Proposal**: [Forum Post](https://forum.sky.money/t/stability-scope-parameter-changes-17-sfs-dsr-ssr-spark-effective-dai-borrow-rate/25522/3)

If this executive proposal passes, the then following savings rate increases will take place:

- Increase the [Dai Savings Rate (DSR)](https://sky-atlas.powerhouse.io/A.3.2.2.2_Dai_Savings_Rate/8e289e71-7ec5-4ce5-8d4d-41aab7a50f53|57eab733e951) by 2 percentage point from 5.50% to **7.50%**.
- Increase the [Sky Savings Rate (SSR)](https://sky-atlas.powerhouse.io/A.3.2.2.3_Sky_Savings_Rate/73d91126-21c9-4e8a-bedf-8a51a432bb59|57eab733e951) by 2 percentage point from 6.50% to **8.50%**.

Due to how the SparkLend DAI Interest Rate Model (IRM) functions, this will also results in an approximately 2 percentage point increase in the SparkLend Effective DAI Borrow Rate.

### Sky Ecosystem Liquidity Bootstrapping Funding 
- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmYHUDVA#poll-detail)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-sky-ecosystem-liquidity-bootstrapping-budget-a-5-6-1-9/25537)

If this executive proposal passes, then **4 million USDS** will be transferred to the Sky Ecosystem Liquidity Bootstrapping multisig at [0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD](https://etherscan.io/address/0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD).

To facilitate the transfer of USDS the following actions will occur:
- Transfer 4 million DAI from the [Surplus Buffer](https://manual.makerdao.com/parameter-index/core/param-system-surplus-buffer) to the [Pause Proxy](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb).
- Convert this DAI to USDS using the [DAI_USDS](https://etherscan.io/address/0x3225737a9Bbb6473CB4a45b7244ACa2BeFdB276A) converter.
- Transfer the resulting 4 million USDS to the destination address.

### Integration Boost Funding 

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmYHUDVA#poll-detail)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-integration-boost-budget-a-5-2-1-2/25536)

If this executive proposal passes, then **3 million USDS** will be transferred to the Sky Ecosystem Integration Boost multisig at [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).

To facilitate the transfer of USDS the following actions will occur:
- Transfer 3 million DAI from the [Surplus Buffer](https://manual.makerdao.com/parameter-index/core/param-system-surplus-buffer) to the [Pause Proxy](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb).
- Convert this DAI to USDS using the [DAI_USDS](https://etherscan.io/address/0x3225737a9Bbb6473CB4a45b7244ACa2BeFdB276A) converter.
- Transfer the resulting 3 million USDS to the destination address.

### SparkLend [Buffer](https://sky-atlas.powerhouse.io/A.3.8.1.3.1.4_Buffer_Definition/039d633f-bccf-492f-9c6d-c167e8b5a292|57eaf45219be9dbc3712) Increase

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmNTKFqG#poll-detail)
- **Proposal**: [Forum Post](https://forum.sky.money/t/14-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25466)

If this executive proposal passes, then the DIRECT-SPARK-DAI [(`buffer`)](https://sky-atlas.powerhouse.io/A.3.8.1.3.1.4_Buffer_Definition/039d633f-bccf-492f-9c6d-c167e8b5a292|57eaf45219be9dbc3712) parameter on mainnet will be increased by 50 million DAI from 50 million DAI to **100 million DAI**.

### Gelato Keeper Treasury Address Update

- **Authorization**: [Forum Post](https://forum.sky.money/t/gelato-keeper-update/25456/3)
- **Proposal**: [Forum Post](https://forum.sky.money/t/gelato-keeper-update/25456)

If this executive proposal passes, then the Gelato Keeper Treasury address will be updated to **[0x5041c60C75633F29DEb2AED79cB0A9ed79202415](https://etherscan.io/address/0x5041c60C75633F29DEb2AED79cB0A9ed79202415)**.

### ConsolFreight (RWA-003) Debt Write-Off and Associated DAO Resolution Approval

- **Authorization**: [Forum Post](https://forum.sky.money/t/consolfreight-rwa-003-cf4-drop-default/21745/22)
- **Proposal**: [Forum Post](https://forum.sky.money/t/consolfreight-rwa-003-cf4-drop-default/21745/21)

If this executive proposal passes, then the following actions will take place.

#### Debt Write-off

If this executive proposal passes, the outstanding debt of the RWA-003 vault will be written off by calling `cull()` on the vault's oracle. Prior to this, `drip()` will be called on the Jug to ensure that all accrued interest is accounted for. This will reduce the Surplus Buffer to cover the outstanding debt of the vault.

Please review this [forum post](https://forum.sky.money/t/consolfreight-rwa-003-cf4-drop-default/21745/21) from Steakhouse for the particulars of the events leading to this action.

#### DAO Resolution Approval

If this executive proposal passes, the DAO Resolution with the IPFS hash [QmX4DdVBiDBjLXYT4J4jC1XMdTn2Q7Ao8L66pKB8N3yETA](https://gateway.pinata.cloud/ipfs/QmX4DdVBiDBjLXYT4J4jC1XMdTn2Q7Ao8L66pKB8N3yETA) will be approved.

This will authorize RWA Foundation to receive any recovered funds from ConsolFreight and to use them to fund operational expenses.

### Facilitator Vesting Stream Creation

- **Authorization**: [Atlas 1.6.2.4.1](https://sky-atlas.powerhouse.io/A.1.6.2.4.1_List_of_Facilitator_Budgets/c511460d-53df-47e9-a4a5-2e48a533315b|0db3343515519c4a)

If this executive proposal passes, the following vesting streams will be created. 

Note that DssVestSuckable for USDS and DSSVestTransferrable for SKY are not yet available. As a result, short streams for equivalent values of DAI and MKR are used. It is hoped that by the end of January, when these streams expire, it will be possible to switch the streams for these budgets to USDS and SKY, as detailed in The Atlas.

#### DAI Streams

| Facilitator  | Address                                                                                                               | Amount (DAI) | Start Date | End Date   |
|--------------|-----------------------------------------------------------------------------------------------------------------------|--------------|------------|------------|
| JanSky       | [0xf3F868534FAD48EF5a228Fe78669cf242745a755](https://etherscan.io/address/0xf3F868534FAD48EF5a228Fe78669cf242745a755) | 168,000      | 2024-10-01 | 2025-01-31 |
| Endgame Edge | [0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) | 168,000      | 2024-10-01 | 2025-01-31 |
| Ecosystem    | [0xFCa6e196c2ad557E64D9397e283C2AFe57344b75](https://etherscan.io/address/0xFCa6e196c2ad557E64D9397e283C2AFe57344b75) | 84,000       | 2024-12-01 | 2025-01-31 |

#### MKR Streams

| Facilitator  | Address                                                                                                               | Amount (MKR) | Start Date | End Date   |
|--------------|-----------------------------------------------------------------------------------------------------------------------|--------------|------------|------------|
| JanSky       | [0xf3F868534FAD48EF5a228Fe78669cf242745a755](https://etherscan.io/address/0xf3F868534FAD48EF5a228Fe78669cf242745a755) | 72.00        | 2024-10-01 | 2025-01-31 |
| Endgame Edge | [0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) | 72.00        | 2024-10-01 | 2025-01-31 |
| Ecosystem    | [0xFCa6e196c2ad557E64D9397e283C2AFe57344b75](https://etherscan.io/address/0xFCa6e196c2ad557E64D9397e283C2AFe57344b75) | 36.00        | 2024-12-01 | 2025-01-31 |

### Aligned Delegate Compensation for September 2024

- **Authorization**: [Atlas 1.5.8](https://sky-atlas.powerhouse.io/A.1.5.8_Budget_For_Prime_Delegate_Slots/e3e420fc-9b1f-4fdc-9983-fcebc45dd3aa%7C0db3af4ece0c)
- **Proposal**: [Forum Post](https://forum.sky.money/t/september-2024-aligned-delegate-compensation/25489)

If this executive proposal passes, then a total of **308,548 DAI** and **87.09 MKR** will be distributed as Aligned Delegate compensation for September 2024, as detailed below.

Note that these payments mark the transition to a new payment system. They are still denominated in DAI and MKR, the stated currencies in The Atlas at the time these payments were earned. These payments will empty out the now defunct DAI and MKR buffers and future payments will be made in USDS, as stated in the updated Atlas.

#### DAI Payments

| Delegate        | Amount (DAI)    | Address                                                                                                               |
|-----------------|-----------------|-----------------------------------------------------------------------------------------------------------------------|
| JuliaChang      | 109,168         | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Cloaky          | 58,412          | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| BLUE            | 54,167          | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Byteron         | 34,517          | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| vigilant        | 16,155          | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) |
| Kohla (Cloaky)  | 10,000          | [0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a](https://etherscan.io/address/0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a) |
| Ennoia (Cloaky) | 10,000          | [0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b](https://etherscan.io/address/0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b) |
| Bonapublica     | 8,333           | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Rocky           | 7,796           | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xC31637BDA32a0811E39456A59022D2C386cb2C85) |

#### MKR Payments

| Delegate    | Amount (MKR) | Address                                                                                                               |
|-------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| Cloaky      | 29.25        | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| JuliaChang  | 28.75        | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| BLUE        | 13.75        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Byteron     | 9.68         | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| vigilant    | 2.43         | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) |
| Bonapublica | 2.06         | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Rocky       | 1.17         | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xC31637BDA32a0811E39456A59022D2C386cb2C85) |

### Spark Proxy Spell

- **Authorization**: [Poll 1152](https://vote.makerdao.com/polling/QmQizL1F), [Poll 1153](https://vote.makerdao.com/polling/Qmbohkr5), [Poll 1155](https://vote.makerdao.com/polling/QmYqM8Yf), [Poll 1156](https://vote.makerdao.com/polling/QmXsXzot), [Poll 1157](https://vote.makerdao.com/polling/Qmf955yA)
- **Proposal**: [Forum Post](https://forum.sky.money/t/14-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25466)

If this executive proposal passes, then the Spark Proxy Spell prepared by Phoenix Labs and reviewed by Wonderland and Certora at [0x8a3aaeAC45Cf3D76Cf82b0e4C63cCfa8c72BDCa7](https://etherscan.io/address/0x8a3aaeAC45Cf3D76Cf82b0e4C63cCfa8c72BDCa7) will be executed. The expected inclusions are:

#### Spark Liquidity Layer Activation

If this executive proposal passes, the Spark Liquidity Layer will be activated with the following parameters:

##### Ethereum

| Parameter                      | Max amount (tokens) | Slope (tokens/day) |
|--------------------------------|---------------------|--------------------|
| LIMIT_USDS_MINT                | 4,000,000           | 2,000,000          |
| LIMIT_USDC_TO_CCTP_ETH         | max.                | 0                  |
| LIMIT_USDS_TO_USDC             | 4,000,000           | 2,000,000          |
| LIMIT_USDC_TO_DOMAIN (to Base) | 4,000,000           | 2,000,000          |

##### Base

| Parameter                         | Max amount (tokens) | Slope (tokens/day) |
|-----------------------------------|---------------------|--------------------|
| LIMIT_PSM_DEPOSIT_USDC            | 4,000,000           | 2,000,000          |
| LIMIT_PSM_WITHDRAW_USDC           | 7,000,000           | 2,000,000          |
| LIMIT_PSM_DEPOSIT_USDS            | 5,000,000           | 2,000,000          |
| LIMIT_PSM_WITHDRAW_USDS           | max.                | 0                  |
| LIMIT_PSM_DEPOSIT_SUSDS           | 8,000,000           | 2,000,000          |
| LIMIT_PSM_WITHDRAW_SUSDS          | max.                | 0                  |
| LIMIT_USDC_TO_DOMAIN (to mainnet) | 4,000,000           | 2,000,000          |
| LIMIT_USDC_TO_CCTP_BASE           | max.                | 0                  |

##### Offchain Parameters

| Parameter                  | Value (tokens) |
|----------------------------|----------------|
| MAINNET_MIN_OPERATION_SIZE | 400,000        |
| BASE_MIN_OPERATION_SIZE    | 400,000        |
| DEBT_CEILING_BUFFER        | 10,000         |
| USDC_MIN_BALANCE_BASE      | 800,000        |
| USDC_OPTIMAL_BALANCE_BASE  | 800,000        |
| USDC_MAX_BALANCE_BASE      | 800,000        |

Please review the discussion [thread](https://forum.sky.money/t/14-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25466) to help inform your position before voting.

For more information about the activation process and these parameters, please read the [_Spark ALM Planner Parameter Study_ forum post published by BA Labs](https://forum.sky.money/t/14-nov-2024-spark-alm-planner-parameter-study/25467).

#### Update Morpho Vault Supply Caps

If this executive proposal passes the following supply cap changes will be made:

- Increase [PT-sUSDe-26Dec2024 91.5% pool](https://morpho.blockanalitica.com/ethereum/markets/e37784e5ff9c2795395c5a41a0cb7ae1da4a93d67bfdd8654b9ff86b3065941c) Supply Cap by 150 million DAI from 100 million DAI to **250 million DAI**.
- Increase [PT-sUSDe-27Mar2025 91.5% pool](https://morpho.blockanalitica.com/ethereum/markets/5e3e6b1e01c5708055548d82d01db741e37d03b948a7ef9f3d4b962648bcbfa7) Supply Cap by 100 million DAI from 100 million DAI to **200 million DAI**.

#### SparkLend WBTC Parameter Update

If this executive proposal passes the following parameter change will be made to the SparkLend WBTC market on mainnet:

- Reduce WBTC [liquidation threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.6.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6) by 5% from 70% to **65%**.

#### SparkLend ETH Market Interest Rate Model Adjustment

If this executive proposal passes the following change will be made to the SparkLend ETH Market [Interest Rate Model](https://sky-atlas.powerhouse.io/#A.3.8.1.6.1.3_Interest_Rate_Model_Definition-83e3f4f2-5e8e-4383-95e5-3af1bfb19210|57eaf45219be608847d6) on mainnet:

- Reduce the SparkLend Ethereum ETH [slope 1](https://sky-atlas.powerhouse.io/#A.3.8.1.6.1.15_Slope_1_Definition-20c3c3c3-432e-48ac-8336-86b8345f920e|57eaf45219be608847d6) spread parameter by 0.5% from 0% to **-0.5%**.

#### SparkLend Increase wstETH Borrow Rate Limits

If this executive proposal passes the following parameter changes will be made to the SparkLend wstETH borrow rate limits on mainnet:

- Increase wstETH Borrow Cap [`max`](https://sky-atlas.powerhouse.io/#A.3.8.1.6.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806) parameter by 97,000 wstETH from 3,000 wstETH to **100,000 wstETH**.
- Increase wstETH Borrow Cap [`gap`](https://sky-atlas.powerhouse.io/#A.3.8.1.6.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806) parameter by 4,900 wstETH from 100 wstETH to **5,000 wstETH**.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.sky.money/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
