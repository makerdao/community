---
title: Template - [Executive Vote] Stability Fee Changes, PSM-PAX-A Debt Ceiling Reduction, RETH-A Offboarding Parameters Finalization, SBE Parameter Changes, HV Bank DAO Resolution, Q4 2023 AVC Member Compensation, Spark Proxy Spell - January 24, 2024
summary: Stability Fee changes, PSM-PAX-A Debt Ceiling reduction and DC-IAM disabling, RETH-A offboarding parameters finalization, Smart Burn Engine parameter changes, HV Bank (RWA009-A) DAO resolution approval, AVC member compensation for Q4 2023, Spark proxy spell execution.
date: 2024-01-24T00:00:00.000Z
address: "0x4242347798bD2DEc6540dF55E5e47802d9b78aC7"

---
# [Executive Proposal] Stability Fee Changes, PSM-PAX-A Debt Ceiling Reduction, RETH-A Offboarding Parameters Finalization, SBE Parameter Changes, HV Bank DAO Resolution, Q4 2023 AVC Member Compensation, Spark Proxy Spell - January 24, 2024

The Governance Facilitators, Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased, as detailed below.
- PSM-PAX-A [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be set to zero and the vault will be removed from the [Debt Ceiling Instant Access Module (AutoLine)](https://manual.makerdao.com/module-index/module-dciam).
- RETH-A offboarding will be finalized by changing some of its vault parameters, as detailed below.
- Smart Burn Engine parameters [`bump` (lot size)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-3) and [`hop` (frequency)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-1) will be changed, as detailed below.
- A DAO resolution pertaining to the HV Bank vault will be approved to instruct the Director of RWAF to take all required actions to facilitate the return of funds back to Maker, via Galaxy as the exchange agent, as detailed below.
- A total of **208.5 MKR** will be distributed to 10 AVC members as part of the Q4 2023 AVC rewards.
- A Spark Protocol proxy spell will be triggered, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Increases

**Authorization:** [Ecosystem Approval](http://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445/3)\
**Proposal:** [Forum post "Stability Scope Parameter Changes #8"](https://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445)

If this executive proposal passes, following the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following parameters will be changed:

- The `ETH-A` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 1.49%, from 5.25% to **6.74%**.
- The `ETH-B` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 1.49%, from 5.75% to **7.24%**.
- The `ETH-C` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 1.49%, from 5.00% to **6.49%**.
- The `WSTETH-A` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 1.91%, from 5.25% to **7.16%**.
- The `WSTETH-B` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 1.91%, from 5.00% to **6.91%**.
- The `WBTC-A` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 0.91%, from 5.79% to **6.70%**.
- The `WBTC-B` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 0.91%, from 6.29% to **7.20%**.
- The `WBTC-C` [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 0.91%, from 5.54% to **6.45%**.

### Decrease PSM-PAX-A Debt Ceiling

**Authorization:** [Ecosystem Approval](http://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445/3)\
**Proposal:** [Forum post "Stability Scope Parameter Changes #8"](https://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445)

If this executive proposal passes, in line with the recent removal of `PSM-PAX-A` from the Cash Stablecoin list in the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104#7-2-1-3-1a), the following actions will be performed:

- The [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be set to **0 DAI**.
- The vault will be removed from the [Debt Ceiling Instant Access Module (AutoLine)](https://manual.makerdao.com/module-index/module-dciam).

### RETH-A Offboarding Parameters Finalization

**Authorization:** [Ecosystem Approval](http://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445/3)\
**Proposal:** [Forum post "Stability Scope Parameter Changes #8"](https://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445)

 The offboarding of `RETH-A` will be completed by enacting the following parameter changes, if this executive proposal passes:

- Reduce [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) by 13% from 13% to **0%**.
- Reduce [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) by 250 DAI from 250 DAI to **0 DAI**.
- Reduce [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive) by 0.1% from 0.1% to **0%**.
- Increase [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) by 9,850% from 150% to **10,000%**.

### SBE Parameter Changes

 **Authorization:** [Ecosystem Approval](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-parameter-reconfiguration-update-4/23441/2)\
 **Proposal:** [Forum post "Smart Burn Engine - Transaction Analysis & Parameter Reconfiguration Update #4"](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-parameter-reconfiguration-update-4/23441)

 If this executive proposal passes, following the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following SBE parameters will be changed:

- The [`bump` (lot size)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-3) parameter will be increased by 20,000 DAI, from 30,000 DAI to **50,000 DAI**.
- The [`hop` (frequency)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-1) parameter will be increased by 10,512 seconds , from 15,768 seconds to **26,280 seconds**.

### Approve HV Bank (RWA009-A) DAO Resolution

**Authorization:** Ecosystem Approval [1](https://forum.makerdao.com/t/huntingdon-valley-bank-transaction-documents-on-permaweb/16264/23), [2](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/16)\
**Proposal:** Forum posts [1](https://forum.makerdao.com/t/huntingdon-valley-bank-transaction-documents-on-permaweb/16264/20), [2](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/15)

If this executive proposal passes, a DAO resolution pertaining to the HV Bank vault will be approved to instruct the Director of RWAF to take all required actions to facilitate the return of $50,395,016.48 or other amount deemed to be excess cash under the MPA back to Maker, via Galaxy as the exchange agent. The Director of RWAF will be instructed to direct Galaxy to, upon receipt of the Return Amount, convert it into USDC and transfer the USDC to the Urn Input Conduit deployed at [0x08012Ec53A7fAbf6F33318dfb93C1289886eBBE1](https://etherscan.io/address/0x08012ec53a7fabf6f33318dfb93c1289886ebbe1).

To execute this process, the following action will be taken if the executive proposal passes:

- The DAO Resolution with IPFS hash [QmVtqkYtx61wEeM5Hb92dGA3TMZ9F1Z5WDSNwcszqxiF1w](https://ipfs.io/ipfs/QmVtqkYtx61wEeM5Hb92dGA3TMZ9F1Z5WDSNwcszqxiF1w) will be approved.
- `RWA009_A_INPUT_CONDUIT_URN_USDC` deployed at [0x08012Ec53A7fAbf6F33318dfb93C1289886eBBE1](https://etherscan.io/address/0x08012Ec53A7fAbf6F33318dfb93C1289886eBBE1) will be added to the chainlog on Mainnet.

Further, <conduit>.rely(MCD_ESM) will be called on the SwapInputConduit contracts to allow the ESM module to deny the pause proxy. In the event of a successful governance attack, this prevents funds from being stolen from the SwapInputConduit contracts.

### AVC Members Compensation Q4 2023

 **Authorization:** [Atlas 2.5.10](https://mips.makerdao.com/mips/details/MIP101#2-5-10-avc-member-participation-rewards)\
 **Proposal:** [Forum post "AVC Member Participation Rewards - Q4 2023"](https://forum.makerdao.com/t/avc-member-participation-rewards-q4-2023/23458)

 If this executive proposal passes, the following distributions will be made for Q4 AVC member compensation, totaling **208.5 MKR**:

| Delegate | Address | Amount (MKR) |
|--|--|--|
| IamMeeoh | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](https://etherscan.io/address/0x47f7A5d8D27f259582097E1eE59a07a816982AE9) | 20.85 MKR |
| DAI-Vinci | [0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a](https://etherscan.io/address/0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a) | 20.85 MKR |
| opensky | [0xf44f97f4113759E0a57756bE49C0655d490Cf19F](https://etherscan.io/address/0xf44f97f4113759E0a57756bE49C0655d490Cf19F) | 20.85 MKR |
| ACRE DAOs | [0xBF9226345F601150F64Ea4fEaAE7E40530763cbd](https://etherscan.io/address/0xBF9226345F601150F64Ea4fEaAE7E40530763cbd) | 20.85 MKR |
| fhomoney.eth | [0xdbD5651F71ce83d1f0eD275aC456241890a53C74](https://etherscan.io/address/0xdbD5651F71ce83d1f0eD275aC456241890a53C74) | 20.85 MKR |
| Res | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784) | 20.85 MKR |
| Harmony | [0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3](https://etherscan.io/address/0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3) | 20.85 MKR |
| Libertas | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 20.85 MKR |
| seedlatam.eth | [0x0087a081a9b430fd8f688c6ac5dd24421bfb060d](https://etherscan.io/address/0x0087a081a9b430fd8f688c6ac5dd24421bfb060d) | 20.85 MKR |
| 0xRoot | [0xC74392777443a11Dc26Ce8A3D934370514F38A91](https://etherscan.io/address/0xC74392777443a11Dc26Ce8A3D934370514F38A91) | 20.85 MKR |


### Trigger Spark Proxy Spell

**Authorization:** [Ecosystem Approval](https://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445/3), Governance Polls [1](https://vote.makerdao.com/polling/Qmc3NjZA), [2](https://vote.makerdao.com/polling/QmNrXB9P), [3](https://vote.makerdao.com/polling/QmTauEqL)\
**Proposal:** [Forum post "Stability Scope Parameter Changes #8"](https://forum.makerdao.com/t/stability-scope-parameter-changes-8/23445), [forum post "[Jan 10, 2024] Proposed Changes to SparkLend for Upcoming Spell"](https://forum.makerdao.com/t/jan-10-2024-proposed-changes-to-sparklend-for-upcoming-spell/23389)

If this executive proposal passes, the SparkLend Proxy Spell (Ethereum) at [0xa3836fEF1D314d4c081C2707a7664c3375F29b61](https://etherscan.io/address/0xa3836fEF1D314d4c081C2707a7664c3375F29b61) will be executed, containing the following major items:

- Increase WBTC Supply Cap to **5,000 WBTC**.
- Upgrade DAI, USDC, and USDT IRMs.
- Update USDC and USDT markets to use a fixed price oracle of 1 USD.
- Increase the Spark DAI Effective Borrow APY by 0.93%, from 5.53% to **6.46%**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
