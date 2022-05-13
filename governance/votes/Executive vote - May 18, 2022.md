---
title: Template - [Executive Vote] Adding and Authorizing DssCure and Related Modifications, MKR Vesting - May 13, 2022
summary: Adding and Authorizing DssCure and related modifications; MKR Vesting for the Sustainable Ecosystem Scaling Core Unit (SES-001).
date: 2022-05-13T00:00:00.000Z
address: "$spell_address"

---
# [Executive Vote] Adding and Authorizing DssCure and Related Modifications, MKR Vesting - May 13, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- 541.47 MKR will be distributed to the [Sustainable Ecosystem Scaling Core Unit (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) as detailed below.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- A new `DssCure` module will be added and authorized.
- `MCD_END` will be replaced.
- The existing ESM contract will point to the new `END`.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Core Unit MKR Vesting Streams

As per their successful [MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP17), a total of **541.47 MKR** will be distributed to the [Sustainable Ecosystem Scaling Core Unit (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) at [0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6](http://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6) (SES-001's Auditor Wallet).

### Addition of the `DssCure` Module and Related Modifications

#### Context

The [Maker Teleport](https://forum.makerdao.com/t/introducing-maker-wormhole/11550) initiative, [previously known as Maker Wormhole](https://forum.makerdao.com/t/maker-wormhole-new-name-maker-teleport/15115), will be bringing canonical DAI capability onto L2 domains. As part of this development it is necessary to introduce a new module called `DssCure` and update the existing `End` module to interact with it.

#### What It Is

In the event of an [Emergency Shutdown](https://docs.makerdao.com/smart-contract-modules/shutdown), the `DssCure` module ensures a fair distribution to DAI holders by calculating how much debt needs to be reduced where there is pre-minted, unused DAI sitting in the `Vat`. Discounting these pre-minted, out-of-circulation DAI is is necessary for the correct calculation of the outstanding DAI---otherwise, the artificial, increased debt resulting from factoring in the pre-minted DAI will result in DAI holders receiving less collateral than they are entitled to.

`DssCure` sits between the `Vat` and `End` so that `End` receives the correct amount of debt.

More generally, `DssCure` has the capability to add or remove sources from circulation.

For more details, please read [this forum post by the Protocol Engineering Core Unit (PE-001)]().

#### Additions and Modifications

A new `DssCure` module will be added to the Maker Protocol. The `MCD_END` module will be replaced by a new version that interacts with `DssCure`.
- The existing ESM contract will be made to point to the new `MCD_END`.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
