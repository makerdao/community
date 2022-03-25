---
title: Template - [Executive Vote] Authorizing the ESM on DssFlash and Adding Support for TUSD Implementation - March 25, 2022
summary: Authorizing the Emergency Security Module on DssFlash to revoke governance control after Emergency Shutdown and adding support for the new TUSD implementation.
date: 2022-03-25T00:00:00.000Z
address: "0x63b730eF5364DF9f006E86B156AC97CDEf044780"

---
# [Executive Proposal] Support for TUSD Implementation and Authorizing the ESM on DssFlash - March 25, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The [Emergency Shutdown Module](https://makerdao.world/en/learn/governance/emergency-shutdown) will be authorized to revoke Governance control over the [Flash Mint Module (DssFlash)](https://manual.makerdao.com/module-index/module-flash-mint-module) after an Emergency Shutdown.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- Support for the new TUSD implementation contract ([0xd8D59c59Ab40B880b54C969920E8d9172182Ad7b](https://etherscan.io/address/0xd8d59c59ab40b880b54c969920e8d9172182ad7b)), which will allow collateral operations of TUSD-A to resume.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and will no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Authorizing ESM on DssFlash to Remove Governance Permissions

Based on [this post](https://forum.makerdao.com/t/proposed-security-fix-to-be-added-in-the-march-25th-2022-executive-spell/14197) from the [Protocol Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP38#protocol-engineering-pe-001-), the [Emergency Shutdown Module](https://makerdao.world/en/learn/governance/emergency-shutdown) will be authorized on the [Flash Mint Module](https://manual.makerdao.com/module-index/module-flash-mint-module) if this executive proposal passes.

This change is intended to patch a vulnerability discovered in the interaction [between the Emergency Shutdown Module and the Flash Mint Module](https://forum.makerdao.com/t/flash-loan-debt-manipulation-during-emergency-shutdown-vulnerability-postmortem/14036). Specifically, this change prevents a malicious governance action from re-activating the DssFlash module after the [FlashKiller contract](https://github.com/makerdao/flash-killer) disables it.

### Adding Support for New TUSD Implementation 

Based on [this post](https://forum.makerdao.com/t/2022-03-25-adding-support-for-the-new-tusd-implementation-address/14189) from the [Protocol Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP38#protocol-engineering-pe-001-), support for the new TUSD implementation address will be added if this executive proposal passes.

This addition is intended to resume the collateral operations for TUSD-A, which automatically halted after the [February 24th change](https://etherscan.io/tx/0x125823f2914e4f14e06b9b1b30fe9dd9512b36354cc1f6c063118c4fe03d8287) from the TUSD team pointed to a new implementation address.

For more information, please consider reading [this thread](https://forum.makerdao.com/t/tusd-disabled-due-to-unannounced-token-upgrade/2747) on the last time the TUSD contracts were changed.


## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
