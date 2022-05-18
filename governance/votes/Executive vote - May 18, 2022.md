---
title: Template - [Executive Vote] Foundational L2 Work, Authorize New Flash Mint Module, MKR Vesting - May 18, 2022
summary: Foundational L2 Work; Authorize New Flash Mint Module; MKR Vesting for the Sustainable Ecosystem Scaling Core Unit (SES-001).
date: 2022-05-18T00:00:00.000Z
address: "0x6febea3673AdF3925A01a61E46924B5b67A69Ec3"

---
# [Executive Vote] Foundational L2 Work, MKR Vesting - May 18, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- 541.47 MKR will be distributed to the [Sustainable Ecosystem Scaling Core Unit (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) as detailed below.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- (Foundational L2) A new `DssCure` module will be added and authorized as `MCD_CURE`.
- (Foundational L2) `MCD_END` (responsible for Emergency Shutdown logic) will be replaced.
- (Foundational L2) The existing ESM contract will point to the new `END`.
- A new Flash Mint Module will be added and authorized.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Core Unit MKR Vesting Transfer

As per their successful [MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP17), a total of **541.47 MKR** will be transferred to the [Sustainable Ecosystem Scaling Core Unit (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) at [0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6](http://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6) (SES-001's Auditor Wallet) if this executive proposal passes.

### Foundational L2 Work

The [Maker Teleport](https://forum.makerdao.com/t/introducing-maker-wormhole/11550) initiative, [previously known as Maker Wormhole](https://forum.makerdao.com/t/maker-wormhole-new-name-maker-teleport/15115), will be bringing canonical DAI capability onto L2 domains. As part of this development and to support L2->L1 fast-withdrawal functionality, it is necessary to introduce a new module called `DssCure` and update the existing `MCD_END` module to interact with it.

The following additions and changes will take place if this executive proposal passes:
- A new `DssCure` module will be added to the Maker Protocol as `MCD_CURE` in the chainlog.
- The `MCD_END` module will be replaced by a new version that interacts with `MCD_CURE`.
- The existing ESM contract `MCD_ESM` will be made to point to the new `MCD_END`.

For more details, please read [this forum post by the Protocol Engineering Core Unit (PE-001)](https://forum.makerdao.com/t/wednesday-18th-may-executive-dsscure-technical-enhancement/15175).

### New [Flash Mint Module](https://manual.makerdao.com/module-index/module-flash-mint-module)

As described in this [forum post](https://forum.makerdao.com/t/wednesday-18th-may-executive-flash-mint-module-technical-enhancement/15176) if this executive proposal passes the following changes will occur:
* A new Flash Mint Module will be deployed and authorized.
* The new module will have no fee parameter and charge no fee in order to save on gas.
* The Debt Ceiling will be set to 250M on the new module and reduced to 250M on the existing module to maintain 500M total.
* Both modules will be available in the chainlog as MCD_FLASH_LEGACY and MCD_FLASH.
* The intention is to remove the MCD_FLASH_LEGACY contract in a future executive proposal once usage has shifted to the new version.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
