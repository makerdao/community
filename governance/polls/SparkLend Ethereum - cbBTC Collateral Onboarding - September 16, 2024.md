---
title: SparkLend Ethereum - cbBTC Collateral Onboarding - September 16, 2024
summary: Signal your support or opposition to onboarding Coinbase Wrapped BTC (cbBTC) on SparkLend on Ethereum mainnet.
discussion_link: https://forum.makerdao.com/t/sep-12-2024-proposed-changes-to-spark-for-upcoming-spell/25076
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
start_date: 2024-09-16T16:00:00
end_date: 2024-09-19T16:00:00
---
# Poll: SparkLend Ethereum - cbBTC Collateral Onboarding - September 16, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Ecosystem team. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, September 16 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to onboarding Coinbase Wrapped BTC (cbBTC) on SparkLend on Ethereum mainnet with the following parameters:

- Optimal Utilization: **60%**
- Base: **0%**
- Slope1: **4%**
- Slope2: **300%**
- Stable rate func (deprecated): **N/A**
- Enable Borrow: **YES**
- Stable Rate Borrowing: **NO**
- Isolation Borrowable: **NO**
- [Siloed Borrowing](https://docs.sparkprotocol.io/developers/sparklend/features/siloed-borrowing): **NO**
- [Flash Loan](https://docs.sparkprotocol.io/developers/guides/flash-loans) Enabled: **YES**
- [Loan To Value](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value): **65%**
- [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold): **70%**
- Liquidation Bonus: **8%**
- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **20%**
- [Supply Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#supply-caps): **500 cbBTC**
- Supply Cap (`max`): **3,000 cbBTC**
- Supply Cap (`gap`): **500 cbBTC**
- Supply Cap (`ttl`): **12 hours**
- [Borrow Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#borrow-caps): **50 cbBTC**
- Borrow Cap (`max`): **500 cbBTC**
- Borrow Cap (`gap`): **50 cbBTC**
- Borrow Cap (`ttl`): **12 hours**
- [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode): **NO**
- Isolation Mode Debt Ceiling: **N/A**
- Liquidation Protocol Fee: **10%**
- [Emode](https://docs.sparkprotocol.io/developers/features/efficiency-mode-emode) Category: **0**

cbBTC contract: [0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf](https://etherscan.io/address/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf)

Oracle: [Chronicle Labs BTC/USD](https://chroniclelabs.org/dashboard/oracle/BTC/USD?blockchain=ETH&txn=0xe9ff73bad08cd1efc4773a2ccb0b43a39c441a8a5d0b180bd5ad5d20ac096016&contract=0x24C392CDbF32Cf911B258981a66d5541d85269ce)

Please review the discussion [thread](https://forum.makerdao.com/t/sep-12-2024-proposed-changes-to-spark-for-upcoming-spell/25076) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- Phoenix Labs will prepare a Spark spell to onboard cbBTC to SparkLend Ethereum with the specified parameters.
- An upcoming Executive Vote will include a proposal to execute the Spark spell.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
