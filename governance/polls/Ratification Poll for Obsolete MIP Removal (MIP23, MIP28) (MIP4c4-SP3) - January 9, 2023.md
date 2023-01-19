---
title: Ratification Poll for Obsolete MIP Removal (MIP23, MIP28) (MIP4c4-SP3) - January 9, 2023
summary: This subproposal removes MIP23 and MIP28 as the Domain framework they define has been superseded.
discussion_link: https://forum.makerdao.com/t/mip4c4-sp3-obsolete-mip-removal-mip23-mip28/18834
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
# Ratification Poll for Obsolete MIP Removal (MIP23, MIP28) (MIP4c4-SP3) - January 9, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, January 9 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP4c4-SP3 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*[MIP23: Domain Structure and Roles](https://mips.makerdao.com/mips/details/MIP23) and [MIP28: Operational Support (OS) Domain Definition](https://mips.makerdao.com/mips/details/MIP28) were passed towards the end of 2020. The Domain framework has since been superseded by the Core Unit Framework and all necessary transitions from the former to the latter are long finished. Therefore, these MIPs no longer serve any purpose in MakerDAO and should be marked as Obsolete in the interest of keeping the MIPs Framework slim and reflective of the status quo.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/6ce4b3a5a19a6a34b907716c608abaa0c969011e/MIP4/MIP4c4-Subproposals/MIP4c4-SP3.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP4c4SP3)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip4c4-sp3-obsolete-mip-removal-mip23-mip28/18834)
* [Removal Pull Request](https://github.com/makerdao/mips/pull/732)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, January 26.
* The above-referenced pull request will be merged into the MIPs repository.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).

