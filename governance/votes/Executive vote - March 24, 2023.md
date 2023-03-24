---
title: Template - [Executive Vote] Emergency Spell for Emergency Shutdown Governance Vulnerability - March 24, 2023
summary: Enables the Emergency Shutdown Module to remove Governance’s authority on the MCD_JOIN_CRVV1ETHSTETH_A, MCD_CROPPER, and CHANGELOG contracts to prevent malicious actions after Emergency Shutdown.
date: 2023-03-24T00:00:00.000Z
address: "0xf34fFe4191c02608f0262172C9C45f48Fd3C3D92"

---
# [Executive Proposal] Emergency Spell to resolve Emergency Shutdown Governance Vulnerability - March 24, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Emergency Shutdown Module will be able to remove Governance’s authority on the MCD_JOIN_CRVV1ETHSTETH_A, MCD_CROPPER, and CHANGELOG contracts.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **16 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Emergency Shutdown Module Changes

Based on this [recommendation](https://forum.makerdao.com/t/emergency-shutdown-governance-vulnerability-proposed-emergency-spell/20255) from the [Protocol Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP7), the [Emergency Shutdown Module](https://manual.makerdao.com/governance/emergency-shutdown) will be able to remove Governance’s authority over the following contracts, if this executive proposal passes.

Specifically, this means that after shutdown is triggered, it will be possible to permissionlessly de-authorize the GSM pause proxy from these contracts. This will need to be done within the GSM delay. It is a pattern in use for a number of other contracts already.

#### Affected Contracts 

[MCD_JOIN_CRVV1ETHSTETH_A](https://etherscan.io/address/0x82d8bfdb61404c796385f251654f6d7e92092b5d) 

This contract is authorized on the Vat and uses an upgradability pattern, so it could be upgraded post-shutdown to steal collateral.

[MCD_CROPPER](https://etherscan.io/address/0x8377cd01a5834a6ead3b7efb482f678f2092b77e) 

This contract is upgradable and authorized on MCD_JOIN_CRVV1ETHSTETH_A, so it could be used to upgrade that contract post-shutdown and execute the attack mentioned above.

[CHANGELOG](https://etherscan.io/address/0xda0ab1e0017debcd72be8599041a2aa3ba7e740f)  

While there is no known danger to the core system from this contract after shutdown, it is being included because external integrations may be depending on it in unsafe ways, and knowing it cannot be corrupted may be useful for future tooling built around Emergency Shutdown.

#### Emergency Response

This spell was organized under [MIP24: Emergency Response](https://mips.makerdao.com/mips/details/MIP24). The [GovAlpha Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP3) confirmed the emergency [here](https://forum.makerdao.com/t/emergency-spell-march-24-2023/20256). Please review the relevant threads before placing your MKR in support of this executive.


## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
