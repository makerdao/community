---
title: Decentralized Collateral Parameter Changes - April 17, 2023
summary: Signal your support or opposition to the risk parameter suggestions from the Decentralized Collateral Scope Facilitators.
discussion_link: https://forum.makerdao.com/t/out-of-scope-proposed-risk-parameters-changes-stability-fee-dc-iam/20564
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
start_date: 2023-04-17T16:00:00
end_date: 2023-04-20T16:00:00
---
# Poll: Decentralized Collateral Parameter Changes - April 17, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Decentralized Collateral Scope Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, April 17 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes:

### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Changes

* Increase ETH-A Stability Fee by 0.25% from 1.5% to **1.75%**.
* Increase ETH-B Stability Fee by 0.25% from 3% to **3.25%**.
* Increase ETH-C Stability Fee by 0.25% from 0.75% to **1%**.
* Increase WSTETH-A Stability Fee by 0.25% from 1.5% to **1.75%**.
* Increase WSTETH-B Stability Fee by 0.25% from 0.75% to **1%**.
* Increase RETH-A Stability Fee by 0.25% from 0.5% to **0.75%**.
* Increase CRVV1ETHSTETH-A Stability Fee by 0.25% from 1.5% to **1.75%**.

### [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Changes

* Increase the WSTETH-A `gap` by 15 million DAI from 15 million DAI to **30 million DAI**.
* Increase the WSTETH-B `gap` by 15 million DAI from 15 million DAI to **30 million DAI**.
* Reduce the WBTC-A `gap` by 10 million DAI from 20 million DAI to **10 million DAI**.
* Reduce the WBTC-B `gap` by 5 million DAI from 10 million DAI to **5 million DAI**.
* Reduce the WBTC-C `gap` by 10 million DAI from 20 million DAI to **10 million DAI**.

### [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) Changes

* Increase the WSTETH-A `ttl` by 21,600 seconds from 21,600 seconds to **43,200 seconds**.
* Increase the WSTETH-B `ttl` by 28,800 seconds from 28,800 seconds to **57,600 seconds**.

Please review the discussion [thread](https://forum.makerdao.com/t/out-of-scope-proposed-risk-parameters-changes-stability-fee-dc-iam/20564) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* This change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
