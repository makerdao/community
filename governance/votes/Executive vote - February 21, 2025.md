---
title: Template - [Executive Vote] Rate Adjustments, Arbitrum Token Bridge Initialization, Smart Burn Engine Liquidity Unwind, Smart Burn Engine Parameter Changes, ALLOCATOR-SPARK-A DC-IAM Parameter Changes, Standby Spell Changes in the Chainlog, Aligned Delegate Compensation, Atlas Core Development Payments, Integration Boost Funding, Spark Proxy Spell - February 21, 2025
summary: Adjust Stability Fees, DSR and SSR, initialize Arbitrum Token Bridge, unwind Smart Burn Engine liquidity, change Smart Burn Engine parameters, adjust ALLOCATOR-SPARK-A DC-IAM parameters, modify Standby Spells in the Chainlog, pay Aligned Delegate compensation for January 2025, execute Atlas Core Development payments, distribute Integration Boost funding, trigger a Spark Proxy Spell.
date: 2025-02-21T00:00:00.000Z
address: "0xDb220538E62e758e4802D94b5344fFab242e004f"

---
# [Executive Proposal] Rate Adjustments, Arbitrum Token Bridge Initialization, Smart Burn Engine Liquidity Unwind, Smart Burn Engine Parameter Changes, ALLOCATOR-SPARK-A DC-IAM Parameter Changes, Standby Spell Changes in the Chainlog, Aligned Delegate Compensation, Atlas Core Development Payments, Integration Boost Funding, Spark Proxy Spell - February 21, 2025

The Governance Facilitators, Sidestream, and Dewiz have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- [Stability Fees](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) for multiple vaults and the [Savings Rates (DSR and SSR)](https://sky-atlas.powerhouse.io/A.4.3.1_Savings_Rates/5586fe33-b0af-41f0-9629-b1716c7c0967%7Cb3417d54) will be adjusted.
- The Arbitrum Token Bridge will be initialized as described below
- Part of the Smart Burn Engine’s LP-held tokens will be unwound to the Pause Proxy as described below.
- Smart Burn Engine parameters will be changed as described below.
- The ALLOCATOR-SPARK-A DC-IAM Parameter will be adjusted as described below.
- Two Standby Spell keys will be updated and two Standyby Spells will be added in the [Chainlog](https://chainlog.sky.money).
- A total of **20,387 USDS** will be distributed to six Aligned Delegates as compensation for January 2025.
- A total of **102,436 USDS** and **988,000 SKY** will be transferred to two Atlas Core Development contributors.
- A total of **3 million USDS** for Integration Boost funding will be transferred to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).
- A Spark proxy spell will be executed.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**30 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### Stability Fee Adjustments

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/feb-20-2025-stability-scope-parameter-changes-22/26003/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/feb-20-2025-stability-scope-parameter-changes-22/26003)

If this executive proposal passes, then the [Stability Fees (SF)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) for the vault types listed below will be adjusted as follows:

- Reduce ETH-A SF by 2.00 percentage points from 9.75% to **7.75%**.
- Reduce ETH-B SF by 2.00 percentage points from 10.25% to **8.25%**.
- Reduce ETH-C SF by 2.00 percentage points from 9.50% to **7.50%**.
- Reduce WSTETH-A SF by 2.00 percentage points from 10.75% to **8.75%**.
- Reduce WSTETH-B SF by 2.00 percentage points from 10.50% to **8.50%**.
- Reduce WBTC-A SF by 1.50 percentage points from 14.25% to **12.75%**.
- Reduce WBTC-B SF by 1.50 percentage points from 14.75% to **13.25%**.
- Reduce WBTC-C SF by 1.50 percentage points from 14.00% to **12.50%**.
- Increase ALLOCATOR-SPARK-A SF by 1.89 percentage points from 1.33% to **3.22%**.

### Savings Rate Reductions

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/feb-20-2025-stability-scope-parameter-changes-22/26003/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/feb-20-2025-stability-scope-parameter-changes-22/26003)

