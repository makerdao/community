# Maker Executive Aug 2 2023

# [Executive Proposal] DSR Increase, Spark D3M Changes, Harbor Trade Credit (RWA004-A) Changes, New Silver (RWA002-A) Changes, Launch Project Funding, AVC Member Participation Rewards, Clydesdale Quarterly Surplus Return - August 2, 2023

The Governance Facilitator(s), AmusingAxl, Sidestream and Arby have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

- Increase the Dai Savings Rate (DSR) by 4.81% from 3.19% to 8%.
- Increase the DIRECT-SPARK-DAI Maximum Debt Ceiling by 180 million DAI from 20 million DAI to 200 million DAI, as described below.
- Set Spark Protocol DAI market Interest Strategy to track the ETH-C stability fee instead of the DSR rate as described below.
- Set Spark Protocol DAI market Loan-To-Value (LTV) and Liquidation Threshold to 0.01% as described below.
- Set Spark Protcol WETH market Reserve Factor to 5% as described below.
- Set Spark Protocol WETH market Variable Rate Slope 1 to 3% as described below.
- Decrease Harbor Trade Credit Vault (RWA004-A) Debt Ceiling as detailed below.
- Increase New Silver (RWA002-A) Debt Ceiling and Stability Fee as described below.
- A MakerDAO Resolution will be approved to initiate a Clydesdale quarterly surplus return as described below.
- Distribute **2,000,000 DAI** for Launch Project funding as described below.
- Distribute **134.1 MKR** for Q2 AVC Member Participation Rewards as described below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Dai Savings Rate Increase

