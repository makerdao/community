---
title: Template - [Executive Vote] Parameter Changes, Delegate Compensation, Vault Onboarding - December 3, 2021
summary: Stability fee changes from latest MOMC proposal - Debt Floor (dust) increases - Onboarding UniswapV3 DAI-USDC 0.01% fee pool - Delegate compensation payments - Minor core unit budget transfer - Minor DC-IAM Changes to WBTC-A
date: 2021-12-03T00:00:00.000Z
address: "0x3a686Cd0c748E95524ed6532A64CE5Fe4A301CA7"

---
# [Executive Proposal] Parameter Changes, Delegate Compensation, Vault Onboarding - December 3, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** and **additions** will occur within the Maker Protocol:
- Parameter Changes from the latest [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2021-11-25/11825/1) from the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355). These are primarily small-to-moderate stability fee increases across a number of collateral types, listed in detail below.
- [Debt Floor (dust)](https://makerdao.world/en/learn/governance/param-debt-floor) increases across multiple vault types, listed in detail below.
- Onboarding the Gelato UniswapV3 DAI/USDC (0.01%) fee liquidity pool to the Maker Protocol as the GUNIV3DAIUSDC2-A vault type, parameters listed below.
- Transferring a total of 35,834 DAI to four recognized delegates as part of the [delegate compensation](https://vote.makerdao.com/polling/QmbvuhYH?network=mainnet#poll-detail) trial.
- Transferring 27,058 DAI to the [Governance Communications Core Unit (COM-001)](https://mips.makerdao.com/mips/details/MIP39c2SP8) to make up for a budget shortfall.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### MOMC Parameter Changes

As per this successful [governance poll](https://vote.makerdao.com/polling/QmNqCZGa?network=mainnet#poll-detail) on the latest MakerDAO Open Market Committee [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2021-11-25/11825), the following parameter changes will be made in the Maker Protocol if this executive proposal passes.
- Increase the ETH-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 2.5% to 2.75%.
- Increase the ETH-B [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 6.0% to 6.5%.
- Increase the LINK-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 1.5% to 2.5%.
- Increase the MANA-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 3.0% to 6.0%.
- Increase the UNI-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 1.0% to 3.0%.
- Increase the GUSD-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 0.0% to 1.0%.
- Increase the UNIV2DAIETH-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 1.5% to 2.0%.
- Increase the UNIV2WBTCETH-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 2.5% to 3.0%.
- Increase the UNIV2USDCETH-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 2.0% to 2.5%.
- Increase the UNIV2UNIETH-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 2.0% to 4.0%.
- Decrease the GUNIV3DAIUSDC1-A [Stability Fee](https://makerdao.world/en/learn/governance/param-stability-fee) from 0.5% to 0.1%.
- Increase the WBTC-A [Maximum Debt Ceiling (line)](https://makerdao.world/en/learn/governance/module-dciam) from 1.5 billion DAI to 2 billion DAI.
- Increase the WBTC-A [Target Available Debt (gap)](https://makerdao.world/en/learn/governance/module-dciam) from 60 million DAI to 80 million DAI.

### [Debt Floor (`dust`)](https://makerdao.world/en/learn/governance/param-debt-floor) Increases

As per these successful governance polls, relating to [ETH-B](https://vote.makerdao.com/polling/QmZXnn16?network=mainnet) and other [vaults (excluding ETH-C)](https://vote.makerdao.com/polling/QmUYLPcr?network=mainnet), the following [Debt Floor (dust)](https://makerdao.world/en/learn/governance/param-debt-floor) changes will be made to the Maker Protocol if this executive proposal passes.
- Increase the ETH-B [Debt Floor (`dust`)](https://makerdao.world/en/learn/governance/param-debt-floor) from 30,000 DAI to 40,000 DAI.
- Increase the [Debt Floor (`dust`)](https://makerdao.world/en/learn/governance/param-debt-floor) from 10,000 DAI to 15,000 DAI on all eligible vaults. 
- The full list of which vaults will have their Debt Floor's changed can be found [here](https://docs.google.com/spreadsheets/d/1kpXE7_wNJBljLnRbdxLPTrx2xF86W83xvYX4LYnar0c/edit#gid=0).

For further details on these changes, please check the relevant signal thread [here](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-4/11598).

### Onboarding the GUNIV3DAIUSDC2-A Vault Type

As per this successful [governance poll](https://vote.makerdao.com/polling/QmSkHE8T?network=mainnet), the GUNIV3DAIUSDC2-A vault type will be onboarded to the Maker Protocol with the parameters listed below if this executive proposal passes.

-- Initial Collateral Parameters --

* Underlying Collateral: GUNI-DAI/USDC (0.01% Fee)
* [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee): 1%
* [Liquidation Ratio](https://community-development.makerdao.com/en/learn/governance/param-liquidation-ratio): 105%
* [Maximum Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/module-dciam): 10 million DAI
* [Debt Floor (`dust`)](https://community-development.makerdao.com/en/learn/governance/param-debt-floor): 15,000 DAI*
* [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam): 10 million DAI
* [Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam): 8 hours

*\* Note that the Debt Floor (dust) value here has been modified to match the outcome of the recent Debt Floor poll.*

-- Liquidation Parameters --

* [Auction Price Function (`calc`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): Stairstep Exponential
* [Price Change Multiplier (`cut`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 0.999
* [Price Change Interval (`step`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-function): 120 seconds
* [Auction Price Multiplier (`buf`)](https://community-development.makerdao.com/en/learn/governance/param-auction-price-multiplier): 1.05
* [Liquidation Penalty (`chop`)](https://community-development.makerdao.com/en/learn/governance/param-liquidation-penalty): 13%

*Liquidations will be disabled for this collateral type.*

-- Limits --

* [Local Liquidation Limit (`ilk.hole`)](https://community-development.makerdao.com/en/learn/governance/param-local-liquidation-limit): 5 million DAI
* [Maximum Auction Drawdown (`cusp`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-drawdown): 0.9
* [Maximum Auction Duration (`tail`)](https://community-development.makerdao.com/en/learn/governance/param-max-auction-duration): 220 minutes
* [Breaker Price Tolerance (`tolerance`)](https://community-development.makerdao.com/en/learn/governance/param-breaker-price-tolerance): 0.95

-- Incentives --

* [Proportional Kick Incentive (`chip`)](https://community-development.makerdao.com/en/learn/governance/param-proportional-kick-incentive): 0.10%
* [Flat Kick Incentive (`tip`)](https://community-development.makerdao.com/en/learn/governance/param-flat-kick-incentive): 300 DAI

Please review the following forum threads containing information about GUNIV3DAIUSDC2-A to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/g-uni-dai-usdc-0-01-tier-onboard-g-uni-for-univ3s-new-0-01-fee-tier/11738)
* [Risk Core Unit Evaluation](https://forum.makerdao.com/t/g-uni-dai-usdc-collateral-onboarding-risk-evaluation/9719)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/guni-dai-usdc-erc20-token-smart-contract-technical-assessment/9139)
* [Oracles Team Evaluation](https://forum.makerdao.com/t/guni-dai-usdc-collateral-onboarding-oracle-assessment-mip10c3-sp41/10268)

### Delegate Compensation Payments - November

As per these successful governance polls ([1](https://vote.makerdao.com/polling/QmPCbBu3?network=mainnet), [2](https://vote.makerdao.com/polling/QmbvuhYH?network=mainnet#poll-detail)) and the ongoing trial of delegate compensation, a total of 35,834 DAI will be distributed to four recognized delegates as detailed below if this executive proposal passes.

- **12,000 DAI** transferred to [FlipFlopFlap Delegate LLC](https://vote.makerdao.com/address/0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b?network=mainnet) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
- **12,000 DAI** transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x845b36e1e4f41a361dd711bda8ea239bf191fe95?network=mainnet) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
- **8,144 DAI** transferred to [ultraschuppi](https://vote.makerdao.com/address/0xb21e535fb349e4ef0520318acfe589e174b0126b?network=mainnet) at [0x89C5d54C979f682F40b73a9FC39F338C88B434c6](https://etherscan.io/address/0x89C5d54C979f682F40b73a9FC39F338C88B434c6).
- **3,690 DAI** transferred to [Field Technologies Inc.](https://vote.makerdao.com/address/0xad2fda5f6ce305d2ced380fdfa791b6a26e7f281?network=mainnet) at [0x0988E41C02915Fe1beFA78c556f946E5F20ffBD3](https://etherscan.io/address/0x0988E41C02915Fe1beFA78c556f946E5F20ffBD3).

Details on the breakdown of delegate compensation for the month of November can be found on the MakerDAO forum [here](https://forum.makerdao.com/t/delegate-compensation-breakdown-november-2021/11979).

### Governance Communications (GOV-001) Core Unit One Time Payment

As per this successful [governance poll](https://vote.makerdao.com/polling/Qmc7Necw?network=mainnet#poll-detail), a total of 27,058 DAI will be transferred to the [Governance Communications Core Unit (COM-001)](https://mips.makerdao.com/mips/details/MIP39c2SP8) at [0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9](https://etherscan.io/address/0x1eE3ECa7aEF17D1e74eD7C447CcBA61aC76aDbA9) if this executive proposal passes.

For further details on this distribution, please check the relevant signal thread [here](https://forum.makerdao.com/t/signal-request-one-time-payment-to-com-001-to-cover-missing-dssvest-funds/11685).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
