---
title: Add LINK-A to Liquidations 2.0 Framework - April 5, 2021
summary: This poll proposes system parameters which could be used to initialize LINK-A with the Liquidations 2.0 Framework.
discussion_link: https://forum.makerdao.com/t/link-a-liquidations-2-0-parameters/7180
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Add LINK-A to Liquidations 2.0 Framework - April 5, 2021

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the MakerDAO mandated actors. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, April 5 at 16:00 UTC.

**This is a binary vote. In a binary vote, you may vote for a single option. You should vote for the option which you prefer. Alternatively, if you would accept either of the two options and have no preference between them, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding $ilk to the Liquidations 2.0 Framework in the Maker Protocol with the parameters below:

**Price Function**
* [Price Change Multiplier]($cut_link): 0.99
* [Price Change Interval]($step_link): 90 seconds
* [Auction Price Multiplier](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3
* [Breaker Price Tolerance](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**General Parameters**
* [Proportional Kick Incentive](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 0 DAI
* [Maximum Auction Drawdown](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 8,400 seconds
* [Local Liquidation Limit](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 6 million DAI
* [Liquidation Penalty](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

**Global Parameters**
* [Global Liquidation Limit](https://community-development.makerdao.com/en/learn/governance/param-global-liquidation-limit): 100 million DAI


Please review the following [Risk Evaluation](https://forum.makerdao.com/t/link-a-liquidations-2-0-parameters/7180) containing information about these proposed parameters to inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* LINK-A will be added to the Liquidations 2.0 System by a future executive vote as the Smart Contracts Team schedule allows. 
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

For more information on parameter effects, consider viewing the [Gauntlet Audit](https://maker-report.gauntlet.network/) of the Liquidations 2.0 System. 

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
