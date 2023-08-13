---
title: Template - [Executive Vote] Enhanced Dai Savings Rate Activation, Spark Protocol Debt Ceiling Increase, Set Harbor Trade Debt Ceiling to Zero, AVC Members Rewards for Q2, DAO Resolution for Monetalis Clydesdale and Other Actions - August 2, 2023
summary: Activate Enhanced Dai Savings Rate; increase Spark Protocol D3M Debt Ceiling; set Harbor Trade Credit Debt Ceiling to zero; AVC Members Rewards for Q2 2023; DAO Resolution for Monetalis Clydesdale JAT1 Surplus Return; Spark Protocol Proxy Spell Execution; distribute Launch Project funding; update New Silver RWA Agreement parameter.  
date: 2023-08-02T00:00:00.000Z
address: "$spell_address"



---

# [Executive Proposal] Enhanced Dai Savings Rate Activation, Spark Protocol Debt Ceiling Increase, Set Harbor Trade Debt Ceiling to Zero, AVC Members Rewards for Q2, DAO Resolution for Monetalis Clydesdale and Other Actions - August 2, 2023

The Governance Facilitators, Dewiz, Sidestream and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following actions within the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- The Enhanced Dai Savings Rate (EDSR) will be activated, increasing the DSR to 8%.
- The Spark Protocol Dai Direct Deposit Module (D3M) Maximum Debt Ceiling will be increased to 200 million DAI. 
- The Harbor Trade Credit vault's Debt Ceiling will be set to zero DAI, and the vault will be put into soft liquidation. 
- AVC Members' Participation Rewards for Q2 will be distributed. 
- A DAO Resolution pertaining to the Monetalis Clydesdale James Asset Trust 1 (JAT1) structure will be approved. 
- A Spark Protocol Proxy Spell will be triggered to implement changes to the DAI interest rate strategy, WETH market parameters and DAI market parameters.
- 2 million DAI of Launch Project funds will be distributed to a wallet controlled by the Accessibility Scope Facilitator for growth and marketing expenses.
- The New Silver vault's RWA Agreement parameter will be updated. 

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the actions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

For voters' convenience, each proposed item is prefaced with links showing its provenance. "Authorization" links to the document(s) authorizing the proposed item's inclusion in the Executive Vote; this can be a governance poll, the Atlas and/or a Scope Alignment Artifact. "Reasoning" links to a MakerDAO Forum post providing the rationale and additional context for each item. Where needed, "Authorizing Parties" may also be listed; these may include the responsible Scope Facilitator and/or Scope Advisory Council members.

### Enhanced Dai Savings Rate (EDSR) Activation

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmcTRPLx)\
*Reasoning*: Rune's [Forum post](https://forum.makerdao.com/t/request-for-gov12-1-2-edit-to-the-stability-scope-to-quickly-implement-enhanced-dsr/21405)

The [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#0-the-stability-scope) was recently amended to add a temporary [Enhanced Dai Savings Rate (EDSR)](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-) system aimed at boosting Dai demand. The EDSR is determined based on the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) and DSR utilization rate. If this executive proposal passes, the following action will occur:

-  The Dai Savings Rate (DSR) will be increased by 4.81% from 3.19% to **8%**. 

8% is the EDSR's upper limit, as prescribed in the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#3-2-2-1-edsr-upper-limit). Over time, as DSR utilization increases, the effective DSR will be adjusted downward.

### Spark Protocol Dai Direct Deposit Module (D3M) Maximum Debt Ceiling Increase

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmSLj3HS)\
*Reasoning*: Phoenix Labs' [Forum post](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422)

The proposed action concerns increasing the Spark D3M [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) parameter to prepare for the implementation of the [EDSR](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-) and allow new users to onboard onto the lending market. The [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) and [Ceiling Increase Cooldown](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) parameters will remain the same at 20 million DAI and 8 hours, respectively. If this executive proposal passes, the following action will occur:

- The Spark Protocol D3M (DIRECT-SPARK-DAI) Maximum Debt Ceiling will be increased from 20 million DAI to **200 million DAI**.

