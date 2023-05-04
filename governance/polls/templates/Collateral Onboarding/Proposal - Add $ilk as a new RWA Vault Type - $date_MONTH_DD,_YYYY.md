---
title: Add $ilk as a new Vault Type - $date_MONTH_DD,_YYYY
summary: This poll proposes system parameters which could be used to initialize $ilk as a new RWA vault type.
discussion_link: $proposal_thread
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
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Poll: Add $ilk as a new Vault Type - $date_MONTH_DD,_YYYY

The Arbitration Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Community. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

This poll allows the MakerDAO governance community to signal their support or opposition to adding $ilk ($asset_name) as a new vault type in the Maker Protocol with the parameters below:

### Collateral Parameters

* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): $stability_fee
* [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): $debt_ceiling
* Minimum Vault Collateralization Ratio: $min_vault_cr
* Minimum SPV Collateralization Ratio: $min_spv_cr
* Minimum Underlying Collateralization Ratio: $min_underlying_cr
* Liquidation Process: $liquidation_process

Please review the following forum threads containing information about $ilk ($asset_name) to inform your position before voting.
* [Initial Collateral Application]($proposal_thread)
* [Real-World Finance Core Unit Risk Evaluation]($risk_link)
* [Protocol Engineering Core Unit Evaluation]($pe_link)
* [Oracles Core Unit Evaluation]($oracles_link)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* $ilk ($asset_name) will be onboarded in a future executive vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this executive vote will take place within 30 days of this poll passing, absent external factors.
* If the executive vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
