---
title: Template - [Executive Vote] Aave D3M Onboarding and Core Unit Budget Transfers - October 29, 2021
summary: Onboarding the Aave DAI Direct Deposit (D3M) module and transferring and streaming DAI to GRO-001 and DIN-001.
date: 2021-10-29T00:00:00.000Z
address: "0xf86D621f42ec36B6fd4e5dc660A47Ad98D50CfC0"

---
# [Executive Proposal] Aave D3M Onboarding and Core Unit Budget Transfers - October 29, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Aave DAI Direct Deposit Module will be onboarded to the Maker Protocol. 
- The [Data Insights Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP22) will receive 107,500 DAI upon execution, and 357,000 DAI streamed over 6 months.
- The [Growth Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP4) will receive 791,138 DAI upon execution, and 942,663 DAI streamed over 8 months.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Aave DAI Direct Deposit Module Onboarding

As per the successful outcome of [this governance poll](https://vote.makerdao.com/polling/QmexUjoD?network=mainnet#poll-detail), the Aave DAI Direct Deposit Module will be onboarded to the Maker Protocol with the parameters below if this executive proposal passes. Note that this module is set to target the Aave v2 market.

* [Maximum Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/module-dciam): 10 million DAI
* [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 10 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 12 hours
* Target Borrow Rate: 4%

Please review the following forum threads containing information about the Aave DAI Direct Deposit Module to inform your position before voting.
* [Discussion Thread](https://forum.makerdao.com/t/discussion-direct-deposit-dai-module-d3m/7357)
* [MIP Thread](https://forum.makerdao.com/t/mip50-direct-deposit-module/7356)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/d3m-risk-assessment/9353)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/direct-aavev2-dai-direct-deposit-module-technical-assessment/10751)

### Core Unit Budget Distribution

As per multiple successful budget subproposals, DAI will be distributed to the [Growth Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP4) and the [Data Insights Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP22) as detailed below if this executive proposal passes.
* 107,500 DAI will be transferred to the [Data Insights Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP22) at 0x7327Aed0Ddf75391098e8753512D8aEc8D740a1F upon execution as per their [recent budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP34).
* 791,138 DAI will be transferred to the [Growth Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP4) at 0x7800C137A645c07132886539217ce192b9F0528e upon execution as per their [recent budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP37).
* 357,000 DAI will be streamed to the [Data Insights Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP22) at 0x7327Aed0Ddf75391098e8753512D8aEc8D740a1F over a six month period starting 2021-11-01 as per their [recent budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP34). 
* 942,663 DAI will be streamed to the [Growth Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP4) at 0x7800C137A645c07132886539217ce192b9F0528e over an eight month period starting 2021-11-01 as per their [recent budget subproposal](https://mips.makerdao.com/mips/details/MIP40c3SP37).

### Technical Tasks

This executive proposal also adds two smart contracts to DssChainLog; LERP_FAB and JOIN_FAB. More information can be found on the forum post [here](https://forum.makerdao.com/t/technical-tasks-included-in-the-october-29th-executive/11284). These smart contracts represent efficiency improvements to the executive spell workflow, and have no direct effect on the Maker Protocol.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
