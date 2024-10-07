---
title: SparkLend Ethereum - Onboard sUSDS to SparkLend as a Collateral-only Asset - October 7, 2024
summary: Signal your support or opposition to onboarding sUSDS to SparkLend Ethereum as a collateral-only asset.
discussion_link: https://forum.sky.money/t/oct-3-2024-proposed-changes-to-spark-for-upcoming-spell/25293
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
start_date: 2024-10-07T16:00:00
end_date: 2024-10-10T16:00:00
---
# Poll: SparkLend Ethereum - Onboard sUSDS to SparkLend as a Collateral-only Asset - October 7, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Ecosystem team. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9_Weekly_Governance_Cycle-95671ce7-60d8-4d8e-b9b6-de7493560308|0db3) will be active for three days beginning on Monday, October 7 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following onboarding sUSDS as a collateral-only (i.e., non-borrowable) asset on SparkLend Ethereum with the following parameters:

- Token: **sUSDS**
- Token Address: **[0xa3931d71877c0e7a3148cb7eb4463524fec27fbd](https://etherscan.io/address/0xa3931d71877c0e7a3148cb7eb4463524fec27fbd)**
- Oracle: **Fixed 1 USD * sUSDS/USDS redemption rate from the token contract.**
- [Optimal Utilization](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.11_Optimal_Utilization_Definition-7dd3b868-b5c1-4f16-b997-8fb35a971ab1|57eaf45219be608847d6): **80%**
- [Base](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.13_Base_Rate_Definition-3ea70be9-6d09-4e25-8025-a0235dd71c28|57eaf45219be608847d6): **0%**
- [Slope1](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.15_Slope_1_Definition-20c3c3c3-432e-48ac-8336-86b8345f920e|57eaf45219be608847d6): **2%**
- [Slope2](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.16_Slope_2_Definition-e5bb5c04-c9f1-4f85-bd45-1d36269482fe|57eaf45219be608847d6): **300%**
- Stable rate func (deprecated): N/A
- Borrow Enabled: **No**
- [Isolation Borrowable](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.20_Isolated_Borrow-9acac8ca-3870-4680-ae38-1ba3deb09fe3|57eaf45219be608847d6bfdb): **No**
- Stable Rate Borrowing: **No**
- [Siloed Borrowing](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.21_Siloed_Borrowing_Enabled_Definition-2683581e-34fd-4025-b3ef-a46fc19ec855|57eaf45219be608847d6): **No**
- [Flash Loan](https://docs.sparkprotocol.io/developers/guides/flash-loans) Enabled: **No**
- [Loan To Value](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.4_LTV_Definition-e5d19de9-0eb7-4572-857c-e83d91d92c88|57eaf45219be608847d6): **79%**
- [Liquidation Threshold](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.5_Liquidation_Threshold_Definition-9170a423-fba1-4fbe-83c4-f55f2510a9db|57eaf45219be608847d6): **80%**
- [Liquidation Bonus](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.7_Liquidation_Bonus_Definition-c5e7dbac-42f7-4c53-9e89-fa699cd9d5b5|57eaf45219be608847d6): **5%**
- [Reserve Factor](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.8_Reserve_Factor_Definition-3f82c59f-c575-4975-8e1b-653136c3f1fd|57eaf45219be608847d6): **10%**
- [Supply Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.9_Supply_Cap_Definition-75575b79-9a3c-4601-9c57-dd2f7f48e285|57eaf45219be608847d6): **50 million sUSDS**
- [Supply Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **500 million sUSDS**
- [Supply Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **50 million sUSDS**
- [Supply Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **12 hours**
- [Borrow Cap](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.10_Borrow_Cap_Definition-fb930369-4ebc-4de0-9414-0a029857bc24|57eaf45219be608847d6): **0 sUSDS**
- [Borrow Cap Absolute Maximum Exposure (`max`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.3_Cap_Automator_Absolute_Maximum_Exposure_Definition-a01eec5b-64d9-42fa-ae44-b27d22e14a42|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Target Available Exposure (`gap`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.1_Cap_Automator_Target_Available_Exposure_Definition-78ec4709-3773-4f20-b3ef-d58d29f302c2|57eaf45219be6088aa1c4806): **N/A**
- [Borrow Cap Automator Cooldown Period (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **N/A**
- [Isolation Mode](https://sky-atlas.powerhouse.io/#A.3.8.1.5.4.1.2_Cap_Automator_Cooldown_Period_Definition-670fadea-2b37-4e54-931a-01c3487b28f9|57eaf45219be6088aa1c4806): **No**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [High Efficiency Mode (`Emode`)](https://sky-atlas.powerhouse.io/#A.3.8.1.5.1.6_High_Efficiency_Mode_Category_Definition-09de838a-b46c-4cdb-9467-adacdbcf4c00|57eaf45219be608847d6) Category: **0**

Please review the discussion [thread](https://forum.sky.money/t/oct-3-2024-proposed-changes-to-spark-for-upcoming-spell/25293) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option, then the following actions will be taken:**

- Phoenix Labs will prepare a Spark spell to onboard sUSDS to SparkLend Ethereum as a collateral-only asset with the specified parameters.
- An upcoming Executive Vote will include a proposal to execute the Spark spell.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in SparkLend after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
