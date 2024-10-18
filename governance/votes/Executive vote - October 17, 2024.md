---
title: Template - [Executive Vote] Seal Engine Initialization, RWA Vault Debt Ceiling Housekeeping, Pinwheel DAO Resolution, Aave-SparkLend Revenue Share Payment for Q3 2024, Spark Proxy Spell - October 17, 2024
summary: Initialize the Seal Engine, fund the Multisig responsible for distributing Early Bird Rewards, reduce debt ceilings of deprecated RWA vaults, approve DAO Resolution for Pinwheel, transfer payment for the Aave-SparkLend Revenue Share for Q3 2024, execute a Spark Proxy Spell.
date: 2024-10-17T00:00:00.000Z
address: "0xACA9a90C92647e3d3f04095118192DC80C470955"

---
# [Executive Proposal] Seal Engine Initialization, RWA Vault Debt Ceiling Housekeeping, Pinwheel DAO Resolution, Aave Revenue Share Payment, Spark Proxy Spell - October 17, 2024

The Governance Facilitators, Sidestream, and Dewiz have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:
- The Seal Engine will be initialized. This requires a number of sub-actions:
  - Activate a new MKROSM.
  - Activate a new VoteDelegateFactory contract.
  - Initialize the Seal Engine farm in the Flapper.
  - Update Smart Burn Engine parameters.
  - Initialize the Seal Engine and borrowing facility.
- The Multisig responsible for distributing Early Bird Rewards will be funded with newly minted SKY tokens.
- Debt Ceilings for the now defunct RWA vaults operated by Monetalis will be set to 0.
- A Pinwheel DAO Resolution with the hash [QmYJUvw5xbAJmJknG2xUKDLe424JSTWQQhbJCnucRRjUv7](https://ipfs.io/ipfs/QmYJUvw5xbAJmJknG2xUKDLe424JSTWQQhbJCnucRRjUv7) will be approved.
- The Aave-SparkLend Revenue Share payment for Q3 2024 will be distributed.
- A Spark proxy spell at [0xcc3B9e79261A7064A0f734Cc749A8e3762e0a187](https://etherscan.io/address/0xcc3B9e79261A7064A0f734Cc749A8e3762e0a187) will be executed.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### Seal Engine Initialization

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmUm8Krq)
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-weekly-cycle-edit-proposal-week-of-october-14-2024-01/25324)

If this executive proposal passes, then the Seal Engine will be initialized through the following sub-actions.

#### MKROSM Activation

