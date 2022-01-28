---
title: PPG - Open Market Committee Proposal - January 31, 2022
summary: Small Stability Fee reductions on multiple vault types, increasing Debt Ceiling on the 0.01% fee Gelato DAI-USDC vault type, decreasing Debt Ceiling on the 0.05% fee Gelato DAI-USDC vault type.
discussion_link: https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2022-01-27/12883
vote_type: Plurality Voting
categories:
   - Risk Variable
   - Rates
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-01-31T16:00:00
end_date: 2022-02-03T16:00:00
---
# Poll: Rates Proposal - January 31, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, January 31 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

MKR Token Holders may vote in this poll to express support or opposition to the following parameter changes: 

**[Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Decreases**
* Decrease the ETH-A Stability Fee from 2.5% to 2.25%.
* Decrease the ETH-B Stability Fee from 6.5% to 4%.
* Decrease the WSTETH-A Stability Fee from 3% to 2.5%.
* Decrease the WBTC-A Stability Fee from 4% to 3.75%.
* Decrease the WBTC-B Stability Fee from 7% to 5%.
* Decrease the WBTC-C Stability Fee from 1.5% to 0.75%.
* Decrease the UNIV2DAIETH-A Stability Fee from 2% to 1%.
* Decrease the UNIV2WBTCETH-A Stability Fee from 3% to 2%.
* Decrease the UNIV2USDCETH-A Stability Fee from 2.5% to 1.5%.
* Decrease the GUNIV3DAIUSDC2-A Stability Fee from 0.5% to 0.25%.
* Decrease the TUSD-A Stability Fee from 1% to 0%.

**DIRECT-AAVEV2-DAI (Aave D3M) [Target Borrow Rate](https://github.com/makerdao/dss-direct-deposit#configuration) Decrease**
* Decrease the DIRECT-AAVEV2-DAI Target Borrow Rate from 3.75% to 3.5%.

**[Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Changes**
* Decrease the GUNIV3DAIUSDC1-A Maximum Debt Ceiling from 500 million DAI to 100 million DAI.
* Increase the GUNIV3DAIUSDC2-A Maximum Debt Ceiling from 500 million DAI to 750 million DAI.

**GUNIV3DAIUSDC2-A [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Increase**
* Increase the GUNIV3DAIUSDC2-A Target Available Debt (`gap`) from 10 million DAI to 50 million DAI.

Please review the proposal [thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2022-01-27/12883) to help inform your position before voting.

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
