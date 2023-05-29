---
title: Add BlockTower Andromeda (RWA015) as a new RWA Vault Type - May 29, 2023
summary: This poll proposes system parameters which could be used to initialize BlockTower Andromeda (RWA015) as a new RWA vault type.
discussion_link: https://forum.makerdao.com/t/project-andromeda-risk-legal-assessment/20969
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
start_date: 2023-05-29T16:00:00
end_date: 2023-06-01T16:00:00
---
# Poll: Add BlockTower Andromeda (RWA015) as a new RWA Vault Type - May 29, 2023

The Governance Facilitators have placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, May 29 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding BlockTower Andromeda (RWA015) as a new vault type in the Maker Protocol with the parameters below:

### Collateral Parameters

* Symbol: **RWA015**.
* Token Name: **RWA-015**.
* Ilk Registry Name: **RWA015-A: BlockTower Andromeda**.
* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): **0** - fees paid manually to the Surplus Buffer.
* [Autoline (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam): **Yes**.
* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): **1.28 billion DAI**.
* [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): **50 million DAI**.
* [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): **84,600 seconds (1 day)**.
* Oracle Price: **1.28 billion DAI**.
* Minimum Vault Collateralization Ratio: **100%**
* Liquidation Process: **MIP21**.

*Note MIP21 is the name of the smart contracts used in liquidation of RWA collaterals, as well as the name of a now offboarded MIP*.

Please review the following forum threads containing information about $ilk ($asset_name) to inform your position before voting.
* [Initial Collateral Application](https://forum.makerdao.com/t/mip90-liquid-aaa-structured-credit-money-market-fund/18428/1)
* [Steakhouse Financial Legal & Risk Assessment](https://forum.makerdao.com/t/project-andromeda-risk-legal-assessment/20969)
* [dewiz Technical Assessment](https://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* BlockTower Andromeda (RWA015) will be onboarded in a future executive vote.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
