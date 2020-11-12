---
title: Template - [Executive Vote] Approve September 2020 Governance Cycle Bundle - September 28, 2020

---
## [Executive Vote] Approve September 2020 Governance Cycle Bundle - September 28, 2020

The Governance Facilitators and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system which will enable the community to approve the following alterations to the protocol.

## August 2020 Governance Cycle Bundle

As per [MIP3: Governance Cycle](https://github.com/makerdao/mips/blob/master/MIP3/mip3.md), this bundle consists of the proposals that have met the prior requirements to be included in the monthly MIPs executive. These proposals are as follows:

**Maker Improvement Proposals**  
- [MIP15: Dark Spell Mechanism](https://github.com/makerdao/mips/blob/formal-submission/MIP15/mip15.md) - [Discussion](https://forum.makerdao.com/t/mip15-dark-spell-mechanism/2578)

**Sub-Proposals**  
- [MIP12c2-SP4: LRC Collateral Onboarding](https://github.com/makerdao/mips/blob/formal-submission/MIP12/MIP12c2-Subproposals/MIP12c2-SP4.md) - [Discussion](https://forum.makerdao.com/t/mip12c2-sp4-domain-work-requirements-for-lrc/3558)
- [MIP12c2-SP5: COMP Collateral Onboarding](https://github.com/makerdao/mips/blob/formal-submission/MIP12/MIP12c2-Subproposals/MIP12c2-SP5.md) - [Discussion](https://forum.makerdao.com/t/mip12c2-sp5-comp-collateral-onboarding/4065)
- [MIP12c2-SP6: LINK Collateral Onboarding](https://github.com/makerdao/mips/blob/formal-submission/MIP12/MIP12c2-Subproposals/MIP12c2-SP6.md) - [Discussion](https://forum.makerdao.com/t/mip12c2-sp6-link-collateral-onboarding/4066)
- [MIP7c3-SP3: Domain Team Onboarding (Risk Domain Team)](https://github.com/makerdao/mips/blob/formal-submission/MIP7/MIP7c3-Subproposals/MIP7c3-SP3.md) - [Discussion](https://forum.makerdao.com/t/mip7c3-sp3-domain-team-onboarding-risk-domain-team/4050)
- [MIP7c3-SP4: Domain Team Onboarding (Smart Contract Domain Team)](https://github.com/makerdao/mips/blob/formal-submission/MIP7/MIP7c3-Subproposals/MIP7c3-SP4.md) - [Discussion](https://forum.makerdao.com/t/mip7c3-sp4-domain-team-onboarding-smart-contract-domain-team/4057)
- [MIP13c3-SP2: Declaration of Intent - Dai Flash Mint Module](https://github.com/makerdao/mips/blob/formal-submission/MIP13/MIP13c3-Subproposals/MIP13c3-SP2.md) - [Discussion](https://forum.makerdao.com/t/mip13c3-sp2-declaration-of-intent-dai-flash-mint-module/3635)

### LRC Collateral Onboarding

LRC will be added to the Maker Protocol as a collateral type if this proposal passes. LRC will be added with the following parameters, which match those in the linked risk evaluation with the exception of recent generic modifications to the Dust and Auction Lot Size parameters.

* Risk Premium: 3%
* Liquidation Ratio: 175%
* Debt Ceiling: 3 million
* Auction Lot Size: 50,000 Dai
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 100 Dai

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. This means that the initial stability fee for LRC will be 3.25%.

The risk evaluation for LRC can be found [here](https://forum.makerdao.com/t/lrc-collateral-onboarding-risk-evaluation/3549).  
The smart contracts evaluation for LRC can be found [here](https://forum.makerdao.com/t/lrc-erc20-token-sc-domain-team-assessment/3471).  
The oracle evaluation for LRC can be found [here](https://forum.makerdao.com/t/mip10c3-sp5-proposal-lrcusd-oracle-collateral-onboarding-oracle-assessment/3540).  

### COMP Collateral Onboarding

COMP will be added to the Maker Protocol as a collateral type if this proposal passes. COMP will be added with the following parameters, which match those in the linked risk evaluation.

* Risk Premium: 3%
* Liquidation Ratio: 175%
* Debt Ceiling: 7 million
* Auction Lot Size: 50,000 Dai
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 100 Dai

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. This means that the initial stability fee for COMP will be 3.25%.

The risk evaluation for COMP can be found [here](https://forum.makerdao.com/t/comp-collateral-onboarding-risk-evaluation/4049).  
The smart contracts evaluation for COMP can be found [here](https://forum.makerdao.com/t/comp-erc20-token-smart-contract-domain-community-assessment/3587).  
The oracle evaluation for COMP can be found [here](https://forum.makerdao.com/t/mip10c3-sp9-proposal-compusd-oracle-collateral-onboarding-oracle-assessment/4045).  

### LINK Collateral Onboarding

LINK will be added to the Maker Protocol as a collateral type if this proposal passes. LINK will be added with the following parameters, which match those in the linked risk evaluation.

* Risk Premium: 2%
* Liquidation Ratio: 175%
* Debt Ceiling: 5 million
* Auction Lot Size: 50,000 Dai
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 100 Dai

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. This means that the initial stability fee for LINK will be 2.25%.

The risk evaluation for LINK can be found [here](https://forum.makerdao.com/t/link-collateral-onboarding-risk-evaluation/4047).  
The smart contracts evaluation for LINK can be found [here](https://forum.makerdao.com/t/link-erc20-token-smart-contract-technical-assessment/3467).  
The oracle evaluation for LINK can be found [here](https://forum.makerdao.com/t/mip10c3-sp8-proposal-linkusd-oracle-collateral-onboarding-oracle-assessment/4039).  

## Summary

Therefore, if this Executive proposal passes the following will occur:

**General**
- MIP15: Dark Spell Mechanism will be moved to Accepted status.
- MIP13c3-SP2: Declaration of Intent - Dai Flash Mint Module will be moved to Accepted status.

**Collateral Onboarding**
- MIP12c2-SP4: LRC Collateral Onboarding will be moved to Accepted status.
	- LRC will be onboarded to the Maker Protocol for use as collateral with the parameters listed above.
- MIP12c2-SP5: COMP Collateral Onboarding will be moved to Accepted status.
	- COMP will be onboarded to the Maker Protocol for use as collateral with the parameters listed above.
- MIP12c2-SP6: LINK Collateral Onboarding will be moved to Accepted status.
	- LINK will be onboarded to the Maker Protocol for use as collateral with the parameters listed above.

**Domain Team Onboarding**
- MIP7c3-SP3: Domain Team Onboarding (Risk Domain Team) will be moved to Accepted status.
	- Primož Kordež will be onboarded as a Risk Domain Team. 
-  MIP7c3-SP4: Domain Team Onboarding (Smart Contract Domain Team) will be moved to Accepted status.
	- Christopher Mooney will be onboarded as part of the Smart Contract Domain Team. 
	- Wil Barnes will be onboarded as part of the Smart Contract Domain Team. 
	- Lucas Manuel will be onboarded as part of the Smart Contract Domain Team. 
	- Brian McMichael will be onboarded as part of the Smart Contract Domain Team. 

The Executive Vote ([FAQ](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs#governance)) will continue until the number of votes surpasses the total in favor of the previous Executive Vote. This is a [continuous approval](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/governance#what-is-continuous-approval-voting) vote.

## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) and [Audio](https://soundcloud.com/makerdao/sets/governance-calls) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
