---
title: Template - [Executive Vote] Coinbase Custody Onboarding, Risk Parameter Changes, Increase Starknet Bridge Limit, Vesting Stream Management - May 10, 2023
summary: Onboard Coinbase Custody as RWA014-A, update risk parameters for decentralized collateral types, increase the Starknet Bridge limit to 5 million DAI, vesting stream management for PullUp and Phoenix Labs.
date: 2023-05-10T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Coinbase Custody Onboarding, Risk Parameter Changes, Increase Starknet Bridge Limit, Vesting Stream Management - May 10, 2023

The Arbitration Facilitator(s) and dewiz have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes and additions** will occur within the Maker Protocol:
- RWA014 (Coinbase Custody) will be onboarded as a new vault type, as detailed below.
- Multiple risk parameters for decentralized collateral types will be updated, as detailed below.
- The Starknet Bridge Limit will be increased to 5 million DAI, as detailed below.
- DAI and MKR streams will be set up for PullUp, as detailed below.
- The old streams for Phoenix Labs will be `yank`ed, and new streams will be created, as detailed below.
- The `cap` for MKR_VEST will be increased to 2,200 MKR, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Coinbase Custody (RWA014) Onboarding

As per [this poll](https://vote.makerdao.com/polling/QmdRELY7) Coinbase Custody will be onboarded as RWA014-A as detailed below, if this executive proposal passes.

#### Collateral Parameters

* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): **0%**.
* [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): **500 million DAI**.
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): **100%**.
* Oracle Price: **500 million DAI**.
* Debt write-off timelock (tau): **0**.
* Liquidation Process: Will use the established RWA collateral contracts. See [MIP21](https://mips.makerdao.com/mips/details/MIP21) for details.

#### Relevant Smart Contract Information

* **MIP21_LIQUIDATION_ORACLE:** `0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30`. 
* **RWA_TOKEN_FAB:** `0x2B3a4c18705e99bC29b22222dA7E10b643658552`.
* **SYMBOL:** `RWA014`.
* **NAME:** `RWA-014`.
* **ILK:** `RWA014-A`.
* **RWA014:** TBD
* **MCD_JOIN_RWA014_A:** TBD
* **RWA014_A_URN:** TBD
* **RWA014_A_JAR:** TBD
* **RWA014_A_OUTPUT_CONDUIT:** TBD
* **RWA014_A_INPUT_CONDUIT_URN:** TBD
* **RWA014_A_INPUT_CONDUIT_JAR:** TBD
* **RWA014_A_OPERATOR:** TBD
* **ETH Address A (Coinbase Custody):** TBD

#### Additional Information

Please review the following forum threads containing information about RWA014 (Coinbase Custody) to inform your position before voting:
* [Initial MIP Forum Thread](https://forum.makerdao.com/t/mip81-coinbase-usdc-institutional-rewards/17703).
* [CES Domain Team Assessment](https://forum.makerdao.com/t/rwa014-coinbase-custody-interim-ces-domain-team-assessment/19171/1).
* [Updated Technical Assessment from dewiz](https://forum.makerdao.com/t/rwa014-coinbase-custody-interim-ces-domain-team-assessment/19171/2).
* [Strategic Finance Core Unit Legal Assessment](https://forum.makerdao.com/t/coinbase-custody-legal-assessment/20384).

### Risk Parameter Changes

As per [this poll](https://vote.makerdao.com/polling/QmYFfRuR) the following parameter changes will be made, if this executive proposal passes:

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Changes

* Increase ETH-A Stability Fee by 0.25% from 1.5% to **1.75%**.
* Increase ETH-B Stability Fee by 0.25% from 3% to **3.25%**.
* Increase ETH-C Stability Fee by 0.25% from 0.75% to **1%**.
* Increase WSTETH-A Stability Fee by 0.25% from 1.5% to **1.75%**.
* Increase WSTETH-B Stability Fee by 0.25% from 0.75% to **1%**.
* Increase RETH-A Stability Fee by 0.25% from 0.5% to **0.75%**.
* Increase CRVV1ETHSTETH-A Stability Fee by 0.25% from 1.5% to **1.75%**.

#### [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Changes

* Increase the WSTETH-A `gap` by 15 million DAI from 15 million DAI to **30 million DAI**.
* Increase the WSTETH-B `gap` by 15 million DAI from 15 million DAI to **30 million DAI**.
* Reduce the WBTC-A `gap` by 10 million DAI from 20 million DAI to **10 million DAI**.
* Reduce the WBTC-B `gap` by 5 million DAI from 10 million DAI to **5 million DAI**.
* Reduce the WBTC-C `gap` by 10 million DAI from 20 million DAI to **10 million DAI**.

#### [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) Changes

* Increase the WSTETH-A `ttl` by 21,600 seconds from 21,600 seconds to **43,200 seconds**.
* Increase the WSTETH-B `ttl` by 28,800 seconds from 28,800 seconds to **57,600 seconds**.

### Starknet Bridge Limit Increase

As per [this initial poll](https://vote.makerdao.com/polling/QmUnhQZy) and this [forum update](https://forum.makerdao.com/t/april-26th-2023-spell-starknet-bridge-limit/20589), the Starknet Bridge Limit will be increased as follows, if this executive proposal passes.

* The Starknet Bridge Limit will be increased by 4 million DAI from 1 million DAI to **5 million DAI**.

### Vesting Stream Setup

As per [MIP106](https://mips.makerdao.com/mips/details/MIP106), the following DAI and MKR vesting streams will be created if this executive proposal passes:

#### DAI Vesting Streams

| Ecosystem Actor Name | DAI Amount | Start Date | End Date | Destination Address |
|---|---|---|---|---|
| PullUp Auditor Wallet | 3,300,000 | 2023-05-01 | 2024-05-01 | [0x868B44e8191A2574334deB8E7efA38910df941FA](https://etherscan.io/address/0x868B44e8191A2574334deB8E7efA38910df941FA) |
| Phoenix Labs Auditor Wallet | 1,534,000 | 2023-05-01 | 2024-05-01 | [0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA](https://etherscan.io/address/0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA) |

#### MKR Vesting Streams

| Ecosystem Actor Name | MKR Amount | Start Date | End Date | Cliff Date | Destination Address |
|---|---|---|---|---|---|
| PullUp Auditor Wallet | 4,000 | 2023-05-01 | 2025-05-01 | 2023-05-01 | [0x868B44e8191A2574334deB8E7efA38910df941FA](https://etherscan.io/address/0x868B44e8191A2574334deB8E7efA38910df941FA) |
| Phoenix Labs Auditor Wallet | 986.25 | 2023-05-01 | 2024-05-01 | 2023-05-01 | [0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA](https://etherscan.io/address/0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA) |

### Cancel Vesting Streams

As part of the above entry, the previous vesting streams to Phoenix Labs will be cancelled and replaced with the new vesting streams, if this executive proposal passes.

* `yank` DAI stream ID 22.
* `yank` MKR stream ID 37.

### Increase MKR_VEST `cap`

To facilitate the MKR vesting stream to Phoenix Labs, the `cap` in the MKR_VEST contract needs to be increased. The `cap` controls the maximum amount of MKR that can be streamed through a single stream in a year, currently it is set to 1,100 MKR. The following change will be made if this executive proposal passes:

* Increase the `cap` to **2,200 MKR**.

This will allow for the full agreed amount of MKR to be streamed to PullUp along with a 10% buffer.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).