---
title: Template - [Executive Vote] DAO Resolution for Monetalis Clydesdale, HV Bank On-chain RWA Agreement Update, Fortunafi Vault Change, Trigger Spark Protocol Proxy Spell - September 27, 2023
summary: Approve DAO Resolution and update on-chain RWA Agreement for Monetalis Clydesdale (RWA007-A); update HV Bank (RWA009-A) on-chain RWA Agreement; place Fortunafi (RWA005-A) vault into soft liquidation state; trigger Spark Protocol Proxy Spell.
date: 2023-09-27T00:00:00.000Z
address: "0xD3F96B8Ffbf21033F5A6210C6349598AAdBd1152"

---
# [Executive Proposal] DAO Resolution for Monetalis Clydesdale, HV Bank On-chain RWA Agreement Update, Fortunafi Vault Change, Trigger Spark Protocol Proxy Spell - September 27, 2023

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following actions to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:
- A DAO Resolution will be approved for Monetalis Clydesdale (RWA007-A), and the [RWA Agreement (doc)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter will be updated to include this DAO Resolution.
- The HV Bank (RWA009-A) vault [RWA Agreement (doc)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter will be updated, to include the recently approved DAO Resolution as detailed below.
- The Fortunafi (RWA005-A) vault will be placed into soft liquidation state, as detailed below.
- A Spark Protocol Proxy Spell will be triggered that activates the Gnosis Chain instance of Spark Lend, as detailed below.

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the actions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Monetalis Clydesdale (RWA007-A) Vault - Approve DAO Resolution & Update RWA Agreement Parameter

*Authorization*: [Governance Poll 2023-09-18](https://vote.makerdao.com/polling/Qmb45PDU)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/proposal-to-revise-asset-allocation-of-jat1-and-jat2/21718) "Proposal to revise asset allocation of JAT1 and JAT2"

If this executive proposal passes, the [DAO Resolution](https://amaranth-secondary-stingray-939.mypinata.cloud/ipfs/QmZ94FG8YXK4seyBHBi2FfTfW5URtBqbCb7JZAB1HGkTNF) will be approved and in consequence, the Monetalis Clydesdale (RWA007-A) [RWA Agreement (doc)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) will be updated to [QmWo3UVtEDKVwS5k34uLt1J6u9px3rjHYkTLK2rYQ31E3G](https://jade-ltd-quail-880.mypinata.cloud/ipfs/QmWo3UVtEDKVwS5k34uLt1J6u9px3rjHYkTLK2rYQ31E3G).

This DAO Resolution will instruct the trustees of the Monetalis Clydesdale (RWA007-A) to the following JAT1 (James Asset Trust 1) to JAT2 (James Asset Trust 2) Asset Reallocation:
- Selling the ETF products within JAT1.
- Paying any proceeds from this sale after expenses in excess of 500 million USD into the surplus buffer.
- Deploying the 500 million USD towards the United States Treasury bills ladder already established under JAT2.

Please review this [forum thread](https://forum.makerdao.com/t/assessment-jat1-jat2-reallocation/21987) for more information about this reallocation.

### HV Bank (RWA009-A) Vault RWA Agreement Parameter Update

*Authorization*: [Executive Vote 2023-09-13](https://vote.makerdao.com/executive/template-executive-vote-stability-scope-parameter-changes-spark-protocol-d3m-parameter-changes-set-fortunafi-debt-ceiling-to-zero-dai-dao-resolution-for-hv-bank-delegate-compensation-and-other-actions-september-13-2023)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/13) "[RWA009] HVBank/MIP21 Token CES Domain Team Assessment"

The recently approved HV Bank (RWA009-A) [DAO Resolution](https://vote.makerdao.com/executive/template-executive-vote-stability-scope-parameter-changes-spark-protocol-d3m-parameter-changes-set-fortunafi-debt-ceiling-to-zero-dai-dao-resolution-for-hv-bank-delegate-compensation-and-other-actions-september-13-2023) requires updating the [RWA Agreement parameter](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement). 

If this executive proposal passes, the HV Bank RWA Agreement parameter will be updated to [QmYjvAZEeGCs8kMuLQz6kU8PWgsbG1i8QWd2jrwkSipcRx](https://jade-ltd-quail-880.mypinata.cloud/ipfs/QmYjvAZEeGCs8kMuLQz6kU8PWgsbG1i8QWd2jrwkSipcRx).

### Fortunafi (RWA005-A) Vault Change

*Authorization*: [Governance Poll 2023-08-28](https://vote.makerdao.com/polling/Qmcb1c9x) , [Executive Vote 2023-09-13](https://vote.makerdao.com/executive/template-executive-vote-stability-scope-parameter-changes-spark-protocol-d3m-parameter-changes-set-fortunafi-debt-ceiling-to-zero-dai-dao-resolution-for-hv-bank-delegate-compensation-and-other-actions-september-13-2023)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/request-to-poll-offboarding-legacy-legal-recourse-assets/21582/12) "[Request to Poll] Offboarding Legacy Legal Recourse Assets"

If this executive proposal passes, `tell` will be called on the RWA Liquidation Oracle for this vault type; this places the vault into a “soft liquidation” state.

### Spark Protocol Proxy Spell

*Authorization*: [Governance Poll 2023-09-18](https://vote.makerdao.com/polling/QmVcxd7J)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/proposal-for-activation-of-gnosis-chain-instance/22098/) "Proposal for Activation of Gnosis Chain Instance"

If this executive proposal passes, a [Proxy Spell](https://forum.makerdao.com/t/executive-proxies-and-spark-protocol/20976) for Spark Protocol will be triggered at [0x9FfFbc278119Ad854b58C3d219212849E8B54eF8](https://etherscan.io/address/0x9FfFbc278119Ad854b58C3d219212849E8B54eF8) to activate the Gnosis Chain instance of Spark Lend.

Please review this [forum thread](https://forum.makerdao.com/t/risk-assessment-and-parameter-recommendations-spark-protocol-on-gnosis-chain/21629) for a detailed risk assessment.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
