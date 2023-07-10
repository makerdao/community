---
title: Template - [Executive Vote] Deploy new Flapper, Facilitator parameter changes, budget items, Aligned Delegate Compensation, Spark Protocol proxy-spell, Andromeda multi-swap output conduit, DssCron housekeeping  - July 12, 2023
summary: Initiate new Flapper with initial parameters, recommended parameter changes from Responsible Facilitators including step one of Curve stETH/ETH pool vault offboarding, Core Unit Vesting for DUX-001 and DECO-001 + Jetstream and Chronicle streams, latest Aligned Delegate Compensation, trigger Spark proxy-spell, BlockTower/Andromeda (RWA015-A) output conduit change for multi-swap, adding current state of DssCron to Chainlog. 
date: 2023-07-12T00:00:00.000Z
address: "$spell_address"
---
# [Executive Proposal] Deploy new Flapper, Facilitator parameter changes, budget items, Aligned Delegate Compensation, Spark Protocol proxy-spell, Andromeda multi-swap output conduit, DssCron housekeeping  - July 12, 2023

The Governance Facilitators and [Dewiz](https://dewiz.xyz/) have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **major changes** will occur within the Maker Protocol:
- Deploy new Flapper with Uniswap v2 pool and initial parameters.
- Recommended Parameter Changes from Responsible Facilitators changes to the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) , [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio), [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling), [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), and step 1 of offboarding Curve stETH/ETH Vault.
- Budget stream management and distribution, as detailed below.
- Latest distribution of Aligned Delegate MKR. 

If this executive proposal passes, the following **minor changes** will be made to the Maker Protocol:
- Pass Spark proxy-spell, with the effects detailed below .
- Update Blocktower/Andromeda (RWA015-A) Multiswap Output Conduit.
- Add Chainlog records for DssCron Housekeeping. 

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Deploy New Flapper

As per this [forum post](https://forum.makerdao.com/t/project-andromeda-full-deployment/21278), which was approved by this [poll](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201) a new version of the Flapper will be deployed utilizing a Uniswap v2 pool and changes to Maker parameters below, if this executive proposal passes.

- Deprecate MCD_FLAP and remove MCD_FLAP from chainlog
- Deploy FlapperUniV2
- Reduce vow.hump by 200 million DAI from 250 million DAI to **50 million DAI**
- Reduce vow.bump by 25,000 DAI from 30,000 DAI to **5,000 DAI**
- Set hop to **1,577 seconds**
- Set want to **0.98**
- Set receiver to MCD_PAUSE_PROXY
- Set pip to 0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df 

For more information please see the new Flapper contents [here](https://github.com/makerdao/dss-flappers/blob/univ2/README.md).

### Recommended Parameter Changes

As per this [forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238/6), the following parameter changes as well as the first step of offboarding the Curve stETH/ETH Vault will take place if this executive proposal passes. 

#### DSR Update

- Reduce [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) by 0.30% from 3.49% to **3.19%**

#### Liquidation Ratio Changes

- Reduce WSTETH-A  [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 10% from 160% to **150%**
- Reduce WSTETH-B  [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 10% from 185% to **175%**
- Reduce RETH-A [Liquidation Ratios (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 20% from 170% to **150%**

#### Stability Fee Changes

- Reduce the ETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.30% from 3.74% to **3.44%**
- Reduce the ETH-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 4.24% to **3.94%**
- Reduce the ETH-C [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 3.49% to **3.19%**
- Reduce the WSTETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.30% from 3.74% to **3.44%**
- Reduce the WSTETH-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 3.49% to **3.19%**
- Reduce the RETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.30% from 3.74% to **3.44%**
- Reduce the WBTC-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.11% from 5.80% to **5.69%**
- Reduce the WBTC-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.11% from 6.30% to **6.19%**
- Reduce the WBTC-C [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee)  by 0.11% from 5.55% to **5.44%**

#### Curve stETH/ETH Initial Offboarding Parameters 

- Set CRVV1ETHSTETH-A  [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to **0**.
- Remove CRVV1ETHSTETH-A from [Debt Ceiling Instant Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam).

### Budget Items and Housekeeping

As per this [forum post](https://forum.makerdao.com/t/mip39c3-sp9-removing-dux-001/21306) and this [poll](https://vote.makerdao.com/polling/QmdnSKPu) the following budget actions will take place if this executive vote passes.


## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
