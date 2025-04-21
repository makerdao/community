---
title: Activate STAR2 Liquidity Layer on Mainnet - April 21, 2025
summary: Signal your support or opposition to activating STAR2 Liquidity Layer on Mainnet.
discussion_link: https://forum.sky.money/t/technical-test-of-of-the-star2-allocation-system/26289
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2025-04-21T16:00:00
end_date: 2025-04-24T16:00:00
---
# Poll: Activate STAR2 Liquidity Layer on Mainnet - April 21, 2025

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of Sidestream and the Ecosystem Facilitators. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.1_Operational_Weekly_Cycle-b189fa17-57a9-4d4e-9780-0ce4efd94211%7C0db30308) will be active for three days beginning on Monday, April 21 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to activating STAR2 Liquidity Layer on Mainnet with the parameters below.

### Pre-deployed contracts

| Contract Name | Address |
| ------------- | ------- |
| **ALMProxy** | [`0x491EDFB0B8b608044e227225C715981a30F3A44E`](https://etherscan.io/address/0x491EDFB0B8b608044e227225C715981a30F3A44E#code) |
| **MainnetController** | [`0x3048386E09c72C20FB268a37d2B630D7f2Ee9138`](https://etherscan.io/address/0x3048386E09c72C20FB268a37d2B630D7f2Ee9138#code) |
| **RateLimits** | [`0x5F5cfCB8a463868E37Ab27B5eFF3ba02112dF19a`](https://etherscan.io/address/0x5F5cfCB8a463868E37Ab27B5eFF3ba02112dF19a#code) |
| **ALMRelayer** (SafeProxy) | [`0x0eEC86649E756a23CBc68d9EFEd756f16aD5F85f`](https://etherscan.io/address/0x0eEC86649E756a23CBc68d9EFEd756f16aD5F85f#code) |
| **ALMFreezer** (SafeProxy) | [`0xB0113804960345fd0a245788b3423319c86940e5`](https://etherscan.io/address/0xB0113804960345fd0a245788b3423319c86940e5#code) |

All deployments were [verified by ChainSecurity](https://github.com/ChainSecurity/dv-files/tree/main/sky/bloom-alm-controller).

### Initial Parameters for the Test

On-chain parameters for the STAR2 Liquidity Layer for initial activation.

| Parameter | Max Amount | Slope (Tokens/Day) |
| --------- | ---------- | ------------------ |
| LIMIT_USDS_MINT | 100 million | 50 million |
| LIMIT_USDS_TO_USDC | 100 million | 50 million |

### Liquidity Layer

To test the recently deployed STAR2 Liquidity Layer, the STAR2 team proposes to onboard Centrifuge 7540 Vault and conduct a test deployment of 100,000 USDC with the following parameters:

- Deposits
  - `Max amount`: **100 million USDC**
  - `Slope`: **50 million USDC**
- Withdrawals
  - `Max amount`: **Unlimited**

### Sky Core Spell Content

#### Whitelist STAR2 ALMProxy on the LitePSM

This will effectively allow STAR2 to call `buyGemNoFee` and `sellGemNoFee` on the `MCD_LITE_PSM_USDC_A` contract. Example code:

```solidity
MCD_LITE_PSM_USDC_A.kiss(0x491EDFB0B8b608044e227225C715981a30F3A44E)
```

Please review the discussion [thread](https://forum.sky.money/t/technical-test-of-of-the-star2-allocation-system/26289) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option, then the following actions will be taken:**

- This change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option, then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
