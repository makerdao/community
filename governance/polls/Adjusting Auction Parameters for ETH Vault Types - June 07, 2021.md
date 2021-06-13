---
title: Adjusting Auction Parameters for ETH Vault Types - June 7, 2021
summary: This poll proposes parameter changes for ETH Vault Types.
discussion_link: https://forum.makerdao.com/t/adjusting-auction-parameters-for-eth-vault-types/8477
vote_type: Plurality Voting
categories:
   - Auctions
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Adjusting Auction Parameters for ETH Vault Types - June 7, 2021

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the Risk Core Unit. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, June 7 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to changing the following parameters for ETH Vault Types in the Maker Protocol.

### Increasing [Local Liquidation Limits (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit)

* **ETH-A** Local Liquidation Limit from 22M to **30 million DAI**
* **ETH-B** Local Liquidation Limit from 8M to **15 million DAI**
* **ETH-C** Local Liquidation Limit from 5M to **20 million DAI**

### ETH-B Adjustments

* Decrease [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function) from 90 seconds to **60 seconds**
* Decrease [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier) from 1.3 to **1.2**

---

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option, then the following actions will be taken:**
* These changes will be included in the weekly Executive Vote on the Friday following the conclusion of this poll.
* If the Friday executive passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option, then no further action will be taken at this time.**

---

## Resources

For more information on parameter effects, consider viewing the [Gauntlet Audit](https://maker-report.gauntlet.network/) of the Liquidations 2.0 System.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
