---
title: Template - [Executive Vote] Mitigate Post-Shutdown Flash Loan Vulnerability - March 9, 2022
summary: Out-of-schedule executive proposal to mitigate the recently discovered post-shutdown flash loan vulnerability.
date: 2022-03-09T00:00:00.000Z
address: "0x068F8fb8318506bFbaD57B494A0c7b31399f4Ed6"

---
# [Executive Proposal] Mitigate Post-Shutdown Flash Loan Vulnerability - March 9, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an out-of-schedule executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

This out-of-schedule executive proposal mitigates the post-shutdown flash loan vulnerability in the Maker Protocol as described by the Protocol Engineering Core Unit [here](https://forum.makerdao.com/t/post-shutdown-flash-loan-vulnerability-announcement-and-remediation-plan/13746). Note that there is no risk to Maker Protocol or any of its stakeholders so long as [Emergency Shutdown](https://makerdao.world/en/learn/governance/emergency-shutdown) has not been triggered. 

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Mitigate Post-Shutdown Flash Loan Vulnerability

If this executive proposal passes, it will mitigate the post-shutdown flash loan vulnerability in the Maker Protocol as described by the Protocol Engineering Core Unit [here](https://forum.makerdao.com/t/post-shutdown-flash-loan-vulnerability-announcement-and-remediation-plan/13746). It does this by:
* Giving a new module `flash-killer` authorization over the [Flash Mint Module](https://manual.makerdao.com/module-index/module-flash-mint-module), such that anyone can permissionlessly use `flash-killer` to disable the [Flash Mint Module](https://manual.makerdao.com/module-index/module-flash-mint-module) in the event of [Emergency Shutdown](https://makerdao.world/en/learn/governance/emergency-shutdown) being triggered.
* The vulnerability is not exploitable until 3 days (currently) after [Emergency Shutdown](https://makerdao.world/en/learn/governance/emergency-shutdown) is triggered, meaning there is a 3-day window where any user can disable the [Flash Mint Module](https://manual.makerdao.com/module-index/module-flash-mint-module) using `flash-killer` before an exploit can take place.

The Protocol Engineering Core Unit considers this a temporary mitigation and recommends that the issue be solved more permanently in the future via the replacement of the [Flash Mint Module](https://manual.makerdao.com/module-index/module-flash-mint-module). The source code for the `flash-killer` module can be found [here](https://github.com/makerdao/flash-killer). The `flash-killer` contract address is [0x07a4BaAEFA236A649880009B5a2B862097D9a1cD](https://etherscan.io/address/0x07a4BaAEFA236A649880009B5a2B862097D9a1cD).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
