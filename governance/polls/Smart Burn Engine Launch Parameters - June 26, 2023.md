---
title: Smart Burn Engine Launch Parameters - June 26, 2023
summary: Signal your approval for the proposed launch parameters for the Smart Burn Engine from BA Labs.
discussion_link: https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201
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
start_date: 2023-06-26T16:00:00
end_date: 2023-06-29T16:00:00
---
# Poll: Smart Burn Engine Launch Parameters - June 26, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Scope Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, June 26 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes:
* Launch the Smart Burn Engine using the UniV2 DAI/MKR market.
* Set `hop` to **1577 seconds** - `hop` defines the minimum interval between `kicks`, therefore setting the maximum allowed frequency of market actions taking place.
* Set `want` to **0.98** - `want` defines the relationship between the purchase price of MKR and the price provided by the MKR/USD oracle, i.e. the slippage. A `want` of 0.98 means that the purchase price of MKR can be up to 2% worse than the oracle price.
* Set `bump` to **5,000 DAI** - `bump` defines the amount of DAI that will be sold for MKR in each market action, while the Surplus Buffer exceeds the Surplus Buffer Upper Limit - see below.
* Set `receiver` to **MCD_Pause_Proxy ([0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb))** - the `receiver` is the destination address of the LP tokens purchased by the Smart Burn Engine.

An explanation of the Smart Burn Engine as well as links to the relevant contract code and audits is available on the forum. Please review the discussion [thread](https://forum.makerdao.com/t/introduction-of-smart-burn-engine-and-initial-parameters/21201) to help inform your position before voting.

Note that when the Smart Burn Engine is deployed the old MCD_Flapper will be disabled.

### Scope Defined Parameter

The following Smart Burn Engine parameter is defined by the Stability Scope rather than this poll, but has been provided here for information purposes:
* The Surplus Buffer Upper Limit (`hump`) will be set to **50 million DAI** -  this means that the Surplus Buffer must contain a minimum of 50 million DAI before the Smart Burn Engine starts buying MKR. More information [here](https://manual.makerdao.com/parameter-index/core/param-system-surplus-buffer). In practice, this is a reduction from the current value of 250 million DAI that must be exceeded before a flap auction is triggered.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* This change will be included in an upcoming Executive Vote.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