- The new MKROSM at [0x4F94e33D0D74CfF5Ca0D3a66F1A650628551C56b](https://etherscan.io/address/0x4F94e33D0D74CfF5Ca0D3a66F1A650628551C56b) will be whitelisted to read the MKR oracle price from the current PIP_MKR at [0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df](https://etherscan.io/address/0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df).
- The new MKROSM at [0x4F94e33D0D74CfF5Ca0D3a66F1A650628551C56b](https://etherscan.io/address/0x4F94e33D0D74CfF5Ca0D3a66F1A650628551C56b) will replace the current PIP_MKR in the [Chainlog](https://chainlog.sky.money/).

#### New VoteDelegateFactory Contract Activation

- The current VOTE_DELEGATE_PROXY_FACTORY in the [Chainlog](https://chainlog.sky.money/) at [0xd897f108670903d1d6070fcf818f9db3615af272](https://etherscan.io/address/0xd897f108670903d1d6070fcf818f9db3615af272) will be renamed to VOTE_DELEGATE_FACTORY_LEGACY.
  - This will require the removal of VOTE_DELEGATE_PROXY_FACTORY from the Chainlog before adding a new key-value pair under VOTE_DELEGATE_FACTORY_LEGACY.
- The new VoteDelegateFactory at [0xC3D809E87A2C9da4F6d98fECea9135d834d6F5A0](https://etherscan.io/address/0xC3D809E87A2C9da4F6d98fECea9135d834d6F5A0) will be added to the [Chainlog](https://chainlog.sky.money) as VOTE_DELEGATE_FACTORY.

#### Smart Burn Engine Parameter Updates

- Reduce the Splitter Burn Rate (`burn`) by 30 percentage points from 100% to **70%**.
- Increase the Splitter [`hop`](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.1_Hop_Parameter-f9c3ba0f-3f7a-4222-9df8-efb0bc69433e|57ea2c549207d9fe7d45) parameter by 4,014 seconds from 11,635 seconds to **15,649 seconds**.
- Increase the [Surplus Buffer Upper Limit (`vow.hump`)](https://sky-atlas.powerhouse.io/#A.3.5.1.1.1_Upper_Limit-b3ca7a57-11d7-4c18-8092-6357db4492c9|57ea2c549207d9fe) by 5 million DAI from 55 million DAI to **60 million DAI**.

#### Initialize the Seal Engine Farm in the Flapper

The Seal Engine Farm will be activated by calling [FlapperInit.setFarm](https://github.com/makerdao/dss-flappers/blob/95431f3d4da66babf81c6e1138bd05f5ddc5e516/deploy/FlapperInit.sol#L153-L175) with the following parameters:

- farm_: [0x92282235a39bE957fF1f37619fD22A9aE5507CB1](https://etherscan.io/address/0x92282235a39bE957fF1f37619fD22A9aE5507CB1).
- splitter: dss.chainlog.getAddress("MCD_SPLIT").
- usdsJoin: dss.chainlog.getAddress("USDS_JOIN").
- hop: **15,649**.
- prevChainlogKey: bytes32(0).
- chainlogKey: REWARDS_LSMKR_USDS

This will have the following outcomes:

- Set the new farm as `farm` in the Splitter.
- Set MCD_SPLIT as `rewardsDistribution` in the farm contract.
- Set 15,649 seconds as the `rewardsDuration` in the farm contract.
- Add the new farm to the [Chainlog](https://chainlog.sky.money) as REWARDS_LSMKR_USDS.

#### Seal Engine and Borrowing Facility Initialization

The Seal Engine will be initialized by calling [LockstakeInit.initLockstake](https://github.com/makerdao/lockstake/blob/7c71318623f5d6732457fd0c247a1f1760960011/deploy/LockstakeInit.sol#L137-L258) with the following parameters:

- lsmkr: [0xb4e0e45e142101dC3Ed768bac219fC35EDBED295](https://etherscan.io/address/0xb4e0e45e142101dC3Ed768bac219fC35EDBED295).
- engine: [0x2b16C07D5fD5cC701a0a871eae2aad6DA5fc8f12](https://etherscan.io/address/0x2b16C07D5fD5cC701a0a871eae2aad6DA5fc8f12).
- clipper: [0xA85621D35cAf9Cf5C146D2376Ce553D7B78A6239](https://etherscan.io/address/0xA85621D35cAf9Cf5C146D2376Ce553D7B78A6239).
- clipperCalc: [0xf13cF3b39823CcfaE6C2354dA56416C80768474e](https://etherscan.io/address/0xf13cF3b39823CcfaE6C2354dA56416C80768474e).
- ilk: LSE-MKR-A
- voteDelegateFactory: [0xC3D809E87A2C9da4F6d98fECea9135d834d6F5A0](https://etherscan.io/address/0xC3D809E87A2C9da4F6d98fECea9135d834d6F5A0).
- usdsJoin: dss.chainlog.getAddress("USDS_JOIN").
- usds: dss.chainlog.getAddress("USDS").
- mkr: dss.chainlog.getAddress("MCD_GOV").
- mkr_sky: dss.chainlog.getAddress("MKR_SKY")
- sky: dss.chainlog.getAddress("SKY")
- farms: [0x92282235a39bE957fF1f37619fD22A9aE5507CB1](https://etherscan.io/address/0x92282235a39bE957fF1f37619fD22A9aE5507CB1).
- fee: **5%**
- [maxLine](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)-6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb): **20 million DAI**
- [gap](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.2_Target_Available_Debt_(gap)-c1e17312-3744-4360-81f4-03564f0dd09d|57eaf45219bea3b430c268bb): **5 million DAI**
- [ttl](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.3_Ceiling_Increase_Cooldown_(ttl)-58f5315f-938f-464c-b2d2-f611145d469a|57eaf45219bea3b430c268bb): **16 hours**
- [dust](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.6_Debt_Floor_(dust)-cea03e47-24a6-4efc-b482-56c183e5759a|57eaf45219bea3b430c2): **30,000 DAI**
- [duty](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2): **12%**
- [mat](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.1_Liquidation_Ratio-1184ab96-8cad-4755-9798-2c8782304407|57eaf45219bea3b430c2): **200%**
- [buf](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.2_Auction_Price_Multiplier_(buf)-3ce44221-fe39-4904-9f86-0a1996cea8c6|57eaf45219bea3b430c2a59a): **1.20**
- [tail](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.4_Max_Auction_Duration_(tail)-f8de0fc0-e452-4fc6-b67c-6da15df828f0|57eaf45219bea3b430c2a59a): **6,000 seconds**
- [cusp](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.3_Max_Auction_Drawdown_(cusp)-083ada9d-8d45-46ae-80d2-a3bb706e1e77|57eaf45219bea3b430c2a59a): **0.40**
- [chip](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.5_Proportional_Kick_Incentive_(chip)-afecb109-75a7-4289-997e-2a6f3d3bea1e|57eaf45219bea3b430c2a59a): **0.1%**
- [tip](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.6_Flat_Kick_Incentive_(tip)-1c13687a-2dad-4e86-9940-024dc8f17a24|57eaf45219bea3b430c2a59a): **300 DAI**.
- stopped: **0**.
- [chop](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.7_Liquidation_Penalty_(chop)-5295aa1f-3944-4fde-aaec-d999244b57e9|57eaf45219bea3b430c2a59a): **8%**
- [hole](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.8_Local_Liquidation_Limit_(hole)-fc22e62e-1f6b-4b10-b14a-ea7745185c67|57eaf45219bea3b430c2a59a): **3 million DAI**
- tau: **0**
- [cut](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.1.1_Auction_Price_Function_(cut)-b6e47d05-addf-4371-ad95-90582da7c0f1|57eaf45219bea3b430c2a59a6013): **0.99**
- [step](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.1.2_Auction_Price_Function_(step)-7d58c961-43ff-4157-80aa-8a92f577ec12|57eaf45219bea3b430c2a59a6013): **60 seconds**
- lineMom: **True**
- [tolerance](https://sky-atlas.powerhouse.io/#A.1.8.2.2.4.1_Liquidations_Circuit_Breaker_Exception_Price_Tolerance-bcccd6b0-ad61-47c6-94f1-93447ba39102|0db30758e055352ce6eb): **0.5**
- name: **LockstakeMkr**
- symbol: **lsMKR**

This will have the following outcomes:

- LSE-MKR-A will be added as a new vault type.
- LSE-MKR-A will be added to the LineMOM.
- LSE-MKR-A will be added to the Debt Ceiling Instant Access Module with the following parameters:
  - [`line`]((https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)-6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb)): **20 million DAI**.
  - [`gap`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.2_Target_Available_Debt_(gap)-c1e17312-3744-4360-81f4-03564f0dd09d|57eaf45219bea3b430c268bb): **5 million DAI**.
  - [`ttl`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.3_Ceiling_Increase_Cooldown_(ttl)-58f5315f-938f-464c-b2d2-f611145d469a|57eaf45219bea3b430c268bb): **16 hours**.
- LSE-MKR-A will be added to the ilk registry with the provided `name` and `symbol` and the new ilk class of **7**.
- MCD_SPOT, CLIPPER_MOM, MCD_END and LOCKSTAKE_CLIP will use the new MKROSM (PIP_MKR) to access the collateral price.
- OSM_MOM will be authorized to access the new MKR OSM.
- PIP_MKR will be added to the OSM_MOM.
- Lockstake Clipper will be configured with the following parameters:
  - [`buf`](ttps://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.2_Auction_Price_Multiplier_(buf)-3ce44221-fe39-4904-9f86-0a1996cea8c6|57eaf45219bea3b430c2a59a): **1.20**.
  - [`tail`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.4_Max_Auction_Duration_(tail)-f8de0fc0-e452-4fc6-b67c-6da15df828f0|57eaf45219bea3b430c2a59a): **6,000 seconds**.
  - [`cusp`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.3_Max_Auction_Drawdown_(cusp)-083ada9d-8d45-46ae-80d2-a3bb706e1e77|57eaf45219bea3b430c2a59a): **0.40**.
  - [`chip`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.5_Proportional_Kick_Incentive_(chip)-afecb109-75a7-4289-997e-2a6f3d3bea1e|57eaf45219bea3b430c2a59a): **0.1%**.
  - [`tip`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.6_Flat_Kick_Incentive_(tip)-1c13687a-2dad-4e86-9940-024dc8f17a24|57eaf45219bea3b430c2a59a): **300 DAI**.
  - `stopped`: **0**.
  - [`tolerance`](https://sky-atlas.powerhouse.io/#A.1.8.2.2.4.1_Liquidations_Circuit_Breaker_Exception_Price_Tolerance-bcccd6b0-ad61-47c6-94f1-93447ba39102|0db30758e055352ce6eb): **0.5**.
- StairstepExponentialDecrease calc contract will be configured with the following parameters:
  - [`cut`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.1.1_Auction_Price_Function_(cut)-b6e47d05-addf-4371-ad95-90582da7c0f1|57eaf45219bea3b430c2a59a6013): **0.99**.
  - [`step`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.1.2_Auction_Price_Function_(step)-7d58c961-43ff-4157-80aa-8a92f577ec12|57eaf45219bea3b430c2a59a6013): **60 seconds**.
- REWARDS_LSMKR_USDS will be added to the Seal Engine as the first farm.
- The LockstakeEngine contract will be authorized to access the `vat`.
- The LockstakeClipper contract will be authorized to access the `vat` and the LockstakeEngine.
- CLIPPER_MOM, MCD_DOG, and MCD_END will be authorized to access LockstakeClipper.
- New [Chainlog](https://chainlog.sky.money) keys LOCKSTAKE_MKR, LOCKSTAKE_ENGINE, LOCKSTAKE_CLIP, and LOCKSTAKE_CLIP_CALC will be added.

### Early Bird Rewards Multisig Funding

To facilitate the distribution of [Early Bird Rewards](https://sky-atlas.powerhouse.io/#A.5.2.1.1_Reward_System-99e76538-f850-4937-8092-d166cae5aff4|8d5a9e88cf49) **27,222,832.80 SKY** will be minted to a multisig controlled by the Accessibility Facilitators at [0x14D98650d46BF7679BBD05D4f615A1547C87Bf68](https://etherscan.io/address/0x14D98650d46BF7679BBD05D4f615A1547C87Bf68).

Once the required SKY tokens have been transferred to the MerkleDistributor it is expected that the remaining tokens will be burned.

### RWA Debt Ceiling Reductions

- **Authorization**: [Forum post](https://forum.sky.money/t/2024-10-17-expected-executive-contents-rwa-vault-changes/25323/2)
- **Proposal**: [Forum post](https://forum.sky.money/t/2024-10-17-expected-executive-contents-rwa-vault-changes/25323)

If this executive proposal passes, then the following Debt Ceiling changes for the now deprecated RWA Vaults operated by Monetalis will be carried out.

#### Monetalis Clydesdale (RWA007-A)

- RWA007-A will be removed from the [Debt Ceiling Instant Access Module (DC-IAM)](https://sky-atlas.powerhouse.io#A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)-071d42e3-8a21-4401-852e-0b52c49768bb|57eaf45219bea3b430c2).
- RWA007-A Debt Ceiling will be set to **0 DAI**.

#### Coinbase Custody (RWA014-A)

RWA014-A does not use the [Debt Ceiling Instant Access Module (DC-IAM)](https://sky-atlas.powerhouse.io#A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)-071d42e3-8a21-4401-852e-0b52c49768bb|57eaf45219bea3b430c2).

- Reduce the RWA014-A Debt Ceiling by 1.5 billion DAI from 1.5 billion DAI to **0 DAI**.

#### Oracle Adjustments

As part of the offboarding process, `tell` and `cull` will be called on the oracles for these vaults.

Calling `tell` will initiate soft liquidation of these vaults and calling `cull` will write off their debt and set the oracle prices to 0. In reality, as neither of these vaults have associated debt, the only change will be to set the reported prices of their oracles to 0.

These actions do not block further remittance of any outstanding profits through the Jar and InputConduitJar contracts as these contracts do not need to interact with the vault or the oracle to function.

### Pinwheel DAO Resolution

- **Authorization**: [Forum post](https://forum.sky.money/t/coinbase-web3-wallet-legal-overview/24577/4)
- **Proposal**: [Forum post](https://forum.sky.money/t/coinbase-web3-wallet-legal-overview/24577/3)

If this executive proposal passes, then the DAO Resolution with IPFS hash **[QmYJUvw5xbAJmJknG2xUKDLe424JSTWQQhbJCnucRRjUv7](https://ipfs.io/ipfs/QmYJUvw5xbAJmJknG2xUKDLe424JSTWQQhbJCnucRRjUv7)** will be approved.

This will formalize the payment process for rewards earned on balances held within the LITE-PSM-USDC-A.

### Aave-SparkLend Revenue Share Payment for Q3 2024.

- **Authorization**: [Forum post](https://forum.sky.money/t/spark-aave-revenue-share-calculation-payment-5-q3-2024/25286/2)
- **Proposal**: [Forum post](https://forum.sky.money/t/spark-aave-revenue-share-calculation-payment-5-q3-2024/25286)

If this executive proposal passes, a payment of **234,089 DAI** will be made to a smart contract controlled by Aave Governance at [0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) as part of the Aave-SparkLend Revenue Share.

### Spark Proxy Spell Execution

- **Authorization**: Governance Polls [1](https://vote.makerdao.com/polling/QmShWccA), [2](https://vote.makerdao.com/polling/QmTksxrr), [3](https://vote.makerdao.com/polling/QmbHaA2G), [Forum Post](https://forum.sky.money/t/wbtc-changes-and-risk-mitigation-10-august-2024/24844/52)
- **Proposal**: [Forum Post](https://forum.sky.money/t/oct-3-2024-proposed-changes-to-spark-for-upcoming-spell/25293)

If this executive proposal passes, then a Spark Proxy Spell at [0xcc3B9e79261A7064A0f734Cc749A8e3762e0a187](https://etherscan.io/address/0xcc3B9e79261A7064A0f734Cc749A8e3762e0a187) will be executed. The expected contents are as follows:

#### [Mainnet] Onboard sUSDS into SparkLend as Collateral Only Asset

If this executive proposal passes, the Spark Proxy Spell will onboard sUSDS to SparkLend on mainnet as described below:

- Token: **sUSDS**
- Token Address: **[0xa3931d71877c0e7a3148cb7eb4463524fec27fbd](https://etherscan.io/address/0xa3931d71877c0e7a3148cb7eb4463524fec27fbd)**
- Oracle: **Fixed 1 USD * sUSDS/USDS redemption rate from the token contract.**
- [Optimal Utilization](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.11_Optimal_Utilization_Definition-7dd3b868-b5c1-4f16-b997-8fb35a971ab1|57eaf45219be608847d6): **80%**
- [Base](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.13_Base_Rate_Definition-3ea70be9-6d09-4e25-8025-a0235dd71c28|57eaf45219be608847d6): **0%**
- [Slope1](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.15_Slope_1_Definition-20c3c3c3-432e-48ac-8336-86b8345f920e|57eaf45219be608847d6): **2%**
- [Slope2](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.16_Slope_2_Definition-e5bb5c04-c9f1-4f85-bd45-1d36269482fe|57eaf45219be608847d6): **300%**
- Stable rate func (deprecated): N/A
- Borrow Enabled: **No**
- [Isolation Borrowable](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.20_Isolated_Borrow-9acac8ca-3870-4680-ae38-1ba3deb09fe3|57eaf45219be608847d6bfdb): **No**
- Stable Rate Borrowing: **No**
- [Siloed Borrowing](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.21_Siloed_Borrowing_Enabled_Definition-2683581e-34fd-4025-b3ef-a46fc19ec855|57eaf45219be608847d6): **No**
- [Flash Loan](https://docs.sparkprotocol.io/developers/guides/flash-loans) Enabled: **No**
- [Loan To Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **79%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **80%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **5%**
- [Reserve Factor](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.8_Reserve_Factor_Definition-3f82c59f-c575-4975-8e1b-653136c3f1fd|57eaf45219be608847d6): **10%**
- [Supply Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.9_Supply_Cap_Definition-75575b79-9a3c-4601-9c57-dd2f7f48e285|57eaf45219be608847d6): **50 million sUSDS**
- [Supply Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **500 million sUSDS**
- [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **50 million sUSDS**
- [Supply Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Borrow Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.10_Borrow_Cap_Definition-fb930369-4ebc-4de0-9414-0a029857bc24|57eaf45219be608847d6): **0 sUSDS**
- [Borrow Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **N/A**
- [Isolation Mode](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **No**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [High Efficiency Mode (`Emode`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6) Category: **0**

#### [Mainnet] Update sDAI Oracle to Use Fixed DAI/USD at 1 USD

If this executive proposal passes, the Spark Proxy Spell will update the sDAI Oracle to use a fixed DAI/USD price of 1 USD multiplied by the sDAI/DAI redemption rate from the sDAI contract.

#### [Mainnet] Onboard PT-sUSDe-26Dec2024 and PT-sUSDe-27Mar2025 to Morpho Spark DAI Vault

If this executive proposal passes, the Spark Proxy Spell will onboard two new markets to the Morpho Spark DAI Vault with the following parameters:

##### PT-sUSDe-26Dec2024

- Address: [0xee9085fc268f6727d5d4293dbabccf901ffdcc29](https://etherscan.io/token/0xee9085fc268f6727d5d4293dbabccf901ffdcc29).
- Pool LLTV: **91.5%**.
- Supply Cap: **100 million DAI**.
- Price Oracle Yield to Maturity: **15%**.
- Price Oracle PT Redemption Value: **1 USD**.

##### PT-sUSDe-27Mar2025

- Address: [0xE00bd3Df25fb187d6ABBB620b3dfd19839947b81](https://etherscan.io/token/0xE00bd3Df25fb187d6ABBB620b3dfd19839947b81).
- Pool LLTV: **91.5%**.
- Supply Cap: **100 million DAI**.
- Price Oracle Yield to Maturity: **20%**.
- Price Oracle PT Redemption Value: **1 USD**.

#### [Mainnet] WBTC Parameter Changes

If this executive proposal passes, the Spark Proxy Spell will make the following changes to the WBTC market parameters:

- Reduce [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db%7C57eaf45219be608847d6) by 5 percentage points from 75% to **70%**.
- Update cap automator parameters:
  - Reduce [Supply Cap Target Available Exposure (gap)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806) by 300 WBTC from 500 WBTC to **200 WBTC**.
  - Reduce [Supply Cap Absolute Maximum Exposure (max)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42%7C57eaf45219be6088aa1c4806) by 5,000 WBTC from 10,000 WBTC to **5,000 WBTC**.
  - Reduce [Borrow Cap Target Available Exposure (gap)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806) by 99 WBTC from 100 WBTC to **1 WBTC**.
  - Reduce [Borrow Cap Absolute Maximum Exposure (max)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42%7C57eaf45219be6088aa1c4806) max by 1,999 WBTC from 2,000 WBTC to **1 WBTC**.
- Reduce Liquidation Protocol Fee by 10 percentage points from 10% to **0%**.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
