---
title: Template - [Executive Vote] Mitigating Flash Loan Risk - October 30, 2020

---
## [Executive Vote] Mitigating Flash Loan Risk - October 30, 2020

The Governance Facilitator and the Smart Contracts Domain Team have placed an Executive Vote into the voting system which will enable the community to approve the following alterations to the protocol.

These changes have been created as an urgent response to the increased risk from flash loans, which are summarized in this [forum thread](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901).

### Increase the GSM Pause Delay

As per this [forum thread](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901), the GSM Pause Delay will be increased from 12 hours to 72 hours if this proposal passes. This change is being proposed in order to allow governance sufficient time to react to a governance attack on the Maker Protocol. 

### Deauthorize the Oracle Freeze Module

As per this [forum thread](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901), the Oracle Freeze Module (also known as `OsmMom`) will be deauthorized if this proposal passes. This change is being proposed in order to prevent the freezing of the Oracle price feed by an attacker using flash loans. This change will also prevent Maker Governance from freezing the oracle price feed without waiting for the GSM Pause Delay of 72 hours.

### Deauthorize the Liquidations Circuit Breaker

As per this [forum thread](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901), the Liquidations Circuit Breaker (also known as the  and `FlipperMom`) will be deauthorized if this proposal passes. This change is being proposed in order to prevent the freezing or unfreezing of vault liquidations by an attacker using flash loans. This change will also prevent Maker Governance from freezing or unfreezing liquidations without waiting for the GSM Pause Delay of 72 hours.

## Summary

Therefore, if this Executive proposal passes the following will occur:
- The GSM Pause Delay will be increased from 12 hours to 72 hours.
- The Oracle Freeze Module will be deauthorized.
- The Liquidations Circuit Breaker will be deauthorized.

The [Executive Vote](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will continue until the number of votes surpasses the total in favor of the previous Executive Vote. This is a [continuous approval](https://community-development.makerdao.com/en/learn/governance/how-voting-works) vote.

## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
