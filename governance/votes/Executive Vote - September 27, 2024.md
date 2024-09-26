---
title: Template - [Executive Vote] SBE Reconfiguration, Sky Ecosystem Liquidity Bootstrapping, August 2024 Aligned Delegate Compensation, and Spark Proxy Spell - September 27, 2024
summary: Smart Burn Engine reconfiguration with updated parameters, USDS and SKY Transfers for Sky Ecosystem Liquidity Bootstrapping, August MKR and DAI Aligned Delegate Compensation, and trigger Spark Proxy Spell.
date: 2024-09-27T00:00:00.000Z
address: "0x6e17A15427eD7A411e7d55e53C13c8cE655c35C9"

---
# [Executive Proposal] SBE Reconfiguration, Sky Ecosystem Liquidity Bootstrapping, August 2024 Aligned Delegate Compensation, and Spark Proxy Spell - September 27, 2024

The Governance Facilitators, Sidestream, and Dewiz have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:
- Smart Burn Engine (SBE) will be reconfigured featuring a new contract deployment that is changing the nature of the SBE. 
- Transfer **10 million USDS** and **320 million SKY** to Sky Ecosystem Liquidity Bootstrapping.
- Distribute **124,745 DAI** and **29.46 MKR** for August Aligned Delegate Compensation.
- Trigger Spark Proxy Spell at [0xc80621140bEe6A105C180Ae7cb0a084c2409C738](https://etherscan.io/address/0xc80621140bEe6A105C180Ae7cb0a084c2409C738).

**Voting for this executive proposal will place your governance tokens in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### Smart Burn Engine (SBE) Reconfiguration

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078/2), [Poll 1140](https://vote.makerdao.com/polling/QmSxswGN)  
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078)

