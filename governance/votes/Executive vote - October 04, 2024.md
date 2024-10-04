---
title: Template - [Executive Vote] Stability Scope Parameter Changes, LITE-PSM-USDC-A Phase 3 (Final) Setup, Aave Lido Market Spark USDS DDM Activation, WBTC Legacy Vaults Parameter Changes - October 4, 2024
summary: Stability Fee changes, Dai Savings Rate changes, Sky Savings Rate changes, final LITE-PSM-USDC-A migration actions, Aave Lido Market Spark USDS DDM activation, WBTC legacy vaults liquidation parameter changes.
date: 2024-10-04T00:00:00.000Z
address: "0x1a0C39D0dBd66956BAfb347f91F55DA1Da2B8F80"

---
# [Executive Proposal] Stability Scope Parameter Changes, LITE-PSM-USDC-A Phase 3 (Final) Setup, Aave Lido Market Spark USDS DDM Activation, WBTC Legacy Vaults Parameter Changes - October 4, 2024

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- Stability Scope Parameter Changes:
  - WBTC Vault [Stability Fees](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232|57eaf45219bea3b430c2) will be increased.
  - [DAI Savings Rate](https://sky-atlas.powerhouse.io/#A.3.2.2.2_Dai_Savings_Rate-8e289e71-7ec5-4ce5-8d4d-41aab7a50f53|57eab733e951) and [SKY Savings Rate](https://sky-atlas.powerhouse.io/#A.3.2.2.3_Sky_Savings_Rate-73d91126-21c9-4e8a-bedf-8a51a432bb59|57eab733e951) will be changed.
- The final LITE-PSM-USDC-A migration actions (Phase 3) will be executed.
- The Aave Lido Market Spark USDS Direct Deposit Module (DDM) will be activated.
- WBTC-A, WBTC-B, and WBTC-C liquidation parameters will be updated.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### Stability Scope Parameter Changes

- **Authorization**: [Ecosystem Approval](http://forum.sky.money/t/stability-scope-parameter-changes-16-sfs-ssr-dsr-spark-effective-dai-borrow-rate-changes/25257/2)
- **Proposal**: [Forum Post](https://forum.sky.money/t/stability-scope-parameter-changes-16-sfs-ssr-dsr-spark-effective-dai-borrow-rate-changes/25257)

If this executive proposal passes, then the following [Stability Fee (SF)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232%7C57eaf45219bea3b430c2), [Dai Savings Rate (DSR)](https://sky-atlas.powerhouse.io/#A.3.2.2.2_Dai_Savings_Rate-8e289e71-7ec5-4ce5-8d4d-41aab7a50f53|57eab733e951), and [Sky Savings Rate (SSR)](https://sky-atlas.powerhouse.io/#A.3.2.2.3_Sky_Savings_Rate-73d91126-21c9-4e8a-bedf-8a51a432bb59|57eab733e951) changes will take place as described below.

#### Stability Fee Increases

- Increase WBTC-A SF by 1.5 percentage points from 7.75% to **9.25%**.
- Increase WBTC-B SF by 1.5 percentage points from 8.25% to **9.75%**.
- Increase WBTC-C SF by 1.5 percentage points from 7.5% to **9%**.

#### DSR and SSR Changes

- Decrease DSR by 0.5 percentage points from 6% to **5.5%**.
- Increase SSR by 0.25 percentage points from 6.25% to **6.5%**.

The current Spark DAI market [Interest Rate Model (IRM)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.3_Interest_Rate_Model_Definition-83e3f4f2-5e8e-4383-95e5-3af1bfb19210|57eaf45219be608847d6) is tied to the DSR. Consequently, the 50 basis point reduction in DSR will result in an approximate, but not exact, 50 basis point decrease in the Effective DAI Borrow Rate on SparkLend.

### LITE-PSM-USDC-A Migration Phase 3

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-3-final-migration-proposed-parameters/25183/2), [Poll 1143](https://vote.makerdao.com/polling/QmRjrFYG)
- **Proposal**: [Forum Post](https://forum.sky.money/t/lite-psm-usdc-a-phase-3-final-migration-proposed-parameters/25183)

If this executive proposal passes, then the [third and final set of actions](https://forum.sky.money/t/lite-psm-usdc-a-phase-3-final-migration-proposed-parameters/25183) in the [migration process from USDC-PSM-A to LITE-PSM-USDC-A](https://forum.sky.money/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512) will be executed. This set of actions comprises the following:

- Update PSM-USDC-A fees.
- Migrate all remaining USDC reserves from PSM-USDC-A to LITE-PSM-USDC-A.
- Remove PSM-USDC-A from the [Debt Ceiling Instant Access Module (DC-IAM)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)-071d42e3-8a21-4401-852e-0b52c49768bb|57eaf45219bea3b430c2).
- Increase the [LITE-PSM-USDC-A Buffer (`buf`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.6_Buffer_Definition-cf8e3d20-fffa-4b6a-9bf2-169d493c3638|57ea599773d45150b2632df9).
- Update the LITE-PSM-USDC-A [DC-IAM](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)-071d42e3-8a21-4401-852e-0b52c49768bb|57eaf45219bea3b430c2) parameters.

These actions are described below.

#### PSM-USDC-A Fee Update

- Decrease [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) by 0.01 percentage points from 0.01% to **0%**.
- Decrease [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) by 0.01 percentage points from 0.01% to **0%**.

#### Remaining USDC Migration

The remaining USDC in [PSM-USDC-A](https://makerburn.com/#/collateral/PSM-USDC-A) will be migrated to [LITE-PSM-USDC-A](https://makerburn.com/#/collateral/LITE-PSM-USDC-A) through a script executed in the spell.

#### PSM-USDC-A DC-IAM Update

- Remove PSM-USDC-A from the [Debt Ceiling Instant Access Module (DC-IAM)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)-071d42e3-8a21-4401-852e-0b52c49768bb|57eaf45219bea3b430c2).
- Set PSM-USDC-A [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)-6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb) to **0 DAI**.

#### LITE-PSM-USDC-A Buffer Increase

- Increase the [LITE-PSM-USDC-A Buffer (`buf`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.6_Buffer_Definition-cf8e3d20-fffa-4b6a-9bf2-169d493c3638|57ea599773d45150b2632df9) by 200 million DAI from 200 million DAI to **400 million DAI**.

#### LITE-PSM-USDC-A DC-IAM Update

- Increase the [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.3_Maximum_Debt_Ceiling_Definition-e4a0d8f1-4a01-46a7-b693-a94e7f4afc1a|57ea599773d45150b2632df9) by 2.5 billion DAI from 7.5 billion DAI to **10 billion DAI**.
- Increase the [Target Available Debt (`gap`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.4_Target_Available_Debt_Definition-b876ecf4-a901-4721-9c4b-9f2fc21f954c|57ea599773d45150b2632df9) by 200 million DAI from 200 million DAI to **400 million DAI**.
- Keep the [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.5_Ceiling_Increase_Cooldown_Definition-3d5980c5-7036-4b68-93e0-a48551fe09ed|57ea599773d45150b2632df9) unchanged at **12 hours**.

### Aave Lido Market Spark USDS Direct Deposit Module (DDM) Activation

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/risk-assessment-and-parameter-recommendations-spark-ddm-to-aave-lido-market/25175/2)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/risk-assessment-and-parameter-recommendations-spark-ddm-to-aave-lido-market/25175)

If this executive proposal passes, then the Aave Lido Market Spark USDS DDM will be activated by executing the following actions:

- Add new ilk as DIRECT-SPK-AAVE-LIDO-USDS.
- Set up the DDM DC-IAM.
- Set up the DDM addresses.
- Extend the [DIRECT_MOM Breaker](https://sky-atlas.powerhouse.io/#A.1.8.2.2.5_Direct_Deposit_Breaker_Exception-c240d4fa-ab20-4787-8dbf-7c94c8e78347%7C0db30758e055352c) to include the new DDM.

These actions are further described below.

#### New ilk Addition

A new ilk will be added as DIRECT-SPK-AAVE-LIDO-USDS.

#### Aave Lido Market Spark USDS DDM Setup

- [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.3_Maximum_Debt_Ceiling_Definition-e4a0d8f1-4a01-46a7-b693-a94e7f4afc1a|57ea599773d45150b2632df9): **100 million USDS**.
- [Target Available Debt (`gap`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.4_Target_Available_Debt_Definition-b876ecf4-a901-4721-9c4b-9f2fc21f954c|57ea599773d45150b2632df9): **50 million USDS**.
- [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.5_Ceiling_Increase_Cooldown_Definition-3d5980c5-7036-4b68-93e0-a48551fe09ed|57ea599773d45150b2632df9): 24 hours.
- Debt Write-off Timelock (`tau`) (Defines the time to elapse before debt can be written off after a DDM has been caged): **7 days**.

#### DDM Addresses Setup

- oracle: D3MOracle at [0x9dB0EB29c2819f9AE0A91A6E6f644C35a7493E9b](https://etherscan.io/address/0x9dB0EB29c2819f9AE0A91A6E6f644C35a7493E9b)
- plan: [D3MOperatorPlan](https://github.com/makerdao/dss-direct-deposit/blob/master/src/plans/D3MOperatorPlan.sol) at [0xea2abB24bF40ac97746AFf6daCA0BBF885014b31](https://etherscan.io/address/0xea2abB24bF40ac97746AFf6daCA0BBF885014b31)
- pool: [D3MAaveV3USDSNoSupplyCapTypePool](https://github.com/makerdao/dss-direct-deposit/blob/master/src/pools/D3MAaveV3USDSNoSupplyCapTypePool.sol) at [0xbf674d0cD6841C1d7f9b8E809B967B3C5E867653](https://etherscan.io/address/0xbf674d0cD6841C1d7f9b8E809B967B3C5E867653)
- aToken: [0x09AA30b182488f769a9824F15E6Ce58591Da4781](https://etherscan.io/address/0x09aa30b182488f769a9824f15e6ce58591da4781)
- operator: [0x298b375f24CeDb45e936D7e21d6Eb05e344adFb5](https://etherscan.io/address/0x298b375f24cedb45e936d7e21d6eb05e344adfb5)
- stabledebt address: [0x779dB175167C60c2B2193Be6B8d8B3602435e89E](https://etherscan.io/address/0x779db175167c60c2b2193be6b8d8b3602435e89e)
- variabledebt address: [0x2D9fe18b6c35FE439cC15D932cc5C943bf2d901E](https://etherscan.io/address/0x2d9fe18b6c35fe439cc15d932cc5c943bf2d901e)

#### DIRECT_MOM Breaker Extension

If this executive proposal passes, then the [DIRECT_MOM Breaker](https://sky-atlas.powerhouse.io/#A.1.8.2.2.5_Direct_Deposit_Breaker_Exception-c240d4fa-ab20-4787-8dbf-7c94c8e78347%7C0db30758e055352c) will be extended to include the Aave Lido Market Spark USDS DDM, enabling governance to deactivate vault functionality through an executive spell without waiting for the GSM Pause Delay.

### WBTC Legacy Vault Parameter Changes

- **Authorization**: [Ecosystem Approval](https://forum.sky.money/t/wbtc-changes-and-risk-mitigation-10-august-2024/24844/52)
- **Proposal**: [Forum Post](https://forum.sky.money/t/wbtc-changes-and-risk-mitigation-10-august-2024/24844/48)

If this executive proposal passes, then the following WBTC risk mitigation actions will be executed on WBTC Legacy Vaults:

- Decrease [Liquidation Penalty (`chop`)](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.7_Liquidation_Penalty_(chop)-5295aa1f-3944-4fde-aaec-d999244b57e9|57eaf45219bea3b430c2a59a) for WBTC-A, WBTC-B, and WBTC-C from 13% to **0%**.
- Increase WBTC-A [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) using the [Linear Interpolation (LERP)](https://manual.makerdao.com/module-index/module-lerp) module by 5 percentage points from 145% to **150%** over **6 days**.
- Increase WBTC-B [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) using the [Linear Interpolation (LERP)](https://manual.makerdao.com/module-index/module-lerp) module by 20 percentage points from 130% to **150%** over **6 days**.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.sky.money/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
