---
title: Spark Protocol ETH Market Parameter Changes - August 21, 2023
summary: Signal your support or opposition to the listed parameter changes for the Spark Protocol ETH market.
discussion_link: https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark-for-next-upcoming-spell/21685
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
start_date: 2023-08-21T16:00:00
end_date: 2023-08-24T16:00:00
---
# Poll: Spark Protocol ETH Market Parameter Changes - August 21, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, August 21 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes:
* Decrease ETH market [variableRateSlope1](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) by 0.2% from 3% to **2.8%** - this effectively reduces the optimal borrow rate from 4% to 3.8%.
* Increase ETH market [Optimal Utilization](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#interest-rate-model) by 10% from 80% to **90%** - this allows for better rates to suppliers at the optimal utilization.
* Increase ETH market [variableRateSlope2](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) by 40% from 80% to 120% - this effectively increases the maximum borrow rate from 84% to 123.8%. This reduces the possibility of the lending pool being at 100% utilization rate by accelerating the rate increase.

Please review the discussion [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark-for-next-upcoming-spell/21685) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These changes will be included in an upcoming Executive Vote.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
