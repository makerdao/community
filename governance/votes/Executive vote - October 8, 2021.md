---
title: Template - [Executive Vote] Offboarding Vaults, MKR Vesting, and Core Unit Budget Distribution - October 8, 2021
summary: Offboards BAT-A, LRC-A, ZRX-A, UNIV2AAVEETH-A, and UNIV2LINKETH-A Vaults, establishes MKR vesting stream for RISK-001, and distributes the initial Core Unit Budget for CES-001.
date: 2021-10-08T00:00:00.000Z
address: "0x9400d4D59134af2a48a4bf4237E809A80f90Fe63"

---
# [Executive Proposal] Offboarding Vaults, MKR Vesting, and Core Unit Budget Distribution - October 8, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- BAT-A, LRC-A, ZRX-A, UNIV2AAVEETH-A, and UNIV2LINKETH-A Vaults will be offboarded as detailed below.
- 700 MKR will be streamed to the [Risk Core Unit (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2) as detailed below.
- 1,223,552 DAI will be distributed to the [Collateral Engineering Services Core Unit (CES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP20) as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure developer and liquidation coverage is available if this proposal passes.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Offboarding Vaults

Given the successful Signal Request Process from [this thread](https://forum.makerdao.com/t/signal-request-offboard-mana-bat-zrx-lrc-univ2-linketh-and-univ2-aaveeth/10467), the listed vaults will be offboarded by implementing the following changes if this executive proposal passes.

#### BAT-A

As per [this poll](https://vote.makerdao.com/polling/QmWJfX8U?network=mainnet#poll-detail), the following parameter changes will occur to offboard BAT-A if this executive proposal passes:

* Lower the BAT-A [Liquidation Penalty (chop)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
* Lower the BAT-A [Debt Ceiling (line)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
* Increase the BAT-A [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 150% to 800% over 60 days using dss-lerp.

#### LRC-A

As per [this poll](https://vote.makerdao.com/polling/QmUx9LVs?network=mainnet#poll-detail), the following parameter changes will occur to offboard LRC-A if this executive proposal passes:

* Lower the LRC-A [Liquidation Penalty (chop)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
* Lower the LRC-A [Debt Ceiling (line)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
* Increase the LRC-A [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 175% to 2600% over 60 days using dss-lerp.

#### ZRX-A

As per [this poll](https://vote.makerdao.com/polling/QmPfuF2W?network=mainnet#poll-detail), the following parameter changes will occur to offboard ZRX-A if this executive proposal passes:

* Lower the ZRX-A [Liquidation Penalty (chop)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
* Lower the ZRX-A [Debt Ceiling (line)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
* Increase the ZRX-A [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 175% to 900% over 60 days using dss-lerp.

#### UNIV2AAVEETH-A

As per [this poll](https://vote.makerdao.com/polling/QmcuJHkq?network=mainnet#poll-detail) the following parameter changes will occur to offboard UNIV2AAVEETH-A if this executive proposal passes:

* Lower the UNIV2AAVEETH-A [Liquidation Penalty (chop)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
* Lower the UNIV2AAVEETH-A [Debt Ceiling (line)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
* Increase the UNIV2AAVEETH-A [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 165% to 400% over 60 days using dss-lerp.

#### UNIV2LINKETH-A

As per [this poll](https://vote.makerdao.com/polling/Qmd7DPye?network=mainnet#poll-detail), the following parameter changes will occur to offboard UNIV2LINKETH-A if this executive proposal passes:

* Lower the UNIV2LINKETH-A [Liquidation Penalty (chop)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
* Lower the UNIV2LINKETH-A [Debt Ceiling (line)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
* Increase the UNIV2LINKETH-A [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 165% to 300% over 60 days using dss-lerp.

### RISK-001 MKR Vesting Stream

Given the successful outcome of [this poll](https://vote.makerdao.com/polling/QmUAXKm4?network=mainnet#poll-detail), a MKR Vesting stream with the following details will be established for the [Risk Core Unit (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2) if this executive proposal passes.

700 MKR will be streamed from the Protocol Treasury to **0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c** as detailed in the [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP25), with a start date of 2021-04-01 and an end date of 2022-04-01. MKR will not be claimable until 2022-04-01.

For more information, please visit the [proposal thread](https://forum.makerdao.com/t/mip40c3-sp25-risk-core-unit-mkr-compensation-risk-001/9788). 

### Distribute Initial CES-001 Core Unit Budget

Given the successful outcome of [this poll](https://vote.makerdao.com/polling/QmbM8u7Q?network=mainnet#poll-detail), the budget for the [Collateral Engineering Services Core Unit (CES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP20) will be distributed as described below if this executive proposal passes.

1,223,552 DAI will be sent to **0x25307aB59Cd5d8b4E2C01218262Ddf6a89Ff86da** as requested in [this budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP30).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
