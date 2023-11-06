---
title: SparkLend Ethereum - Reactivate WBTC and Optimize Parameters for Current Market Conditions - November 6, 2023
summary: Signal your support or opposition to reactivating WBTC on SparkLend Ethereum and optimizing parameters for current market conditions.
discussion_link: https://forum.makerdao.com/t/proposal-to-adjust-sparklend-parameters/22542
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
start_date: 2023-11-06T16:00:00
end_date: 2023-11-09T16:00:00


---

# Poll: SparkLend Ethereum - Reactivate WBTC and Optimize Parameters for Current Market Conditions - November 6, 2023

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of Spark Protocol and the Stability Scope Facilitator. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, November 6 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

Given WBTC's scalability as an asset and the easing of decentralized collateral requirements, Phoenix Labs is proposing to reactivate (unfreeze) the WBTC market and optimize parameters for current market conditions. 

Express your support or opposition to reactivating WBTC on SparkLend Ethereum, with the below parameters.

- Maximum [Loan-to-Value LTV](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value): 70%
- [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold): 75%
- Liquidation penalty: 7%
- [Supply Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#supply-caps): 3,000
- [Borrow Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#borrow-caps): 2,000
- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): 20%
- Base rate: 0%
- Optimal rate: 2%
- Max rate: 302%
- Optimal utilization: 60%
- [Efficiency mode or eMode](https://docs.sparkprotocol.io/developers/features/efficiency-mode-emode): No
- [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode): No
- Debt ceiling: n/a
  - ~$78,000,000 effective risk exposure (~10% of TVL, ~155% of Maker surplus)

For more information about this proposed change, please review the proposal [thread](https://forum.makerdao.com/t/proposal-to-adjust-sparklend-parameters/22542) and [BA Labs' risk analysis](https://forum.makerdao.com/t/spark-parameter-change-mainnet-reactivate-wbtc/22556).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

* Phoenix Labs will prepare a Spark spell to reactivate the WBTC market on SparkLend Ethereum, with specified parameters.
* An upcoming Executive Vote will include a proposal to execute the Spark spell.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).