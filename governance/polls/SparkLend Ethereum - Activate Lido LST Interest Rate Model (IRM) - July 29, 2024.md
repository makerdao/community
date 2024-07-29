---
title: SparkLend Ethereum - Activate Lido Liquid Staking (LST) Interest Rate Model (IRM) - July 29, 2024
summary: Signal your support or opposition to activating the Lido Liquid Staking (LST) yield oracle and the linked Interest Rate Model (IRM) for the ETH market on SparkLend.
discussion_link: https://forum.makerdao.com/t/jul-27-2024-proposed-changes-to-spark-for-upcoming-spell/24755
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
start_date: 2024-07-29T16:00:00
end_date: 2024-08-01T16:00:00
---
# Poll: SparkLend Ethereum - Activate Lido Liquid Staking (LST) Interest Rate Model (IRM) - July 29, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, July 29 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to activating the Lido Liquid Staking (LST) yield oracle and the linked Interest Rate Model (IRM) for the ETH market on SparkLend with the following parameters:

- [`base rate`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **0%**
- [`variableRateSlope1Spread`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **0%**
- [CappedFallbackRateSource `upperBound`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **5.5%**
- [CappedFallbackRateSource `lowerBound`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **2%**
- [CappedFallbackRateSource `defaultRate`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **3%**
- [`slope 2`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **120%**

The following contracts will be used:

- Chronicle LST Oracle: [0x08669C836F41AEaD03e3EF81a59f3b8e72EC417A](https://etherscan.io/address/0x08669C836F41AEaD03e3EF81a59f3b8e72EC417A)
- Rate Range Enforcement: [sparklend-advanced/src/CappedFallbackRateSource.sol at master · marsfoundation/sparklend-advanced · GitHub](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/CappedFallbackRateSource.sol)
- IRM: [sparklend-advanced/src/RateTargetKinkInterestRateStrategy.sol at master · marsfoundation/sparklend-advanced · GitHub](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/RateTargetKinkInterestRateStrategy.sol)

Please review the discussion [thread](https://forum.makerdao.com/t/jul-27-2024-proposed-changes-to-spark-for-upcoming-spell/24755) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- Phoenix Labs will prepare a Spark spell to activate the Lido LST yield oracle and the linked IRM with the parameters as stated above.
- An upcoming Executive Vote will include a proposal to execute the Spark spell.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
