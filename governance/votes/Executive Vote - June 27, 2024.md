---
title: Template - [Executive Vote] SBE Parameters Update, Launch Project Funding, Spark Proxy Spell - June 27, 2024
summary: Update the Smart Burn Engine (SBE) DssFlapper parameters, transfer funding to the Launch Project, and trigger a Spark proxy spell.
date: 2024-06-27T00:00:00.000Z
address: "0x7fbC867dE58D6e47E430eB257B50481F6E878f65"

---
# [Executive Proposal] SBE Parameters Update, Launch Project Funding, Spark Proxy Spell - June 27, 2024

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Maker Protocol:

- Smart Burn Engine (SBE) [DssFlapper](https://mips.makerdao.com/mips/details/MIP104#9-1-3) parameters will be updated.
- **4,500,000 DAI** and **1,300 MKR** will be transferred to the Launch Project.
- A Spark proxy spell will be triggered at [0xc96420Dbe9568e2a65DD57daAD069FDEd37265fa](https://etherscan.io/address/0xc96420Dbe9568e2a65DD57daAD069FDEd37265fa).

**Voting for this executive proposal will place your MKR in support of the changes outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Smart Burn Engine (SBE) Parameters Update

- **Authorization:** [Forum post](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-parameter-reconfiguration-update-8/24531/4)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-parameter-reconfiguration-update-8/24531)

If this executive proposal passes, the following SBE parameters will be changed:

- The [`hop`](https://mips.makerdao.com/mips/details/MIP104#9-1-3-1a) parameter will be decreased by 1,577 seconds from 11,826 seconds to **10,249 seconds**.
- The [`bump`](https://mips.makerdao.com/mips/details/MIP104#9-1-3-3a) parameter will be decreased by 10,000 DAI from 75,000 DAI to **65,000 DAI**.

### Launch Project Funding
  
- **Authorization:** [Accessibility Scope 9.1](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/18)
  
If this executive proposal passes, the following transfers to the Launch Project will be made:
  
- Transfer **4,500,000 DAI** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- Transfer **1,300 MKR** to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
  
### Spark Proxy Spell
  
- **Authorization:** Governance Polls [1117](https://vote.makerdao.com/polling/QmdQYTQe), [1118](https://vote.makerdao.com/polling/QmU6KSGc), [1119](https://vote.makerdao.com/polling/QmQv9zQR)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/jun-12-2024-proposed-changes-to-sparklend-for-upcoming-spell/24489)
  
If this executive proposal passes, a Spark proxy spell at [0xc96420Dbe9568e2a65DD57daAD069FDEd37265fa](https://etherscan.io/address/0xc96420Dbe9568e2a65DD57daAD069FDEd37265fa) will be triggered, containing the following items.
  
#### [Mainnet] Update Morpho Vault Supply Caps
  
The following changes will be made to the [Morpho Spark DAI Vault](https://morpho.blockanalitica.com/ethereum/metamorpho/vaults/0x73e65dbd630f90604062f6e02fab9138e713edd9) parameters:
  
- [sUSDe 91.5% LLTV pool](https://morpho.blockanalitica.com/ethereum/markets/1247f1c237eceae0602eab1470a5061a6dd8f734ba88c7cdc5d6109fb0026b28) supply cap will be increased by 100 million DAI from 100 million DAI to **200 million DAI**.
- [sUSDe 86% LLTV pool](https://morpho.blockanalitica.com/ethereum/markets/39d11026eae1c6ec02aa4c0910778664089cdd97c3fd23f68f7cd05e2e95af48) supply cap will be increased by 100 million DAI from 400 million DAI to **500 million DAI**.

#### [Gnosis] Onboard USDC.e as Borrowable Asset

Bridged USDC (USDC.e) will be onboarded with the following parameters:

- Token: **USDC.e**
- Token Address: **[0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0](https://gnosisscan.io/token/0x2a22f9c3b484c3629090feed35f17ff8f88f76f0)**
- Oracle: **1:1 USD Fixed**
- Oracle Provider: N/A
- Optimal Utilization: **95%**
- Base: **0%**
- Slope1: **9%**
- Slope2: **15%**
- Stable rate func (deprecated): N/A
- Borrow Enabled: **Yes**
- Isolation Borrowable: **Yes**
- Stable Rate Borrowing: **No**
- [Siloed Borrowing](https://docs.spark.fi/defi-infrastructure/sparklend#siloed-borrowing): **No**
- Flash Loan Enabled: **Yes**
- Loan To Value: **0%**
- Liquidation Threshold: **0%**
- Liquidation Bonus: **0%**
- Reserve Factor: **10%**
- Cap Automator: **Disabled**
- [Supply Cap](https://docs.spark.fi/defi-infrastructure/sparklend#supply-and-borrow-caps): **10 million USDC.e**
- [Borrow Cap](https://docs.spark.fi/defi-infrastructure/sparklend#supply-and-borrow-caps): **8 million USDC.e**
- [Isolation Mode](https://devs.spark.fi/sparklend/features/isolation-mode): **No**
- Isolation Mode Debt Ceiling: N/A
- Liquidation Protocol Fee: **0%**
- [Efficiency Mode (eMode)](https://docs.spark.fi/defi-infrastructure/sparklend#efficiency-mode-emode) Category: **0**

#### [Gnosis] Update USDC Parameters to Prepare for Offboarding

Parameters of Circle USDC (USDC) interest rate model will be updated as follows:

- Optimal Utilization will be decreased by 15% from 95% to **80%**
- Slope2 will be increased by 35% from 15% to **50%**
- Borrow Cap will be decreased by 7 million USDC from 8 million USDC to **1 million USDC**

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
