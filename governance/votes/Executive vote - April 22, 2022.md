---
title: Template - [Executive Vote] Oracle Whitelist Additions, Replacing the Curve stETH/ETH Oracle - April 22, 2022
summary: Whitelist Oasis.app on multiple oracles and replacing and reactiviating the Curve stETH/ETH Oracle.
date: 2022-04-22T00:00:00.000Z
address: "0x530708D653D540B3FcE6dF02da95588834aD39f2"

---
# [Executive Proposal] Oracle Whitelist Additions, Replacing the Curve stETH/ETH Oracle - April 22, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Oasis.app will be whitelisted on multiple oracles as detailed below.
- The Curve stETH/ETH oracle (used for CRVV1ETHSTETH-A vaults) will be replaced and reactivated.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Oasis.app Whitelists

As per the outcome of this [governance poll](https://vote.makerdao.com/polling/QmZykRSM#poll-detail), [Oasis.app](https://oasis.app/) will be whitelisted on the following OSM Oracles if this executive proposal passes:
* ETH/USD
* WSTETH/USD
* WBTC/USD
* RENBTC/USD
* YFI/USD
* UNI/USD
* LINK/USD
* MANA/USD

### Replacing the Curve stETH/ETH Oracle

Due to technical issues referenced [here](https://forum.makerdao.com/t/14th-april-emergency-executive/14642), the Curve stETH/ETH oracle will be replaced and reactivated if this executive proposal passes. This will involve:
* Removing permissions on the previous oracle implementation.
* Adding permissions on the new oracle implementation.
* Replicating the whitelist for this oracle on the new implementation.

This action will restore full functionality to the Curve stETH/ETH oracle and CRVV1ETHSTETH-A vaults. 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
