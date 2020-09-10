---
title: Template - [Executive Vote] Onboard USDT and PAX, Multiple other changes - September 4, 2020

---
## [Executive Vote] Onboard USDT and PAX, Multiple other changes - September 4, 2020

The Governance Facilitators and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system which will enable the community to approve the following alterations to the protocol.

### Onboard USDT (Tether USD)

As per the non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmxm6bdgjqdwzzdueqcq6crplhrvdjlrnpcfk87y76rdtj) USDT will be added to the Maker Protocol as a collateral type if this proposal passes. USDT will be added with the following parameters, which match those in the linked poll.

* Risk Premium: 8%
* Liquidation Ratio: 150%
* Debt Ceiling: 10 million
* Auction Lot Size: 50,000
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 100 Dai

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. This means that the initial stability fee for USDT will be 6%.

The risk evaluation for USDT can be found [here](https://forum.makerdao.com/t/usdt-pax-collateral-onboarding-risk-evaluation/3723).
The smart contracts evaluation for USDT can be found [here](https://forum.makerdao.com/t/usdt-erc20-token-smart-contract-technical-assessment/3462).
The oracle evaluation for USDT can be found [here](https://forum.makerdao.com/t/mip10c3-sp6-proposal-usdtusd-oracle-collateral-onboarding-oracle-assessment/3541).

### Onboard PAX (Paxos Standard)

As per the non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmd2y6dyv9zxve85u3jaxvogtzd4ihvqtmt5c7du6vcghk) PAX will be added to the Maker Protocol as a collateral type if this proposal passes. PAX will be added with the following parameters, which match those in the linked poll.

* Risk Premium: 4%
* Liquidation Ratio: 120%
* Debt Ceiling: 5 million
* Auction Lot Size: 50,000
* Minimum Bid Increment: 3%
* Bid Duration: 6 hours
* Max Auction Duration: 6 hours
* Liquidation Penalty: 13%
* Dust: 100 Dai

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. This means that the initial stability fee for PAX will be 2%.

The risk evaluation for PAX can be found [here](https://forum.makerdao.com/t/usdt-pax-collateral-onboarding-risk-evaluation/3723).
The smart contracts evaluation for PAX can be found [here](https://forum.makerdao.com/t/paxusd-erc20-token-smart-contract-technical-assessment/3461).
The oracle evaluation for PAX can be found [here](https://forum.makerdao.com/t/mip10c3-sp7-proposal-paxusd-oracle-collateral-onboarding-oracle-assessment/3556).

### Increase the WBTC-A Debt Ceiling

As per the non-standard weekly WBTC-A debt ceiling [poll](https://vote.makerdao.com/polling-proposal/qmek6shlrhbansnskchm1tkgnkk7mlkxysbmgb1n2kxdsy) the WBTC-A Debt Ceiling parameter will increase from 80 Million to 120 Million if this proposal passes.

Community discussion around this change can be found [here](https://forum.makerdao.com/t/signal-request-increase-wbtc-debt-ceiling/3731).

### Increase the Base Rate

As per the weekly Base Rate [poll](https://vote.makerdao.com/polling-proposal/qmupsxcpwjj79qgvqu5mwkrdiu2aymkrdwqabri2ie3lgw) the [Base Rate](https://forum.makerdao.com/t/discussion-change-the-stability-fee-structure/2258) meta-parameter will be increased from -6% to -2% if this proposal passes.

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. **Please note that a negative Base Rate does NOT imply negative Stability Fees**.

### Appoint Argent as an Oracle Light Feed

As per the [MIP10c15-SP5](https://vote.makerdao.com/polling-proposal/qmsmymcmpbnyrz3vrzezbgajfxxfz38eg3qe449afudxfx) poll that took place under the weekly cycle [Argent](https://www.argent.xyz/) will be appointed as an Oracle Light Feed if this proposal passes.

Argent's light feed proposal can be found [here](https://forum.makerdao.com/t/mip10c14-sp5-proposal-appoint-argent-as-a-light-feed/3015).

### Appoint MyCrypto as an Oracle Light Feed

As per the [MIP10c15-SP6](https://vote.makerdao.com/polling-proposal/qmryo2jjp24wp5hg7iourzpszbkqoygrabouxgtbruwsyv) poll that took place under the weekly cycle [MyCrypto](https://mycrypto.com/) will be appointed as an Oracle Light Feed if this proposal passes.

MyCrypto's light feed proposal can be found [here](https://forum.makerdao.com/t/mip10c14-sp6-proposal-appoint-mycrypto-as-a-light-feed/3383).

## Summary

Therefore, if this Executive proposal passes the following will occur:
- USDT will be onboarded with the parameters listed above.
- PAX will be onboarded with the parameters listed above.
- The WBTC-A Debt Ceiling will be increased from 80 million to 120 million.
- The Vat global `line` parameter will increase from 708 million to 763 million.
- The Base Rate meta-parameter will be increased from -6% to -2%.
- The BAT-A Stability Fee parameter will be increased from 0% to 2%.
- The USDC-A Stability Fee parameter will be increased from 0% to 2%.
- The USDC-B Stability Fee parameter will be increased from 44% to 48%.
- The WBTC-A Stability Fee parameter will be increased from 0% to 2%.
- The KNC-A Stability Fee parameter will be increased from 0% to 2%.
- The ZRX-A Stability Fee parameter will be increased from 0% to 2%.
- The MANA-A Stability Fee parameter will be increased from 6% to 10%.
- Argent will be appointed as an Oracle Light Feed with the feed key 0x130431b4560Cd1d74A990AE86C337a33171FF3c6.
- MyCrypto will be appointed as an Oracle Light Feed with the feed key 0x3cb645a8f10fb7b0721eabae958f77a878441cb9.

The Executive Vote ([FAQ](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs#governance)) will continue until the number of votes surpasses the total in favor of the previous Executive Vote. This is a [continuous approval](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/governance#what-is-continuous-approval-voting) vote.

## Review

Community debate on this topic can be found on the MakerDAO [governance forum](https://forum.makerdao.com/).

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) and [Audio](https://soundcloud.com/makerdao/sets/governance-calls) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
