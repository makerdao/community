---
title: Template - [Executive Proposal] Onboarding WBTC-B, Increasing WBTC-A Stability Fee, Change of Covenants for P1-DROP, Offboarding Collaterals - November 19, 2021.
summary: Onboarding WBTC-B; increasing WBTC-A Stability Fees; change of covenants for P1-DROP; offboarding BAL-A, COMP-A, AAVE-A, LRC-A, BAT-A, ZRX-A, UNIV2LINKETH-A.
date: 2021-11-19T00:00:00.000Z
address: "0xcdC89bF6EfB7EEd5Ba0Ded0fC9f134b939faFBB0"

---
# [Executive Proposal] Onboarding WBTC-B, Parameter Changes, Change of Covenants for P1-DROP, Offboarding Collaterals - November 19, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

- The WBTC-A [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) will be increased from 2.5% to 4.0%.
- [Local Liquidation Limits (`ilk.hole`)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) for ETH-A, ETH-B, ETH-C, WBTC-A, WSTETH-A will be increased.
- P1-DROP (Peoples Company Series 1) covenant will be changed.
- BAL-A, COMP-A, AAVE-A will be offboarded.
- Changes to LRC-A, BAT-A, ZRX-A, UNIV2LINKETH-A for collateral offboarding.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- WBTC-B will be onboarded as a new vault type.

More details on these changes and additions can be found in the _Proposal Details_ section below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### WBTC-A Stability Fee will be increased from 2.5% to 4.0%

