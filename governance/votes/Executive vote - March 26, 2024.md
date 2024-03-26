---
title: Template - [Executive Vote] Stability Fee Changes, SparkLend D3M Maximum Debt Ceiling Increase, Spark DAI Morpho Vault D3M Deployment, DSR Decrease, SBE Parameter Update, HVBank Dao Resolution Approval, Trigger Spark Proxy Spell - March 26, 2024
summary: Multiple Stability Fee decreases, SparkLend D3M Maximum Debt Ceiling Increase, Spark DAI Morpho Vault D3M deployment, Dai Savings Rate decrease, Smart Burn Engine parameter update, HVBank Dao Resolution approval, trigger Spark Proxy Spell.
date: 2024-03-26T00:00:00.000Z
address: "0xcD672aCc9885796a19b4bAf03Dba46c8cdB0882B"

---
# [Executive Proposal] Stability Fee Changes, SparkLend D3M Maximum Debt Ceiling Increase, Spark DAI Morpho Vault D3M Deployment, DSR Decrease, SBE Parameter Update, HVBank Dao Resolution Approval, Trigger Spark Proxy Spell - March 26, 2024

The Governance Facilitators, SideStream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- Multiple Stability Fees will be decreased.
- The SparkLend D3M Maximum Debt Ceiling (`line`) will be increased to 2.5 billion DAI.
- The D3M to Spark DAI Morpho Vault will be deployed with the parameters detailed below.
- The Dai Savings Rate will be decreased.
- The Smart Burn Engine parameters will be updated.
- The HVBank (RWA009-A) DAO Resolution will be approved.
- A proxy spell for Spark Protocol will be triggered.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **16 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### [Stability Fee (SF)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-) Changes

- **Authorization:** [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-11-under-sta-article-3-3/23910/3)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-11-under-sta-article-3-3/23910)

If this executive proposal passes, as per the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following SFs will be changed:

- Decrease the ETH-A SF by 2.00% from 15.25% to **13.25%**.
- Decrease the ETH-B SF by 2.00% from 15.75% to **13.75%**.
- Decrease the ETH-C SF by 2.00% from 15% to **13.00%**.
- Decrease the WSTETH-A SF by 2% from 16.25% to **14.25%**.
- Decrease the WSTETH-B SF by 2% from 16% to **14.00%**.
- Decrease the WBTC-A SF by 2% from 16.75% to **14.75%**.
- Decrease the WBTC-B SF by 2% from 17.25% to **15.25%**.
- Decrease the WBTC-C SF by 2% from 16.50% to **14.50%**.

### SparkLend [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) Update

