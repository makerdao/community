---
title: Template - [Executive Vote] Enable DC-IAM for RWA-007-A (Monetalis Clydesdale), GUSD PSM Parameter Changes - October 13 , 2022
summary: Enable a Debt Ceiling Instant Access Module for RWA-007-A, parameter changes for the GUSD PSM.
date: 2022-10-19T00:00:00.000Z
address: "0x8E4faFef5bF61f09654aDeB46E6bC970BcD42c52"

---
# [Executive Proposal] Enable DC-IAM for RWA-007-A (Monetalis Clydesdale), GUSD PSM Parameter Changes - October 13 , 2022

The Governance Facilitator(s), the Collateral Engineering Services Core Unit, and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Parameter changes for the GUSD PSM including raising the Maximum Debt Ceiling, raising the Target Available Debt, and raising the Fee Out, detailed below.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- A Debt Ceiling Instant Access Module (DC-IAM) with the parameters listed below will be added to the RWA-007-A Vault type.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Enable DC-IAM for RWA-007-A

As per the [technical assessment](https://forum.makerdao.com/t/rwa007-mip65-monetalis-clydesdale-ces-domain-team-assessment/17787) by the Collateral Engineering Services Core Unit ([CES-001](https://mips.makerdao.com/mips/details/MIP39c2SP20)) for the approved [MIP65: Monetalis Clydesdale](https://mips.makerdao.com/mips/details/MIP65), a Debt Ceiling Instant Access Module (DC-IAM) will be added to RWA-007-A if this executive proposal passes.

The DC-IAM parameters will be set as follows:
* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): **250 million DAI**.
* [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): **50 million DAI**.
* [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): **1 week (604,800 seconds)**.

For more information on the DC-IAM, please see the documentation [here](https://manual.makerdao.com/module-index/module-dciam).

### GUSD PSM Parameter Changes

As per this successful governance [poll](https://vote.makerdao.com/polling/QmYffkvR#vote-breakdown), the following parameter changes will be made to the GUSD PSM (PSM-GUSD-A) if this executive proposal passes:
* Increase the [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 440 million DAI from 60 million DAI to **500 million DAI**.
* Increase the [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 40 million DAI from 10 million DAI to **50 million DAI**.
* Increase the [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) by 20 bps from 0 to **20 bps**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
