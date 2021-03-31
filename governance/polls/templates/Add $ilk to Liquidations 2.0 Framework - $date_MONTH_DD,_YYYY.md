---
title: Add $ilk to Liquidations 2.0 Framework - $date_MONTH_DD,_YYYY
summary: This poll proposes system parameters which could be used to initialize $ilk with the Liquidations 2.0 Framework.
discussion_link: $risk_link
vote_type: Plurality Voting
categories:
   - Collateral
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Add $ilk to Liquidations 2.0 Framework - $date_MONTH_DD,_YYYY

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the MakerDAO mandated actors. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote. In a binary vote, you may vote for a single option. You should vote for the option which you prefer. Alternatively, if you would accept either of the two options and have no preference between them, you should abstain.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding $ilk to the Liquidations 2.0 Framework in the Maker Protocol with the parameters below:

* Underlying Collateral: $collateral_asset
* [Price Change Multiplier]($cut_link): $price_change_multiplier
* [Price Change Interval]($step_link): $price_change_interval
* [Auction Price Multiplier]($buf_link): $auction_price_multiplier
* [Proportional Kick Incentive]($chip_link): $proportional_kick_incentive
* [Flat Kick Incentive]($tip_link): $flat_kick_incentive
* [Maximum Auction Drawdown]($cusp_link): $maximum_auction_drawdown
* [Maximum Auction Duration]($tail_link): $maximum_auction_duration
* [Local Liquidation Limit]($ilk_hole_link): $local_liquidation_limit
* [Liquidation Penalty]($chop_link): $liquidation_penalty
* [Global Liquidation Limit]($hole_link): $global_liquidation_limit

Please review the following [Risk Evaluation]($risk_link) containing information about $ilk to inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* $ilk will be added to the Liquidations 2.0 System by a future executive vote as the Smart Contracts Team schedule allows. 
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
