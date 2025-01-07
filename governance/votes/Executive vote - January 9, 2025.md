---
title: Template - [Executive Vote] WBTC Oracle Migration, ALLOCATOR-SPARK-A Maximum Debt Ceiling Increase, Integration Boost Funding, Bug Bounty Payments, Resilience Research Project Funding, Aligned Delegate Compensation, Atlas Core Development Funding, Spark Proxy Spell - January 9, 2025
summary: Update the price source for the WBTC oracle, increase the ALLOCATOR-SPARK-A Maximum Debt Ceiling, distribute Integration Boost funding, distribute bug bounty payments, distribute Resilience Research Project funding, distribute Aligned Delegate compensation for November 2024, distribute Atlas Core Development funding, trigger a Spark Proxy spell.
date: 2025-01-09T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] WBTC Oracle Migration, ALLOCATOR-SPARK-A Maximum Debt Ceiling Increase, Integration Boost Funding, Bug Bounty Payments, Resilience Research Project Funding, Aligned Delegate Compensation, Atlas Core Development Funding, Spark Proxy Spell - January 9, 2025

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:
- The source of BTC/USD prices for the WBTC OSM will be updated to a new Scribe feed.
- The Maximum Debt Ceiling (`line`) for ALLOCATOR-SPARK-A will be increased.
- **3 million USDS** for Integration Boost funding will be distributed.
- A total of **1,100 USDS** for Bug Bounty payouts will be distributed.
- **32,000 USDS** of Resilience Research Project Funding will be distributed.
- A total of **23,323 USDS** will be distributed to seven Aligned Delegates as compensation for November 2024.
- Atlas Core Development USDS and SKY payments totalling **126,438 USDS** and **988,000** SKY will be distributed.
- A Spark Proxy Spell at [0x7fb2967cDC6816Dc508f35C5A6CB035C8B6507Ec](https://etherscan.io/address/0x7fb2967cDC6816Dc508f35C5A6CB035C8B6507Ec) will be triggered.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**30 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### WBTC Oracle Migration

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/technical-scope-of-the-wbtc-oracle-migration/25715/3)
- **Proposal**: [Forum post](https://forum.sky.money/t/technical-scope-of-the-wbtc-oracle-migration/25715)

If this executive proposal passes, then the source of BTC/USD pricing for the WBTC [Oracle Safety Module (OSM)](https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation) will be updated to [0x24C392CDbF32Cf911B258981a66d5541d85269ce](https://etherscan.io/address/0x24C392CDbF32Cf911B258981a66d5541d85269ce). This will update the price source to the new Chronicle [Scribe-based](https://github.com/chronicleprotocol/scribe) design as documented in [Atlas A.3.8.1.1.4](https://sky-atlas.powerhouse.io/A.3.8.1.1.4_Oracles/c317d8c1-5706-4632-90a3-442b5f3d9000|57eaf45219bea3b4).

The relevant call for this action is:

```solidity
OsmAbstract(PIP_WBTC).change(0x24C392CDbF32Cf911B258981a66d5541d85269ce);
```

### ALLOCATOR-SPARK-A [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)/6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb) Increase

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmQ6bYou)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

If this executive proposal passes, then the following increase to the ALLOCATOR-SPARK-A will occur:

- Increase the ALLOCATOR-SPARK-A [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)/6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb) by 900 million USDS from 100 million USDS to **1 billion USDS**.

### Integration Boost Funding Distribution

