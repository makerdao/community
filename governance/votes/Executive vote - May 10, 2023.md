---
title: Template - [Executive Vote] Risk Parameter Changes, Increase Starknet Bridge Limit, DAI Transfer, Vesting Stream Management, DAO Resolution - May 10, 2023
summary: Update risk parameters for various collateral types, increase the Starknet Bridge limit to 5 million DAI, DAI transfer to Pheonix Labs, vesting stream management for PullUp and Phoenix Labs, DAO Resolution approval.
date: 2023-05-10T00:00:00.000Z
address: "0x57C8ea2995a1277B560704792155690FA8a98643"

---
# [Executive Proposal] Risk Parameter Changes, Increase Starknet Bridge Limit, Vesting Stream Management - May 10, 2023

The Arbitration Facilitator(s), Starknet Engineering, and dewiz have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes and additions** will occur within the Maker Protocol:
- Multiple risk parameters for various collateral types will be updated, as detailed below.
- The Starknet Bridge Limit will be increased to 5 million DAI, as detailed below.
- 318,000 DAI will be transferred to Phoenix Labs.
- DAI and MKR streams will be set up for PullUp, as detailed below.
- The old streams for Phoenix Labs will be cancelled, and new streams will be created, as detailed below.
- The `cap` for MKR_VEST will be increased to 2,200 MKR, as detailed below.
- The DAO Resolution to facilitate onboarding TACO with an exchange agent will be approved.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

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

* Increase the WSTETH-A `ttl` by 21,600 seconds (6 hours) from 21,600 seconds (6 hours) to **43,200 seconds** (12 hours).
* Increase the WSTETH-B `ttl` by 28,800 seconds (8 hours) from 28,800 seconds (8 hours) to **57,600 seconds** (16 hours).

