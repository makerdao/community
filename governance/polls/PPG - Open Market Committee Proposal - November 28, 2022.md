---
title: PPG - Open Market Committee Proposal - November 28, 2022
summary: Signal your support or opposition to included parameter changes based on the recommendation of the Maker Open Market Committee.
discussion_link: https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-24-november-2022/18925
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
start_date: 2022-11-28T16:00:00
end_date: 2022-12-01T16:00:00
---
# PPG - Open Market Committee Proposal - November 28, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, November 28 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

MKR Token Holders may vote in this poll to express support or opposition to the following parameter changes:

### Vault Parameter Changes

#### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Increases

- Increase the WSTETH-A Maximum Debt Ceiling (`line`) by 350 million DAI from 150 million DAI to **500 million DAI**.
- Increase the WSTETH-B Maximum Debt Ceiling (`line`) by 300 million DAI from 200 million DAI to **500 million DAI**.

#### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Reductions
- Reduce the ETH-B Maximum Debt Ceiling (`line`) by 250 million DAI from 500 million DAI to **250 million DAI**.
- Reduce the WBTC-A Maximum Debt Ceiling (`line`) by 1.5 billion DAI from 2 billion DAI to **500 million DAI**.
- Reduce the WBTC-B Maximum Debt Ceiling (`line`) by 250 million DAI from 500 million DAI to **250 million DAI**.
- Reduce the WBTC-C Maximum Debt Ceiling (`line`) by 500 million DAI from 1 billion DAI to **500 million DAI**.
- Reduce the MANA-A Maximum Debt Ceiling (`line`) by 1 million DAI from 1 million DAI to **0 DAI**.
- Reduce the GUNIV3DAIUSDC1-A Maximum Debt Ceiling (`line`) by 900 million DAI from 1 billion DAI to **100 million DAI**.
- Reduce the GUNIV3DAIUSDC2-A Maximum Debt Ceiling (`line`) by 1.15 billion DAI from 1.25 billion DAI to **100 million DAI**.
- Reduce the UNIV2DAIUSDC-A Maximum Debt Ceiling (`line`) by 200 million DAI from 300 million DAI to **100 million DAI**.
- Reduce the PSM-USDP-A Maximum Debt Ceiling (`line`) by 50 million DAI from 500 million DAI to **450 million DAI**.

#### [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Reductions
- Reduce the WSTETH-A Target Available Debt (`gap`) by 15 million DAI from 30 million DAI to **15 million DAI**.
- Reduce the WSTETH-B Target Available Debt (`gap`) by 15 million DAI from 30 million DAI to **15 million DAI**.
- Reduce the WBTC-A Target Available Debt (`gap`) by 60 million DAI from 80 million DAI to **20 million DAI**.
- Reduce the WBTC-B Target Available Debt (`gap`) by 20 million DAI from 30 million DAI to **10 million DAI**.
- Reduce the WBTC-C Target Available Debt (`gap`) by 80 million DAI from 100 million DAI to **20 million DAI**.
- Reduce the LINK-A Target Available Debt (`gap`) by 4.5 million DAI from 7 million DAI to **2.5 million DAI**.
- Reduce the YFI-A Target Available Debt (`gap`) by 5.5 million DAI from 7 million DAI to **1.5 million DAI**.

#### [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) Increases
- Increase the WBTC-A Ceiling Increase Cooldown (`ttl`) by 18 hours from 6 hours to **24 hours**.
- Increase the WBTC-B Ceiling Increase Cooldown (`ttl`) by 16 hours from 8 hours to **24 hours**.
- Increase the WBTC-C Ceiling Increase Cooldown (`ttl`) by 16 hours from 8 hours to **24 hours**.

### [Peg Stability Module (PSM)](https://manual.makerdao.com/module-index/module-psm) Parameter Changes

#### [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) Increases
- Increase the PSM-USDP-A Fee In (`tin`) by 0.1% from 0% to **0.1%**.
- Increase the PSM-GUSD-A Fee In (`tin`) by 0.1% from 0% to **0.1%**.

#### [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) Reduction

- Reduce the PSM-GUSD-A Fee Out (`tout`) by 0.1% from 0.2% to **0.1%**.

### [DAI Direct Deposit Module (D3M)](https://manual.makerdao.com/module-index/module-dai-direct-deposit) Parameter Change

- Reduce the Compound V2 D3M [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 150 million DAI from 160 million DAI to **10 million DAI**.

**Note:** the Compound V2 D3M is being onboarded with a Maximum Debt Ceiling (`line`) of 5 million DAI. It had previously been proposed to increase this to 160 million DAI once Protocol Engineering were happy, this proposal reduces that target value from 160 million DAI to 10 million DAI. It does not change the onboarding value of 5 million DAI.

Please review the proposal [thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-24-november-2022/18925) to help inform your position before voting.

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