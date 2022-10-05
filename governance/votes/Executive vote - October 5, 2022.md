---
title: Template - [Executive Vote] Monetalis Clydesdale (RWA007-A) Onboarding, Funding Ambassador Program SPF, Core Unit MKR Streams and Transfers - October 5, 2022
summary: Onboarding Monetalis Clydesdale (MIP65) as RWA007-A with a 1M DAI initial Debt Ceiling, DAI transfer for the Ambassador Program Special Purpose Fund, MKR streams for GovAlpha (GOV-001) and StarkNet Engineering (SNE-001) Core Units and MKR transfers for StarkNet Engineering (SNE-001) and Sustainable Ecosystem Scaling (SES-001) Core Units. 
date: 2022-10-05T00:00:00.000Z
address: "0x0900328701eA2561F530869c4fe088A72256409C"

---
# [Executive Proposal] Monetalis Clydesdale (RWA-007) Onboarding, Funding Ambassador Program SPF, Core Unit MKR Streams and Transfers - October 5, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **addition** will be made to the Maker Protocol:
- Monetalis Clydesdale (MIP65) will be onboarded as a new vault type, RWA007-A, as detailed below. 

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- **81,000 DAI** will be distributed to the Ambassador Program [Special Purpose Fund](https://mips.makerdao.com/mips/details/MIP55), as detailed below.
- Streams totaling **787.70 MKR** will be set up for the [GovAlpha (GOV-001)](https://mips.makerdao.com/mips/details/MIP39c2SP3) and [StarkNet Engineering (SNE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP19) Core Units, as detailed below.
- A total of **497.64 MKR** will be transferred to the [StarkNet Engineering (SNE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP19) and [Sustainable Ecosystem Scaling (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) Core Units, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Monetalis Clydesdale Onboarding

As per [this poll](https://vote.makerdao.com/polling/QmXHM6us#vote-breakdown) Monetalis Clydesdale will be onboarded as RWA007-A as detailed below, if this executive proposal passes.

As outlined in this [Domain Assesment](https://forum.makerdao.com/t/rwa007-mip65-monetalis-clydesdale-ces-domain-team-assessment/17787), this initial onboarding will set the [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to **1 million DAI**. If the pilot transaction following this spell is successful, and Monetalis can draw 1 million DAI from the facility (utilizing the USDC PSM), a subsequent spell will increase the Debt Ceiling to 250 million DAI. Please note that the Monetalis Clydesdale allocation of 500 million DAI is being **split equally between RWA007-A for Bank Sygnum (onboarding in this spell) and RWA007-B for Baillie Gifford (to be onboarded at a later date).**

#### Collateral Parameters
* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): 0%.
* [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): 1 million DAI.
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): 100%.
* Oracle Price: 250 million DAI *(this manual setting for RWA vaults will allow the debt ceiling to be progressively raised by a future spell, without the need for recalibrating the system oracle price for RWA007-A)*.
* Debt write-off timelock (tau): 0.
* Liquidation Process: See [MIP21](https://mips.makerdao.com/mips/details/MIP21) for details.

#### Relevant Smart Contract Information

* **MIP21_LIQUIDATION_ORACLE:** `0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30`. 
* **RWA_TOKEN_FAB**: `0x2B3a4c18705e99bC29b22222dA7E10b643658552`.
* **SYMBOL:** `RWA007`.
* **NAME:** `RWA-007`.
* **ILK:** `RWA007-A`.
* **RWA007:** `0x078fb926b041a816FaccEd3614Cf1E4bc3C723bD`.
* **MCD_JOIN_RWA007_A**: `0x476aaD14F42469989EFad0b7A31f07b795FF0621`.
* **RWA007_A_URN:** `0x481bA2d2e86a1c41427893899B5B0cEae41c6726`.
* **RWA007_A_JAR:** `0xef1B095F700BE471981aae025f92B03091c3AD47`.
* **RWA007_A_OUTPUT_CONDUIT:** `0x701C3a384c613157bf473152844f368F2d6EF191`.
* **RWA007_A_INPUT_CONDUIT_URN:** `0x58f5e979eF74b60a9e5F955553ab8e0e65ba89c9`.
* **RWA007_A_INPUT_CONDUIT_JAR:** `0xc8bb4e2B249703640e89265e2Ae7c9D5eA2aF742`.
* **RWA_007_A_OPERATOR (Monetalis):** `0x94cfBF071f8be325A5821bFeAe00eEbE9CE7c279`.
* **ETH Address A ( USDC Wallet In ):** `0xc3acf3b96e46aa35dbd2aa3bd12d23c11295e774`.

#### Additional Information

Please review the following forum threads containing information about RWA-007 (Monetalis Clydesdale) to inform your position before voting.
* [Initial MIP Forum Thread](https://forum.makerdao.com/t/mip65-monetalis-clydesdale-liquid-bond-strategy-execution/13148)
* [CES Domain Team Assessment](https://forum.makerdao.com/t/rwa007-mip65-monetalis-clydesdale-ces-domain-team-assessment/17787)
* [MIP65 Counterparties Community Assessment](https://forum.makerdao.com/t/mip65-counterparties-community-assessment/17786)
* [(RWA 007) MIP65 Monetalis/Clydesdale Legal Assessment ](https://forum.makerdao.com/t/rwa-007-mip65-monetalis-clydesdale-legal-assessment/17834)
* [Initial MIP65 Documentation](https://forum.makerdao.com/t/mip65-monetalis-clydesdale-documentation-hq/17923)
* [Monetalis Clydesdale Legal Agreements](https://forum.makerdao.com/t/mip65-monetalis-clydesdale-documentation-hq/17923/7)

### Ambassador Program Special Purpose Fund Transfer

As per [this poll](https://vote.makerdao.com/polling/QmcJQCyW#vote-breakdown), **81,000 DAI** will be transferred to the Ambassador Program [Special Purpose Fund](https://mips.makerdao.com/mips/details/MIP55) as detailed below, if this executive proposal passes.

Based on the accepted [Ambassador Program's Special Purpose Fund Request](https://mips.makerdao.com/mips/details/MIP55c3SP7), **81,000 DAI** will be transferred to the program's multisig at [0xF411d823a48D18B32e608274Df16a9957fE33E45](https://etherscan.io/address/0xF411d823a48D18B32e608274Df16a9957fE33E45). The signers of this 2/3 multisig include the proposal author and two comptrollers, @tadeo and @Davidutro, who confirmed their commitment in the [discussion thread](https://forum.makerdao.com/t/mip55c3-sp7-special-purpose-fund-for-the-ambassador-program/17169).

### GovAlpha (GOV-001) MKR Streams

As per [this poll](https://vote.makerdao.com/polling/QmUoGryZ#vote-breakdown), a total of **247.70 MKR** will be streamed to the [GovALpha (GOV-001) Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP3) as detailed below, if this executive proposal passes.

Based on the accepted [MKR Vesting MIP](https://mips.makerdao.com/mips/details/MIP40c3SP80) the following three streams will be created, if this executive proposal passes:

#### @prose11's Facilitator Stream

**62.50 MKR** streamed to [0xbfDD0E744723192f7880493b66501253C34e1241](https://etherscan.io/address/0xbfDD0E744723192f7880493b66501253C34e1241) starting on 2022-08-01 and ending on 2023-08-01 with a cliff date of 2023-08-01. 
 
#### @Patrick_J's Facilitator Stream

**32.69 MKR** streamed to [0xbb147E995c9f159b93Da683dCa7893d6157199B9](https://etherscan.io/address/0xbb147E995c9f159b93Da683dCa7893d6157199B9) starting on 2022-08-01 and ending on 2023-08-01 with a cliff date of 2023-08-01.

#### GovAlpha Contributiors' Stream

**152.51 MKR** streamed to the GovAlpha multisig at [0x01D26f8c5cC009868A4BF66E268c17B057fF7A73](https://etherscan.io/address/0x01D26f8c5cC009868A4BF66E268c17B057fF7A73) starting on 2022-08-01 and ending on 2023-08-01 with a cliff date of 2023-08-01. 

### StarkNet Engineering Core Unit (SNE-001) MKR Stream and Transfer

As per [this poll](https://vote.makerdao.com/polling/QmWX6BSA#vote-breakdown), a total of 810 MKR will be transferred and streamed to the [StarkNet Engineering Core Unit (SNE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP19) as detailed below, if this executive proposal passes.

Based on the accepted [MKR Vesting MIP](https://mips.makerdao.com/mips/details/MIP40c3SP79#sentence-summary), a one-time transfer and two-year stream will be established, if this executive proposal passes:

#### MKR Transfer

**270 MKR** will be transferred to [0x6D348f18c88D45243705D4fdEeB6538c6a9191F1](https://etherscan.io/address/0x6D348f18c88D45243705D4fdEeB6538c6a9191F1) as compensation for their first year of work as a Core Unit.

#### MKR Stream

**540 MKR** will be streamed to [0x6D348f18c88D45243705D4fdEeB6538c6a9191F1](https://etherscan.io/address/0x6D348f18c88D45243705D4fdEeB6538c6a9191F1) starting on 2022-09-28 and ending on 2024-09-28 with a cliff date of 2022-09-28 (same as the starting date for the stream), as compensation for the next two years of work as a Core Unit.

### Sustainable Ecosystem Scaling Core Unit (SES-001) MKR Transfer

As per [this poll](https://vote.makerdao.com/polling/QmSmhV7z#vote-breakdown), **227.64 MKR** will be transferred to the [Sustainable Ecosystem Scaling Core Unit (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) as detailed below, if this executive proposal passes.

Based on the provided [budget transparency report](https://github.com/makerdao-ses/transparency-reporting/blob/main/Monthly%20Budget%20Statements/2022-08.md), **227.64 MKR** will be transferred to the SES-001 Auditor's Wallet at [0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6](https://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6) as a result of this executive proposal. 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