Further information regarding these changes can be found on the forum [here](https://forum.makerdao.com/t/out-of-scope-proposed-risk-parameters-changes-stability-fee-dc-iam/20564).

### Starknet Bridge Limit Increase

As per [this initial poll](https://vote.makerdao.com/polling/QmUnhQZy) and this [forum update](https://forum.makerdao.com/t/april-26th-2023-spell-starknet-bridge-limit/20589), the Starknet Bridge Limit will be increased as follows, if this executive proposal passes.

* The Starknet Bridge Limit will be increased by 4 million DAI from 1 million DAI to **5 million DAI**.

### Ecosystem Actor DAI Transfer

As per [MIP106](https://mips.makerdao.com/mips/details/MIP106#6-6-2-1a-), the following DAI transfer to Phoenix Labs will be made, if this executive proposal passes:

* Transfer **318,000 DAI** to the Phoenix Labs Auditor Wallet at [0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA](https://etherscan.io/address/0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA).

### Vesting Stream Setup

As per [MIP106](https://mips.makerdao.com/mips/details/MIP106#6-6-2-1a-), the following DAI and MKR vesting streams will be created if this executive proposal passes:

#### DAI Vesting Streams

| Ecosystem Actor Name | DAI Amount | Start Date | End Date | Destination Address | Manager |
|---|---|---|---|---|---|
| PullUp Wallet | 3,300,000 | 2023-05-01 | 2024-05-01 | [0x42aD911c75d25E21727E45eCa2A9d999D5A7f94c](https://etherscan.io/address/0x42aD911c75d25E21727E45eCa2A9d999D5A7f94c) | [0x9B6213D350A4AFbda2361b6572A07C90c22002F1](https://etherscan.io/address/0x9B6213D350A4AFbda2361b6572A07C90c22002F1) |
| Phoenix Labs Auditor Wallet | 1,534,000 | 2023-05-01 | 2024-05-01 | [0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA](https://etherscan.io/address/0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA) | N/A |

#### MKR Vesting Streams

| Ecosystem Actor Name | MKR Amount | Start Date | End Date | Cliff Date | Destination Address | Manager |
|---|---|---|---|---|---|---|
| PullUp Wallet | 4,000 | 2023-05-01 | 2025-05-01 | 2023-05-01 | [0x42aD911c75d25E21727E45eCa2A9d999D5A7f94c](https://etherscan.io/address/0x42aD911c75d25E21727E45eCa2A9d999D5A7f94c) |  [0x9B6213D350A4AFbda2361b6572A07C90c22002F1](https://etherscan.io/address/0x9B6213D350A4AFbda2361b6572A07C90c22002F1) |
| Phoenix Labs Auditor Wallet | 986.25 | 2023-05-01 | 2024-05-01 | 2023-05-01 | [0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA](https://etherscan.io/address/0x115F76A98C2268DaE6c1421eb6B08e4e1dF525dA) | N/A |

*Note:* the PullUp vesting streams have a Manager assigned to them following a discussion between the Ecosystem Facilitators and the PullUp team. This Manager wallet will be allowed to cancel (`yank`) the vesting streams without needing an executive. This was added as an alternative to a more traditional auditor wallet setup.

### Cancel Vesting Streams

As part of the above entry, the previous vesting streams to Phoenix Labs will be cancelled and replaced with the new vesting streams, if this executive proposal passes.

* DAI vesting stream ID 22 will be cancelled.
* MKR stream ID 37 will be cancelled.

When a stream is cancelled (by calling `yank`), any funds that have been streamed up until that point will still be claimable by the recipient as long as the cliff date has been reached. However, new funds will no longer be streamed and the claimable balance will no longer increase.

### Increase MKR_VEST `cap`

To facilitate the MKR vesting stream to PullUp, the `cap` in the MKR_VEST contract needs to be increased. The `cap` controls the maximum amount of MKR that can be vested through a single stream in a year and is currently set to 1,100 MKR. The following change will be made if this executive proposal passes:

* Increase the `cap` to **2,200 MKR**.

This will allow for the full agreed amount of MKR to be streamed to PullUp along with a 10% buffer.

### DAO Resolution

As per [this post](https://forum.makerdao.com/t/dao-resolution-to-facilitate-onboarding-of-taco-with-exchange-agent/20735) from Steakhouse Financial, the following DAO Resolution will be approved if this executive proposal passes. 

This DAO Resolution will allow TACO to onboard with an exchange agent and is a precursor to the onboarding of Real World Asset collateral using BlockTower as the Arranger under the [Real World Asset Collateral Scope Framework](https://mips.makerdao.com/mips/details/MIP105).

```
MAKERDAO RESOLUTION

Date: Dated as of related Executive Vote on MakerDAO

Purpose: ONBOARDING OF TACO WITH EXCHANGE AGENT

Reference is made to the Articles of Association (the “Articles”) of TACO Foundation (“TACO”), dated November 16, 2022, pursuant to which TACO’s operations are governed. TACO is a foundation company limited by guarantee, organized and existing under the laws of the Cayman Islands. Capitalized terms used herein and not otherwise defined shall have the meaning given to them in the Articles.

In accordance with the governance protocols of MakerDAO on the date specified above and pursuant to clause 4.16 of the Articles, according to which the directors of TACO must implement all DAO Resolutions (subject to applicable law); this DAO Resolution approves and ratifies all actions and agreements that TACO may take or enter into with third parties solely to facilitate the onboarding of TACO with an exchange agent.

This DAO Resolution recognizes that TACO has full authority to carry out a series of spot transactions originating from Maker smart contracts that will involve converting stablecoins (e.g., USDC, USDP, and GUSD) into U.S. dollars to be settled in TACO's accounts, overseen by the Credit Team at BlockTower Capital Advisors LP ("BlockTower") in its capacity as Arranger under the Real-World Asset Collateral Scope Framework.
```

The DAO Resolution may be found pinned on IPFS [here](https://gateway.pinata.cloud/ipfs/QmcP7W3PeECg9mEaGN6LqYmxUL9wbXePvCtQFn3KMV6UrQ).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
