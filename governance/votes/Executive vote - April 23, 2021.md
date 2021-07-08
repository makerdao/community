---
title: Template - [Executive Vote] System Surplus Buffer Increase and Burn, Parameter Changes, YFI-A Addition to Liquidations 2.0 - April 23, 2021
summary: Vote for System Surplus Buffer Increase and Burn, Parameter Changes, YFI-A Addition to Liquidations 2.0
date: 2021-04-23T00:00:00.000Z
address: "0x961eEE551d0Fe5FF8B88db5441875564ac967f09"

---
# [Executive Proposal] System Surplus Buffer Increase and Burn, Parameter Changes, YFI-A Addition to Liquidations 2.0 - April 23, 2021

The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The System Surplus Buffer will be increased from 30MM to 60MM over a period of 99 days, targeting 25% of incoming revenue used to burn MKR.
- Multiple changes to stability fees and debt ceilings will be made to various vault types as detailed below.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- YFI-A will be added to the Liquidations 2.0 framework.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

The next executive proposal will be submitted on Monday, potentially resulting in this executive proposal being replaced if it has not passed by that time.

---

## Proposal Details

### Increase the System Surplus Buffer And Add Burn Percentage

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmRmXKoJ?network=mainnet#poll-detail), the following changes to the System Surplus Buffer will be made if this executive proposal passes:

- The System Surplus Buffer will increase from 30 million to 60 million.
- Target 25% of the stability fee revenues to be used in Surplus Auctions to burn MKR. This will be achieved by increasing the System Surplus Buffer over 99 days starting on April 30th using a linear interpolation smart contract (`lerp`), instead of directly setting it to the target value of 60 million DAI. The 25% target assumes constant fees and no additional revenue over the time period. It should not be viewed as a guarantee of a specific percentage of revenue burn.

Further details and rationale can be found in the following [thread](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer-march-april-2021/6979).

### Add YFI-A to Liquidations 2.0 Framework

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmafteTW#poll-detail), YFI-A will be added to the Liquidations 2.0 framework with the following parameters if this executive proposal passes:

**Auction Price**
* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
   * [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
   * [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 90 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.3

**Limits**
* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 5 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 8,400 seconds
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

**Incentives**
* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 0 DAI

Further details and rationale can be found in the following [Risk Evaluation](https://forum.makerdao.com/t/yfi-a-liquidations-2-0-parameters/7502).

### Parameter Changes

Given the successful outcome of this [poll](https://vote.makerdao.com/polling/QmRRzmnF?network=mainnet#poll-detail), the following changes on [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee), [Debt Ceiling](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling/), [Maximum Debt Ceiling, Target Available Debt and Ceiling Increase Cooldown](https://community-development.makerdao.com/en/learn/governance/module-dciam/) will be made if this executive proposal passes.

**Stability Fee Increases**

| Vault Type     |   Old |    New | Change |
|----------------|-------|--------|--------|
| LINK-A         | 3.50% | **5.00%** |  1.50% |
| ETH-B          | 9.00% | **10.00%**|  1.00% |
| ZRX-A          | 2.00% | **4.00%** |  2.00% |
| LRC-A          | 3.00% | **4.00%** |  1.00% |
| UNIV2DAIETH-A  | 3.00% | **3.50%** |  0.50% |
| UNIV2USDCETH-A | 3.50% | **4.50%** |  1.00% |

**Stability Fee Decreases**

| Vault Type     |   Old |   New | Change |
|----------------|-------|-------|--------|
| AAVE-A         | 4.00% | **3.00%** | -1.00% |
| BAT-A          | 6.00% | **5.00%** | -1.00% |
| MANA-A         | 4.00% | **3.00%** | -1.00% |
| BAL-A          | 3.50% | **2.00%** | -1.50% |
| UNIV2DAIUSDC-A | 3.00% | **1.00%** | -2.00% |
| UNIV2LINKETH-A | 5.00% | **4.00%** | -1.00% |
| UNIV2WBTCDAI-A | 2.00% | **0.00%** | -2.00% |
| UNIV2AAVEETH-A | 5.00% | **4.00%** | -1.00% |
| UNIV2DAIUSDT-A | 4.00% | **3.00%** | -1.00% |

**Maximum Debt Ceiling Increases**

| Vault Type    | Old        | New        | Change     |
|---------------|------------|------------|------------|
| YFI-A         | 75,000,000 | **90,000,000** | 15,000,000 |
| AAVE-A        | 25,000,000 | **50,000,000** | 25,000,000 |
| BAT-A         | 3,000,000  | **7,000,000**  | 4,000,000  |
| RENBTC-A      | 2,000,000  | **10,000,000** | 8,000,000  |
| MANA-A        | 2,000,000  | **5,000,000**  | 3,000,000  |
| BAL-A         | 5,000,000  | **30,000,000** | 25,000,000 |
| UNIV2DAIETH-A | 30,000,000 | **50,000,000** | 20,000,000 |

**Maximum Debt Ceiling Decrease**

| Vault Type |        Old |       New |     Change |
|------------|------------|-----------|------------|
| LRC-A      | 10,000,000 | **5,000,000** | -5,000,000 |

**Debt Ceiling Decrease**

| Vault Type |        Old |       New |     Change |
|------------|------------|-----------|------------|
| USDT-A     |  2,500,000 |         **0** | -2,500,000 |

**Target Available Debt (`gap`) Changes**

| Vault Type |       Old |       New |     Change |
|------------|-----------|-----------|------------|
| AAVE-A     | 2,000,000 | 5,000,000 |  3,000,000 |
| RENBTC-A   |   500,000 | 1,000,000 |    500,000 |
| MANA-A     |   500,000 | 1,000,000 |    500,000 |
| BAL-A      | 1,000,000 | 3,000,000 |  2,000,000 |
| LRC-A      | 2,000,000 | 1,000,000 | -1,000,000 |

**Debt Ceiling Instant Access Module Activations**

Activate **UNIV2WBTCETH-A** DC-IAM with:
- Maximum Debt Ceiling of 20 MM
- Target Available Debt of 3 MM
- Ceiling Increase Cooldown of 12 h

Activate **UNIV2UNIETH-A** DC-IAM with:
- Maximum Debt Ceiling of 20 MM
- Target Available Debt of 3 MM
- Ceiling Increase Cooldown of 12 h

Activate **UNIV2LINKETH-A** DC-IAM with:
- Maximum Debt Ceiling of 20 MM
- Target Available Debt of 2 MM
- Ceiling Increase Cooldown of 12 h

Activate **UNIV2AAVEETH-A** DC-IAM with:
- Maximum Debt Ceiling of 20 MM
- Target Available Debt of 2 MM
- Ceiling Increase Cooldown of 12 h

Activate **UNIV2ETHUSDT-A** DC-IAM with:
- Maximum Debt Ceiling of 10 MM
- Target Available Debt of 2 MM
- Ceiling Increase Cooldown of 12 h

Activate **UNIV2DAIUSDT-A** DC-IAM with:
- Maximum Debt Ceiling of 10 MM
- Target Available Debt of 2 MM
- Ceiling Increase Cooldown of 12 h

Activate **UNIV2WBTCDAI-A** DC-IAM with:
- Maximum Debt Ceiling of 20 MM
- Target Available Debt of 3 MM
- Ceiling Increase Cooldown of 12 h

Further details and rationale can be found in the following [thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-7-april-2021/7358).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
