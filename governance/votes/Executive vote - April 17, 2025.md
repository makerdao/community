---
title: Template - [Executive Vote] SP-BEAM Initialization, Sky Token Rewards Rebalance, Set Aave Lido Market (Prime Market) DDM DC to 0, SBE Changes, Launch Project Funding, Spark-Aave Revenue Share Payment, AD Compensation, Atlas Core Development Payments, Spark Proxy Spell - April 17, 2025
summary: Stability Parameter Bounded External Access Module (SP-BEAM) initialization, Sky Token Rewards (SKY to USDS) rebalance, setting Aave Lido Market (Prime Market) Direct Deposit Module Debt Ceiling to 0, Smart Burn Engine parameter update, Launch Project funding, Spark-Aave Revenue Share payment, Aligned Delegate compensation for March 2025, Atlas Core Development payments, Spark Proxy spell.
date: 2025-04-17T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] SP-BEAM Initialization, Sky Token Rewards Rebalance, Set Aave Lido Market (Prime Market) DDM DC to 0, SBE Changes, Launch Project Funding, Spark-Aave Revenue Share Payment, AD Compensation, Atlas Core Development Payments, Spark Proxy Spell - April 17, 2025

The Governance Facilitators, Sidestream, and Dewiz have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- The Stability Parameter Bounded External Access Module (SP-BEAM) will be initialized as described below.
- The Sky Token Rewards (SKY to USDS) Annual Percentage Yield (APY) will be adjusted.
- The Aave Lido Market (Prime Market) Direct Deposit Module (DDM) Debt Ceiling (DC) will be set to 0.
- The Smart Burn Engine (SBE) `hop` parameter will be updated as described below.
- **5 million USDS** and **24 million SKY** will be distributed to the Launch Project.
- A total of **256,888 DAI** will be distributed as SparkLend-Aave Revenue Share payment for Q1 2025.
- A total of **24,000 USDS** will be distributed as Aligned Delegate compensation for March 2025.
- A total of **97,584 USDS** and **618,000 SKY** will be distributed as Atlas Core Development payments.
- A Spark proxy spell will be executed.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**18 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### SP-BEAM Initialization

