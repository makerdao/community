---
title: Ratification Poll for Amend MIP51 to Remove MIP51c4 (Calendar Exceptions) (MIP4c2-SP28) - January 9, 2023
summary: The December exception in MIP51 has been made in a time with huge problems on getting anything done in the Maker on-chain governance. This amendment removes the December exception so we can continue to govern the protocol without a break.
discussion_link: https://forum.makerdao.com/t/mip4c2-sp28-amend-mip51-to-remove-mip51c4-calendar-exceptions/18675
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
# Ratification Poll for Amend MIP51 to Remove MIP51c4 (Calendar Exceptions) (MIP4c2-SP28) - January 9, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, January 9 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP4c2-SP28 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*[The December exception in MIP51](https://mips.makerdao.com/mips/details/MIP51#MIP51c4) has been made in a time with huge problems on getting anything done in the Maker on-chain governance. As we have a working delegate system now, this situation has improved a lot — both participation in on-chain polls as well as passing executives is not an issue anymore. This amendment removes the December exception so we can continue to govern the protocol without a break. As the December exception has been the only one so far, this amendment will also remove the containing component as well. If we ever need to make an amendment reintroducing an exception, the component can be reintroduced again.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/ff67ca27765f3c4b14425b6cf3aba20888da2d19/MIP4/MIP4c2-Subproposals/MIP4c2-SP28.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP4c2SP28)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip4c2-sp28-amend-mip51-to-remove-mip51c4-calendar-exceptions/18675)
* [Amendment Pull Request](https://github.com/makerdao/mips/pull/696)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, January 26.
* There will be a Monthly Governance Cycle in December.

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).


