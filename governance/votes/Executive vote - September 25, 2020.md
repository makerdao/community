---
title: Template - [Executive Vote] Multiple Changes - September 25, 2020

---
## [Executive Vote]  Multiple Changes - September 25, 2020

The Governance Facilitators and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system which will enable the community to approve the following alterations to the protocol.

### USDC-A Debt Ceiling Increase

As per the urgent [signal request](https://forum.makerdao.com/t/signal-request-should-we-increase-stablecoin-dc-and-diversify-exposure/4331) created by a risk contributor, the USDC-A debt ceiling will be increased from 400 million to 485 million if this proposal passes.

### TUSD-A Debt Ceiling Increase 

As per the urgent [signal request](https://forum.makerdao.com/t/signal-request-should-we-increase-stablecoin-dc-and-diversify-exposure/4331) created by a risk contributor, the TUSD-A debt ceiling will be increased from 50 million to 135 million if this proposal passes.

### PAX-A Debt Ceiling Increase 

As per the urgent [signal request](https://forum.makerdao.com/t/signal-request-should-we-increase-stablecoin-dc-and-diversify-exposure/4331) created by a risk contributor, the PAX-A debt ceiling will be increased from 30 million to 60 million if this proposal passes.

### BAT-A Debt Ceiling Increase

As per this non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmyzzgafxbq9zfeq2us8ghzxadtj9qlzorpny7fp7tkmlf) which originated from this [signal request](https://forum.makerdao.com/t/signal-request-adjust-the-bat-debt-ceiling/3919), the BAT-A debt ceiling will be increased from 5 million to 10 million if this proposal passes.

### Whitelist Kyber on the ETHUSD Medianizer Oracle

As per this non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmx61tfcfodvcippiv8nqpye7wywq3rjotj11n73vh3ggp), [Kyber](https://kyber.network/) will be whitelisted on the ETHUSD Medianizer Oracle if this proposal passes. See this [thread](https://forum.makerdao.com/t/mip10c9-sp11-whitelist-kybers-promo-token-pricing-contract-on-ethusd-oracle/4193) for further details.

### Whitelist DDEX on BTCUSD Medianizer Oracle

As per this non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmtbvw3dlunutchhpfkh7l1zjmpztqc65gyksjw6grykrt), [DDEX](https://ddex.io/) will be whitelisted on the BTCUSD Medianizer Oracle if this proposal passes. See this [thread](https://forum.makerdao.com/t/mip10c9-sp8-whitelist-ddex-on-wbtcusd-oracle/4094) for further details.

### Whitelist ETHUSD v1 Medianizer Oracle on ETHUSD Medianizer Oracle for Opyn

As per this non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmeuuzmxbs8kymukxfrpfs8hlphvzwxuhrregyxwa5qgpr), the ETHUSD v1 Medianizer Oracle will be whitelisted on the ETHUSD Medianizer Oracle for [Opyn](https://opyn.co/) if this proposal passes. It will also set the the ETHUSD Medianizer Oracle as the unique source of price of ETHUSD v1 Medianizer Oracle. See this [thread](https://forum.makerdao.com/t/mip10c9-sp7-whitelist-opyn-on-ethusd-oracle/4061) for further details.

### Whitelist yEarn Finance on BTCUSD OSM Oracle

As per this non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmugblgugdgypuzhjxdiywf78gdkbogl1y17w1ebmjqlte), [yearn.finance](https://yearn.finance/) will be whitelisted on the BTCUSD OSM Oracle if this proposal passes. See this [thread](https://forum.makerdao.com/t/mip10c9-sp10-whitelist-yearn-finance-on-btcusd-oracle/4192) for further details.

### Base Rate Increase

As per the weekly Base Rate [poll](https://vote.makerdao.com/polling-proposal/qmtxhavugj6ah2pnz5q3h7fyyoj5m7y2ebqb8wunk14slf) the [Base Rate](https://forum.makerdao.com/t/discussion-change-the-stability-fee-structure/2258) meta-parameter will be increased from 0% to 0.25% if this proposal passes.

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. **Please note that a negative Base Rate does NOT imply negative Stability Fees**.

### ETH-A Risk Premium Increase

As per this non-standard weekly [poll](https://vote.makerdao.com/polling-proposal/qmczwpsxxwmhdetdm1bp3gquhq7ygmvbjpd7ww1bwqspp6) which originated from this [signal request](https://forum.makerdao.com/t/signal-request-increase-eth-a-risk-premium-september-2020/4042), the ETH-A risk premium will be increased from 0% to 2% if this proposal passes.

Stability Fees are calculated from the Base Rate and Risk Premiums using the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`. **Please note that a negative Base Rate does NOT imply negative Stability Fees**.

## Summary

Therefore, if this Executive proposal passes the following will occur:

**Debt Ceiling Changes**
- The BAT-A Debt Ceiling will increase from 5 million to 10 million.
- The USDC-A Debt Ceiling will increase from 400 million to 485 million.
- The TUSD-A Debt will increase from Ceiling 50 million to 135 million.
- The PAX-A Debt will increase from Ceiling 30 million to 60 million.
- Due to the above debt ceiling changes, the Global Line parameter will increase from 1196 million to 1401 million.

**Oracle Whitelisting**
- [Kyber](https://kyber.network/) will be whitelisted on the ETHUSD Medianizer contract.
- [DDEX](https://ddex.io/) will be whitelisted on the BTCUSD Medianizer contract.
- The ETHUSD v1 Medianizer will be whitelisted on the ETHUSD Medianizer contract for [Opyn](https://opyn.co/).
- [yearn.finance](https://yearn.finance/) will be whitelisted on the BTCUSD OSM contract.

**Rate Changes**
- The Base Rate meta-parameter will increase from 0% to 0.25%
- The ETH-A Risk Premium will increase from 0% to 2%
- The ETH-A Stability Fee will increase from 0% to 2.25%
- The USDC-A Stability Fee will increase from 4% to 4.25%
- The WBTC-A Stability Fee will increase from 4% to 4.25%
- The TUSD-A Stability Fee will increase from 4% to 4.25%
- The PAXUSD-A Stability Fee will increase from 4% to 4.25%
- The BAT-A Stability Fee will increase from 4% to 4.25%
- The MANA-A Stability Fee will increase from 12% to 12.25%
- The ZRX-A Stability Fee will increase from 4% to 4.25%
- The KNC-A Stability Fee will increase from 4% to 4.25%
- The USDT-A Stability Fee will increase from 8% to 8.25%
- The USDC-B Stability Fee will increase from 50% to 50.25%

The Executive Vote ([FAQ](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs#governance)) will continue until the number of votes surpasses the total in favor of the previous Executive Vote. This is a [continuous approval](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/governance#what-is-continuous-approval-voting) vote.

## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) and [Audio](https://soundcloud.com/makerdao/sets/governance-calls) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voter onboarding guide](https://community-development.makerdao.com/onboarding/voter-onboarding) to learn how to use this dashboard and set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
