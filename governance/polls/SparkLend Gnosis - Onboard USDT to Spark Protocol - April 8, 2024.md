---
title: SparkLend Gnosis - Onboard USDT to Spark Protocol - April 8, 2024
summary: Onboard USDT (Tether USD on xDai) to Spark Protocol on Gnosis with included parameters.
discussion_link: https://forum.makerdao.comhttps://github.com/MakerJanSky/community/blob/Poll-Drafts-for-April-8/governance/polls/SparkLend%20Gnosis%20-%20Onboard%20EURe%20to%20Spark%20Protocol%20-%20April%208%2C%202024.md/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033
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
start_date: 2024-04-08T16:00:00
end_date: 2024-04-11T16:00:00
---
# Poll: SparkLend Gnosis - Onboard USDT to Spark Protocol - April 8, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of Spark Protocol and the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, April 8 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding USDT (Tether USD on xDai) to Spark Protocol on Gnosis with the parameters below:

### Spark Parameters

* Token: USDT
* Token Address: [0x4ECaBa5870353805a9F068101A40E0f32ed605C6](https://gnosisscan.io/address/0x4ecaba5870353805a9f068101a40e0f32ed605c6)
* Oracle: 1:1 USD Fixed
* Oracle Provider: N/A
* Borrow Enabled: Yes
* Base borrow rate: 0%
* Optimal borrow rate: 12%
* Max borrow rate: 62%
* Optimal Utilization: 90%
* Reserve factor: 10%
* Borrowable in isolation mode: Yes
* [Siloed borrowing](https://docs.spark.fi/defi-infrastructure/sparklend#siloed-borrowing): Yes
* Collateral Enabled: No
* [Efficency Mode](https://docs.spark.fi/defi-infrastructure/sparklend#efficiency-mode-emode): N/A
* [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled: N/A
* Isolation Mode Debt Ceiling: N/A
* [Supply cap](https://docs.spark.fi/defi-infrastructure/sparklend#supply-and-borrow-caps): 10,000,000 USDT
* [Borrow cap](https://docs.spark.fi/defi-infrastructure/sparklend#supply-and-borrow-caps):  8,000,000 USDT

Please review the proposal [thread](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033) for more information about this proposed onboarding.

A risk evaluation has been provided by BA Labs and can be found [here](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/3). 

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* USDT (Tether USD on xDai) will be onboarded to Spark Protocol Gnosis via a future executive vote.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in Spark Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Further information about Spark Protocol can be found at its [Documentation Hub](https://docs.sparkprotocol.io/hub/).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
