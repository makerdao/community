---
title: Smart Burn Engine Parameter Reconfiguration - September 16, 2024
summary: Signal your support or opposition to reconfiguring the SBE parameters so that it will 1) use a strategy that will accumulate SKY and 2) adjust its rate of accumulation to comply with the Atlas.
discussion_link: https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078
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
start_date: 2024-09-16T16:00:00
end_date: 2024-09-19T16:00:00
---
# Poll: Smart Burn Engine Parameter Reconfiguration - September 16, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Ecosystem team. This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.1_Operational_Weekly_Cycle-b189fa17-57a9-4d4e-9780-0ce4efd94211|0db30308) will be active for three days beginning on Monday, September 16 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following [Smart Burn Engine (SBE)](https://manual.makerdao.com/parameter-index/smart-burn-engine) parameter changes:

- The [`hop` parameter](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.1_Hop_Parameter-f9c3ba0f-3f7a-4222-9df8-efb0bc69433e|57ea2c549207d9fe7d45) will be increased by 1,386 seconds from 10,249 seconds to **11,635 seconds**.
- The [`bump` parameter](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.3_Bump_Parameter-512d164c-e60a-4054-850f-96285479901b|57ea2c549207d9fe7d45) will be decreased by 40,000 DAI from 65,000 DAI to **25,000 DAI** (USDS in practice).
- The [`want` parameter](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.2_Want_Parameter-1ec80531-927e-4fd5-89b0-1b4a1a1fb86b|57ea2c549207d9fe7d45) will remain unchanged at **0.98 * WAD**.
- The underlying strategy in the `flapper` parameter will be changed from [FlapperUniV2 (0x0c10Ae443cCB4604435Ba63DA80CCc63311615Bc)](https://etherscan.io/address/0x0c10Ae443cCB4604435Ba63DA80CCc63311615Bc) to [FlapperUniV2SwapOnly (0x374D9c3d5134052Bc558F432Afa1df6575f07407)](https://etherscan.io/address/0x374D9c3d5134052Bc558F432Afa1df6575f07407).
- The [`pip` parameter](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.4_Pip_Parameter-dee4b9b5-022c-443a-b4ea-0c265243cc04|57ea2c549207d9fe7d45) will be changed from [MediumMKRUSD (0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df)](https://etherscan.io/address/0xdbbe5e9b1daa91430cf0772fcebe53f6c6f137df) to [SWAP_ONLY_FLAP_SKY_ORACLE (0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437)](https://etherscan.io/address/0x61A12E5b1d5E9CC1302a32f0df1B5451DE6AE437).
- The `pair` parameter will be set to **USDS/SKY UniV2**.

Please review the discussion [thread](https://forum.makerdao.com/t/smart-burn-engine-transaction-analysis-and-parameter-reconfiguration-update-9/25078) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- This change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
