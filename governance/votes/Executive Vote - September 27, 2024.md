---
title: Template - [Executive Vote] SBE Updates, Sky Ecosystem Liquidity Bootstrapping, August 2024 Aligned Delegate Compensation, and Spark Proxy Spell - September 27, 2024
summary: Smart Burn Engine Parameter Updates, USDS and SKY Transfers for Sky Ecosystem Liquidity Bootrapping, August MKR and DAI Aligned Delegate Compensation, and trigger Spark Proxy Spell.
date: 2024-09-27T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] SBE Updates, Sky Ecosystem Liquidity Bootstrapping, August 2024 Aligned Delegate Compensation, and Spark Proxy Spell - September 27, 2024

The Governance Facilitators, Sidestream, and Dewiz have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:
- Smart Burn Engine Parameter Updates.
- Transfer **10 million USDS** and **320 million SKY** to Sky Ecosystem Liquidity Bootstrapping.
- Distribute **124,745 DAI** and **29.46 MKR** for August Aligned Delegate Compensation.
- Trigger Spark Proxy Spell at [0xc80621140bEe6A105C180Ae7cb0a084c2409C738](https://etherscan.io/address/0xc80621140bEe6A105C180Ae7cb0a084c2409C738).

**Voting for this executive proposal will place your governance tokens in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.
---

## Proposal Details

### Smart Burn Engine (SBE) Parameter Updates

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078/2), [Poll 1140](https://vote.makerdao.com/polling/QmSxswGN)  
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078)

If this executive proposal passes, a new [SwapOnly Flapper](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078#p-98910-change-to-the-flapper-strategy-9) will be initialized through the following contract actions:

#### Flapper Initialization

Initialization of new SwapOnly Flapper by calling [FlapperInit.initFlapperUniV2](https://github.com/makerdao/dss-flappers/blob/master/deploy/FlapperInit.sol#L22) with the following parameters:

- `flapper_`: FlapperUniV2SwapOnly ([0x374D9c3d5134052Bc558F432Afa1df6575f07407](https://etherscan.io/address/0x374D9c3d5134052Bc558F432Afa1df6575f07407))
- [`want`](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.2_Want_Parameter-1ec80531-927e-4fd5-89b0-1b4a1a1fb86b|57ea2c549207d9fe7d45): **0.98 * WAD**
- [`pip`](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.4_Pip_Parameter-dee4b9b5-022c-443a-b4ea-0c265243cc04|57ea2c549207d9fe7d45): SWAP_ONLY_FLAP_SKY_ORACLE ([0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437](https://etherscan.io/address/0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437))
- `pair`: PAIR_USDS_SKY ([0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c](https://etherscan.io/address/0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c))
- `usds`: dss.chainlog.getAddress("USDS")
- `splitter`: dss.chainlog.getAddress("MCD_SPLIT")
- `prevChainlogKey`: bytes32(0)
- `chainlogKey`: "MCD_FLAP"

#### Oracle Wrapper

Initialisation of new OracleWrapper by calling [FlapperInit.initOracleWrapper](https://github.com/makerdao/dss-flappers/blob/master/deploy/FlapperInit.sol#L38) with the following parameters:

- `wrapper_`: SWAP_ONLY_FLAP_SKY_ORACLE ([0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437](https://etherscan.io/address/0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437))
- `divisor`: 24,000
- `clKey`: "FLAP_SKY_ORACLE"

#### Additional Actions

Additionally, the following parameters will updated by this spell:

- Increase the [hop parameter (`vow.hop`)](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.1_Hop_Parameter-f9c3ba0f-3f7a-4222-9df8-efb0bc69433e%7C57ea2c549207d9fe7d45) by 1,386 seconds from 10,249 seconds to **11,635 seconds**.
- Decrease the [bump parameter (`vow.bump`)](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.3_Bump_Parameter-512d164c-e60a-4054-850f-96285479901b%7C57ea2c549207d9fe7d45) by 40,000 USDS from 65,000 USDS to **25,000 USDS**.

### Sky Ecosystem Liquidity Bootstrapping

- **Authorization**: [Delegate Poll Request](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal-week-of-2024-09-23/25179/7), [Poll 1144](https://vote.makerdao.com/polling/QmfYzKTh)  
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/atlas-edit-weekly-cycle-proposal-week-of-2024-09-23/25179)

If this executive proposal passes, then **10 million USDS** and **320 million SKY** will be transferred to the Sky Ecosystem Liquidity Bootstrapping multisig at [0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD](https://etherscan.io/address/0xD8507ef0A59f37d15B5D7b630FA6EEa40CE4AFdD).

To facilitate the transfer of USDS the following actions will occur:
-  Transfer 10 million Dai from the Surplus Buffer to the Pause Proxy.
- Convert this Dai to USDS using the DAI_USDS converter.
- Transfer the resulting 10 million USDS to the destination address.

To facilitate the transfer of SKY the following actions will occur:
- Convert 13,334 MKR held within the Pause Proxy to SKY using the MKR_SKY converter.
- Transfer 320,000,000 SKY to the destination address.

### Aligned Delegate Compensation

- **Authorization**: [Atlas A.1.5.5](https://sky-atlas.powerhouse.io/#A.1.5.5_Eligibility_To_Receive_Budget-5c9662be-9fc4-4b58-aef0-ca3e0bf56039|0db3af4ece0c)
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

### Trigger Spark Proxy Spell

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sep-12-2024-proposed-changes-to-spark-for-upcoming-spell/25076/3), [Poll 1141](https://vote.makerdao.com/polling/QmPFkXna#poll-detail)  
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sep-12-2024-proposed-changes-to-spark-for-upcoming-spell/25076)

If this executive proposal passes, then the Spark Proxy Spell, prepared by Wonderland, Phoenix Labs, and Certora, at address [0xc80621140bEe6A105C180Ae7cb0a084c2409C738](https://etherscan.io/address/0xc80621140bEe6A105C180Ae7cb0a084c2409C738) will be triggered.

#### Collateral Onboarding of cbBTC

If this executive proposal passes, the Sprak Proxy Spell will onboard cbBTC as discussed in this [forum post](https://forum.makerdao.com/t/sep-12-2024-proposed-changes-to-spark-for-upcoming-spell/25076).

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
