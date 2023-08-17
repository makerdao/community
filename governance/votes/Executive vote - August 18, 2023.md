---
title: Template - [Executive Vote] EDSR Adjustment, Vault and Smart Burn Engine Parameter Updates, CRVV1ETHSTETH-A Offboarding, Delegate Compensation, and Other Changes - August 17, 2023
summary: Reduce the DSR per the EDSR update, update multiple vault parameters, update the Smart Burn Engine parameters, complete offboarding of CRVV1ETHSTETH-A, Aligned Delegate compensation for July 2023, DAO Resolution for BlockTower Andromeda, transfer remaining admin controls to the Spark Proxy, execute Spark proxy spell.
date: 2023-08-17T00:00:00.000Z
address: "0x2f34BB0FE10BCb5652390FD0bA3Af7879BcA4b62"

---
# [Executive Proposal] EDSR Adjustment, Vault and Smart Burn Engine Parameter Updates, CRVV1ETHSTETH-A Offboarding, Delegate Compensation, and Other Changes - August 17, 2023

The Governance Facilitators, Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Dai Savings Rate will be reduced per the latest update to the EDSR, as detailed below.
- Multiple Stability Fee updates will be made, as detailed below.
- The Smart Burn Engine parameters will be updated, as detailed below.
- Vault parameter updates per the Stability Scope will be made, as detailed below.
- CRVV1ETHSTETH-A offboarding will be completed, as detailed below.
- A total of **272.75 MKR** will be paid to sixteen Aligned Delegates, as detailed below.
- Housekeeping parameter updates to the old Compound and Aave Direct Deposit Modules will take place, as detailed below.
- Parameter updates to the New Silver (RWA002-A) vault will be made, as detailed below.
- A DAO Resolution for BlockTower Andromeda (RWA015-A) will be approved, as detailed below.
- Admin control over the remaining Spark Protocol contracts will be transferred to the Spark Proxy, as detailed below.
- A proxy spell for Spark Protocol will be triggered, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Update

