---
title: Template - [Executive Vote] Parameter Changes, Return Unused Budget to the Surplus Buffer - November 12, 2021
summary: GUNIV3DAIUSDC-A, WSTETH-A, and DIRECT-AAVEV2-DAI parameter changes and return unused funds from GovAlpha to the Surplus Buffer.
date: 2021-11-12T00:00:00.000Z
address: "0x82b24156f0223879aaaC2DD0996a25Fe1FF74e1a"

---
# [Executive Proposal] Parameter Changes, Return Unused Budget Funds to the Surplus Buffer - November 12, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Changes to the GUNIV3DAIUSDC-A [Maximum Debt Ceiling (line)](https://makerdao.world/en/learn/governance/module-dciam), [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio), and [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee), as detailed below.
- [Maximum Debt Ceiling (line)](https://makerdao.world/en/learn/governance/module-dciam) parameter for WSTETH-A will be increased to 50 million DAI.
- Changes to the DIRECT-AAVEV2-DAI [Maximum Debt Ceiling (line)](https://makerdao.world/en/learn/governance/module-dciam), [Target Available Debt (gap)](https://makerdao.world/en/learn/governance/module-dciam), and Target Borrow Rate, as detailed below.
- 218,059.10 DAI will be returned to the Surplus Buffer from the PauseProxy contract.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### GUNIV3DAIUSDC-A Parameter Adjustments

As per [this poll](https://vote.makerdao.com/polling/QmemHGSM?network=mainnet), the following GUNIV3DAIUSDC-A parameter adjustments will occur, if this executive proposal passes:

* The [Maximum Debt Ceiling (line)](https://makerdao.world/en/learn/governance/module-dciam) will be increased from 50 million DAI to 500 million DAI.
* The [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio) will be decreased from 105% to 102%.
* The [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) will be decreased from 1% to 0.5%.

For more information on this proposal, please see this [discussion thread](https://forum.makerdao.com/t/request-to-raise-the-guniv3daiusdc1-a-dc-to-500m/11394).

### WSTETH-A Debt Ceiling Increase

As per [this poll](https://vote.makerdao.com/polling/QmeQUKFm?network=mainnet), the following change will occur, if this executive proposal passes:

* The [Maximum Debt Ceiling (line)](https://makerdao.world/en/learn/governance/module-dciam) will be increased from 5 million DAI to 50 million DAI.

For more information on this proposal, please see this [discussion thread](https://forum.makerdao.com/t/request-to-raise-staked-eth-dc-to-50m/11402).

### DIRECT-AAVEV2-DAI (Aave D3M) Parameter Adjustments

As per [this poll](https://vote.makerdao.com/polling/QmNbTzG1?network=mainnet#poll-detail), the following DIRECT-AAVEV2-DAI parameter adjustments will occur, if this executive proposal passes:

* The [Maximum Debt Ceiling (line)](https://makerdao.world/en/learn/governance/module-dciam) will be increased from 10 million DAI to 50 million DAI.
* The [Target Available Debt (gap)](https://makerdao.world/en/learn/governance/module-dciam) will be increased from 10 million DAI to 25 million DAI.
* The Target Borrow Rate will be decreased from 4% to 3.9%.

For more information on this proposal, please see this [discussion thread](https://forum.makerdao.com/t/d3m-dc-increase-target-borrow-rate-decrease-proposal/11421). Further information on DIRECT-AAVEV2-DAI (Aave D3M) can also be found in this [discussion thread](https://forum.makerdao.com/t/discussion-direct-deposit-dai-module-d3m/7357).

### Return Unused DAI to the Surplus Buffer

As per this [forum thread](https://forum.makerdao.com/t/govalpha-budget-return/11341), 218,059.81 unused DAI from the GovAlpha Core Unit budget will be returned to the Surplus Buffer from the PauseProxy contract, if this executive proposal passes. 

This amount comprises budgeted funds that were unused by the [GovAlpha Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP3).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
