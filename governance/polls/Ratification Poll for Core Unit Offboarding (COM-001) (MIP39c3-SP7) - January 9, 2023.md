---
title: Ratification Poll for Core Unit Offboarding (COM-001) (MIP39c3-SP7) - January 9, 2023
summary: This is an offboarding proposal for the GovComms Core Unit that includes both a golden parachute based on salary for the two permanent Core Unit members and retroactive MKR compensation for all contributors. Retroactive MKR compensation is denominated in DAI.
discussion_link: https://forum.makerdao.com/t/mip39c3-sp7-core-unit-offboarding-com-001/19068
parameters:
    input_format:
        type: rank-free
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : instant-runoff },
                { type : comparison, comparator : '>=', value: 10000 }
            ]
        }
        - {type : default, value : 4 }
    result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Approve Offboarding, 60,700 DAI Golden Parachute and 80% Multiplier for retroactive MKR - additional 85,854 DAI
   2: Approve Offboarding, 60,700 DAI Golden Parachute and 100% Multiplier for retroactive MKR - additional 107,317.50 DAI (CU-preferred)
   3: Approve Offboarding, 60,700 DAI Golden Parachute and 120% Multiplier for retroactive MKR  - additional 128,781 DAI Equivalent Value
   4: Reject Options
start_date: 2023-01-09T16:00:00
end_date: 2023-01-23T16:00:00
---
# Ratification Poll for Core Unit Offboarding (COM-001) (MIP39c3-SP7) - January 9, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, January 9 at 16:00 UTC.

**This is an instant-runoff vote.** 
- **You may rank any number of options that you would support in an executive vote.** 
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP39c3-SP7 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*MakerDAO is restructuring in accordance with the Endgame Plan. With the rejection of our last budget proposal, we’ve been advised by the leading delegates that work related to our mandate would be better executed as an ecosystem actor or as an in-house function within other stakeholder groups. The rejection of our budget proposal did not come with a complementary offboarding proposal, so we are putting it up ourselves. This Core Unit should be formally offboarded to support the transition, formalize the status of the team, and provide any “golden parachute” compensation and retroactive benefits due to contributors.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/ae0451f824bcb27572719af43a50d499b7ac1340/MIP39/MIP39c3-Subproposals/MIP39c3-SP7.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP39c3SP7)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip39c3-sp7-core-unit-offboarding-com-001/19068)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1, Option 2, or Option 3 achieve a majority AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
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

