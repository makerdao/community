---
title: Template - [Executive Vote] Rates Changes, July Core Unit Budgets, and PSM DC-IAM - July 2, 2021
summary: Vote for Rates Changes, July Core Unit Budgets, and PSM DC-IAM
date: 2021-07-02T00:00:00.000Z
address: "0xEC782b5aC1f0Fc096Ad30950f3348670980f7FD3"

---
# [Executive Proposal] Rates Changes, July Core Unit Budgets, and PSM DC-IAM - July 2, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

**Core Unit Budget Distributions - July**  
DAI will be distributed to the Core Units as specified within their ratified budget proposals.

| Core Unit | Distribution |
|-|-|
| Growth (GRO-001) | 126,117 DAI|
| Content Production (MKT-001) | 44,375 DAI|
| GovAlpha (GOV-001) | 273,334 DAI|
| Real World Finance (RWF-001) | 155,000 DAI|
| Risk (RISK-001) | 182,000 |
| Protocol Engineering (PE-001) | 510,000 DAI|
| Oracles (ORA-001) | 419,677 DAI|
| Oracles (ORA-001) - Continuity Reserve | 800,000 DAI|
| **Total** | **2,510,503 DAI** |

**[Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) Decreases**

| Vault Type | Current Rate | Proposed Rate | Change |
|-|-|-|-|
| ETH-A | 3.50% | 2.00% | -1.50% |
| ETH-B | 9.00% | 6.00% | -3.00% |
| ETH-C | 1.00% | 0.50% | -0.50% |
| WBTC-A | 3.50% | 2.00% | -1.50% |
| LINK-A | 4.00% | 1.00% | -3.00% |
| YFI-A | 4.00% | 1.00% | -3.00% |
| UNI-A | 2.00% | 1.00% | -1.00% |
| AAVE-A | 2.00% | 1.00% | -1.00% |
| RENBTC-A | 4.00% | 2.00% | -2.00% |
| COMP-A | 3.00% | 1.00% | -2.00% |
| BAL-A | 2.00% | 1.00% | -1.00% |
| UNIV2DAIETH-A | 2.50% | 1.50% | -1.00% |
| UNIV2USDCETH-A | 3.50% | 2.00% | -1.50% |
| UNIV2DAIUSDC-A | 0.50% | 0.00% | -0.50% |
| UNIV2WBTCETH-A | 3.50% | 2.00% | -1.50% |
| UNIV2UNIETH-A | 4.00% | 2.00% | -2.00% |
| UNIV2ETHUSDT-A | 4.00% | 2.00% | -2.00% |

**Other Changes**

Activate the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) for the PSM-USDC-A vault type with the following parameters:
- Maximum Debt Ceiling (`line`) = 10 billion DAI.
- Target Available Debt (`gap`) = 1 billion DAI.
- Ceiling Increase Cooldown (`ttl`) = 24 hours.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal **does not** include an office-hours modifier and can be executed immediately after the GSM Pause Delay has expired.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### July Core Unit Budget Distributions

Due to the positive outcomes of multiple Core Unit Budget Proposals, the following budget allocations will be made to fund operations in the month of July if this executive proposal passes.

**155,000 DAI** will be distributed to the **[Real World Finance (RWA-001)](https://mips.makerdao.com/mips/details/MIP39c2SP1)**  core unit at **0x9e1585d9CA64243CE43D42f7dD7333190F66Ca09**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP12).

**182,000 DAI** will be distributed to the **[Risk (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2)**  core unit at **0xd98ef20520048a35EdA9A202137847A62120d2d9**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP13).

**273,334 DAI** will be distributed to the **[GovAlpha (GOV-001)](https://mips.makerdao.com/mips/details/MIP39c2SP3)** core unit at **0x01D26f8c5cC009868A4BF66E268c17B057fF7A73**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP11). Note that this includes the GovAlpha continuity budget.

**510,000 DAI** will be distributed to the **[Protocol Engineering (PE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP7)** core unit at **0xe2c16c308b843eD02B09156388Cb240cEd58C01c** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP7).

**126,117 DAI** will be distributed to the **[Growth (GRO-001)](https://mips.makerdao.com/mips/details/MIP39c2SP4)**  core unit at **0x7800C137A645c07132886539217ce192b9F0528e**  as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP4).

**44,375 DAI** will be distributed to the **[Content Production (MKT-001)](https://mips.makerdao.com/mips/details/MIP39c2SP5)**  core unit at **0xDCAF2C84e1154c8DdD3203880e5db965bfF09B60** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP41c4SP5) and modified within this forum [post](https://forum.makerdao.com/t/adding-content-production-multisig/8428/5).

**419,677 DAI** will be distributed to the **[Oracles (ORA-001)](https://mips.makerdao.com/mips/details/MIP39c2SP13)** core unit operational wallet at **0x2d09B7b95f3F312ba6dDfB77bA6971786c5b50Cf** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP15).

**800,000 DAI** will be distributed to the **[Oracles (ORA-001)](https://mips.makerdao.com/mips/details/MIP39c2SP13)** core unit continuous operation wallet at **0x53CCAA8E3beF14254041500aCC3f1D4edb5B6D24** as specified in their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP15).

July's Core Unit budget distributions come total **2,510,503 DAI.**


### Stability Fee Decreases

As per the successful outcome to [this](https://vote.makerdao.com/polling/QmfZWY87?network=mainnet#poll-detail) governance poll, [stability fees](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) will be decreased on multiple vault types if this executive proposal passes. These changes are listed below. Further details and discussion related to this proposal can be found [here](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-28-june-2021/8991).

| Vault Type | Current Rate | Proposed Rate | Change |
|-|-|-|-|
| ETH-A | 3.50% | 2.00% | -1.50% |
| ETH-B | 9.00% | 6.00% | -3.00% |
| ETH-C | 1.00% | 0.50% | -0.50% |
| WBTC-A | 3.50% | 2.00% | -1.50% |
| LINK-A | 4.00% | 1.00% | -3.00% |
| YFI-A | 4.00% | 1.00% | -3.00% |
| UNI-A | 2.00% | 1.00% | -1.00% |
| AAVE-A | 2.00% | 1.00% | -1.00% |
| RENBTC-A | 4.00% | 2.00% | -2.00% |
| COMP-A | 3.00% | 1.00% | -2.00% |
| BAL-A | 2.00% | 1.00% | -1.00% |
| UNIV2DAIETH-A | 2.50% | 1.50% | -1.00% |
| UNIV2USDCETH-A | 3.50% | 2.00% | -1.50% |
| UNIV2DAIUSDC-A | 0.50% | 0.00% | -0.50% |
| UNIV2WBTCETH-A | 3.50% | 2.00% | -1.50% |
| UNIV2UNIETH-A | 4.00% | 2.00% | -2.00% |
| UNIV2ETHUSDT-A | 4.00% | 2.00% | -2.00% |

### Activate Debt Ceiling Instant Access Module for PSM-USDC-A

As per the successful outcome to [this](https://vote.makerdao.com/polling/QmZz4ssm?network=mainnet#poll-detail) governance poll, PSM-USDC-A will be enabled on the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) if this executive proposal passes. Further details and discussion of this proposal can be found [here](https://forum.makerdao.com/t/signal-request-adjust-psm-usdc-a-for-whatever-it-takes-to-keep-the-peg/8601).
- Maximum Debt Ceiling (`line`): 10 billion DAI
- Target Available Debt (`gap`): 1 billion DAI
- Ceiling Increase Cooldown (`ttl`): 24 hours

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
