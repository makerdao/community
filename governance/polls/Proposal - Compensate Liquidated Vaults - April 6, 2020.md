---
title: Vault Compensation Poll - April 06, 2020
summary: Signal whether to provide compensation to vault holders to any degree, the specifics of which to be determined later.
discussion_link: https://forum.makerdao.com/t/1822
poll_rules: The voter may select to vote for one of the poll options or they may elect to abstain from the poll entirely
options:
   0: Abstain
   1: Yes
   2: No

---
# Vault Compensation Poll - April 06, 2020

The Maker Foundation Interim Governance Facilitator has placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the community which the community can use to signal whether to move ahead with a plan to provide compensation to vault holders.

This Governance Poll ([FAQ](https://community-development.makerdao.com/makerdao-scd-faqs/scd-faqs/governance)) will be active for 7 days beginning on Monday, April 06 at 4 PM UTC.

## Review

From March 12-19, ETH (and BAT) suffered a quick drop. This created enormous network traffic. During some spans of time, the Maker price oracle failed to update due to unexpectedly high gas prices. Keepers bidding on auctions also had trouble with gas prices and with a lack of DAI liquidity. Many auctions settled with ETH valued at 0 DAI, or at far less than the market price.

Most of these losses were absorbed by the Maker protocol and have been recapitalized via Flop auctions. However, vault owners also suffered some losses.

**This was not unexpected.** Normal price fluctuations can easily wipe 100% of the collateral in vaults, even when auctions and oracles are operating optimally. [Additional details here.](https://blog.makerdao.com/the-market-collapse-of-march-12-2020-how-it-impacted-makerdao/)

However, the unusual circumstances left some vaults with less residual collateral then they might otherwise have had. Some vaults may legitimately expect to be left with a non-zero amount of ETH/BAT after a smoothly running auction had paid off their debt. The DAI value of vault holder losses (beyond what might be expected) had the protocol operated optimally has been roughly estimated to be less than 4 million.

### Arguments for compensation

* The protocol performed in a sub-optimal manner. Users (i.e. vault holders) were injured. It is in the interest of Maker holders to try to make their users happy. The purpose of the MKR token is to insure against precisely this kind of failure.
* No compensation may represent a distortion of symmetry and reciprocity i.e. the impression that we’re marketing the product and receiving the reward for growth of the platform, but leaving ecosystem/development risk entirely to the user. This could negatively impact reputation and future mass adoption.
* Avoid bad press and acrimonious gestures.


### Arguments against compensation

* Vault users are expected to understand the Ethereum ecosystem and accept the liabilities associated with using that system. All contract code is open sourced and available to be audited. As such, by using the protocol, it is understood that the users are adequately informed and accept the risk of their actions.
* The keeper bot code is open-source. Users could have run a keeper to liquidate their own Vault at a favorable rate.
* By compensating Vault users now, the community sets a precedent where it will compensate vault users in the future. This could undermine the game theoretical mechanisms underpinning the protocol.

### Even more background discussion

* [Signal Thread: Do we compensate vault holders that were completely liquidated?](https://forum.makerdao.com/t/1713/43)
* [Compensating vault holders that liquidated at 0 bid?!](https://forum.makerdao.com/t/1541)

## Next Steps

**If this poll is decided as "No" then no further effort need be spent on a more exact estimate of vault holder losses.**

If this poll is decided as "Yes" then another on-chain poll will be held to decide whether the compensation (amount to be determined) will be denominated in Dai or the collateral asset that was liquidated.

### Rough Outline of Next Next Steps

**If this poll is decided as "No" then no further effort need be spent on mapping out the next next steps.** Therefore, the following is offered as a hand-wavy, possible process that will be refined due to the need for numerous stakeholders, both inside and outside the Foundation, to align. Despite the inherant uncertainty, a possible path toward compensating vault holders is important to start thinking about **now** before we commit to doing it.

> An accurate estimate of the compensation amount for each affected vault shall be determined. To analyze the data, approx 2000 DAI (a week of analyst time) shall be requisioned. All vaults affected by suboptimal Maker/Ethereum performance are eligible for consideration, whether collateral was liquidated at zero or at some other level. Liquidated vaults that paid back debt or deposited additional collateral are also eligible. The estimate shall include sufficient documentation to facilitate replication.
>
> Once an accurate estimate of compensation has been determined, another poll will be needed to determine the X% haircut parameter.
>
> Vault holder compensation will be paid for with additional flop auctions. Once money is available, the assets will be put into a contract that vault holders can withdraw from. To withdraw, vault holders will need to browse to a web page where they agree to indemnify Maker and affiliates against any potential legal claims for their loss. The assets will be available for vault holders to claim for 30 days. After 30 days, the assets shall be converted back to DAI and deposited into the Maker system surplus account.

---

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

Demos, help and instructional material for the Governance Dashboard can be found at [Awesome MakerDAO](https://awesome.makerdao.com/#voting).

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
