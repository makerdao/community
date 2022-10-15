---
title: Template - [Executive Vote] Collateral Auction Parameter Changes, MOMC Parameter Adjustments - October 17, 2022
summary: Collateral Auction parameter changes as per the Risk Core Unit, parameter adjustments from the latest MOMC proposal.
date: 2022-10-17T00:00:00.000Z
address: "0xEC8Ce9e03C9E9fdf5Ea051c9c98880b6699e24cc"
---

# [Executive Proposal] Collateral Auction Parameter Changes, MOMC Parameter Adjustments - October 17, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. GSUp Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the GSU Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

- Multiple Collateral Auction Risk Parameters will be changed, as detailed below.
- Parameter adjustments from the [latest proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-29-september-2022/18143) from the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) proposal, as detailed below.

**Voting for this executive proposal will place your GSUp in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Collateral Auction Risk Parameter Changes

As per this successful governance [poll](https://vote.makerdao.com/polling/QmREbu1j#poll-detail), the following parameter changes will be made, if this executive proposal passes. Please review the proposal [thread](https://forum.makerdao.com/t/collateral-auctions-analysis-parameter-updates-september-2022/18063/1) from the Risk Core Unit to inform your position.

#### [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) Changes

The following collateral types will have their `buf` reduced by 0.1 from 1.2 to **1.1**:

- ETH-A
- ETH-B
- ETH-C
- WBTC-A
- WBTC-B
- WBTC-C

**Note:** The Risk Core Unit summarizes these changes as follows:

_The effect of these changes is a shorter average settlement duration:_

- _From about 28 minutes to 15 minutes for (st)ETH and WBTC high-to-mid liquidation ratio vault types_.
- _From about 19 minutes to 10 minutes for ETH and WBTC low liquidation ratio vault types_.
- _From about 40 minutes to 27 minutes for "tier two" vaults (higher volatility and lower liquidity collateral)_.

#### [Max Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown) Changes

The following collateral types will have their `cusp` increased by 0.05, from 0.4 to **0.45**:

- ETH-A
- ETH-B
- ETH-C
- WBTC-A
- WBTC-B
- WBTC-C

**Note:** The Risk Core Unit summarizes these changes as follows:

_The intention of these changes is to keep a similar price drawdown reset threshold as it is now: at about 0.5 of OSM price._

#### [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) Changes

The following collateral types will have their `tail` decreased by 1,200 seconds, from 8,400 seconds to **7,200 seconds**:

- ETH-A
- ETH-C
- WBTC-A

The following collateral type will have its `tail` decreased by 600 seconds, from 5,400 seconds to **4,800 seconds**:

- WBTC-B

The following collateral type will have its `tail` increased by 1,800 seconds, from 5,400 seconds to **7,200 seconds**:

- WBTC-C

The following collateral type will have its `tail` decreased by 3,600 seconds, from 8,400 seconds to **4,800 seconds**:

- ETH-B

**Note:** there is a discrepancy between the current value in the [poll](https://vote.makerdao.com/polling/QmREbu1j#poll-detail) and the current value listed here for ETH-B. Please see this [forum post](https://forum.makerdao.com/t/notice-2022-10-12-executive-vote-inclusion-update/18281).

**Note:** The Risk Core Unit summarizes these changes as follows:

_The intention of these changes is to satisfy the condition of keeping maximum duration until the auction price reaches about 50% of OSM._

#### [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit) Changes

The following `ilk.hole` changes will be made:

- Decrease the ETH-A `ilk.hole` from 65,000,000 DAI to **40,000,000 DAI**.
- Decrease the ETH-B `ilk.hole` from 30,000,000 DAI to **15,000,000 DAI**.
- Decrease the WBTC-A `ilk.hole` from 40,000,000 DAI to **30,000,000 DAI**.
- Decrease the WBTC-B `ilk.hole` from 25,000,000 DAI to **10,000,000 DAI**.
- Decrease the WBTC-C `ilk.hole` from 25,000,000 DAI to **20,000,000 DAI**.

**Note:** The Risk Core Unit summarizes these changes as follows:

_Because faster auction cycles are being proposed, about 50% more collateral should get settled per unit of time._

#### [Global Liquidation Limit (`Hole`)](https://manual.makerdao.com/parameter-index/core/param-global-liquidation-limit) Change

The `Hole` will be reduced by 30,000,000 DAI from 100,000,000 DAI to **70,000,000 DAI**.

**Note:** The Risk Core Unit summarizes this change as follows:

_This corresponds to a general increase in auction throughput due to shorter auction cycles._

#### [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) Changes

The following collateral types will have their `tip` decreased by 50 DAI from 300 DAI to **250 DAI**:

- ETH-A
- ETH-B
- ETH-C
- WBTC-A
- WBTC-B
- WBTC-C

## Review

Community debate on these topics can be found on the GSUProtocol [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
