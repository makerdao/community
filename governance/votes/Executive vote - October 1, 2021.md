---
title: Template - [Executive Vote] Offboarding USDT Collateral, Core Unit Budget Distributions - October 1, 2021 
summary: Offboards USDT collateral types and distributes core unit DAI budgets to GOV-001, SNE-001, SH-001, SES-001 and DUX-001. Distributes retroactive MKR for RISK-001.
date: 2021-10-01T00:00:00.000Z
address: "0xc300083F97dD978596085B7EaBd58099186623B8"

---
# [Executive Proposal] Offboarding Collateral, Core Unit Budget Distributions - October 1, 2021 

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The USDT-A vault type will be offboarded as detailed below.
- A total of 972,706 DAI will be transfered upon proposal execution to the [SES-001](https://mips.makerdao.com/mips/details/MIP39c2SP10), [DUX-001](https://mips.makerdao.com/mips/details/MIP39c2SP18), [SNE-001](https://mips.makerdao.com/mips/details/MIP39c2SP19) and [SH-001](https://mips.makerdao.com/mips/details/MIP39c2SP11) core units as part of their initial DAI budgets.
- A total of 193,375 DAI will be streamed to [SNE-001](https://mips.makerdao.com/mips/details/MIP39c2SP19) and [SH-001](https://mips.makerdao.com/mips/details/MIP39c2SP11) over the next 3 months as part of their ongoing budget.
- 538,400 DAI will be streamed to [GOV-001](https://mips.makerdao.com/mips/details/MIP39c2SP3) over the next 6 months as part of their ongoing budget.
- 300 MKR will be transferred upon proposal execution to [RISK-001](https://mips.makerdao.com/mips/details/MIP39c2SP2) as the retroactive part of their MKR budget subproposal. This MKR will be sourced from the MakerDAO treasury.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure developer and liquidation coverage is available if this proposal passes.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Offboarding USDT Vault Types

As per the positive outcome of this governance [poll](https://vote.makerdao.com/polling/QmRNwrTy?network=mainnet#vote-breakdown), USDT vault types will be offboarded if this executive proposal passes. Specifically, this involves the following parameter changes:
* Lower the USDT-A [Liquidation Penalty (`chop`)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
* Increase the USDT-A [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 150% to 300% to trigger liquidation of all remaining vaults.
* Liquidations will be enabled for USDT-A.

USDT-A is the only USDT vault type with outstanding debt, and all USDT vault types have a zero [debt ceiling](https://makerdao.world/en/learn/governance/param-debt-ceiling).

### Core Unit Budget Immediate DAI Transfers

Given the ratified budget subproposals linked below, immediate DAI distributions will be made for the following core units in the following amounts if this executive proposal passes.
* The [Sustainable Ecosystem Scaling (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) Core Unit will recieve 307,631 DAI at 0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6 as per their latest [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP31).
* The [Development & UX (DUX-001)](https://mips.makerdao.com/mips/details/MIP39c2SP18) Core Unit will recieve 483,575 DAI at 0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad as per their latest [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP26).
* The [StarkNet Engineering (SNE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP19) Core Unit will recieve 75,000 DAI  at 0x6D348f18c88D45243705D4fdEeB6538c6a9191F1 as per their latest [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP28).
* The [Strategic Happiness (SH-001)](https://mips.makerdao.com/mips/details/MIP39c2SP11) Core Unit will recieve 106,500 DAI at 0x955993Df48b0458A01cfB5fd7DF5F5DCa6443550 as per their latest [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP16).

### Core Unit Budget DAI Streaming

Given the ratified budget subproposals linked below, DAI streams will be set up for the following core units if this executive proposal passes.
* The [GovAlpha (GOV-001)](https://mips.makerdao.com/mips/details/MIP39c2SP3) Core Unit will receive 538,400 DAI streamed over 6 months starting 2021-10-01 as per their latest [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP29).
* The [Starknet Engineering (SNE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP19) Core Unit will receive 135,375 DAI streamed over 3 months starting 2021-10-01 as per their latest [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP28).
* The [Strategic Happiness (SH-001)](https://mips.makerdao.com/mips/details/MIP39c2SP11) Core Unit will receive 58,000 DAI streamed over 3 months starting 2021-10-01 as per their latest [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP16).

### RISK-001 Retroactive MKR Distribution

As per the [Risk Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP2)'s ratified [budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP25), 300 MKR will be transferred to RISK-001 if this executive proposal passes. This MKR will be sourced from the MakerDAO treasury.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
