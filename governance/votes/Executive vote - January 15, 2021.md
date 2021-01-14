---
title: Template - [Executive Vote] Stability Fee Changes, Oracle Whitelisting, Other Changes - January 15, 2021

---
## [Executive Vote] Stability Fee Changes, Oracle Whitelisting, Other Changes - January 15, 2021

The Governance Facilitator(s) and the Maker Foundation Smart Contracts Team have placed an Executive Vote into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

### Stability Fee Changes

As per the most recent [Rates Proposal](https://vote.makerdao.com/polling/QmfBQ4Bh?network=mainnet#poll-detail), [Stability Fees](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) for multiple vault-types will be modified if this proposal passes. These Stability Fee Changes are listed in the Summary section. See the Rates Proposal [thread](https://forum.makerdao.com/t/rates-changes-proposal-6-jan-2021/5948) for further details and discussion.

### Whitelist Set Protocol on Multiple Oracles

As per this Oracle Whitelisting [poll](https://vote.makerdao.com/polling/QmTctW6i?network=mainnet#poll-detail), [Set Protocol](https://www.tokensets.com/) will be whitelisted on multiple oracles if this proposal passes. These oracle whitelist actions are listed in the Summary section.

### Whitelist Gnosis on Multiple Oracles

As per this Oracle Whitelisting [poll](https://vote.makerdao.com/polling/QmNwTMcB?network=mainnet#poll-detail), [Gnosis](https://gnosis.io/) will be whitelisted on multiple oracles if this proposal passes. These oracle whitelist actions are listed in the Summary section.

### Adjust FLAP Auction Parameters

As per this [poll](https://vote.makerdao.com/polling/QmT79sT6?network=mainnet#poll-detail), both the Minimum Bid Increase (`beg`) and the Bid Duration (`ttl`) parameters relating to Surplus Auctions (`flap`s) will be modified if this proposal passes. The Minimum Bid Increase (`beg`) will increase from 2% to 4% and the Bid Duration (ttl) will increase from 30 minutes to 60 minutes. Please see this proposal [thread](https://forum.makerdao.com/t/flap-surplus-auction-parameter-adjustments-11th-jan-2021/6006) for further details.

### Increase System Surplus Buffer

As per this [poll](https://vote.makerdao.com/polling/QmcXtm1d?network=mainnet), the [System Surplus Buffer](https://community-development.makerdao.com/en/learn/governance/param-system-surplus-buffer/) will be increased from 4 Million DAI to 10 Million DAI if this proposal passes. For further details and discussion, please see this signal [thread](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer/5767).

### Revoke Permissions for the Liquidations Circuit Breaker on Stablecoin Vault-types where Liquidations are Disabled

As per this [update](https://forum.makerdao.com/t/limiting-governance-attack-surface-for-stablecoins/6057) from the MakerDAO Smart Contracts Domain Team, the Liquidations Circuit Breaker (`FlipperMom`) will no longer have permission to enable liquidations on USDC-A, PAXUSD-A, TUSD-A, GUSD-A, and USDC-B if this proposal passes. This will mean liquidations cannot be enabled for these vault-types without waiting for the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). Please see the linked thread for further details on this proposed change.


## Summary

Therefore, if this Executive proposal passes the following will occur:

**[Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) Changes**
* The ETH-A Stability Fee will increase from 2.5% to 3.5%.
* The ETH-B Stability Fee will increase from 5% to 6.5%.
* The WBTC-A Stability Fee will decrease from 4.5% to 4%.
* The YFI-A Stability Fee will decrease from 9% to 6%.
* The MANA-A Stability Fee will decrease from 10% to 5%.
* The AAVE-A Stability Fee will decrease from 6% to 4%.

**Oracle Whitelisting**
* Set Protocol will be whitelisted on the AAVE/USD Medianzer Oracle.
* Set Protocol will be whitelisted on the LRC/USD Medianzer Oracle.
* Set Protocol will be whitelisted on the YFI/USD Medianzer Oracle.
* Set Protocol will be whitelisted on the ZRX/USD Medianzer Oracle.
* Set Protocol will be whitelisted on the UNI/USD Medianzer Oracle.
* Gnosis will be whitelisted on the BTC/USD OSM Oracle.
* Gnosis will be whitelisted on the LINK/USD OSM Oracle.
* Gnosis will be whitelisted on the ZRX/USD OSM Oracle.
* Gnosis will be whitelisted on the YFI/USD OSM Oracle.
* Gnosis will be whitelisted on the COMP/USD OSM Oracle.

**Other Parameter Changes**
* The Minimum Bid Increase (beg) for FLAP auctions will increase from 2% to 4%.
* The Bid Duration (ttl) for FLAP auctions will increase from 30 minutes to 60 minutes.
* The [System Surplus Buffer](https://community-development.makerdao.com/en/learn/governance/param-system-surplus-buffer/) will increase from 4 million DAI to 10 million DAI.

**Other**
* The Liquidations Circuit Breaker permissions over USDC-A will be revoked.
* The Liquidations Circuit Breaker permissions over USDC-B will be revoked.
* The Liquidations Circuit Breaker permissions over TUSD-A will be revoked.
* The Liquidations Circuit Breaker permissions over PAXUSD-A will be revoked.
* The Liquidations Circuit Breaker permissions over GUSD-A will be revoked.


This [Executive Vote](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will continue until the number of votes in favor surpasses the votes in favor of the currently leading proposal. This is a [continuous approval](https://community-development.makerdao.com/en/learn/governance/how-voting-works) vote. 

If this executive vote does not pass within 30 days then it will expire and have no effect on the Maker Protocol, even if it should later pass. 

## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

## Action

**Voting for this proposal will place your MKR in support of implementing the changes outlined above.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
