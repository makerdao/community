---
title: Vault Compensation Reference Price Date Poll - May 11, 2020
summary: Signal which date to use for ETH/BAT references prices vs DAI for vault compensation
discussion_link: https://forum.makerdao.com/t/2275
vote_type: Ranked Choice IRV
options:
   0: Abstain
   1: March 13
   2: The day before the compensation contract is created
   3: Average of price on March 13 and the day before the compensation contract is created

---
# Vault Compensation Reference Price Date Poll - May 11, 2020

The Maker Foundation Interim Governance Facilitator has placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the community which the community can use to signal which date to use for ETH/BAT references prices vs DAI for vault compensation

This Governance Poll ([FAQ](https://community-development.makerdao.com/makerdao-scd-faqs/scd-faqs/governance)) will be active for 7 days beginning on Monday, May 11 at 4 PM UTC.

## Review

[An initial poll on whether to compensate vault holders passed.](https://vote.makerdao.com/polling-proposal/qmwfvvguaf8rz8xwgv2cqnzzt9t5h6epzh17qmk2ue99y4)

[The purpose of this poll is to decide which date to use for ETH and BAT prices in calculation of vault compensation.](https://forum.makerdao.com/t/fund-gitcoin-grant-to-build-vault-compensation-smart-contract/2273)

Arguments for March 13:
- Maker is only responsible for auction failures, not for DAI/ETH and DAI/BAT volatility.
- The exact amount of compensation is known well in advance and is easier to decide.

Arguments for the day before the compensation contract is created:
- Most likely, both BAT and ETH will have appreciated since the liquidation event. Vault owners receive compensation similar to what they would have if they had received collateral from the liquidation auction and held it.
- Least surprising to vault owners
- Avoids the risk that vault owners feel cheated, compromising the objectives of compensation: happy users, positive impact on reputation, and future mass adoption.

### Date to Price Translation

We use Coin Market Cap because it is easy and widely known.  The price
for a given date is the midpoint between the daily high and daily
low. For example, for March 13,

[ETH](https://coinmarketcap.com/currencies/ethereum/historical-data/?start=20200311&end=20200314) is (137.43 + 95.18) / 2 = 116.305

[BAT](https://coinmarketcap.com/currencies/basic-attention-token/historical-data/?start=20200311&end=20200314) is (0.146123 + 0.088837) / 2 = 0.11748

### More background discussion

* [Vault Compensation tag](https://forum.makerdao.com/tag/vault-compensation)

---

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

Demos, help and instructional material for the Governance Dashboard can be found at [Awesome MakerDAO](https://awesome.makerdao.com/#voting).

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