As per the outcome of [this poll](https://vote.makerdao.com/polling/QmRUgsvi), the following [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) will be **increased** if this executive proposal passes:

| VAULT TYPE | CURRENT SF | PROPOSED SF | SF DIFFERENCE |
|--|--|--|--|
| WBTC-A | 2.5% | 4% | +1.5% |

For more information, please see [this thread](https://forum.makerdao.com/t/mid-month-parameter-changes-proposal-ppg-omc-001-2021-11-10/11562).

### Increases to Local Liquidation Limits (`ilk.hole`) for ETH-A, ETH-B, ETH-C, WBTC-A, WSTETH-A

As per the outcome of [this poll](https://vote.makerdao.com/polling/QmQN6FX8), the following [Local Liquidation Limits](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) will be **increased** if this executive proposal passes:

| VAULT TYPE | CURRENT LOCAL LIQUIDATION LIMIT | PROPOSED LOCAL LIQUIDATION LIMIT | LOCAL LIQUIDATION LIMIT DIFFERENCE |
|--|--|--|--|
| ETH-A | 40 million DAI | 65 million DAI | +25 million DAI |
| ETH-B | 25 million DAI | 30 million DAI | +5 million DAI |
| ETH-C | 30 million DAI | 35 million DAI | +5 million DAI |
| WBTC-A | 25 million DAI | 40 million DAI | +15 million DAI |
| WSTETH-A | 3 million DAI | 7 million DAI | +4 million DAI |

For more information, please see [this post](https://forum.makerdao.com/t/auction-throughput-parameters-adjustments-nov-9-2021/11531).

### A change of Covenants for P1-DROP (Peoples Company Series 1)

As per [this poll](https://vote.makerdao.com/polling/Qma62bse), the following covenant changes to P1-DROP (Peoples Company Series 1) will occur if this executive proposal passes:

- Increase maximum acquisition price from $1.5 million to $2.85 million.
- Include Arkansas as a possible state.

For more information, please see this [signal request thread](https://forum.makerdao.com/t/signal-request-p1-drop-change-of-covenants-for-p1-drop-farmlands/11236).

### Offboarding Vaults

The following vaults will be offboarded by implementing the following changes if this executive proposal passes. Further context can be found [here](https://forum.makerdao.com/t/proposed-offboarding-collateral-parameters-2/11548).

#### BAL-A

As per [this poll](https://vote.makerdao.com/polling/QmcwtUau), the following parameters changes will occur to offboard BAL-A if this executive proposal passes:

- Lower the [Liquidation Penalty (`chop`)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
- Lower the [Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
- Increase the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 165% to 2300% over 30 days using dss-lerp.

#### COMP-A

As per [this poll](https://vote.makerdao.com/polling/QmRDeGCn), the following parameters changes will occur to offboard COMP-A if this executive proposal passes:

- Lower the [Liquidation Penalty (`chop`)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
- Lower the [Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
- Increase the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 165% to 2000% over 30 days using dss-lerp.

#### AAVE-A

As per [this poll](https://vote.makerdao.com/polling/QmPdvqZg), the following parameters changes will occur to offboard AAVE-A if this executive proposal passes:

- Lower the [Liquidation Penalty (`chop`)](https://makerdao.world/en/learn/governance/param-liquidation-penalty/) to 0%.
- Lower the [Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/param-debt-ceiling) to 0 DAI.
- Increase the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) from 165% to 2100% over 30 days using dss-lerp.

#### Updating dss-lerp Liquidation Ratios

##### LRC-A

LRC-A has been offboarded via [a previous executive proposal](https://vote.makerdao.com/executive/template-executive-vote-offboarding-vaults-mkr-vesting-and-core-unit-budget-distribution-october-8-2021). The following parameter changes will increase the Liquidation Ratio for LRC-A if this executive proposal passes. For more information, see [this](https://docs.google.com/spreadsheets/d/1pG0HtlQlpfx4CWhDo1jftZID22GsRLPzBBib7N2hpwc/edit#gid=0).

- The previous dss-lerp for increasing the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) of this collateral will be canceled.
- A new dss-lerp contract will be deployed to increase the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) to 24300% over 30 days.

##### BAT-A

BAT-A has been offboarded via [a previous executive proposal](https://vote.makerdao.com/executive/template-executive-vote-offboarding-vaults-mkr-vesting-and-core-unit-budget-distribution-october-8-2021). The following parameter changes will increase the Liquidation Ratio for BAT-A if this executive proposal passes. For more information, see [this](https://docs.google.com/spreadsheets/d/1pG0HtlQlpfx4CWhDo1jftZID22GsRLPzBBib7N2hpwc/edit#gid=0).

- The previous dss-lerp for increasing the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) of this collateral will be canceled.
- A new dss-lerp contract will be deployed to increase the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) to 11200% over 30 days.

##### ZRX-A

ZRX-A has been offboarded via [a previous executive proposal](https://vote.makerdao.com/executive/template-executive-vote-offboarding-vaults-mkr-vesting-and-core-unit-budget-distribution-october-8-2021). The following parameter changes will increase the Liquidation Ratio for ZRX-A if this executive proposal passes. For more information, see [this](https://docs.google.com/spreadsheets/d/1pG0HtlQlpfx4CWhDo1jftZID22GsRLPzBBib7N2hpwc/edit#gid=0).

- The previous dss-lerp for increasing the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) of this collateral will be canceled.
- A new dss-lerp contract will be deployed to increase the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) to 5500% over 30 days.

##### UNIV2LINKETH-A

UNIV2LINKETH-A has been offboarded via [a previous executive proposal](https://vote.makerdao.com/executive/template-executive-vote-offboarding-vaults-mkr-vesting-and-core-unit-budget-distribution-october-8-2021). The following parameter changes will increase the Liquidation Ratio for UNIV2LINKETH-A if this executive proposal passes. For more information, see [this](https://docs.google.com/spreadsheets/d/1pG0HtlQlpfx4CWhDo1jftZID22GsRLPzBBib7N2hpwc/edit#gid=0).

- The previous dss-lerp for increasing the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) of this collateral will be canceled.
- A new dss-lerp contract will be deployed to increase the [Liquidation Ratio](https://makerdao.world/en/learn/governance/param-liquidation-ratio/) to 1600% over 30 days.


### Adding New WBTC-B Vault Type

As per the outcome of [this poll](https://vote.makerdao.com/polling/QmSL1kDq), WBTC (Wrapped Bitcoin) will be onboarded as the vault type WBTC-B with the following parameters if this executive proposal passes:

#### Initial Collateral Parameters

- Underlying Collateral: WBTC (Wrapped Bitcoin)
- [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 7%
- [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 130%
- [Debt Ceiling (`line`)](https://community-development.makerdao.com/en/learn/governance/param-debt-ceiling): 500 million DAI
- [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 30 million DAI
- [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 8 hours
- [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 30,000 DAI

#### Liquidation Parameters

- [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
- [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.99
- [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 60 seconds
- [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.2
- [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

#### Limits

- [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 25 million DAI
- [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.4
- [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 90 minutes
- [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.5

#### Incentives

- [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.1%
- [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

For more information, please see the [Risk Core Unit evaluation](https://forum.makerdao.com/t/wbtc-b-collateral-onboarding-risk-assessment/11397) and [this signal request](https://forum.makerdao.com/t/signal-request-new-iam-vault-type-for-wbtc-with-lower-lr/5736).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
