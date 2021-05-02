---
title: Add Multiple Vault Types to the Liquidations 2.0 Framework - May 3, 2021
summary: This poll proposes system parameters that could be used to initialize multiple vault types within the Liquidations 2.0 Framework.
discussion_link: https://forum.makerdao.com/t/remaining-vaults-liquidations-2-0-parameters/7753
vote_type: Plurality Voting
categories:
   - Auctions
   - Risk Variable
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Add Multiple Vault Types to the Liquidations 2.0 Framework - May 3, 2021

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the MakerDAO mandated actors. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, May 3 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding the following vault types to the Liquidations 2.0 Framework in the Maker Protocol:

* UNI-A
* ZRX-A
* AAVE-A
* BAT-A
* RENBTC-A
* LRC-A
* MANA-A
* COMP-A
* KNC-A
* BAL-A

---

**Common Parameters**  
These parameters will be identical for each of the vault types listed above.

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3

**Limits**
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 8,400 seconds
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 0 DAI

---

**[Local Liquidation Limits (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit)**  
This parameter is different for each vault type listed above.
* UNI-A Local Liquidation Limit (`ilk.hole`): 5 million DAI
* ZRX-A Local Liquidation Limit (`ilk.hole`): 1 million DAI
* AAVE-A Local Liquidation Limit (`ilk.hole`): 5 million DAI
* BAT-A Local Liquidation Limit (`ilk.hole`): 1.5 million DAI
* RENBTC-A Local Liquidation Limit (`ilk.hole`): 3 million DAI
* LRC-A Local Liquidation Limit (`ilk.hole`): 0.5 million DAI
* MANA-A Local Liquidation Limit (`ilk.hole`): 1 million DAI
* COMP-A Local Liquidation Limit (`ilk.hole`): 2 million DAI
* KNC-A Local Liquidation Limit (`ilk.hole`): 0.5 million DAI
* BAL-A Local Liquidation Limit (`ilk.hole`): 3 million DAI

---

Please review the following [proposal](https://forum.makerdao.com/t/remaining-vaults-liquidations-2-0-parameters/7753) containing the rationale for these proposed parameters to inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option, then the following actions will be taken:**
* The listed vault types will be added to the Liquidations 2.0 System by a future executive vote as the Smart Contracts Team schedule allows.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option, then no further action will be taken at this time.**

---

## Resources

For more information on parameter effects, consider viewing the [Gauntlet Audit](https://maker-report.gauntlet.network/) of the Liquidations 2.0 System.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
