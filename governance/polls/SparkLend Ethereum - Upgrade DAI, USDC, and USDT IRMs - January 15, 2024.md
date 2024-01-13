---
title: SparkLend Ethereum - Upgrade DAI, USDC, and USDT Interest Rate Models - January 15, 2024
summary: Signal your support or opposition to upgrading DAI, USDC, and USDT Interest Rate Models.
discussion_link: https://forum.makerdao.com/t/jan-10-2024-proposed-changes-to-sparklend-for-upcoming-spell/23389
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
start_date: 2024-01-15T16:00:00
end_date: 2024-01-18T16:00:00
---
# Poll: SparkLend Ethereum - Upgrade DAI, USDC, and USDT Interest Rate Models - January 15, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of Spark Protocol and the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, January 15 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The current Interest Rate Models (IRMs) for DAI, USDC, and USDT include legacy features that make the code overly complex, which can lead to configuration errors. Furthermore, These IRMs hold a hardcoded value for the Dai Savings Rate (DSR), which can result in a suboptimal borrow rate. Phoenix Labs proposes upgrading these IRMs with simpler versions that, additionally, will optimize borrow by reading the current DSR dynamically. The community can vote in this poll to express support or opposition to the following changes:
* Upgrading DAI, USDC, and USDT IRMs.

Please review the discussion [thread](https://forum.makerdao.com/t/jan-10-2024-proposed-changes-to-sparklend-for-upcoming-spell/23389) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* Phoenix Labs will prepare a Spark spell upgrading the DAI, USDC, and USDT IRMs on Ethereum.
* An upcoming Executive Vote will include a proposal to execute the Spark spell.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
