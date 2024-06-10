---
title: Ratification Poll for MIP Amendment Subproposal (MIP102c2-SP30) - June 10, 2024
summary: This subproposal amends MIP104 to remove Monetalis as an Arranger; it also defines additional processes related to the removal of Arrangers.
discussion_link: https://forum.makerdao.com/t/mip102c2-sp30-mip-amendment-subproposal/23729
parameters:
    input_format:
        type: single-choice
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : plurality },
                { type : comparison, comparator : '>=', value: 10000 }
            ]
        }
        - {type : default, value : 2 }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2024-06-10T16:00:00
end_date: 2024-06-24T16:00:00
---
# Ratification Poll for MIP Amendment Subproposal (MIP102c2-SP30) - June 10, 2024

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for fourteen days beginning on Monday, June 10 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP102c2-SP30 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*Monetalis has not met its obligations as an Arranger, and its managed structures have underperformed financially. Governance should wind down the relationship to make room for a new Arranger.*

Please review the links below to inform your position on this proposal before voting.

* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/99bfdd469cc240c7a73524b1c413193125edf4a6/MIP102/MIP102c2-Subproposals/MIP102c2-SP30.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP102c2SP30)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip102c2-sp30-mip-amendment-subproposal/23729)
* [Amendment Pull Request](https://github.com/makerdao/mips/pull/1104)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**

* The Governance Facilitators will confirm its passage by marking the proposal **Accepted** on the [MIPs portal](https://mips.makerdao.com/mips/list) and across all other relevant governance mediums.
* The [associated Pull Request](https://github.com/makerdao/mips/pull/1104) will be merged.
* Any further work required to implement the proposal will be tasked to the relevant [Ecosystem Actors](https://mips.makerdao.com/mips/details/MIP101#7-professional-actors).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
