---
title: Template - [Executive Vote] Enhanced Dai Savings Rate Activation, Spark Protocol Debt Ceiling Increase, RWA Vault Updates, AVC Member Compensation for Q2 2023, DAO Resolution for Monetalis Clydesdale, Launch Project Funding, Spark Proxy Spell Execution - August 2, 2023
summary: Increase the Dai Savings Rate to the Enhanced Dai Savings Rate, increase the Maximum Debt Ceiling for the Spark Protocol D3M, Debt Ceiling reduction for Harbor Trade Credit (RWA004-A), update the doc parameter for New Silver (RWA002-A), AVC Member compensation for Q2 2023, distribute funding for the Launch Project, execute a proxy spell for Spark Protocol.
date: 2023-08-02T00:00:00.000Z
address: "0x73603dB34814b22379CeD3d2Cbb450B3968Fd892"

---
# [Executive Proposal] Enhanced Dai Savings Rate Activation, Spark Protocol Debt Ceiling Increase, RWA Vault Updates, AVC Member Compensation for Q2 2023, DAO Resolution for Monetalis Clydesdale, Launch Project Funding, Spark Proxy Spell Execution - August 2, 2023

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Dai Savings Rate will be increased to 8%, as detailed below.
- The Spark Protocol Dai Direct Deposit Module Maximum Debt Ceiling will be increased, as detailed below.
- Changes will be made to the Harbor Trade Credit (RWA004-A) vault, as detailed below.
- The New Silver (RWA002-A) RWA Agreement (`doc`) parameter will be updated, as detailed below.
- A total of **134.1 MKR** will be distributed to 10 AVC members, as detailed below.
- A DAO Resolution for the Monetalis Clydesdale (RWA007-A) structure will be approved, as detailed below.
- **2,000,000 DAI** will be distributed from the Launch Project budget, as detailed below.
- A Spark Protocol proxy spell will be triggered, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Enhanced Dai Savings Rate (DSR) Activation

