---
title: SparkLend Ethereum - Onboard weETH to SparkLend - June 3, 2024
summary: Onboard weETH (Etherfi weETH) to SparkLend on mainnet with the included parameters.
discussion_link: https://forum.makerdao.com/t/may-31-2024-proposed-changes-to-sparklend-for-upcoming-spell/24413
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
start_date: 2024-06-03T16:00:00
end_date: 2024-06-06T16:00:00
---
# Poll: SparkLend Ethereum - Onboard weETH to SparkLend - June 3, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, June 3 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows MakerDAO Governance to signal their support or opposition to adding weETH (Etherfi weETH) to SparkLend on mainnet with the parameters below:

### Spark Parameters

* Token: **weETH**
* Token Address: **[0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee](https://etherscan.io/address/0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee)**
* Oracle: weETH/eETH exchange rate (from contract) * eETH/ETH fixed at 1 ([implementation](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/WEETHExchangeRateOracle.sol))
* Optimal Utilization: **45%**
* Base: **5%**
* Slope1: **15%**
* Slope2: **300%**
* Borrow Enabled: **No**
* Stable Rate Borrowing: **No**
* Isolation Borrowable: **No**
* Siloed Borrowing: **No**
* Flash Loan Enabled: **No**
* Loan To Value: **72%**
* Liquidation Threshold: **73%**
* Liquidation Bonus: **10%**
* Reserve Factor: **15%**
* Supply Cap: **5,000 weETH**
* Supply Cap (max): **50,000 weETH**
* Supply Cap (gap): **5,000 weETH**
* Supply Cap (ttl): **12 hours**
* Borrow Cap: **0**
* Borrow Cap (max): N/A
* Borrow Cap (gap): N/A
* Borrow Cap (ttl): N/A
* [Isolation Mode](https://devs.spark.fi/sparklend/features/isolation-mode) Enabled: **Yes**
* Isolation Mode Debt Ceiling: **50 million USD**
* Liquidation Protocol Fee: **10%**
* Emode Category: N/A

Please review the proposal [thread](https://forum.makerdao.com/t/may-31-2024-proposed-changes-to-sparklend-for-upcoming-spell/24413) for more information about this proposed onboarding.

A risk evaluation has been provided by BA Labs and can be found [here](https://forum.makerdao.com/t/risk-assessment-weeth-collateral-on-sparklend-mainnet/24414).

The Spark developer docs contain information on the parameters listed above and can be accessed at [https://devs.spark.fi/](https://devs.spark.fi/).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* weETH (Etherfi weETH) will be onboarded to SparkLend on mainnet in a future executive vote.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in SparkLend after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
