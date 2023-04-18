---
title: Offboarding Parameters for $ilk - $date_MONTH_DD,_YYYY
summary: $summary
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
# Poll: Offboarding Parameters for $ilk - $date_MONTH_DD,_YYYY

The Arbitration Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Community. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the implementation of the following risk parameters for offboarding $ilk.

**Proposed Offboarding Parameters**

* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam): 0.
* [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty): 0%.
* [Flat Kick Incentive (tip)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to $flat_kick_incentive.
* Duration of [Linear Interpolation Module (dss-lerp)](https://manual.makerdao.com/module-index/module-lerp) for liquidation ratio: $duration.
* [end](https://manual.makerdao.com/module-index/module-lerp#end) parameter of dss-lerp for liquidation ratio for each vault type as the following: $end.

Please review the discussion [thread]($proposal_thread) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The offboarding process for this vault will begin, as defined by [MIP62 - Collateral Offboarding Process](https://mips.makerdao.com/mips/details/MIP62).
* Offboarding items will be included in the soonest eligible executive vote, as the Protocol Engineering Core Unit's schedule allows.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
