---
title: LITE-PSM-USDC-A Phase 1 Parameter Proposal - July 15, 2024
summary: Signal your support or opposition to deploying a new LitePSM with recommended parameters.
discussion_link: https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644
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
start_date: 2024-07-15T16:00:00
end_date: 2024-07-18T16:00:00
---
# Poll: LITE-PSM-USDC-A Phase 1 Parameter Proposal - July 15, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, July 15 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to initiating the LITE-PSM-USDC-A Phase 1 with the following recommended changes:

- Deploy PSM_MOM GSM Delay Exception.
- Migrate the initial 20 million USDC in reserves from PSM-USDC-A to LITE-PSM-USDC-A with a script executed in an upcoming spell.
- Adjust the current DC-IAM DAI liquidity parameters between the two PSMs:
  - PSM-USDC-A
    - [`tin`](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) & [`tout`](https://manual.makerdao.com/module-index/module-psm#fee-out-tout): **0** (remains unchanged).
    - [DC-IAM `line` (Maximum Debt Ceiling)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-): **10 billion DAI** (remains unchanged).
    - [DC-IAM `gap` (Target Available Debt)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-): Decrease by 20 million DAI, from 400 million DAI to **380 million DAI**.
    - [DC-IAM `ttl` (Ceiling Increase Cooldown)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-): **12 hours** (remains unchanged).
  - LITE-PSM-USDC-A
    - [`tin`](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) & [`tout`](https://manual.makerdao.com/module-index/module-psm#fee-out-tout): Set to **0**.
    - [DC-IAM `line` (Maximum Debt Ceiling)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-): Set to **50 million DAI**.
    - [DC-IAM `gap` (Target Available Debt)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-): Set to **20 million DAI**.
    - [DC-IAM `ttl` (Ceiling Increase Cooldown)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-): Set to **12 hours**.
    - [`buf`](https://forum.makerdao.com/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512#lite-psm-usdc-a-parameters-overview-8): Set to **20 million DAI**.
- [GSM Delay](https://mips.makerdao.com/mips/details/MIP113#10-1-gsm-governance-security-module-pause-delay): Decrease by 14 hours, from 30 hours to **16 hours**.
- [ESM (Emergency Shutdown Module) minimum threshold](https://manual.makerdao.com/module-index/module-emergency-shutdown#minimum-threshold-min): Increase by 150,000 MKR, from 150,000 MKR to **300,000 MKR**.
- Deploy a keeper network job for calling permissionless LitePSM functions

Please review the discussion [thread](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- This change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
