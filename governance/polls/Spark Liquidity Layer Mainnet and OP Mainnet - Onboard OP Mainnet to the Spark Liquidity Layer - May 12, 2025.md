---
title: Spark Liquidity Layer Mainnet and OP Mainnet - Onboard OP Mainnet to the Spark Liquidity Layer - May 12, 2025
summary: Signal your support or opposition to onboarding OP Mainnet to the Spark Liquidity Layer.
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
# Poll: Spark Liquidity Layer Mainnet and OP Mainnet - Onboard OP Mainnet to the Spark Liquidity Layer - May 12, 2025

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.1_Operational_Weekly_Cycle-b189fa17-57a9-4d4e-9780-0ce4efd94211%7C0db30308) will be active for three days beginning on Monday, May 12 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to onboarding OP Mainnet to the Spark Liquidity Layer with the following addresses and parameters:

### Addresses


- L1_TOKEN_BRIDGE: [0x3d25B7d486caE1810374d37A48BCf0963c9B8057](https://etherscan.io/address/0x3d25B7d486caE1810374d37A48BCf0963c9B8057)
- L2_TOKEN_BRIDGE: [0x8F41DBF6b8498561Ce1d73AF16CD9C0d8eE20ba6](https://optimistic.etherscan.io/address/0x8F41DBF6b8498561Ce1d73AF16CD9C0d8eE20ba6)
- L2_USDS: [0x4F13a96EC5C4Cf34e442b46Bbd98a0791F20edC3](https://optimistic.etherscan.io/address/0x4F13a96EC5C4Cf34e442b46Bbd98a0791F20edC3)
- L2_SUSDS: [0xb5B2dc7fd34C249F4be7fB1fCea07950784229e0](https://optimistic.etherscan.io/address/0xb5B2dc7fd34C249F4be7fB1fCea07950784229e0)

- L1_SSR_FORWARDER: [0x6Ac25B8638767a3c27a65597A74792d599038724](https://etherscan.io/address/0x6Ac25B8638767a3c27a65597A74792d599038724)
- L2_SSR_RECEIVER: [0xE2868095814c2714039b3A9eBEE035B9E2c411E5](https://optimistic.etherscan.io/address/0xE2868095814c2714039b3A9eBEE035B9E2c411E5)
- L2_SSR_AUTH_ORACLE: [0x6E53585449142A5E6D5fC918AE6BEa341dC81C68](https://optimistic.etherscan.io/address/0x6E53585449142A5E6D5fC918AE6BEa341dC81C68)

- L2_GOV_RECEIVER: [0x61Baf0Ce69D23C8318c786e161D1cAc285AA4EA3](https://optimistic.etherscan.io/address/0x61Baf0Ce69D23C8318c786e161D1cAc285AA4EA3)
- L2_GOV_EXECUTOR: [0x205216D89a00FeB2a73273ceecD297BAf89d576d](https://optimistic.etherscan.io/address/0x205216D89a00FeB2a73273ceecD297BAf89d576d)

- L2_PSM: [0xe0F9978b907853F354d79188A3dEfbD41978af62](https://optimistic.etherscan.io/address/0xe0F9978b907853F354d79188A3dEfbD41978af62)

- L2_ALM_PROXY: [0x876664f0c9Ff24D1aa355Ce9f1680AE1A5bf36fB](https://optimistic.etherscan.io/address/0x876664f0c9Ff24D1aa355Ce9f1680AE1A5bf36fB)
- L2_ALM_CONTROLLER: [0x1d54A093b8FDdFcc6fBB411d9Af31D96e034B3D5](https://optimistic.etherscan.io/address/0x1d54A093b8FDdFcc6fBB411d9Af31D96e034B3D5)
- L2_ALM_RATE_LIMITS: [0x6B34A6B84444dC3Fc692821D5d077a1e4927342d](https://optimistic.etherscan.io/address/0x6B34A6B84444dC3Fc692821D5d077a1e4927342d)


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
- OP Mainnet to Mainnet: **50 million** max, **25 million** slope per day.
- Mainnet to OP Mainnet: **50 million** max, **25 million** slope per day.

#### Initial Liquidity Bridged to OP Mainnet

- USDS: **100 million USDS**.
- sUSDS: **100 million USDS worth of sUSDS**.

---

Please review the discussion [thread](https://forum.sky.money/t/may-29-2025-proposed-changes-to-spark-for-upcoming-spell/26372) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- This change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay][(https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055)) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
