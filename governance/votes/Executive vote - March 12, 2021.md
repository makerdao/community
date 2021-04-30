---
title: Template - [Executive Vote] Stability Fee Changes, Onboarding ETH-C - March 12, 2021

---
# [Executive Proposal] Stability Fee Changes, Onboarding ETH-C - March 12, 2021

The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote. 

---

## Executive Summary

If this executive proposal passes the following **changes** will occur within the Maker Protocol:
- The UNIV2DAIETH-A Stability Fee will *increase* from 2% to 3%.
- The UNIV2USDCETH-A Stability Fee will *increase* from 2.5% to 3.5%.
- The UNIV2WBTCETH-A Stability Fee will *increase* from 3.5% to 4.5%.
- The UNIV2ETHUSDT-A Stability Fee will *increase* from 4% to 5%.
- The UNIV2LINKETH-A Stability Fee will *increase* from 4% to 5%.
- The UNIV2UNIETH-A Stability Fee will *increase* from 4% to 5%.
- The UNIV2AAVEETH-A Stability Fee will *increase* from 4% to 5%
- The MANA-A Stability Fee will *decrease* from 5% to 4%.
- The UNIV2WBTCDAI-A Stability Fee will *decrease* from 3% to 2%.
- The RENBTC-A Stability Fee will *decrease* from 6% to 5%.

If this executive proposal passes the following **additions** will be made to the Maker Protocol:
- The ETH-C vault type will be added using ETH (Ether) as collateral using the parameters below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days then it will expire and can no longer have any effect on the Maker Protocol. 

---

## Proposal Details

### Update Stability Fees

As per this [poll](https://vote.makerdao.com/polling/QmWakAdq?network=mainnet#poll-detail) and the associated [proposal](https://forum.makerdao.com/t/rates-changes-proposal-2-mar-2021/6812), multiple [stability fees](https://community-development.makerdao.com/en/learn/governance/param-stability-fee/) will be updated if this executive proposal passes.

This includes the following increases:
- The UNIV2DAIETH-A Stability Fee will *increase* from 2% to 3%.
- The UNIV2USDCETH-A Stability Fee will *increase* from 2.5% to 3.5%.
- The UNIV2WBTCETH-A Stability Fee will *increase* from 3.5% to 4.5%.
- The UNIV2ETHUSDT-A Stability Fee will *increase* from 4% to 5%.
- The UNIV2LINKETH-A Stability Fee will *increase* from 4% to 5%.
- The UNIV2UNIETH-A Stability Fee will *increase* from 4% to 5%.
- The UNIV2AAVEETH-A Stability Fee will *increase* from 4% to 5%

And the following decreases:
- The MANA-A Stability Fee will *decrease* from 5% to 4%.
- The UNIV2WBTCDAI-A Stability Fee will *decrease* from 3% to 2%.
- The RENBTC-A Stability Fee will *decrease* from 6% to 5%.

### Onboarding ETH-C

As per this [poll](https://vote.makerdao.com/polling/QmRE43ob?network=mainnet#poll-detail) and associated signal [thread](https://forum.makerdao.com/t/signal-request-new-vault-type-for-eth-with-a-higher-lr/6069), the ETH-C vault type will be onboarded to the Maker Protocol with the parameters below if this executive proposal passes.

* Underlying Collateral: ETH (Ether)
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 3.5%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 175%
* [Maximum](https://community-development.makerdao.com/en/learn/governance/module-dciam) [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 2 billion DAI
* [Target Available Debt](https://community-development.makerdao.com/en/learn/governance/module-dciam): 100 million DAI
* [Ceiling Increase Cooldown](https://community-development.makerdao.com/en/learn/governance/module-dciam): 12 hours
* Auction Lot Size: 50,000 DAI
* Minimum Bid Increment: 3%
* Bid Duration: 4 hours
* Max Auction Duration: 4 hours
* Liquidation Penalty: 13%
* [Debt Floor](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 2,000 DAI

Please review the following forum threads containing information about ETH-C to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/signal-request-new-vault-type-for-eth-with-a-higher-lr/6069)
* [Risk Evaluation](https://forum.makerdao.com/t/eth-c-risk-parameters/6684)

Note that there is no oracle or smart contract evaluation for this vault type due to the previous use of ETH (Ether) as collateral in the ETH-A and ETH-B vault types.

## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
