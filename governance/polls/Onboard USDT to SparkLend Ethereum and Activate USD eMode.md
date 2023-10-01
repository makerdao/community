---
title: Onboard USDT to SparkLend Ethereum and Activate USD eMode - October 2, 2023
summary: Onboard USDT to SparkLend Ethereum and activate USD eMode with included parameters.
discussion_link: https://forum.makerdao.com/t/proposal-to-onboard-usdc-and-usdt-to-sparklend-ethereum/22227
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
start_date: 2023-10-02T16:00:00
end_date: 2023-10-05T16:00:00


---

# Poll: Onboard USDT to SparkLend Ethereum and Activate USD eMode - October 2, 2023

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of Spark Protocol and the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, October 2 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

Express your support or opposition to the following proposed changes:

- Add USDT to SparkLend Ethereum as a borrow-only market, with the below parameters; and
- Activate USD eMode, with the below parameters

### SparkLend Ethereum Parameters

* Token: **USDT**.
* Enable Collateral: **No.**
* [Loan to Value](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value): **N/A**.
* [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold): **N/A**.
* Liquidation Bonus: **N/A**.
* Liquidation Protocol Fee: **N/A**.
* [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode): **NO**.
* Isolation Mode Debt Ceiling: **N/A**.
* [eMode](https://docs.sparkprotocol.io/developers/features/efficiency-mode-emode) Category: **USD**.
* Enable Borrow: **YES**.
* Base: **0%**.
* Slope1: DSR - **0.4%**.
* Slope2: **20%**.
* Optimal Utilization: **95%**.
* [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **5%**.
* [Supply Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#supply-caps): **30m**.
* [Borrow Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#borrow-caps): **Unlimited**.
* Isolation Borrowable: **NO**.
* Stable Rate Borrowing: **NO**.
* [Flash Loan](https://docs.sparkprotocol.io/developers/guides/flash-loans) Enabled: **YES**.
* [Siloed Borrowing](https://docs.sparkprotocol.io/developers/sparklend/features/siloed-borrowing): **YES**.

### USD Efficiency Mode

* LTV: **91%**.
* LT: **92%**.
* Liquidation penalty: **1%**.

Please review the proposal [thread](https://forum.makerdao.com/t/proposal-to-onboard-usdc-and-usdt-to-sparklend-ethereum/22227) for more information about this proposed onboarding.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

* Phoenix Labs will prepare a Spark spell to onboard USDT to SparkLend Ethereum and activate USD eMode, with the specified parameters.
* An upcoming Executive Vote will include a proposal to execute the Spark spell.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).