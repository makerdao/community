---
title: PSM Parameter Normalization - March 20, 2023
summary: Rank your preferred options for PSM parameters.
discussion_link: https://forum.makerdao.com/t/proposal-psm-parameter-normalization-17-march-2023/20209
parameters:
    input_format: rank-free
    victory_conditions:
        - { type : instant-runoff }
    result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Option 1 - Diversify Stablecoin Reserves
   2: Option 2 - Maintain USDC as the Primary Reserve
   3: Reject Options
start_date: 2023-03-20T16:00:00
end_date: 2023-03-23T16:00:00
---
# Poll: PSM Parameter Normalization - March 20, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Risk Core Unit. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, March 20 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community can vote in this poll to rank their support of the following options:

* Option 1: Diversify Stablecoin Reserves - detailed below.
* Option 2: Maintain USDC as the Primary Reserve - detailed below.
* Reject Options.

### Option 1: Diversify Stablecoin Reserves

#### PSM-USDC-A

* Reduce the [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) by 0.95% from 1% to **0.05%**.
* Reduce the [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 50 million DAI from 250 million DAI to **200 million DAI**.
* Decrease the [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 2.5 billion DAI from 10 billion DAI to **7.5 billion DAI**.

#### PSM-GUSD-A

* Reduce the [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) by 0.1% from 0.1% to **0%**.
* Increase the [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) by 0.25% from 0% to **0.25%**.
* Increase the [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 140 million DAI from 10 million DAI to **150 million DAI**.
* Increase the [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 500 million DAI from 500 million DAI to **1 billion DAI**.

#### PSM-USDP-A

* Reduce the [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) by 0.8% from 1% to **0.2%**.
* Reduce the [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 100 million DAI from 250 million DAI to **150 million DAI**.

### Option 2: Maintain USDC as the Primary Reserve

#### PSM-USDC-A

* Reduce the [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) by 1% from 1% to **0%**.
* Increase the [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 150 million DAI from 250 million DAI to **400 million DAI**.

#### PSM-GUSD-A

* Reduce the [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) by 0.1% from 0.1% to **0%**.
* Increase the [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) by 0.01% from 0% to **0.01%**.
* Increase the [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 40 million DAI from 10 million DAI to **50 million DAI**.

#### PSM-USDP-A

* Reduce the [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) by 1% from 1% to **0%**.
* Reduce the [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 200 million DAI from 250 million DAI to 50 million DAI.
* Reduce the [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 500 million DAI from 1 billion DAI to 500 million DAI.

Please review the discussion [thread](https://forum.makerdao.com/t/proposal-psm-parameter-normalization-17-march-2023/20209) to help inform your position before voting.

## Outcomes

**If a non-'Abstain' option receives more votes than each other option (excluding 'Abstain') and the votes for that option exceed 50% of the total votes cast then that option is deemed the winner and the following actions will be taken:**
* If the winner represents a change from the status quo, this change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If no option has enough votes to exceed 50% of the total votes cast, then no further actions will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).