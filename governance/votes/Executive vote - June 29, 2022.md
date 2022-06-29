---
title: Template - [Executive Vote] Core Unit MKR Transfer and Advancing Collateral Offboardings - June 29, 2022
summary: Risk Core Unit MKR Vesting Transfer and activating liquidations lerp on selected Uniswap V2 vaults and UNI-A.
date: 2022-06-29T00:00:00.000Z
address: "0xD67A415a55A11C128a04fEd4B9C94cF61A633e7f"

---
# [Executive Proposal] Core Unit MKR Transfer and Advancing Collateral Offboardings - June 29, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- 175 MKR will be transferred to the [Risk Core Unit (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2), as detailed below. 
- Liquidations will be activated for UNI-A, UNIV2DAIETH-A, UNIV2WBTCETH-A, and UNIV2WBTCDAI-A, gradually increasing the liquidation ratio for these vaults over 30 days through [linear extrapolation (dss-lerp)](https://manual.makerdao.com/module-index/module-lerp), as detailed below.
- The [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) and [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) will be set to 0 for the above-mentioned vaults, as detailed below. 

Note that UNIV2UNIETH-A is also in the process of being offboarded, but due to no active DAI positions on the vault-type, no action is required at this stage.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of liquidations due to these collateral changes.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Rick Core Unit MKR Vesting Transfer

As per their successful [MKR vesting proposal](https://mips.makerdao.com/mips/details/MIP40c3SP25) **175 MKR** will be transfered to the [Risk Core Unit (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP2) administrative wallet [0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c](https://etherscan.io/address/0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c) if this executive proposal passes.

### Collateral Offboarding

As per these successful polls for offboarding [UNI-A](https://vote.makerdao.com/polling/QmSfLS6V#poll-detail), [UNIV2DAIETH-A](https://vote.makerdao.com/polling/QmQUozNn#poll-detail), [UNIV2WBTCETH-A](https://vote.makerdao.com/polling/QmY3YsDB#poll-detail), [UNIV2UNIETH-A](https://vote.makerdao.com/polling/QmUeYVa2#poll-detail), and [UNIV2WBTCDAI-A](https://vote.makerdao.com/polling/QmZHNkip#poll-detail), the following changes to liquidation parameters will take place if this executive proposal passes. This is the next step of performing collateral offboardings, as defined by [MIP62](https://mips.makerdao.com/mips/details/MIP62). This executive vote follows a [previously successful executive proposal](https://vote.makerdao.com/executive/template-executive-vote-parameter-changes-starknet-bridge-limit-and-authority-changes-recognized-delegate-compensation-sh-001-budget-distribution-june-08-2022#proposal-detail) that set the mentioned collaterals [Debt Ceilings](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to 0.

#### UNI-A

* Increase the [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) from 165% to 1300% over 30 days using [linear extrapolation (dss-lerp)](https://manual.makerdao.com/module-index/module-lerp).
* Decrease the [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to **0**.
* Decrease the [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to **0%**.

#### UNIV2DAIETH-A

* Increase the [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) from 120% to 2000% over 30 days using [linear extrapolation (dss-lerp)](https://manual.makerdao.com/module-index/module-lerp).
* Decrease the [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to **0**.
* Decrease the [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to **0%**.

#### UNIV2WBTCETH-A

* Increase the [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) from 145% to 2400% over 30 days using [linear extrapolation (dss-lerp)](https://manual.makerdao.com/module-index/module-lerp).
* Decrease the [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to **0**.
* Decrease the [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to **0%**.

#### UNIV2UNIETH-A

No changes to UNIV2UNIETH-A will take place in this executive, as the vault-type already has 0 outstanding DAI. However, it will continue to be offboarded if this proposal passes.

#### UNIV2WBTCDAI-A

* Increase the [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) from 120% to 800% over 30 days using [linear extrapolation (dss-lerp)](https://manual.makerdao.com/module-index/module-lerp).
* Decrease the [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to **0**.
* Decrease the [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to **0%**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
