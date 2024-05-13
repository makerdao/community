---
title: Ratification Poll for MIP Amendment Subproposal (MIP102c2-SP29) - May 13, 2024
summary: This subproposal will amend MIP101 to clarify for MKR holders their portion of SubDAO tokens, 25%, and the vesting schedule through which they will receive them.
discussion_link: https://forum.makerdao.com/t/mip102c2-sp29-mip-amendment-subproposals/23672
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
start_date: 2024-05-13T16:00:00
end_date: 2024-05-27T16:00:00
---
# Ratification Poll for MIP Amendment Subproposal (MIP102c2-SP29) - May 13, 2024

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for fourteen days beginning on Monday, May 13 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP102c2-SP29 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This subproposal aims to clarify for MKR holders their portion of SubDAO tokens, 25%, and the vesting schedule through which they will receive them. No specific technical implementation is prescribed, allowing flexibility in implementation details.*

*MKR holders fund the development of the initial product a SubDAO manages, MKR holders allocate funds or governance powers to the SubDAO, and MKR holders deserve a stake in SubDAOs after bearing that risk and outlay of resources.*

*Simultaneously, the MKR holder vesting schedule is more conservative than the farming emissions schedule, preventing immediate selling by existing MKR holders relative to farmers. The net effect is a marginally slower rate of SuDAO token inflation, because MKR holder vesting pushes some emissions further into the future in an effort to give MKR holders longer-term incentives. This also preserves the original intent for farming rewards to dominate emissions early in the SubDAO’s history, since they follow a halving-style emissions schedule.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/d96bab1a15b90fa2c1f9cf163050ae4ad69947c3/MIP102/MIP102c2-Subproposals/MIP102c2-SP29.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP102c2SP29)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip102c2-sp29-mip-amendment-subproposals/23672)
* [Amendment Pull Request](https://github.com/makerdao/mips/pull/1088)

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
