---
title: Collateral Auction Parameter Updates - September 26, 2022
summary: Signal your support or opposition to the proposed Collateral Auction parameter changes from the Risk Core Unit.
discussion_link: https://forum.makerdao.com/t/collateral-auctions-analysis-parameter-updates-september-2022/18063/1
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-09-26T16:00:00
end_date: 2022-09-29T16:00:00
---
# Poll: Collateral Auction Parameter Updates - September 26, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Risk Core Unit. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, September 26 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes:

### [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) Changes

The following collateral types will have their `buf` decreased by 0.1 from 1.2 to **1.1**:

* ETH-A
* ETH-B
* ETH-C
* WBTC-A
* WBTC-B
* WBTC-C
* WSTETH-A
* WSTETH-B 

The following collateral types will have their `buf` decreased by 0.1, from 1.3 to **1.2**:

* CRVV1ETHSTETH-A
* LINK-A
* MANA-A
* MATIC-A
* RENBTC-A

**Note:** The Risk Core Unit summarizes these changes as follows:

*The effect of these changes is a shorter average settlement duration:*

* *From about 28 minutes to 15 minutes for (st)ETH and WBTC high-to-mid liquidation ratio vault types*.
* *From about 19 minutes to 10 minutes for ETH and WBTC low liquidation ratio vault types*.
* *From about 40 minutes to 27 minutes for "tier two" vaults (higher volatility and lower liquidity collateral)*.

### [Max Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown) Changes

The following collateral types will have their `cusp` increased by 0.05, from 0.4 to **0.45**:

* ETH-A
* ETH-B
* ETH-C
* WBTC-A
* WBTC-B
* WBTC-C
* WSTETH-A
* WSTETH-B

**Note:** The Risk Core Unit summarizes these changes as follows:

*The intention of these changes is to keep a similar price drawdown reset threshold as it is now: at about 0.5 of OSM price.*

### [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) Changes

The following collateral types will have their `tail` decreased by 1,200 seconds, from 8,400 seconds to **7,200 seconds**:

* ETH-A
* ETH-C
* WBTC-A
* WSTETH-A
* WSTETH-B

The following collateral types will have their `tail` decreased by 600 seconds, from 5,400 seconds to **4,800 seconds**:

* ETH-B
* WBTC-B

The following collateral type will have it's `tail` increased by 1,800 seconds, from 5,400 seconds to **7,200 seconds**:

* WBTC-C

**Note:** The Risk Core Unit summarizes these changes as follows:

*The intention of these changes is to satisfy the condition of keeping maximum duration until the auction price reaches about 50% of OSM.*

### [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit) Changes

The following `ilk.hole` changes will be made:

* Decrease the ETH-A `ilk.hole` from 65,000,000 DAI to **40,000,000 DAI**.
* Decrease the ETH-B `ilk.hole` from 30,000,000 DAI to **15,000,000 DAI**.
* Decrease the WBTC-A `ilk.hole` from 40,000,000 DAI to **30,000,000 DAI**.
* Decrease the WBTC-B `ilk.hole` from 25,000,000 DAI to **10,000,000 DAI**.
* Decrease the WBTC-C `ilk.hole` from 25,000,000 DAI to **20,000,000 DAI**.
* Decrease the LINK-A `ilk.hole` from 6,000,000 DAI to **3,000,000 DAI**.
* Decrease the YFI-A `ilk.hole` from 5,000,000 DAI to **1,000,000 DAI**.
* Decrease the RENBTC-A `ilk.hole` from 3,000,000 DAI to **2,000,000 DAI**.

**Note:** The Risk Core Unit summarizes these changes as follows:

*Because faster auction cycles are being proposed, about 50% more collateral should get settled per unit of time.*

### [Global Liquidation Limit (`Hole`)](https://manual.makerdao.com/parameter-index/core/param-global-liquidation-limit) Change

The `Hole` will be reduced by 30,000,000 DAI from 100,000,000 DAI to **70,000,000 DAI**.

**Note:** The Risk Core Unit summarizes this change as follows:

*This corresponds to a general increase in auction throughput due to shorter auction cycles.*

### [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) Changes

The following collateral types will have their `tip` decreased by 50 DAI from 300 DAI to **250 DAI**:

* ETH-A
* ETH-B
* ETH-C
* WBTC-A
* WBTC-B
* WBTC-C
* WSTETH-A
* WSTETH-B
* CRVV1ETHSTETH-A
* LINK-A
* MANA-A
* MATIC-A
* RENBTC-A
* YFI-A

Please review the discussion [thread](https://forum.makerdao.com/t/collateral-auctions-analysis-parameter-updates-september-2022/18063/1) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These changes will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
