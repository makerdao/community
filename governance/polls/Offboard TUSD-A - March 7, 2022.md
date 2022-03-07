---
title: Offboarding Parameters for TUSD-A - March 7, 2022
summary: Signal your support or opposition to the following liquidation parameters, designed to offboard TUSD-A.
discussion_link: https://forum.makerdao.com/t/proposed-parameters-for-offboarding-tusd-a/13506
vote_type: Plurality Voting
categories:
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-03-07T16:00:00
end_date: 2022-03-10T16:00:00
---
# Poll: Offboarding Parameters for TUSD-A - March 7, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Community. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, March 7 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes: 
* Implementing the following risk parameters for offboarding TUSD-A:

**Proposed Offboarding Parameters**

* Enable liquidations for TUSD-A
* Use Abacus/LinearDecrease 
* Set [Liquidation Penalty](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0
* Set [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) to 150%
* Set [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) to 1
* Set [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit) to 5 million DAI
* Set tau for Abacus/LinearDecrease to 21,600,000 second (estimated 10bps drop per 6 hours = 250 days till 0)
* Set [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) to 432,000 seconds (5 days, implies minimum price of 0.98)
* Set [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive) to 0
* Set [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to 500 

Please review the discussion [thread](https://forum.makerdao.com/t/proposed-parameters-for-offboarding-tusd-a/13506) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* This change will be included in the weekly Executive Vote on the Friday following the conclusion of this poll.
* If the Friday executive passes, then this change will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
