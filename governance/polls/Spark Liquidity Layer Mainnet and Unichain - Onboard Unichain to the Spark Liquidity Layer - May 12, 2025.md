---
title: Spark Liquidity Layer Mainnet and Unichain - Onboard Unichain to the Spark Liquidity Layer - May 12, 2025
summary: Signal your support or opposition to onboarding Unichain to the Spark Liquidity Layer.
discussion_link: https://forum.sky.money/t/may-29-2025-proposed-changes-to-spark-for-upcoming-spell/26372
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
start_date: 2025-05-12T16:00:00
end_date: 2025-05-15T16:00:00
---
# Poll: Spark Liquidity Layer Mainnet and Unichain - Onboard Unichain to the Spark Liquidity Layer - May 12, 2025

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.1_Operational_Weekly_Cycle-b189fa17-57a9-4d4e-9780-0ce4efd94211%7C0db30308) will be active for three days beginning on Monday, May 12 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to onboarding Unichain to the Spark Liquidity Layer with the following addresses and parameters:

### Addresses

- L1_TOKEN_BRIDGE: [0xDF0535a4C96c9Cd8921d8FeC92A7680b281681d2](https://etherscan.io/address/0xDF0535a4C96c9Cd8921d8FeC92A7680b281681d2)
- L2_TOKEN_BRIDGE: [0xa13152006D0216Fe4627a0D3B006087A6a55D752](https://uniscan.xyz/address/0xa13152006D0216Fe4627a0D3B006087A6a55D752)
- L2_USDS: [0x7E10036Acc4B56d4dFCa3b77810356CE52313F9C](https://uniscan.xyz/address/0x7E10036Acc4B56d4dFCa3b77810356CE52313F9C)
- L2_SUSDS: [0xA06b10Db9F390990364A3984C04FaDf1c13691b5](https://uniscan.xyz/address/0xA06b10Db9F390990364A3984C04FaDf1c13691b5)

- L1_SSR_FORWARDER: TO BE DEPLOYED
- L2_SSR_RECEIVER: TO BE DEPLOYED
- L2_SSR_AUTH_ORACLE: TO BE DEPLOYED

- L2_GOV_RECEIVER: TO BE DEPLOYED
- L2_GOV_EXECUTOR: TO BE DEPLOYED

- L2_PSM: TO BE DEPLOYED

- L2_ALM_PROXY: TO BE DEPLOYED
- L2_ALM_CONTROLLER: TO BE DEPLOYED
- L2_ALM_RATE_LIMITS: TO BE DEPLOYED


### Initial [Rate Limits](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits)

#### PSM3

- USDC deposit: **50 million** max, **50 million** slope per day.
- USDC withdrawal: **50 million** max, **50 million** slope per day.
- USDS deposit: **Unlimited**.
- USDS withdrawal: **Unlimited**.
- sUSDS deposit: **Unlimited**.
- sUSDS withdrawal: **Unlimited**.

#### CCTP

- Global: **Unlimited**.
- Unichain to Mainnet: **50 million** max, **25 million** slope per day.
- Mainnet to Unichain: **50 million** max, **25 million** slope per day.

#### Initial Liquidity Bridged to Unichain

- USDS: **100 million USDS**.
- sUSDS: **100 million USDS worth of sUSDS**.

---

Please review the discussion [thread](https://forum.sky.money/t/may-29-2025-proposed-changes-to-spark-for-upcoming-spell/26372) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- This change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