- **Authorization**: [Atlas A.5.2.1.2](https://sky-atlas.powerhouse.io/A.5.2.1.2_Integration_Boost/129f2ff0-8d73-8057-850b-d32304e9c91a|8d5a9e88cf49)
- **Proposal**: [Forum Post](http://forum.sky.money/t/utilization-of-the-integration-boost-budget-a-5-2-1-2/25536/3)

If this executive proposal passes, then the following Integration Boost funding distribution will be made:

- Transfer **3 million USDS** to [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).

### Bug Bounty Payments

- **Authorization**: [Atlas A.2.9.1.1](https://sky-atlas.powerhouse.io/A.2.9.1.1_Bug_Bounty_Program_For_Critical_Infrastructure/7d58645d-713c-4c54-a2ee-e0c948fb0c25|9e1f4492c8ce)
- **Proposal**: [Forum Post](https://forum.sky.money/t/bounty-payout-request-for-immunefi-bug-37383/25728)

If this executive proposal passes, then the following distributions for Immunefi bug #37383 will be made:

- Transfer **1,000 USDS** to the whitehat at [0xB5BB14252099CAef65912ad2F1BBd9434cF24c38](https://etherscan.io/address/0xB5BB14252099CAef65912ad2F1BBd9434cF24c38).
- Transfer **100 USDS** to Immunefi at [0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18 (immunefi.eth)](https://etherscan.io/address/0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18).

### Resilience Research Project Funding

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmdKkyYb)
- **Proposal**: [Forum Post](https://forum.sky.money/t/resilience-research-project-application-legal-opinion-on-mica-compliance-for-cex-listings-of-usds-and-dai/25759)

If this executive proposal passes, then the following Resilience Research Project funding distribution will be made:

- Transfer **32,000 USDS** to [0x1378056c0cdd771de52A111E2777293516fA910c](https://etherscan.io/address/0x1378056c0cdd771de52A111E2777293516fA910c).

### Aligned Delegate Compensation for November 2024

- **Authorization**: [Atlas A.1.5.8](https://sky-atlas.powerhouse.io/A.1.5.8_Budget_For_Prime_Delegate_Slots/e3e420fc-9b1f-4fdc-9983-fcebc45dd3aa%7C0db3af4ece0c)
- **Proposal**: [Forum Post](https://forum.sky.money/t/november-2024-aligned-delegate-compensation/25740)

If this executive proposal passes, then a total of **23,323 USDS** will be distributed to seven Aligned Delegates and their teams as compensation for November 2024.

| Delegate    | Amount (USDS) | Address                                                                                                               |
|-------------|--------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE        | 4,000         | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Bonapublica | 4,000         | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) |
| Byteron     | 533           | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| Cloaky      | 4,000         | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| JuliaChang  | 4,000         | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Rocky       | 2,790         | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xC31637BDA32a0811E39456A59022D2C386cb2C85) |
| vigilant    | 4,000         | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) |

### Atlas Core Development Payments for December 2024

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/atlas-core-development-payment-requests-december-2024/25741/6), [Atlas Axis Approval](http://forum.sky.money/t/atlas-core-development-payment-requests-december-2024/25741/5)
- **Proposal**: [Forum Post](https://forum.sky.money/t/atlas-core-development-payment-requests-december-2024/25741)

If this executive proposal passes, then a total of **126,438 USDS** and **988,000** SKY will be distributed for Atlas Core Development funding.

#### USDS Payments

| Recipient | Amount (USDS) | Address                                                                                                               |
|-----------|--------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE      | 83,602        | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Kohla     | 10,000        | [0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a](https://etherscan.io/address/0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a) |
| Ennoia    | 10,000        | [0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b](https://etherscan.io/address/0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b) |
| Cloaky    | 22,836        | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |

#### SKY Payments

| Recipient | Amount (SKY) | Address                                                                                                               |
|-----------|-------------:|-----------------------------------------------------------------------------------------------------------------------|
| BLUE      | 550,000      | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky    | 438,000      | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |

### Spark Proxy Spell

If this executive proposal passes, then a Spark Proxy Spell will be executed at [0x7fb2967cDC6816Dc508f35C5A6CB035C8B6507Ec](https://etherscan.io/address/0x7fb2967cDC6816Dc508f35C5A6CB035C8B6507Ec) with the following contents.

#### [Mainnet] Adjust SparkLend Parameters for WBTC

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmYScEHT)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- Reduce the WBTC [liquidation threshold](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.5_Liquidation_Threshold_Definition/9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6) by 5 percentage points from 60% to **55%**.

#### [Mainnet] Adjust SparkLend Parameters for cbBTC

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/Qma1xA18)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- Increase the cbBTC Supply Cap [Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/A.3.8.1.6.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition/a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806) parameter by 7,000 cbBTC from 3,000 cbBTC to 10,000 **cbBTC**.

#### [Mainnet] Adjust SparkLend Parameters for wstETH

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmeEvuG2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- Increase wstETH Borrow Cap [Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/A.3.8.1.6.4.1.1_Cap_Automator_Target_Available_Exposure_Definition/78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806) by 5,000 wstETH from 5,000 wstETH to **10,000 wstETH**.
- Increase wstETH Borrow Cap [Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/A.3.8.1.6.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition/a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806) by 900,000 wstETH from 100,000 wstETH to **1 million wstETH**.
- Increase wstETH [Optimal Utilization](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.11_Optimal_Utilization_Definition/7dd3b868-b5c1-4f16-b997-8fb35a971ab1|57eaf45219be608847d6) by 25 percentage points from 45% to **70%**.
- Reduce wstETH [Base Rate](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.13_Base_Rate_Definition/3ea70be9-6d09-4e25-8025-a0235dd71c28|57eaf45219be608847d6) by 0.25 percentage points from 0.25% to **0%**.
- Reduce wstETH [Slope 1](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.15_Slope_1_Definition/20c3c3c3-432e-48ac-8336-86b8345f920e|57eaf45219be608847d6) by 2.5 percentage points from 4.5% to **2%**.
- Increase wstETH [Slope 2](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.16_Slope_2_Definition/e5bb5c04-c9f1-4f85-bd45-1d36269482fe|57eaf45219be608847d6) by 120 percentage points from 80% to **200%**.
- Increase wstETH [Reserve Factor](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.8_Reserve_Factor_Definition/3f82c59f-c575-4975-8e1b-653136c3f1fd|57eaf45219be608847d6) by 15 percentage points from 15% to **30%**.

#### [Mainnet] Adjust SparkLend Parameters for weETH

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmVpv1G8)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- **Remove** weETH from [Isolation Mode](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.19_Isolated_Collateral_Enabled_Definition/2b4d2a01-fc3e-45a4-9d5e-2ef7d3677ff8|57eaf45219be608847d6).

#### [Mainnet] Adjust Morpho Spark DAI Vault Supply Caps

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmZ2Qmy5)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- USDe 94.5%: reduce by 10 million DAI from 10 million DAI to **0 DAI**.
- USDe 91.5%: no change.
- USDe 86%: no change.
- USDe 77%: reduce by 1 billion DAI from 1 billion DAI to **0 DAI**.
- sUSDe 94.5%: reduce by 10 million DAI from 10 million DAI to **0 DAI**.
- sUSDe 91.5%: no change.
- sUSDe 86%: no change.
- sUSDe 77%: reduce by 1 billion DAI from 1 billion DAI to **0 DAI**.
- PT-sUSDe-24Oct2024 86%: reduce by 100 million DAI from 100 million DAI to **0 DAI**.
- PT-sUSDe-26Dec2024 91.5%: reduce by 250 million DAI from 250 million DAI to **0 DAI**.
- PT-sUSDe-27Mar2025 91.5%: increase by 100 million DAI from 400 million to **500 million DAI**.
- PT-USDe-27Mar2025 91.5%: no change.

#### [Mainnet] Onboard PT-sUSDE-29MAY2025 to Morpho Spark DAI Vault

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmSTYyW5)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- Onboard PT-sUSDE-29MAY2025 to the Morpho Spark DAI Vault with the following parameters:
	- Pool LLTV: **91.5%**.
	- Oracle Discount Rate: **25%**
	- Supply Cap: **200 million DAI**.

The id for the relevant Morpho market is [0x407d8c123443d362ffdfe73208068ef158a21d1a44a988c9acc23a51bade7905](https://app.morpho.org/market?id=0x407d8c123443d362ffdfe73208068ef158a21d1a44a988c9acc23a51bade7905&network=mainnet)

#### [Mainnet] Update DAI, USDC, USDT IRMs to Anchor to SSR

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmTFsGw8)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- Update the DAI, USDC, and USDT [Interest Rate Models](https://sky-atlas.powerhouse.io/A.3.8.1.6.1.3_Interest_Rate_Model_Definition/83e3f4f2-5e8e-4383-95e5-3af1bfb19210|57eaf45219be608847d6) to anchor to the [**Sky Savings Rate (SSR)**](https://sky-atlas.powerhouse.io/A.3.2.2.3_Sky_Savings_Rate/73d91126-21c9-4e8a-bedf-8a51a432bb59|57eab733e951) instead of the [Dai Savings Rate (DSR)](https://sky-atlas.powerhouse.io/A.3.2.2.2_Dai_Savings_Rate/8e289e71-7ec5-4ce5-8d4d-41aab7a50f53|57eab733e951).
- Increase the spread between SSR and SparkLend effective DAI borrow rate by 0.25 percentage points from ~0% to **~0.25%**.

#### [Mainnet] Onboard Ethena USDe and sUSDe Direct Exposure to the Spark Liquidity Layer

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmYDGkjM)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

Onboard Ethena USDe and sUSDe direct exposure to the Spark Liquidity Layer on mainnet with the following parameters:

##### Minting USDe

- `max amount` (maximum amount that can be executed at once): **50 million USDe**.
- `slope` (recharging rate of capacity): **50 million USDe per day**.

##### Burning USDe

- `max amount`: **100 million USDe**.
- `slope`: **100 million USDe per day**.

##### Depositing to sUSDe

- `max amount`: **100 million USDe**.
- `slope`: **100 million USDe per day**.

##### Withdrawing from sUSDe

- `max amount`: **500 million USDe**.
- `slope`: **250 million USDe per day**.

#### [Mainnet] Onboard Aave V3 Main Market USDC and USDS to the Spark Liquidity Layer

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmZfSDMH)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

Onboard Aave V3 Main Market USDC and USDS to the Spark Liquidity Layer on mainnet with the following parameters:

- `max amount` (maximum amount that can be executed at once) for
  deposits: **50 million tokens** for each asset.
- `slope` (recharging rate of capacity): **25 million tokens per day** for each asset.
- `max amount` for withdrawals: **unlimited**.

The relevant token addresses are:

- USDS AToken: [0x32a6268f9Ba3642Dda7892aDd74f1D34469A4259](https://etherscan.io/address/0x32a6268f9Ba3642Dda7892aDd74f1D34469A4259).
- USDC AToken: [0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c](https://etherscan.io/address/0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c).

#### [Mainnet] Increase USDS Liquidity to Base

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmQ6bYou)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

- Premint **99 million USDS** into the [Base ALM Proxy](https://basescan.org/address/0x2917956eFF0B5eaF030abDB4EF4296DF775009cA).

#### [Base] Onboard Aave V3 Base Market USDC to the Spark Liquidity Layer

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmeZTfHR)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

Onboard Aave V3 Base Market USDC to the Spark Liquidity Layer on Base with the following parameters:

- `max amount` (maximum amount that can be executed at once) for deposits: **50 million USDC**.
- `slope` (recharging rate of capacity): **25 million USDC per day**.
- `max amount` for withdrawals: **unlimited**.

The relevant token address is [0x4e65fE4DbA92790696d040ac24Aa414708F5c0AB](https://basescan.org/address/0x4e65fE4DbA92790696d040ac24Aa414708F5c0AB).

#### [Base] Onboard Morpho USDC Vault to the Spark Liquidity Layer

- **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmQarR2U)
- **Proposal**: [Forum Post](https://forum.sky.money/t/27-dec-2024-proposed-changes-to-spark-for-upcoming-spell/25760)

Onboarding the Morpho USDC Vault to the Spark Liquidity Layer on Base with the following parameters:

* `max amount` (maximum amount that can be executed at once) for deposits: **50 million USDC**.
* `slope` (recharging rate of capacity): **25 million USDC per day**.
* `max amount` for withdrawals: **unlimited**.

The relevant vault address is [0x305E03Ed9ADaAB22F4A58c24515D79f2B1E2FD5D](https://basescan.org/address/0x305E03Ed9ADaAB22F4A58c24515D79f2B1E2FD5D).

The following changes will be made to the vault:

- Add the USDC idle market with unlimited (type(uint184).max) supply cap.
- Add the RELAYER multisig as an allocator.
- Increase the supply cap on cbBTC/USDC market ([0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836](https://app.morpho.org/market?id=0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836&network=base)) to **100 million USDC**.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.sky.money/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