As per this successful governance [poll](https://vote.makerdao.com/polling/QmcTRPLx), the Stability Scope has been amended to include articles describing an [Enhanced Dai Savings Rate (EDSR)](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-). To meet the requirements set by these articles, the DSR will be updated if this executive proposal passes.

- The DSR will be increased by 4.81% from 3.19% to **8%**.

Please review the forum [thread](https://forum.makerdao.com/t/request-for-gov12-1-2-edit-to-the-stability-scope-to-quickly-implement-enhanced-dsr/21405) for more information about this change.

### Spark Dai Direct Deposit Module (D3M) Parameter Change

Per this successful governance [poll](https://vote.makerdao.com/polling/QmSLj3HS), the Spark Protocol D3M will be updated if this executive proposal passes.

- The Spark Protocol D3M (DIRECT-SPARK-DAI) [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 180 million DAI from 20 million DAI to **200 million DAI**.

The [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) and the [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) will remain unchanged at 20 million DAI and 8 hours respectively.

Please review the forum [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422) for more information about this change.

### Harbor Trade Credit (RWA004-A) Changes

As per this successful governance [poll](https://vote.makerdao.com/polling/QmR8cYb1), the following changes to the Harbor Trade Credit (RWA004-A) vault will be made if this executive proposal passes.

- Decrease the RWA004-A [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) by 7 million DAI from 7 million DAI to **0 DAI**.
- `tell` will be called on the RWA Liquidation Oracle for the RWA004-A vault. This will place the vault into a soft liquidation state. This is a technical requirement for Centrifuge to commence the unwinding process.

*Implementation note*: since the debt owed by the vault will not change as a result of these actions, the [Global Debt Ceiling](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling) will not be reduced, this course of action was recommend by the technical teams crafting the executive proposal.

Please review the forum [thread](https://forum.makerdao.com/t/request-to-poll-decrease-debt-ceiling-for-harbor-trade-credit-htc-drop-to-0/21373) for more information about this change.

### New Silver (RWA002-A) Doc Update

Per this governance [poll](https://vote.makerdao.com/polling/QmaU1eaD), the [RWA Agreement (`doc`)]((https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement)) parameter for the New Silver vault will be updated if this executive proposal passes.

- The RWA002-A RWA Agreement (`doc`) will be updated to `QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1` - the new `doc` may be viewed [here](https://gateway.pinata.cloud/ipfs/QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1).

This update to the RWA Agreement constitutes a new legal agreement with New Silver as detailed in this forum [thread](https://forum.makerdao.com/t/rwa-002-new-silver-restructuring-risk-and-legal-assessment/21417). Only once the RWA Agreement (`doc`) has been updated, can the other approved changes, including Debt Ceiling and Stability Fee updates, be actioned.

### AVC Member Compensation for Q2 2023

As per [The Atlas](https://mips.makerdao.com/mips/details/MIP101) and [Governance Scope](https://mips.makerdao.com/mips/details/MIP113), the Governance Facilitators have published the details of AVC Member compensation for Q2 2023 [here](https://forum.makerdao.com/t/avc-member-participation-rewards-q2-2023/21459). The following payments will be distributed if this executive proposal passes.

| AVC Member Name  | Address                                                                                                                | AVC                 | Amount (MKR) |
|------------------|------------------------------------------------------------------------------------------------------------------------|---------------------|--------------|
| IamMeeoh         | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](]https://etherscan.io/address/0x47f7A5d8D27f259582097E1eE59a07a816982AE9) | KISS                | 14.9         |
| ACRE DAOs        | [0xBF9226345F601150F64Ea4fEaAE7E40530763cbd](https://etherscan.io/address/0xBF9226345F601150F64Ea4fEaAE7E40530763cbd)  | Regnerative Finance | 14.9         |
| Space Xponential | [0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78](https://etherscan.io/address/0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78)  | Regnerative Finance | 11.92        |
| Res              | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784)  | Resiliency          | 14.9         |
| LDF              | [0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50](https://etherscan.io/address/0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50)  | Composable          | 11.92        |
| opensky          | [0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04](https://etherscan.io/address/0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04)  | Composable          | 14.9         |
| David Phelps     | [0xd56e3E325133EFEd6B1687C88571b8a91e517ab0](https://etherscan.io/address/0xd56e3E325133EFEd6B1687C88571b8a91e517ab0)  | Composable          | 8.94         |
| seedlatam.eth    | [0x0087a081a9b430fd8f688c6ac5dd24421bfb060d](https://etherscan.io/address/0x0087a081a9b430fd8f688c6ac5dd24421bfb060d)  | Sovereign Finance   | 11.92        |
| StableLab        | [0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08](https://etherscan.io/address/0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08)  | Growth              | 14.9         |
| flipsidegov      | [0x300901243d6CB2E74c10f8aB4cc89a39cC222a29](https://etherscan.io/address/0x300901243d6cb2e74c10f8ab4cc89a39cc222a29)  | Growth              | 14.9         |

This comes to a total of **134.1 MKR**.

### DAO Resolution

As per this forum [post](https://forum.makerdao.com/t/clydesdale-quarterly-return-of-surplus-fund/21291) that has been approved by the Stability Scope Facilitators, the following DAO Resolution will be approved if this executive proposal passes.

- The DAO Resolution with the IPFS hash `QmaGTVioBsCPfNoz9rbW7LU6YuzfgqHDZd92Hny5ACfL3p` will be approved by MakerDAO - the DAO Resolution may be viewed [here](https://gateway.pinata.cloud/ipfs/QmaGTVioBsCPfNoz9rbW7LU6YuzfgqHDZd92Hny5ACfL3p).

In summary, this will instruct the trustees of the Monetalis Clydesdale (RWA007-A) JAT1 arrangement to sell a portion of ETF holdings and return the profits to the MakerDAO surplus buffer via the input conduit smart contract.

### Launch Project Funding

As per this forum [post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468) from the Accessibility Scope Facilitators and the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget), the following DAI transfer from the Launch Project budget will take place, if this executive proposal passes.

- 2 million DAI will be transferred to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

This funding is already approved as part of the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget) and will be used to distribute funds as part of the Endgame Launch Project.

### Spark Proxy Spell

As part of this executive proposal, a Proxy Spell for Spark Protocol at [0x443f3f4328553f5f85dFc0BA3D59969708201E14](https://etherscan.io/address/0x443f3f4328553f5f85dFc0BA3D59969708201E14) will be triggered if this executive proposal passes.

This Proxy Spell includes the following changes to Spark Protocol:

#### DAI InterestRateStrategy Update

- A new DAI_interestRateStrategy will be implemented to tie the borrow rate of Dai to the ETH-C Stability Fee. At present, the Spark Protocol DAI borrow rate is tied to the DSR set by the Maker Protocol. When the EDSR is activated, this would cause the Spark borrow rate to increase to 8%. The Stability Scope specifies that fees are not impacted by the EDSR and should be calculated as before. The ETH-C stability fee equals the underlying DSR, making it an appropriate reference for Spark Protocol.

#### Spark Protocol Parameter Changes

Per this successful governance [poll](https://vote.makerdao.com/polling/QmZyFH21), the following parameter changes will be made to Spark Protocol.

- The DAI market [Loan-To-Value (LTV)](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value) will be decreased from 74% to **0.01%**.
- The DAI market [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold) will be decreased from 76% to **0.01%**.

These changes will effectively remove DAI as a collateral type, ensuring that there won’t be a situation where the market is at 100% utilization and liquidations on the short positions need to be done. This is particularly important because the sDAI market is frozen, meaning that the only way to short is through the DAI market. Keep in mind that since DAI has active suppliers, LTV can’t be set to zero, this means that usageAsCollateralEnabled will still be true.

- The WETH market [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor_) will be decreased by 10% from 15% to **5%**.

This will reduce the protocol fee taken on the ETH market giving suppliers a larger APY.

- The WETH market [varialeRateSlope1](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) will be decreased by 0.8% from 3.8% to **3%**.

This is sets the optimal borrow rate at 4%, based on the variableRateSlope1 change and baseVariableRate being at 1%. This change will ensure a more healthy utilization near the kink to improve supplier return and incentivize more deposits.

Please review the forum [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422) for more information about these changes.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
