---
title: Ratification Poll for MIP Amendment Subproposal (MIP102c2-SP24) - February 12, 2024
summary: This subproposal seeks to establish a procedure for interpretation and appeal processes in accordance with articles 2 & 3 from MIP113.
discussion_link: https://forum.makerdao.com/t/mip102c2-sp24-mip-amendment-subproposal/23392
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
start_date: 2024-02-12T16:00:00
end_date: 2024-02-26T16:00:00
---
# Ratification Poll for MIP Amendment Subproposal (MIP102c2-SP24) - February 12, 2024

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for fourteen days beginning on Monday, February 12 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP102c2-SP24 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This subproposal seeks to establish a procedure for interpretation and appeal processes in accordance with [articles 2 & 3 from MIP113](https://mips.makerdao.com/mips/details/MIP113#2-atlas-immutable-alignment-artifact). Consider [this ongoing discussion](https://forum.makerdao.com/t/participation-requirements-for-ads-that-follow-sovereign-finance-avc/21800) as the primary motivation for this proposal, given that the issues raised remain unresolved. It will also be a strong motivation the [MIP102c2-SP19: MIP Amendment Subproposal](https://forum.makerdao.com/t/mip102c2-sp19-mip-amendment-subproposal/22335) which had the support from Sovereign Finance AVC and Aligned Delegates but never moved to formal submission.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/2a983461b1684423482fa396a7c038f0352790be/MIP102/MIP102c2-Subproposals/MIP102c2-SP24.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP102c2SP24)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip102c2-sp24-mip-amendment-subproposal/23392)
* [Amendment Pull Request](https://github.com/makerdao/mips/pull/1051)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The Governance Facilitators will confirm its passage by marking the proposal **Accepted** on the [MIPs portal](https://mips.makerdao.com/mips/list) and across all other relevant governance mediums.
* Any further work required to implement the proposal will be tasked to the relevant [Ecosystem Actors](https://mips.makerdao.com/mips/details/MIP101#7-professional-actors).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
