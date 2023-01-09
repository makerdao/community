---
title: PPG - Open Market Committee Proposal - January 9, 2023
summary: Signal your support or opposition to the latest proposal from the Maker Open Market Committee.
discussion_link: https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-5-january-2023/19327
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
start_date: 2023-01-09T16:00:00
end_date: 2023-01-12T16:00:00
---
# PPG - Open Market Committee Proposal - January 9, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, January 9 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

MKR Voters may vote in this poll to express support or opposition to the following parameter changes:

### Stability Fee Increase

* Increase the WSTETH-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.25% from 0% to **0.25%**.

### DAI Direct Deposit Module (D3M) Changes

#### Compound v2 D3M Changes

* Increase the [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 15 million DAI from 5 million DAI to **20 million DAI**.
* Set [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) to **5 million DAI**.

#### Aave v2 D3M Changes

* Reactivate the Aave v2 D3M.
* Set [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) to **2%**.
* Set [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) to **20 million DAI**.
* Set [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) to **5 million DAI**.

**Governance Facilitator's Note:** It is likely that Protocol Engineering will move to upgrade the Aave v2 D3M to the more recent implementation used for the Compound v2 D3M. If this is done, since it is a new implementation, a more cautious Debt Ceiling may be used initially. Final confirmation will be provided by PE and GovAlpha prior to any relevant Executive Vote.

### PSM Changes

* Increase the PSM-USDP-A [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) by 0.1% from 0.1% to **0.2%**.

Please review the proposal [thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-5-january-2023/19327) to help inform your position before voting.

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
