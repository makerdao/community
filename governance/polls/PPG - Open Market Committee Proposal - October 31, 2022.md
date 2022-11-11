---
title: PPG - Open Market Committee Proposal - October 31, 2022
summary: Signal your support or opposition to included parameter changes based on the recommendation of the Maker Open Market Committee.
discussion_link: https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-28-october-2022/18564
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
start_date: 2022-10-31T16:00:00
end_date: 2022-11-03T16:00:00
---
# PPG - Open Market Committee Proposal - October 31, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, October 31 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

MKR Token Holders may vote in this poll to express support or opposition to the following parameter changes:

### Existing Parameter Changes

* Reduce the MANA-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 17 million DAI to **10 million DAI**.
* Increase the MANA-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 4.5% to **7.5%**.

### Proposed Onboarding Parameters for Compound V2 [DAI Direct Deposit Module (D3M)](https://manual.makerdao.com/module-index/module-dai-direct-deposit)

* Onboard Compound V2 D3M with a [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) of **160 million DAI**.
* Onboard Compound V2 D3M with a [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) of **10 million DAI**.
* Onboard Compound V2 D3M with a [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) of **2%**.

Please review the proposal [thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-28-october-2022/18564) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These parameter changes will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
