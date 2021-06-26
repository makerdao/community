---
title: Template - [Executive Vote] Parameter Changes and Oracle Updates - May 14, 2021
summary: Vote for Parameter Changes and Oracle Updates
date: 2021-05-14T00:00:00.000Z
address: "0x8EFE2c82bD31B67fa262c0D364773629f6EA828A"

---
# [Executive Proposal] Parameter Changes and Oracle Updates - May 14, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

- The Stability Fee for KNC-A will be **increased** to from 2.0% to 5.0% 
- The Stability Fee for TUSD-A and PAXUSD-A will be **increased** from 0.0% to 1.0%.
- The Stability Fee for ETH-C will be **decreased** from 3.5% to 3.0%.
- The Debt Ceiling for KNC-A, PAXUSD-A, and USDC-B will be **set to 0**.
- The Uniswap LP Token Oracle **will be replaced** with an upgraded version based on recent audit results.

**Voting for this executive proposal will place your MKR in support of the changes outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Parameter Changes

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmPfe7kF?network=mainnet#poll-detail), the following changes will occur to the [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) and [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling/) parameters of the vault types listed below if this executive proposal passes.

#### Stability Fee Increases

| **Vault Type** | **Previous** | **New** | **Change** |
|----------------|--------------|---------|------------|
| KNC-A          | 2.0%         | 5.0%    | +3.0%      |
| TUSD-A         | 0.0%         | 1.0%    | +1.0%      |
| PAXUSD-A       | 0.0%         | 1.0%    | +1.0%      |

#### Stability Fee Decreases

| **Vault Type** | **Previous** | **New** | **Change** |
|----------------|--------------|---------|------------|
| ETH-C          | 3.5%         | 3.0%    | -0.5%      |

#### Debt Ceiling Decreases

| **Vault Type** | **Previous** | **New** | **Change** |
|----------------|--------------|---------|------------|
| KNC-A          | 5M DAI       | 0 DAI   | -5M DAI    |
| PAXUSD-A       | 100M DAI     | 0 DAI   | -100M DAI  |
| USDC-B         | 30M DAI      | 0 DAI   | -30M DAI   |

### Oracle Updates

Given the recommendations of the Oracle Domain Team, the Uniswap LP Token Oracle will be replaced with an upgraded version if this executive proposal passes. The revised Uniswap LP Token Oracle follows audit recommendations and can handle a wider numerical range of token prices. The upgraded contract uses significantly less gas on price updates and has better test coverage.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
