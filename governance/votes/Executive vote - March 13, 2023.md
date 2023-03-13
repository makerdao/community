---
title: Template - [Executive Vote] Emergency PSM Changes - March 13, 2023
summary: Introduce a PSM Breaker, a new exception to GSM delay, which will instantly disable additional borrowing from PSMs once an executive vote has passed.
date: 2023-03-13T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Emergency PSM Changes - March 13, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an emergency executive proposal into the voting system, on behalf of the Risk Core Unit. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- Add a PSM breaker, [described in this post](https://forum.makerdao.com/t/out-of-schedule-executive-proposal-to-implement-psm-breaker/20162), which will allow Governance to bypass the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) when setting all individual [Peg Stability Modules](https://manual.makerdao.com/module-index/module-psm) to 0 [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling).

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **16 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Add PSM Breaker

Based on this [emergency recommendation](https://forum.makerdao.com/t/out-of-schedule-executive-proposal-to-implement-psm-breaker/20162), a Peg Stability Module breaker will be added for all active PSMs (listed below) that would allow Governance to instantly to set their respective [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to 0, if this executive proposal passes.

#### PSM Breaker Detail

This voted enables a modeule for Governance to call that would set all active PSMs (listed below) to a [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) of 0, while bypassing the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay)
- PSM-USDC-A
- PSM-PAX-A 
- PSM-GUSD-A

#### Resources

You can learn more about the list of [GSM Exceptions](https://manual.makerdao.com/governance/verification/gsm-exceptions) on the Maker Operational Manual.

The Emergency Response Procedure can be found in [MIP24](https://mips.makerdao.com/mips/details/MIP24).


## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
