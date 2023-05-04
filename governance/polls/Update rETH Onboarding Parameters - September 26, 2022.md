---
title: Update rETH Onboarding Parameters - September 26, 2022
summary: Signal your support or opposition to the proposed changes to the rETH onboarding parameters.
discussion_link: https://forum.makerdao.com/t/reth-collateral-onboarding-risk-evaluation-update/18071
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
start_date: 2022-09-26T16:00:00
end_date: 2022-09-29T16:00:00
---
# Poll: Update rETH Onboarding Parameters - September 26, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Risk Core Unit. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, September 26 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes:
* Decrease [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.75%, from 2.25% to **1.5%**.
* Decrease [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) by 0.1, from 1.2 to **1.1**.
* Increase [Max Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown) by 0.05, from 0.4 to **0.45**. 
* Decrease [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) by 20 minutes, from 140 minutes (8,400 seconds) to **120 minutes (7,200 seconds)**.
* Decrease [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) by 50 DAI, from 300 DAI to **250 DAI**.

All other parameters will remain as proposed in the original [onboarding vote](https://vote.makerdao.com/polling/QmfMswF2#poll-detail).

Please review the discussion [thread](https://forum.makerdao.com/t/reth-collateral-onboarding-risk-evaluation-update/18071) to help inform your position before voting.

**Governance Facilitator's Note:** this is not a "re-run" of the rETH onboarding vote, but a poll to approve the new parameters proposed by the Risk Core Unit. If the new parameters are rejected, onboarding will continue with the [originally approved parameters](https://vote.makerdao.com/polling/QmfMswF2#poll-detail).  This does not change the projected date for Executive Vote inclusion of mid-October - as per the [Collateral Status Index](https://docs.google.com/spreadsheets/d/1PDf_CzhGa7mLuOUfX6Bz3WrnCjDRhIjmu-vDZMMw4Qc/edit#gid=1077340672).

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These new parameters will be included when rETH is onboarded to the Maker Protocol.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then the [originally approved parameters](https://vote.makerdao.com/polling/QmfMswF2#poll-detail) will be used when onboarding rETH to the Maker Protocol.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
