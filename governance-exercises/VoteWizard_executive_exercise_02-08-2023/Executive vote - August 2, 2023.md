---
title: Template - [Executive Vote] Enhanced Dai Savings Rate Activation, Spark Protocol D3M Parameters Updates, Harbor Trade Credit and New Silver RWA Vault Updates, Q2 2023 AVC Members Compensation, DAO Resolution for Monetalis Clydesdale, Launch Project Funding, Spark Proxy Spell Execution - August 2, 2023
summary: Increase the Dai Savings Rate to 8% with the activation of the Enhanced Dai Savings Rate, increase the Maximum Debt Ceiling for the Spark Protocol D3M, decrease the Debt Ceiling for Harbor Trade Credit (RWA004-A), update the Doc parameter for New Silver (RWA002-A), compensate AVC Members for the second quarter of 2023, distribute funding for the Launch Project, execute a proxy spell for Spark Protocol.
date: 2023-08-02T00:00:00.000Z
address: "0x73603dB34814b22379CeD3d2Cbb450B3968Fd892"

---
# [Executive Proposal] Enhanced Dai Savings Rate Activation, Spark Protocol D3M Parameters Updates, Harbor Trade Credit and New Silver RWA Vault Updates, AVC Member Compensation for Q2 2023, DAO Resolution for Monetalis Clydesdale, Launch Project Funding, Spark Proxy Spell Execution - August 2, 2023

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

- The Enhanced Dai Savings Rate will be activated increasing Dai Savings Rate to 8%, as detailed below.
- The Spark Protocol Dai Direct Deposit Module (D3M) Maximum Debt Ceiling will be increased, as detailed below.
- The Harbor Trade Credit (RWA004-A) vault Debt Ceiling will be decreased and will subsequently transition to a soft liquidation state, as detailed below.
- The New Silver (RWA002-A) RWA Agreement (doc) parameter will be updated, as detailed below.
- The AVC Member Compensation for the Second Quarter of 2023 will be carried out, as detailed below.
- A DAO Resolution for Monetalis Clydesdale (RWA007-A) will be approved, as detailed below.
- **2 million DAI** will be distributed from the Launch Project budget, as detailed below.
- A Spark Protocol proxy spell will be triggered, as detailed below.


**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Enhanced Dai Savings Rate (EDSR) Activation

