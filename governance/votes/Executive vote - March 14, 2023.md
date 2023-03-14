---
title: Template - [Executive Vote] Emergency PSM Changes - March 14, 2023
summary: Introduces a Debt Ceiling Breaker, a new exception to GSM delay, which can instantly disable further borrowing from individual ilks once an executive vote has passed.
date: 2023-03-14T00:00:00.000Z
address: "0xDae88B7E4b5aBa407C40676B98559f7aEC925817"

---
# [Executive Proposal] Emergency PSM Changes - March 14, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an emergency executive proposal into the voting system, on behalf of the Risk Core Unit. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- Add a Debt Ceiling Breaker, [described in this post](https://forum.makerdao.com/t/out-of-schedule-executive-proposal-to-implement-psm-breaker/20162), which will allow Governance to bypass the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) when setting individual collateral types to a [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) of 0. This spell adds the three active [Peg Stability Modules](https://manual.makerdao.com/module-index/module-psm) to the Debt Ceiling Breaker whitelist.

If this executive proposal passes, the following **changes** will be made to the Maker Protocol:
- The [Global Debt Celiling (`Line`)](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling) will be increased 110% of the sum of the debts of collateral types UNIV2USDCETH-A, UNIV2DAIUSDC-A, GUNIV3DAIUSDC1-A, and GUNIV3DAIUSDC2-A at spell execution time to prevent recent updates causing the protocol to unintentionally reach the Global Debt Ceiling.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

While the Debt Ceiling Breaker will allow Governance to instantly set individual Debt Ceilings to 0, the addition of the module listed above is subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the addition listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **16 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Add Debt Ceiling Breaker

If this executive vote passes, based on this [emergency recommendation](https://forum.makerdao.com/t/out-of-schedule-executive-proposal-to-implement-psm-breaker/20162), a Debt Ceiling Breaker will be added that would allow Governance to individually set the [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) of any enabled vault-type to 0 with an executive vote.

#### Debt Ceiling Breaker Detail

This vote enables a module for Governance to call that can set any individual vault-type to a [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) of 0, while bypassing the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). The following PSMs will be added by this executive spell, with the ability to add future vault-types to the Breaker through an executive vote. 
- PSM-USDC-A
- PSM-PAX-A 
- PSM-GUSD-A

#### Additional Information

You can learn more about the list of [GSM Exceptions](https://manual.makerdao.com/governance/verification/gsm-exceptions) on the Maker Operational Manual.

The Emergency Response Procedure can be found in [MIP24](https://mips.makerdao.com/mips/details/MIP24).

### Global Debt Ceiling Changes

Based on the recommendations of the Protocol Engineering Team when testing, the [Global Debt Celiling (`Line`)](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling) will be increased 110% of the sum of the debts of collateral types UNIV2USDCETH-A, UNIV2DAIUSDC-A, GUNIV3DAIUSDC1-A, and GUNIV3DAIUSDC2-A at spell execution time, if this proposal passes.

This action is intended to correct for manually adjusting the [Global Debt Celiling (`Line`)](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling) during the last Emergency Executive. 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
