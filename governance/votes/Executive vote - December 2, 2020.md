---
title: Template - [Executive Vote] Migrate to DsChief v1.2 - December 2, 2020

---
## [Executive Vote] Migrate to DsChief v1.2 - December 2, 2020

The Governance Facilitators and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system which will enable the community to approve the following alterations to the protocol. This Governance Contract migration is taking place to protect the Maker Protocol from the impact of flash loaned MKR on the governance process.

An overview and guide to the migration process can be found in this [forum post](https://forum.makerdao.com/t/dschief-v1-2-migration-steps/5412).

### De-authorize DsChief v1.1 on MCD

As described in this [forum post](https://forum.makerdao.com/t/dschief-1-2-flash-loan-protection-for-maker-governance/5115) if this proposal passes, DSChief v1.1 will be de-authorized from making changes to the Maker Protocol (MCD).

### Authorize DsChief v1.2 on MCD

As described in this [forum post](https://forum.makerdao.com/t/dschief-1-2-flash-loan-protection-for-maker-governance/5115) if this proposal passes, DSChief v1.2 will be authorized to make changes to the Maker Protocol (MCD).

### Re-authorize the Liquidations Circuit Breaker

As described [here](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901), one of the initial changes to protect the Maker Protocol from governance attacks using flash loans was to de-authorize the Liquidations Circuit Breaker. Given that DsChief v1.2 is not vulnerable to flash loans, this module can be re-authorized safely. If this proposal passes, the Liquidations Circuit Breaker will be re-authorized.

### Re-authorize the Oracle Freeze Module

As described [here](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901), one of the initial changes to protect the Maker Protocol from governance attacks using flash loans was to de-authorize the Oracle Freeze Module. Given that DsChief v1.2 is not vulnerable to flash loans, this module can be re-authorized safely. If this proposal passes, the Oracle Freeze Module will be re-authorized.

### Reduce the  GSM Pause Delay

As described [here](https://forum.makerdao.com/t/governance-security-module-gsm-adjustment/5421), the GSM Pause Delay will be reduced from 72 hours to 48 hours if this proposal passes. The GSM Pause Delay was raised to 72 hours as part of the initial set of changes to protocol the Maker Protocol from governance attacks using flash loans.

### De-authorize DsChief v1.1 on SCD (Single Collateral DAI)

SCD is no longer supported by Maker Governance, but DsChief v1.1 still retains permissions over SCD. Governance power over SCD is no longer necessary and can be removed safely. If this proposal passes, DSChief v1.1 will be de-authorized from making changes to Single Collateral DAI. 

### Replace the VoteProxyFactory contract

The VoteProxyFactory contract creates VoteProxy contracts that power the hot/cold voting wallet functionality in MCD. A new version of the factory is required to support DsChief v1.2. 

## Summary

Therefore, if this Executive proposal passes the following will occur:
- DsChief v1.1 will be de-authorized and will no longer be able to make changes to the Maker Protocol (MCD).
- DsChief v1.2 will be authorized to make changes to the Maker Protocol (MCD).
- The Liquidations Circuit Breaker will be authorized to make changes to the Maker Protocol (MCD).
- The Oracle Freeze Module will be authorized to make changes to the Maker Protocol (MCD).
- The GSM Pause Delay will be reduced from 72 hours to 48 hours.
- DsChief v1.1 will be de-authorized and will no longer be able to make changes to Single Collateral DAI (SCD).
- The Chainlog will be updated to point to the new version of the VoteProxyFactory contract.

The [Executive Vote](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will continue until the number of votes surpasses the total in favor of the previous Executive Vote. This is a [continuous approval](https://community-development.makerdao.com/en/learn/governance/how-voting-works) vote.

Note that this proposal will include an office-hours modifier that means it can only be cast between 14:00 and 21:00 UTC, Monday - Friday. This is to ensure that the Smart Contracts Team is available to react to any issues that arise from the migration process.

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
