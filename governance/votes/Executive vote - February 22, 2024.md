---
title: Template - [Executive Vote] Stability Fee Changes, Spark Protocol D3M Parameter Changes, Housekeeping Actions, Spark Proxy Spell - February 22, 2024
summary: Stability Fee changes for ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C, Spark Protocol D3M parameter changes, pushing USDP out of input conduit, yanking BA Labs DAI and MKR vest streams, triggering Spark proxy spell.  
date: 2024-02-22T00:00:00.000Z
address: "0xdB2C426173e5a9c10af3CD834B87DEAad40525Ff"

---
# [Executive Vote] Stability Fee Changes, Spark Protocol D3M Parameter Changes, Housekeeping Actions, Spark Proxy Spell - February 22, 2024

The Governance Facilitators, Sidestream, and Dewiz have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased, as detailed below. 
- Spark Protocol Dai Direct Deposit Module (D3M) parameters will be changed, as detailed below.
- The following housekeeping actions will be carried out:
  - BA Labs DAI and MKR vest streams will be yanked, as detailed below.
  - USDP will be pushed out of the input conduit, as detailed below.
- A Spark Protocol proxy spell will be triggered, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Decreases

**Authorization:** [Ecosystem Approval](http://forum.makerdao.com/t/stability-scope-parameter-changes-9/23688/2)\
**Proposal:** [Forum post "Stability Scope Parameter Changes #9"](https://forum.makerdao.com/t/stability-scope-parameter-changes-9/23688)

If this executive proposal passes, following the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following parameters will be changed:

- Decrease the ETH-A Stability Fee by 0.33 percentage points, from 6.74% to **6.41%**.
- Decrease the ETH-B Stability Fee by 0.33 percentage points, from 7.24% to **6.91%**.
- Decrease the ETH-C Stability Fee by 0.33 percentage points, from 6.49% to **6.16%**.
- Decrease the WSTETH-A Stability Fee by 0.51 percentage points, from 7.16% to **6.65%**.
- Decrease the WSTETH-B Stability Fee by 0.51 percentage points, from 6.91% to **6.40%**.
- Decrease the WBTC-A Stability Fee by 0.02 percentage points, from 6.70% to **6.68%**.
- Decrease the WBTC-B Stability Fee by 0.02 percentage points, from 7.20% to **7.18%**.
- Decrease the WBTC-C Stability Fee by 0.02 percentage points, from 6.45% to **6.43%**.

### SparkLend Dai Direct Deposit Module (D3M) Parameter Changes

**Authorization:** [Ecosystem Approval](https://forum.makerdao.com/t/feb-9-2024-proposed-changes-to-sparklend-for-upcoming-spell/23656/3)\
**Proposal:** [Forum post "[Feb 9, 2024] Proposed Changes to SparkLend for Upcoming Spell"](https://forum.makerdao.com/t/feb-9-2024-proposed-changes-to-sparklend-for-upcoming-spell/23656)

If this executive proposal passes, following the recommendation of Ecosystem Actor Phoenix Labs, the following Spark Protocol Dai Direct Deposit Module (D3M) parameters will be changed:

- Increase the `DIRECT-SPARK-DAI` [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 300 million DAI from 1.2 billion DAI to **1.5 billion DAI**.
- Increase the `DIRECT-SPARK-DAI` [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 20 million DAI from 20 million DAI to **40 million DAI**.
- Increase the `DIRECT-SPARK-DAI` [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) by 12 hours from 12 hours to **24 hours**.
- Increase the `DIRECT-SPARK-DAI` buffer by 20 million DAI from 30 million DAI to **50 million DAI**.
  - The `buffer` value is set in the [SparkLend D3MPlan](https://etherscan.io/address/0x104fadbb7e17db1a685bba61007dfb015206a4d2#code) contract. It controls the target amount of DAI available for borrowing at any given time in SparkLend. For example, if 100 million DAI has been borrowed and the `buffer` is set to 20 million DAI, the D3M will mint enough DAI to ensure that the Total Supply is 120 million DAI and deposit it to SparkLend, assuming there is sufficient available Debt Ceiling.

### Housekeeping Actions

**Authorization:** [Ecosystem Approval](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-02-22/23697/2), [2](http://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-02-22/23697/4)\
**Proposal:** [Forum post "Proposed Housekeeping items (Upcoming Executive Spell - 2024-02-22)"](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-02-22/23697)

#### USDP Input Conduit Management

If this executive proposal passes, following the recommendation of the Governance Facilitators in collaboration with the spell team, the following operations will be performed:

- Raise `PSM-PAX-A` Debt Ceiling to **1,000,000 DAI**
- Call push(uint256 amt) on `MCD_PSM_PAX_A_INPUT_CONDUIT_JAR` with an `amt` of **754,598.72 USDP**
- Call void() on `MCD_PSM_PAX_A_JAR`
- Set `PSM-PAX-A` Debt Ceiling to **0 DAI**

This will have the following net results:

- **Debt Ceiling** remains at **0 DAI** after the transaction has been executed.
- Dai generated from `PSM_PAX_A` increases by **754,598.72 DAI**.
- USDP balance of [MCD_JOIN_PSM_PAX_A](https://etherscan.io/address/0x7bbd8ca5e413bca521c2c80d8d1908616894cf21) increases by **754,598.72 USDP**.
- USDP balance of [PSM_PAX_A_INPUT_CONDUIT_JAR](https://etherscan.io/address/0xda276ab5f1505965e0b6cd1b6da2a18ccbb29515) decreases to **0 USDP**.
- Surplus Buffer increases by **754,598.72 DAI**.


#### Yank BA Labs DAI and MKR Vest Streams

If this executive proposal passes, following the recommendation of the Governance Facilitators, the BA Labs DAI and MKR vest streams will be canceled (yanked), namely:

- yank BA Labs **DAI** stream **20**.
- yank BA Labs **DAI** stream **21**.
- yank BA Labs **MKR** stream **35**.

The reason for this recommendation is that BA Labs will transition to Launch Project funding.

### Trigger Spark Proxy Spell

**Authorization:** [Ecosystem Approval](https://forum.makerdao.com/t/stability-scope-parameter-changes-9/23688/2), [Governance Poll](https://vote.makerdao.com/polling/QmQC1UXZ)\
**Proposal:** [Forum post "Stability Scope Parameter Changes #9"](https://forum.makerdao.com/t/stability-scope-parameter-changes-9/23688), [Forum post "[Feb 14, 2024] Proposed Changes to SparkLend for Upcoming Spell"](https://forum.makerdao.com/t/feb-14-2024-proposed-changes-to-sparklend-for-upcoming-spell/23684)

If this executive proposal passes, the SparkLend Proxy Spell (Ethereum) at [0x5D9406F377e6aFebAE18552806EA327eC7B10000](https://etherscan.io/address/0x5D9406F377e6aFebAE18552806EA327eC7B10000) will be executed, containing the following major items:
- Increase the [wstETH](https://app.spark.fi/reserve-overview/?underlyingAsset=0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0&marketName=proto_spark_v3) [Supply Cap](https://docs.sparkprotocol.io/developers/sparklend/features/supply-borrow-caps#supply-caps) to **1.2 million wstETH**.
- Increase the Spark DAI Effective Borrow APY by 0.24 percentage points, from 6.46% to **6.70%**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
