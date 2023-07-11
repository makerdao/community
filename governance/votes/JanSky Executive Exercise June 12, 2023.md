---
title: Template - [Executive Vote] Activate new Flapper, initiate Curve ETH-stETH offboarding, Facilitator parameter changes, Spark Protocol proxy spell, budget actions, Aligned Delegate compensation, Andromeda housekeeping, DssCron Chainlog housekeeping - July 12, 2023
summary: Deploy new Flapper with initial parameters for UniswapV2, step 1 of CRVV1ETHSTETH-A offboarding with initial parameters, recommended parameter changes from Responsible Facilitators, freeze sDAI market on Spark Protocol, June Aligned Delegate compensation, budget implementation for Chronicle and Jetstream; MKR vesting for Development and UX and Deco Core Units, update RWA015-A output conduit, update Chainlog to sync with DssCron addresses.
date: 2023-07-12T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Activate new Flapper, initiate Curve ETH-stETH offboarding, Facilitator parameter changes, Spark Protocol proxy spell, budget actions, Aligned Delegate compensation, Andromeda housekeeping, DssCron Chainlog housekeeping - July 12, 2023

The Governance Facilitators and [dewiz](https://dewiz.xyz/) have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **major items** will occur within the Maker Protocol:
- A new Flapper (MKR burn engine) will be deployed with initial parameters to interact with a Uniswap v2 pool, as detailed below.
- Curve ETH/stETH offboarding step one will be initiated, with changes to [Debt Ceiling Instant Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam) as described below.
- Recommended parameter changes from Responsible Facilitators will be executed, including changes to the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate), [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio), and [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), as described below.
- A proxy spell, freezing the sDAI market for Spark Protocol, will be executed, as detailed below.

If this executive proposal passes, the following **minor items** will be made to the Maker Protocol:
- Actions for budget stream management and distribution will take place, as detailed below.
- 229.44 MKR will be distributed to Aligned Delegates for their June performance. 
- RWA Housekeeping will be performed for Andromeda (RWA015-A) enabling the multi-swap conduit, as detailed below.
- DssCron HouseKeeping will be performed to update the Chainlog with all used DssCron addresses, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Major Proposal Details

### New Flapper Initiation

As per this forum [post](https://forum.makerdao.com/t/project-andromeda-full-deployment/21278) and this [poll](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201) a new version of the Flapper (MKR burn engine) will be activated, if this executive proposal passes.

This implementation uses several familiar parameters applied at different settings to accommodate for swaps on Uniswap v2. Significant changes are listed below:
- **Reduce vow.hump by 200 million DAI** from 250 million DAI to **50 million DAI**
- **Reduce vow.bump by 25,000 DAI** from 30,000 DAI to **5,000 DAI**
- **Set hop to 26 minutes, 17 seconds**
- **Set want to 0.98**

For more information please the full set of actions listed in the "Contract" section of the spell address listed above. The new Flapper repo can be found [here](https://github.com/makerdao/dss-flappers/blob/univ2/README.md).

### Initiate Curve ETH/stETH Offboarding Parameters

As per this [Atlas MIP-62](https://mips.makerdao.com/mips/details/MIP62) the first step off collateral offboarding will take place for CRVV1ETHSTETH-A based on a request from a Responsible Facilitator [here](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6), if this executive proposal passes. 

The CRVV1ETHSTETH-A [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will accordingly be set to **0**.

### Responsible Facilitator Parameter Change Recommendations

As per this forum [post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6) from a Responsible Facilitator, the following Risk Parameter updates will take place, if this executive proposal passes.

#### DSR Update

**Reduce the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) by 0.30%** from 3.49% to **3.19%**

#### [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) Changes

| Vault    | Current LR | Proposed LR |
|----------|------------|-------------|
| WSTETH-A | 160%       | **150%**    |
| WSTETH-B | 185%       | **175%**    |
| RETH-A   | 170%       | **150%**    |


#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), and [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) Changes

| Vault    | Current SF | Proposed SF |
|----------|------------|-------------|
| ETH-A    | 3.74%      | **3.44%**   |
| ETH-B    | 4.24%      | **3.94%**   |
| ETH-C    | 3.49%      | **3.19%**   |
| WSTETH-A | 3.74%      | **3.44%**   |
| WSTETH-B | 3.49%      | **3.19%**   |
| RETH-A   | 3.74%      | **3.44%**   |
| WBTC-A   | 5.80%      | **5.69%**   |
| WBTC-B   | 6.30%      | **6.19%**   |
| WBTC-C   | 5.55%      | **5.44%**   |

### Spark Protocol Proxy Spell

As per this forum [post](https://forum.makerdao.com/t/freeze-the-sdai-market-on-spark/21322), a proxy spell will be executed to freeze the sDAI market on Spark Protocol, if this executive proposal passes.

"The purpose of this update is to restrict sDAI as collateral to only short ETH and staked ETH. Freezing a market prevents new deposits, but users are always free to repay/withdraw."

Spell code for the proxy spell can be found at [0x843A0539Ca7466Abcb769f1c1d30C8423e13A297](https://etherscan.io/address/0x843A0539Ca7466Abcb769f1c1d30C8423e13A297#code).

## Minor Proposal Details

### Budget Management Actions

### June Awards for Aligned Delegates

### Andromeda Output Conduit

### DssCron Chainlog Housekeeping

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
