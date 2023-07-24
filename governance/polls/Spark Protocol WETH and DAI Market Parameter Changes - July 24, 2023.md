---
title: Spark Protocol WETH and DAI Market Parameter Changes - July 24, 2023
summary: Signal your support or opposition to the listed parameter changes for the Spark Protocol lending markets.
discussion_link: https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422
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
start_date: 2023-07-24T16:00:00
end_date: 2023-07-27T16:00:00
---
# Poll: Spark Protocol WETH and DAI Market Parameter Changes - July 24, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, July 24 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes (commentary provided by Phoenix Labs team):
* Set DAI market [Loan-To-Value (LTV)](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value) and [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold) to **0.01%**. 

This will effectively remove DAI as a collateral type, ensuring that there won’t be a situation where the market is at 100% utilization and liquidations on the short positions need to be done. This is particularly important because the sDAI market is frozen, meaning that the only way to short is through the DAI market. Keep in mind that since DAI has active suppliers, LTV can’t be set to zero, this means that usageAsCollateralEnabled will still be true.

* Set WETH market [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor_) to **5%**.

This will reduce the protocol fee taken on the ETH market giving suppliers a larger APY.

* Set WETH market [Variable Rate Slope 1](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) to **3%**.

This is sets the optimal borrow rate at 4%, based on the `variableRateSlope1` change and `baseVariableRate` being at 1%. This change will ensure a more healthy utilization near the kink to improve supplier return and incentivize more deposits.

Please review the discussion [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark/21422) to help inform your position before voting.

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