- **Authorization**: [Governance Poll 1233](https://vote.makerdao.com/polling/QmWc4toZ), [Ecosystem Authorization](http://forum.sky.money/t/technical-scope-sp-beam-initialization-spell/26266/2)
- **Proposal**: Forum Posts [1](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-april-14-2025/26262/), [2](https://forum.sky.money/t/technical-scope-sp-beam-initialization-spell/26266)

If this executive proposal passes, then the Stability Parameter Bounded External Access Module (SP-BEAM) will be initialized as described below:

- Initialize SP-BEAM by calling [`SPBEAMInit.init`](https://github.com/makerdao/sp-beam/blob/4e7a435682bf0a4fb9f19070f5ff34ffbdee6d9d/src/deployment/SPBEAMInit.sol#L65) with the following parameters:
  - `inst.spbeam`: 0x36B072ed8AFE665E3Aa6DaBa79Decbec63752b22
  - `inst.mom`: 0xf0C6e6Ec8B367cC483A411e595D3Ba0a816d37D0
  - `cfg.tau`: 57,600 seconds
  - `cfg.bud`: 0xe1c6f81D0c3CD570A77813b81AA064c5fff80309
  - For the following `cfg.ilks.id`:
    - ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C, SSR:
      - `cfg.ilks.min`: 200 basis points
      - `cfg.ilks.max`: 3,000 basis points
      - `cfg.ilks.step`: 400 basis points
  - For the following `cfg.ilks.id`:
    - ALLOCATOR-SPARK-A, ALLOCATOR-NOVA-A, ALLOCATOR-BLOOM-A, DSR:
      - `cfg.ilks.min`: 0 basis points
      - `cfg.ilks.max`: 3,000 basis points
      - `cfg.ilks.step`: 400 basis points
- Add SP-BEAM to the [Chainlog](https://chainlog.sky.money) as `MCD_SPBEAM` at [0x36B072ed8AFE665E3Aa6DaBa79Decbec63752b22](https://etherscan.io/address/0x36B072ed8AFE665E3Aa6DaBa79Decbec63752b22).
- Add SPBEAMMom to the [Chainlog](https://chainlog.sky.money) as `SPBEAM_MOM` at [0xf0C6e6Ec8B367cC483A411e595D3Ba0a816d37D0](https://etherscan.io/address/0xf0C6e6Ec8B367cC483A411e595D3Ba0a816d37D0).

### Sky Token Rewards Rebalance

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/sky-token-rewards-update-april-17-spell/26254/5)
- **Proposal**: [Forum Post](https://forum.sky.money/t/sky-token-rewards-update-april-17-spell/26254)

If this executive proposal passes, then the [Sky Token Rewards (SKY to USDS)](https://info.sky.money/rewards/0x0650caf159c5a49f711e8169d4336ecb9b950275) APY will be adjusted to match the SSR by changing the rewards distribution rate through the following actions:

- Yank `MCD_VEST_SKY` vest with ID 1.
- Claim the remaining tokens from the old DssVest by calling `VestedRewardsDistribution.distribute()`.
- Create a new `MCD_VEST_SKY` stream with the following parameters:
  - Rewards Distribution Rate: 160 million
  - Rewards Distribution Cap: 176 million
  - Start Date relative to the spell cast time:
    - `vestBgn`: `block.timestamp`
  - End Date relative to the spell cast time:
    - `vestTau`: 182 days
    - `vestFin`: `block.timestamp` + 182 days
- File the new stream ID on `REWARDS_DIST_USDS_SKY`.

### Set Aave Lido Market (Prime Market) Direct Deposit Module Debt Ceiling to 0

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/spark-aave-lido-market-usds-allocation/25311/25)
- **Proposal**: [Forum post](https://forum.sky.money/t/spark-aave-lido-market-usds-allocation/25311/24)

If this executive proposal passes, then the Aave Lido Market (Prime Market) Direct [Deposit Module (DDM)](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)/071d42e3-8a21-4401-852e-0b52c49768bb%7C57eaf45219bea3b430c2) [Debt Ceiling (DC)](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)/6f1a913d-9436-4b70-816b-e317672737d6%7C57eaf45219bea3b430c268bb) will be set to 0 by executing the following actions:

- Remove `DIRECT-SPK-AAVE-LIDO-USDS` from autoline.
- Set `DIRECT-SPK-AAVE-LIDO-USDS` DC to zero.

### Smart Burn Engine Changes

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/smart-burn-engine-parameter-update-april-17-spell/26253/2)
- **Proposal**: [Forum post](https://forum.sky.money/t/smart-burn-engine-parameter-update-april-17-spell/26253)

If this executive proposal passes, then the `Splitter.hop` SBE [parameter](https://sky-atlas.powerhouse.io/A.3.6.2_Surplus_Buffer_Splitter_Parameters/122f2ff0-8d73-80f8-9a2a-d221794f73f5|57ea2c54) will be updated as follows:

- Increase `Splitter.hop` by 493 seconds from 1,235 seconds to **1,728 seconds**.

### Launch Project Funding

- **Authorization**: [Atlas A.5.6](https://sky-atlas.powerhouse.io/A.5.6_Launch_Project/1f433d9d-7cdb-406f-b7e8-f9bc4855eb77%7C8d5a)
- **Proposal**: [Forum post](https://forum.sky.money/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/30)

If this executive proposal passes, then the following [Launch Project](https://sky-atlas.powerhouse.io/A.5.5_Launch_Project/1f433d9d-7cdb-406f-b7e8-f9bc4855eb77|8d5a) funding distributions will be made:

- Transfer **5 million USDS** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- Transfer **24 million SKY** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### Spark-Aave Revenue Share Payment

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/spark-aave-revenue-share-calculation-payment-7-q1-2025/26219/2)
- **Proposal**: [Forum post](https://forum.sky.money/t/spark-aave-revenue-share-calculation-payment-7-q1-2025/26219)

If this executive proposal passes, then a payment of **256,888 DAI** will be made to a smart contract controlled by Aave Governance at [0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) as part of the SparkLend-Aave Revenue Share.

### Aligned Delegate Compensation for March 2025

- **Authorization**: [Atlas A.1.5.8](https://sky-atlas.powerhouse.io/A.1.5.8_Budget_For_Prime_Delegate_Slots/e3e420fc-9b1f-4fdc-9983-fcebc45dd3aa%7C0db3af4ece0c)
- **Proposal**: [Forum post](https://forum.sky.money/t/march-2025-aligned-delegate-compensation/26255)

If this executive proposal passes, then a total of **24,000 USDS** will be distributed to seven Aligned Delegates and their teams as compensation for March 2025.

| Delegate    | Amount (USDS) | Address                                                                                                               |
|-------------|--------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE        | 4,000         | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Bonapublica | 4,000         | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Cloaky      | 4,000         | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |
| JuliaChang  | 4,000         | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| WBC         | 4,000         | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) |
| PBG         | 3,355         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |
| Byteron     | 645           | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |

### Atlas Core Development Payments

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/atlas-core-development-payment-requests-april-2025/26221/6), [Atlas Axis Approval](https://forum.sky.money/t/atlas-core-development-payment-requests-april-2025/26221/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-core-development-payment-requests-march-2025/26077)

If this executive proposal passes, then a total of **97,584 USDS** and **618,000 SKY** will be distributed for Atlas Core Development funding.

#### USDS Payments

| Recipient | Amount (USDS) | Address                                                                                                               |
|-----------|--------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE      | 50,167        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Ennoia    | 20,000        | [0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b](https://etherscan.io/address/0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b) |
| Cloaky    | 16,417        | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |
| Kohla     | 11,000        | [0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a](https://etherscan.io/address/0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a) |

#### SKY Payments

| Recipient | Amount (SKY) | Address                                                                                                               |
|-----------|-------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE      | 330,000      | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky    | 288,000      | [0x9244F47D70587Fa2329B89B6f503022b63Ad54A5](https://etherscan.io/address/0x9244F47D70587Fa2329B89B6f503022b63Ad54A5) |

### Spark Proxy Spell

If this executive proposal passes, then a Spark Proxy Spell will be executed at [0xA8FF99Ac98Fc0C3322F639a9591257518514455c](https://etherscan.io/address/0xA8FF99Ac98Fc0C3322F639a9591257518514455c) with the following contents.

#### [Arbitrum] Spark Liquidity Layer - Onboard Fluid sUSDS

- **Authorization**: [Governance Poll 1202](https://vote.makerdao.com/polling/QmZbk3gD)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Onboard Fluid sUSDS onto the Spark Liquidity Layer on Arbitrum with the following [Rate Limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits):

- Deposits
  - `Max amount`: **10 million USDS worth of sUSDS**
  - `Slope`: **5 million USDS worth of sUSDS**
- Withdrawals
  - `Max amount`: **unlimited**

#### [Mainnet] Spark Liquidity Layer - Onboard SparkLend DAI

- **Authorization**: [Governance Poll 1224](https://vote.makerdao.com/polling/QmbNssss)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Onboard Mainnet SparkLend DAI to the Spark Liquidity Layer with the following [Rate Limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits):

- Deposits
  - `Max amount`: **100 million DAI**
  - `Slope`: **50 million DAI per day**
- Withdrawals
  - `Max amount`: **unlimited**


#### [Mainnet] Spark Liquidity Layer - Onboard Curve sUSDS/USDT Pool

- **Authorization**: [Governance Poll 1223](https://vote.makerdao.com/polling/QmWgkXDA)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Onboard the Curve sUSDS/USDT pool to the Spark Liquidity Layer on Mainnet with the following parameters:

- Swap
  - `Max amount`: **5 million**
  - `Slope`: **20 million per day**
  - `Max slippage`: **0.15%**
- Deposits
  - `Max amount`: **5 million**
  - `Slope`: **20 million per day**
  - `Max slippage`: **0.15%**
- Withdrawals
  - `Max amount`: **25 million**
  - `Slope`: **100 million per day**
  - `Max slippage`: **0.15%**

#### [Mainnet] Spark Liquidity Layer - Onboard Curve USDC/USDT Pool

- **Authorization**: [Governance Poll 1222](https://vote.makerdao.com/polling/QmWju9Uu)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Onboard the Curve USDC/USDT pool to the Spark Liquidity Layer on Mainnet with the following [Rate Limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits):

- Swap
  - `Max amount`: **5 million**
  - `Slope`: **20 million per day**
  - `Max slippage`: **0.15%**
- Deposit
  - `Max amount`: **0**
- Withdrawals
  - `Max amount`: **0**

#### [Mainnet] SparkLend - Adjust cbBTC and tBTC Interest Rate Models

- **Authorization**: [Governance Poll 1227](https://vote.makerdao.com/polling/Qmc3WXej)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Adjust the cbBTC and tBTC [Interest Rate Models](https://github.com/makerdao/next-gen-atlas/blob/7cf37209d2c32b88fc9dbb2017dca30b02b66a44/Sky%20Atlas/Sky%20Atlas.html#L8525) as follows:

- [Optimal utilization ratio](https://github.com/makerdao/next-gen-atlas/blob/7cf37209d2c32b88fc9dbb2017dca30b02b66a44/Sky%20Atlas/Sky%20Atlas.html#L8620): Increase by 20 percentage points from 60% to **80%**.
- [Base rate](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.13_Base_Rate_Definition/1c1f2ff0-8d73-81c1-9b9b-ef4b84c1450f|7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **0%**.
- [Slope 1](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.15_Slope_1_Definition/1c1f2ff0-8d73-81be-9f17-d7d4bfc6cb59|7896ed3326389fe3553030cd0a82f68efd49): Decrease by 3 percentage points from 4% to **1%**.
- [Slope 2](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.17_Slope_2_Definition/1c1f2ff0-8d73-8199-aa99-dde95c3f7130|7896ed3326389fe3553030cd0a82f68efd49): Keep unchanged at **300%**.

#### [Mainnet] SparkLend - Reduce WBTC LT

- **Authorization**: [Governance Poll 1229](https://vote.makerdao.com/polling/QmU3y9jf)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Reduce the WBTC [Liquidation Threshold](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.5_Liquidation_Threshold_Definition/1c1f2ff0-8d73-81ea-bd7e-feb73a44923a%7C7896ed3326389fe3553030cd0a82f68efd49) as follows:

- Reduce WBTC Liquidation Threshold by 5 percentage points from 50% to **45%**.

#### [Mainnet] SparkLend - Add sUSDS to USD Emode

- **Authorization**: [Governance Poll 1226](https://vote.makerdao.com/polling/QmQk4XKy)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Add sUSDS to the USD-correlated [E-mode](https://sky-atlas.powerhouse.io/A.AG1.3.2.2.1.1.6_High_Efficiency_Mode_Category_Definition/1c1f2ff0-8d73-815c-8a8f-f3a095137e06|7896ed3326389fe3553030cd0a82f68efd49).

#### [Mainnet] Morpho DAI Vault - Onboard July sUSDe PT

- **Authorization**: [Governance Poll 1228](https://vote.makerdao.com/polling/QmQgnWbX)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Onboard PT-sUSDe-31July2025 to the Morpho DAI vault with the following parameters:

- Pool LLTV: **91.5%**
- Pendle oracle discount rate: **20% APY**
- Supply cap: **400 million DAI**

#### [Mainnet, Base, Arbitrum] Spark Liquidity Layer - Upgrade Controller to v1.4.0 on All Chains

- **Authorization**: [Governance Poll 1225](https://vote.makerdao.com/polling/QmRkQDMT)
- **Proposal**: [Forum Post](https://forum.sky.money/t/april-17-2025-proposed-changes-to-spark-for-upcoming-spell/26234)

Upgrade the [Spark ALM Controller](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller) to [v1.4.0](https://github.com/sparkdotfi/spark-alm-controller/commit/b618c3fb1508ce29ac9e92e3bf55229cd1a66d8a) on all chains.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
