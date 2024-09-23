---
title: LITE-PSM-USDC-A Phase 3 (Final Migration) Parameter Proposal - September 23, 2024
summary: Signal your support or opposition to the LITE-PSM-USDC-A Phase 3 parameter proposal.
discussion_link: https://forum.makerdao.com/t/lite-psm-usdc-a-phase-3-final-migration-proposed-parameters/25183
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
start_date: 2024-09-23T16:00:00
end_date: 2024-09-26T16:00:00
---
# Poll: LITE-PSM-USDC-A Phase 3 (Final Migration) Parameter Proposal - September 23, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, September 23 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes in the context of the [LITE-PSM-USDC-A migration plan](https://forum.makerdao.com/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512#lite-psm-usdc-a-migration-plan-9):

### Migration of Reserves

* Migrate all remaining USDC reserves from PSM-USDC-A to LITE-PSM-USDC-A with a script executed in the spell (Note that PSM-USDC-A `tin` & `tout` will be set to zero before migration is executed in the spell transaction)

### PSM-USDC-A Parameter Changes

- Decrease [Toll (`tin`)](https://sky-atlas.powerhouse.io#A.3.4.1.5.1.1.1_Toll_Fee_In_Definition-0725a51a-6457-4f15-84f6-b4c3cc550592|57ea599773d45150b2632df9) by 0.01 percentage points to **0**.
- Decrease [Toll (`tout`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.2_Toll_Fee_Out_Definition-a6367de6-db65-4d77-9c29-e1f42617f27e|57ea599773d45150b2632df9) by 0.01 percentage points to **0**.
- Remove from the AutoLine (DC-IAM)
- Set Debt Ceiling to **0**.

### LITE-PSM-USDC-A Parameter Changes

- Leave [Toll (`tin`)](https://sky-atlas.powerhouse.io#A.3.4.1.5.1.1.1_Toll_Fee_In_Definition-0725a51a-6457-4f15-84f6-b4c3cc550592|57ea599773d45150b2632df9) and Toll (`tout`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.2_Toll_Fee_Out_Definition-a6367de6-db65-4d77-9c29-e1f42617f27e|57ea599773d45150b2632df9) unchanged at **0**.
- Increase the [Maximum Debt Ceiling (`line`)](https://sky-atlas.powerhouse.io#A.3.4.1.5.1.1.3_Maximum_Debt_Ceiling_Definition-e4a0d8f1-4a01-46a7-b693-a94e7f4afc1a|57ea599773d45150b2632df9) by 2.5 billion DAI from 7.5 billion DAI to **10 billion DAI**.
- Increase the [Target Available Debt(`gap`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.4_Target_Available_Debt_Definition-b876ecf4-a901-4721-9c4b-9f2fc21f954c|57ea599773d45150b2632df9) by 200 million DAI from 200 million DAI to **400 million DAI**.
- Leave [Ceiling Increase Cooldown (`ttl`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.5_Ceiling_Increase_Cooldown_Definition-3d5980c5-7036-4b68-93e0-a48551fe09ed|57ea599773d45150b2632df9) unchanged at **12 hours**.
- Increase the [Buffer (`buf`)](https://sky-atlas.powerhouse.io/#A.3.4.1.5.1.1.6_Buffer_Definition-cf8e3d20-fffa-4b6a-9bf2-169d493c3638|57ea599773d45150b2632df9) by 200 million DAI from 200 million DAI to **400 million DAI**.

### Keeper Network Threshold Parameters

The parameters for the KeeperNetworkJob will be:

- `fill`: set `rushThreshold` to **20 million DAI**.
- `trim`: set `gushThreshold` to **20 million DAI**.
- `chug`: set `cutThreshold` to **300,000 DAI**.

Please review the discussion [thread](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-3-final-migration-proposed-parameters/25183) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* This change will be included in an upcoming Executive Vote.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
