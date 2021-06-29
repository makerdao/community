---
title: Template - [Executive Vote] Flash Mint Implementation, Debt Floor Changes - June 18, 2021
summary: Vote for Flash Mint Implementation, Debt Floor Changes
date: 2021-06-18T00:00:00.000Z
address: "0xd498E7DEE467d1eb6Ed3933e579c427E168b6E6c"

---
# [Executive Proposal] Flash Mint Implementation, Debt Floor Changes - June 18, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- The [Flash Mint Module](https://mips.makerdao.com/mips/details/MIP25) will be activated and authorized to flash-mint DAI.

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The [Debt Floor](https://community-development.makerdao.com/en/learn/governance/param-debt-floor) (`dust`) parameter for all vault types *excluding* PSM-USDC-A, ETH-B and ETH-C will be increased from 5,000 DAI to 10,000 DAI.
- The [Debt Floor](https://community-development.makerdao.com/en/learn/governance/param-debt-floor) (`dust`) parameter for the ETH-B vault type will be increased from 15,000 DAI to 30,000 DAI.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal **does not** include an office-hours modifier that would require it to be cast between the hours of 14:00 and 21:00 UTC.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Flash Mint Module Activation

As per the outcome of the November 2020 Monthly Governance Cycle [executive](https://vote.makerdao.com/executive/5fbb7ab169fd97001ae7442b?network=mainnet#proposal-detail). The Flash Mint Module has been implemented and deployed by the Protocol Engineering Core Unit. The Flash Mint Module has the following governable parameters:

`Max`: Denotes the maximum amount of DAI that can be flash-minted at any one time.  
`Toll`: Denotes the percentage fee paid by users of the flash-mint module.  

If this executive proposal passes, the Flash Mint Module will be authorized to mint DAI with the following initial parameters, determined by this [poll](https://vote.makerdao.com/polling/QmfXqV5V?network=mainnet#poll-detail), and this [forum post](https://forum.makerdao.com/t/flash-mint-module-initial-parameters/8835):

`Max`: 500 million DAI  
`Toll`: 0.05%  

### General Debt Floor (`dust`) Increases

As per the outcome of [this](https://vote.makerdao.com/polling/QmZRuAtn?network=mainnet) governance poll, the Debt Floor (`dust`) parameter for **all vault types** with the exception of PSM-USDC-A, ETH-B and ETH-C will increase from **5,000 DAI** to **10,000 DAI** if this executive proposal passes.

Please see this [signal request](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-3/8315) for further details and discussion on this proposal.


### ETH-B Debt Floor (`dust`) Increase

As per the outcome of [this](https://vote.makerdao.com/polling/QmZAc7U9?network=mainnet) governance poll, the Debt Floor (`dust`) parameter for the ETH-B vault type will increase from **15,000 DAI** to **30,000 DAI** if this executive proposal passes.

Please see this [signal request](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-3/8315) for further details and discussion on this proposal.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
