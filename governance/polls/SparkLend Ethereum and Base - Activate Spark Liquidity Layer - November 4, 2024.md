---
title: SparkLend Ethereum and Base - Activate Spark Liquidity Layer - November 4, 2024
summary: Signal your support or opposition to activating Spark Liquidity Layer on Sparklend Ethereum and Base.
discussion_link: https://forum.sky.money/t/14-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25466
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
start_date: 2024-11-04T16:00:00
end_date: 2024-11-07T16:00:00
---
# Poll: SparkLend Ethereum and Base - Activate Spark Liquidity Layer - November 4, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of Spark Protocol and the Ecosystem Facilitators. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.1_Operational_Weekly_Cycle-b189fa17-57a9-4d4e-9780-0ce4efd94211|0db30308) will be active for three days beginning on Monday, November 4 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to activating the Spark Liquidity Layer on Sparklend Ethereum and Base with the parameters below.

### Onchain Parameters

#### Ethereum

| Parameter | Max amount (tokens) | Slope (tokens/day) |
|--|--|--|
| LIMIT_USDS_MINT | 4,000,000 | 2,000,000 |
| LIMIT_USDC_TO_CCTP_ETH | max. | 0 |
| LIMIT_USDS_TO_USDC | 4,000,000 | 2,000,000 |
| LIMIT_USDC_TO_DOMAIN (to Base) | 4,000,000 | 2,000,000 |

#### Base

| Parameter | Max amount (tokens) | Slope (tokens/day) |
|--|--|--|
| LIMIT_PSM_DEPOSIT_USDC | 4,000,000 | 2,000,000 |
| LIMIT_PSM_WITHDRAW_USDC | 7,000,000 | 2,000,000 |
| LIMIT_PSM_DEPOSIT_USDS | 5,000,000 | 2,000,000 |
| LIMIT_PSM_WITHDRAW_USDS | max. | 0 |
| LIMIT_PSM_DEPOSIT_SUSDS | 8,000,000 | 2,000,000 |
| LIMIT_PSM_WITHDRAW_SUSDS | max. | 0 |
| LIMIT_USDC_TO_DOMAIN (to mainnet) | 4,000,000 | 2,000,000 |
| LIMIT_USDC_TO_CCTP_BASE | max. | 0 |

### Offchain Parameters

| Parameter | Value (tokens) |
|--|--|
| MAINNET_MIN_OPERATION_SIZE | 400,000 |
| BASE_MIN_OPERATION_SIZE | 400,000 |
| DEBT_CEILING_BUFFER | 10,000 |
| USDC_MIN_BALANCE_BASE | 800,000 |
| USDC_OPTIMAL_BALANCE_BASE | 800,000 |
| USDC_MAX_BALANCE_BASE | 800,000 |

Please review the discussion [thread](https://forum.sky.money/t/14-nov-2024-proposed-changes-to-spark-for-upcoming-spell/25466) to help inform your position before voting.

For more information about the activation process and these parameters, please read the [_Spark ALM Planner Parameter Study_ forum post published by BA Labs](https://forum.sky.money/t/14-nov-2024-spark-alm-planner-parameter-study/25467).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- Phoenix Labs will facilitate preparation of a Spark spell to activate the Spark Liquidity Layer on Ethereum and Base with the parameters listed above.
- An upcoming Executive Vote will include a proposal to execute the Spark spell.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