As per this governance  [poll](https://vote.makerdao.com/polling/QmcTRPLx), modifications have been proposed to the Stability Scope to incorporate details of the [Enhanced Dai Savings Rate (EDSR)](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-).
If this executive proposal passes, the DSR will be updated in accordance with these modifications.

- DSR will be increased by 4.81% from 3.19% to **8%**.

Please review the discussion [thread](https://forum.makerdao.com/t/request-for-gov12-1-2-edit-to-the-stability-scope-to-quickly-implement-enhanced-dsr/21405) and the [modifications](https://github.com/makerdao/mips/pull/938/files) to the Stability Scope to help inform your position before voting.

### Spark Dai Direct Deposit Module (D3M) Parameters Changes

As per this governance [poll](https://vote.makerdao.com/polling/QmSLj3HS), if this executive proposal passes, the following parameter changes to the Spark Protocol DAI Direct Deposit Module (D3M) will take place.

- Spark Protocol D3M (DIRECT-SPARK-DAI) [Maximum Debt Ceiling (line)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 180 million DAI from 20 million DAI to **200 million DAI**.

- Both [Target Available Debt (gap)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) and [Ceiling Increase Cooldown (ttl)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) will continue to be 20 million DAI and 8 hours, respectively.

Please review the discussion [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422) to help inform your position.

For more information regarding the DAI Direct Deposit Module (D3M) and how these parameters interact, check out the forum thread [here](https://forum.makerdao.com/t/discussion-direct-deposit-dai-module-d3m/7357) and the entry in the Operational Manual [here](https://manual.makerdao.com/module-index/module-dai-direct-deposit).

### Harbor Trade Credit (RWA004-A) Parameters Changes

As per this governance [poll](https://vote.makerdao.com/polling/QmR8cYb1), if this executive proposal passes, the following parameter changes and actions to the Harbor Trade Credit (RWA004-A) vault will take place.

- The Harbor Trade Credit (RWA004-A) [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be decreased from 7 million DAI to **zero DAI**.

- `tell` will be called on the RWA Liquidation Oracle for this specific vault type. This action transitions the vault into a “soft liquidation” state, prompting Centrifuge to begin the unwinding process.


Please review the discussion [thread](https://forum.makerdao.com/t/request-to-poll-decrease-debt-ceiling-for-harbor-trade-credit-htc-drop-to-0/21373) for more information.

### New Silver (RWA002-A) Doc Parameter Update

As per this governance [poll](https://vote.makerdao.com/polling/QmaU1eaD#poll-detail), if this executive proposal passes, the following parameter change will take place.

[RWA Agreement (doc)]((https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement)) parameter for the New Silver vault will be updated to `QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1`. The contract documentation linked to this IPFS hash is accessible [here](https://gateway.pinata.cloud/ipfs/QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1).

Subsequent changes approved in the poll, like Debt Ceiling and Stability Fee updates, can only be carried out after the RWA Agreement (doc) is updated.

For a detailed understanding of the new legal agreement, please refer to the discussion [thread](https://forum.makerdao.com/t/rwa-002-new-silver-restructuring-risk-and-legal-assessment/21417).

### AVC Member Compensation for the Second Quarter of 2023

In accordance with the [Atlas](https://mips.makerdao.com/mips/details/MIP101#2-5-10-1) and the [governance scope](https://mips.makerdao.com/mips/details/MIP113), if this executive proposal passes, the following AVC member payments for the second quarter of 2023 will be transferred as detailed in this forum [post](https://forum.makerdao.com/t/avc-member-participation-rewards-q2-2023):


| Member (AVC)                                     | Address                                                                                                                | Amount (MKR) |
|--------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|--------------|
| IamMeeoh (KISS)                                  | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](https://etherscan.io/address/0x47f7A5d8D27f259582097E1eE59a07a816982AE9) | 14.9         |
| ACRE DAOs (Regnerative Finance)                  | [0xBF9226345F601150F64Ea4fEaAE7E40530763cbd](https://etherscan.io/address/0xBF9226345F601150F64Ea4fEaAE7E40530763cbd)  | 14.9         |
| Space Xponential (Regnerative Finance)           | [0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78](https://etherscan.io/address/0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78)  | 11.92        |
| Res (Resiliency)                                 | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784)  | 14.9         |
| LDF (Composable)                                 | [0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50](https://etherscan.io/address/0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50)  | 11.92        |
| opensky (Composable)                             | [0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04](https://etherscan.io/address/0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04)  | 14.9         |
| David Phelps (Composable)                        | [0xd56e3E325133EFEd6B1687C88571b8a91e517ab0](https://etherscan.io/address/0xd56e3E325133EFEd6B1687C88571b8a91e517ab0)  | 8.94         |
| seedlatam.eth (Sovereign Finance)                | [0x0087a081a9b430fd8f688c6ac5dd24421bfb060d](https://etherscan.io/address/0x0087a081a9b430fd8f688c6ac5dd24421bfb060d)  | 11.92        |
| StableLab (Growth)                               | [0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08](https://etherscan.io/address/0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08)  | 14.9         |
| flipsidegov (Growth)                             | [0x300901243d6CB2E74c10f8aB4cc89a39cC222a29](https://etherscan.io/address/0x300901243d6cb2e74c10f8ab4cc89a39cc222a29)  | 14.9         |


This comes to a total of **134.1 MKR**.

### DAO Resolution - Surplus Return Process for Monetalis Clydesdale

Following the approval by the stability scope facilitator in this forum [post](https://forum.makerdao.com/t/clydesdale-quarterly-return-of-surplus-fund/21291), if this executive proposal passes, the following DAO Resolution will be approved:

- The DAO Resolution with IPFS hash `QmaGTVioBsCPfNoz9rbW7LU6YuzfgqHDZd92Hny5ACfL3p`will be approved.

You can access the DAO Resolution document linked to this IPFS hash via this [link](https://gateway.pinata.cloud/ipfs/QmaGTVioBsCPfNoz9rbW7LU6YuzfgqHDZd92Hny5ACfL3p), please review the document and the forum [post](https://forum.makerdao.com/t/clydesdale-quarterly-return-of-surplus-fund/21291) for more information.

### Launch Project Funding

As per this forum [post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/) and the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget), if this executive proposal passes, the following transfer will take place:

- **2 million DAI** will be transferred to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

This allocation is consistent with the previously approved [Launch Project budget ](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget).

### Spark Proxy Spell

As per this governance [poll](https://vote.makerdao.com/polling/QmZyFH21) and the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-), if this executive proposal passes, a proxy spell for Spark Protocol at [0x443f3f4328553f5f85dFc0BA3D59969708201E14](https://etherscan.io/address/0x443f3f4328553f5f85dFc0BA3D59969708201E14) will be executed with the following changes:

#### DAI InterestRateStrategy Update

In response to the DSR rate's increase to 8% subsequent to the EDSR's introduction, a new Dai InterestRateStrategy will be activated. This strategy will track the ETH-C stability fee for the borrow rate of Dai in the Spark Protocol, diverging from its previous alignment with the DSR rate. This update is inline with the Stability Scope, which specifies that fees should remain unaffected by the EDSR.

#### Spark Protocol Parameter Changes

- The DAI market [Loan-To-Value (LTV)](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value) will be decreased from 74% to **0.01%**.
- The DAI market [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold) will be decreased from 76% to **0.01%**.

This will effectively remove DAI as a collateral type, ensuring that there won’t be a situation where the market is at 100% utilization and liquidations on the short positions need to be done. This is particularly important because the sDAI market is frozen, meaning that the only way to short is through the DAI market. Keep in mind that since DAI has active suppliers, LTV can’t be set to zero, this means that usageAsCollateralEnabled will still be true.

- The WETH market [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor_) will be decreased by 10% from 15% to **5%**.

This will reduce the protocol fee taken on the ETH market giving suppliers a larger APY.

- The WETH market [varialeRateSlope1](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) will be decreased by 0.8% from 3.8% to **3%**.

This is sets the optimal borrow rate at 4%, based on the **variableRateSlope1** change and baseVariableRate being at 1%. This change will ensure a more healthy utilization near the kink to improve supplier return and incentivize more deposits.

Please review the discussion [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422) for more information.


## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).