### Harbor Trade Credit (RWA004-A) Vault - Updates to Prevent Additional Borrowing

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmR8cYb1)\
*Reasoning*: Strategic Finance Core Unit's [Forum post](http://forum.makerdao.com/t/request-to-poll-decrease-debt-ceiling-for-harbor-trade-credit-htc-drop-to-0/21373)\
*Authorizing parties*:  [Dewiz and Strategic Finance Core Unit](http://forum.makerdao.com/t/request-to-poll-decrease-debt-ceiling-for-harbor-trade-credit-htc-drop-to-0/21373/9) 

In April 2023, the loans backing the Harbor Trade Credit vault defaulted. Approximately 1.5 million DAI is outstanding from the vault. If this executive proposal passes, the following actions will occur to prevent additional borrowing from the vault:

- The Harbor Trade Credit vault Debt Ceiling will be decreased from 7 million DAI to **zero DAI**.
- `tell` will be called on the RWA Liquidation Oracle to place the vault into soft-liquidation state.

### Aligned Voter Committee (AVC) Member Participation Rewards for Q2 2023

*Authorization*: [Atlas](https://mips.makerdao.com/mips/details/MIP101#2-5-10-avc-member-participation-rewards); [Governance Scope Artifact](https://mips.makerdao.com/mips/details/MIP113#0-the-governance-scope)\
*Reasoning & authorizing party*: Governance Facilitator's [Forum post](http://forum.makerdao.com/t/avc-member-participation-rewards-q2-2023/21459)

AVC Members are MKR holders who organize into Voter Committees for the purpose of participating in Governance. This is the very first distribution of AVC Member Participation Rewards, which are to be paid on a quarterly basis. The total compensation to be distributed to AVC Members for Q2 will be **134.1 MKR**. If this executive proposal passes, the compensation will be distributed as seen below:

| AVC Member       | Address                                                      | Amount (MKR) |
| ---------------- | ------------------------------------------------------------ | ------------ |
| IamMeeoh         | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](https://etherscan.io/address/0x47f7a5d8d27f259582097e1ee59a07a816982ae9) | 14.90        |
| ACRE DAOs        | [0xBF9226345F601150F64Ea4fEaAE7E40530763cbd](https://etherscan.io/address/0xBF9226345F601150F64Ea4fEaAE7E40530763cbd) | 14.90        |
| Space Xponential | [0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78](https://etherscan.io/address/0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78) | 11.92        |
| Res              | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784) | 14.90        |
| LDF              | [0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50](https://etherscan.io/address/0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50) | 11.92        |
| opensky          | [0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04](https://etherscan.io/address/0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04) | 14.90        |
| David Phelps     | [0xd56e3E325133EFEd6B1687C88571b8a91e517ab0](https://etherscan.io/address/0xd56e3E325133EFEd6B1687C88571b8a91e517ab0) | 8.94         |
| seedlatam.eth    | [0x0087a081a9b430fd8f688c6ac5dd24421bfb060d](https://etherscan.io/address/0x0087a081a9b430fd8f688c6ac5dd24421bfb060d) | 11.92        |
| StableLab        | [0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08](https://etherscan.io/address/0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08) | 14.9         |
| flipsidegov      | [0x300901243d6CB2E74c10f8aB4cc89a39cC222a29](https://etherscan.io/address/0x300901243d6CB2E74c10f8aB4cc89a39cC222a29) | 14.9         |



### DAO Resolution for Monetalis Clydesdale James Asset Trust 1 (JAT1) Arrangement Surplus Return 

*Reasoning*: Monetalis' [Forum post](http://forum.makerdao.com/t/clydesdale-quarterly-return-of-surplus-fund/21291)\
*Authorizing party*: [Stability Scope Facilitator](http://forum.makerdao.com/t/clydesdale-quarterly-return-of-surplus-fund/21291/8)

As of Q2 2023, the Monetalis Clydesdale JAT1 Arrangement has a surplus of approximately $6.8M to return to the MakerDAO Surplus Buffer. Monetalis seeks approval via a DAO Resolution to execute this latest Surplus Return Process. If this executive proposal passes, the following actions will occur:

- The DAO Resolution will be approved, with IPFS hash [QmaGTVioBsCPfNoz9rbW7LU6YuzfgqHDZd92Hny5ACfL3p](https://gateway.pinata.cloud/ipfs/QmaGTVioBsCPfNoz9rbW7LU6YuzfgqHDZd92Hny5ACfL3p).
- The JAT1 Trustees will be instructed to sell a portion of ETF holdings and return the proceeds to the Surplus Buffer per Monetalis' Forum post, linked above.

### Spark Protocol Proxy Spell Execution

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmZyFH21)\
*Reasoning*: Phoenix Labs' [Forum Post](http://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422)

Several changes to the Spark Protocol lending market have been proposed to prepare for the implementation of the [EDSR](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-). If this executive proposal passes, a Proxy Spell for Spark Protocol will be triggered at [0x443f3f4328553f5f85dFc0BA3D59969708201E14](https://etherscan.io/address/0x443f3f4328553f5f85dFc0BA3D59969708201E14) (mainnet); and the Proxy Spell will execute the following changes previously approved by Maker Governance:

#### DAI Interest Rate Strategy Change

- The DAI market interest rate will track the ETH-C stability fee instead of the Enhanced DSR rate. 

Per the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#14-3-3), the ETH-C stability fee equals the underlying DSR. Therefore, this proposed Interest Rate Strategy accords with the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#3-2-2-enhanced-dai-savings-rate-edsr-)'s specification that parameters and mechanisms that are normally dependent on the DSR are not to be affected by the EDSR, but only by the underlying DSR. 

#### DAI Market Parameter Changes

- DAI market `Loan To Value` will be set to 0.01%.
- DAI market `Liquidation Threshold` will be set to 0.01%.

Since the sDAI market is frozen, the only way to short is through the DAI market. These proposed changes will effectively remove DAI as a collateral type, ensuring there won’t be a situation where the market is at 100% utilization and liquidations on the short positions need to be done.

#### WETH Market Parameter Changes

- WETH market `reserveFactor` will be set to 5%. This will reduce the protocol fee taken on the ETH market to give suppliers a larger APY.
- WETH market `variableRateSlope1` will be set to 3%. This will ensure a healthier utilization near the kink to improve supplier return and incentivize more deposits.

### Launch Project Funding Distribution

*Authorization*: [Accessibility Scope Artifact](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget)\
*Reasoning & authorizing party*: Accessibility Scope Facilitator's [Forum post](http://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468)

[Launch Project](http://forum.makerdao.com/t/the-launch-project-and-scope-artifact-update-proposal/21048?) funding was previously approved as part of the ratification of the Accessibility Scope. The Accessibility Scope Facilitator now seeks to establish a wallet to hold 2 million DAI of Launch Project funds. This will allow the Facilitator to more efficiently access funds to carry out work related to the MakerDAO rebranding, Easy Governance Frontend and other growth/marketing expenses. If this executive proposal passes, the following action will occur:

- **2 million DAI** of Launch Project funds will be transferred to wallet [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F), controlled by the Accessibility Scope Facilitator.

### New Silver (RWA002-A) Vault - Update RWA Agreement Parameter

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmaU1eaD#vote-breakdown)\
*Reasoning*: Strategic Finance Core Unit's [Forum post](http://forum.makerdao.com/t/rwa-002-new-silver-restructuring-risk-and-legal-assessment/21417)\
*Additional authorizing party*: [Dewiz](http://forum.makerdao.com/t/rwa-002-new-silver-restructuring-risk-and-legal-assessment/21417/15)

The restructuring and parameter changes of [New Silver’s existing vault](https://forum.makerdao.com/t/ns-drop-collateral-onboarding-risk-evaluation/5418) have necessitated updates to the underlying legal documentation. In turn, this requires updating the [RWA Agreement](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter that stores an IPFS hash of the legal documentation. If this executive proposal passes, the following action will occur:

- The RWA Agreement parameter will be updated to QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1. View the IPFS hash [here](https://gateway.pinata.cloud/ipfs/QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1). 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).