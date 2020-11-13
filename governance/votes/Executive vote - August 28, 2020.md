---
title: Template - [Executive Vote] Activate Liquidations 1.2, Multiple Other Changes

---
## [Executive Vote] Activate Liquidations 1.2, Multiple Other Changes

The Governance Facilitators and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system which will enable the community to approve the following alterations to the protocol.

## Activate Liquidations 1.2

As per the non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmzaapfn5wxrqpk8pej9bepw1gxufmmndw96kgeufomjvd) the liquidations 1.2 upgrade will be activated if this proposal passes. Initially this was planned for August 14, 2020. But was pushed back to give additional time for testing.

Community discussion around this change can be found [here](https://forum.makerdao.com/t/3592) and [here](https://forum.makerdao.com/t/liquidations-1-2-technical-details/3792).

## Increase WBTC-A Risk Premium

As per the non-standard weekly WBTC-A risk premium [poll](https://vote.makerdao.com/polling-proposal/qmegdesyr94jquarahjurtl1xyhl7ccqhyvsyvnsh9gnof) the WBTC-A risk premium will increase from 2% to 4% if this proposal passes.

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. **Please note that a negative Base Rate does NOT imply negative Stability Fees**.

Community discussion around this change can be found [here](https://forum.makerdao.com/t/3484).

## Decrease USDC-A Debt Ceiling

As per the non-standard weekly USDC-A debt ceiling [poll](https://vote.makerdao.com/polling-proposal/qmyw9g1er2uf32mbojwde8nfdjlrqyjzgyzsdhkuyutban) the USDC-A Debt Ceiling parameter will decrease from 140 million to 40 million if this proposal passes.

Community discussion around this change can be found [here](https://forum.makerdao.com/t/3738).

## Whitelist yEarn Finance on ETH/USD Oracle

As per the fast-tracked non-standard weekly oracle whitelisting [poll](https://vote.makerdao.com/polling-proposal/qmf5fpixcyutkuxdslwiymqwpfymkbh74ea4c2smjmb5ia) the yEarn Finance contract will be whitelisted on the ETH/USD oracle if this proposal passes.

Community discussion around this change can be found [here](https://forum.makerdao.com/t/3773).

## Summary

Therefore, if this Executive passes the following will occur:
- The `cat` contract will be replaced as part of the Liquidations 1.2 upgrade.
- The `flipper` contracts will be replaced for all collateral types as part of the Liquidations 1.2 upgrade.
- The new `box` parameter will be initialized to 30 million Dai.
- The new `dunk` parameter will be initialized to 50 thousand Dai for each collateral type.
- The WBTC-A Risk Premium will be increased from 2% to 4%.
- The USDC-A debt ceiling parameter will be reduced from 140 million to 40 million.
- The USDC-A debt ceiling reduction will reduce the Vat global line from 688 million Dai to 588 million Dai.
- [yEarn Finance](https://yearn.finance/) will be whitelisted on the ETH/USD Oracle.

Note that the increase to the WBTC-A Risk Premium has no effect on the WBTC-A stability fee at this time due to the negative base rate.

Note that this proposal includes an Office Hours modifier that only allows spell execution between 10am to 5pm EST. 

The Executive Vote ([FAQ](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs#governance)) will continue until the number of votes surpasses the total in favor of the previous Executive Vote. This is a [continuous approval](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/governance#what-is-continuous-approval-voting) vote.

## Review

These changes have been discussed over the last month in the [Maker governance forum](https://forum.makerdao.com/), please review the discussion threads linked above to inform your position before voting.  

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) and [Audio](https://soundcloud.com/makerdao/sets/governance-calls) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
