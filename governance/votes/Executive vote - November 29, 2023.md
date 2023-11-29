---
title: Template - [Executive Vote] PSM-GUSD-A Debt Ceiling Reduction, Coinbase Custody Debt Ceiling Increase, Various Parameter Changes, RWA Foundation Dao Resolution, Andromeda Legal Expenses, Vesting Stream Updates and Spark Proxy-Spell - November 29, 2023
summary: Setting PSM-GUSD-A Debt Ceiling to zero and removing from AutoLine, Coinbase Custody (RWA014-A) Debt Ceiling increase, WBTC-A, WBTC-B, and WBTC-C Stability Fee changes, SBE parameter changes, RWA Foundation Dao Resolution, Andromeda Legal Expenses, Cancel Vesting Streams for Steakhouse and TechOps, Set up Ecosystem Facilitator Vesting Streams and Spark proxy-spell
date: 2023-11-29T00:00:00.000Z
address: "0x4F09EbaA1A5e52EB95c97f3b9fa3fb398D004698"

---
# [Executive Proposal] PSM-GUSD-A Debt Ceiling Reduction, Coinbase Custody Debt Ceiling Increase, Various Parameter Changes, RWA Foundation Dao Resolution, Andromeda Legal Expenses, Vesting Stream Updates and Spark Proxy-Spell - November 29, 2023

The Facilitators, Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary
	