- **Authorization:** [Forum post](https://vote.makerdao.com/polling/QmVGDsvm)
- **Proposal:** [Forum post](http://forum.makerdao.com/t/mar-6-2024-proposed-changes-to-sparklend-for-upcoming-spell/23791)

If this executive proposal passes, the following change to the SparkLend [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be made:

- Increase the SparkLend D3M Maximum Debt Ceiling by 1.0 billion DAI from 1.5 billion DAI to **2.5 billion DAI**.

### [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) to Spark DAI Morpho Vault (DIRECT-SPARK-MORPHO-DAI)

- **Authorization:** [Forum post](https://forum.makerdao.com/t/introduction-and-initial-parameters-for-ddm-overcollateralized-spark-metamorpho-ethena-vault/23925/5)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/introduction-and-initial-parameters-for-ddm-overcollateralized-spark-metamorpho-ethena-vault/23925)

If this executive proposal passes, the D3M will be deployed to the [Spark DAI Morpho Vault](https://morpho.blockanalitica.com/metamorpho/vaults/0x73e65dbd630f90604062f6e02fab9138e713edd9) with the following parameters:

#### [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) [DC-IAM](https://manual.makerdao.com/module-index/module-dciam) Parameters

- [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): 100 million DAI
- [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): 100 million DAI
- [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): 24 hours
- Debt Write-off Timelock (`tau`) (Defines the time to elapse before debt can be written off after a D3M has been caged): 7 days

#### [D3M](https://manual.makerdao.com/module-index/module-dai-direct-deposit) Addresses

- oracle: [0xA5AA14DEE8c8204e424A55776E53bfff413b02Af](https://etherscan.io/address/0xA5AA14DEE8c8204e424A55776E53bfff413b02Af)
- plan: [0x374b5f915aaED790CBdd341E6f406910d648fD39](https://etherscan.io/address/0x374b5f915aaED790CBdd341E6f406910d648fD39)
- pool: [0x9C259F14E5d9F35A0434cD3C4abbbcaA2f1f7f7E](https://etherscan.io/address/0x9C259F14E5d9F35A0434cD3C4abbbcaA2f1f7f7E)
- operator: [0x298b375f24CeDb45e936D7e21d6Eb05e344adFb5](https://etherscan.io/address/0x298b375f24CeDb45e936D7e21d6Eb05e344adFb5)

#### Additional Actions

If this executive proposal passes, the DIRECT_MOM Breaker will be extended to include the Morpho D3M, enabling governance to deactivate vault functionality through an executive spell without waiting for the GSM Pause Delay.

### [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Change

- **Authorization**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-11-under-sta-article-3-3/23910/3)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-11-under-sta-article-3-3/23910)

If this executive proposal passes, the DSR will change as follows:

- Decrease the DSR by 2% from 15% to **13%**

### Smart Burn Engine (SBE) Parameter Updates

- **Authorization:** [Forum post](https://forum.makerdao.com/t/smart-burn-engine-the-rate-of-mkr-accumulation-reconfiguration-and-transaction-analysis-parameter-reconfiguration-update-6/23888/2)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/smart-burn-engine-the-rate-of-mkr-accumulation-reconfiguration-and-transaction-analysis-parameter-reconfiguration-update-6/23888)

If this executive proposal passes, the following SBE parameters will be changed:

- The [`hop` (frequency)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-1) parameter will be decreased by 7,884 seconds from 19,710 seconds to **11,826 seconds**
- The [`bump` (lot size)](https://mips.makerdao.com/mips/details/MIP104#9-1-3-3) parameter will be increased by 25,000 DAI, from 50,000 DAI to **75,000 DAI**

### Approve HVBank (RWA009-A) Dao Resolution

- **Authorization:** [Forum post](http://forum.makerdao.com/t/huntingdon-valley-bank-transaction-documents-on-permaweb/16264/25)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/huntingdon-valley-bank-transaction-documents-on-permaweb/16264/24)

If this executive proposal passes, the following DAO Resolution pertaining to HVBank (`RWA009-A`) will be approved:

- HVBank (`RWA009-A`) Dao Resolution with IPFS hash [QmStrc9kMCmgzh2EVunjJkPsJLhsVRYyrNFBXBbJAJMrrf](https://ipfs.io/ipfs/QmStrc9kMCmgzh2EVunjJkPsJLhsVRYyrNFBXBbJAJMrrf) will be approved.

### Trigger Spark Proxy Spell

- **Authorization:** Polls [1](https://vote.makerdao.com/polling/QmQAtb17) and [2](https://vote.makerdao.com/polling/QmYYoAMe). Forum posts [1](http://forum.makerdao.com/t/stability-scope-parameter-changes-11-under-sta-article-3-3/23910/3)
- **Proposal**: Forum posts [1](http://forum.makerdao.com/t/mar-6-2024-proposed-changes-to-sparklend-for-upcoming-spell/23791), [2](https://forum.makerdao.com/t/stability-scope-parameter-changes-11-under-sta-article-3-3/23910), [3](https://forum.makerdao.com/t/introduction-and-initial-parameters-for-ddm-overcollateralized-spark-metamorpho-ethena-vault/23925)

If this executive proposal passes, a Spark proxy spell at [0x210DF2e1764Eb5491d41A62E296Ea39Ab56F9B6d](https://etherscan.io/address/0x210DF2e1764Eb5491d41A62E296Ea39Ab56F9B6d) will be triggered. This proxy spell will take the following action:

- [SparkLend Ethereum] Increase the WBTC Supply Cap max by 1,000 WBTC, from 5,000 to **6,000 WBTC**.
- [SparkLend Ethereum] Decrease the Effective DAI Borrow Rate by 2 percentage points from 16.00% to **14.00%**.
- Transfer ownership of the Morpho Vault.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
