---
title: Template - [Executive Vote] Enable TUSD, Reduce Stablecoin Liquidation Ratios, Other Changes - September 18, 2020

---
## [Executive Vote] Enable TUSD, Reduce Stablecoin Liquidation Ratios, Other Changes - September 18, 2020

The Governance Facilitators and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system which will enable the community to approve the following alterations to the protocol.

### Base Rate Increase

As per the weekly Base Rate[poll](https://vote.makerdao.com/polling-proposal/qmabz1ezdmdmvshqjxmpw1geyjogz8npcb5hehk31bnb6w) the [Base Rate](https://forum.makerdao.com/t/discussion-change-the-stability-fee-structure/2258) meta-parameter will be increased from -2% to 0% if this proposal passes.

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. **Please note that a negative Base Rate does NOT imply negative Stability Fees**.

### Enable new TUSD Implementation

As per the non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmrcgtqhqpn2cxvsyh8ppozakz92sgx2kf5munmcwfx2cc) in combination with [this](https://forum.makerdao.com/t/signal-request-should-urgent-action-be-taken-to-modify-the-proposed-tusd-risk-parameters/4145) urgent signal request, the new TUSD implementation will be whitelisted on the Maker protocol if this proposal passes. TUSD will be re-enabled with the following parameters, which are a combination of the linked poll and the linked signal request.

* Risk Premium: 4%
* Liquidation Ratio: 101%
* Debt Ceiling: 50 million
* Auction Lot Size: 50,000
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 100 Dai

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`.

Liquidations will be disabled for TUSD-A.

### Modifiy Stablecoin Liquidation Ratios

As per the non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmaefhsrxgvpxphqdquf3fkmngs4ktkpgd87usmrryvj6c) in combination with [this](https://forum.makerdao.com/t/signal-request-should-urgent-action-be-taken-to-modify-the-proposed-tusd-risk-parameters/4145) urgent signal request, the Liquidation Ratio parameter on TUSD-A, USDC-A, and PAX-A will be reduced from 103% to 101% if this proposal passes.

### Increase USDC-A Debt Ceiling

As per [this](https://forum.makerdao.com/t/urgent-signal-request-increase-usdc-a-debt-ceiling/4186) urgent signal request, the Debt Ceiling parameter on USDC-A will be increased from 200 million to 400 million if this proposal passes.

### Fix Gitcoin Feed Key Replacement on MANAUSD Oracle

As per [this](https://forum.makerdao.com/t/fix-gitcoin-feed-key-replacement-on-manausd-oracle/4233) forum thread created by the MakerDAO Oracle domain team, the gitcoin feed key will be replaced on the MANAUSD Oracle if this proposal passes.

## Summary

Therefore, if this Executive proposal passes the following will occur:

**TUSD Implementation Whitelisted**
- The new TUSD Implementation will be whitelisted and enabled for use in the Maker Protocol.

**Liquidation Ratios**
- The USDC-A Liquidation Ratio will decrease from 103% to 101%
- The PAXUSD-A Liquidation Ratio will decrease from 103% to 101%
- The TUSD-A Liquidation Ratio will decrease from 120% to 101%

**Debt Ceilings**
- The USDC-A Debt Ceiling will increase from 200 million to 400 million
- The TUSD-A Debt Ceiling will increase from 2 million to 50 million
- The Global Line parameter will increase from 948 million to 1,196 million

**Stability Fees**
- The Base Rate meta-parameter will be increased from -2% to 0%
- The TUSD-A Stability Fee will be increased from 0% to 4%
- The USDT-A Stability Fee will  be increased from 6% to 8%
- The PAXUSD-A Stability Fee will be increased from 2% to 4%
- The USDC-A Stability Fee will be increased from 2% to 4%
- The USDC-B Stability Fee will be increased from 48% to 50%
- The BAT-A Stability Fee will be increased from 2% to 4%
- The WBTC-A Stability Fee will be increased from 2% to 4%
- The KNC-A Stability Fee will be increased from 2% to 4%
- The ZRX-A Stability Fee will be increased from 2% to 4%
- The MANA-A Stability Fee will be increased from 10% to 12%

**Oracles**
- The Gitcoin feed key will be replaced on the MANAUSD Oracle


The Executive Vote ([FAQ](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs#governance)) will continue until the number of votes surpasses the total in favor of the previous Executive Vote. This is a [continuous approval](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/governance#what-is-continuous-approval-voting) vote.

## Review

Community debate on this topic can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review the linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) and [Audio](https://soundcloud.com/makerdao/sets/governance-calls) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