In alignment with the recently approved [Enhanced Dai Savings Rate (EDSR)](https://vote.makerdao.com/polling/QmcTRPLx#poll-detail) system, the following changes to the [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) will be made:

- The DSR will be increased by 4.81% from 3.19% to 8%

### Spark D3M Changes

In preparation for the implementation of the Enhanced DSR policy, Phoenix Labs proposes several changes to the Spark Protocol lending market. Please review the discussion [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422) to help inform your position before voting.

#### Debt Ceiling Increase

As per this [poll](https://vote.makerdao.com/polling/QmR8cYb1#poll-detail) the following changes to the Spark Protocol DAI Direct Deposit Module (D3M), will be made, if this executive proposal passes:

- The DIRECT-SPARK-DAI [Maximum Debt Ceiling (line)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 180 million DAI from 20 million DAI to 200 million DAI

#### Spark Proxy Spell

As per this [poll](https://vote.makerdao.com/polling/QmZyFH21#poll-detail) the following changes to the Spark Protocol DAI Direct Deposit Module (D3M) will be made via Spark Protocol proxy spell defined at [0x443f3f4328553f5f85dFc0BA3D59969708201E14](https://etherscan.io/address/0x443f3f4328553f5f85dFc0BA3D59969708201E14#code).

If this executive proposal passes, the spell will execute resulting in the following changes:

- The new DAI market Interest Strategy will be set to track the ETH-C stability fee instead of the DSR rate.
- The DAI market [Loan-To-Value (LTV)](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value) and [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold) will be set to 0.01% - This will effectively remove DAI as a collateral type.
- The WETH market [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor) will be set to 5% - This will reduce the protocol fee taken on the ETH market giving suppliers a larger APY.
- The WETH market [Variable Rate Slope](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) 1 will be set to 3% - This sets the optimal borrow rate at 4%, based on the `variableRateSlope1` change and `baseVariableRate` being at 1%.

### Harbor Trade Credit Vault (RWA004-A) Debt Ceiling and tell Call

As per this [poll](https://vote.makerdao.com/polling/QmR8cYb1#poll-detail) the following changes to the Harbor Trade Credit Vault (RWA004-A) Debt Ceiling parameters will be made, if this executive proposal passes:

- The Debt Ceiling will be decreased by 7 million DAI from 7 million DAI to 0 DAI.

In addition, `tell` will be called on the RWA Liquidation Oracle for this vault type; this places the vault into a “soft liquidation” and is a technical requirement for Centrifuge to commence the unwinding process.

Please review the discussion [thread](https://forum.makerdao.com/t/request-to-poll-decrease-debt-ceiling-for-harbor-trade-credit-htc-drop-to-0/21373) to help inform your position before voting.

### New Silver (RWA002-A) Debt Ceiling, Stability Fee

As per this [poll](https://vote.makerdao.com/polling/QmaU1eaD) the following changes to the New Silver Vault (RWA002-A) Debt Ceiling parameters will be made, if this executive proposal passes:

- The Debt Ceiling will be increased by 30 million DAI from 20 million DAI to 50 million DAI.
- The Stability Fee will be increased by 3.5% from 3.5% to 7%.

In addition, the DOC variable for this deal will be: QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1 and the document can be viewed [here](https://gateway.pinata.cloud/ipfs/QmTrrwZpnSZ41rbrpx267R7vfDFktseQe2W5NJ5xB7kkn1).

Please review the discussion [thread](https://forum.makerdao.com/t/rwa-002-new-silver-restructuring-risk-and-legal-assessment/21417) to help inform your position before voting.

### Launch Project Funding

The Ecosystem team wishes to establish a wallet holding 2 million DAI of Launch Project funds for easier distribution.

As specified by the Launch Project Budget of the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget), there is no need for a confirmatory governance poll before these funds are distributed.

Should this resolution be approved, **2,000,000 DAI** will be transfered to the wallet at address [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### AVC Member Participation Rewards - Q2 2023

As described in [this summary](https://forum.makerdao.com/t/avc-member-participation-rewards-q2-2023/21459) and authorized by [The Atlas (Governance Scope)](https://mips.makerdao.com/mips/details/MIP101#2-5-10-1), a total of **134.1 MKR** will be distributed to active Aligned Delegates as detailed below if this executive proposal passes.

| Delegate         | Address                                                                                                               | AVC                  | Amount (Mkr) |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------ |
| IamMeeoh         | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](https://etherscan.io/address/0x47f7A5d8D27f259582097E1eE59a07a816982AE9) | KISS                 | 14.9         |
| ACRE DAOs        | [0xBF9226345F601150F64Ea4fEaAE7E40530763cbd](https://etherscan.io/address/0xBF9226345F601150F64Ea4fEaAE7E40530763cbd) | Regenerative Finance | 14.9         |
| Space Xponential | [0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78](https://etherscan.io/address/0xFF8eEB643C5bfDf6A925f2a5F9aDC9198AF07b78) | Regenerative Finance | 11.92        |
| Res              | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784) | Resiliency           | 14.9         |
| LDF              | [0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50](https://etherscan.io/address/0xC322E8Ec33e9b0a34c7cD185C616087D9842ad50) | Composable           | 11.92        |
| opensky          | [0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04](https://etherscan.io/address/0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04) | Composable           | 14.9         |
| David Phelps     | [0xd56e3E325133EFEd6B1687C88571b8a91e517ab0](https://etherscan.io/address/0xd56e3E325133EFEd6B1687C88571b8a91e517ab0) | Composable           | 8.94         |
| seedlatam.eth    | [0x0087a081a9b430fd8f688c6ac5dd24421bfb060d](https://etherscan.io/address/0x0087a081a9b430fd8f688c6ac5dd24421bfb060d) | Sovereign Finance    | 11.92        |
| StableLab        | [0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08](https://etherscan.io/address/0xbDE65cf2352ed1Dde959f290E973d0fC5cEDFD08) | Growth               | 14.9         |
| flipsidegov      | [0x300901243d6CB2E74c10f8aB4cc89a39cC222a29](https://etherscan.io/address/0x300901243d6CB2E74c10f8aB4cc89a39cC222a29) | Growth               | 14.9         |

### Clydesdale Quarterly Surplus Return

If this executive proposal passes, this [MakerDAO Resolution](https://gateway.pinata.cloud/ipfs/QmaGTVioBsCPfNoz9rbW7LU6YuzfgqHDZd92Hny5ACfL3p) will be approved.

This resolution 'requests and ratifies' James Asset PTC Limited to liquidate shares of James Asset Trust (JAT1) and return proceeds to the MakerDAO surplus buffer.

See this forum [post](https://forum.makerdao.com/t/clydesdale-quarterly-return-of-surplus-fund/21291) for additional context.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).

# Meta-Notes from DAO Masons

- In New Silver, we couldn't really tell what the 'DOC variable' was about or exactly what's being updated. It's in the spreadsheet so it's clearly important, but the originating [post](https://forum.makerdao.com/t/rwa-002-new-silver-restructuring-risk-and-legal-assessment/21417/15) doesn't give much context. Tried to walk the 'clear enough but still vague so it's not technically wrong' line but would have liked to give more context here. Suspect there is some documentation on this that would make it clear, but we didn't find it. We'd be sure to ask about this.

- We weren't sure about our read on the 'MakerDAO Resolution' part of the Clydesdale/JAT1 fund liquidation. Is a 'Resolution' something like a signal vote or attestation that lets Maker sign a document? That's the assumption we went with, and we assumed no actual transaction was happening other than a signal, even though the Clydesdale guy was saying he wanted to liquidate funds. We're surmising those assets are outside of MakerDAO.

- In the spreadsheet the "Spark Proxy Spell" was a separate entry at the bottom from the debt ceiling increase. We chose to combine those because it made sense to do Spark changes together, but were still wondering at the reasoning of having it separate. It was two polls, and that makes sense. But the "spark proxy spell" for some variables but not the debt ceiling was hard to follow without context. Also the contract hash was provided in the spreadsheet but we couldn't find that reference in the forum, so we wonder where it came from.

- We weren't sure who to include for $exec_publishers and $exec_crafters at the top. We saw that AmusingAxl, Sidestream, Arby were listed as 'technical point' and 'reviewers' in the spreadsheet so we went with them. In real life, I'd want to check that assumption.

- This brings up the next question of how the spreadsheet gets filled in, and if we'd be responsible for coming up with those values that appear there. I believe you said it is collaboratively created, but since the spreadsheet provides a lot of our context to write executives, we wonder what context is required to create the spreadsheet.
