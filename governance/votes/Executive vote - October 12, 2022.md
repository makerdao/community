---
title: Template - [Executive Vote] Collateral Auction Parameter Changes, MOMC Parameter Adjustments, Recognized Delegate Compensation for September - October 14, 2022
summary: Collateral Auction parameter changes as per the Risk Core Unit, parameter adjustments from the latest MOMC proposal, Recognized Delegate compensation for September.
date: 2022-10-14T00:00:00.000Z
address: "0xdfFa28aAABF9E6a07e19FDf3a9B94fDC93A039f1"

---
# [Executive Proposal] Collateral Auction Parameter Changes, MOMC Parameter Adjustments, Recognized Delegate Compensation for September - October 14, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Multiple Collateral Auction Risk Parameters will be changed, as detailed below.
- Parameter adjustments from the [latest proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-29-september-2022/18143) from the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) proposal, as detailed below.
- A total of **120,490 DAI** will be paid to eighteen Recognized Delegates, itemized below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Collateral Auction Risk Parameter Changes

As per this successful governance [poll](https://vote.makerdao.com/polling/QmREbu1j#poll-detail), the following parameter changes will be made, if this executive proposal passes. Please review the proposal [thread](https://forum.makerdao.com/t/collateral-auctions-analysis-parameter-updates-september-2022/18063/1) from the Risk Core Unit to inform your position.

#### [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) Changes

The following collateral types will have their `buf` reduced by 0.1 from 1.2 to **1.1**:

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

#### [Max Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown) Changes

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

#### [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) Changes

The following collateral types will have their `tail` decreased by 1,200 seconds, from 8,400 seconds to **7,200 seconds**:

* ETH-A
* ETH-C
* WBTC-A
* WSTETH-A
* WSTETH-B

The following collateral type will have its `tail` decreased by 600 seconds, from 5,400 seconds to **4,800 seconds**:

* WBTC-B

The following collateral type will have its `tail` increased by 1,800 seconds, from 5,400 seconds to **7,200 seconds**:

* WBTC-C

The following collateral type will have its `tail` decreased by 3,600 seconds, from 8,400 seconds to **4,800 seconds**:

* ETH-B

**Note:** there is a discrepancy between the current value in the [poll](https://vote.makerdao.com/polling/QmREbu1j#poll-detail) and the current value listed here for ETH-B. Please see this [forum post](https://forum.makerdao.com/t/notice-2022-10-12-executive-vote-inclusion-update/18281).

**Note:** The Risk Core Unit summarizes these changes as follows:

*The intention of these changes is to satisfy the condition of keeping maximum duration until the auction price reaches about 50% of OSM.*

#### [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit) Changes

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

#### [Global Liquidation Limit (`Hole`)](https://manual.makerdao.com/parameter-index/core/param-global-liquidation-limit) Change

The `Hole` will be reduced by 30,000,000 DAI from 100,000,000 DAI to **70,000,000 DAI**.

**Note:** The Risk Core Unit summarizes this change as follows:

*This corresponds to a general increase in auction throughput due to shorter auction cycles.*

#### [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) Changes

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

### MOMC Parameter Adjustments

As per [this poll](https://vote.makerdao.com/polling/QmbLyNUd), the following changes recommended by the [Maker Open Market Committee - Parameter Proposal Group](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) will be made, if this executive proposal passes:

* Decrease the CRVV1ETHSTETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.5% from 2% to **1.5%**.
* Decrease the YFI-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 15 million DAI from 25 million DAI to **10 million DAI**.

### Recognized Delegate Compensation for September 2022

As per [MIP61: Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), a total of **120,490 DAI** will be distributed to eighteen Recognized Delegates as itemized below if this executive proposal passes:

* **12,000 DAI** will be transferred to [JustinCase](https://vote.makerdao.com/address/0xcdb792c14391f7115ba77a7cd27f724fc9ea2091) at [0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473](https://etherscan.io/address/0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473).
* **12,000 DAI** will be transferred to [Doo](https://vote.makerdao.com/address/0x8804d391472126da56b9a560aef6c6d5aaa7607b) at [0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0](https://etherscan.io/address/0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0).
* **12,000 DAI** will be transferred to [schuppi](https://vote.makerdao.com/address/0xb4b82978fce6d26a22dea7e653bb9ce8e14f8056) at [0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167](https://etherscan.io/address/0xCCffDBc38B1463847509dCD95e0D9AAf54D1c167).
* **11,633 DAI** will be transferred to [Flip Flop Flap Delegate LLC](https://vote.makerdao.com/address/0x0f4be9f208c552a6b04d9a1222f385785f95beaa) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
* **11,396 DAI** will be transferred to [Flipside Crypto](https://vote.makerdao.com/address/0x84b05b0a30b6ae620f393d1037f217e607ad1b96) at [0x62a43123FE71f9764f26554b3F5017627996816a](https://etherscan.io/address/0x62a43123FE71f9764f26554b3F5017627996816a).
* **10,696 DAI** will be transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x92e1ca8b69a44bb17afa92838da68fc41f12250a) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
* **10,322 DAI** will be transferred to [Penn Blockchain](https://vote.makerdao.com/address/0x7ddb50a5b15aea7e7cf9ac8e55a7f9fd9d05ecc6) at [0x2165d41af0d8d5034b9c266597c1a415fa0253bd](https://etherscan.io/address/0x2165d41af0d8d5034b9c266597c1a415fa0253bd).
* **8,509 DAI** will be transferred to [GFX Labs](https://vote.makerdao.com/address/0xf60d7a62c98f65480725255e831de531efe3fe14) at [0xa6e8772af29b29B9202a073f8E36f447689BEef6](https://etherscan.io/address/0xa6e8772af29b29B9202a073f8E36f447689BEef6).
* **7,996 DAI** will be transferred to [mhonkasalo & teemulau](https://vote.makerdao.com/address/0xaa19f47e6acb02df88efa9f023f2a38412069902) at [0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d](https://etherscan.io/address/0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d).
* **7,372 DAI** will be transferred to [Chris Blec](https://vote.makerdao.com/address/0x2c511d932c5a6fe4071262d49bfc018cfbaaa1f5) at [0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170](https://etherscan.io/address/0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170).
* **6,681 DAI** will be transferred to [ACREInvest](https://vote.makerdao.com/address/0x4d3ac33ab1dd7b0f352b8e590fe8b62c4c39ead5) at [0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D](https://etherscan.io/address/0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D).
* **3,506 DAI** will be transferred to [Blockchain@Columbia](https://vote.makerdao.com/address/0xb8df77c3bd57761bd0c55d2f873d3aa89b3da8b7) at [0xdC1F98682F4F8a5c6d54F345F448437b83f5E432](https://etherscan.io/address/0xdC1F98682F4F8a5c6d54F345F448437b83f5E432).
* **2,136 DAI** will be transferred to [Frontier Research LLC](https://vote.makerdao.com/address/0x316090e23cc44e70245ba9846404413aca2df16f) at [0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8](https://etherscan.io/address/0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8).
* **1,974 DAI** will be transferred to [London Business School Blockchain](https://vote.makerdao.com/address/0xf1792852bf860b4ef84a2869df1550bc80ec0ab7) at [0xB83b3e9C8E3393889Afb272D354A7a3Bd1Fbcf5C](https://etherscan.io/address/0xB83b3e9C8E3393889Afb272D354A7a3Bd1Fbcf5C).
* **1,839 DAI** will be transferred to [Llama](https://vote.makerdao.com/address/0x4e314eba76c3062140ad196e4ffd34485e33c5f5) at [0xA519a7cE7B24333055781133B13532AEabfAC81b](https://etherscan.io/address/0xA519a7cE7B24333055781133B13532AEabfAC81b).
* **269 DAI** will be transferred to [CodeKnight](https://vote.makerdao.com/address/0xe89f973a19cd76c3e5e236062668e43042176638) at [0x46dFcBc2aFD5DD8789Ef0737fEdb03489D33c428](https://etherscan.io/address/0x46dFcBc2aFD5DD8789Ef0737fEdb03489D33c428).
* **108 DAI** will be transferred to [ONESTONE](https://vote.makerdao.com/address/0x9301f3bb7a71ab4d46b17bd1f8254142fa8f26ad) at [0x4eFb12d515801eCfa3Be456B5F348D3CD68f9E8a](https://etherscan.io/address/0x4eFb12d515801eCfa3Be456B5F348D3CD68f9E8a).
* **53 DAI** will be transferred to [pvl](https://vote.makerdao.com/address/0xd9d00c42bed99a6d3a0f2902c640bccceecf6c29) at [0x6ebB1A9031177208A4CA50164206BF2Fa5ff7416](https://etherscan.io/address/0x6ebB1A9031177208A4CA50164206BF2Fa5ff7416).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
