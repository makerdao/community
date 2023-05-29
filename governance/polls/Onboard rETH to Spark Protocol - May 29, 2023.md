---
title: Onboard rETH to Spark Protocol - May 29, 2023
summary: Onboard rETH (Rocket Pool ETH) to Spark Protocol with included parameters.
discussion_link: https://forum.makerdao.com/t/2023-05-24-spark-protocol-updates/20958
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
start_date: 2023-05-29T16:00:00
end_date: 2023-06-01T16:00:00
---
# Poll: Onboard rETH to Spark Protocol - May 29, 2023

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of Spark Protocol and the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, May 29 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding rETH (Rocket Pool ETH) to Spark Protocol with the parameters below:

### Spark Parameters

* Token: **rETH**.
* Token Address: **[0xae78736cd615f374d3085123a210448e74fc6393](https://etherscan.io/address/0xae78736cd615f374d3085123a210448e74fc6393)**.
* Oracle: **[0x05225Cd708bCa9253789C1374e4337a019e99D56](https://etherscan.io/address/0x05225Cd708bCa9253789C1374e4337a019e99D56)**.
* Oracle Provider: **Chainlink**.
* Borrow Enabled: **Yes**.
* Optimal Usage Ratio: **45%**.
* [Base Borrow](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate): **0%**.
* Slope 1: **7%**.
* Slope 2: **300%**.
* Collateral Enabled: **Yes**.
* [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled: **No**.
* [Loan To Value](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value): **68.50%**.
* [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold): **79.50%**.
* Liquidation Bonus: **7%**.
* Liquidation Protocol Fee: **10%**.
* [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **15%**.
* [Supply Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#supply-caps): **20,000 rETH**.
* [Borrow Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#borrow-caps): **2,400 rETH**.
* [Flashloanable](https://docs.sparkprotocol.io/developers/guides/flash-loans): **Yes**.
* [E-Mode](https://docs.sparkprotocol.io/developers/features/efficiency-mode-emode): **ETH Category**.

### ETH Category E-Mode Parameters

The ETH Category E-mode configuration was set at the time of Spark Protocol's deployment. The parameters are listed here for informational purposes.
* LTV: **90%**.
* Liquidation Threshold: **93%**.
* Liquidation Bonus: **1%**.

Please review the proposal [thread](https://forum.makerdao.com/t/2023-05-24-spark-protocol-updates/20958) for more information about this proposed onboarding.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* rETH (Rocket Pool ETH) will be onboarded to Spark Protocol in an upcoming Executive Vote.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in Spark Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
