---
title: LITE-PSM-USDC-A Phase 2 (Major Migration) Parameter Proposal - August 12, 2024
summary: Signal your support or opposition to the LITE-PSM-USDC-A Phase 2 parameter proposal.
discussion_link: https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839
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
start_date: 2024-08-12T16:00:00
end_date: 2024-08-15T16:00:00
---
# Poll: LITE-PSM-USDC-A Phase 2 (Major Migration) Parameter Proposal - August 12, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, August 12 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to making the following changes in the context of the [LITE-PSM-USDC-A migration plan](https://forum.makerdao.com/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512#lite-psm-usdc-a-migration-plan-9):

- Update the below contracts so they point to the LitePSM:
  - [RWA014_A_INPUT_CONDUIT_URN](https://etherscan.io/address/0x6b86ba08bd7796464cea758061ac173d0268cf49)
  - [RWA014_A_INPUT_CONDUIT_JAR](https://etherscan.io/address/0x391470cd3d8307adc051d878a95fa9459f800dbc)
  - [RWA014_A_OUTPUT_CONDUIT](https://etherscan.io/address/0xd7cbdfde553de2063caafbf230be135e5dbb5064)
  - [RWA007_A_JAR_INPUT_CONDUIT](https://etherscan.io/address/0xc8bb4e2b249703640e89265e2ae7c9d5ea2af742)
  - [RWA007_A_INPUT_CONDUIT](https://etherscan.io/address/0x58f5e979ef74b60a9e5f955553ab8e0e65ba89c9)
  - [RWA007_A_OUTPUT_CONDUIT](https://etherscan.io/address/0x701c3a384c613157bf473152844f368f2d6ef191)
  - [RWA015_A_INPUT_CONDUIT_JAR_USDC](https://etherscan.io/address/0xb9373c557f3ae8cddd068c1644ed226cfb18a997)
  - [RWA015_A_INPUT_CONDUIT_URN_USDC](https://etherscan.io/address/0xe08cb5e24862ea86328295d5e5c08972203c20d8)
  - [RWA015_A_OUTPUT_CONDUIT](https://etherscan.io/address/0x1e86cb085f249772f7e7443631a87c6bdba2aceb)
  - [RWA009_A_INPUT_CONDUIT_URN_USDC](https://etherscan.io/address/0x08012ec53a7fabf6f33318dfb93c1289886ebbe1)
- _(Monetalis Clydesdale Coinbase Custody will start migrating reserves to the LitePSM based on the throughput limits)._
- Migrate all but 200 million USDC reserves from PSM-USDC-A to LitePSM with a script to be executed in an upcoming spell.
- The PSM-USDC-A liquidity throughput is decreased; the LitePSM is increased and potential liquidity remains constant:
  - `PSM-USDC-A`
    - [`tin`](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) & [`tout`](https://manual.makerdao.com/module-index/module-psm#fee-out-tout): Increase by 0.01 percentage points, from 0% to **0.01%**.
    - [DC-IAM `line` (Maximum Debt Ceiling)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-): Decrease by 7.5 billion DAI, from 10 billion DAI to **2.5 billion DAI**.
    - [DC-IAM `gap` (Target Available Debt)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-): Decrease by 180 million DAI, from 380 million DAI to **200 million DAI**.
    - [DC-IAM `ttl` (Ceiling Increase Cooldown)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-): **12 hours** (remains unchanged).
  - `LITE-PSM-USDC-A`
    - [`tin`](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) & [`tout`](https://manual.makerdao.com/module-index/module-psm#fee-out-tout): **0** (remains unchanged).
    - [DC-IAM `line` (Maximum Debt Ceiling)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-): Increase by 7.45 billion DAI, from 50 million DAI to **7.5 billion DAI**.
    - [DC-IAM `gap` (Target Available Debt)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-): Increase by 180 million DAI, from 20 million DAI to **200 million DAI**.
    - [DC-IAM `ttl` (Ceiling Increase Cooldown)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-): **12 hours** (remains unchanged).
    - [`buf`](https://forum.makerdao.com/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512#lite-psm-usdc-a-parameters-overview-8): Increase by 180 million DAI, from 20 million DAI to **200 million DAI**.
- [GSM Delay](https://mips.makerdao.com/mips/details/MIP113#10-1-gsm-governance-security-module-pause-delay): Increase by 14 hours, from 16 hours to **30 hours**.
  - Update [Governance Scope, article 10.1.A](https://mips.makerdao.com/mips/details/MIP113#10-1-1a) accordingly.

- A new KeeperJob will be deployed with the following parameters:
    - `fill`: The `rushThreshold` will be set to **20 million DAI**
    - `trim`: The `gushThreshold` will be set to **20 million DAI**
    - `chug`: The `cutThreshold` will be set to **300,000 DAI**

Please review the discussion [thread](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839) to help inform your position before voting.

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
