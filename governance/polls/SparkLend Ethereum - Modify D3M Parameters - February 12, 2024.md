---
title: SparkLend Ethereum - Modify D3M Parameters - February 12, 2024
summary: Signal your support or opposition to adjusting the SparkLend DAI Direct Deposit Module (D3M) parameters.
discussion_link: https://forum.makerdao.com/t/feb-9-2024-proposed-changes-to-sparklend-for-upcoming-spell/23656
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
start_date: 2024-02-12T16:00:00
end_date: 2024-02-15T16:00:00
---
# Poll: SparkLend Ethereum - Modify D3M Parameters - February 12, 2024

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the Stability Scope Facilitators. The community can vote in this poll to express support or opposition to using the SparkLend Direct Deposit DAI Module (D3M) with the listed parameters. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, February 12 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to making the following parameter changes to the SparkLend DAI Direct Deposit Module (D3M):
* Increase the DIRECT-SPARK-DAI [Maximum Debt Ceiling (`line`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-) by 300 million DAI from 1.2 billion DAI to **1.5 billion DAI**.
* Increase the DIRECT-SPARK-DAI [Target Available Debt(`gap`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-) by 20 million DAI from 20 million DAI to **40 million DAI**.
* Increase the DIRECT-SPARK-DAI [Ceiling Increase Cooldown(`ttl`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-) by 12 hours from 12 hours to **24 hours**.
* Increase the DIRECT-SPARK-DAI `buffer` by 20 million DAI from 30 million DAI to **50 million DAI**.
    * The `buffer` value is set in the [SparkLend D3MPlan](https://etherscan.io/address/0x104fadbb7e17db1a685bba61007dfb015206a4d2#code) contract. It controls the target amount of DAI available for borrowing at any given time in SparkLend. For example, if 100 million DAI has been borrowed and the `buffer` is set to 20 million DAI, the D3M will mint enough DAI to ensure that the Total Supply is 120 million DAI and deposit it to SparkLend, assuming there is sufficient available Debt Ceiling.

Please review the discussion [thread](https://forum.makerdao.com/t/feb-9-2024-proposed-changes-to-sparklend-for-upcoming-spell/23656) to help inform your position before voting.

For more information regarding the DAI Direct Deposit Module (D3M) and how these parameters interact, check out the forum thread [here](https://forum.makerdao.com/t/discussion-direct-deposit-dai-module-d3m/7357).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These parameter changes will be included in an upcoming Executive Vote.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