If this executive proposal passes, the following actions will occur within the Maker Protocol:
- Following the removal of PSM-GUSD-A from the Cash Stablecoin list, the [Debt Ceiling (line)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be set to zero and the vault will be removed from the [Debt Ceiling Instant Access Module (AutoLine)](https://manual.makerdao.com/module-index/module-dciam).
- Coinbase Custody (RWA014-A) [Debt Ceiling (line)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be increased to 1.5 billion DAI.
- WBTC-A, WBTC-B, and WBTC-C [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.07%.
- The [hop (frequency)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-1) and [bump (lot size)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-3) SBE parameters will be changed to optimize for cost efficiency.
- A RWA Foundation Dao Resolution will be approved.
- A 201,738 DAI transfer will be made to cover Andromeda legal expenses.
- MKR and DAI Vest Streams for Steakhouse and TechOps will be canceled.
- Ecosystem Facilitator Vest Streams will be set up.
- A Spark Protocol proxy-spell will be executed to address an identified discrepancy in the DAI Market.


**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Decrease PSM-GUSD-A Debt Ceiling

**Authorization**: [Ecosystem Approval](http://forum.makerdao.com/t/stability-scope-parameter-changes-7/22882/2)\
**Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-7/22882#reduce-psm-gusd-a-debt-ceiling-8) "Stability Scope Parameter Changes"

If this executive proposal passes, in line with the recent removal of PSM-GUSD-A from the Cash Stablecoin list in the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#7-2-1-3-1a), the following actions will be performed:

- The [Debt Ceiling (line)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be set to **0**.
- The vault will be removed from the [Debt Ceiling Instant Access Module (AutoLine)](https://manual.makerdao.com/module-index/module-dciam).


### Increase Coinbase Custody (RWA014-A) Debt Ceiling

**Authorization**: [Ecosystem Approval](http://forum.makerdao.com/t/stability-scope-parameter-changes-7/22882/2)\
**Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-7/22882#increase-rwa014-a-coinbase-custody-debt-ceiling-9) "Stability Scope Parameter Changes"

If this executive proposal passes, in line with the recent amendments in the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#7-2-1-3-1a), the following parameters for Coinbase Custody (RWA014-A) will be changed:

- The [Debt Ceiling (line)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be increased by 1 billion DAI from 500 million DAI to **1.5 billion DAI**.


### Decrease WBTC-A, WBTC-B, and WBTC-C Stability Fee

**Authorization**: [Ecosystem Approval](http://forum.makerdao.com/t/stability-scope-parameter-changes-7/22882/2)\
**Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-7/22882#stability-feehttpsmanualmakerdaocomparameter-indexvault-riskparam-stability-fee-changes-7) "Stability Scope Parameter Changes"

If this executive proposal passes, following the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following parameters will be changed:

- The WBTC-A [Stability Fee (SF)](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.07%, from 5.86% to **5.79%**.
- The WBTC-B [Stability Fee (SF)](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.07%, from 6.36% to **6.29%**.
- The WBTC-C [Stability Fee (SF)](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.07%, from 5.61% to **5.54%**.


### Smart Burn Engine Parameter Optimization

**Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-parameter-reconfiguration-update-3/22876/2)\
**Proposal**: [Forum post](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-parameter-reconfiguration-update-3/22876) "Smart Burn Engine - Transaction Analysis & Parameter Reconfiguration Update #3"

If this executive proposal passes, following the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following SBE parameters will be changed:

- The [bump (lot size)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-3) parameter will be increased by 10,000, from 20,000 to **30,000** DAI.
- The [hop (frequency)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-1) parameter will be increased by 9,460, from 6,308 to **15,768** seconds.


### Approve RWA Foundation Dao Resolution

**Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/dao-resolution-rwa-foundation-service-provider-changes/22866/2)\
**Proposal**: [Forum post](https://forum.makerdao.com/t/dao-resolution-rwa-foundation-service-provider-changes/22866) "DAO Resolution - RWA Foundation Service Provider Changes"

If this executive proposal passes, the following RWA Foundation Dao Resolution to change the service provider will be approved:

- The [DAO Resolution](https://gateway.pinata.cloud/ipfs/QmPiEHtt8rkVtSibBXMrhEzHUmSriXWz4AL2bjscq8dUvU) with IPFS hash `QmPiEHtt8rkVtSibBXMrhEzHUmSriXWz4AL2bjscq8dUvU` will be approved.


### DAI transfer to cover Andromeda Legal expenses

**Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/project-andromeda-legal-expenses-ii/22577/4)\
**Proposal**: [Forum post](https://forum.makerdao.com/t/project-andromeda-legal-expenses-ii/22577) "Project Andromeda - Legal Expenses II"

If this executive proposal passes, the following transfer will be performed to cover Andromeda (RWA015-A) Legal expenses:

- **201,738 DAI** will be transfered to [0xc4dB894A11B1eACE4CDb794d0753A3cB7A633767](https://etherscan.io/address/0xc4dB894A11B1eACE4CDb794d0753A3cB7A633767).


### Cease MKR and DAI Vest Streams for Steakhouse and TechOps

**Authorization**: [MIP 113](https://mips.makerdao.com/mips/details/MIP113#7-1-1-1-1a)

If this executive proposal passes, in line with the recent amendments in the [Governance Scope](https://mips.makerdao.com/mips/details/MIP113#7-1-1-1-1a), the following DSS Vest Streams will be halted by calling the yank function:

- Steakhouse **DAI** stream **ID 19**
- TechOps **DAI** stream **ID 18**
- Steakhouse **MKR** stream **ID 32**
- TechOps **MKR** stream **ID 33**


### Set up MKR and DAI Vest Streams for Ecosystem Facilitator

**Authorization**: [MIP 113](https://mips.makerdao.com/mips/details/MIP113#7-1-1-1-1a)

If this executive proposal passes, in line with the recent amendments in the [Governance Scope](https://mips.makerdao.com/mips/details/MIP113#7-1-1-1-1a), the following DSS Vest Streams will be set up for Ecosystem facilitator:

| Recipient | Stream Dates                                | Amount     | Token | Address                                                                                                               |
|-----------|---------------------------------------------|------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| Ecosystem | 2023-12-01 00:00:00 to 2024-11-30 23:59:59 | 504,000.00 | DAI   | [0xFCa6e196c2ad557E64D9397e283C2AFe57344b75](https://etherscan.io/address/0xFCa6e196c2ad557E64D9397e283C2AFe57344b75) |
| Ecosystem | 2023-12-01 00:00:00 to 2024-11-30 23:59:59 |     216.00 | MKR   | [0xFCa6e196c2ad557E64D9397e283C2AFe57344b75](https://etherscan.io/address/0xFCa6e196c2ad557E64D9397e283C2AFe57344b75) |


### Spark Protocol Proxy-Spell

**Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/accounting-discrepancy-in-the-dai-market/22845/2)\
**Proposal**: [Forum post](https://forum.makerdao.com/t/accounting-discrepancy-in-the-dai-market/22845) "Accounting Discrepancy in the DAI Market"

If this executive proposal passes, a Spark Protocol proxy-spell with the address [0x68a075249fA77173b8d1B92750c9920423997e2B](https://etherscan.io/address/0x68a075249fA77173b8d1B92750c9920423997e2B) will be executed to address a identified discrepancy in the DAI Market.

This issue has no impact on users and its severity is classified as low.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
