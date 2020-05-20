---
title: Oracles - Create BTC/USD Oracle + Whitelist Set Protocol and dYdX - April 20, 2020
summary: If this mandate is accepted by the community, it will signal support for the proposal and for the general scope of the initiatives outlined in the proposal.
discussion_link: https://forum.makerdao.com/t/2011
poll_rules: The voter may select to vote for one of the poll options or they may elect to abstain from the poll entirely
options:
   0: Abstain
   1: Yes
   2: No 
---
# Poll: Oracles - Create BTC/USD Oracle + Whitelist Set Protocol and dYdX - April 20, 2020

The Oracle Team, in accordance with its responsibilities outlined in the [Oracle Team Mandate](https://www.notion.so/makerdao/BTCUSD-ETHBTC-Oracle-Proposal-d1a7b080be044da89bd73554f49f6ad0#479a604e5b8c4a40afeb695852829543), has placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) to **Create BTC/USD Oracle + Whitelist Set Protocol & dYdX**. Voters are now able to signal their support to:

- create a BTC/USD Oracle
- whitelist Set Protocol to read prices from the BTC/USD Oracle
- whitelist dYdX to read prices from the BTC/USD Oracle

This Governance Poll ([FAQ](https://community-development.makerdao.com/makerdao-scd-faqs/scd-faqs/governance)) will be active for four days beginning on Monday, April 20, the results of which may inform an Executive Vote which will go live on Friday, April 24, at 4 PM UTC.

## Review

**Oracle Type:** BTCUSD

**Oracle Address:**

`0xe0F30cb149fAADC7247E953746Be9BbBB6B5751f` (Medianizer)
`N/A` (OSM)

**Customers:** Set Protocol, dYdX

**Whitelist:**

`0xbf63446ecF3341e04c6569b226a57860B188edBc` (Set Protocol)

`0x538038E526517680735568f9C5342c6E68bbDA12` (dYdX)

**Date of Proposed Inclusion:** 2020-04-17

**Fee:** In accordance with the [Responsible Oracle Migration Proposal](https://forum.makerdao.com/t/509), fees are waived for the first year and determined by MKR Governance thereafter.

### Data Models

Data Models describe the data sources and transformations for calculating the canonical price of an asset.

#### Glossary

- `Source` - The data source for the Oracle Feed
- `Asset Pair` -  a price quote of the exchange rate for two different assets traded on the source.
- `Quorum` - The amount of Feeds needed to reach consensus on a price.
- `Feed Model` - Model for how a Feed processes all sourced data into a singular price
- `Oracle Model` - Model for how an Oracle processes all Feed data into a singular price

#### BTC/USD Data Model

    |    Source     |  Asset Pair   |Quorum | Feed Model  | Oracle Model |
    | :------------ | :------------ | :---: | :---------: | :----------: |
    |   Binance     |    BTC/USDT   |   13  |    Median   |    Median    |
    |   BitFinex    |    BTC/USDT   |
    |   Bitstamp    |    BTC/USD    |
    |   Bittrex     |    BTC/USD    | 
    |   Coinbase    |    BTC/USD    |
    |   Gemini      |    BTC/USD    |
    |   Kraken      |    BTC/USD    |

### Supporting Data Model

#### USDT/USD

    |    Source     |  Asset Pair   |  Feed Model  |
    | :------------ | :------------ | :----------: | 
    |   Binance     |    BTC/USDT   |    Median    |
    |   BitFinex    |    BTC/USDT   |
    |   Huobi       |    BTC/USDT   |
    |   Kraken      |    USDT/USD   |
    |   OKEx        |    BTC/USDT   |

### Technical Deliverables

#### Contracts

- Deployed, configured, and verified BTCUSD Medianizer on Ethereum mainnet at address `0xe0F30cb149fAADC7247E953746Be9BbBB6B5751f`
- Reviewed Set Protocol and dYdX contracts and verified Oracle price access is permissioned
- Created spell to whitelist Set Protocol and dYdX contracts (WIP)

#### Tooling

`setzer-mcd`

- added support for the BTCUSD Data Model
- added support for the USDT/USD and KRW/USD Supporting Data Models

`omnia`

- updated Feed configuration files with asset pair details
- updated Relayer configuration files with contract details

The **BTC/USD Oracle Proposal** was discussed in the Maker Forum. Please review the [Discussion](https://forum.makerdao.com/t/2011) to inform your position before voting.

For context, the following proposals may be useful to further your understanding.

- [Oracle Incentives Restructuring Proposal](https://forum.makerdao.com/t/476)
- [Responsible Oracle Migration Proposal](https://forum.makerdao.com/t/509)
- [Oracle Team Mandate Proposal](https://forum.makerdao.com/t/443)

These proposals were published in the Maker Forum for review by the MKR Governance community as well as discussed on the Governance Calls on [September 5th](https://www.youtube.com/watch?v=7jKNv8DMxmQ&t=2356) and [September 12th](https://www.youtube.com/watch?v=gqVnwOL42hQ).

## Next Steps

- On the Friday following the conclusion of the poll, there will be an Executive Vote asking MKR token holders if they support or reject the change proposed by this Governance Poll.

---

## Resources

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

Demos, help and instructional material for the Governance Dashboard can be found at [Awesome MakerDAO](https://awesome.makerdao.com/#voting).

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