If this executive proposal passes, then the [DAI Savings Rate (DSR)](https://sky-atlas.powerhouse.io/A.3.2.2.2_Dai_Savings_Rate/8e289e71-7ec5-4ce5-8d4d-41aab7a50f53|57eab733e951) and the [SKY Savings Rate (SSR)](https://sky-atlas.powerhouse.io/A.3.2.2.3_Sky_Savings_Rate/73d91126-21c9-4e8a-bedf-8a51a432bb59%7C57eab733e951) will be decreased as follows:

- Reduce DSR by 2.50 percentage points from 7.25% to **4.75%**.
- Reduce SSR by 2.25 percentage points from 8.75% to **6.50%**.

### Arbitrum Token Bridge Initialization

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/technical-scope-of-the-arbitrum-token-gateway-launch/25972/3), [Governance Poll 1194](https://vote.makerdao.com/polling/QmcicBXG)
- **Proposal**: [Forum Post](https://forum.sky.money/t/technical-scope-of-the-arbitrum-token-gateway-launch/25972)

If this executive proposal passes, then the Arbitrum Token Bridge will be initialized by calling TokenGatewayInit.initGateways using the following parameters:

- `l1GatewayInstance.gateway`: (ERC1967Proxy: 0x84b9700E28B23F873b82c1BEb23d86C091b6079E)
- `l1GatewayInstance.gatewayImp`: (L1TokenGateway: 0x12eDe82637d5507026D4CDb3515B4b022Ed157b1)
- `l2GatewayInstance.gateway`: (ERC1967Proxy: 0x13F7F24CA959359a4D710D32c715D4bce273C793)
- `l2GatewayInstance.gatewayImp`: (L2TokenGateway: 0xD404eD36D6976BdCad8ABbcCC9F09ef07e33A9A8)
- `l2GatewayInstance.spell`: (L2TokenGatewaySpell: 0x3D4357c3944F7A5b6a0B5b67B36588BA45D3f49D)
- `cfg.l1Router`: (L1GatewayRouter (ERC1967Proxy): 0x72Ce9c846789fdB6fC1f34aC4AD25Dd9ef7031ef)
- `cfg.inbox`: (Inbox(ERC1967Proxy): 0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f)
- `cfg.l1Tokens`: (array [`USDS`, `SUSDS`])
- `cfg.l2Tokens`: (array [Usds(ERC1967Proxy): 0x6491c05A82219b8D1479057361ff1654749b876b, SUsds(ERC1967Proxy): 0xdDb46999F8891663a8F2828d25298f70416d7610])
- `cfg.maxWithdraws`: (array [type(uint256).max, type(uint256).max])
- `cfg.xchainMsg.maxGas`: 350000
- `cfg.xchainMsg.gasPriceBid`: 100000000
- `cfg.xchainMsg.maxSubmissionCost`: 1316000000000000

### Smart Burn Engine Liquidity Unwind

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/smart-burn-engine-liquidity-unwind/26027/3)
- **Proposal**: [Forum Post](https://forum.sky.money/t/smart-burn-engine-liquidity-unwind/26027/1)

If this executive proposal passes, then part of the Smart Burn Engine’s LP-held tokens will be unwound to the Pause Proxy by executing the following actions:

- The `withdraw` function in the [UniV2PoolWithdraw](https://github.com/makerdao/univ2-pool-migrator/blob/9099c1ce2a80aa58146b2bdc603cc21edb2d6922/deploy/UniV2PoolWithdraw.sol#L52) script will be invoked.
- 15 million USDS worth of protocol-owned LP tokens will remain in the SBE (7.5 million USDS & the equivalent amount in SKY).
- The recovered SKY tokens will be sent to (and remain in) the Pause Proxy.
- The USDS portion will subsequently be transferred from the Pause Proxy to the Surplus Buffer.

### Smart Burn Engine Parameter Changes

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/smart-burn-engine-parameter-update-feb-21-spell/26033/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/smart-burn-engine-parameter-update-feb-21-spell/26033)

If this executive proposal passes, then [the Smart Burn Engine parameters](https://sky-atlas.powerhouse.io/A.3.5.2_Surplus_Buffer_Splitter_Parameters/122f2ff0-8d73-80f8-9a2a-d221794f73f5%7C57ea2c54) below will be changed as follows:

- [MCD Vow](https://etherscan.io/address/0xa950524441892a31ebddf91d3ceefa04bf454466):
  - `hump` (trigger for surplus auctions once exceeded): **70 million DAI**
  - `bump` (the lot size allocated per operation): **10,000 DAI**
- [Splitter](https://etherscan.io/address/0xbf7111f13386d23cb2fba5a538107a73f6872bcf#readContract):
  - `burn`: **100%** (All surplus will be directed to burning)
  - `hop` (minimum interval between consecutive `kick` operations): **876 seconds**

### ALLOCATOR-SPARK-A DC-IAM Parameter Changes

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/feb-20-2025-proposed-changes-to-spark-for-upcoming-spell/25951/6), [Governance Poll 1193](https://vote.makerdao.com/polling/QmXpKEFg)
- **Proposal**: [Forum Post](https://forum.sky.money/t/feb-20-2025-proposed-changes-to-spark-for-upcoming-spell/25951)

If this executive proposal passes, then the ALLOCATOR-SPARK-A DC-IAM parameters below will be changed as follows:

- Increase DC-IAM [Target Available Debt (`gap`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.4_Target_Available_Debt_Definition-b876ecf4-a901-4721-9c4b-9f2fc21f954c|57ea599773d45150b2632df9) by 400 million USDS from 100 million USDS to **500 million USDS**.
- Increase DC-IAM [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.3_Maximum_Debt_Ceiling_Definition-e4a0d8f1-4a01-46a7-b693-a94e7f4afc1a|57ea599773d45150b2632df9) by 4 billion USDS from 1 billion USDS to **5 billion USDS**.
- The [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.5_Ceiling_Increase_Cooldown_Definition-3d5980c5-7036-4b68-93e0-a48551fe09ed|57ea599773d45150b2632df9) will remain unchanged at **24 hours**.
  
### Standby Spell Chainlog Changes

- **Authorization**: [Governance Poll 1196](https://vote.makerdao.com/polling/QmQW5mb1)
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-for-week-of-february-17-2025/25979)

If this executive proposal passes, then the [Chainlog](https://chainlog.sky.money) keys below will be updated as follows:

- Update the value of Standby Spell key `EMSP_CLIP_BREAKER_FAB` to [0x867852d30bb3cb1411fb4e404fae28ef742b1023](https://etherscan.io/address/0x867852d30bb3cb1411fb4e404fae28ef742b1023)
- Update the value of Standby Spell key `EMSP_LINE_WIPE_FAB` to [0x8646f8778b58a0df118facedf522181ba7277529](https://etherscan.io/address/0x8646f8778b58a0df118facedf522181ba7277529)
- Add Standby Spell:
  - key: `EMSP_LITE_PSM_HALT_FAB`
  - value: [0xB261b73698F6dBC03cB1E998A3176bdD81C3514A](https://etherscan.io/address/0xB261b73698F6dBC03cB1E998A3176bdD81C3514A)
- Add Standby Spell:
  - key: `EMSP_SPLITTER_STOP`
  - value: [0x12531afC02aC18a9597Cfe8a889b7B948243a60b](https://etherscan.io/address/0x12531afC02aC18a9597Cfe8a889b7B948243a60b)

### Aligned Delegate Compensation for January 2025

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

- **Authorization**: [Ecosystem Authorization](https://forum.sky.money/t/atlas-core-development-payment-requests-february-2025/25921/6), [Atlas Axis Authorization](https://forum.sky.money/t/atlas-core-development-payment-requests-february-2025/25921/5)
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

### Integration Boost Funding

- **Authorization**: [Atlas A.5.2.1.2](https://sky-atlas.powerhouse.io/A.5.2.1.2_Integration_Boost/129f2ff0-8d73-8057-850b-d32304e9c91a%7C8d5a9e88cf49)
- **Proposal**: [Forum Post](https://forum.sky.money/t/utilization-of-the-integration-boost-budget-a-5-2-1-2/25536/6)

If this executive proposal passes, then **3 million USDS** will be transferred to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7) to continue funding the Integration Boost initiative.

### Spark Proxy Spell

- **Authorization**: [Ecosystem Authorization 1](https://forum.sky.money/t/feb-20-2025-proposed-changes-to-spark-for-upcoming-spell/25951/6), [Ecosystem Authorization 2](https://forum.sky.money/t/feb-20-2025-proposed-changes-to-spark-for-upcoming-spell-2/25961/5), Governance Polls [1190](https://vote.makerdao.com/polling/QmUEJbje), [1191](https://vote.makerdao.com/polling/Qmdr4yqX), [1192](https://vote.makerdao.com/polling/QmWQcu5A), [1194](https://vote.makerdao.com/polling/QmcicBXG), [1195](https://vote.makerdao.com/polling/QmWbSTxi)
- **Proposal**: [Forum Post 1](https://forum.sky.money/t/feb-20-2025-proposed-changes-to-spark-for-upcoming-spell/25951), [Forum Post 2](https://forum.sky.money/t/feb-20-2025-proposed-changes-to-spark-for-upcoming-spell-2/25961)

If this executive proposal passes, then a Spark Proxy Spell will be executed at [0x9EAa8d72BD731BE8eD71D768a912F6832492071e](https://etherscan.io/address/0x9EAa8d72BD731BE8eD71D768a912F6832492071e) with the following contents.

#### [Mainnet and Base] Mint $100M USDS Worth of sUSDS into Base

Minting an additional **100 million USDS worth of sUSDS** to Base.

#### [Mainnet] Increase weETH Supply Cap Parameters

- Increase the weETH [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/A.3.8.1.6.4.1.1_Cap_Automator_Target_Available_Exposure_Definition/78ec4709-3773-4f20-b3ef-d58d29f302c2%7C57eaf45219be6088aa1c4806) by 5,000 weETH from 5,000 weETH to **10,000 weETH**.
- Increase the weETH [Supply Cap Maximum Absolute Exposure (`max`)](https://sky-atlas.powerhouse.io/A.3.8.1.6.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition/a01eec5b-64d9-42fa-ae44-b27d22e14a42%7C57eaf45219be6088aa1c4806) by 300,000 weETH from 200,000 weETH to **500,000 weETH**.

#### [Base] Increase PSM3 Rate Limits

Changing the PSM3 [rate limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits) on Base as follows:

- Increase the USDC deposit rate limits from 4 million max, 2 million/day slope to **50 million max, 50 million/day slope**.
- Increase the USDC withdrawal rate limits from 7 million max, 2 million/day slope to **50 million max, 50 million/day slope**.
- Increase the USDS deposit rate limits from 5 million max, 2 million/day slope to **Unlimited**.
- Increase the sUSDS deposit rate limits from 8 million max, 2 million/day slope to **Unlimited**.

#### [Mainnet] Whitelist sUSDS for Deposit/Withdrawal

Whitelisting sUSDS Deposit/Withdraw as follows:

- sUSDS Deposit: **Unlimited**
- sUSDS Withdraw: **Unlimited**

#### Arbitrum Activation

Onboarding Arbitrum One to the Spark Liquidity Layer with the following addresses and parameters:

##### Addresses

- Spark Governance: [0x65d946e533748A998B1f0E430803e39A6388f7a1](https://arbiscan.io/address/0x65d946e533748A998B1f0E430803e39A6388f7a1).
- PSM3: [0x2B05F8e1cACC6974fD79A673a341Fe1f58d27266](https://arbiscan.io/address/0x2B05F8e1cACC6974fD79A673a341Fe1f58d27266).
- SSR Oracle: [0xEE2816c1E1eed14d444552654Ed3027abC033A36](https://arbiscan.io/address/0xEE2816c1E1eed14d444552654Ed3027abC033A36).
- ALM Controller: [0x77e11453a99a7770b04f7921FfccD3eE9761ba6c](https://arbiscan.io/address/0x77e11453a99a7770b04f7921FfccD3eE9761ba6c).
- ALM Proxy: [0x92afd6F2385a90e44da3a8B60fe36f6cBe1D8709](https://arbiscan.io/address/0x92afd6F2385a90e44da3a8B60fe36f6cBe1D8709).
- ALM Rate Limits: [0x19D08879851FB54C2dCc4bb32b5a1EA5E9Ad6838](https://arbiscan.io/address/0x19D08879851FB54C2dCc4bb32b5a1EA5E9Ad6838).
- Freezer: [0x90D8c80C028B4C09C0d8dcAab9bbB057F0513431](https://arbiscan.io/address/0x90D8c80C028B4C09C0d8dcAab9bbB057F0513431).
- Relayer: [0x8a25A24EDE9482C4Fc0738F99611BE58F1c839AB](https://arbiscan.io/address/0x8a25A24EDE9482C4Fc0738F99611BE58F1c839AB).

##### Initial [Rate Limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits)

- CCTP Global: **Unlimited**
- CCTP from Arbitrum to Ethereum: **50 million max, 25 million / day slope**
- CCTP from Ethereum to Arbitrum: **50 million max, 25 million / day slope (Rate Limit on Ethereum)**
- USDC Deposit: **50 million max, 50 million / day slope**
- USDC Withdraw: **50 million max, 50 million / day slope**
- USDS Deposit: **Unlimited**
- USDS Withdraw: **Unlimited**
- sUSDS Deposit: **Unlimited**
- sUSDS Withdraw: **Unlimited**

##### Initial Mint

Minting an initial **100 million USDS** and **100 million USDS worth of sUSDS** to Arbitrum One.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