As per this successful governance [poll](https://vote.makerdao.com/polling/QmaAtZ3i), the DSR will be reduced as per the latest updates to the [Enhanced Dai Savings Rate (EDSR)](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-) in the Stability Scope as follows, if this executive proposal passes.

- Reduce the DSR by 3% from 8% to **5%**.

Please review the forum [thread](https://forum.makerdao.com/t/request-for-gov12-1-2-edit-to-the-stability-scope-to-quickly-modify-enhanced-dsr-based-on-observed-data/21581) to inform your position before voting.

### EDSR-Related [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Updates

As per this successful governance [poll](https://vote.makerdao.com/polling/QmaAtZ3i), the following Stability Fee Updates will be made, as per the instructions for the [Enhanced Dai Savings Rate (EDSR)](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-) in the Stability Scope, if this executive proposal passes.

- Increase ETH-A Stability Fee by 0.14% from 3.44% to **3.58%**.
- Increase ETH-B Stability Fee by 0.14% from 3.94%% to **4.08%**.
- Increase ETH-C Stability Fee by 0.14% from 3.19% to **3.33%**.
- Increase WSTETH-A Stability Fee by 1.81% from 3.44% to **5.25%**.
- Increase WSTETH-B Stability Fee by 1.81% from 3.19% to **5.00%**.
- Increase RETH-A Stability Fee by 1.81% from 3.44% to **5.25%**.
- Increase WBTC-A Stability Fee by 0.11% from 5.69% to **5.80%**.
- Increase WBTC-B Stability Fee by 0.11% from 6.19% to **6.30%**.
- Increase WBTC-C Stability Fee by 0.11% from 5.44% to **5.55%**.

Note that the ETH-A, ETH-B, and ETH-C Stability Fees are calculated based on the underlying DSR value rather than the EDSR value.

Please review the forum [thread](https://forum.makerdao.com/t/request-for-gov12-1-2-edit-to-the-stability-scope-to-quickly-modify-enhanced-dsr-based-on-observed-data/21581) to inform your position before voting.

### Smart Burn Engine Parameter Updates

Per this successful governance [poll](https://vote.makerdao.com/polling/QmTRJNNH), the following parameter updates to the Smart Burn Engine will occur if this executive proposal passes.

- Increase [Smart Burn Engine Cooldown (`hop`)](https://manual.makerdao.com/parameter-index/smart-burn-engine/param-surplus-cooldown) by 4,731 seconds from 1,577 seconds to **6,308 seconds**.
- Increase [Smart Burn Engine Lot Size (`bump`)](https://manual.makerdao.com/parameter-index/smart-burn-engine/param-surplus-lot-size) by 15,000 DAI from 5,000 DAI to **20,000 DAI**.

Please review the forum [thread](https://forum.makerdao.com/t/smart-burn-engine-parameters-update-1/21545) to inform your position before voting.

### Non-DSR Related Parameter changes

As per this successful governance [poll](https://vote.makerdao.com/polling/QmPxbrBZ#poll-detail) and the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#14-3-native-vault-engine) the following parameter changes will be made, if this executive proposal passes.

- Increase WSTETH-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 250 million DAI from 500 million DAI to **750 million DAI**.
- Increase WSTETH-B [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 500 million DAi from 500 million DAI to **1 billion DAI**.
- Increase WSTETH-B [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 15 million DAI from 30 million DAI to **45 million DAI**.
- Reduce WSTETH-B [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) by 14,400 seconds from 57,600 seconds to **43,200 seconds (12 hours)**.
- Increase RETH-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 25 million DAI from 50 million DAI to **75 million DAI**.

Please review the forum threads ([1](https://forum.makerdao.com/t/stability-scope-parameter-changes-4/21567), [2](https://forum.makerdao.com/t/non-scope-defined-parameter-changes-wsteth-b-dc-iam/21568)) to inform your position before voting.

### CRVV1ETHSTETH-A Second Stage Offboarding

As per the instructions in the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#14-3-12), the offboarding of CRVV1ETHSTETH-A will be completed by enacting the following parameter changes, if this executive proposal passes.

- Reduce [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) by 13% from 13% to **0%**.
- Reduce [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) by 250 DAI from 250 DAI to **0 DAI**.
- Reduce [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive) by 0.1% from 0.1% to **0%**.
- Increase [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 9,845% from 155% to **10,000%**.
- For completeness, the [Global Debt Ceiling (`Line`)](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling) will be reduced by 100 million DAI as part of the offboarding process for this collateral.

Please review the forum [thread](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238#crvv1ethsteth-a-proposed-offboarding-11) to inform your position before voting.

### Aligned Delegate Compensation for July 2023

As per [The Atlas](https://mips.makerdao.com/mips/details/MIP101) and [Governance Scope](https://mips.makerdao.com/mips/details/MIP113) the Governance Facilitators have published the details of delegate compensation for July [here](https://forum.makerdao.com/t/july-2023-aligned-delegate-compensation/21632). The payments will be distributed if this executive proposal passes.

| Delegate | Address | Amount |
|---|---|---|
| 0xDefensor | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 29.76 |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 29.76 |
| QGov | [0xB0524D8707F76c681901b782372EbeD2d4bA28a6](https://etherscan.io/address/0xB0524D8707F76c681901b782372EbeD2d4bA28a6) | 29.76 |
| TRUE NAME | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 29.76 |
| UPMaker | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 29.76 |
| vigilant | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 29.76 |
| WBC | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) | 14.82 |
|PALC| [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A) | 13.89 |
|Navigator|[0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) | 11.24 |
| PBG | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 9.92 |
|VoteWizard|[0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) | 9.92 |
| Libertas | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 9.92 |
|Harmony|[0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2](https://etherscan.io/address/0xF4704Aa4Ad22cAA2A3Dd7A7C529B4C32f7A421F2) | 8.93|
| JAG | [0x58d1ec57e4294e4fe650d1cb12b96ae34349556f](https://etherscan.io/address/0x58d1ec57e4294e4fe650d1cb12b96ae34349556f) | 7.61 |
| Cloaky | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) | 4.30 |
| Skynet | [0xd4d1A446cD5976a11bd32D3e815A9F85FED2F9F3](https://etherscan.io/address/0xd4d1A446cD5976a11bd32D3e815A9F85FED2F9F3) | 3.64 |

This comes to a total of **272.75 MKR**.

### Direct Deposit Module (D3M) Parameter Housekeeping

As per this [forum post](https://forum.makerdao.com/t/notice-of-executive-vote-date-change-and-housekeeping-changes/21613), the following housekeeping changes to the now defunct D3Ms will be made if this executive proposal passes.

#### Aave D3M

- Remove DIRECT-AAVEV2-DAI from the [DC-IAM (autoline)](https://manual.makerdao.com/module-index/module-dciam).
- Set the DIRECT-AAVEV2-DAI [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to **0 DAI**.

#### Compound D3M

- Remove DIRECT-COMPV2-DAI from the [DC-IAM (autoline)](https://manual.makerdao.com/module-index/module-dciam).
- Set the DIRECT-COMPV2-DAI [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to **0 DAI**.

For completeness, the [Global Debt Ceiling (`Line`)](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling) will be reduced by as part of this process to account for the removal of the Debt Ceiling of these collaterals.

### New Silver (RWA002-A) Parameter Changes

As per this successful governance [poll](https://vote.makerdao.com/polling/QmaU1eaD) and the execution of the updated `doc` parameter in the preceding spell, the following parameter changes to the New Silver (RWA002-A) vault will be made, if this executive proposal passes.

- Increase RWA002-A Debt Ceiling by 30 million DAI from 20 million DAI to **50 million DAI**.
- Increase RWA002-A Stability Fee by 3.5% from 3.5% to **7%**.
- Reduce Liquidation Ratio by 5% from 105% to **100%** - the rationale for this change can be seen [here](https://forum.makerdao.com/t/notice-of-executive-vote-date-change-and-housekeeping-changes/21613#rwa002-a-liquidation-ratio-update-3).
- Bump the Oracle Price to **92,899,356 DAI** (rounded value, see technical note below).

*Technical Note:* the increase in the Oracle Price is required to account for borrowing and accumulated Stability Fees throughout the loan term. Per the Legal Agreement, the loan term runs until 2032-10-11. At the smart contract level, the Oracle Price will be internally set to `92899355926924134500000000`.

Please see the [proposal thread](https://forum.makerdao.com/t/rwa-002-new-silver-restructuring-risk-and-legal-assessment/21417) before voting.

### DAO Resolution for BlockTower Andromeda

As per this [forum post](https://forum.makerdao.com/t/dao-resolution-to-facilitate-onboarding-of-taco-with-additional-third-parties/21572) and [approval](https://forum.makerdao.com/t/dao-resolution-to-facilitate-onboarding-of-taco-with-additional-third-parties/21572/2) by the Responsible Facilitator, the following DAO Resolution concerning BlockTower Andromeda (RWA015-A) will be approved, if this executive proposal passes.

```
MAKERDAO RESOLUTION

Date: DATED AS OF RELATED EXECUTIVE VOTE ON MAKERDAO

No: 5

Purpose: SETUP ADDITIONAL TRANSACTIONAL THIRD-PARTY RELATIONSHIPS

Reference is made to the Articles of Association (the “Articles”) of TACO Foundation, a Cayman Islands foundation company (“TACO”), dated November 16, 2022, pursuant to which TACO’s operations are governed. Capitalized terms used herein and not otherwise defined shall have the meaning given to them in the Articles.

This resolution sets out the instructions and ratifications duly passed as an executed vote on https://vote.makerdao.com/executive (“Maker Governance Voting Portal”) in accordance with the governance protocols of MakerDAO on the date specified above. In accordance with the governance protocols of MakerDAO on the date specified above and pursuant to clause 4.16 of the Articles, according to which the directors of TACO must implement all DAO Resolutions (subject to applicable law); this DAO Resolution approves and ratifies the following structures and actions to execute on transactions as described by Project Andromeda:

RATIFICATION

Establish, maintain, or enable reporting on the following additional facilities:

1. An agreement with Wintermute Trading Ltd. as Exchange Agent to establish an OTC Account (“Wintermute OTC Account”), whereby:
a. Incoming funds can be deposited into a segregated wallet managed by Exchange Agent, for the express purpose of exchanging Stablecoins into USD. USD exchanged from Stablecoins shall be deposited by Wintermute into one of TACO’s Settlement Accounts.
b. In the event of a disbursement, USD incoming from TACO’s Settlement Account can be deposited into the Wintermute OTC Account for the express purpose of exchanging USD into Stablecoins. Stablecoins exchanged from USD shall be deposited into either RWA015_A_INPUT_CONDUIT_JAR or RWA015_A_INPUT_CONDUIT_URN.

2. A Settlement Account with StoneX Group Inc. (“StoneX Settlement Account”), whereby:
a. Incoming funds from an Exchange Agent may be directed to the purchase of identified assets.
b. Assets purchased shall be custodied with StoneX Group Inc. acting as Broker and Pershing LLC. acting as Custodian.
c. Distribution and proceeds from the sale of any assets shall be settled in the StoneX Settlement Account.

3. A Settlement Account with Computershare Ltd. (“Computershare Settlement Account”), whereby:
a. Incoming funds from an Exchange Agent may be directed to the purchase of identified assets.
b. Assets purchased may be custodied with Computershare Ltd. acting as Custodian.
c. Distribution and proceeds from the sale of any assets shall be settled in the Computershare Settlement Account
```

The IPFS hash of this DAO Resolution is `QmUNrCwKK2iK2ki5Spn97jrTCDKqFjDZWKk3wxQ2psgMP5` and a pinned version can be viewed [here](https://ipfs.io/ipfs/QmUNrCwKK2iK2ki5Spn97jrTCDKqFjDZWKk3wxQ2psgMP5).

### Transfer Spark Protocol Admin Controls

As per this governance [poll](https://vote.makerdao.com/polling/Qmc9fd3j), use of a Spark Proxy has been approved by Maker Governance. Admin control over the remaining contracts (listed below) will be transferred to the Spark Proxy if this executive proposal passes.

* treasuryController
* treasury
* daiTreasury
* incentives
* wethGateway
* aclManager
* poolAddressesProvider
* poolAddressesProvierRegistry
* emissionManager

Maker Governance will retain ultimate control over Spark Protocol as the Spark Proxy requires approval from a Maker Core executive spell to interact with any of these contracts.

Please review this [forum post](https://forum.makerdao.com/t/executive-proxies-and-spark-protocol/20976) for more information about Executive Proxies.

### Execute Spark Proxy Spell

The Spark Proxy spell at address [0x60cC45DaB5F0B17789C77d5FE990f1aD80e9DD65](https://etherscan.io/address/0x60cC45DaB5F0B17789C77d5FE990f1aD80e9DD65) will be executed, if this executive proposal passes.

Spell contents include:

- Upgrade the Pool Implementation to Aave 3.0.2
- Set DAI interest rate strategy to track the DSR rather than ETH-C Stability Fee - this is based on the latest EDSR updates and reflects that the Spark borrow rate should track the EDSR.
- Unfreeze the sDAI market - now that the DAI borrow rate at Spark tracks the DSR, the sDAI market can be unfrozen as there is no longer an arbitrage opportunity.

Further information on these changes can be found from the Phoenix Labs team in this [forum post](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark-for-august-18th-spell/21612).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).