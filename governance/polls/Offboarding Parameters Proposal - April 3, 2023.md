---
title: Offboarding Parameters Proposal - April 3, 2023
summary: Signal your support or opposition to the proposed offboarding parameters for LINK-A, MATIC-A, YFI-A, and UNIV2USDCETH-A.
discussion_link: https://forum.makerdao.com/t/decentralized-collateral-scope-parameter-changes-1-april-2023/20302
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
start_date: 2023-04-03T16:00:00
end_date: 2023-04-06T16:00:00
---
# Poll: Offboarding Parameters Proposal - April 3, 2023

The Arbitration Facilitators have placed a Governance Poll into the voting system on behalf of the [Decentralized Collateral Scope Facilitators](https://mips.makerdao.com/mips/details/MIP104). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, April 3 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

### Vault Type Offboardings

The community can vote in this poll to express support or opposition to offboarding vault types LINK-A, MATIC-A, YFI-A, and UNIV2USDCETH-A with the following parameters:

- Set [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to **0%**.
- Set [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to **0**.
- Set [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to **0**.
- Set [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive) to **0**.
- Set [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) to **10,000%**.

Please review the originating [thread](https://forum.makerdao.com/t/decentralized-collateral-scope-parameter-changes-1-april-2023/20302) by the Facilitator of the [Decentralized Collateral Scope Framework](https://mips.makerdao.com/mips/details/MIP104) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The above changes will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then this change will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.
* The process outlined in [MIP62](https://mips.makerdao.com/mips/details/MIP62) will commence. The offboarding will be completed once the defined steps have been taken.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
