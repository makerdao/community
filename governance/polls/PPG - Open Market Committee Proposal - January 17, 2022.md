---
title: PPG - Open Market Committee Proposal - January 17, 2022
summary: Minor stability fee decreases on ETH-A and wSTETH-A, a handful of debt ceiling decreases, expanding the Aave D3M and the UniswapV3-Gelato DAI-USDC 0.01% fee vault.
discussion_link: https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2022-01-07/12522
vote_type: Plurality Voting
categories:
   - Risk Variable
   - Rates
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-01-17T16:00:00
end_date: 2022-01-20T16:00:00
---
# Poll: PPG - Open Market Committee Proposal - January 17, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355). This Governance [Poll](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) will be active for three days beginning on Monday, January 17 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

MKR Token Holders may vote in this poll to express support or opposition to the following parameter changes: 

**Stability Fee Decreases**
* Decrease the ETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 2.75% to 2.5%.
* Decrease the WSTETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 4% to 3%.

**Debt Ceiling Decreases**
* Decrease the LINK-A [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 140 million DAI to 100 million DAI.
* Decrease the YFI-A [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 130 million DAI to 50 million DAI.
* Decrease the UNI-A [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 50 million DAI to 25 million DAI.
* Decrease the UNIV2UNIETH-A [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 20 million DAI to 5 million DAI.
* Decrease the GUSD-A [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) from 5 million DAI to zero DAI.

**DIRECT-AAVEV2-DAI (Aave D3M) Changes**
* Decrease the DIRECT-AAVEV2-DAI [Target Borrow Rate](https://github.com/makerdao/dss-direct-deposit#configuration) from 3.9% to 3.75%.
* Increase the DIRECT-AAVEV2-DAI [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) from 15 million DAI to 50 million DAI.
* Increase the DIRECT-AAVEV2-DAI [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 100 million DAI to 220 million DAI.

**GUNIV3DAIUSDC2-A Changes**
* Increase the GUNIV3DAIUSDC2-A [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 10 million DAI to 500 million DAI.
* Decrease the GUNIV3DAIUSDC2-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) from 1% to 0.5%.

Please review the proposal [thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2022-01-07/12522) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These parameter changes will be included in the weekly Executive Vote on the Friday following the conclusion of this poll.
* If the Friday executive passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
