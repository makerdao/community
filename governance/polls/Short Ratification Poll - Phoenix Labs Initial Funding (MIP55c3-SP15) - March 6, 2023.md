---
title: Short Ratification Poll for Phoenix Labs Initial Funding (MIP55c3-SP15) - March 6, 2023
summary: This SPF requests 50,000 DAI for legal and incorporation expenses of Phoenix Labs, an R&D company focused on creating new products for MakerDAO.
discussion_link: https://forum.makerdao.com/t/mip55c3-sp15-phoenix-labs-initial-funding-spf/19733
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
start_date: 2023-03-06T16:00:00
end_date: 2023-03-09T16:00:00
---
# Short Ratification Poll for Phoenix Labs Initial Funding (MIP55c3-SP15) - March 6, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, March 6 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to $mip_code being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This SPF provides the initial funding for Phoenix Labs to work on all the legal requirements that will allow us to launch [Spark Lend by April 9](https://forum.makerdao.com/t/announcing-phoenix-labs-and-spark-protocol/19731). This request aims to cover the expenses related to conducting legal research to determine the type of legal entity which best matches our objectives and —after deciding on the company structure— incorporate it in a way that allows us to fulfill all legal requirements to launch the Spark Protocol and a base front end.*

*This research will be available for any team approved by the Maker Governance that wants to build a decentralized product. With this, we will help future Ecosystem Actors join Maker in implementing the Endgame Plan.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/a0afd9cc462b5e4ca46952550c06beb33c31c9f2/MIP55/MIP55c3-Subproposals/MIP55c3-SP15.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP55c3SP15)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip55c3-sp15-phoenix-labs-initial-funding-spf/19733)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, March 9.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).

