---
title: Ratification Poll for Special Purpose Fund for developing Proof-of-Performance for Viridian Cluster (MIP55c3-SP13) - January 9, 2023
summary: This MIP will set up a Special Purpose Fund of 500k DAI to fund a set of RWA projects to be undertaken by the Viridian Cluster 5 within the 6-month period of Jan 2023 - Jun 2023.
discussion_link: https://forum.makerdao.com/t/mip55c3-sp13-special-purpose-fund-for-developing-proof-of-performance-for-viridian-cluster/19077
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
start_date: 2023-01-09T16:00:00
end_date: 2023-01-23T16:00:00
---
# Ratification Poll for Special Purpose Fund for developing Proof-of-Performance for Viridian Cluster (MIP55c3-SP13) - January 9, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, January 9 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP55c3-SP13 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This MIP sets up a SPF of 500k DAI which will fund the due diligence, completion, and ongoing management and monitoring of the following projects: MIP65, MIP81, MIP88, and potentially others brought for evaluation to the community where Monetalis will act as Arranger in the next six months. It allows Maker to continue key RWA projects in the interim period until MetaDAOs can be launched and allows the Maker Community to evaluate the work of the Viridian Cluster ahead of a potential adoption of the cluster to a Protector MetaDAO. Importantly, it also allows the resources of the Viridian Cluster to work on the Protector MetaDAO implementation.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/510ab56d5fa18a266b898f5d4bd67e2b02c51bc3/MIP55/MIP55c3-Subproposals/MIP55c3-SP13.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP55c3SP13)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip55c3-sp13-special-purpose-fund-for-developing-proof-of-performance-for-viridian-cluster/19077)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, January 26.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