If this executive proposal passes, a new [SwapOnly Flapper](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078#p-98910-change-to-the-flapper-strategy-9) will be initialized. This [reconfiguration](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078) changes the SBE from a buy-and-make to a buy-and-accumulate model through the following contract actions. Accumulated tokens will be held in the [Pause Proxy](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb).

#### Flapper Initialization

Initialization of the new SwapOnly Flapper will be performed by calling [FlapperInit.initFlapperUniV2](https://github.com/makerdao/dss-flappers/blob/master/deploy/FlapperInit.sol#L67) with the following parameters:

- `flapper_`: FlapperUniV2SwapOnly ([0x374D9c3d5134052Bc558F432Afa1df6575f07407](https://etherscan.io/address/0x374D9c3d5134052Bc558F432Afa1df6575f07407))
- [`want`](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.2_Want_Parameter-1ec80531-927e-4fd5-89b0-1b4a1a1fb86b|57ea2c549207d9fe7d45): **0.98 * WAD**
- [`pip`](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.4_Pip_Parameter-dee4b9b5-022c-443a-b4ea-0c265243cc04|57ea2c549207d9fe7d45): SWAP_ONLY_FLAP_SKY_ORACLE ([0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437](https://etherscan.io/address/0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437))
- `pair`: PAIR_USDS_SKY ([0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c](https://etherscan.io/address/0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c))
- `usds`: dss.chainlog.getAddress("USDS")
- `splitter`: dss.chainlog.getAddress("MCD_SPLIT")
- `prevChainlogKey`: bytes32(0)
- `chainlogKey`: "MCD_FLAP"

#### Oracle Wrapper

Initialization of the new OracleWrapper will be performed by calling [FlapperInit.initOracleWrapper](https://github.com/makerdao/dss-flappers/blob/master/deploy/FlapperInit.sol#L111) with the following parameters:

- `wrapper_`: SWAP_ONLY_FLAP_SKY_ORACLE ([0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437](https://etherscan.io/address/0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437))
- `divisor`: 24,000
- `clKey`: "FLAP_SKY_ORACLE"

#### Additional Actions

Additionally, the following parameters will updated if this executive proposal passes:

- Increase the [hop parameter (`vow.hop`)](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.1_Hop_Parameter-f9c3ba0f-3f7a-4222-9df8-efb0bc69433e%7C57ea2c549207d9fe7d45) by 1,386 seconds from 10,249 seconds to **11,635 seconds**.
- Decrease the [bump parameter (`vow.bump`)](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.3_Bump_Parameter-512d164c-e60a-4054-850f-96285479901b%7C57ea2c549207d9fe7d45) by 40,000 USDS from 65,000 USDS to **25,000 USDS**.

### Sky Ecosystem Liquidity Bootstrapping

- **Authorization**: [Delegate Poll Request](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal-week-of-2024-09-23/25179/7), [Poll 1144](https://vote.makerdao.com/polling/QmfYzKTh)  
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal-week-of-2024-09-23/25179)

If this executive proposal passes, then **10 million USDS** and **320 million SKY** will be transferred to the Sky Ecosystem Liquidity Bootstrapping multisig at [0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD](https://etherscan.io/address/0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD).

To facilitate the transfer of USDS the following actions will occur:
- Transfer 10 million Dai from the [Surplus Buffer](https://manual.makerdao.com/parameter-index/core/param-system-surplus-buffer) to the [Pause Proxy](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb).
- Convert this Dai to USDS using the [DAI_USDS](https://etherscan.io/address/0x3225737a9Bbb6473CB4a45b7244ACa2BeFdB276A) converter.
- Transfer the resulting 10 million USDS to the destination address.

To facilitate the transfer of SKY the following actions will occur:
- Convert 13,334 MKR held within the [Pause Proxy](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb) to SKY using the [MKR_SKY](https://etherscan.io/address/0xBDcFCA946b6CDd965f99a839e4435Bcdc1bc470B) converter.
- Transfer 320 million SKY to the destination address.

### Aligned Delegate Compensation

- **Authorization**: [Atlas 2.6.3 (legacy)](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-budget-and-participation-requirements)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/august-2024-aligned-delegate-compensation/25165)

If this executive proposal passes, then a total of **124,745 DAI** and **29.46 MKR** will be distributed to six Aligned Delegates and their teams as compensation for August 2024.

#### DAI Distributions

| Delegate          | Amount (DAI) | Address                                                                                                               |
|-------------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| BLUE              | 54,167       | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky            | 20,417       | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| Kohla (Cloaky)    | 10,000       | [0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a](https://etherscan.io/address/0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a) |
| Ennoia (Cloaky)   | 10,000       | [0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b](https://etherscan.io/address/0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b) |
| JuliaChang        | 8,333        | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Byteron           | 8,333        | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| Rocky             | 8,065        | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xC31637BDA32a0811E39456A59022D2C386cb2C85) |
| BONAPUBLICA       | 5,430        | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |

#### MKR Distributions

| Delegate     | Amount (MKR) | Address                                                                                                               |
|--------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| BLUE         |        13.75 | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky       |        12.00 | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| JuliaChang   |         1.25 | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Byteron      |         1.25 | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| Rocky        |         1.21 | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xC31637BDA32a0811E39456A59022D2C386cb2C85) |

### Spark Proxy Spell

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sep-12-2024-proposed-changes-to-spark-for-upcoming-spell/25076/3), [Poll 1141](https://vote.makerdao.com/polling/QmPFkXna#poll-detail)  
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sep-12-2024-proposed-changes-to-spark-for-upcoming-spell/25076)

If this executive proposal passes, then the Spark Proxy Spell, prepared by Phoenix Labs, and reviewed by Wonderland and Certora, at address [0xc80621140bEe6A105C180Ae7cb0a084c2409C738](https://etherscan.io/address/0xc80621140bEe6A105C180Ae7cb0a084c2409C738) will be triggered.

#### [Mainnet] Collateral Onboarding of cbBTC

If this executive proposal passes, the Spark Proxy Spell will onboard cbBTC as described below:

- Token: **cbBTC**
- Token Address: **[0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf](https://etherscan.io/address/0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf)**
- Oracle: [Chronicle Labs BTC/USD](https://chroniclelabs.org/dashboard/oracle/BTC/USD?blockchain=ETH&txn=0xe9ff73bad08cd1efc4773a2ccb0b43a39c441a8a5d0b180bd5ad5d20ac096016&contract=0x24C392CDbF32Cf911B258981a66d5541d85269ce)
- Oracle Provider: Chronicle Labs
- [Optimal Utilization](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.11_Optimal_Utilization_Definition-7dd3b868-b5c1-4f16-b997-8fb35a971ab1|57eaf45219be608847d6): **60%**
- [Base](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.13_Base_Rate_Definition-3ea70be9-6d09-4e25-8025-a0235dd71c28|57eaf45219be608847d6): **0%**
- [Slope1](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.15_Slope_1_Definition-20c3c3c3-432e-48ac-8336-86b8345f920e|57eaf45219be608847d6): **4%**
- [Slope2](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.16_Slope_2_Definition-e5bb5c04-c9f1-4f85-bd45-1d36269482fe|57eaf45219be608847d6): **300%**
- Stable rate func (deprecated): N/A
- Borrow Enabled: **Yes**
- [Isolation Borrowable](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.20_Isolated_Borrow-9acac8ca-3870-4680-ae38-1ba3deb09fe3|57eaf45219be608847d6bfdb): **No**
- Stable Rate Borrowing: **No**
- [Siloed Borrowing](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.21_Siloed_Borrowing_Enabled_Definition-2683581e-34fd-4025-b3ef-a46fc19ec855|57eaf45219be608847d6): **No**
- [Flash Loan](https://docs.sparkprotocol.io/developers/guides/flash-loans) Enabled: **Yes**
- [Loan To Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **65%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **70%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **8%**
- [Reserve Factor](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.8_Reserve_Factor_Definition-3f82c59f-c575-4975-8e1b-653136c3f1fd|57eaf45219be608847d6): **20%**
- [Supply Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.9_Supply_Cap_Definition-75575b79-9a3c-4601-9c57-dd2f7f48e285|57eaf45219be608847d6): **500 cbBTC**
- [Supply Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **3,000 cbBTC**
- [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **500 cbBTC**
- [Supply Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Borrow Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.10_Borrow_Cap_Definition-fb930369-4ebc-4de0-9414-0a029857bc24|57eaf45219be608847d6): **50 cbBTC**
- [Borrow Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **500 cbBTC**
- [Borrow Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **50 cbBTC**
- [Borrow Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Isolation Mode](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **No**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [High Efficiency Mode (`Emode`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6) Category: **0**

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
