---
title: Template - [Executive Vote] June Core Unit Budget Distributions, Other Changes - June 4, 2021
summary: Vote for June Core Unit Budget Distributions, Other Changes
date: 2021-06-04T00:00:00.000Z
address: "0x379746b2bd85Bb837D44F5f9299C308F33Ed214A"

---
# [Executive Proposal] June Core Unit Budget Distributions, Other Changes - June 4, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

**Core Unit Budget Distributions - June**
- **40,000 DAI** will be distributed to **Real World Finance (RWF-001)**.
- **100,500 DAI** will be distributed to **Risk (RISK-001)**. 
- **80,000 DAI** will be distributed to **GovAlpha (GOV-001)**.
- **510,000 DAI** will be distributed to **Protocol Engineering (PE-001)**.
- **126,117 DAI** will be distributed to **Growth (GRO-001)**.
- **44,375 DAI** will be distributed to **Content Production (MKT-001)**.
- **642,135 DAI** will be distributed to **Sustainable Ecosystem Scaling (SES-001)**.

**Liquidations 2.0**
- The **USDC-A** vault type will be added to the Liquidations 2.0 framework, though liquidations will remain disabled.
- The **USDC-B** vault type will be added to the Liquidations 2.0 framework, though liquidations will remain disabled.
- The **TUSD-A** vault type will be added to the Liquidations 2.0 framework, though liquidations will remain disabled.
- The **PAXUSD-A** vault type will be added to the Liquidations 2.0 framework, though liquidations will remain disabled.
- The **GUSD-A** vault type will be added to the Liquidations 2.0 framework, though liquidations will remain disabled.
- The **PSM-USDC-A** vault type will be added to the Liquidations 2.0 framework, though liquidations will remain disabled.
- The **UNIV2DAIUSDC-A** vault type will be added to the Liquidations 2.0 framework, though liquidations will remain disabled.
- The **USDT-A** vault type will be added to the Liquidations 2.0 framework, though liquidations will be disabled.

**Other Changes**
- The **PSM-USDC-A** [Fee Out (`tout`)](https://community-development.makerdao.com/en/learn/governance/module-psm) will be decreased from 0.04% to 0%.
- The Global Debt Ceiling will be increased by 500 million DAI.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### June Core Unit Budget Distributions

Due to the positive outcomes of multiple [Core Unit Budget Proposals](https://mips.makerdao.com/mips/list?&search=$AND(%23core-unit,%20%23budget,%20%23active)&subproposalsMode=true), the following budget allocations will be made to fund operations in the month of June if this executive proposal passes.

- **40,000 DAI** will be distributed to the **[Real World Finance (RWA-001)](https://mips.makerdao.com/mips/details/MIP39c2SP1)**  core unit at **0x9e1585d9CA64243CE43D42f7dD7333190F66Ca09**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c2SP1).
- **100,500 DAI** will be distributed to the **[Risk (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2)**  core unit at **0xd98ef20520048a35EdA9A202137847A62120d2d9**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP2).
- **80,000 DAI** will be distributed to the **[GovAlpha (GOV-001)](https://mips.makerdao.com/mips/details/MIP39c2SP3)** core unit at **0x01D26f8c5cC009868A4BF66E268c17B057fF7A73**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP3) and modified within this forum [post](https://forum.makerdao.com/t/govalpha-administered-multi-sig/8304/3).
- **510,000 DAI** will be distributed to the **[Protocol Engineering (PE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP7)** core unit at **0xe2c16c308b843eD02B09156388Cb240cEd58C01c** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP7)
- **126,117 DAI** will be distributed to the **[Growth (GRO-001)](https://mips.makerdao.com/mips/details/MIP39c2SP4)**  core unit at **0x7800C137A645c07132886539217ce192b9F0528e**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP4).
- **44,375 DAI** will be distributed to the **[Content Production (MKT-001)](https://mips.makerdao.com/mips/details/MIP39c2SP5)**  core unit at **0x6A0Ce7dBb43Fe537E3Fd0Be12dc1882393895237** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP41c4SP5) and modified within this forum [post](https://forum.makerdao.com/t/adding-content-production-multisig/8428/5).
- **642,135 DAI** will be distributed to the **[Sustainable Ecosystem Scaling (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10)** core unit auditors wallet at **0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP10).

### Reduce the PSM-USDC-A Fee Out (`tout`)

Due to the positive outcome of [this](https://vote.makerdao.com/polling/Qmc7PYCn?network=mainnet#poll-detail) recent governance poll. The PSM-USDC-A Fee Out (`tout`) parameter will be decreased from 0.04% to 0% if this executive proposal passes.

### Liquidations 2.0 Migrations

To resolve technical debt and ensure that the Maker Protocol remains as maintainable as possible the Protocol Engineering Core Unit have proposed moving the last remaining stablecoin collateral types to the Liquidations 2.0 framework, as detailed in this forum [post](https://forum.makerdao.com/t/architectural-debt-cleanup-migrating-remaining-collaterals-to-liquidations-2-0/8515). Liquidations will be disabled for all of the following collateral types, and they will have placeholder auction parameters in the Liquidations 2.0 system if this executive proposal passes.
- USDC-A
- USDC-B
- TUSD-A
- PAXUSD-A
- GUSD-A
- PSM-USDC-A
- UNIV2DAIUSDC-A
- USDT-A

### Increase Global Debt Ceiling

Due to the recent issue in which the Global Debt Ceiling limited usage of the Maker Protocol for a number of days, the Protocol Engineering Core Unit has proposed increasing the Global Debt Ceiling in this forum [post](https://forum.makerdao.com/t/propose-to-raise-the-global-debt-ceiling/8516). 

Typically, the Global Debt Ceiling is the sum of all available Debt Ceilings. To alleviate the recent issue, this measure proposes adding a fixed amount of 500 million DAI to the sum of the debt ceilings.

The Global Debt Ceiling will be increased by 500 million DAI if this executive proposal passes.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
