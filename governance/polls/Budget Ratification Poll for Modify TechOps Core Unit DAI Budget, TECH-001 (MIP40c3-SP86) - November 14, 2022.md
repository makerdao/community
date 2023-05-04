---
title: Budget Ratification Poll for Modify TechOps Core Unit DAI Budget, TECH-001 (MIP40c3-SP86) - November 14, 2022
summary: MIP40c3-SP86 renews the TechOps Core Unit (TECH-001) annual budget from February 1st 2023 through to January 31st 2024.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp86-modify-techops-core-unit-dai-budget/18290
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
   1: Approve Budget
   2: Reject Budget
start_date: 2022-11-14T16:00:00
end_date: 2022-11-28T16:00:00
---
# Budget Ratification Poll for Modify TechOps Core Unit DAI Budget, TECH-001 (MIP40c3-SP86) - November 14, 2022

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, November 14 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP84 being accepted and implemented in the Maker Protocol.

* **Option 1:** Approve 749,685 DAI seed transfer and 2,398,988 DAI streamed over twelve months.
* **Option 2:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*"The TechOps Core Unit handles system administration and technical support needs of Maker Protocol and its Core Units. TECH-001 strives to improve communication and collaboration between the developers, end users, and other MakerDAO stakeholders by applying DevOps principles to software delivery and first-class technical support. For the past year TECH-001 has been delivering infrastructure and support in an automated, safe, fast and repeatable way with the help from some of the modern Infrastructure Administration tools, while continuously monitoring and improving our process throughout".*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/247f11f556ad5b2be78525c7fa6c9966da76ecec/MIP40/MIP40c3-Subproposals/MIP40c3-SP86.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP86)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp86-modify-techops-core-unit-dai-budget/18290)
## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes votes for the 'Approve budget' option exceed the votes for the 'Reject budget' option AND the votes for the 'Approve budget' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, December 1.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
